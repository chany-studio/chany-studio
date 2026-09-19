import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = path => readFile(join(root, path), "utf8");
const shared = "skills/chany-studio/references/";

test("new skill names are discoverable and draft orchestrators are not active", async () => {
  const names = [];
  for (const entry of await readdir(join(root, "skills"), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    let text;
    try { text = await read(`skills/${entry.name}/SKILL.md`); }
    catch (error) { if (error.code === "ENOENT") continue; throw error; }
    const name = text.match(/^name: (.+)$/m)?.[1];
    assert.equal(name, entry.name);
    names.push(name);
  }
  assert.equal(new Set(names).size, names.length);
  for (const name of ["chany-jtbd-persona", "chany-meta-ad-research"]) {
    assert.ok(names.includes(name));
    const ui = await read(`skills/${name}/agents/openai.yaml`);
    assert.ok(ui.includes(`$${name}`));
    assert.match(ui, /allow_implicit_invocation: true/);
  }
  assert.ok(!names.includes("chany-reference-to-video"));
  assert.ok(!names.includes("chany-persuasion-story"));
});

test("conversion entrypoints lead to existing output owners and shared rules", async () => {
  for (const owner of ["chany-studio", "chany-ad-creative", "chany-campaign-video", "chany-marketing-brief"]) {
    assert.match(await read(`skills/${owner}/SKILL.md`), /performance-ad-contract\.md/);
  }
  const route = await read(shared + "routing.md");
  for (const owner of ["chany-jtbd-persona", "chany-meta-ad-research", "chany-ad-creative", "chany-campaign-video"]) {
    assert.ok(route.includes(`\`${owner}\``));
  }
  assert.match(await read("skills/chany-project/references/project-contract.md"), /carousel card counts separately/);
});

test("generated project guidance loads the performance contract through chany-studio", async () => {
  const template = await read("skills/chany-project/assets/templates/AGENTS.md.tmpl");
  assert.match(template, /have the `chany-studio` skill load its shared performance-ad contract/);
  assert.doesNotMatch(template, /chany-studio\/references\/performance-ad-contract\.md/);
  const projectContract = await read("skills/chany-project/references/project-contract.md");
  assert.doesNotMatch(projectContract, /`chany-studio\/references\/performance-ad-contract\.md`/);
});

test("all added instruction links resolve inside the packaged skills", async () => {
  const files = [
    "skills/chany-jtbd-persona/SKILL.md",
    "skills/chany-meta-ad-research/SKILL.md",
    "skills/chany-meta-ad-research/references/meta-ad-research.md",
    "skills/chany-ad-creative/references/carousel-ad-contract.md",
    shared + "performance-ad-contract.md", shared + "thirteen-role-adaptation.md",
  ];
  for (const file of files) {
    for (const match of (await read(file)).matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      if (/^https?:/.test(match[1])) continue;
      const target = resolve(root, dirname(file), match[1].split("#")[0]);
      assert.ok(target.startsWith(join(root, "skills") + "/"), `${file}: ${target}`);
      await access(target);
    }
  }
});

test("thirteen-role coverage retains Story without fixing scene or card count", async () => {
  const text = await read(shared + "thirteen-role-adaptation.md");
  const roles = [...text.matchAll(/^\| ([a-z]+) \|/gm)].map(m => m[1]);
  assert.deepEqual(roles, ["hero", "pain", "problem", "story", "solution", "how", "proof", "authority", "benefits", "risk", "compare", "filter", "cta"]);
  assert.match(text, /keep\/merge\/omit/);
  assert.match(text, /do not force thirteen cards/i);
  assert.match(text, /Single image/);
});

test("Meta evidence distinguishes inspection, linkage and actual performance judgment", async () => {
  const text = await read("skills/chany-meta-ad-research/references/meta-ad-research.md");
  for (const field of ["library_id", "inspection_status", "performance_evidence", "adaptation_map", "format_coverage"]) assert.ok(text.includes(field));
  assert.match(text, /unverified \| reported \| matched-account-data/);
  assert.match(text, /linkage, not causality/);
  assert.match(text, /first-card preview is partial evidence/);
  assert.match(text, /at most two discovery queries/i);
  assert.match(text, /Do not map a public Library ID directly to an Ads Manager ID/);
});

test("photo preview server remains unchanged in scope when adding the Meta lane", async () => {
  const skill = await read("skills/chany-meta-ad-research/SKILL.md");
  assert.match(skill, /Never cross-fill from Pinterest/);
  assert.match(skill, /do not fabricate previews or alter the Pinterest preview server's allowlist/);
  const contract = await read(shared + "performance-ad-contract.md");
  assert.match(contract, /never the video reference route/);
  assert.match(contract, /Supplied references need no replacement search/);
});

test("ad package separates platform copy and image copy with independent counts", async () => {
  const common = await read(shared + "performance-ad-contract.md");
  for (const field of ["in_creative_copy", "primary_text", "platform_headline", "platform_description", "platform_cta", "destination_url", "claim_refs"]) assert.ok(common.includes(`\`${field}\``));
  assert.match(common, /Reference count, ad-unit count, carousel card count and billable job count are different/);
  const carousel = await read("skills/chany-ad-creative/references/carousel-ad-contract.md");
  for (const field of ["card_count", "sequence_mode", "platform_order_status", "card_id", "order", "asset_version_id"]) assert.ok(carousel.includes(`\`${field}\``));
  assert.match(carousel, /separate final card files in order/);
  assert.match(carousel, /Retry only failed cards/);
  assert.match(carousel, /not only appear on the last card/);
});

test("both runtime branches share one core and no implicit account operation", async () => {
  const common = await read(shared + "performance-ad-contract.md");
  assert.match(common, /Run the Chany core the same way in Claude, ChatGPT Work and Codex/);
  assert.match(common, /otherwise concise text/);
  assert.match(common, /Empty responses are not approval/);
  assert.match(common, /not a portable slash command|do not register a portable slash command/);
});

test("JTBD and learning preserve evidence scope and common ledger authority", async () => {
  const insight = await read("skills/chany-jtbd-persona/SKILL.md");
  assert.match(insight, /missing \| draft \| verified \| approved/);
  assert.match(insight, /do not replace the ledger with a simplified schema/);
  const common = await read(shared + "performance-ad-contract.md");
  assert.match(common, /do not silently equate a submitted form to revenue/);
  assert.match(common, /not automatically a randomized A\/B test/);
  assert.match(common, /invalidates dependent plans\/assets\/reviews only/);
});

test("both plugin manifests publish the same feature release without changing identity", async () => {
  const claude = JSON.parse(await read(".claude-plugin/plugin.json"));
  const codex = JSON.parse(await read(".codex-plugin/plugin.json"));
  assert.equal(claude.name, codex.name);
  assert.equal(claude.version, "2.15.0");
  assert.equal(codex.version.split("+")[0], claude.version);
  assert.equal(codex.skills, "./skills/");
  assert.doesNotMatch(claude.description, /moai/i);
});
