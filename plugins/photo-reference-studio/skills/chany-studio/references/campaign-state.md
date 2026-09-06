# Campaign State and Handoffs

Maintain one compact state record for a multi-skill campaign. Unknown values stay empty or explicitly uncertain; never fill them by guessing.

```yaml
campaign_id: ""
industry_direction:
  primary_skill: ""
  mode_or_subtype: ""
  jurisdiction: ""
  last_policy_check: ""
  objective_and_kpi: ""
  audience_and_decision_unit: []
  journey_stage: ""
  desired_action: ""
  message_job: ""
  proof_objects: []
  claim_ledger: []
  visual_narrative: ""
  must_capture: []
  directing_rules: []
  channel_deliverables: []
  reference_route:
    domain_id: ""
    l1: ""
    l2: ""
    query_count: 1
  required_disclosures: []
  prohibited_or_high_risk: []
  human_review_gate: ""
  unresolved_decisions: []
objective: "awareness | consideration | conversion | retargeting"
audience_and_context: ""
channels: []
authoritative_inputs: []
brand_authority:
  source_paths: []
  voice_do: []
  voice_dont: []
  controlled_terms: []
  palette_or_tokens: []
  allowed_variation: []
  status: "missing | proposed | approved"
subject_lock: []
copy_lock:
  product_name: ""
  headline: ""
  offer_or_event: ""
  supporting_copy: []
  price: ""
  period: ""
  claims: []
  cta: ""
  legal_copy: ""
  provenance:
    - anchor: ""
      source_locator: ""
      checked_at: ""
      status: "draft | verified | approved"
  status: "missing | draft | approved"
model_authority: ""
model_lock: []
garment_authorities: []
garment_locks: []
identity_authorities:
  - identity_authority_id: ""
    subject_authority_ref: ""
    identity_route: "one-use-reference | persistent-identity | not-applicable"
    consent_record_id: ""
    face_use_consent_status: "unknown | confirmed | not-applicable"
    authorized_purpose_and_term: ""
    existing_identity_check: "not-run | none-authorized | authorized-match-found | not-applicable"
    duplicate_training_status: "not-checked | blocked | not-a-duplicate | not-applicable"
    paid_approval_id: ""
    status: "missing | draft | confirmed | invalidated | not-applicable"
video_reference_packets:
  - reference_id: ""
    source_kind: "live-browser-observation | authorized-tab-capture | direct-media-url | local-file"
    platform: ""
    canonical_source_url: ""
    capture_or_file_version: ""
    content_hash: ""
    observed_range: ""
    evidence_state: "metadata_only | observed_excerpt | full_teardown_ready | capture_required | blocked"
    external_upload_approved: false
    teardown_id: ""
    status: "draft | accepted | invalidated | blocked"
campaign_video_manifests:
  - manifest_id: ""
    concept_version_id: ""
    approved_copy_version_id: ""
    authority_asset_version_ids: []
    reference_packet_id: ""
    reference_teardown_id: ""
    continuity_strategy: ""
    paid_approval_id: ""
    scene_bindings:
      - scene_id: "s01"
        usp_role: ""
        message_rank: 0
        motion_route: "generated-motion | deterministic-still-move | authorized-footage"
        governing_still_version_id: ""
        resolved_first_frame_role: ""
        accepted_output_clip_version_id: ""
    status: "draft | approved | invalidated | not-applicable"
assembly_manifests:
  - assembly_id: ""
    operation: "assemble | replace-segment | variants | verify"
    project_id: ""
    campaign_id: ""
    shot_plan_version_id: ""
    source_master_version_id: ""
    source_master_content_hash: ""
    source_clip_version_ids: []
    target_authority_reference: ""
    target_checked_at: ""
    output_render_version_id: ""
    output_probe: {}
    variant_set_id: ""
    performance_table_path: ""
    status: "draft | verified | invalidated | not-applicable"
media_jobs:
  - media_job_id: ""
    output_index: 1
    owner_skill: ""
    asset_type: "still-image | campaign-video"
    asset_version_id: ""
    specification_version_id: ""
    prompt_version_id: ""
    authority_input_version_ids: []
    paid_approval_id: ""
    provider_job_ref: "internal only"
    status: "planned | quoted | approved | submitted | processing | retrieved | inspected | accepted | stopped | failed"
    result_version_id: ""
    actual_cost: "unavailable"
    attempt_count: 0
    unresolved_defects: []
performance_reviews:
  - review_id: ""
    campaign_id: ""
    variant_set_id: ""
    source_master_content_hash: ""
    copy_version_id: ""
    decision: "winner | inconclusive | invalid"
    diagnosis_hypothesis: ""
    next_single_variable: ""
    status: "draft | reviewed"
reference_board:
  source_lane: "pinterest | commercial-photo | award-ad"
  target_count: 6
  count_source: "default | user"
  visible_count: 0
  shortfall: 0
  status: "not-requested | collecting | incomplete | complete"
selected_reference:
  provider: "Pinterest | Production Paradise | Ads of the World | D&AD | The One Show"
  source_url: ""
  visual_dna: {}
creative_direction:
  version_id: ""
  selected_territory: ""
  concept: ""
  signature_device: ""
  composition: ""
  palette: []
  lighting: ""
  materials: []
  typography: {}
  copy_zone: ""
  motion: ""
  trend_fit:
    signal: ""
    reason: ""
    translation: ""
    reject_if: ""
  preservation_locks: []
  exclusions: []
  channel_adaptations: []
  acceptance: []
  status: "missing | proposed | approved | invalidated"
campaign_master: ""
campaign_lock:
  idea: ""
  palette: []
  lighting: ""
  material_and_props: ""
  typography_plan: ""
  copy_zones: []
  crop_safe_area: ""
asset_matrix: []
accepted_assets: []
remaining_uncertainties: []
still_image_model_policy:
  default_model: "gpt-image-2"
  active_override: ""
  override_reason: ""
  override_scope: []
  status: "default | override-approved | unavailable"
specialist_handoffs: []
paid_generation_approvals:
  - paid_approval_id: ""
    approved_version_id: ""
    approver: ""
    approved_at: ""
    approved_scope: []
    status: "pending | approved | invalidated | consumed"
publication_reviews:
  - review_id: ""
    copy_version_id: ""
    offer_version_id: ""
    landing_destination_version_id: ""
    asset_version_ids: []
    final_render_version_ids: []
    jurisdictions: []
    channels_and_placements: []
    intended_publication_date: ""
    official_policy_sources: []
    checked_at: ""
    recheck_by: ""
    named_review_owner: ""
    status: "blocked | draft-only | ready-for-named-human-review | reviewed-by-named-owner"
    owner_decision: "pending | approved-within-scope | changes-required | rejected"
    decided_at: ""
    unresolved_blockers: []
```
## Handoff rules

