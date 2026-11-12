import assert from 'node:assert/strict';
import { readFile, readdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const names = ['adobe-video-pipeline', 'adobe-after-effects-production', 'adobe-premiere-finishing', 'image-asset-production'];
async function files(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map(e => e.isDirectory() ? files(join(dir,e.name)) : [join(dir,e.name)]))).flat();
}

test('native skill packages resolve their local references without client files', async () => {
  for (const name of names) {
    const dir = join(root, 'skills', name);
    const body = await readFile(join(dir, 'SKILL.md'), 'utf8');
    assert.match(body, new RegExp(`^name: ${name}$`, 'm'));
    assert.match(body, /native-production-integration\.md/);
    for (const file of await files(dir)) {
      if (!/\.(md|yaml|py)$/.test(file)) continue;
      const text = await readFile(file, 'utf8');
      assert.doesNotMatch(text, /\/Users\/chany|ngii_|NGII|03_제작소스|04_편집/);
      if (!file.endsWith('.md')) continue;
      for (const [, target] of text.matchAll(/\]\(([^)]+)\)/g)) {
        if (/^https?:|^#/.test(target)) continue;
        assert.ok(existsSync(resolve(dirname(file), target.split('#')[0])), `${name}: missing ${target}`);
      }
    }
  }
});

test('native production is reachable and preserves generation and publication ownership', async () => {
  const routing = await readFile(join(root,'skills/chany-studio/references/routing.md'),'utf8');
  const contract = await readFile(join(root,'skills/chany-studio/references/native-production-integration.md'),'utf8');
  for (const name of names) assert.ok(routing.includes('`'+name+'`'));
  for (const owner of ['chany-media-production-loop','chany-publication-review','chany-video-assembly']) assert.ok(contract.includes('`'+owner+'`'));
  assert.match(contract,/may not be able to control host Adobe applications/);
  assert.match(contract,/technical checks never grant publication approval/);
});

const py = process.env.CHANY_TEST_PYTHON || 'python3';
const run = (args) => spawnSync(py,args,{encoding:'utf8'});
test('image probe distinguishes real alpha, opaque art and empty art, preserving existing reports', async t => {
  if (run(['-c','import PIL']).status !== 0) return t.skip('Pillow not installed in test Python');
  const dir = await mkdtemp(join(tmpdir(),'chany-image-probe-'));
  try {
    const script = join(root,'skills/image-asset-production/scripts/probe_image_assets.py');
    assert.equal(run(['-c', `from PIL import Image
from pathlib import Path
p=Path(${JSON.stringify(dir)})
a=Image.new('RGBA',(8,8),(0,0,0,0));a.putpixel((3,3),(255,0,0,255));a.save(p/'alpha.png')
Image.new('RGB',(8,8),'white').save(p/'opaque.png')
Image.new('RGBA',(8,8),(0,0,0,0)).save(p/'empty.png')`]).status,0);
    const good=run([script,join(dir,'alpha.png'),'--require-alpha']);
    assert.equal(good.status,0,good.stderr);
    assert.deepEqual(JSON.parse(good.stdout).assets[0].visible_bbox_alpha_gt_0,[3,3,4,4]);
    for (const [name,issue] of [['opaque.png','NO_EFFECTIVE_TRANSPARENCY'],['empty.png','EMPTY_VISIBLE_IMAGE']]) {
      const result=run([script,join(dir,name),'--require-alpha']);
      assert.equal(result.status,1);
      assert.ok(JSON.parse(result.stdout).assets[0].issues.includes(issue));
    }
    const report=join(dir,'report.json'); await writeFile(report,'preserve me');
    assert.notEqual(run([script,join(dir,'alpha.png'),'--output',report]).status,0);
    assert.equal(await readFile(report,'utf8'),'preserve me');
  } finally { await rm(dir,{recursive:true,force:true}); }
});

test('media probe validates a real encode and rejects missing audio and invalid fps', async t => {
  if (spawnSync('ffmpeg',['-version']).status !== 0 || spawnSync('ffprobe',['-version']).status !== 0) return t.skip('ffmpeg/ffprobe unavailable');
  const dir=await mkdtemp(join(tmpdir(),'chany-media-probe-'));
  try {
    const media=join(dir,'sample.mp4');
    const make=spawnSync('ffmpeg',['-v','error','-n','-f','lavfi','-i','color=c=blue:s=64x48:r=10','-t','1','-c:v','mpeg4',media],{encoding:'utf8'});
    assert.equal(make.status,0,make.stderr);
    const script=join(root,'skills/adobe-video-pipeline/scripts/probe_media.py');
    const good=run([script,media,'--width','64','--height','48','--fps','10','--duration','1']);
    assert.equal(good.status,0,good.stderr);
    assert.equal(JSON.parse(good.stdout).expectation_result,'PASS');
    const bad=run([script,media,'--require-audio']);
    assert.equal(bad.status,1); assert.equal(JSON.parse(bad.stdout).expectation_result,'FAIL');
    assert.notEqual(run([script,media,'--fps','1/0']).status,0);
    const report=join(dir,'report.json'); await writeFile(report,'preserve me');
    assert.notEqual(run([script,media,'--output',report]).status,0);
    assert.equal(await readFile(report,'utf8'),'preserve me');
  } finally { await rm(dir,{recursive:true,force:true}); }
});
