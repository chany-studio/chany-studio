import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import test from 'node:test';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const names=['ai-drama-production','cinematic-director'];
async function files(dir) {
  return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?files(join(dir,e.name)):[join(dir,e.name)]))).flat();
}
test('drama packages have resolvable local references and no client-specific content',async()=>{
  for (const name of names) {
    const dir=join(root,'skills',name);
    const skill=await readFile(join(dir,'SKILL.md'),'utf8');
    assert.match(skill,new RegExp(`^name: ${name}$`,'m'));
    assert.match(skill,/drama-production-integration\.md/);
    for(const file of await files(dir)) {
      if(!/\.(md|json|yaml|py)$/.test(file))continue;
      const body=await readFile(file,'utf8');
      assert.doesNotMatch(body,/온미|\bONME\b|노미|노아|\/Users\/chany|\.moai\/|onme\.global|source_session_id/);
      if(!file.endsWith('.md'))continue;
      for(const [,target] of body.matchAll(/\]\(([^)]+)\)/g)) {
        if(/^(https?:|#|mailto:)/.test(target))continue;
        assert.ok(existsSync(resolve(dirname(file),target.split('#')[0])),`${file}: missing ${target}`);
      }
    }
  }
  assert.match(await readFile(join(root,'skills/cinematic-director/LICENSE'),'utf8'),/MIT License/);
});
test('drama routing preserves execution ownership and scoped reference conditioning',async()=>{
  const read=path=>readFile(join(root,'skills',path),'utf8');
  const contract=await read('chany-studio/references/drama-production-integration.md');
  for(const route of ['chany-studio/SKILL.md','chany-studio/references/routing.md','auto-photo-production/SKILL.md']) {
    const body=await read(route);
    for(const name of names)assert.ok(body.includes('`'+name+'`'));
  }
  for(const owner of ['chany-media-production-loop','chany-video-assembly','chany-publication-review','image-asset-production'])assert.ok(contract.includes('`'+owner+'`'));
  assert.match(contract,/no forced `start_image`/);
  assert.match(contract,/never publication approval/);
  for(const path of ['chany-media-production-loop/SKILL.md','chany-studio/references/beginner-experience.md','chany-studio/references/media-job-ledger.md'])assert.match(await read(path),/drama-production-integration\.md/);
});
test('production checker regression cases pass and unfinished example cannot pass release',()=>{
  const dir=join(root,'skills/ai-drama-production');
  const py=process.env.CHANY_TEST_PYTHON||'python3';
  const run=args=>spawnSync(py,args,{encoding:'utf8',env:{...process.env,PYTHONDONTWRITEBYTECODE:'1'}});
  const cases=run(['-m','unittest','discover','-s',join(dir,'scripts'),'-p','test_*.py']);
  assert.equal(cases.status,0,cases.stdout+cases.stderr);
  assert.match(cases.stderr,/Ran 24 tests/);
  const args=[join(dir,'scripts/check_production.py'),join(dir,'assets/production-manifest.example.json'),'--mode'];
  const plan=run([...args,'plan']);
  assert.equal(plan.status,0,plan.stdout+plan.stderr);
  assert.ok(JSON.parse(plan.stdout).warnings.length>0);
  const release=run([...args,'release']);
  assert.equal(release.status,1,release.stdout+release.stderr);
  assert.ok(JSON.parse(release.stdout).errors.length>0);
});
