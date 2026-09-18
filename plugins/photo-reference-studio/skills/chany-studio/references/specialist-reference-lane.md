# Specialist reference lane contract

Shared rules for the source-isolated specialist lanes `chany-commercial-photo-reference` (Production Paradise) and `chany-award-ad-reference` (Ads of the World, D&AD, The One Show). Each skill's own `references/source-policy.md` adds only its provider scope, ranking signals, provider-specific rejections, and record fields.

## Query

- Read the shared [industry taxonomy](../../chany-reference-board/references/industry-taxonomy.json). Search the selected branch's exact L1 subject label first, then zero or one direct L2 child. Never build an L3, long-tail, or style-heavy phrase.
- Provider or domain restriction is routing metadata, not part of the semantic phrase. Do not add quality, style, trend, platform, audience, location, mood, color, lighting, camera, brand, agency, or campaign modifiers.
- Apply [current creative signals](current-creative-signals.md) only after discovery, as a ranking lens.
- Apply [automatic recovery](reference-recovery.md) inside the same lane before reporting a shortfall. Equivalent wording, pagination, and unused-candidate replacement need no extra-search approval.

## Count

Resolve `target_count` from the user's explicit positive whole number or default to `6`. Never silently cap, expand, or reduce it. Collect enough candidates for replacements and deduplicate alternate crops, formats, and near-duplicates of one shoot or execution.

## Display

- Show exactly `target_count` distinct references as actual images in the current conversation. A bare URL, link list, HTML board, filename, metadata card, contact sheet, or page screenshot does not complete the board.
- The bundled `fetch_reference_preview_image` tool is Pinterest-only. Never send a specialist-lane URL to it; use a host-native public image display path that returns actual image content without bypassing access controls.
- Accept a preview only when discovery pairs it with its exact public source page. Keep that page as provenance and never follow an outbound agency, brand, entrant, social, store, contact, or download destination.
- Reject login-gated pages, uncertain image-to-page pairing, collages that prevent shot analysis, severe compression or dominant watermarks, and anything that cannot be rendered as image content.

## Use and rights

- Every result is direction-only. Never imply reuse rights, effectiveness, award status, or commercial results beyond what the source page states. A selected result may be used as a generation reference input only through [product insertion](product-insertion.md) §4, after the user approves the confirmation card that names it as someone else's photo; never deliver its pixels, and reject any output that could pass for it.
- Transfer composition, light, hierarchy, proof device, metaphor, sequencing, and attention mechanics. Never copy subject identity, packaging, logo, slogan, copy, branded characters, people, proprietary art, or distinctive campaign execution.
- Every accepted record keeps at least `provider`, `source_url`, `search_query`, `fit_note`, `visual_dna`, `exclude_from_reference`, `display_confirmed`, and `rights_status: "direction-only"`.
- Show the images and recommend one; the reference choice is answered together with the production plan in one question, as [reference recovery](reference-recovery.md) describes. A reply of one number or `자동 선택` answers the reference part.

## Shortfall

If the permitted L1/L2 pool cannot supply the requested number of visible, traceable images, return an incomplete diagnostic with `requested`, `visible`, and `shortfall` counts. Never widen the lane: no Pinterest, MeiGen, another specialist lane, Stocksy, ShotDeck, Death to Stock, a stock library, or another site without a new user request.
