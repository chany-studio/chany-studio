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

test("media production loop keeps stable jobs, bounded corrections, and visible results", async () => {
  const skillPath = "skills/chany-media-production-loop/SKILL.md";
  const [skill, ledger, openai] = await Promise.all([
    readPluginFile(skillPath),
    readPluginFile("skills/chany-studio/references/media-job-ledger.md"),
    readPluginFile("skills/chany-media-production-loop/agents/openai.yaml"),
  ]);

  assert.equal(frontmatterName(skill, skillPath), "chany-media-production-loop");
  assert.match(skill, /Import or upload each[\s\S]+once/i);
  assert.match(skill, /Show the actual preview in the conversation/i);
  assert.match(skill, /stable index/i);
  assert.match(skill, /retry only a failed index/i);
  assert.match(skill, /one initial attempt[\s\S]+one correction/i);
  assert.match(skill, /Provider success is not visual acceptance/i);
  for (const field of [
    "media_job_id",
    "output_index",
    "provider_job_ref",
    "resolved_model_or_workflow",
    "paid_approval_id",
    "inline_preview_status",
    "technical_gate",
    "creative_gate",
  ]) {
    assert.match(ledger, new RegExp(`^\\s+(?:-\\s+)?${field}:`, "m"));
  }
  assert.match(ledger, /unknown response is not permission to[\s\S]+submit again/i);
  assert.match(ledger, /Do not regenerate accepted\s+siblings/i);
  assert.match(openai, /\$chany-media-production-loop(?![a-z0-9-])/i);
  assert.match(openai, /^\s*allow_implicit_invocation:\s*true\s*$/m);
});

test("video reference ingest distinguishes browser observation from inspectable capture", async () => {
  const skillPath = "skills/chany-video-reference-ingest/SKILL.md";
  const [skill, contract, openai, routing] = await Promise.all([
    readPluginFile(skillPath),
    readPluginFile("skills/chany-video-reference-ingest/references/browser-capture-contract.md"),
    readPluginFile("skills/chany-video-reference-ingest/agents/openai.yaml"),
    readPluginFile("skills/chany-studio/references/routing.md"),
  ]);

  assert.equal(frontmatterName(skill, skillPath), "chany-video-reference-ingest");
  assert.match(skill, /live-browser-observation/i);
  assert.match(skill, /authorized-tab-capture/i);
  assert.match(skill, /direct-media-url/i);
  assert.match(skill, /capture_required/i);
  assert.match(skill, /Metadata or a player view[\s\S]+complete inspectable capture or local file/i);
  assert.match(skill, /ChatCut[\s\S]+not a platform-link downloader/i);
  assert.match(contract, /start only after the user clicks/i);
  assert.match(contract, /save locally by default/i);
  assert.match(contract, /never reconstruct platform streams/i);
  assert.match(contract, /never claim that an extension[\s\S]+is connected/i);
  assert.match(contract, /^browser_capture:/m);
  assert.match(openai, /\$chany-video-reference-ingest(?![a-z0-9-])/i);
  assert.match(openai, /^\s*allow_implicit_invocation:\s*true\s*$/m);
  assert.match(routing, /video reference link[\s\S]+chany-video-reference-ingest/i);
});

