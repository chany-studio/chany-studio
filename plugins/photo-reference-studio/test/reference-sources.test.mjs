import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');

test('compact directory has six distinct sources with live owners and bounded search defaults', async () => {
  const config = JSON.parse(await read('skills/chany-studio/references/reference-sources.json'));
  assert.deepEqual(config.sources.map(x => x.id), ['pinterest', 'production-paradise', 'meta-ad-library', 'ads-of-the-world', 'vimeo-staff-picks', 'motionographer']);
  assert.equal(config.max_sources_per_search, 2);
  assert.equal(config.default_still_source, 'pinterest');
  assert.equal(config.default_still_count, 6);
  assert.equal(config.default_video_count, 3);
  for (const source of config.sources) {
    assert.equal(new URL(source.url).protocol, 'https:');
    assert.match(await read(`skills/${source.owner}/SKILL.md`), /name:/);
  }
  assert.match(await read('skills/chany-studio/references/reference-board-defaults.md'), /zero skips research/);
});

test('retired gallery is absent from shipped skills, manifests, runtime and public guides', async () => {
  async function walk(dir) {
    const out = [];
    for (const e of await readdir(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name === 'test') continue;
      const p = join(dir, e.name);
      if (e.isDirectory()) out.push(...await walk(p));
      else if (/\.(md|json|yaml|mjs|html|tmpl)$/.test(p)) out.push(p);
    }
    return out;
  }
  const { fileURLToPath } = await import('node:url');
  const files = [...await walk(fileURLToPath(root)), ...await walk(fileURLToPath(new URL('../../../docs/', import.meta.url)))];
  for (const file of files) assert.doesNotMatch(await readFile(file, 'utf8'), /meigen|chany-ai-prompt-reference|combined-reference-board/i, file);
});

test('campaign archive no longer requires multiple providers and video evidence is explicit', async () => {
  const policy = await read('skills/chany-award-ad-reference/references/source-policy.md');
  assert.doesNotMatch(policy, /dandad\.org|oneclub\.org|at least two archives/);
  assert.match(policy, /adsoftheworld\.com/);
  assert.match(policy, /chany-video-reference-ingest/);
  assert.match(await read('skills/chany-award-ad-reference/SKILL.md'), /Never infer award status/);
});
