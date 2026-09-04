import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillRoot = join(pluginRoot, "skills", "chany-project");

async function read(relativePath) {
  return readFile(join(skillRoot, relativePath), "utf8");
}

test("project skill exposes cross-runtime entry points and all referenced resources", async () => {
  const skill = await read("SKILL.md");
  const command = await readFile(join(pluginRoot, "commands", "project.md"), "utf8");

  assert.match(skill, /^name: chany-project$/m);
  assert.match(skill, /\$chany-project/);
  assert.match(skill, /\/photo-reference-studio:project/);
  assert.match(command, /Skill\("photo-reference-studio:chany-project"\)/);
  assert.match(command, /\$ARGUMENTS/);

  for (const path of [
    "references/project-contract.md",
    "assets/templates/AGENTS.md.tmpl",
    "assets/templates/AGENTS.override.md.tmpl",
    "assets/templates/CLAUDE.md.tmpl",
    "assets/templates/brief.md.tmpl",
    "assets/templates/state.md.tmpl",
    "assets/templates/project.json.tmpl",
    "assets/templates/claude-agent.md.tmpl",
    "assets/templates/codex-agent.toml.tmpl",
  ]) {
    assert.ok((await read(path)).length > 0, `${path} should not be empty`);
  }
});

test("AGENTS template has one bounded managed block and stays compact", async () => {
  const template = await read("assets/templates/AGENTS.md.tmpl");
  assert.equal(template.match(/<!-- chany-studio:project:start schema=1 -->/g)?.length, 1);
  assert.equal(template.match(/<!-- chany-studio:project:end -->/g)?.length, 1);
  assert.ok(template.trimEnd().split("\n").length <= 200);
  assert.match(template, /\.chany-studio\/brief\.md/);
  assert.match(template, /paid generations/i);
  assert.match(template, /ChatGPT Work:/);
  assert.match(template, /Hosted ChatGPT Work must not assume/);
});

test("override bridge handles Codex precedence without duplicating project instructions", async () => {
  const bridge = await read("assets/templates/AGENTS.override.md.tmpl");
  assert.equal(bridge.match(/chany-studio:override-bridge:start/g)?.length, 1);
  assert.equal(bridge.match(/chany-studio:override-bridge:end/g)?.length, 1);
  assert.match(bridge, /\{\{RELATIVE_AGENTS_PATH\}\}/);
  assert.doesNotMatch(bridge, /## Authority and locks|## Deliverables|## Production flow/);
});

test("Claude template imports the canonical file on the first non-empty line", async () => {
  const template = await read("assets/templates/CLAUDE.md.tmpl");
  const firstNonEmpty = template.split("\n").find((line) => line.trim());
  assert.equal(firstNonEmpty, "@AGENTS.md");
});

test("project snapshot template is valid JSON and contains no secret fields", async () => {
  const template = await read("assets/templates/project.json.tmpl");
  const snapshot = JSON.parse(template);
  assert.equal(snapshot.schemaVersion, 1);
  assert.equal(snapshot.plugin, "photo-reference-studio");
  assert.deepEqual(
    Object.keys(snapshot),
    [
      "schemaVersion",
      "plugin",
      "pluginVersion",
      "projectName",
      "projectType",
      "executionMode",
      "primaryAgent",
      "activeSkills",
      "createdAt",
      "updatedAt",
    ],
  );
  assert.doesNotMatch(template, /api[_ -]?key|access[_ -]?token|password|cookie/i);
});

test("paired local project-agent templates carry the same role contract", async () => {
  const claude = await read("assets/templates/claude-agent.md.tmpl");
  const codex = await read("assets/templates/codex-agent.toml.tmpl");

  assert.match(claude, /name: \{\{CLAUDE_AGENT_NAME\}\}/);
  assert.match(codex, /^name = "\{\{CODEX_AGENT_NAME\}\}"$/m);
  assert.match(codex, /^description = \{\{AGENT_DESCRIPTION_TOML\}\}$/m);
  assert.match(codex, /^developer_instructions = """$/m);
  assert.match(codex, /^sandbox_mode = "workspace-write"$/m);
  for (const invariant of ["AGENTS.md", "paid generation", "{{SKILL_CHAIN}}", "project update workflow"]) {
    assert.ok(claude.includes(invariant), `Claude template missing ${invariant}`);
    assert.ok(codex.includes(invariant), `Codex template missing ${invariant}`);
  }
});

test("Codex agent description uses a TOML-compatible escaped basic string", async () => {
  const template = await read("assets/templates/codex-agent.toml.tmpl");
  const description = 'Coordinates the "Glow Up" launch from C:\\\\assets.\nApproval is required.';
  const rendered = template
    .replaceAll("{{CODEX_AGENT_NAME}}", "campaign_producer")
    .replaceAll("{{AGENT_DESCRIPTION_TOML}}", JSON.stringify(description))
    .replaceAll("{{SKILL_CHAIN}}", "chany-marketing-brief -> chany-ad-creative");
  const encoded = rendered.match(/^description = (.+)$/m)?.[1];
  assert.equal(JSON.parse(encoded), description);
  assert.doesNotMatch(rendered, /\{\{[A-Z_]+\}\}/);
});

test("project contract retires an old managed role instead of leaving duplicates", async () => {
  const contract = await read("references/project-contract.md");
  assert.match(contract, /retired-agents\/YYYYMMDD-HHMMSS/);
  assert.match(contract, /never leave two active managed primary roles/i);
  assert.match(contract, /AGENTS\.override\.md/);
});
