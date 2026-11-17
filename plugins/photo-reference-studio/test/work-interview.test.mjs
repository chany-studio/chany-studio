import test from 'node:test';
import assert from 'node:assert/strict';
import { nextInterviewStep as next } from '../skills/chany-studio/scripts/interview-next.mjs';
import { readFile } from 'node:fs/promises';
const product = { id: 'own-product', role: 'product', inspected: true };
const reference = { id: 'chosen-look', role: 'reference', inspected: true };

test('an empty start asks one plain question without granting permission', () => {
  const r = next(); assert.equal(r.field, 'offer'); assert.equal(r.allow_free_text, true); assert.equal(r.submission_allowed, false);
});
test('inspected product and stated output bypass answered questions', () => {
  const state = { assets: [product, reference], facts: { output: '인스타 이미지' } };
  const before = structuredClone(state); const r = next(state);
  assert.equal(r.stage, 'production-check'); assert.deepEqual(state, before); assert.equal(r.submission_allowed, false);
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
  assert.equal(next({ facts: { offer: '  ' } }).field, 'offer');
  assert.equal(next({ assets: [product], facts: { output: '' } }).field, 'output');
});
test('all existing entry skills inherit the common interview and runtime boundaries', async () => {
  const get = p => readFile(new URL('../skills/' + p, import.meta.url), 'utf8');
  assert.match(await get('chany-studio/references/beginner-experience.md'), /work-first-interview.md/);
  assert.match(await get('chany-project/references/interactive-interview.md'), /work-first-interview.md/);
  const contract = await get('chany-studio/references/work-first-interview.md');
  for (const phrase of ['One question per turn', 'text-only question tool', 'Empty/error/timeout', 'not spending approval', 'cross-chat memory', 'Pinterest 5 + MeiGen 5']) assert.ok(contract.includes(phrase), phrase);
});
