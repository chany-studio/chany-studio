import { readFileSync, existsSync, realpathSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { homedir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export function resolveInstalled(inventory, codexHome) {
  const matches = (inventory.installed ?? []).filter(p => p.pluginId === 'photo-reference-studio@photo-reference-studio');
  if (matches.length !== 1 || !matches[0].installed || !matches[0].enabled) {
    throw new Error('Chany Studio is missing, disabled, or ambiguous in the installed plugin inventory.');
  }
  const plugin = matches[0];
  if (typeof plugin.version !== 'string' || !/^[0-9][A-Za-z0-9.+_-]*$/.test(plugin.version)) {
    throw new Error('Installed plugin version is invalid.');
  }
  const root = join(codexHome, 'plugins/cache/photo-reference-studio/photo-reference-studio', plugin.version);
  const manifest = JSON.parse(readFileSync(join(root, '.codex-plugin/plugin.json'), 'utf8'));
  if (manifest.name !== 'photo-reference-studio' || manifest.version !== plugin.version) {
    throw new Error('Installed cache manifest does not match the active plugin version.');
  }
  const paths = {
    studio: join(root, 'skills/chany-studio/SKILL.md'),
    referenceBoard: join(root, 'skills/chany-reference-board/SKILL.md'),
    instagramResearch: join(root, 'skills/chany-studio/references/apify-instagram-research.md'),
  };
  for (const file of Object.values(paths)) if (!existsSync(file)) throw new Error('Installed Chany workflow is incomplete.');
  return { version: plugin.version, ...paths };
}

export function currentInstalled() {
  const home = process.env.CODEX_HOME || join(homedir(), '.codex');
  // Use supported CLI discovery only. No private app IPC, config or token reads.
  const candidates = ['codex', '/Applications/ChatGPT.app/Contents/Resources/codex-cli/bin/codex', '/Applications/Codex.app/Contents/Resources/codex'];
  let result;
  for (const cli of candidates) {
    result = spawnSync(cli, ['plugin', 'list', '--marketplace', 'photo-reference-studio', '--json'], { encoding: 'utf8', timeout: 30000, maxBuffer: 16 * 1024 * 1024 });
    if (result.error?.code === 'ENOENT') continue;
    if (result.error || result.status !== 0) throw new Error('Codex plugin inventory could not be read.');
    return resolveInstalled(JSON.parse(result.stdout), home);
  }
  throw new Error('Codex CLI was not found; installed Chany version cannot be verified.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(resolve(process.argv[1]))).href) {
  try { process.stdout.write(JSON.stringify(currentInstalled(), null, 2) + '\n'); }
  catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1; }
}
