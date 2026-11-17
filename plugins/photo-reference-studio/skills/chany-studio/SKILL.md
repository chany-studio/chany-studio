---
name: chany-studio
description: Start product/service creation in ChatGPT Work with a short adaptive interview, reference discovery and easy revisions; help with 챠니 설치·Apify 연결·연결 점검. Route single outputs to their owner and coordinate multi-asset campaigns. For narrative film, short drama, scripts or storyboards (드라마 대본·콘티), load the installed ai-drama-production skill before drafting, including for text-only requests.
---

# Chany's Studio

Coordinate industry-aware advertising, promotion, and content production without duplicating specialist instructions. Keep the user's source materials, approved business facts, evidence, and accepted campaign direction authoritative across every handoff.

Every user-facing turn follows the shared [beginner experience contract](references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

Everyday look words are translated into professional direction through [plain-language direction](references/plain-language-direction.md). The core job is [product insertion](references/product-insertion.md): a user's product photo, references chosen for that product, and an ad-grade image or video with the real product in the reference's style.

Project initialization, `AGENTS.md`, project records, and runtime-specific delegation configuration belong to `chany-project`. Once a project is configured, use this router for its multi-deliverable production work.

## Video is a primary output

For a video request, apply [video-first experience](references/video-first-experience.md) before any generic photo board or image-first campaign sequence. The promised deliverable is the requested playable video, with its requested editing, captions and sound; a still or generated clip is an intermediate only when the approved plan needs it. Preserve explicit photo requests. Do not require a still-photo campaign before starting video.

## Narrative drama

For fiction, episodic or branded drama, and requests for a drama script, scene or storyboard (드라마 대본·콘티), **load the installed `ai-drama-production` skill before drafting**, even for a single scene or text-only plan. In Claude, select `photo-reference-studio:ai-drama-production` with the skill loader. In file-based hosts, read its [SKILL.md](../ai-drama-production/SKILL.md) from this plugin if there is no skill loader. Apply its story and continuity workflow to the requested deliverable. If the skill cannot be loaded, say so and continue with the planning work you can support.

Use `cinematic-director` when a separate directing task needs it. Apply the [drama production integration](references/drama-production-integration.md) for handoffs to media generation, editing and publication review when those stages are requested.

## Route the request

For installation, Apify connection, missing tools or a first-use setup question, use [Work installation and connection help](references/work-install-and-connect.md). Diagnose only the missing step; preserve working connections and distinguish creator-account validation from untested accounts.

Use [Work-first shared interview](references/work-first-interview.md) as the common front door. “시작해줘”, “뭘 준비해야 해?”, “하나씩 물어봐줘” and an attached product/service without a complete brief start compact intake. Never require a beginner to name a specialist or initialize a project before one output. Already known facts and clear bounded edits skip redundant questions.

For “이 구도 그대로 제품만” or a service screen in a chosen reference, apply [reference insertion](references/reference-insertion.md). Preserve a supplied base layout when that is the request; service evidence is as valid as a product photo. For requested broader discovery or Instagram competitor evidence, use [curated sources](references/curated-reference-sources.md) and [optional Metricool](references/metricool-reference-research.md) through the existing reference owner.

Resolve the intended effect, viewer and placement through [content intent](references/content-intent.md) before choosing a concept or model. Read existing brief/state first; hand the same decisions to specialists. A product photo alone does not establish a conversion campaign, and a local edit does not require a marketing interview.

Supplied reference images take priority under [reference-led design](references/reference-led-design.md). Carousel, thumbnail and ad requests use [design craft](references/design-intelligence.md) and `chany-ad-creative`'s format modes. Users choose visible results in everyday words, not technical vocabulary.

Generic visual-reference research defaults to one 6-image Pinterest board through `chany-reference-board`; read [reference-board-defaults.md](references/reference-board-defaults.md) and [reference-recovery.md](references/reference-recovery.md). Explicit source/count requests take precedence. Keep lane-specific provenance while consolidating the user decision after images are displayed.

Read [references/industry-overlay.md](references/industry-overlay.md), [references/routing.md](references/routing.md), and [references/runtime-boundaries.md](references/runtime-boundaries.md). For any customer-facing creative, also read the shared [creative-direction system](references/creative-direction-system.md), [current creative signals](references/current-creative-signals.md), and [live model routing](references/latest-model-routing.md). When any asset has a named platform, placement, storefront, outbound channel, or possible live publishing operation, also read and apply [references/platform-publication-adapter.md](references/platform-publication-adapter.md) before release or mutation. Choose one primary industry skill when the domain is known, then the smallest set of production specialists that covers the named deliverables. A single clearly named deliverable should go directly to its production owner after applying the industry packet when relevant. Use this router for ambiguous requests, complete campaigns, or work spanning two or more production categories.

The router owns industry selection, sequencing, checkpoints, and shared state. It does not own domain playbooks, production prompts, reference-search mechanics, or asset-specific QA.

Use `chany-motion-design` for standalone advertising motion graphics or a named graphics handoff within campaign video. Authorized footage object swaps/motion transfer use the campaign-video Genjutsu mode before assembly. Ordered independent edits of one approved ad use `chany-ad-variants`; YouTube-to-social extraction uses `chany-shortform-recut`; product meshes and editable 3D advertising scenes use `chany-product-3d`. None is mandatory for ordinary stills, carousels, or one-off video generation.

For the common single-output request “short Reel/Short link + my product,” route directly to `chany-viral-product-remake`. It gives beginners one intake while chaining reference ingest, product authority, original campaign scenes or an authorized product swap, generation, and assembly. Do not expand it into the full campaign sequence unless the user asks for additional formats.

## Coordinate a campaign

For “내 제품에 맞는 조회수·좋아요·공유수 높은 인스타 사례”, route the existing product brief to `chany-reference-board` using [Apify popularity research](references/apify-instagram-research.md). Keep the interview short and the default three-candidate shortlist.

For purchase-oriented video, single-image or carousel advertising, read [references/performance-ad-contract.md](references/performance-ad-contract.md) and use its minimal chain instead of expanding the general campaign sequence below. [Instagram is the first ad-reference source, with Meta as a complement](references/instagram-ad-reference.md); explicit source requests take priority. Pinterest is optional still-photo styling only. Reuse one conversion brief and one selected direction for the requested set. A single output keeps its existing production owner; this router coordinates only multi-format or ambiguous work.

For a multi-skill campaign, read [references/campaign-state.md](references/campaign-state.md) and maintain one shared state record. Pass only the fields the next specialist needs.

Default dependency order when those assets are requested:

1. select the industry mode and create its direction packet
2. approve the marketing brief, claim ledger, and asset matrix
3. prepare source-faithful assets when needed
4. find and select art direction through one source-isolated static-reference lane when needed: broad Pinterest, Production Paradise commercial photography, approved advertising archive
5. when a video reference link, browser capture, direct media URL, or local reference file is supplied, use `chany-video-reference-ingest` to establish the observable evidence level and produce the authorized capture packet before timing analysis; a short product-video reference plus the user's product uses `chany-viral-product-remake` as the simple front door
6. compile and approve one brand-specific creative direction, then one master campaign visual or design system
7. let each production owner, including `chany-campaign-video` when requested, define its asset specification, then use `chany-media-production-loop` for every requested generated still or campaign-video job
8. after the included campaign-video clip versions are accepted, use `chany-video-assembly` for a requested delivered cut, segment replacement, controlled deterministic hook variants, or verification; route generative multi-edit ad variants to `chany-ad-variants` and automated long-to-short extraction to `chany-shortform-recut`
9. revise observed defects and complete family-level QA
10. when observed campaign results are supplied, return them to `chany-marketing-brief` for a bounded comparability review and next one-variable plan
11. for every named platform or placement, build the current-source adapter record and keep any live operation read-only until its separate write, budget, and activation approvals
12. when a publication gate applies, review the exact final copy and rendered asset through `chany-publication-review`

Do not add deliverables that the user did not request. For every generated still or campaign-video job, use `chany-media-production-loop` and its [media job ledger](references/media-job-ledger.md). For every generative still-image creation or edit, first apply [references/image-generation-runtime.md](references/image-generation-runtime.md): GPT Image 2.6 (`gpt_image_2_6`) is the default and another model requires a scoped, disclosed reason. Before a paid generation, also apply [references/higgsfield-runtime-contract.md](references/higgsfield-runtime-contract.md) and [references/creative-quality-loop.md](references/creative-quality-loop.md). Show the requested default, live-resolved operation and model, inputs, prompt, options, count, server adjustments and provider-reported cost information when available. One accepted key visual should establish the palette, lighting, material language, copy zones, and crop-safe logic for downstream assets.

## Preserve authority

- Original source files govern product, food, space, vehicle, interface, event, model, and garment identity.
- The selected industry playbook governs journey, proof, domain directing rules, claims risk, and reference taxonomy; it cannot approve unknown facts.
- User-approved text governs prices, offers, dates, claims, CTA, and legal copy.
- The accepted campaign master governs downstream art direction.
- A selected Pinterest reference contributes direction only, never its product, person, packaging, logo, copy, or other branded pixels. Its Pin page is the sole reference link; never follow an outbound destination.
- A specialist may change only the fields its deliverable owns.

If a connected production or local assembly capability is missing, continue with the brief, prompt, layout, clip manifest, and handoff state that can be completed honestly, then name the single unavailable capability. Use `chany-preflight` for an observed local-environment report when assembly, extraction, or batch image work is requested. Never claim that an asset was generated, assembled, displayed, verified, or delivered when it was not.

## Editable Adobe and animation assets

For an editable Adobe production request, use `adobe-video-pipeline` to coordinate `adobe-after-effects-production` and `adobe-premiere-finishing`; use `image-asset-production` for coherent animation-ready source sets. Read [native production integration](references/native-production-integration.md). Explicit app/native-project requests take precedence over generic motion or assembly routing. Retain this studio's brief, cost controls and publication review; verify actual host access before claiming execution.
