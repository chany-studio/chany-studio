---
name: chany-campaign-video
description: Plan and create product or service commercials, brand films, reference-to-ad adaptations and purchase-oriented performance videos (전환 광고 영상), or make bounded AI edits to authorized source footage (영상 배경·조명 수정, 제품 교체, 연장). Reuse approved stills and evidence; not casual creator templates, deterministic assembly-only work or static ads.
---

# Chany Campaign Video

Create a concept-led campaign video without sacrificing product, service, place, interface, vehicle, event, or brand truth. Keep the user's approved evidence and copy authoritative, and make each scene perform a named marketing job.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

Translate everyday look words into professional photo and film direction, and offer the plain-words guided card when the user wants control, following [plain-language direction](../chany-studio/references/plain-language-direction.md).

First distinguish new video from editing existing footage. For a bounded source-video change, read [video editing](references/video-edit.md) and follow that branch instead of the new-film workflow below. Reuse source evidence and accepted decisions; do not force product-photo discovery, a full conversion brief or new governing-still generation. Pure trims, subtitles and timeline changes route directly to `chany-video-assembly`.

For a supplied physical product, follow the shared [product insertion pipeline](../chany-studio/references/product-insertion.md): references ranked for this product, clean product source, reference-style generation with the product as the authority, visible product match check, and optional upscale, extra ratios, or video.

For conversion or reference + product/service → video, read the shared [performance-ad contract](../chany-studio/references/performance-ad-contract.md) and [thirteen-role adaptation](../chany-studio/references/thirteen-role-adaptation.md). This skill remains the output owner; reuse customer/Meta research packets and the selected direction rather than adding a second reference-to-video orchestrator. Use `chany-jtbd-persona` and `chany-meta-ad-research` only for missing analysis. Pinterest is not a video reference route.

Bind `conversion_brief_version_id`, `insight_version_id` and `ad_reference_packet_ids` to the existing video concept; its `approved_copy_version_id` references the conversion brief's approved copy, not a second copy record. Keep the original `reference_packet_id` for the accepted video-intake packet. Build a compact source beat/page → general mechanism → our original scene map. Each scene retains the existing `usp_role`, `message_rank` and claim links, plus the relevant job and persuasion roles. Keep proposed timing distinct from observed reference timing, cover the target continuously, and verify narration/caption reading time. No mandatory thirteen scenes or fixed 25/50/25 timing split. Include primary ad text, platform headline/description/CTA and destination alongside the final video when this is an ad-package request.

Read [references/campaign-video-contract.md](references/campaign-video-contract.md) for the concept packet, scene schema, still-first cost ladder, motion decision, attempt log, and handoff contract. When the user supplies a YouTube, Instagram, or other video-page link, browser capture, direct media URL, or local reference file, first obtain an accepted `video_reference_packet` through `chany-video-reference-ingest`, then read the shared [video reference teardown](../chany-studio/references/video-reference-teardown.md). Analyze-only work stops at the teardown unless the user also requested a new concept or production.

Read the shared [creative-direction system](../chany-studio/references/creative-direction-system.md) and [current creative signals](../chany-studio/references/current-creative-signals.md). Compile one durable concept device and adapt hook, pacing, brand timing, safe zones, audio, captions, and CTA to the named placement. Do not impose one platform's hook formula or duration on every film.

Read the shared [live model routing](../chany-studio/references/latest-model-routing.md) before recommending a generation or edit route. Seedance 2.5 is the current general-purpose video default only when its live schema fits; FLUX 3, Kling Omni Edit, Gemini Omni Flash 1.1, Grok Video 1.5, Genjutsu, and other routes are capability-specific alternatives, never silent quality upgrades. Ordered independent edits of one approved ad belong to `chany-ad-variants`, and automated long-to-short extraction belongs to `chany-shortform-recut`.

