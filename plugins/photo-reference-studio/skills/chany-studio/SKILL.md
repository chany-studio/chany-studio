---
name: chany-studio
description: Route end-to-end or multi-asset advertising and marketing requests through one industry expert overlay and the smallest production skill chain while maintaining shared evidence, source, copy, campaign, identity, and rights locks. Use for campaigns spanning strategy, visuals, ads, pages, or campaign video; not for one clearly named specialist output.
---

# Chany's Studio

Coordinate industry-aware advertising, promotion, and content production without duplicating specialist instructions. Keep the user's source materials, approved business facts, evidence, and accepted campaign direction authoritative across every handoff.

Every user-facing turn follows the shared [beginner experience contract](references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

Everyday look words are translated into professional direction through [plain-language direction](references/plain-language-direction.md). The core job is [product insertion](references/product-insertion.md): a user's product photo, references chosen for that product, and an ad-grade image or video with the real product in the reference's style.

Project initialization, `AGENTS.md`, project records, and runtime-specific delegation configuration belong to `chany-project`. Once a project is configured, use this router for its multi-deliverable production work.

## Route the request

Generic visual-reference research defaults to one combined 10-image board (Pinterest 5 + MeiGen 5) through `chany-reference-board`; read [combined-reference-board.md](references/combined-reference-board.md) and [reference-recovery.md](references/reference-recovery.md). Explicit source/count requests take precedence. Keep lane-specific provenance while consolidating the user decision after images are displayed.

Read [references/industry-overlay.md](references/industry-overlay.md), [references/routing.md](references/routing.md), and [references/runtime-boundaries.md](references/runtime-boundaries.md). For any customer-facing creative, also read the shared [creative-direction system](references/creative-direction-system.md) and [current creative signals](references/current-creative-signals.md). When any asset has a named platform, placement, storefront, outbound channel, or possible live publishing operation, also read and apply [references/platform-publication-adapter.md](references/platform-publication-adapter.md) before release or mutation. Choose one primary industry skill when the domain is known, then the smallest set of production specialists that covers the named deliverables. A single clearly named deliverable should go directly to its production owner after applying the industry packet when relevant. Use this router for ambiguous requests, complete campaigns, or work spanning two or more production categories.

The router owns industry selection, sequencing, checkpoints, and shared state. It does not own domain playbooks, production prompts, reference-search mechanics, or asset-specific QA.

Use `chany-motion-design` for standalone advertising motion graphics or a named graphics handoff within campaign video. Authorized footage object swaps/motion transfer use the campaign-video Genjutsu mode before assembly. Neither path is mandatory for ordinary stills, carousels or video generation.

## Coordinate a campaign

For purchase-oriented video, single-image or carousel advertising, read [references/performance-ad-contract.md](references/performance-ad-contract.md) and use its minimal chain instead of expanding the general campaign sequence below. Meta is the ad-benchmark lane; Pinterest is optional still-photo styling only. Reuse one conversion brief and one selected direction for the requested set. A single output keeps its existing production owner; this router coordinates only multi-format or ambiguous work.

For a multi-skill campaign, read [references/campaign-state.md](references/campaign-state.md) and maintain one shared state record. Pass only the fields the next specialist needs.

Default dependency order when those assets are requested:

1. select the industry mode and create its direction packet
2. approve the marketing brief, claim ledger, and asset matrix
3. prepare source-faithful assets when needed
4. find and select art direction through one source-isolated static-reference lane when needed: broad Pinterest, Production Paradise commercial photography, approved award archives, or `chany-ai-prompt-reference` for MeiGen image-and-prompt research
5. when a video reference link, browser capture, direct media URL, or local reference file is supplied, use `chany-video-reference-ingest` to establish the observable evidence level and produce the authorized capture packet before timing analysis
6. compile and approve one brand-specific creative direction, then one master campaign visual or design system
7. let each production owner, including `chany-campaign-video` when requested, define its asset specification, then use `chany-media-production-loop` for every requested generated still or campaign-video job
8. after the included campaign-video clip versions are accepted, use `chany-video-assembly` for a requested delivered cut, segment replacement, controlled hook variants, or verification
9. revise observed defects and complete family-level QA
10. when observed campaign results are supplied, return them to `chany-marketing-brief` for a bounded comparability review and next one-variable plan
11. for every named platform or placement, build the current-source adapter record and keep any live operation read-only until its separate write, budget, and activation approvals
12. when a publication gate applies, review the exact final copy and rendered asset through `chany-publication-review`

Do not add deliverables that the user did not request. For every generated still or campaign-video job, use `chany-media-production-loop` and its [media job ledger](references/media-job-ledger.md). For every generative still-image creation or edit, first apply [references/image-generation-runtime.md](references/image-generation-runtime.md): GPT Image 2.5 (`gpt_image_2_5`) is the default and another model requires a scoped, disclosed reason. Before a paid generation, also apply [references/higgsfield-runtime-contract.md](references/higgsfield-runtime-contract.md) and [references/creative-quality-loop.md](references/creative-quality-loop.md). Show the requested default, live-resolved operation and model, inputs, prompt, options, count, server adjustments and provider-reported cost information when available. One accepted key visual should establish the palette, lighting, material language, copy zones, and crop-safe logic for downstream assets.

## Preserve authority

- Original source files govern product, food, space, vehicle, interface, event, model, and garment identity.
- The selected industry playbook governs journey, proof, domain directing rules, claims risk, and reference taxonomy; it cannot approve unknown facts.
- User-approved text governs prices, offers, dates, claims, CTA, and legal copy.
- The accepted campaign master governs downstream art direction.
- A selected Pinterest reference contributes direction only, never its product, person, packaging, logo, copy, or other branded pixels. Its Pin page is the sole reference link; never follow an outbound destination.
- A specialist may change only the fields its deliverable owns.

If a connected production or local assembly capability is missing, continue with the brief, prompt, layout, clip manifest, and handoff state that can be completed honestly, then name the single unavailable capability. Use `chany-preflight` for an observed local-environment report when assembly, extraction, or batch image work is requested. Never claim that an asset was generated, assembled, displayed, verified, or delivered when it was not.
