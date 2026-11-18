import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Offline normalization of paired host search results. No fetching, scraping,
// display verification, rights determination or paid calls.
function parseUrl(value) {
  try {
    if (typeof value !== 'string') return null;
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password && !url.port ? url : null;
  } catch { return null; }
}

export function selectPinterestCandidates(rows, target = 6) {
  if (!Array.isArray(rows)) throw new TypeError('Expected paired search-result rows');
  if (!Number.isSafeInteger(target) || target < 1) throw new TypeError('Expected a positive target');
  const pins = new Set(), assets = new Set(), candidates = [];
  let rejected = 0;
  for (const row of rows) {
    const pin = parseUrl(row?.source_url), preview = parseUrl(row?.preview_image_url);
    const match = pin?.pathname.match(/^\/pin\/(?:[a-z0-9%-]+--)?(\d+)\/?$/i);
    const pinHost = pin && (pin.hostname === 'pinterest.com' || pin.hostname.endsWith('.pinterest.com'));
    const imageMatch = preview?.pathname.match(/^\/(?:\d+x|originals)\/([a-f0-9]{2}\/[a-f0-9]{2}\/[a-f0-9]{2}\/[^/]+\.(?:jpe?g|png|webp))$/i);
    if (!pinHost || !match || preview?.hostname !== 'i.pinimg.com' || !imageMatch || row?.paired_in_result !== true) {
      rejected++; continue;
    }
    const assetKey = imageMatch[1];
    if (pins.has(match[1]) || assets.has(assetKey)) { rejected++; continue; }
    pins.add(match[1]); assets.add(assetKey);
    // Keep the actually observed Pin path, including slug. Drop tracking data.
    pin.search = ''; pin.hash = ''; preview.search = ''; preview.hash = '';
    candidates.push({
      number: candidates.length + 1, pin_id: match[1], provider: 'Pinterest',
      source_url: pin.href, preview_image_url: preview.href,
      title: typeof row.title === 'string' ? row.title.slice(0, 500) : '',
      query: typeof row.query === 'string' ? row.query.slice(0, 200) : '',
      provenance: 'search-paired', pin_page_verified: false,
      display_confirmed: false, rights_status: 'direction-only',
    });
  }
  return { requested: target, candidates, rejected, candidate_count: candidates.length,
    displayed_count: 0, missing_visible: target, board_complete: false };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const input = JSON.parse(await readFile(process.argv[2], 'utf8'));
    process.stdout.write(JSON.stringify(selectPinterestCandidates(input.results, input.target_count ?? 6), null, 2) + '\n');
  } catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 2; }
}
