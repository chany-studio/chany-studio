import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

test('Work archive preserves all shared skills without desktop MCP configuration', t => {
  const dir = mkdtempSync(join(tmpdir(), 'chany-work-package-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const archive = join(dir, 'plugin.zip');
  const build = spawnSync('python3', ['scripts/package-chatgpt-work.py', archive], { encoding: 'utf8' });
  assert.equal(build.status, 0, build.stderr);
  const inspect = spawnSync('python3', ['-c', `
import json, sys
from pathlib import Path
from zipfile import ZipFile
with ZipFile(sys.argv[1]) as z:
 names=z.namelist()
 m=json.loads(z.read('photo-reference-studio/.codex-plugin/plugin.json'))
 original=json.loads(Path('plugins/photo-reference-studio/.codex-plugin/plugin.json').read_text())
 assert m['name']==original['name'] and m['version']==original['version']
 assert m['requires_local_executor'] is False
 assert 'mcpServers' not in m and 'apps' not in m and 'hooks' not in m
 assert all('/.mcp.json' not in n and '/.app.json' not in n and '/hooks/' not in n for n in names)
 assert sum(n.endswith('/SKILL.md') for n in names)==44
 for n in names:
  if '/skills/' in n:
   assert z.read(n)==(Path('plugins')/n).read_bytes(), n
 assert original['mcpServers']=='./.mcp.json'
 print('44 shared skills unchanged; cloud manifest separated; desktop configuration retained.')
`, archive], { encoding: 'utf8' });
  assert.equal(inspect.status, 0, inspect.stderr);
  const repeat = spawnSync('python3', ['scripts/package-chatgpt-work.py', archive], { encoding: 'utf8' });
  assert.notEqual(repeat.status, 0, 'Existing release archive must not be overwritten.');
});
