import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../skills/${path}`, import.meta.url), 'utf8');
const shared = 'chany-studio/references/';

// Package/contract regression checks only. These do not prove model adherence or image quality.
test('new reference scenes and bounded edits reach the same explicit change-boundary contract', async () => {
  const design = await read(`${shared}reference-led-design.md`);
  assert.match(design, /Reference reshoot \(default for a new reference-led product scene\)/);
  assert.match(design, /Bounded edit \(only when requested\)/);
  assert.match(design, /Attaching a product photo does not itself select bounded editing/);
  for (const path of [
    `${shared}beginner-experience.md`, `${shared}content-intent.md`,
    `${shared}latest-model-routing.md`, `${shared}product-insertion.md`,
    `${shared}creative-direction-system.md`,
    'chany-image-edit/SKILL.md',
    'chany-campaign-visual/references/visual-production.md',
    'chany-product-assets/references/asset-prep.md',
  ]) assert.match(await read(path), /\]\([^)]*reference-led-design\.md\)/, path);
});

test('reshoot prompts separate real identity from projection and specify visible composition', async () => {
  const design = await read(`${shared}reference-led-design.md`);
  for (const property of ['Camera and product orientation', 'Framing', 'Space and contact', 'Light and finish']) {
    assert.ok(design.includes(`| ${property} |`), property);
  }
  assert.match(design, /Create a new photograph of the SAME product, not a cutout pasted into a new background/);
  assert.match(design, /Perspective may change the visible outline and projected label shape/);
  assert.match(design, /request the necessary side\/back photo/);
  assert.match(design, /if the selected reference is frontal\/upright, retain that property/);
  assert.match(design, /reference supplied only for color, lighting or background does not authorize a full reshoot/);
  assert.match(design, /Product count follows the requested\/approved scene/);
  assert.match(design, /For multiple selected references, specify each output's distinct composition/);
});

test('product and composition are separate failure gates without unlocking paid retries', async () => {
  const [design, pipeline, quality] = await Promise.all([
    read(`${shared}reference-led-design.md`), read(`${shared}product-insertion.md`),
    read(`${shared}creative-quality-loop.md`),
  ]);
  assert.match(design, /composition fails even when identity passes/);
  assert.match(pipeline, /제품 확인:/);
  assert.match(pipeline, /구도 확인:/);
  assert.match(pipeline, /확인 어려움/);
  assert.match(quality, /Both identity and requested composition are must-pass gates/);
  assert.match(quality, /not an unapproved source pose or the composition that failed/);
  assert.match(quality, /one initial generation plus at most one defect-specific correction/);
  assert.match(pipeline, /only within the approved attempt and credit ceiling/);
});

test('optional cutouts and accepted-view expansion do not become reshoot pose locks', async () => {
  const pipeline = await read(`${shared}product-insertion.md`);
  assert.match(pipeline, /A different intended scene alone does not require background removal/);
  assert.match(pipeline, /original remains the identity authority/);
  assert.match(pipeline, /not a locked pose or a layer that must be pasted into a reshoot/);
  assert.match(pipeline, /This preserves an accepted view; it is not the default for a new reference reshoot/);
  assert.match(pipeline, /without that line in the approved card, do not import the reference/);
});
