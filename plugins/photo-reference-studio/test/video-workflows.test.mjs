import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

async function readPluginFile(relativePath) {
  return readFile(join(pluginRoot, relativePath), "utf8");
}

function frontmatterName(markdown, relativePath) {
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  assert.ok(frontmatter, `${relativePath} must start with YAML frontmatter`);
  const name = frontmatter[1].match(/^name:\s*(.+?)\s*$/m)?.[1];
  assert.ok(name, `${relativePath} frontmatter must contain name`);
  return name.replace(/^(?:["'])(.*)(?:["'])$/, "$1");
}

test("UGC binds each product clip to an approved first frame without unsafe paid retries", async () => {
  const [skill, production] = await Promise.all([
    readPluginFile("skills/chany-ugc-ads/SKILL.md"),
    readPluginFile("skills/chany-ugc-ads/references/ugc-production.md"),
  ]);

  const teardownStep = skill.indexOf("reference-video file");
  const scriptStep = skill.indexOf("Write a scene-level script");
  const schemaStep = skill.indexOf("Inspect the active Higgsfield MCP tools and schemas");
  const stillStep = skill.indexOf("Approve one still per product scene");
  const paidStep = skill.indexOf("Before paid generation, show");
  assert.ok(teardownStep >= 0 && teardownStep < scriptStep);
  assert.ok(scriptStep < schemaStep && schemaStep < stillStep && stillStep < paidStep);

  const ruleStart = production.indexOf("## Approved-still-first rule");
  const executionStart = production.indexOf("## Higgsfield execution");
  assert.ok(ruleStart >= 0 && ruleStart < executionStart);
  const rule = production.slice(ruleStart, executionStart);
  assert.match(rule, /stable asset and version ID/i);
  assert.match(rule, /conditioning first-frame role exposed by the active tool schema/i);
  assert.match(rule, /Confirm[\s\S]+no chargeable job was created/i);
  assert.match(rule, /outcome or charge state is ambiguous[\s\S]+do not resubmit/i);
  assert.match(rule, /changed paid-request version[\s\S]+obtain approval/i);
  assert.doesNotMatch(rule, /seedance_2_5|omni_reference|start_image/i);
});

test("campaign and UGC video share one local-only reference teardown", async () => {
  const [ugc, campaign, production, teardown] = await Promise.all([
    readPluginFile("skills/chany-ugc-ads/SKILL.md"),
    readPluginFile("skills/chany-campaign-video/SKILL.md"),
    readPluginFile("skills/chany-ugc-ads/references/ugc-production.md"),
    readPluginFile("skills/chany-studio/references/video-reference-teardown.md"),
  ]);

  assert.match(ugc, /\.\.\/chany-studio\/references\/video-reference-teardown\.md/);
  assert.match(campaign, /\.\.\/chany-studio\/references\/video-reference-teardown\.md/);

  const scene = production.match(/```yaml\nscene: 1\n([\s\S]*?)```/)?.[1] ?? "";
  assert.match(scene, /^usp_role:/m);
  assert.match(scene, /^message_rank:/m);
  assert.match(production, /Every non-empty `usp_role` must resolve to an approved benefit, objection, or claim-ledger item/i);
  assert.match(production, /`message_rank: 0` marks a transitional scene and must not sort ahead/i);

  assert.match(teardown, /user supplies a local video file or a screen recording they are authorized to use/i);
  assert.match(teardown, /Do not download from a platform, bypass access controls, scrape a feed/i);
  assert.match(teardown, /One second is a useful starting interval[\s\S]+not a fixed requirement/i);
  assert.match(teardown, /Pacing[\s\S]+may inform[\s\S]+do not transfer/i);
  assert.match(teardown, /L1-first, direct-L2-only policy/i);
  await assert.rejects(
    readPluginFile("skills/chany-ugc-ads/references/reference-teardown.md"),
    (error) => error?.code === "ENOENT",
  );
});

test("campaign video uses one evidence-led still-first motion contract", async () => {
  const skillPath = "skills/chany-campaign-video/SKILL.md";
  const [skill, contract, openai] = await Promise.all([
    readPluginFile(skillPath),
    readPluginFile("skills/chany-campaign-video/references/campaign-video-contract.md"),
    readPluginFile("skills/chany-campaign-video/agents/openai.yaml"),
  ]);

  assert.equal(frontmatterName(skill, skillPath), "chany-campaign-video");
  assert.match(skill, /non-UGC product commercials, brand films/i);
  assert.match(skill, /GPT Image 2 \(`gpt-image-2`\)/i);
  assert.match(skill, /least risky motion route/i);
  assert.match(skill, /deterministic movement over an accurate still/i);
  assert.match(skill, /Hand only accepted clip versions/i);
  assert.match(contract, /^video_concept_packet:/m);
  assert.match(contract, /^\s+motion_route: "generated-motion \| deterministic-still-move \| authorized-footage"/m);
  assert.match(contract, /Do not use an expensive video attempt[\s\S]+a still could reveal/i);
  assert.match(contract, /first-frame role actually exposed by the live tool schema/i);
  assert.match(contract, /^production_attempt:/m);
  assert.doesNotMatch(contract, /seedance|nano.banana|credits?\s*:\s*\d+/i);
  assert.match(openai, /\$chany-campaign-video(?![a-z0-9-])/i);
  assert.match(openai, /^\s*allow_implicit_invocation:\s*true\s*$/m);
});

test("image production and repair share one positive measurable correction contract", async () => {
  const files = [
    "skills/chany-campaign-visual/references/visual-production.md",
    "skills/chany-product-assets/references/asset-prep.md",
    "skills/chany-image-edit/references/revision-routing.md",
  ];
  const documents = await Promise.all(files.map(readPluginFile));
  const sections = documents.map((document, index) => {
    const match = document.match(/## Positive, measurable instruction\n([\s\S]*?)(?=\n## )/);
    assert.ok(match, `${files[index]} must contain the correction contract`);
    assert.ok(match.index < document.search(/## (?:Production prompt|Generative fallback prompt|Edit prompt)/));
    return match[1].trim();
  });

  assert.equal(sections[1], sections[0]);
  assert.equal(sections[2], sections[0]);
  assert.match(sections[0], /proportion, dimension, count, or position/i);
  assert.match(sections[0], /Do not invent a dimension the user has not given/i);
  assert.match(sections[0], /keep the clauses that already passed unchanged/i);
  assert.match(sections[0], /does not weaken non-negotiable rights, safety, factual, regulatory, disclosure, or authority exclusions/i);
});

test("video assembly is source-safe, measured, target-authorized, and one-variable", async () => {
  const skillPath = "skills/chany-video-assembly/SKILL.md";
  const [skill, contract, openai] = await Promise.all([
    readPluginFile(skillPath),
    readPluginFile("skills/chany-video-assembly/references/assembly-contract.md"),
    readPluginFile("skills/chany-video-assembly/agents/openai.yaml"),
  ]);

  assert.equal(frontmatterName(skill, skillPath), "chany-video-assembly");
  assert.match(skill, /references\/assembly-contract\.md/i);
  assert.match(skill, /platform-publication-adapter\.md/i);
  assert.match(skill, /Probe every input before writing output/i);
  for (const mode of ["assemble", "replace-segment", "variants", "verify"]) {
    assert.match(skill, new RegExp("`" + mode + "`"));
  }
  assert.match(skill, /Never overwrite source clips or an accepted master/i);
  assert.match(skill, /fail-on-existing\/no-clobber[\s\S]+`ffmpeg -n`/i);
  assert.match(skill, /never use blanket overwrite such as `-y` without it/i);
  assert.match(skill, /add a silent track[\s\S]+when an accepted clip has no audio/i);
  assert.match(skill, /change exactly one approved property across the set/i);
  assert.match(skill, /renders every code point in the exact approved strings/i);
  assert.match(skill, /Do not silently substitute a fallback font/i);
  assert.match(skill, /Probe every final file/i);
  assert.match(skill, /Preserve the accepted source master's frame rate/i);
  assert.match(skill, /Preserve untouched timing and audio by default/i);
  assert.match(skill, /add exact probe, normalization, operation, and verification commands/i);
  assert.match(skill, /NOT EXECUTED — handoff command plan/);

  assert.match(contract, /current authoritative delivery source or remain unresolved/i);
  assert.match(contract, /constraint does not authorize one exact encode selection/i);
  assert.match(contract, /output duration is the accepted sum[\s\S]+fits an authoritative `max_duration_s`/i);
  assert.doesNotMatch(contract, /1080x1920|fps:\s*30|max_duration_s:\s*90/i);
  assert.match(contract, /^\s+authority:\s*"user \| accepted-source-master \| current-platform-source \| delivery-spec"/m);
  assert.match(contract, /^campaign_id,variant_set_id,source_master_hash,copy_version_id,version,file,variable,value,start_s,duration_s,impressions,clicks,ctr,conversions,cpa$/m);
  assert.match(contract, /Two different masters named `AD_FINAL\.mp4` must never share a namespace/i);
  assert.match(contract, /Do not use a video-only encode that silently drops the source audio/i);
  assert.match(contract, /Never convert 24 fps to 30 fps/i);

  assert.match(openai, /\$chany-video-assembly(?![a-z0-9-])/i);
  assert.match(openai, /^\s*allow_implicit_invocation:\s*true\s*$/m);
});

test("environment preflight distinguishes observation from installation and paid preflight", async () => {
  const skillPath = "skills/chany-preflight/SKILL.md";
  const [skill, openai] = await Promise.all([
    readPluginFile(skillPath),
    readPluginFile("skills/chany-preflight/agents/openai.yaml"),
  ]);

  assert.equal(frontmatterName(skill, skillPath), "chany-preflight");
  for (const state of ["available", "missing", "not_observable", "blocked"]) {
    assert.match(skill, new RegExp("`" + state + "`"));
  }
  assert.match(skill, /initial check is non-destructive and creates no persistent project or runtime state/i);
  assert.match(skill, /required encoder and filter capabilities/i);
  assert.match(skill, /every code point in the exact approved string/i);
  assert.match(skill, /`ffprobe` is required even when `ffmpeg` is available/i);
  assert.match(skill, /operating-system temporary file[\s\S]+remove it immediately/i);
  assert.match(skill, /Obtain explicit approval before executing it/i);
  assert.match(skill, /Do not use elevated privileges/i);
  assert.match(skill, /Python package installation cannot supply a missing system `ffmpeg` binary reliably/i);
  assert.match(skill, /separate from the paid-generation preflight/i);
  assert.match(skill, /none pending observation/i);
  assert.doesNotMatch(skill, /ffmpeg\s+4\.4\.2|python3\s+3\.10|node\s+22/i);
  assert.match(openai, /\$chany-preflight(?![a-z0-9-])/i);
  assert.match(openai, /^\s*allow_implicit_invocation:\s*true\s*$/m);
});

test("routers and project doctor expose assembly and check-only environment routing", async () => {
  const [routing, router, legacy, project, contract] = await Promise.all([
    readPluginFile("skills/chany-studio/references/routing.md"),
    readPluginFile("skills/chany-studio/SKILL.md"),
    readPluginFile("skills/auto-photo-production/SKILL.md"),
    readPluginFile("skills/chany-project/SKILL.md"),
    readPluginFile("skills/chany-project/references/project-contract.md"),
  ]);

  for (const document of [routing, router, legacy, project, contract]) {
    assert.match(document, /chany-preflight/i);
  }
  for (const document of [routing, router, legacy, contract]) {
    assert.match(document, /chany-video-assembly/i);
    assert.match(document, /chany-campaign-video/i);
  }
  assert.match(routing, /only after every included clip version and replacement boundary is accepted/i);
  assert.match(project, /route only the required non-destructive environment checks[\s\S]+must not install/i);
  assert.match(contract, /doctor never installs, upgrades, writes project files, or leaves persistent tool-check artifacts/i);
});

test("campaign state binds first frames and assembled renders to stable versions", async () => {
  const state = await readPluginFile("skills/chany-studio/references/campaign-state.md");

  for (const field of [
    "governing_still_version_id",
    "resolved_first_frame_role",
    "output_clip_version_id",
    "motion_route",
    "accepted_output_clip_version_id",
    "assembly_id",
    "source_master_content_hash",
    "source_clip_version_ids",
    "target_authority_reference",
    "output_render_version_id",
    "performance_table_path",
  ]) {
    assert.match(state, new RegExp(`^\\s+(?:-\\s+)?${field}:`, "m"));
  }
  for (const field of ["campaign_video_manifests", "production_attempt_log", "performance_reviews"]) {
    assert.match(state, new RegExp(`^${field}:`, "m"));
  }
  assert.match(state, /changed[\s\S]+accepted clip[\s\S]+delivery target[\s\S]+invalidates every affected record/i);
});

test("marketing brief reviews observed performance without inventing causality", async () => {
  const [skill, schema] = await Promise.all([
    readPluginFile("skills/chany-marketing-brief/SKILL.md"),
    readPluginFile("skills/chany-marketing-brief/references/brief-schema.md"),
  ]);

  assert.match(skill, /post-campaign learning/i);
  assert.match(skill, /winner`, `inconclusive`, or `invalid`/i);
  assert.match(schema, /\| campaign video \|[\s\S]+`chany-campaign-video`/i);
  assert.match(schema, /^performance_review:/m);
  assert.match(schema, /^\s+decision: "winner \| inconclusive \| invalid"/m);
  assert.match(schema, /does not prove that diagnosis/i);
  assert.match(schema, /^\s+next_single_variable:/m);
});

test("both manifests publish the 2.3.0 campaign-video release", async () => {
  const [claude, codex] = await Promise.all([
    readPluginFile(".claude-plugin/plugin.json").then(JSON.parse),
    readPluginFile(".codex-plugin/plugin.json").then(JSON.parse),
  ]);

  assert.equal(claude.version, "2.3.0");
  assert.match(codex.version, /^2\.3\.0\+codex\.[a-z0-9.-]+$/i);
  assert.ok(codex.interface.capabilities.includes("GPT Image 2 default for generative still images with scoped overrides"));
  assert.ok(codex.interface.capabilities.includes("Native Claude question-card interview and Chany-file approval"));
  assert.ok(codex.interface.capabilities.includes("Native in-chat Pinterest reference previews"));
  assert.doesNotMatch(JSON.stringify(codex.interface), /Behance/i);
  assert.ok(codex.interface.capabilities.includes("Concept-led campaign video with approved GPT Image 2 governing stills"));
  assert.ok(codex.interface.capabilities.includes("Local video assembly, segment replacement, hook variants, and delivery verification"));
  assert.ok(codex.interface.capabilities.includes("Bounded performance review and next one-variable experiment planning"));
  assert.ok(codex.interface.capabilities.includes("Runtime media-tool and Korean-font preflight"));
  assert.match(codex.interface.longDescription, /승인된 클립[\s\S]+로컬에서 조립/i);
});

test("Claude marketplace metadata advertises the new video workflow without changing identity", async () => {
  const repoRoot = join(pluginRoot, "..", "..");
  const marketplace = JSON.parse(
    await readFile(join(repoRoot, ".claude-plugin", "marketplace.json"), "utf8"),
  );

  assert.equal(marketplace.name, "photo-reference-studio");
  assert.equal(marketplace.plugins[0].name, "photo-reference-studio");
  for (const tag of ["campaign-video", "reference-video-teardown", "approved-first-frame", "video-assembly", "segment-replacement", "performance-learning", "environment-preflight"]) {
    assert.ok(marketplace.plugins[0].tags.includes(tag), `Claude marketplace missing ${tag}`);
  }
});

test("user docs place environment and paid checks before production and assembly", async () => {
  const repoRoot = join(pluginRoot, "..", "..");
  const [pluginReadme, userGuide] = await Promise.all([
    readPluginFile("README.md"),
    readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
  ]);

  const environmentCheck = pluginReadme.indexOf("로컬 영상·프레임·배치 작업이 있으면 먼저");
  const paidCheck = pluginReadme.indexOf("여러 유료 생성이 필요하면");
  const production = pluginReadme.indexOf("공통 제작 스킬이 승인된 패킷과 범위에서");
  const assembly = pluginReadme.indexOf("캠페인 영상 또는 UGC 클립은 모두 승인된 뒤");
  assert.ok(environmentCheck < paidCheck && paidCheck < production && production < assembly);

  assert.match(userGuide, /캠페인 영상 또는 UGC 클립 승인 → 필요한 경우 로컬 환경 점검·영상 조립/i);
  assert.ok(userGuide.indexOf("## 10. 실행 환경 점검") < userGuide.indexOf("## 11. 영상 조립·컷 교체와 훅 변형"));
});
