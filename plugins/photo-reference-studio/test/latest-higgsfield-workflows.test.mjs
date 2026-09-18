import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = join(pluginRoot, "..", "..");
const readPlugin = (path) => readFile(join(pluginRoot, ...path.split("/")), "utf8");

test("dedicated current-Higgsfield workflows are discoverable and beginner-safe", async () => {
  const skillNames = ["chany-ad-variants", "chany-shortform-recut", "chany-product-3d"];
  const [router, shim, projectContract, projectInstructions] = await Promise.all([
    readPlugin("skills/chany-studio/references/routing.md"),
    readPlugin("skills/auto-photo-production/SKILL.md"),
    readPlugin("skills/chany-project/references/project-contract.md"),
    readPlugin("skills/chany-project/assets/templates/AGENTS.md.tmpl"),
  ]);

  for (const skill of skillNames) {
    const [body, openai] = await Promise.all([
      readPlugin(`skills/${skill}/SKILL.md`),
      readPlugin(`skills/${skill}/agents/openai.yaml`),
    ]);
    assert.match(body, new RegExp(`^name: ${skill}$`, "m"));
    assert.match(body, /beginner-experience\.md\)/);
    assert.match(openai, new RegExp(`\\$${skill}`));
    for (const document of [router, shim, projectContract, projectInstructions]) {
      assert.ok(document.includes(skill), `${skill} must be routed by every entry point`);
    }
  }
});

test("live model routing covers the verified 2026-09-18 task families without replacing GPT Image 2.5", async () => {
  const [routing, apiBoundary, adCreative, detailPage] = await Promise.all([
    readPlugin("skills/chany-studio/references/latest-model-routing.md"),
    readPlugin("skills/chany-studio/references/higgsfield-api-boundary.md"),
    readPlugin("skills/chany-ad-creative/SKILL.md"),
    readPlugin("skills/chany-detail-page/SKILL.md"),
  ]);

  for (const id of [
    "seedance_2_5", "ad_multiplier", "flux_3_video", "flux_3_video_edit",
    "kling_video_edit", "gemini_omni_flash_1_1", "grok_video_v15",
    "openai_hazel", "recraft_v4_1", "clipify", "meshy_v7_image_to_3d",
  ]) {
    assert.ok(routing.includes(id), `latest model routing missing ${id}`);
  }
  assert.match(routing, /inspect[^.]+current model\/tool contract[^.]+cost[^.]+availability/i);
  assert.match(routing, /GPT Image 2\.5 remains the default/);
  assert.match(routing, /no reference images[\s\S]+do not use for source-faithful product insertion/i);
  assert.match(adCreative, /OpenAI Hazel/);
  assert.match(detailPage, /Recraft V4\.1/);
  assert.match(apiBoundary, /separate account balance, API key, pricing, model catalog/i);
  assert.match(apiBoundary, /Never request, print, store, or commit an API secret/i);
});

test("2.14 manifests and public guides publish the current production families", async () => {
  const [claude, codex, marketplace, rootReadme, userGuide, updates] = await Promise.all([
    readPlugin(".claude-plugin/plugin.json").then(JSON.parse),
    readPlugin(".codex-plugin/plugin.json").then(JSON.parse),
    readFile(join(repoRoot, ".claude-plugin", "marketplace.json"), "utf8").then(JSON.parse),
    readFile(join(repoRoot, "README.md"), "utf8"),
    readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
    readFile(join(repoRoot, "docs", "HIGGSFIELD-UPDATES.md"), "utf8"),
  ]);

  assert.equal(claude.version, "2.14.0");
  assert.equal(codex.version.split("+")[0], claude.version);
  for (const keyword of ["ad-variants", "shortform-recut", "product-3d"]) {
    assert.ok(claude.keywords.includes(keyword));
    assert.ok(marketplace.plugins[0].tags.includes(keyword));
  }
  for (const capability of [
    "Controlled Ad Multiplier video variants with source-structure preservation",
    "Reviewed YouTube-to-Reels and Shorts recutting with subtitles and safe crops",
    "Product 3D assets and editable 3D Jutsu advertising scenes",
  ]) {
    assert.ok(codex.interface.capabilities.includes(capability));
  }
  for (const document of [rootReadme, userGuide, updates]) {
    for (const skill of ["chany-ad-variants", "chany-shortform-recut", "chany-product-3d"]) {
      assert.ok(document.includes(skill), `${skill} missing from a public guide`);
    }
  }
});
