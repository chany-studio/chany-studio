import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { planReference } from '../skills/chany-studio/scripts/reference-plan.mjs';
import { checkGenerationRequest } from '../skills/chany-studio/scripts/check-generation-request.mjs';

const fixture = JSON.parse(await readFile(new URL('../skills/chany-studio/assets/reference-plan.example.json', import.meta.url), 'utf8'));
const plan = () => structuredClone(fixture);
const image = (id = 'offer') => ({ role: 'image_references', value: id });
const video = { role: 'video_references', value: 'source-video' };
const check = (params, rest = {}) => checkGenerationRequest({ params, ...rest });

test('layout insertion keeps base separate from product authority without authorizing execution', () => {
  const input = plan(), before = structuredClone(input);
  const p = planReference(input);
  assert.equal(p.operation, 'reference-insert');
  assert.equal(p.inputs[0].role, 'identity-authority');
  assert.equal(p.inputs[1].role, 'base-layout');
  assert.ok(p.prompt.includes(input.target.region));
  assert.deepEqual(p.protected_elements, input.target.preserve);
  assert.equal(p.submission_allowed, false);
  assert.deepEqual(input, before);
});

test('service screen uses actual UI authority and retains the current production owner', () => {
  const input = plan();
  input.subject = { kind: 'service', sources: [{ id: 'real-ui', purpose: 'actual booking screen' }], locks: ['only existing UI features'] };
  input.current_owner = 'chany-ad-creative';
  input.approved_copy = ['예약을 간편하게'];
  const p = planReference(input);
  assert.equal(p.status, 'prepared');
  assert.equal(p.next_owner, 'chany-ad-creative');
  assert.equal(p.inputs[0].id, 'real-ui');
  assert.ok(p.prompt.includes('예약을 간편하게'));
  assert.ok(p.prompt.includes('Do not invent'));
});

test('blank or non-string source facts cannot produce a prepared insertion plan', () => {
  for (const bad of ['', '  ', null, 7, {}]) {
    for (const field of ['id', 'purpose']) {
      const input = plan(); input.subject.sources[0][field] = bad;
      assert.equal(planReference(input).status, 'needs-input');
    }
    const input = plan(); input.subject.locks = [bad];
    assert.equal(planReference(input).status, 'needs-input');
    const target = plan(); target.target.region = bad;
    assert.equal(planReference(target).status, 'needs-resolution');
    const preserved = plan(); preserved.target.preserve = [bad];
    assert.equal(planReference(preserved).status, 'needs-resolution');
  }
  const blankRef = plan(); blankRef.reference.id = ' ';
  assert.equal(planReference(blankRef).status, 'needs-reference');
  const exact = plan(); exact.target.exact_untouched_pixels = 'true';
  assert.equal(planReference(exact).status, 'needs-resolution');
});

test('billing switches require actual booleans and cannot evade mutual exclusion', () => {
  for (const key of ['get_cost', 'use_free_gens', 'use_unlim']) {
    for (const bad of ['true', 'false', 1, null, {}]) assert.equal(check({ model: 'gpt_image_2_6', [key]: bad }).ok, false);
    assert.equal(check({ model: 'gpt_image_2_6', [key]: true }).ok, true);
  }
  assert.equal(check({ model: 'gpt_image_2_6', use_free_gens: true, use_unlim: true }).ok, false);
  assert.equal(check({ model: 'gpt_image_2_6', folder_id: {} }).ok, false);
});

test('missing reference starts discovery while an unread URL cannot become inspected evidence', () => {
  const input = plan(); delete input.reference;
  assert.equal(planReference(input).next_owner, 'chany-reference-board');
  input.reference = { id: 'post-url', inspected: false };
  assert.equal(planReference(input).status, 'needs-inspection');
});

