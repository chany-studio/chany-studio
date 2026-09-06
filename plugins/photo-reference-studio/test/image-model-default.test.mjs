import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = join(pluginRoot, "..", "..");

async function readPluginFile(relativePath) {
  return readFile(join(pluginRoot, relativePath), "utf8");
}

test("the shared still-image contract fixes GPT Image 2 as the honest default", async () => {
  const contract = await readPluginFile(
    "skills/chany-studio/references/image-generation-runtime.md",
  );

  assert.match(contract, /default still-image generation and editing model is \*\*GPT Image 2\*\*/i);
  assert.match(contract, /exact model ID `gpt-image-2`/i);
  assert.match(contract, /Do not relabel an unknown provider default as GPT Image 2/i);
  assert.match(contract, /Do not replace `gpt-image-2` merely because another or newer model exists/i);
  assert.match(contract, /user explicitly requests the alternate model or provider/i);
  assert.match(contract, /approved project brief already records that alternate default/i);
  assert.match(contract, /live capability check proves that `gpt-image-2` is unavailable/i);
  assert.match(contract, /invalidates the affected quote, paid-generation approval, and creative acceptance record/i);
  assert.match(contract, /video, audio, and clip assembly keep their own tools/i);
  for (const field of [
    "requested_default",
    "resolved_model",
    "provider",
    "selection_status",
    "override_reason",
    "override_scope",
  ]) {
    assert.match(contract, new RegExp(`^  ${field}:`, "m"));
  }
});

test("every generative still owner imports the shared model contract", async () => {
  const owners = [
    "chany-campaign-visual",
    "chany-product-assets",
    "chany-detail-page",
    "chany-ad-creative",
    "chany-image-edit",
    "chany-model-fashion",
    "chany-campaign-video",
    "chany-media-production-loop",
  ];

  for (const owner of owners) {
    const skill = await readPluginFile(`skills/${owner}/SKILL.md`);
    assert.match(
      skill,
      /\.\.\/chany-studio\/references\/image-generation-runtime\.md/,
      `${owner} must import the shared image model contract`,
    );
    assert.match(skill, /GPT Image 2 \(`gpt-image-2`\)/i);
  }
});

test("project and campaign state persist the default and scoped override", async () => {
  const files = [
    "skills/chany-project/assets/templates/AGENTS.md.tmpl",
    "skills/chany-project/assets/templates/brief.md.tmpl",
    "skills/chany-project/assets/templates/state.md.tmpl",
    "skills/chany-studio/references/campaign-state.md",
  ];
  const documents = await Promise.all(files.map(readPluginFile));

  for (let index = 0; index < documents.length; index += 1) {
    assert.match(documents[index], /gpt-image-2/i, `${files[index]} must persist the default`);
  }
  assert.match(documents[3], /^still_image_model_policy:\s*$/m);
  assert.match(documents[3], /^  active_override:/m);
  assert.match(documents[3], /^  override_scope:/m);
});

test("Claude loads the one-tool reference preview before Pinterest discovery", async () => {
  const [config, skill, policy, contract] = await Promise.all([
    readPluginFile(".mcp.claude.json").then(JSON.parse),
    readPluginFile("skills/chany-reference-board/SKILL.md"),
    readPluginFile("skills/chany-reference-board/references/search-policy.md"),
    readPluginFile("skills/chany-reference-board/references/reference-search-mcp-contract.md"),
  ]);

  assert.equal(config.mcpServers["reference-preview"].alwaysLoad, true);
  for (const document of [skill, policy, contract]) {
    assert.match(document, /before (?:searching|the first Pinterest query|discovery)/i);
    assert.match(document, /ToolSearch\(query: "select:fetch_reference_preview_image"\)/);
    assert.match(document, /absent|unavailable|disconnected/i);
  }
});

test("public docs and manifests publish the 2.5.0 default consistently", async () => {
  const [rootReadme, pluginReadme, install, guide, troubleshooting, claude, codex] =
    await Promise.all([
      readFile(join(repoRoot, "README.md"), "utf8"),
      readPluginFile("README.md"),
      readFile(join(repoRoot, "docs", "INSTALL-AND-UPDATE.md"), "utf8"),
      readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
      readFile(join(repoRoot, "docs", "TROUBLESHOOTING.md"), "utf8"),
      readPluginFile(".claude-plugin/plugin.json").then(JSON.parse),
      readPluginFile(".codex-plugin/plugin.json").then(JSON.parse),
    ]);

  for (const document of [rootReadme, pluginReadme, install, guide, troubleshooting]) {
    assert.match(document, /GPT Image 2/i);
    assert.match(document, /gpt-image-2/i);
  }
  assert.equal(claude.version, "2.5.0");
  assert.match(codex.version, /^2\.5\.0(?:\+codex\.)?/);
  assert.ok(claude.keywords.includes("gpt-image-2"));
  assert.ok(codex.interface.capabilities.includes(
    "GPT Image 2 default for generative still images with scoped overrides",
  ));
});
