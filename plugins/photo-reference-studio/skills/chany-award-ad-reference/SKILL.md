---
name: chany-award-ad-reference
description: Find and compare award-level advertising and commercial-photography references from Ads of the World, D&AD, and The One Show with visible previews, source provenance, campaign logic, and transferable art-direction principles. Use for campaign concepts and benchmark research; not for broad moodboards or licensed asset sourcing.
---

# Chany Award Ad Reference

Use award and campaign archives as a distinct strategy lane. Read [references/source-policy.md](references/source-policy.md) before discovery and read the shared [industry taxonomy](../chany-reference-board/references/industry-taxonomy.json) for the permitted L1 and direct-L2 subject labels. Apply [current creative signals](../chany-studio/references/current-creative-signals.md) only after collection; do not turn trend vocabulary into search keywords.

## Required result

- Resolve `target_count` from the user's explicit positive whole number or default to `6`.
- Search only public pages on Ads of the World, D&AD, and The One Show. Use one exact L1 subject query first and optionally one direct L2 child; never construct an L3 or style-heavy phrase.
- Prefer campaign cases with a legible hero asset, identifiable advertiser or entrant, visible source page, and an idea that can be abstracted without copying execution.
- Show exactly `target_count` distinct actual images in the current conversation, using each case's legible hero visual. For three or more results, use at least two of the approved archives when enough qualifying results exist.
- Under each image include archive, source page, query, campaign or work title when visible, fit note, Visual DNA, message mechanism, and the branded elements that must not transfer.
- Treat all work as direction-only and never infer reuse rights, effectiveness, award status, or commercial results beyond what the source page actually states.
- In `semi-auto`, wait for a number or `자동 선택` before paid production.

The bundled `fetch_reference_preview_image` connection accepts Pinterest only and must not receive these URLs. Use a host-native public image display path. A link list, HTML file, contact sheet, metadata object, or page screenshot is not a completed image board.

If the approved L1/L2 pool cannot provide the requested visible count, return an incomplete diagnostic with requested, visible, and shortfall counts. Do not add Pinterest, Production Paradise, Stocksy, ShotDeck, Death to Stock, or another provider without a new user request.