For every governing still, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2.5 (`gpt_image_2_5`) unless a scoped override meets that contract. Run every generated still and clip through `chany-media-production-loop`, which applies the shared [media job ledger](../chany-studio/references/media-job-ledger.md), [paid-media runtime contract](../chany-studio/references/higgsfield-runtime-contract.md), and [creative quality loop](../chany-studio/references/creative-quality-loop.md).

For every named platform, placement, storefront, outbound channel, upload, schedule, or live publishing operation, read and follow the shared [platform publication adapter](../chany-studio/references/platform-publication-adapter.md). This skill never treats creative approval as authority to upload, activate, publish, or spend.

## Optional Higgsfield modes

For a requested object swap or motion transfer in authorized footage, read [Genjutsu revision](references/genjutsu-edit.md). Keep this skill as owner of the bounded edit without forcing a new campaign strategy or regenerating accepted source stills. The media loop executes the verified operation; assembly receives only an accepted replacement version.

For animated hook text, benefit graphics, logo reveals or CTA cards, call `chany-motion-design` only for those requested layers/clips. It checks Higgsfield execution capability and returns accepted graphics or an explicit plan-only handoff. Native motion graphics are optional, not a dependency of every campaign video.

## Workflow

For simple reference remakes, reuse the accepted reference and brief without new photo discovery. In each scene distinguish product movement from camera movement and keep only the motion needed to communicate the idea. Lock product state and position at cuts when continuity matters; an intentional discontinuity should be part of the plan. Apply the output-specific playback checks in creative-quality-loop.md, including the final frame and interaction moments.

1. Consume the selected industry direction packet and approved marketing brief. Lock the objective, audience decision, primary message, CTA, claim ledger, required evidence, disclosures, source authorities, platform, duration or duration limit, ratio, and named deliverables.
2. If a video reference is supplied, classify it through `chany-video-reference-ingest`. A player or browser view supports only observed timestamps; an inspectable extension capture or local file may proceed through the relevant non-destructive `chany-preflight` checks and shared beat table. Transfer timing logic only, not protected expression.
3. Build one `video_concept_packet`. Give every scene one `usp_role`, a `message_rank`, a proof or transition job, a continuity decision, and a measurable acceptance condition. Do not add scenes that have no campaign job.
4. Choose the least risky motion route per scene: generated motion, deterministic movement over an accurate still, or authorized supplied or captured footage. Prefer an accurate still move when generated motion would distort identity, geometry, packaging, labels, UI, evidence, or copy.
5. Approve the concept and one governing still for every identity-sensitive generated scene before video generation. In quick start, tell the user once at the beginning that there will be two confirmation cards (the still image, then the video), and fold the concept, copy, and still cost into the first card ([beginner experience](../chany-studio/references/beginner-experience.md)). The approved still establishes the first-frame authority; a provider success state is not visual acceptance.
6. Hand the approved scene specification to `chany-media-production-loop`. It resolves the active video-generation tools and schemas, records stable output indices and job references, performs paid preflight, generates only the approved scope, and never silently retries an ambiguous paid job.
7. Review every final-resolution clip at meaningful timestamps for authority fidelity, claim and disclosure accuracy, temporal and physical plausibility, continuity, crop, text, audio, and the industry must-pass gates. Record defects and correct one defect class at a time within the approved attempt limit.
8. Hand only accepted clip versions, the approved shot order and in/out points, copy version, target authority, and unresolved defects to `chany-video-assembly` for assembly, segment replacement, variants, or delivery verification.

This skill owns concept, scene design, and clip acceptance; `chany-media-production-loop` owns the generation job lifecycle. It does not own casual creator-template production, deterministic post-production, publication, or campaign performance interpretation. If a required generation capability is unavailable, return the completed concept packet, shot plan, governing-still prompts, live-interface handoff, and exact unavailable capability without claiming that media was created.

When `chany-viral-product-remake` hands off a short product-video job, consume its accepted fast remake brief without restarting strategy or re-interviewing the user. Preserve its chosen original-remake versus authorized-product-swap path, then own only scene design, clip acceptance, and the Genjutsu revision when applicable.
