import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const readPluginFile = (path) => readFile(join(pluginRoot, ...path.split("/")), "utf8");

test("viral product remake is a one-entry rights-aware short-video chain", async () => {
  const [skill, contract, openai, routing, shim, project] = await Promise.all([
    readPluginFile("skills/chany-viral-product-remake/SKILL.md"),
    readPluginFile("skills/chany-viral-product-remake/references/fast-remake-contract.md"),
    readPluginFile("skills/chany-viral-product-remake/agents/openai.yaml"),
    readPluginFile("skills/chany-studio/references/routing.md"),
    readPluginFile("skills/auto-photo-production/SKILL.md"),
    readPluginFile("skills/chany-project/references/project-contract.md"),
  ]);

  assert.match(skill, /^name: chany-viral-product-remake$/m);
  assert.match(skill, /beginner-experience\.md\)/);
  assert.match(skill, /default for third-party links/i);
  assert.match(skill, /authorized source media/i);
  assert.match(skill, /page URL by itself is insufficient source media and insufficient permission/i);
  for (const dependency of [
    "chany-video-reference-ingest",
    "chany-product-assets",
    "chany-campaign-video",
    "chany-media-production-loop",
    "chany-video-assembly",
  ]) assert.match(skill, new RegExp("`" + dependency + "`"));
  assert.match(contract, /three to six beats/i);
  assert.match(contract, /silhouette and proportions/i);
  assert.match(contract, /Change at least the setting or material world, reveal device, camera grammar, and ending composition/i);
  assert.match(openai, /\$chany-viral-product-remake(?![a-z0-9-])/i);
  assert.match(routing, /`chany-viral-product-remake`/);
  assert.match(shim, /`chany-viral-product-remake`/);
  assert.match(project, /`chany-viral-product-remake`/);
});

test("public guidance exposes the fast Reel plus product workflow", async () => {
  const repoRoot = join(pluginRoot, "..", "..");
  const documents = await Promise.all([
    readFile(join(repoRoot, "README.md"), "utf8"),
    readFile(join(pluginRoot, "README.md"), "utf8"),
    readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
    readFile(join(repoRoot, "CHANGELOG.md"), "utf8"),
  ]);
  for (const document of documents) assert.match(document, /chany-viral-product-remake/);
  assert.match(documents[2], /타사 릴스는 원본 픽셀·음악·카피·브랜드를 복제하지 않고 구조만 새로 해석/);
});