- Pass the approved industry direction packet first, then only its fields relevant to the next deliverable.
- Pass original authority images, not merely an earlier generated approximation, whenever identity could change.
- Pass only approved copy as locked copy. Keep draft copy visibly marked.
- The reference handoff contains only its Pinterest Pin page and transferable Visual DNA, not an outbound destination, reusable pixels, or implied rights.
- The creative-direction handoff contains the selected territory, durable concept device, explicit visual decisions, trend-fit rationale, preservation locks, exclusions, channel adaptations, and measurable acceptance criteria. Downstream skills may adapt format but may not silently replace it with a new trend or generic style.
- The campaign-visual handoff contains the accepted master plus explicit campaign rules. Downstream skills may recompose for format but may not invent a new campaign direction.
- The video-reference handoff binds the canonical page, capture or file version, hash, observed range, evidence state, upload approval, and teardown to one stable packet. A browser player observation never inherits the authority of a complete capture. The campaign-video handoff binds that packet plus concept, copy, authorities, motion route, governing still, resolved first-frame role, and accepted clip for every scene. Every generated output points to its stable media-job record. The assembly handoff names those exact versions plus the source-master hash, target authority, verified final render, controlled variant set, and empty performance table.
- Keep copy provenance, failed production attempts, and observed performance attached to stable versions. A filename alone is not an asset identity, and a failed attempt is learning evidence rather than an accepted deliverable.
- Each produced asset returns its effective ratio or duration, source/copy verification status, and observed unresolved defects.
- Attribute optional Moai specialist results with the producer's exact installed name, reviewed-object version, sources and dates, findings, and unresolved questions; never collapse them into untraceable campaign truth.
- Bind identity authority, consent, video-reference packet, campaign-video and assembly manifests, media jobs, still-image model selection, paid-generation approval, performance review, and publication review to stable content and asset versions. A changed reference capture range or file, subject or authority input, consent scope, script, prompt, input role, identity or model, workflow, billable option, accepted clip, source master, delivery target, copy, crop, disclosure, offer, destination, or final render invalidates every affected record and reopens its approval or review.
- Do not expose temporary media handles, internal job IDs, or upload URLs to the user.

## Checkpoints

Pause only when the missing decision materially affects cost or business meaning:

- exact offer, price, period, CTA, mandatory legal copy, or an unapproved claim
- target placement when layout cannot be inferred safely
- detail-page module list or multi-asset count
- use of a supplied person versus a fictional adult creator or model
- reference selection in `semi-auto`
- multiple campaign-video variants, locales, or paid generation stages
- the live paid-operation quote, server adjustments, or batch ceiling when a connected provider can consume credits

If the user explicitly authorizes automatic selection within a named scope, apply it only to reversible creative choices inside that scope. It never waives claim substantiation, evidence or mandatory legal-copy checks, rights or upload authority, named-human publication review, a version-specific paid quote and approval, or the distinct approvals for a platform write, budget change, activation, or spend start.

## Family QA and delivery

Each specialist performs its own asset QA. The router then checks the family for:

- industry journey, evidence, product, space, UI, vehicle, event, model, garment, offer, CTA, and legal-copy consistency
- one recognizable palette, lighting, material, and typography system
- correct channel formats and deliberate recomposition
- no missing, duplicate, or unrequested deliverables
- no member with a critical specialist failure
- a version-bound publication status for every asset whose industry, claim, transaction, endorsement, rights, disclosure, or channel rules require review

Deliver only the requested assets, followed by a compact note:

```text
보존: [authoritative identities checked]
캠페인: [master direction and inherited locks]
출력: [asset, channel, effective size or duration]
문구: [approved pass, draft, pending typesetting, or not applicable]
검수: [pass or observed unresolved defect]
레퍼런스: [source-page link when used]
```
