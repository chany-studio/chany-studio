# Platform Publication Adapter

Use this adapter when a Chany asset is intended for a named platform, placement, storefront, outbound channel, or live publishing operation. It converts current primary-source requirements into asset-level controls; it is not a timeless catalog of platform specifications and does not grant release approval.

## Runtime identity

Resolve the publication context before reviewing an asset:

- exact platform, product surface, placement, and account or storefront when relevant
- destination URL, app destination, lead form, booking path, product listing, or message channel
- jurisdiction governing the advertiser, offer, audience, and publication
- audience age range and any platform-declared restricted or sensitive category; do not infer protected or health attributes
- offer or service subtype, campaign objective, locale, planned publication date and time
- asset IDs, copy version, crop or ratio variants, disclosures, and linked landing destinations

An unspecified platform, placement, jurisdiction, audience-age rule, or publication date remains `unknown`. If it could change a hard requirement, continue drafting but keep publication blocked.

## Current-source retrieval

At review time, retrieve the latest applicable primary sources:

1. official platform policy, advertising standard, placement specification, commerce rule, or developer documentation;
2. official government, regulator, statutory, or recognized review-body material for the named jurisdiction and offer subtype;
3. official account or publishing interface when a requirement is visible only after authentication.

Prefer the page that states the operative requirement over a homepage, search result, agency summary, community post, or remembered rule. Record the source title, publisher, direct URL, retrieval timestamp, effective date when stated, and expiry or recheck trigger. If access fails, a source conflicts with another official source, or the effective rule cannot be resolved, record the gap rather than filling it from memory.

Never encode remembered pixel sizes, file limits, algorithm weights, benchmark lifts, posting times, hashtag counts, bidding thresholds, review thresholds, or legal thresholds as timeless facts. A value may be used only as a runtime finding tied to an applicable primary source and review date. Unsupported performance advice is a marketing hypothesis, not a platform requirement.

## Requirement classes

Classify every finding before applying it:

- `hard_requirement`: a current legal, regulatory, contractual, eligibility, format, disclosure, targeting, destination, or platform-enforcement condition. Failure or uncertainty prevents publication.
- `platform_recommendation`: official non-mandatory guidance or a documented optimization suggestion. It may inform production but cannot be presented as required or guaranteed to improve performance.
- `marketing_hypothesis`: a testable creative, timing, copy, audience, or conversion idea. State its evidence and test method; never attribute it to the platform without a primary source or promise an outcome.

Keep legal requirements and platform requirements separately attributable even when they affect the same asset. Do not silently choose between conflicting official sources. Record the conflict and route it to a named reviewer.

## Asset-level application

Map each applicable requirement to the exact object it governs:

- `asset`: file type, duration, dimensions or ratio, content eligibility, rights, identity, and accessibility
- `crop`: safe area, focal-point survival, disclosure survival, logo treatment, and placement-specific recomposition
- `copy`: exact words, numerals, offer conditions, express and implied claims, qualifications, prohibited wording, and copy status
- `disclosure`: exact text, placement, proximity to the claim, persistence, contrast, expected-display-size legibility, and audio treatment when relevant
- `destination`: final URL or in-app destination, consistency with the ad, required business or offer information, redirects, privacy and consent surfaces, and functional verification

Evaluate every named placement and crop independently. One passing variant cannot cover a failed variant. Any material asset, copy, offer, audience, destination, jurisdiction, placement, or planned-date change invalidates the affected review and requires a fresh adapter pass.

Unresolved hard requirements set the affected item to `draft_only` or `blocked`. Draft briefs, clean visual plates, prompts, and internal review assets may continue, but nothing may be described as platform approved, legally compliant, or safe to publish. This adapter can return `ready_for_review`; final release status belongs exclusively to `chany-publication-review`.

## Live publishing controls

If a future connector can create or change live platform resources:

1. start read-only and resolve the exact account, campaign, placement, asset, and current status;
2. show a proposed-change table with target IDs, before state, after state, budget effect, activation effect, and rollback or pause path;
3. create new resources as `PAUSED` or the closest non-spending draft state when the platform supports it;
4. obtain distinct explicit approvals for the write operation, any budget or billing change, and activation or spend start. Approval for one does not authorize the others;
5. execute only approved rows, then read back and verify returned resource IDs, ownership, effective settings, budget, and status;
6. report partial failure without retrying an unapproved mutation or activating a fallback resource.

Never expose, print, persist in project files, or return access tokens, refresh tokens, authorization headers, secrets, or temporary credential URLs. Redact secrets from logs and user-visible results.

## Compact adapter record

```yaml
platform_publication_adapter:
  context:
    platform: ""
    surface: ""
    placement: ""
    account_or_storefront: ""
    jurisdiction: "unknown"
    audience_age_and_restrictions: []
    offer_or_service_subtype: ""
    locale: ""
    planned_publication_at: "unknown"
    destination: ""
  sources:
    - source_id: ""
      source_class: "platform | regulator | statute | review_body | authenticated_interface"
      title: ""
      publisher: ""
      direct_url: ""
      checked_at: ""
      effective_date: "unknown"
      expires_or_recheck: "before publication"
      applicable_scope: ""
  findings:
    - finding_id: ""
      class: "hard_requirement | platform_recommendation | marketing_hypothesis"
      authority_source_ids: []
      requirement_or_hypothesis: ""
      applies_to:
        asset_ids: []
        crops_or_placements: []
        copy_version: ""
        disclosure: ""
        destination: ""
      verification: "pass | fail | unknown | not_applicable"
      evidence_or_test_plan: ""
      remediation: ""
      review_owner: ""
  asset_reviews:
    - asset_id: ""
      placement_and_crop: ""
      copy_version: ""
      disclosure_status: ""
      destination_status: ""
      unresolved_hard_requirement_ids: []
      adapter_status: "draft_only | blocked | ready_for_review"
  live_change_plan:
    read_only_discovery_complete: false
    proposed_changes: []
    write_approval: "not_requested | pending | granted"
    budget_approval: "not_applicable | not_requested | pending | granted"
    activation_approval: "not_applicable | not_requested | pending | granted"
    created_state: "not_created | paused | draft | unknown"
    verified_resource_ids: []
    verified_statuses: []
  unresolved_conflicts_or_gaps: []
  next_gate: "chany-publication-review"
  release_status: "pending_chany_publication_review"
```

Do not reuse an old adapter record for a later release without rechecking its expiry triggers and the current official sources.
