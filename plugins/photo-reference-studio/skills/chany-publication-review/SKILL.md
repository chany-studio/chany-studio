---
name: chany-publication-review
description: Review advertising, promotional, detail-page, outbound-message, and campaign-video assets before publication using jurisdiction-, channel-, evidence-, rights-, and final-render gates. Use when a draft needs a version-bound release review; not as legal advice, legal clearance, or authority to publish.
---

# Chany Publication Review

Create a traceable, version-bound publication review for a specific copy and asset set. Allow strategy, copy, and creative work to continue as clearly marked drafts, but do not clear publication when a material fact, evidence item, official source, right, disclosure, or named reviewer is missing.

Read [references/publication-gate.md](references/publication-gate.md) before conducting a review. If the candidate has a named platform, placement, storefront, outbound channel, upload, schedule, or live operation, also read and complete the shared [platform publication adapter](../chany-studio/references/platform-publication-adapter.md); no publish-capable flow may bypass it.

## Boundary

- This skill is a structured marketing-production gate, not legal advice, a legal opinion, regulatory certification, platform preapproval, or legal clearance.
- It does not publish, upload, schedule, send, or approve content on the user's behalf.
- It may summarize official requirements and identify risk, but a named human owner remains accountable for the publication decision.
- A completed automated review never upgrades itself to `reviewed-by-named-owner`.

## Required inputs

Establish these before assigning a publishable status:

- target jurisdiction or jurisdictions, publication date, audience or age boundary, and every channel or placement;
- exact copy, offer, destination, asset, and final-render version identifiers;
- the current evidence, price and transaction terms, rights and consent records, disclosures, domain controls, and platform requirements;
- the named human reviewer, their role, and the scope they are authorized to review.

Missing inputs do not prevent draft ideation or draft production. They do prevent publication and must appear in `unresolved_items`.

## Workflow

1. Freeze the review candidate. Record stable identifiers for the exact copy, asset files, crop or layout variant, final render, offer terms, and landing destination.
2. Identify the applicable jurisdiction, channel, placement, audience, domain, publication timing, and named review owner. Do not assume one market's rules apply elsewhere.
3. At review time, look up current official primary sources for each applicable rule or platform requirement. Record source title, publisher, URL, published or updated date when available, effective date, access date, expiry or recheck trigger, scope, and the lane it supports. Treat secondary summaries only as discovery aids.
4. Run all five lanes in the publication gate: claims and evidence; offer and transaction; outbound messaging; endorsement, creator, and rights; domain, platform, and final render.
5. Separate confirmed facts, supported claims, draft proposals, missing evidence, review-owner decisions, and hard blockers. Never repair missing evidence by weakening labels or inventing a disclaimer.
6. Assign exactly one status from the status model below. Return precise fixes and the owner for every unresolved item.
7. When the named owner reviews the exact frozen version, record their name, role, decision, timestamp, and any expiry or recheck date. Do not imply broader approval than the recorded scope.
8. Reopen the review after any invalidating change. Preserve the old record as history; never transfer its status to a changed derivative.

## Status model

- `blocked`: a prohibited, unsafe, deceptive, unauthorized, or materially unsupported element must be removed, replaced, or escalated before the candidate proceeds.
- `draft-only`: drafting may continue, but publication is blocked because facts, evidence, official-source checks, rights, disclosures, exact version identifiers, or the named reviewer are incomplete.
- `ready-for-named-human-review`: all five lanes have been completed for an exact frozen version, official sources are recorded, material gaps are resolved, and a named authorized owner is identified but has not yet recorded the final decision.
- `reviewed-by-named-owner`: the named authorized owner reviewed that exact version and recorded a scoped decision. This status documents human review; it is not legal clearance and does not itself publish the asset.

If the evidence supports different statuses across assets, return one review record per independently publishable version. The overall batch status cannot be higher than its lowest unresolved asset.

## Version binding

Bind every review to stable identifiers such as a repository revision, document revision, asset ID plus checksum, export ID, or cryptographic hash. A filename alone is insufficient when it can be overwritten.

Any copy edit, translation change, CTA or offer change, disclosure change, crop, layout change, text repositioning, subtitle change, compositing change, or final-render replacement invalidates the prior review. A channel, targeting, jurisdiction, destination, or material platform-rule change also requires a new review. Reset the changed candidate to at most `draft-only` until the affected lanes are rerun and the named owner reviews the new exact version.

## Review record

Return this object and retain every field that affects the gate:

```yaml
publication_review:
  review_id: ""
  status: "blocked | draft-only | ready-for-named-human-review | reviewed-by-named-owner"
  reviewed_scope:
    jurisdictions: []
    channels_and_placements: []
    audience_and_age_boundary: ""
    domain_and_offer_type: ""
    intended_publication_date: ""
    copy_version_id: ""
    offer_version_id: ""
    landing_destination_version_id: ""
    asset_version_ids: []
    final_render_version_ids: []
  named_review_owner:
    name: ""
    role: ""
    authority_scope: ""
    decision: "pending | approved-within-scope | changes-required | rejected"
    decided_at: ""
  official_sources:
    - title: ""
      publisher: ""
      url: ""
      published_or_updated: "unknown | date"
      effective_date: "unknown | date"
      accessed_at: ""
      expires_or_recheck: "before publication | date | trigger"
      applies_to: ""
      review_lane: ""
  review_lanes:
    claims_and_evidence:
      findings: []
      missing: []
      required_actions: []
    offer_and_transaction:
      findings: []
      missing: []
      required_actions: []
    outbound_messaging:
      findings: []
      missing: []
      required_actions: []
    endorsement_creator_and_rights:
      findings: []
      missing: []
      required_actions: []
    domain_platform_and_final_render:
      findings: []
      missing: []
      required_actions: []
  unresolved_items: []
  invalidation_triggers: []
  reviewed_at: ""
  recheck_by: ""
  release_note: "human review record; not legal clearance or publication authority"
```

If `recheck_by` has passed, a relied-on source or evidence item has expired, or a future rule becomes effective on or before the intended publication date, the existing status is invalidated. Reset the candidate to at most `draft-only`, refresh the affected source and evidence records, rerun the affected lanes, and obtain a new decision for the exact version.

## Optional Moai handoff

When `/project-studio` selected Moai specialist chaining or the user asks for it, and compatible Moai skills are installed and visible, this skill may chain relevant lanes to `moai-seller:commerce-ad-claim-compliance-kr`, `moai-seller:commerce-message-compliance-kr`, `moai-seller:commerce-influencer-collab`, `moai-lawyer:legal-law-research`, or `moai-lawyer:legal-mfds-safety`. Those remain Moai-owned skills and commands. Do not alias, shadow, emulate, or claim ownership of them, and do not claim they ran when unavailable.

Import any returned findings as attributed inputs, then complete Chany's version binding, final-render review, status calculation, and named-owner gate. Moai output does not replace current official-source verification or human review.

## Stop conditions

- Stop publication when the jurisdiction, channel, exact reviewed version, material facts, evidence, rights, required disclosures, official-source record, or named review owner is missing.
- Stop publication when final-render copy differs from approved copy, a crop or layout hides required context or disclosure, or the destination and offer no longer match.
- Keep work `draft-only` when a correctable input is pending; use `blocked` for prohibited, unsafe, deceptive, materially unsupported, or unauthorized content.
- Never describe `ready-for-named-human-review` as approved, and never assign `reviewed-by-named-owner` without a recorded decision from the named authorized human.
