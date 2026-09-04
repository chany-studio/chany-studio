import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = join(pluginRoot, "..", "..");
const skillRoot = join(pluginRoot, "skills", "chany-project");

async function read(relativePath) {
  return readFile(join(skillRoot, relativePath), "utf8");
}

test("project skill exposes cross-runtime entry points and all referenced resources", async () => {
  const skill = await read("SKILL.md");
  const command = await readFile(join(pluginRoot, "commands", "project-studio.md"), "utf8");
  const openai = await read("agents/openai.yaml");

  assert.match(skill, /^name: chany-project$/m);
  assert.match(skill, /^allowed-tools: AskUserQuestion$/m);
  assert.match(skill, /ChatGPT Work: explicitly select `@chany-project`/);
  assert.match(skill, /\$chany-project/);
  assert.match(skill, /literal `\/project-studio <description>` reaches the model as an ordinary message/);
  assert.match(skill, /not a registered plugin slash command/);
  assert.match(skill, /\/photo-reference-studio:project-studio/);
  assert.match(skill, /Do not treat `\/project` as a Chany's Studio entry point/);
  assert.match(command, /Skill\("photo-reference-studio:chany-project"\)/);
  assert.match(command, /\$ARGUMENTS/);
  assert.match(command, /^allowed-tools: Skill, AskUserQuestion$/m);
  assert.match(command, /top-level `AskUserQuestion` interview and Chany-file approval gates/);
  assert.match(openai, /ChatGPT에서는 @chany-project/);
  assert.match(openai, /Codex에서는 \$chany-project/);
  assert.match(openai, /allow_implicit_invocation: true/);
  await assert.rejects(
    readFile(join(pluginRoot, "commands", "project.md"), "utf8"),
    (error) => error?.code === "ENOENT",
  );

  for (const path of [
    "references/project-contract.md",
    "references/moai-chain.md",
    "references/interactive-interview.md",
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

test("Claude setup uses the native question card in the main conversation before writes", async () => {
  const [skill, contract, interview, chain] = await Promise.all([
    read("SKILL.md"),
    read("references/project-contract.md"),
    read("references/interactive-interview.md"),
    read("references/moai-chain.md"),
  ]);

  assert.match(skill, /references\/interactive-interview\.md/);
  assert.match(skill, /main conversation must use the host's `AskUserQuestion` tool/i);
  assert.match(skill, /do not delegate the interview or approval to a subagent/i);
  assert.match(interview, /main conversation must call it for every missing-fact interview and the final pre-write decision/i);
  assert.match(interview, /ToolSearch\(query: "select:AskUserQuestion"\)/);
  assert.match(interview, /one to three questions in one call/i);
  assert.match(interview, /header of at most 12 characters/i);
  assert.match(interview, /two to four options/i);
  assert.match(interview, /built-in `Other` choice/i);
  assert.match(interview, /subagent[\s\S]+must never conduct the interview/i);
  assert.match(interview, /selects `취소`[\s\S]+stop the Chany phase immediately[\s\S]+do not turn that decision into a fallback question/i);
  assert.match(interview, /empty result that is not an explicit user cancellation, a timeout, or a tool error[\s\S]+None supplies a fact or authorizes a Chany-managed write/i);
  assert.match(interview, /final approval boundary[\s\S]+wait for explicit approval[\s\S]+never write on a fallback assumption/i);
  assert.match(interview, /승인 후 생성 \(권장\)/);
  assert.match(interview, /설계 수정/);
  assert.match(interview, /취소/);
  assert.match(interview, /취소`:[^\n]+no Chany-managed file changes[^\n]+preserve any separately approved Moai-owned files/i);
  assert.match(interview, /Only `승인 후 생성 \(권장\)` authorizes the listed Chany-managed project-file writes/i);
  assert.match(contract, /mandatory three-option Chany-file approval card/i);
  assert.match(contract, /An empty result, timeout, or tool error is not an answer or approval/i);
  assert.match(chain, /Do not replay Moai's general vision, structure, or technology interview/i);

  const moaiPhase = skill.indexOf("Apply the Moai project decision");
  const interviewPhase = skill.indexOf("Collect only the remaining campaign-specific");
  const routingPhase = skill.indexOf("Select exactly one primary industry skill");
  const approvalPhase = skill.indexOf("Show a concise blueprint");
  assert.ok(moaiPhase >= 0, "Moai phase should be present");
  assert.ok(moaiPhase < interviewPhase, "Moai should complete before the Chany interview");
  assert.ok(interviewPhase < routingPhase, "the remaining interview should inform skill routing");
  assert.ok(routingPhase < approvalPhase, "skill routing should precede Chany-file approval");
  assert.match(interview, /same-request Moai chain[\s\S]+Moai's separate preview and approval/i);
});

test("user-facing docs distinguish ChatGPT and Codex skill sigils", async () => {
  const [rootReadme, pluginReadme, userGuide, installGuide, troubleshooting] = await Promise.all([
    readFile(join(repoRoot, "README.md"), "utf8"),
    readFile(join(pluginRoot, "README.md"), "utf8"),
    readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
    readFile(join(repoRoot, "docs", "INSTALL-AND-UPDATE.md"), "utf8"),
    readFile(join(repoRoot, "docs", "TROUBLESHOOTING.md"), "utf8"),
  ]);
  const specialistSkills = [
    "chany-project",
    "chany-studio",
    "chany-marketing-brief",
    "chany-product-assets",
    "chany-reference-board",
    "chany-campaign-visual",
    "chany-detail-page",
    "chany-ad-creative",
    "chany-image-edit",
    "chany-model-fashion",
    "chany-ugc-ads",
    "chany-video-assembly",
    "chany-preflight",
    "chany-publication-review",
    "chany-professional-services",
    "chany-education-marketing",
    "chany-healthcare-marketing",
    "chany-food-dining",
    "chany-hospitality-travel",
    "chany-space-real-estate",
    "chany-digital-product-marketing",
    "chany-live-culture-events",
    "chany-automotive-marketing",
    "chany-consumer-tech-marketing",
    "chany-corporate-employer",
  ];

  for (const document of [rootReadme, pluginReadme, userGuide]) {
    for (const skill of specialistSkills) {
      assert.ok(document.includes(`@${skill}`), `documentation missing ChatGPT invocation @${skill}`);
      assert.ok(document.includes(`$${skill}`), `documentation missing Codex invocation $${skill}`);
    }
  }

  const allDocs = [rootReadme, pluginReadme, userGuide, installGuide, troubleshooting].join("\n");
  assert.match(allDocs, /\/project-studio/);
  assert.match(allDocs, /Moai/i);
  assert.match(allDocs, /\/project/);
  assert.doesNotMatch(allDocs, /photo-reference-studio:project(?=[\s`]|$)/m);
});

test("Codex manifest default prompts use Codex skill sigils only", async () => {
  const manifest = JSON.parse(
    await readFile(join(pluginRoot, ".codex-plugin", "plugin.json"), "utf8"),
  );

  assert.ok(manifest.interface.defaultPrompt.length <= 3);
  for (const prompt of manifest.interface.defaultPrompt) {
    assert.match(prompt, /^\$chany-[a-z-]+/);
    assert.doesNotMatch(prompt, /@chany-/);
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
  assert.match(template, /\{\{UPSTREAM_PROJECT_CONTEXT\}\}/);
  assert.match(template, /never edit `.moai\/\*\*`/i);
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

test("Moai chain preserves command ownership and the Claude harness boundary", async () => {
  const [skill, contract, chain] = await Promise.all([
    read("SKILL.md"),
    read("references/project-contract.md"),
    read("references/moai-chain.md"),
  ]);

  assert.match(skill, /Keep `\/project` Moai-owned and `\/project-studio` Chany-owned/);
  assert.match(skill, /Never edit `\.moai\/\*\*`/);
  assert.match(contract, /Moai harness marker pair/);
  assert.match(contract, /include a same-request Moai phase only after verifying that the current host exposes the exact skill as callable/i);
  assert.match(contract, /installation evidence or a visible name alone is insufficient/i);
  assert.match(chain, /<!-- moai:harness-start -->/);
  assert.match(chain, /<!-- moai:harness-end -->/);
  assert.match(chain, /--with-moai/);
  assert.match(chain, /--chany-only/);
  assert.match(chain, /standard `\/project-studio <description>` setup automatically detects the Moai state/i);
  assert.match(chain, /conditional on both plugins being installed and visible/);
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
