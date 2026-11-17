import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, existsSync, readlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { resolveInstalled } from '../integrations/codex/chany-studio-entry/resolve.mjs';
import { manageEntry } from '../scripts/install-codex-entry.mjs';

function fixture(t) {
  const home = mkdtempSync(join(tmpdir(), 'chany-entry-'));
  t.after(() => rmSync(home, { recursive: true, force: true }));
  const plugin = { pluginId: 'photo-reference-studio@photo-reference-studio', version: '2.21.0', installed: true, enabled: true };
  const root = join(home, 'plugins/cache/photo-reference-studio/photo-reference-studio', plugin.version);
  for (const file of ['.codex-plugin/plugin.json', 'skills/chany-studio/SKILL.md', 'skills/chany-reference-board/SKILL.md', 'skills/chany-studio/references/apify-instagram-research.md']) {
    mkdirSync(join(root, file, '..'), { recursive: true });
    writeFileSync(join(root, file), file.endsWith('.json') ? JSON.stringify({ name: 'photo-reference-studio', version: plugin.version }) : '# Test');
  }
  return { home, root, plugin, inventory: { installed: [plugin] } };
}

test('resolves only the enabled installed version, ignoring a newer cache', t => {
  const f = fixture(t);
  mkdirSync(join(f.home, 'plugins/cache/photo-reference-studio/photo-reference-studio/9.0.0'), { recursive: true });
  assert.equal(resolveInstalled(f.inventory, f.home).studio, join(f.root, 'skills/chany-studio/SKILL.md'));
  f.plugin.enabled = false;
  assert.throws(() => resolveInstalled(f.inventory, f.home), /disabled/);
});
test('rejects missing, ambiguous, unsafe or mismatched installation', t => {
  const f = fixture(t);
  assert.throws(() => resolveInstalled({ installed: [] }, f.home), /missing/);
  assert.throws(() => resolveInstalled({ installed: [f.plugin, f.plugin] }, f.home), /ambiguous/);
  assert.throws(() => resolveInstalled({ installed: [{ ...f.plugin, version: '../outside' }] }, f.home), /invalid/);
  writeFileSync(join(f.root, '.codex-plugin/plugin.json'), JSON.stringify({ name: 'photo-reference-studio', version: '1.0.0' }));
  assert.throws(() => resolveInstalled(f.inventory, f.home), /does not match/);
});
test('rejects incomplete workflows', t => {
  const f = fixture(t);
  rmSync(join(f.root, 'skills/chany-reference-board/SKILL.md'));
  assert.throws(() => resolveInstalled(f.inventory, f.home), /incomplete/);
});
test('entry installation is idempotent, removable, and preserves user files', async t => {
  const f = fixture(t);
  const target = join(f.root, 'skills/chany-studio');
  const dest = join(f.home, 'personal/chany-studio-entry');
  assert.equal(await manageEntry(dest, target), 'installed');
  assert.equal(readlinkSync(dest), target);
  assert.equal(await manageEntry(dest, target), 'already installed');
  assert.equal(await manageEntry(dest, target, true), 'removed');
  assert.equal(existsSync(dest), false);
  mkdirSync(dest);
  writeFileSync(join(dest, 'user.txt'), 'preserve');
  await assert.rejects(manageEntry(dest, target), /untouched/);
  await assert.rejects(manageEntry(dest, target, true), /untouched/);
  assert.ok(existsSync(join(dest, 'user.txt')));
});
