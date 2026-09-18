---
name: chany-meta-ad-research
description: Find and analyze Meta Ad Library (메타 광고 라이브러리) video, single-image and carousel ad references for product or service conversion creative. Extract hooks, design, copy, proof and CTA with evidence limits; not Ads Manager performance reporting, ad publishing or Pinterest moodboards.
---

# Chany Meta Ad Research

Own read-only ad discovery and reference analysis, not customer truth, media production or account operation. Read [research and handoff rules](references/meta-ad-research.md). For production requests, return the selected evidence to the existing output owner under the shared [performance-ad contract](../chany-studio/references/performance-ad-contract.md).

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

1. Reuse the supplied product/service brief, market, language, requested formats and references. Identify the customer decision and actual offer; missing customer evidence remains a hypothesis. Do not force project initialization or MoAI installation.
2. Inspect the current host's real browser/extension or supported read-only connector. Search the official Meta Ad Library only for ad discovery; use supplied library links directly. A reference request does not authorize connecting an ad account, changing it or spending.
3. Select relevant, inspectable ads with a recorded reason, not invented performance rankings. Default to six ad candidates per requested board, or the user's positive count; a carousel is one candidate, not one per card. State format coverage and any shortfall. Never cross-fill from Pinterest, award archives, spy tools or another website.
4. Inspect actual creatives and their visible copy. Separate observed facts, interpretation and proposed adaptations. For video timing, use `chany-video-reference-ingest`; for carousel, inspect the available cards and record their observed order and completeness. Never infer unseen cards, unplayed audio, cut timing or missing CTA text.
5. Return an `ad_reference_packet`, native/inline previews when genuinely supported, canonical ad links and concise adaptation reasoning. A link/HTML file alone is not a displayed image. If media cannot be inspected or displayed, state the limitation and accept user-supplied captures/files; do not fabricate previews or alter the Pinterest preview server's allowlist.

Public delivery metadata is not proof of purchases, CPA or ROAS. Use `unverified`, `reported` or `matched-account-data` performance evidence labels as defined in the reference, independent of media inspection completeness. No “winning ad” claim without matched observed performance and a valid comparison.

An analysis-only request ends here. A production request returns to `chany-ad-creative` for single images/carousels, `chany-campaign-video` for video, or `chany-studio` for a requested multi-format set. Preserve the source, packet version, limitations and selection. MoAI is optional; its report analyzer is not a replacement for this public-library research owner.
