import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = join(pluginRoot, "..", "..");

async function listFiles(directory, extensions) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return entry.name === "node_modules" ? [] : listFiles(path, extensions);
      return extensions.some((extension) => entry.name.endsWith(extension)) ? [path] : [];
    }),
  );
  return nested.flat();
}

test("live instructions and docs never name GPT Image 2 as the still-image model", async () => {
  const files = [
    ...(await listFiles(join(pluginRoot, "skills"), [".md", ".yaml", ".tmpl", ".json"])),
    ...(await listFiles(join(repoRoot, "docs"), [".md"])),
    join(repoRoot, "README.md"),
    join(pluginRoot, "README.md"),
    join(repoRoot, ".claude-plugin", "marketplace.json"),
  ];
  const stale = [];
  for (const file of files) {
    const content = await readFile(file, "utf8");
    for (const [index, line] of content.split("\n").entries()) {
      if (/GPT Image 2(?!\.\d)|gpt_image_2(?!_\d)|remains a scoped image-model option/.test(line)) {
        stale.push(`${relative(repoRoot, file)}:${index + 1}`);
      }
    }
  }
  assert.deepEqual(stale, [], "GPT Image 2.5 (gpt_image_2_5) is the only default still-image model");
});

test("the legacy auto-photo-production shim routes every current non-industry skill", async () => {
  const shim = await readFile(join(pluginRoot, "skills", "auto-photo-production", "SKILL.md"), "utf8");
  const routing = await readFile(join(pluginRoot, "skills", "chany-studio", "references", "routing.md"), "utf8");
  const skillNames = (await readdir(join(pluginRoot, "skills"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && entry.name !== "auto-photo-production")
    .map((entry) => entry.name);
  const industryOverlays = skillNames.filter((name) => routing.includes(name) && /marketing|employer|dining|travel|events|services|real-estate/.test(name));
  const missing = skillNames
    .filter((name) => !industryOverlays.includes(name))
    .filter((name) => !shim.includes(`\`${name}\``));
  assert.deepEqual(missing, [], "auto-photo-production must route every current skill");
  assert.match(shim, /chany-studio\/references\/routing\.md/, "industry overlays are routed through routing.md");
  assert.doesNotMatch(shim, /six visible candidates by default/i);
  assert.match(shim, /10 inline images by default \(Pinterest 5 \+ MeiGen 5\)/);
});

test("general reference guidance states the combined 10-image default", async () => {
  const files = {
    "README.md": await readFile(join(repoRoot, "README.md"), "utf8"),
    "plugin README.md": await readFile(join(pluginRoot, "README.md"), "utf8"),
    "docs/USER-GUIDE.md": await readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
    "project-contract.md": await readFile(join(pluginRoot, "skills", "chany-project", "references", "project-contract.md"), "utf8"),
    "creative-direction-system.md": await readFile(join(pluginRoot, "skills", "chany-studio", "references", "creative-direction-system.md"), "utf8"),
    "industry-overlay.md": await readFile(join(pluginRoot, "skills", "chany-studio", "references", "industry-overlay.md"), "utf8"),
  };
  for (const [name, content] of Object.entries(files)) {
    assert.match(content, /Pinterest 5\s*(?:장)?\s*\+\s*(?:Meigen|MeiGen) 5/i, `${name} must state the combined default`);
  }
});

test("specialist reference lanes share one contract", async () => {
  const contract = await readFile(join(pluginRoot, "skills", "chany-studio", "references", "specialist-reference-lane.md"), "utf8");
  assert.match(contract, /default to `6`/);
  assert.match(contract, /Pinterest-only/);
  assert.match(contract, /`requested`, `visible`, and `shortfall`/);
  for (const skill of ["chany-commercial-photo-reference", "chany-award-ad-reference"]) {
    const [body, policy] = await Promise.all([
      readFile(join(pluginRoot, "skills", skill, "SKILL.md"), "utf8"),
      readFile(join(pluginRoot, "skills", skill, "references", "source-policy.md"), "utf8"),
    ]);
    assert.match(body, /\(\.\.\/chany-studio\/references\/specialist-reference-lane\.md\)/, `${skill} must link the shared contract`);
    assert.match(policy, /specialist-reference-lane\.md/, `${skill} source policy must defer to the shared contract`);
    assert.doesNotMatch(body, /fetch_reference_preview_image/, `${skill} must not restate the shared preview rule`);
  }
});

test("overlapping skills name each other in their boundaries", async () => {
  const description = async (skill) =>
    (await readFile(join(pluginRoot, "skills", skill, "SKILL.md"), "utf8")).match(/^description:\s*(.+)$/m)[1];
  assert.match(await description("chany-marketing-brief"), /not for[^.]*chany-creative-direction/);
  assert.match(await description("chany-creative-direction"), /not for[^.]*chany-marketing-brief/);
  assert.match(await description("chany-ad-creative"), /not for[^.]*chany-campaign-visual/);
  assert.match(await description("chany-campaign-visual"), /not for[^.]*chany-ad-creative/);
});

test("every skill follows the shared beginner experience contract", async () => {
  const contract = await readFile(join(pluginRoot, "skills", "chany-studio", "references", "beginner-experience.md"), "utf8");
  assert.match(contract, /Quick start is the default/);
  assert.match(contract, /이렇게 만들까요\?/);
  assert.match(contract, /이대로 1장 만들기 \(권장\)/);
  assert.match(contract, /2장 만들어 더 나은 것 고르기/);
  assert.match(contract, /never removes a paid-generation approval/);
  assert.match(contract, /Credits too low/);
  const skillDirs = (await readdir(join(pluginRoot, "skills"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("chany-"))
    .map((entry) => entry.name);
  for (const skill of skillDirs) {
    const body = await readFile(join(pluginRoot, "skills", skill, "SKILL.md"), "utf8");
    assert.match(body, /beginner-experience\.md\)/, `${skill} must point to the beginner experience contract`);
  }
  const runtime = await readFile(join(pluginRoot, "skills", "chany-studio", "references", "higgsfield-runtime-contract.md"), "utf8");
  assert.match(runtime, /never display the raw packet/);
  assert.match(runtime, /balance is lower than the quoted cost, do not submit any part of the batch/);
});

test("beginner docs lead with a first-use guide, glossary and plain troubleshooting", async () => {
  const [readme, glossary, troubleshooting] = await Promise.all([
    readFile(join(repoRoot, "README.md"), "utf8"),
    readFile(join(repoRoot, "docs", "GLOSSARY.md"), "utf8"),
    readFile(join(repoRoot, "docs", "TROUBLESHOOTING.md"), "utf8"),
  ]);
  assert.ok(readme.indexOf("## 처음 쓰는 분께") < readme.indexOf("## 설치"), "first-use guide must come before installation");
  assert.match(readme.split("## 설치")[0], /Claude Cowork[\s\S]+ChatGPT Work/);
  for (const term of ["누끼", "CTA", "크레딧", "Visual DNA", "L1", "JTBD", "MCP", "Node.js"]) {
    assert.ok(glossary.includes(term), `glossary must define ${term}`);
  }
  assert.match(troubleshooting, /## 크레딧이 부족하다고 나와요/);
  assert.match(troubleshooting, /## Node\.js가 필요하다고 나와요/);
});

test("the product insertion pipeline covers the core product-to-ad flow", async () => {
  const pipeline = await readFile(join(pluginRoot, "skills", "chany-studio", "references", "product-insertion.md"), "utf8");
  for (const section of ["Product profile", "References chosen for this product", "Clean product source", "\"Like this reference\" generation", "Quality settings", "Product match check", "Ad-grade finishing", "Other ratios from the accepted image", "Video from the accepted image", "Higgsfield ad templates as references"]) {
    assert.ok(pipeline.includes(section), `product-insertion.md must define ${section}`);
  }
  assert.match(pipeline, /제품 확인: ✓ 모양·비율/);
  assert.match(pipeline, /Reject any result that could pass for the reference itself/);
  assert.match(pipeline, /sends it to a third party/);
  assert.match(pipeline, /Do not switch silently/);
  assert.match(pipeline, /`quality: high` and `resolution: 2k`/);
  assert.match(pipeline, /which image is which/);
  for (const skill of ["chany-studio", "chany-campaign-visual", "chany-ad-creative", "chany-reference-board", "chany-campaign-video", "chany-ai-prompt-reference"]) {
    const body = await readFile(join(pluginRoot, "skills", skill, "SKILL.md"), "utf8");
    assert.match(body, /product-insertion\.md\)/, `${skill} must follow the product insertion pipeline`);
  }
  const beginner = await readFile(join(pluginRoot, "skills", "chany-studio", "references", "beginner-experience.md"), "utf8");
  assert.match(beginner, /run the reference board automatically/, "quick start must find references for a supplied product");
  const ranking = await readFile(join(pluginRoot, "skills", "chany-reference-board", "references", "search-policy.md"), "utf8");
  assert.match(ranking, /hold this exact product/);
});

test("plain-language direction translates everyday words into professional terms", async () => {
  const guide = await readFile(join(pluginRoot, "skills", "chany-studio", "references", "plain-language-direction.md"), "utf8");
  assert.match(guide, /배경 흐리게[^|]*\| 아웃포커싱/);
  assert.match(guide, /화장품 화보처럼[^|]*\| 뷰티디쉬 조명/);
  assert.match(guide, /이렇게 이해했어요:/);
  assert.match(guide, /전문가식으로 쓰면:/);
  assert.match(guide, /AskUserQuestion/);
  assert.match(guide, /ChatGPT Work/);
  assert.match(guide, /never adds a checkpoint to quick start/);
  for (const skill of ["chany-studio", "chany-creative-direction", "chany-campaign-visual", "chany-ad-creative", "chany-campaign-video", "chany-image-edit"]) {
    const body = await readFile(join(pluginRoot, "skills", skill, "SKILL.md"), "utf8");
    assert.match(body, /plain-language-direction\.md\)/, `${skill} must use plain-language direction`);
  }
});