test("campaign video uses the authorized ingest packet and shared media job ledger", async () => {
  const [campaign, contract, teardown, boundary] = await Promise.all([
    readPluginFile("skills/chany-campaign-video/SKILL.md"),
    readPluginFile("skills/chany-campaign-video/references/campaign-video-contract.md"),
    readPluginFile("skills/chany-studio/references/video-reference-teardown.md"),
    readPluginFile("skills/chany-studio/references/runtime-boundaries.md"),
  ]);

  assert.match(campaign, /\.\.\/chany-studio\/references\/video-reference-teardown\.md/);
  assert.match(campaign, /chany-video-reference-ingest/i);
  assert.match(campaign, /chany-media-production-loop/i);
  assert.match(contract, /shared media job ledger/i);
  assert.match(contract, /^\s+resolved_first_frame_role:/m);
  assert.match(teardown, /accepted `video_reference_packet` from `chany-video-reference-ingest`/i);
  assert.match(teardown, /user-invoked active-tab recording/i);
  assert.match(teardown, /Do not download from a platform, bypass access controls, scrape a feed/i);
  assert.match(teardown, /One second is a useful starting interval[\s\S]+not a fixed requirement/i);
  assert.match(teardown, /Pacing[\s\S]+may inform[\s\S]+do not transfer/i);
  assert.match(teardown, /L1-first, direct-L2-only policy/i);
  assert.match(boundary, /code convergence and media production as separate systems/i);
  assert.match(boundary, /never controls image or video\s+generation/i);
  await assert.rejects(
    readPluginFile("skills/chany-ugc-ads/SKILL.md"),
    (error) => error?.code === "ENOENT",
  );
});

test("retired creator-template workflow is absent from active plugin surfaces", async () => {
  const repoRoot = join(pluginRoot, "..", "..");
  await assert.rejects(
    readPluginFile("skills/chany-ugc-ads/SKILL.md"),
    (error) => error?.code === "ENOENT",
  );

  const activeSurfaces = await Promise.all([
    readPluginFile(".codex-plugin/plugin.json"),
    readPluginFile(".claude-plugin/plugin.json"),
    readPluginFile("README.md"),
    readPluginFile("skills/chany-studio/SKILL.md"),
    readPluginFile("skills/chany-studio/references/routing.md"),
    readPluginFile("skills/chany-project/references/project-contract.md"),
    readFile(join(repoRoot, "README.md"), "utf8"),
    readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
    readFile(join(repoRoot, "docs", "TROUBLESHOOTING.md"), "utf8"),
  ]);
  for (const surface of activeSurfaces) {
    assert.doesNotMatch(surface, /chany-ugc-ads|\bUGC\b/i);
  }
});

