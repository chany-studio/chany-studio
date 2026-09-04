---
name: chany-studio
description: Route end-to-end or multi-asset advertising and marketing requests through one industry expert overlay and the smallest production skill chain while maintaining shared evidence, source, copy, campaign, identity, and rights locks. Use for campaigns spanning strategy, visuals, ads, pages, promotion, or UGC; not for one clearly named specialist output.
---

# Chany's Studio

Coordinate industry-aware advertising, promotion, and content production without duplicating specialist instructions. Keep the user's source materials, approved business facts, evidence, and accepted campaign direction authoritative across every handoff.

Project initialization, `AGENTS.md`, project records, and runtime-specific delegation configuration belong to `chany-project`. Once a project is configured, use this router for its multi-deliverable production work.

## Route the request

Read [references/industry-overlay.md](references/industry-overlay.md), [references/routing.md](references/routing.md), and [references/moai-specialist-chain.md](references/moai-specialist-chain.md). When any asset has a named platform, placement, storefront, outbound channel, or possible live publishing operation, also read and apply [references/platform-publication-adapter.md](references/platform-publication-adapter.md) before release or mutation. Choose one primary industry skill when the domain is known, then the smallest set of production specialists that covers the named deliverables. A single clearly named deliverable should go directly to its production owner after applying the industry packet when relevant. Use this router for ambiguous requests, complete campaigns, or work spanning two or more production categories.

The router owns industry selection, sequencing, checkpoints, and shared state. It does not own domain playbooks, production prompts, reference-search mechanics, or asset-specific QA.

## Coordinate a campaign

For a multi-skill campaign, read [references/campaign-state.md](references/campaign-state.md) and maintain one shared state record. Pass only the fields the next specialist needs.

Default dependency order when those assets are requested:

1. select the industry mode and create its direction packet
2. approve the marketing brief, claim ledger, and asset matrix
3. prepare source-faithful assets when needed
4. find and select art direction when needed
5. approve one master campaign visual or design system
6. derive page, static-ad, promotion, and UGC assets from that master
7. after the included UGC clip versions are accepted, use `chany-video-assembly` to conform and assemble them when a delivered cut or controlled hook variants are requested
8. revise observed defects and complete family-level QA
9. for every named platform or placement, build the current-source adapter record and keep any live operation read-only until its separate write, budget, and activation approvals
10. when a publication gate applies, review the exact final copy and rendered asset through `chany-publication-review`

Do not add deliverables that the user did not request. For every generative still-image creation or edit, first apply [references/image-generation-runtime.md](references/image-generation-runtime.md): GPT Image 2 (`gpt-image-2`) is the default and another model requires a scoped, disclosed reason. Before a paid generation, also apply [references/higgsfield-runtime-contract.md](references/higgsfield-runtime-contract.md) and [references/creative-quality-loop.md](references/creative-quality-loop.md). Show the requested default, live-resolved operation and model, inputs, prompt, options, count, server adjustments and provider-reported cost information when available. One accepted key visual should establish the palette, lighting, material language, copy zones, and crop-safe logic for downstream assets.

## Preserve authority

- Original source files govern product, food, space, vehicle, interface, event, model, and garment identity.
- The selected industry playbook governs journey, proof, domain directing rules, claims risk, and reference taxonomy; it cannot approve unknown facts.
- User-approved text governs prices, offers, dates, claims, CTA, and legal copy.
- The accepted campaign master governs downstream art direction.
- A selected online reference contributes direction only, never its product, person, packaging, logo, copy, or other branded pixels.
- A specialist may change only the fields its deliverable owns.

If a connected production or local assembly capability is missing, continue with the brief, prompt, layout, clip manifest, and handoff state that can be completed honestly, then name the single unavailable capability. Use `chany-preflight` for an observed local-environment report when assembly, extraction, or batch image work is requested. Never claim that an asset was generated, assembled, displayed, verified, or delivered when it was not.
