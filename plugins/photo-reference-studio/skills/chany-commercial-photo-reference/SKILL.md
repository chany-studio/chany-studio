---
name: chany-commercial-photo-reference
description: "Production Paradise를 명시하거나 전문 사진작가 포트폴리오를 요청했을 때만 해당 사이트의 사진 레퍼런스를 찾는다. Not the default for 제품 사진, 광고 사진, 인스타그램용 사진, 고급 제품 촬영 or reference-to-product creation: use chany-reference-board's Pinterest lane for those. No general-web or retailer fallback."
---

# Chany Commercial Photo Reference

**Entry guard:** A request for an attractive product/advertising photo is not a request for this specialist source. If the user did not name Production Paradise or ask for photographers' portfolios, hand still styling to `chany-reference-board` under [photo reference execution](../chany-studio/references/photo-reference-execution.md) before searching. If this source was explicitly requested, keep its isolation even after 403/empty results; report the shortfall instead of filling with retailer images.

Use Production Paradise as a specialist commercial-photography lane. Before discovery, read the shared [specialist reference lane contract](../chany-studio/references/specialist-reference-lane.md) and this lane's [source policy](references/source-policy.md). The contract owns the L1-then-optional-direct-L2 query, count, display, rights, recovery, and shortfall rules; this file adds only what is specific to Production Paradise.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

## Required result

- Resolve `target_count` from the user's explicit positive whole number or default to `6`.
- Search only public `productionparadise.com` pages with the taxonomy L1 subject first and at most one direct L2 child.
- Rank candidates for commercial craft, subject compatibility, transferable composition and lighting, production feasibility, creator diversity, and low brand-contamination risk.
- Show exactly `target_count` distinct photographs as actual images in the current conversation. Under each image include the provider, public Production Paradise source page, query, fit note, Visual DNA, and the branded elements that must not transfer.
- Never present a portfolio image as licensed for reuse.

On a shortfall, report the incomplete diagnostic from the contract. Do not fall back to Pinterest, an award archive, Stocksy, ShotDeck, Death to Stock, or another site without a new user request.
