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
ugc_manifests:
  - manifest_id: ""
    approved_script_version: ""
    identity_authority_ids: []
    input_asset_version_ids: []
    resolved_workflow_family: ""
    paid_approval_id: ""
    scene_bindings:
      - scene: 1
        usp_role: ""
        message_rank: 0
        governing_still_version_id: ""
        resolved_first_frame_role: ""
        output_clip_version_id: ""
    status: "draft | approved | invalidated | not-applicable"
assembly_manifests:
  - assembly_id: ""
    shot_plan_version_id: ""
    source_clip_version_ids: []
    target_authority_reference: ""
    target_checked_at: ""
    output_render_version_id: ""
    output_probe: {}
    variant_set_id: ""
    performance_table_path: ""
    status: "draft | verified | invalidated | not-applicable"
selected_reference:
  provider: ""
  source_url: ""
  visual_dna: {}
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
paid_generation_plan:
  - paid_approval_id: ""
    operation: ""
    approved_version_id: ""
    input_roles: []
    resolved_model_or_workflow: ""
    resolved_options: {}
    quoted_credits: "unavailable"
    retry_reserve: ""
    batch_credit_ceiling: ""
    approval_status: "not-requested | pending | approved | invalidated"
    provider_job_ref: "internal only"
    job_state: ""
    server_adjustments: []
    actual_credits: "unavailable"
    result_location: ""
    unresolved_defects: []
specialist_handoffs: []
creative_acceptance_records:
  - asset_version_id: ""
    must_pass_gates: []
    accepted_properties: []
    attempt_limit: 2
    current_attempt: 0
    regression_findings: []
    status: "draft | accepted | stopped"
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
- The reference handoff contains its source page and transferable Visual DNA, not reusable pixels or implied rights.
- The campaign-visual handoff contains the accepted master plus explicit campaign rules. Downstream skills may recompose for format but may not invent a new campaign direction.
- The UGC handoff binds every product scene to its approved still version, resolved first-frame role, and accepted output clip. The assembly handoff names those exact clip versions, the target authority, verified final-render version, controlled variant set, and empty performance table.
- Each produced asset returns its effective ratio or duration, source/copy verification status, and observed unresolved defects.
- Attribute optional Moai specialist results with the producer's exact installed name, reviewed-object version, sources and dates, findings, and unresolved questions; never collapse them into untraceable campaign truth.
- Bind identity authority, consent, UGC manifests, assembly manifests, paid-generation approval, and publication review to stable content and asset versions. A changed subject or authority input, consent scope, script, prompt, input role, identity or model, workflow, billable option, accepted clip, delivery target, copy, crop, disclosure, offer, destination, or final render invalidates every affected record and reopens its approval or review.
- Do not expose temporary media handles, internal job IDs, or upload URLs to the user.

## Checkpoints

Pause only when the missing decision materially affects cost or business meaning:

- exact offer, price, period, CTA, mandatory legal copy, or an unapproved claim
- target placement when layout cannot be inferred safely
- detail-page module list or multi-asset count
- use of a supplied person versus a fictional adult creator or model
- reference selection in `semi-auto`
- planned UGC variants, locales, or multiple paid generation stages
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
