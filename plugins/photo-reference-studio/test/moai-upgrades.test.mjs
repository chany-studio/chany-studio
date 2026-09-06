import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

function fromPluginRoot(relativePath) {
  return join(pluginRoot, relativePath);
}

async function readPluginFile(relativePath) {
  return readFile(fromPluginRoot(relativePath), "utf8");
}

function frontmatterName(markdown, relativePath) {
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  assert.ok(frontmatter, `${relativePath} must start with YAML frontmatter`);

  const name = frontmatter[1].match(/^name:\s*(.+?)\s*$/m);
  assert.ok(name, `${relativePath} frontmatter must contain name`);
  return name[1].replace(/^(["'])(.*)\1$/, "$2");
}

const publicationStatuses = [
  "blocked",
  "draft-only",
  "ready-for-named-human-review",
  "reviewed-by-named-owner",
];

test("publication review exposes a complete four-status skill contract", async () => {
  const skillPath = "skills/chany-publication-review/SKILL.md";
  const referencePath = "skills/chany-publication-review/references/publication-gate.md";
  const openaiPath = "skills/chany-publication-review/agents/openai.yaml";
  const [skill, reference, openai] = await Promise.all([
    readPluginFile(skillPath),
    readPluginFile(referencePath),
    readPluginFile(openaiPath),
  ]);

  assert.ok(reference.trim(), `${referencePath} must not be empty`);
  assert.equal(frontmatterName(skill, skillPath), "chany-publication-review");
  assert.match(skill, /references\/publication-gate\.md/i);

  const defaultPrompt = openai.match(/^\s*default_prompt:\s*(.+?)\s*$/m)?.[1] ?? "";
  assert.match(defaultPrompt, /\$chany-publication-review(?![a-z0-9-])/i);
  assert.match(openai, /^\s*allow_implicit_invocation:\s*true\s*$/m);

  const skillStatusUnion = skill
    .match(/^\s*status:\s*["']([^"']+)["']\s*$/m)?.[1]
    .split("|")
    .map((status) => status.trim());
  assert.deepEqual(skillStatusUnion, publicationStatuses);

  const statusTable = reference.match(/## 8\. Status calculation([\s\S]*?)## 9\./i)?.[1] ?? "";
  const tableStatuses = [...statusTable.matchAll(/^\|\s*`([^`]+)`\s*\|/gm)].map(
    (match) => match[1],
  );
  assert.deepEqual(tableStatuses, publicationStatuses);
});

test("publication review runs five named lanes against current dated sources and invalidates changed versions", async () => {
  const [skill, gate] = await Promise.all([
    readPluginFile("skills/chany-publication-review/SKILL.md"),
    readPluginFile("skills/chany-publication-review/references/publication-gate.md"),
  ]);

  const lanes = [
    ["Lane A", "claims and evidence", "claims_and_evidence"],
    ["Lane B", "offer and transaction", "offer_and_transaction"],
    ["Lane C", "outbound messaging", "outbound_messaging"],
    ["Lane D", "endorsement, creator, and rights", "endorsement_creator_and_rights"],
    ["Lane E", "domain, platform, and final render", "domain_platform_and_final_render"],
  ];
  for (const [label, title, recordKey] of lanes) {
    assert.match(gate, new RegExp(`^## \\d+\\. ${label} — ${title}$`, "im"));
    assert.match(skill, new RegExp(`^    ${recordKey}:$`, "m"));
  }

  assert.match(skill, /At review time, look up current official primary sources/i);
  assert.match(gate, /record its title, publisher, direct URL or internal record ID/i);
  assert.match(gate, /published or updated date when available,[^\n]+access date and time/i);
  assert.match(gate, /If no publication or effective date is shown, write `unknown`/i);
  assert.match(skill, /stable identifiers.+copy, asset files, crop or layout variant, final render/is);
  assert.match(skill, /Any copy edit[\s\S]+invalidates the prior review/i);
  assert.match(gate, /A changed derivative starts at no higher than `draft-only`/i);
  assert.match(gate, /Never relabel an old review as covering the new version/i);
  assert.match(skill, /^\s+effective_date:/m);
  assert.match(skill, /^\s+expires_or_recheck:/m);
  assert.match(skill, /If `recheck_by` has passed[\s\S]+Reset the candidate to at most `draft-only`/i);
  assert.match(gate, /future rule (?:will be|becomes) effective on (?:or before|the) intended publication date/i);
});

test("Moai mapping includes all regulatory specialists with an unresolved fallback and no legal clearance", async () => {
  const chain = await readPluginFile("skills/chany-studio/references/moai-specialist-chain.md");
  const specialists = [
    "moai-seller:commerce-ad-claim-compliance-kr",
    "moai-seller:commerce-message-compliance-kr",
    "moai-seller:commerce-influencer-collab",
    "moai-lawyer:legal-law-research",
    "moai-lawyer:legal-mfds-safety",
  ];

  for (const specialist of specialists) {
    assert.ok(chain.includes(`\`${specialist}\``), `missing Moai route ${specialist}`);
  }
  assert.match(
    chain,
    /If a relevant specialist is unavailable, continue with the Chany workflow, keep the affected facts or review status unresolved/i,
  );
  assert.match(chain, /Their result is upstream evidence, not an automatic approval and not permission to publish/i);
  assert.match(chain, /never replace it with “legally compliant,” “cleared,” or another blanket conclusion/i);
  for (const provenanceField of ["producer_source", "package_version", "producer_checked_at"]) {
    assert.match(chain, new RegExp(`^  ${provenanceField}:`, "m"));
  }
  for (const reviewedType of [
    "runtime",
    "media-execution",
    "identity",
    "asset-operation",
    "coded-experience",
  ]) {
    assert.match(chain, new RegExp(`\\b${reviewedType}\\b`));
  }
});

test("platform adapter distinguishes requirement classes and keeps unresolved work out of publication", async () => {
  const adapter = await readPluginFile(
    "skills/chany-studio/references/platform-publication-adapter.md",
  );

  for (const requirementClass of [
    "hard_requirement",
    "platform_recommendation",
    "marketing_hypothesis",
  ]) {
    assert.match(adapter, new RegExp("- `" + requirementClass + "`:"));
  }

  assert.match(adapter, /At review time, retrieve the latest applicable primary sources/i);
  for (const field of [
    "title",
    "publisher",
    "direct_url",
    "checked_at",
    "effective_date",
    "expires_or_recheck",
  ]) {
    assert.match(adapter, new RegExp(`^      ${field}:`, "m"));
  }
  assert.match(adapter, /Do not reuse an old adapter record[\s\S]+rechecking its expiry triggers/i);
  assert.match(adapter, /Unresolved hard requirements set the affected item to `draft_only` or `blocked`/i);
  assert.match(adapter, /continue drafting but keep publication blocked/i);
  assert.match(adapter, /final release status belongs exclusively to `chany-publication-review`/i);
});

test("platform live changes default to paused and split write, budget, and activation authority", async () => {
  const adapter = await readPluginFile(
    "skills/chany-studio/references/platform-publication-adapter.md",
  );

  assert.match(adapter, /start read-only and resolve the exact account, campaign, placement, asset, and current status/i);
  assert.match(adapter, /show a proposed-change table with target IDs, before state, after state/i);
  assert.match(adapter, /create new resources as `PAUSED` or the closest non-spending draft state/i);
  assert.match(adapter, /distinct explicit approvals for the write operation, any budget or billing change, and activation or spend start/i);
  for (const approval of ["write_approval", "budget_approval", "activation_approval"]) {
    assert.match(adapter, new RegExp(`^    ${approval}:`, "m"));
  }
  assert.match(adapter, /read back and verify returned resource IDs, ownership, effective settings, budget, and status/i);
  assert.match(adapter, /Never expose, print, persist in project files, or return access tokens/i);
});

test("every publish-capable route loads the platform adapter and preserves non-waivable approvals", async () => {
  const [router, campaign, review, state] = await Promise.all([
    readPluginFile("skills/chany-studio/SKILL.md"),
    readPluginFile("skills/chany-campaign-video/SKILL.md"),
    readPluginFile("skills/chany-publication-review/SKILL.md"),
    readPluginFile("skills/chany-studio/references/campaign-state.md"),
  ]);

  assert.match(router, /references\/platform-publication-adapter\.md/);
  assert.match(campaign, /platform-publication-adapter\.md/);
  assert.match(review, /platform-publication-adapter\.md/);
  assert.match(review, /no publish-capable flow may bypass it/i);
  assert.match(state, /automatic selection[\s\S]+only to reversible creative choices/i);
  assert.match(state, /never waives claim substantiation[\s\S]+distinct approvals for a platform write, budget change, activation, or spend start/i);
});

test("paid runtime contract resolves live capabilities, quotes costs, and never retries blindly", async () => {
  const runtime = await readPluginFile(
    "skills/chany-studio/references/higgsfield-runtime-contract.md",
  );

  assert.match(runtime, /The live tool schema and catalog are authoritative/i);
  assert.match(runtime, /inspect the tools that are actually connected and the current schema/i);
  assert.match(runtime, /When a free quote, cost preview, dry run, or validation operation exists, call it before the paid operation/i);
  for (const field of [
    "final_prompt",
    "input_roles",
    "resolved_model_or_workflow",
    "resolved_options",
    "server_adjustments",
    "total_credits",
    "balance_after_or_current_balance",
  ]) {
    assert.match(runtime, new RegExp(`^  ${field}:`, "m"));
  }
  assert.match(runtime, /Do not hardcode or silently substitute model identifiers, templates, aspect ratios/i);
  assert.match(runtime, /ambiguous outcome[\s\S]+do not send it again/i);
  assert.match(runtime, /Inspect status, history, or the provider job list with the original receipt/i);
  assert.match(runtime, /`changed request`:[^\n]+quote and approve again/i);
  assert.match(runtime, /requires a new paid-generation preflight and approval/i);
});

test("creative loop binds acceptance to evidence and stops bounded one-defect revisions on regression", async () => {
  const loop = await readPluginFile(
    "skills/chany-studio/references/creative-quality-loop.md",
  );

  assert.match(loop, /^creative_acceptance:\s*$/m);
  for (const field of [
    "asset_version_id",
    "authority_inputs_and_roles",
    "required_evidence_or_must_capture",
    "must_pass_gates",
    "default_attempt_limit",
    "batch_credit_ceiling",
  ]) {
    assert.match(loop, new RegExp(`^  ${field}:`, "m"));
  }
  assert.match(loop, /Review the actual final-resolution image or time-based result/i);
  assert.match(loop, /record the observed location or timestamp, comparison authority, severity, and downstream impact/i);
  assert.match(loop, /change one defect class per attempt/i);
  assert.match(loop, /run the complete must-pass list again/i);
  assert.match(loop, /A fix that causes a new critical defect is a regression and cannot pass/i);
  assert.match(loop, /the approved attempt or credit ceiling is reached/i);
  assert.match(loop, /Do not conceal failure with an average score[\s\S]+burn additional credits/i);
});

test("detail page supports plan, audit, and produce through an evidence coverage gap matrix", async () => {
  const [skill, system] = await Promise.all([
    readPluginFile("skills/chany-detail-page/SKILL.md"),
    readPluginFile("skills/chany-detail-page/references/detail-page-system.md"),
  ]);

  for (const mode of ["plan", "audit", "produce"]) {
    assert.match(skill, new RegExp("`" + mode + "`"));
    assert.match(system, new RegExp("- `" + mode + "`:"));
  }
  assert.match(skill, /Build the evidence-coverage and capture-gap matrix before production/i);
  assert.match(system, /^## Evidence coverage and capture gaps$/m);
  for (const column of ["Module/job", "Evidence/source", "Coverage", "Gap action", "Publication status"]) {
    assert.ok(system.includes(column), `detail-page matrix missing ${column}`);
  }
  assert.match(skill, /Do not force a fixed number of sections/i);
  assert.match(system, /Module count follows the decision journey and evidence coverage, never a rigid page template/i);
  assert.match(skill, /generated imagery cannot replace missing factual proof/i);
});

test("campaign state keeps specialist handoffs and publication reviews version-bound per asset", async () => {
  const state = await readPluginFile("skills/chany-studio/references/campaign-state.md");

  assert.match(state, /^specialist_handoffs:\s*\[\]\s*$/m);
  assert.match(state, /^publication_reviews:\s*$/m);
  for (const field of [
    "review_id",
    "copy_version_id",
    "offer_version_id",
    "landing_destination_version_id",
    "intended_publication_date",
    "recheck_by",
    "owner_decision",
    "decided_at",
  ]) {
    assert.match(state, new RegExp(`^\\s+(?:-\\s+)?${field}:`, "m"));
  }
  assert.match(state, /^\s+asset_version_ids:\s*\[\]\s*$/m);
  assert.match(state, /^\s+final_render_version_ids:\s*\[\]\s*$/m);
  assert.match(state, /^\s+official_policy_sources:\s*\[\]\s*$/m);
  assert.match(
    state,
    /^\s+status:\s*["']blocked \| draft-only \| ready-for-named-human-review \| reviewed-by-named-owner["']\s*$/m,
  );
  assert.match(state, /Attribute optional Moai specialist results with the producer's exact installed name/i);
  assert.match(state, /reviewed-object version, sources and dates, findings, and unresolved questions/i);
  assert.match(state, /Bind identity authority, consent, campaign-video and assembly manifests, media jobs, still-image model selection, paid-generation approval, performance review, and publication review to stable content and asset versions/i);
  assert.match(state, /a version-bound publication status for every asset/i);
});

test("campaign state binds identity, media jobs, and paid approvals to stable IDs", async () => {
  const [state, modelFashion, media] = await Promise.all([
    readPluginFile("skills/chany-studio/references/campaign-state.md"),
    readPluginFile("skills/chany-model-fashion/references/model-fashion-production.md"),
    readPluginFile("skills/chany-studio/references/media-job-ledger.md"),
  ]);

  for (const root of ["identity_authorities", "media_jobs", "paid_generation_approvals"]) {
    assert.match(state, new RegExp(`^${root}:`, "m"));
  }
  for (const stableId of ["identity_authority_id", "consent_record_id", "media_job_id", "paid_approval_id"]) {
    assert.ok(state.includes(`${stableId}:`), `campaign state must preserve ${stableId}`);
  }
  assert.match(modelFashion, /face_use_consent_status: "unknown \| confirmed \| not-applicable"/);
  assert.match(modelFashion, /duplicate_training_status: "not-checked \| blocked \| not-a-duplicate \| not-applicable"/);
  assert.match(modelFashion, /shared campaign state/i);
  assert.match(media, /^\s+media_job_id:/m);
  assert.match(media, /^\s+paid_approval_id:/m);
  assert.match(media, /shared campaign state/i);
  assert.match(state, /changed subject or authority input[\s\S]+invalidates every affected record/i);
});