test("campaign video uses one evidence-led still-first motion contract", async () => {
  const skillPath = "skills/chany-campaign-video/SKILL.md";
  const [skill, contract, openai] = await Promise.all([
    readPluginFile(skillPath),
    readPluginFile("skills/chany-campaign-video/references/campaign-video-contract.md"),
    readPluginFile("skills/chany-campaign-video/agents/openai.yaml"),
  ]);

  assert.equal(frontmatterName(skill, skillPath), "chany-campaign-video");
  assert.match(skill, /product commercials, brand films/i);
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

test("campaign state binds media jobs, first frames, and assembled renders to stable versions", async () => {
  const state = await readPluginFile("skills/chany-studio/references/campaign-state.md");

  for (const field of [
    "governing_still_version_id",
    "resolved_first_frame_role",
    "media_job_id",
    "output_index",
    "motion_route",
    "reference_packet_id",
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
  for (const field of ["video_reference_packets", "campaign_video_manifests", "media_jobs", "performance_reviews"]) {
    assert.match(state, new RegExp(`^${field}:`, "m"));
  }
  assert.match(state, /changed reference capture range or file[\s\S]+accepted clip[\s\S]+delivery target[\s\S]+invalidates every affected record/i);
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

test("both manifests publish the 2.5.0 creative-direction release", async () => {
  const [claude, codex] = await Promise.all([
    readPluginFile(".claude-plugin/plugin.json").then(JSON.parse),
    readPluginFile(".codex-plugin/plugin.json").then(JSON.parse),
  ]);

  assert.equal(claude.version, "2.5.0");
  assert.match(codex.version, /^2\.5\.0(?:\+codex\.[a-z0-9.-]+)?$/i);
  assert.ok(codex.interface.capabilities.includes("GPT Image 2 default for generative still images with scoped overrides"));
  assert.ok(codex.interface.capabilities.includes("Native Claude question-card interview and Chany-file approval"));
  assert.ok(codex.interface.capabilities.includes("Source-isolated Pinterest, Production Paradise, and award-archive reference boards with in-chat previews"));
  assert.ok(codex.interface.capabilities.includes("Beginner-friendly expert creative direction and anti-genericity review"));
  assert.doesNotMatch(JSON.stringify(codex.interface), /Behance/i);
  assert.ok(codex.interface.capabilities.includes("Concept-led campaign video with approved GPT Image 2 governing stills"));
  assert.ok(codex.interface.capabilities.includes("Capability-labeled browser-extension capture intake for YouTube and Instagram video references"));
  assert.ok(codex.interface.capabilities.includes("Bounded still-image and campaign-video production loop with stable job ledger"));
  assert.ok(codex.interface.capabilities.includes("Local video assembly, segment replacement, hook variants, and delivery verification"));
  assert.ok(codex.interface.capabilities.includes("Bounded performance review and next one-variable experiment planning"));
  assert.ok(codex.interface.capabilities.includes("Runtime media-tool and Korean-font preflight"));
  assert.match(codex.interface.longDescription, /승인된 캠페인 영상 클립[\s\S]+로컬에서 안전하게 조립/i);
});

test("Claude marketplace metadata advertises the new video workflow without changing identity", async () => {
  const repoRoot = join(pluginRoot, "..", "..");
  const marketplace = JSON.parse(
    await readFile(join(repoRoot, ".claude-plugin", "marketplace.json"), "utf8"),
  );

  assert.equal(marketplace.name, "photo-reference-studio");
  assert.equal(marketplace.plugins[0].name, "photo-reference-studio");
  for (const tag of ["campaign-video", "video-reference-ingest", "browser-tab-capture", "youtube-video-reference", "instagram-video-reference", "media-production-loop", "media-job-ledger", "reference-video-teardown", "approved-first-frame", "video-assembly", "segment-replacement", "performance-learning", "environment-preflight"]) {
    assert.ok(marketplace.plugins[0].tags.includes(tag), `Claude marketplace missing ${tag}`);
  }
});

test("user docs route platform video links through authorized browser capture", async () => {
  const repoRoot = join(pluginRoot, "..", "..");
  const [repoReadme, pluginReadme, userGuide, troubleshooting] = await Promise.all([
    readFile(join(repoRoot, "README.md"), "utf8"),
    readPluginFile("README.md"),
    readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
    readFile(join(repoRoot, "docs", "TROUBLESHOOTING.md"), "utf8"),
  ]);

  for (const surface of [repoReadme, pluginReadme, userGuide]) {
    assert.match(surface, /chany-video-reference-ingest/i);
    assert.match(surface, /브라우저[\s\S]+캡처/i);
  }
  assert.match(troubleshooting, /YouTube·Instagram 링크를 줬는데 전체 영상 분석이 되지 않음/i);
  assert.match(troubleshooting, /플랫폼 영상 다운로드[\s\S]+DRM 우회로 해결하지 않습니다/i);
});

test("user docs place environment and paid checks before production and assembly", async () => {
  const repoRoot = join(pluginRoot, "..", "..");
  const [pluginReadme, userGuide] = await Promise.all([
    readPluginFile("README.md"),
    readFile(join(repoRoot, "docs", "USER-GUIDE.md"), "utf8"),
  ]);

  const environmentCheck = pluginReadme.indexOf("로컬 영상·프레임·배치 작업이 있으면 먼저");
  const paidCheck = pluginReadme.indexOf("여러 유료 생성이 필요하면");
  const production = pluginReadme.indexOf("공통 제작 스킬이 키비주얼");
  const assembly = pluginReadme.indexOf("캠페인 영상 클립은 모두 승인된 뒤");
  assert.ok(environmentCheck < paidCheck && paidCheck < production && production < assembly);

  assert.match(userGuide, /미디어 작업 장부·화면 검수 → 캠페인 영상 클립 승인 → 필요한 경우 로컬 환경 점검·영상 조립/i);
  assert.ok(userGuide.indexOf("## 10. 실행 환경 점검") < userGuide.indexOf("## 11. 영상 조립·컷 교체와 훅 변형"));
});
