# Campaign Video Contract

Use only the scope the user requested: reference analysis, concept planning, production, or a combination. Do not expand an analysis request into paid generation or a single video into unrequested variants.

## Authority and concept packet

Start with the approved industry direction, brief, claim ledger, copy version, source assets, rights, consent, and delivery context. A creative metaphor may dramatize an approved benefit, but it cannot turn an unsupported claim into a visual implication.

Consume the industry packet's `message_job`, `proof_objects`, `must_capture`,
`directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and
`human_review_gate` before creating the concept packet. Unknown or blocked fields
remain unresolved rather than being replaced with generated evidence.

```yaml
video_concept_packet:
  concept_version_id: ""
  mode: "analysis | plan | produce"
  objective_and_kpi: ""
  audience_decision: ""
  primary_message: ""
  approved_copy_version_id: ""
  authority_asset_version_ids: []
  reference_teardown_id: ""
  narrative_device: "demonstration | reveal | transformation | comparison | metaphor | atmosphere | other"
  continuity_strategy: "independent-scenes | continuity-groups | one-take"
  target:
    platform_and_placement: ""
    ratio: ""
    duration_or_limit: ""
    authority_reference: ""
  scenes: []
  status: "draft | approved | invalidated"
```

Approve the narrative device only when it helps the audience understand or feel the primary message. One-take continuity is a deliberate choice, not a quality label; use it only when spatial, subject, prop, lighting, and action continuity can remain believable.

## Scene contract

```yaml
scene:
  scene_id: "s01"
  duration_s: ""
  usp_role: ""
  message_rank: 0
  proof_or_transition_job: ""
  approved_claim_or_fact_refs: []
  required_disclosure: ""
  authority_asset_version_ids: []
  governing_still_version_id: ""
  resolved_first_frame_role: ""
  continuity_group: ""
  opening_state: ""
  closing_state: ""
  motion_route: "generated-motion | deterministic-still-move | authorized-footage"
  motion_reason: ""
  prompt_or_capture_brief_version_id: ""
  accepted_output_clip_version_id: ""
  must_pass_gates: []
  status: "draft | still-approved | clip-accepted | rejected"
```

Every non-empty `usp_role` resolves to an approved benefit, objection, or claim-ledger item. `message_rank: 0` is transitional and does not outrank a message scene. Define a measurable visible state—position, count, relative proportion, orientation, label readability, UI state, or timed action—when it matters; do not invent measurements absent from the authority.

## Still-first cost ladder

Work from the cheapest reversible decision to the most expensive:

1. approve evidence, copy, concept, and shot order
2. create and inspect the governing still with GPT Image 2 under the shared default contract
3. correct one still defect class while freezing accepted properties
4. resolve the live video workflow and cost
5. generate only the approved clip scope
6. accept the clip after time-based inspection
7. assemble only accepted versions

Do not use an expensive video attempt to discover a composition, product shape, label, wardrobe, UI, copy-zone, or evidence problem that a still could reveal.

## Motion decision

Choose `generated-motion` when the action itself carries the message and identity can remain stable. Choose `deterministic-still-move`—for example a measured crop, pan, push, pull, or parallax over an accepted still—when motion generation would weaken product geometry, packaging, text, interface, architecture, vehicle identity, food integrity, or regulated evidence. Choose `authorized-footage` when a real performance, testimonial, safety procedure, hazardous action, live event, exact interface behavior, or factual demonstration cannot be represented honestly by synthesis.

The governing still must be attached in the conditioning first-frame role actually exposed by the live tool schema. Record that resolved role rather than assuming a remembered parameter name. Generated motion must preserve the approved opening identity and reach the named closing state without unexplained object changes, text mutation, impossible mechanics, or evidence drift.

## Attempt record

Keep failed attempts as versioned learning evidence when storage and user scope permit; never present them as accepted deliverables.

```yaml
production_attempt:
  asset_version_id: ""
  scene_id: ""
  attempt: 1
  observed_defect: ""
  timestamp_or_region: ""
  comparison_authority: ""
  measured_target: ""
  change_made: ""
  frozen_properties: []
  regression_findings: []
  decision: "accepted | rejected | stopped"
```

Stop under the shared creative quality loop when the attempt or credit ceiling is reached, the same defect persists, a new critical regression appears, or the next fix would change the approved concept, evidence, identity, model, workflow, input role, scope, or publication object.

Record submission, provider state, result retrieval, inspection, and any correction
through the shared media job ledger. Keep each scene output index stable and do
not regenerate accepted sibling scenes when one scene fails.

## Assembly handoff

Pass `campaign_id`, `concept_version_id`, approved copy and source versions, accepted clip hashes or stable version IDs, scene order, in/out points, `usp_role`, `message_rank`, continuity boundaries, target authority, audio intent, and unresolved defects. Do not pass a provider success flag as an accepted clip. Assembly may conform, replace, sequence, and verify these exact versions but may not rewrite the concept or invent a transition.
