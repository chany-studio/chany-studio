import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Offline only. The reference owner obtains actual data and assesses product fit.
const count = value => typeof value === 'number' && Number.isSafeInteger(value) && value >= 0 ? value : null;
const date = value => typeof value === 'string' && Number.isFinite(Date.parse(value)) ? Date.parse(value) : null;
export function canonicalInstagramUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || !['instagram.com', 'www.instagram.com'].includes(url.hostname) || url.username || url.password) return null;
    const match = url.pathname.match(/^\/(p|reel|reels)\/([A-Za-z0-9_-]+)\/?$/);
    return match ? `https://www.instagram.com/p/${match[2]}/` : null;
  } catch { return null; }
}

export function rankInstagramReferences(input) {
  if (!input || !Array.isArray(input.candidates)) throw new Error('candidates 배열이 필요합니다.');
  const limit = input.limit ?? 3;
  if (!Number.isSafeInteger(limit) || limit < 0 || limit > 100) throw new Error('후보 수는 0~100 정수여야 합니다.');
  if (limit === 0) return { status: 'skipped', candidates: [], comparison_metrics: [], submission_allowed: false };
  const sort = input.sort ?? 'balanced';
  if (!['balanced', 'views', 'plays', 'likes', 'shares'].includes(sort)) throw new Error('지원하지 않는 정렬 기준입니다.');
  const observed = date(input.observed_at);
  if (observed === null) throw new Error('지표 확인 시각이 필요합니다.');
  const since = input.published_since === undefined ? observed - 180 * 86400000 : date(input.published_since);
  if (input.published_since !== undefined && (since === null || since > observed)) throw new Error('게시 기간을 확인해 주세요.');
  const format = input.format ?? 'reel';
  if (!['reel', 'image', 'carousel'].includes(format)) throw new Error('한 번에 같은 형식끼리 비교합니다.');
  const rejected = [], unranked = [], unique = new Map(), history = new Map(), conflicts = new Set();
  for (const candidate of input.candidates) {
    const raw = candidate?.data ?? {};
    const url = canonicalInstagramUrl(raw.url);
    const published = date(raw.timestamp);
    const fit = candidate?.fit;
    const reject = reason => rejected.push({ url, reason });
    if (raw.error || raw.errorMessage || !url) { reject('invalid-source-or-error'); continue; }
    if (candidate.format !== format) { reject('different-format'); continue; }
    if (!fit || !Number.isInteger(fit.score) || fit.score < 2 || fit.score > 3 || typeof fit.reason !== 'string' || !fit.reason.trim() || !Array.isArray(fit.evidence) || !fit.evidence.some(x => typeof x === 'string' && x.trim())) { reject('product-fit-not-established'); continue; }
    if (published !== null && published > observed) { reject('future-publication'); continue; }
    if (since !== null && (published === null || published < since)) { reject('outside-or-unknown-publication-window'); continue; }
    // Explicit map from live schema. No guessing shares from comments, interactions or reposts.
    const fields = candidate.fields ?? {};
    const metrics = {};
    for (const name of ['views', 'plays', 'likes', 'shares']) {
      const mapping = fields[name];
      const value = mapping && typeof mapping.field === 'string' && typeof mapping.definition === 'string' && mapping.definition.trim()
        ? count(raw[mapping.field]) : null;
      metrics[name] = { value, field: mapping?.field ?? null, definition: mapping?.definition ?? null };
    }
    const item = { url, source_url: raw.url, published_at: raw.timestamp ?? null, observed_at: input.observed_at,
      format, fit, metrics, inspection: candidate.inspection ?? 'metadata-only' };
    // Prefer a complete enrichment record; never add counts or merge snapshots.
    if (conflicts.has(url)) { reject('conflicting-duplicate'); continue; }
    const prior = unique.get(url);
    if (prior) {
      const names = ['views', 'plays', 'likes', 'shares'];
      const incompatible = history.get(url).some(previous => date(previous.published_at) !== published || previous.fit.score !== fit.score || names.some(name => {
        const a = previous.metrics[name], b = metrics[name];
        return a.value !== null && b.value !== null && (a.value !== b.value || a.definition !== b.definition);
      }));
      if (incompatible) {
        unique.delete(url); conflicts.add(url); reject('conflicting-duplicate'); continue;
      }
      history.get(url).push(item);
      const quality = entry => (sort !== 'balanced' && entry.metrics[sort].value !== null ? 10 : 0) + names.filter(name => entry.metrics[name].value !== null).length;
      const better = quality(item) > quality(prior) || (quality(item) === quality(prior) && JSON.stringify(item.metrics) < JSON.stringify(prior.metrics));
      if (better) unique.set(url, item);
      reject('duplicate-source'); continue;
    }
    unique.set(url, item);
    history.set(url, [item]);
  }
  const all = [...unique.values()];
  let comparisonMetrics;
  if (sort === 'balanced') {
    const common = name => all.length > 0 && all.every(x => x.metrics[name].value !== null && x.metrics[name].definition === all[0].metrics[name].definition);
    const exposure = common('views') ? 'views' : common('plays') ? 'plays' : null;
    comparisonMetrics = [exposure, ...['likes', 'shares'].filter(common)].filter(Boolean);
  } else {
    comparisonMetrics = [sort];
  }
  let eligible = [];
  for (const item of all) {
    if (!comparisonMetrics.length || comparisonMetrics.some(name => item.metrics[name].value === null)) unranked.push({ ...item, reason: 'requested-or-common-metric-unavailable' });
    else eligible.push(item);
  }
  // Explicit metric with unlike definitions is not a valid single leaderboard.
  if (sort !== 'balanced' && new Set(eligible.map(x => x.metrics[sort].definition)).size > 1) {
    unranked.push(...eligible.map(x => ({ ...x, reason: 'incomparable-metric-definitions' })));
    eligible = [];
  }
  for (const item of eligible) {
    item.popularity_score = comparisonMetrics.reduce((sum, name) => {
      const lower = eligible.filter(x => x.metrics[name].value < item.metrics[name].value).length;
      const equal = eligible.filter(x => x.metrics[name].value === item.metrics[name].value).length;
      return sum + (lower + (equal - 1) / 2) / Math.max(1, eligible.length - 1);
    }, 0) / comparisonMetrics.length;
  }
  eligible.sort((a, b) => b.fit.score - a.fit.score || b.popularity_score - a.popularity_score || a.url.localeCompare(b.url));
  return { status: eligible.length ? 'ranked' : 'insufficient-evidence', scope: 'observed-candidates-only',
    comparison_metrics: comparisonMetrics, excluded_metrics: ['views', 'plays', 'likes', 'shares'].filter(x => !comparisonMetrics.includes(x)),
    sample_size: eligible.length, requested_count: limit, missing_count: Math.max(0, limit - eligible.length),
    candidates: eligible.slice(0, limit), unranked, rejected,
    warning: '제품 적합도 우선, 같은 형식의 관찰 표본 안에서만 비교합니다. 인기 지표는 매출 증거가 아니며 영상 시청을 대신하지 않습니다.',
    submission_allowed: false };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = rankInstagramReferences(JSON.parse(await readFile(process.argv[2], 'utf8')));
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (error) { process.stderr.write(`${error.message}\n`); process.exitCode = 2; }
}
