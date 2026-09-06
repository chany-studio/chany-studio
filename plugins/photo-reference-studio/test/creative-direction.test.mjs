import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

async function readPluginFile(relativePath) {
  return readFile(join(pluginRoot, relativePath), "utf8");
}

test("creative direction turns beginner language into three scored territories and a production packet", async () => {
  const [skill, system, signals, ui] = await Promise.all([
    readPluginFile("skills/chany-creative-direction/SKILL.md"),
    readPluginFile("skills/chany-studio/references/creative-direction-system.md"),
    readPluginFile("skills/chany-studio/references/current-creative-signals.md"),
    readPluginFile("skills/chany-creative-direction/agents/openai.yaml"),
  ]);

  assert.match(skill, /^name: chany-creative-direction$/m);
  assert.match(skill, /creative-direction-system\.md/);
  assert.match(skill, /current-creative-signals\.md/);
  for (const territory of ["brand-core", "emotional-editorial", "trend-forward"]) {
    assert.match(system, new RegExp(`\\b${territory}\\b`));
  }
  for (const score of [
    "brand fit",
    "audience relevance",
    "message clarity",
    "category distinction",
    "channel fitness",
    "production feasibility",
    "trend longevity",
  ]) {
    assert.match(system, new RegExp(score, "i"));
  }
  for (const section of [
    "OUTCOME",
    "AUTHORITY INPUTS",
    "SCENE AND SUBJECT",
    "ART DIRECTION",
    "COPY AND LAYOUT",
    "PRESERVE",
    "EXCLUDE",
    "OUTPUT AND ACCEPTANCE",
  ]) {
    assert.match(system, new RegExp(`\\[${section}\\]`));
  }
  assert.match(system, /Do not ask the user to choose lenses, palettes, typography genres/i);
  assert.match(system, /^## 6\. Anti-genericity gate$/m);
  assert.match(signals, /Visual references:[*]* use exactly one controlled lane per board/i);
  assert.match(signals, /public Production Paradise work\/profile pages/i);
  assert.match(signals, /public Ads of the World, D&AD, and The One Show work pages/i);
  assert.match(signals, /Knowledge sources:[*]* official product, platform, accessibility, or commerce documentation/i);
  assert.match(ui, /\$chany-creative-direction/);
  assert.match(ui, /^\s*allow_implicit_invocation:\s*true$/m);
});

test("every customer-facing production family imports the shared creative system", async () => {
  const owners = [
    "chany-marketing-brief",
    "chany-product-assets",
    "chany-campaign-visual",
    "chany-detail-page",
    "chany-ad-creative",
    "chany-image-edit",
    "chany-model-fashion",
    "chany-campaign-video",
    "chany-video-assembly",
  ];

  for (const owner of owners) {
    const skill = await readPluginFile(`skills/${owner}/SKILL.md`);
    assert.match(
      skill,
      /\.\.\/chany-studio\/references\/creative-direction-system\.md/,
      `${owner} must import the shared creative-direction system`,
    );
  }
});

test("routing keeps source-isolated reference discovery before approved creative direction", async () => {
  const [routing, router, state] = await Promise.all([
    readPluginFile("skills/chany-studio/references/routing.md"),
    readPluginFile("skills/chany-studio/SKILL.md"),
    readPluginFile("skills/chany-studio/references/campaign-state.md"),
  ]);

  assert.match(routing, /`chany-creative-direction`/);
  assert.match(routing, /Reference providers are isolated by skill/i);
  assert.match(routing, /`chany-commercial-photo-reference`/i);
  assert.match(routing, /`chany-award-ad-reference`/i);
  assert.match(routing, /Stocksy, ShotDeck, and Death to Stock are not permitted/i);
  assert.match(routing, /reference lane[\s\S]+`chany-creative-direction`[\s\S]+`chany-campaign-visual`/i);
  assert.match(router, /creative-direction system/i);
  assert.match(state, /^reference_board:$/m);
  assert.match(state, /^\s+source_lane: "pinterest \| commercial-photo \| award-ad"$/m);
  assert.match(state, /^\s+target_count: 6$/m);
  assert.match(state, /^\s+count_source: "default \| user"$/m);
  assert.match(state, /^creative_direction:$/m);
  assert.match(state, /^\s+trend_fit:$/m);
  assert.match(state, /Production Paradise|Ads of the World/i);
});

test("current signal ledger covers every production family without turning knowledge sites into references", async () => {
  const [system, signals] = await Promise.all([
    readPluginFile("skills/chany-studio/references/creative-direction-system.md"),
    readPluginFile("skills/chany-studio/references/current-creative-signals.md"),
  ]);

  for (const family of [
    "campaign strategy",
    "product and food assets",
    "reference board",
    "key visual",
    "detail and landing",
    "static ad, poster and banner",
    "model and fashion",
    "image edit",
    "campaign video",
    "assembly and variants",
    "industry overlay",
    "publication and QA",
  ]) {
    assert.ok(
      system.toLowerCase().includes(`| ${family.toLowerCase()} |`),
      `creative system must cover ${family}`,
    );
  }
  assert.match(signals, /Reviewed:[*]* 2026-09-06/i);
  assert.match(signals, /Pinterest Predicts 2026/i);
  assert.match(signals, /Pinterest Palette/i);
  assert.match(signals, /GPT Image 2/i);
  assert.match(signals, /Never convert a knowledge-source example image into a visual reference candidate/i);
  assert.match(signals, /Stocksy, ShotDeck, Death to Stock/i);
});