test('exact protected pixels require deterministic composition and never silently become a reshoot', () => {
  const input = plan(); input.target.exact_untouched_pixels = true;
  assert.equal(planReference(input).status, 'needs-resolution');
  input.capabilities.deterministic_mask_composite = true;
  assert.equal(planReference(input).execution, 'deterministic-mask-composite');
  input.intent = 'reshoot';
  assert.equal(planReference(input).status, 'needs-resolution');
});

test('inspiration can guide a new scene but does not silently authorize base-image editing', () => {
  const input = plan(); input.reference.edit_authorized = false;
  assert.equal(planReference(input).status, 'needs-resolution');
  input.intent = 'reshoot';
  assert.equal(planReference(input).operation, 'reference-reshoot');
});

test('2.6 rejects the old variant parameter and reference-free SVG cannot discard authority', () => {
  assert.equal(check({ model: 'gpt_image_2_6', variant: 'sunburst' }).ok, false);
  assert.equal(check({ model: 'gpt_image_2_6_flare', output_format: 'png', medias: [image()] }).ok, true);
  assert.equal(check({ model: 'gpt_image_2_6', output_format: 'svg', medias: [image()] }).ok, false);
  const vector = check({ model: 'gpt_image_2_6', output_format: 'svg' });
  assert.equal(vector.ok, true);
  assert.equal(vector.submission_allowed, false);
  assert.equal(vector.runtime_check_required, true);
});

test('native GIF catches invalid frame options and host output-count ambiguity', () => {
  const p = { model: 'gpt_image_2_6', output_format: 'gif', size: '288x288', frame_count: 9, frame_duration_ms: 200 };
  assert.equal(check(p).ok, true);
  assert.equal(check({ ...p, size: '300x300' }).ok, false);
  assert.equal(check({ ...p, frame_count: 65 }).ok, false);
  assert.equal(check({ ...p, output_format: 'png' }).ok, false);
  assert.equal(check({ ...p, count: 2, batch_size: 2 }).ok, false);
  assert.equal(check({ ...p, count: 2, use_unlim: true }).ok, false);
});

test('direct-MCP checker rejects raw URLs, unsupported media roles and excess authority inputs', () => {
  const p = { model: 'gpt_image_2_6', medias: [image('https://example.com/product.jpg')] };
  assert.equal(check(p).ok, false);
  assert.equal(check({ ...p, medias: [{ role: 'image', value: 'id' }] }).ok, false);
  assert.equal(check({ ...p, medias: Array.from({ length: 17 }, (_, i) => image(`id-${i}`)) }).ok, false);
});

test('Gemini duration depends on references and first/last-frame mode', () => {
  const p = { model: 'gemini_omni_flash_1_2', mode: 'image-to-video', duration: 15, medias: [{ role: 'start_image', value: 'start' }] };
  assert.equal(check(p).ok, true);
  assert.equal(check({ ...p, medias: [...p.medias, { role: 'end_image', value: 'end' }] }).ok, false);
  assert.equal(check({ model: p.model, mode: 'reference-to-video', duration: 15, medias: [image()] }).ok, false);
  assert.equal(check({ model: p.model, mode: 'reference-to-video', duration: 10, medias: [image()] }).ok, true);
});

test('Gemini edit and extension measure source length separately from added seconds', () => {
  const p = { model: 'gemini_omni_flash_1_2', mode: 'edit', medias: [video] };
  assert.equal(check(p, { source_duration: 16 }).ok, false);
  assert.equal(check(p, { source_duration: 15 }).ok, true);
  assert.equal(check({ ...p, duration: 3 }, { source_duration: 15 }).ok, false);
  assert.equal(check({ ...p, mode: 'extend', duration: 10 }, { source_duration: 30 }).ok, true);
  assert.equal(check({ ...p, mode: 'extend', duration: 11 }, { source_duration: 30 }).ok, false);
});

