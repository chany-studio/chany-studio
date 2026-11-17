import { lstat, mkdir, readlink, symlink, unlink, realpath } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const source = fileURLToPath(new URL('../integrations/codex/chany-studio-entry', import.meta.url));

export async function manageEntry(destination, target, remove = false) {
  let existing;
  try { existing = await lstat(destination); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (existing) {
    if (!existing.isSymbolicLink() || resolve(dirname(destination), await readlink(destination)) !== resolve(target)) {
      throw new Error('Existing entry is not managed by this checkout; leaving it untouched.');
    }
    if (remove) await unlink(destination);
    return remove ? 'removed' : 'already installed';
  }
  if (remove) return 'already absent';
  await realpath(join(target, 'SKILL.md'));
  await mkdir(dirname(destination), { recursive: true });
  await symlink(target, destination, 'dir');
  return 'installed';
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  if (args.length !== 1 || !['--install', '--remove'].includes(args[0])) {
    console.error('Usage: node scripts/install-codex-entry.mjs --install|--remove'); process.exitCode = 1;
  } else {
    const destination = join(homedir(), '.agents/skills/chany-studio-entry');
    try { console.log(await manageEntry(destination, source, args[0] === '--remove')); }
    catch (error) { console.error(error.message); process.exitCode = 1; }
  }
}
