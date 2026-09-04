---
name: chany-studio
description: Route end-to-end or multi-asset product marketing requests across Chany's Studio skills while maintaining shared source, copy, campaign, model, and garment locks. Use for campaigns spanning key visuals, ads, detail pages, promotion, UGC, or several deliverables; not for one clearly named specialist output.
---

# Chany's Studio

Coordinate advertising and commerce production without duplicating the specialist instructions. Keep the user's source materials, approved business facts, and accepted campaign direction authoritative across every handoff.

Project initialization, `AGENTS.md`, project records, and project-specific Claude/Codex agents belong to `chany-project`. Once a project is configured, use this router for its multi-deliverable production work.

## Route the request

Read [references/routing.md](references/routing.md) and choose the smallest set of specialists that covers the named deliverables. A single clearly named deliverable should go directly to its owner skill. Use this router for ambiguous requests, complete campaigns, or work spanning two or more categories.

The router owns sequencing, checkpoints, and shared state. It does not own production prompts, reference-search mechanics, or asset-specific QA.

## Coordinate a campaign

For a multi-skill campaign, read [references/campaign-state.md](references/campaign-state.md) and maintain one shared state record. Pass only the fields the next specialist needs.

Default dependency order when those assets are requested:

1. approve the marketing brief and asset matrix
2. prepare source-faithful product assets
3. find and select art direction when needed
4. approve one master campaign visual
5. derive detail-page, static-ad, promotion, and UGC assets from that master
6. revise observed defects and complete family-level QA

Do not add deliverables that the user did not request. Before multiple paid generations, show the effective asset count and obtain the required content choices. One accepted key visual should establish the palette, lighting, material language, copy zones, and crop-safe logic for downstream assets.

## Preserve authority

- Original source images govern product, food, model, and garment identity.
- User-approved text governs prices, offers, dates, claims, CTA, and legal copy.
- The accepted campaign master governs downstream art direction.
- A selected online reference contributes direction only, never its product, person, packaging, logo, copy, or other branded pixels.
- A specialist may change only the fields its deliverable owns.

If a connected production capability is missing, continue with the brief, prompt, layout, and handoff state that can be completed honestly, then name the single unavailable capability. Never claim that an asset was generated, displayed, verified, or delivered when it was not.