test('Seedance Flash cannot inherit full resolution and reference limits', () => {
  const p = { model: 'seedance_2_5_flash', mode: 'omni_reference', resolution: '4k', medias: [image()] };
  assert.equal(check(p).ok, false);
  assert.equal(check({ ...p, model: 'seedance_2_5' }).ok, true);
  assert.equal(check({ ...p, resolution: '720p', medias: Array.from({ length: 11 }, (_, i) => image(`${i}`)) }).ok, false);
  assert.equal(check({ ...p, model: 'seedance_2_5', medias: [...Array.from({ length: 30 }, (_, i) => image(`${i}`)), { role: 'start_image', value: 'first' }] }).ok, false);
});

test('Seedance source edits cannot quote a shorter requested duration or unrelated extension option', () => {
  const p = { model: 'seedance_2_5', mode: 'video_edit', medias: [video] };
  assert.equal(check(p, { source_duration: 12 }).ok, true);
  assert.equal(check({ ...p, duration: 4 }, { source_duration: 12 }).ok, false);
  assert.equal(check({ ...p, extension_mode: 'forward' }, { source_duration: 12 }).ok, false);
  assert.equal(check({ ...p, mode: 'video_extension', extension_mode: 'backward', duration: 8 }, { source_duration: 12 }).ok, true);
});

test('draft finalization requires the same completed unexpired draft and its full length', () => {
  const p = { model: 'seedance_2_5', draft_job_id: 'draft-1', resolution: '4k' };
  const state = { draft_source: { job_id: 'draft-1', status: 'completed', age_hours: 24, duration: 20 } };
  assert.equal(check(p, state).ok, true);
  assert.equal(check({ ...p, duration: 4 }, state).ok, false);
  assert.equal(check(p, { draft_source: { ...state.draft_source, age_hours: 168 } }).ok, false);
  assert.equal(check(p, { draft_source: { ...state.draft_source, job_id: 'other' } }).ok, false);
  assert.equal(check({ ...p, model: 'seedance_2_5_flash' }, state).ok, false);
});

test('object replacement and ad sections retain their separate limits and recovery notes', () => {
  const p = { model: 'hf_mult_replace_object_flash', medias: [video, ...Array.from({ length: 11 }, (_, i) => image(`${i}`))] };
  assert.equal(check(p, { source_duration: 10 }).ok, false);
  assert.equal(check({ ...p, model: 'hf_mult_replace_object' }, { source_duration: 10 }).ok, true);
  const sections = { model: 'ad_multiplier_v2', mode: 'sections', section: 'both', medias: [video] };
  const result = check(sections, { source_duration: 10 });
  assert.equal(result.ok, true);
  assert.ok(result.notes.some(n => n.includes('부분 성공')));
  assert.equal(check({ ...sections, mode: 'recreate' }, { source_duration: 10 }).ok, false);
});

test('entry contracts connect reference insertion, optional Metricool and continuity to existing owners', async () => {
  const get = name => readFile(new URL(`../skills/${name}/SKILL.md`, import.meta.url), 'utf8');
  assert.match(await get('chany-reference-board'), /metricool-reference-research\.md/);
  assert.match(await get('chany-reference-board'), /curated-reference-sources\.md/);
  assert.match(await get('chany-image-edit'), /reference-insertion\.md/);
  assert.match(await get('ai-drama-production'), /reference-roles-and-continuity\.md/);
  const runtime = await readFile(new URL('../skills/chany-studio/references/image-generation-runtime.md', import.meta.url), 'utf8');
  assert.match(runtime, /Preserve an existing project's explicit or recorded model policy/);
  assert.match(runtime, /GPT Image 2\.5 \(`gpt_image_2_5`\)/);
  assert.match(runtime, /Do not rewrite existing project records on load/);
  const routing = await readFile(new URL('../skills/chany-studio/references/routing.md', import.meta.url), 'utf8');
  assert.match(routing, /the Pinterest lane of `chany-reference-board`/);
  assert.match(routing, /curated-reference-sources\.md/);
  const signals = await readFile(new URL('../skills/chany-studio/references/current-creative-signals.md', import.meta.url), 'utf8');
  assert.match(signals, /Curated discovery, reviewed 2026-11-17/);
});
