import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../skills");
const read = (path) => readFile(join(root, path), "utf8");
const shared = "chany-studio/references/";

// These are instruction/package regressions, not model behavior or output-quality tests.
test("every direct specialist reaches the shared intake and model decision through the beginner contract", async () => {
  const [beginner, intent, router] = await Promise.all([
    read(`${shared}beginner-experience.md`), read(`${shared}content-intent.md`),
    read(`${shared}latest-model-routing.md`),
  ]);
  assert.match(beginner, /\[content-intent\.md\]\(content-intent\.md\)/);
  assert.match(beginner, /\[latest-model-routing\.md\]\(latest-model-routing\.md\)/);
  assert.match(intent, /Skip the interview entirely when the needed answers are known/);
  assert.match(intent, /bounded asset edit/);
  assert.match(router, /Select a workflow before a model/);
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const skill = await read(`${entry.name}/SKILL.md`);
    assert.match(skill, /beginner-experience\.md/, `${entry.name} lacks the common entry contract`);
  }
});

test("new shared instruction paths resolve and stay inside the packaged skills", async () => {
  const files = [
    `${shared}content-intent.md`, `${shared}latest-model-routing.md`,
    `${shared}beginner-experience.md`, `${shared}reference-led-design.md`,
    "chany-campaign-video/references/video-edit.md",
    "chany-image-edit/references/revision-routing.md",
    "chany-project/references/project-contract.md",
    "chany-project/references/interactive-interview.md",
  ];
  for (const file of files) {
    const body = await read(file);
    for (const [, target] of body.matchAll(/\[[^\]]*\]\(([^)]+\.md)(?:#[^)]*)?\)/g)) {
      if (/^https?:/.test(target)) continue;
      const resolved = resolve(dirname(join(root, file)), target);
      assert.ok(!relative(root, resolved).startsWith(".."), `${file}: link escapes package: ${target}`);
      assert.ok((await readFile(resolved, "utf8")).length > 0, `${file}: missing ${target}`);
    }
  }
});

test("task-fit alternates keep default identity, input fidelity and scoped paid approval", async () => {
  const [runtime, router] = await Promise.all([
    read(`${shared}image-generation-runtime.md`), read(`${shared}latest-model-routing.md`),
  ]);
  assert.match(runtime, /user approves that scoped alternate in the existing direction\/copy\/cost confirmation card/);
  assert.match(runtime, /If the trade-off is uncertain, keep GPT Image 2\.5/);
  assert.match(runtime, /Obtain the user's approval before a paid alternate call/);
  assert.match(router, /do not drop an input to make a model fit/);
  assert.match(router, /Do not use an opaque `image_auto` route/);
  assert.match(router, /Do not run a paid comparison merely to select a model/);
  assert.match(router, /job-state recovery, not another model call/);
  assert.match(router, /A recorded recommendation is not an execution approval/);
});

test("bounded video edits bypass new-film prerequisites and retain temporal and audio scope", async () => {
  const [skill, edit, beginner, loop, ledger] = await Promise.all([
    read("chany-campaign-video/SKILL.md"),
    read("chany-campaign-video/references/video-edit.md"),
    read(`${shared}beginner-experience.md`),
    read("chany-media-production-loop/SKILL.md"),
    read(`${shared}media-job-ledger.md`),
  ]);
  assert.match(skill, /\[video editing\]\(references\/video-edit\.md\)/);
  assert.match(skill, /follow that branch instead of the new-film workflow/);
  assert.match(edit, /no generative video model merely for these edits/);
  assert.match(edit, /must never silently truncate the user's film/);
  assert.match(edit, /retained source audio is a separate verified authority/);
  assert.match(edit, /do not require a new paid still confirmation/);
  assert.match(edit, /cannot guarantee that requirement/);
  assert.match(edit, /no chained model fallback/);
  assert.match(beginner, /authorized source-video edit does not require a redundant paid still stage/);
  assert.match(loop, /approved edit specification replaces a new-film concept\/still prerequisite/);
  assert.match(ledger, /bounded\nedit specification instead of requiring a new-film concept/);
});

test("project records persist intent and operation decisions without adding required scaffold fields", async () => {
  const [brief, state, agents, contract] = await Promise.all([
    read("chany-project/assets/templates/brief.md.tmpl"),
    read("chany-project/assets/templates/state.md.tmpl"),
    read("chany-project/assets/templates/AGENTS.md.tmpl"),
    read("chany-project/references/project-contract.md"),
  ]);
  assert.match(brief, /intended viewer response and placement/);
  assert.match(brief, /supplied, observed, proposed, approved or unknown/);
  assert.match(state, /inside the paid-generation plan/);
  assert.match(state, /At setup these are pending, not executed or approved/);
  assert.match(agents, /reuse purpose, viewer, placement and reference roles/i);
  assert.match(contract, /not a second brief or new JSON schema/);
  assert.ok(agents.trimEnd().split("\n").length <= 200);
});
