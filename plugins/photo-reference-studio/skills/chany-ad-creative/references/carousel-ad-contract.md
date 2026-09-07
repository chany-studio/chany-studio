# Conversion carousel

A carousel is one ad unit with ordered cards and accompanying platform copy, not a set of unrelated posters. Use the shared [performance-ad contract](../../chany-studio/references/performance-ad-contract.md) for strategy, source lanes and full copy fields. Keep static authority, exact-copy and publication gates from `ad-formats.md`.

## Plan the set

Honor the requested positive card count when supported by the current placement. If absent, propose the smallest useful count based on the argument and approve it with the concept; never inherit the reference-board default of six or the thirteen-role count. Resolve current platform limits through the publication adapter. Unsupported requested counts require a revised plan, not silent truncation or an invented limit.

Choose the first card's reason to care, each following card's useful contribution, and the final next action. Example: relevant situation → actual demonstration → supported difference → objection answer → offer/CTA. The product or service should be identifiable without waiting through an unrelated teaser. Each card has one dominant message and useful standalone context; an essential qualifier must accompany its claim on that card, not only appear on the last card.

Bind one `carousel_manifest` to `ad_unit_id`, `conversion_brief_version_id`, `creative_direction_version_id`, `copy_version_id`, `placement`, `card_count`, `sequence_mode`, `platform_order_status`, `ad_copy_packet` and `cards[]`:

- `card_id`, `order`, `message_job`, `job_id`, `role_ids`, `claim_refs`;
- `visual_brief`, `in_creative_copy`, optional platform title/description/destination as supported, typography/crop/safe-area rules;
- `authority_input_version_ids`, `prompt_version_id`, `media_job_id` when generated, `asset_version_id`, `acceptance_status`, unresolved defects.

`sequence_mode` is `ordered-story | independent-cards`. Check whether the actual destination/placement can preserve the required order, including automatic rearrangement or presentation options. If unverified, label ordered-story delivery pending; propose independent cards if appropriate, but do not silently change the argument or ad account settings.

## Produce and review

Approve the shared layout/copy and a governing first-card treatment once. Build the remaining cards with the same brand system while varying hierarchy to fit each message. Prompt one identified card at a time or use a live-supported batch with stable output indices. Keep card count, ad-unit count and paid-generation call count separate in the cost preflight. Retry only failed cards within the shared attempt limit; never regenerate accepted siblings to repair one typo.

Inspect every card individually at expected mobile size and the whole sequence together. Check complete/unique IDs, correct order/count, product/service truth, continuous design, exact text, coherent promise, per-card qualification proximity, final CTA and destination match. Do not make readable text depend on joining two separately cropped cards. A visual QA score is not proof of conversion performance.

Deliver separate final card files in order, the platform ad-copy packet and a compact set preview/contact sheet when supported. The contact sheet is supplementary, never the upload asset. Mark missing typesetting, missing files, unsupported order control or unreadable disclosure as pending, not delivered. Recheck the exact final set through publication review when applicable.
