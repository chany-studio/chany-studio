import test from 'node:test';
import assert from 'node:assert/strict';
import { nextInterviewStep as next } from '../skills/chany-studio/scripts/interview-next.mjs';
import { readFile } from 'node:fs/promises';
const product = { id: 'own-product', role: 'product', inspected: true };
const reference = { id: 'chosen-look', role: 'reference', inspected: true };

test('an empty start asks one plain question without granting permission', () => {
  assert.deepEqual(next(), {
    stage: 'question', field: 'output', question: '어떤 콘텐츠를 만드실 건가요?',
    options: ['사진', '영상'], allow_free_text: true, submission_allowed: false,
  });
});
test('both content choices lead to the subject and then the appropriate reference question', () => {
  for (const [medium, reference] of [['image', '사진'], ['video', '영상']]) {
    assert.equal(next({ facts: { medium } }).field, 'offer');
    assert.match(next({ facts: { medium, offer: '텀블러' } }).question, new RegExp(`참고 ${reference}`));
  }
});
test('inspected product and stated output bypass answered questions', () => {
  const state = { assets: [product, reference], facts: { output: '인스타 이미지' } };
  const before = structuredClone(state); const r = next(state);
  assert.equal(r.stage, 'production-check'); assert.deepEqual(state, before); assert.equal(r.submission_allowed, false);
});
test('a resolved product-photo quick start skips the menu and finds still references', () => {
  const result = next({ assets: [product], facts: { medium: 'image', reference: 'find' } });
  assert.equal(result.stage, 'find-references');
  assert.equal(result.owner, 'chany-reference-board');
});
test('ambiguous roles and unread attachments are checked before recommendations', () => {
  assert.equal(next({ assets: [{ id: 'a' }] }).stage, 'inspect-assets');
  assert.equal(next({ assets: [{ id: 'a', inspected: true }] }).field, 'asset_roles');
  assert.equal(next({ assets: [{ ...product, inspected: false }] }).stage, 'inspect-assets');
});
test('service description can start planning without a physical product photo', () => {
  assert.equal(next({ facts: { offer: '예약 서비스' } }).field, 'output');
});
test('explicit reference search and skip do not become each other', () => {
  const facts = { offer: '예약 서비스', output: '소개 이미지' };
  assert.equal(next({ facts: { ...facts, reference: 'find' } }).stage, 'find-references');
  assert.equal(next({ facts: { ...facts, reference: 'skip' } }).stage, 'production-check');
  assert.equal(next({ facts }).field, 'reference');
  assert.equal(next({ assets: [reference], facts: { ...facts, reference: 'skip' } }).reference, 'none');
  assert.equal(next({ assets: [reference], facts: { ...facts, reference: 'find' } }).stage, 'find-references');
});
test('a bounded revision skips marketing questions but still needs a source and change', () => {
  assert.equal(next({ intent: 'edit' }).stage, 'request-attachment');
  assert.equal(next({ intent: 'edit', assets: [product] }).field, 'change');
  assert.equal(next({ intent: 'edit', assets: [product], facts: { change: '글자만 수정' } }).stage, 'production-check');
  assert.equal(next({ intent: 'cutout', assets: [product] }).stage, 'production-check');
  assert.equal(next({ intent: 'assembly', assets: [product], facts: { change: '승인한 순서로 연결' } }).stage, 'production-check');
});
test('unknown jobs are recovered before new interviews; cancellation does not imply refund', () => {
  const job = { id: 'existing', status: 'unknown' };
  assert.equal(next({ job }).stage, 'recover-job');
  for (const status of ['submitted', 'processing', 'queued', 'in_progress']) assert.equal(next({ job: { ...job, status } }).stage, 'recover-job');
  assert.equal(next({ job: { status: 'unknown' } }).stage, 'recover-job');
  assert.equal(next({ job, cancelled: true }).stage, 'stopped');
  assert.match(next({ job, cancelled: true }).message, /취소 상태를 따로 확인/);
});
test('blank answers do not fill facts or authorize execution', () => {
  assert.equal(next({ facts: { medium: 'image', offer: '  ' } }).field, 'offer');
  assert.equal(next({ assets: [product], facts: { output: '' } }).field, 'output');
});
test('video discovery goes to its film owner, never the generic still board', () => {
  for (const facts of [
    { offer: '예약 서비스', medium: 'video', output: '30초 서비스 시연' },
    { offer: '텀블러', output: '짧은 영상' },
  ]) {
    assert.match(next({ facts }).question, /참고 영상/);
    const found = next({ facts: { ...facts, reference: 'find' } });
    assert.equal(found.owner, 'chany-campaign-video');
    assert.equal(found.reference_kind, 'video');
    assert.equal(found.submission_allowed, false);
    const supplied = next({ assets: [reference], facts });
    assert.equal(supplied.owner, 'chany-campaign-video');
    assert.equal(supplied.submission_allowed, false);
    const skipped = next({ assets: [reference], facts: { ...facts, reference: 'skip' } });
    assert.equal(skipped.reference, 'none');
    assert.equal(skipped.owner, 'chany-campaign-video');
  }
});
test('resolved medium beats a legacy video label and image discovery stays intact', () => {
  assert.equal(next({ facts: { offer: '제품', medium: 'image', output: '짧은 영상', reference: 'find' } }).owner, 'chany-reference-board');
  assert.equal(next({ facts: { offer: '제품', output: '영상 썸네일', reference: 'find' } }).owner, 'chany-reference-board');
  assert.equal(next({ facts: { offer: '제품', output: 30 } }).field, 'output');
  assert.equal(next({ facts: { offer: '제품', medium: 'video' } }).field, 'reference');
});
test('video intake preserves the specialist already selected by the studio router', () => {
  for (const current_owner of ['ai-drama-production', 'chany-viral-product-remake', 'adobe-video-pipeline', 'adobe-after-effects-production', 'adobe-premiere-finishing', 'chany-motion-design', 'chany-shortform-recut', 'chany-ad-variants']) {
    for (const referenceChoice of ['find', 'skip', undefined]) {
      const r = next({ current_owner, assets: [reference], facts: { offer: '브랜드', medium: 'video', reference: referenceChoice } });
      assert.equal(r.owner, current_owner);
      assert.equal(r.submission_allowed, false);
    }
  }
});
test('video revisions and pending jobs retain their bounded existing flow', () => {
  const state = { assets: [{ id: 'clip', role: 'output', inspected: true }], intent: 'edit', facts: { medium: 'video' } };
  assert.deepEqual(next(state).options, ['영상 순서·길이', '자막·소리', '제품·서비스 모습']);
  assert.equal(next({ ...state, facts: { ...state.facts, change: '마지막 자막만' } }).owner, 'existing-edit-owner');
  assert.equal(next({ ...state, job: { status: 'processing', id: 'existing' } }).stage, 'recover-job');
});
test('all existing entry skills inherit the common interview and runtime boundaries', async () => {
  const get = p => readFile(new URL('../skills/' + p, import.meta.url), 'utf8');
  assert.match(await get('chany-studio/references/beginner-experience.md'), /work-first-interview.md/);
  assert.match(await get('chany-project/references/interactive-interview.md'), /work-first-interview.md/);
  const contract = await get('chany-studio/references/work-first-interview.md');
  for (const phrase of ['One question per turn', 'text-only question tool', 'Empty/error/timeout', 'not spending approval', 'cross-chat memory', 'Behance 6']) assert.ok(contract.includes(phrase), phrase);
});
