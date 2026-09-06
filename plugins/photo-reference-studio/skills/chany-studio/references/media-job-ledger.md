# Media Job Ledger

Use one append-only logical record per requested output. Store the record in the
shared campaign state or return it in the handoff when persistent project state
is outside the current scope.

```yaml
media_job:
  media_job_id: ""
  output_index: 1
  owner_skill: ""
  asset_type: "still-image | campaign-video"
  asset_version_id: ""
  specification_version_id: ""
  prompt_version_id: ""
  final_prompt: ""
  authority_inputs:
    - asset_version_id: ""
      role: "authority | conditioning-first-frame | direction-only"
      reusable_input_ref: "internal only"
  requested_default: ""
  provider: ""
  resolved_operation: ""
  resolved_model_or_workflow: ""
  resolved_options: {}
  server_adjustments: []
  quote:
    credits_or_cost: "unavailable"
    balance: "unavailable"
    quoted_at: ""
  approval:
    paid_approval_id: ""
    approved_version_id: ""
    batch_credit_ceiling: ""
    status: "not-required | pending | approved | invalidated | consumed"
  execution:
    idempotency_key: "internal only"
    provider_job_ref: "internal only"
    submitted_at: ""
    status: "planned | quoted | approved | submitted | processing | retrieved | inspected | accepted | stopped | failed"
    last_status_at: ""
    retry_after: ""
    actual_cost: "unavailable"
  attempts:
    - attempt: 1
      result_version_id: ""
      observed_defect: ""
      region_or_timestamp: ""
      change_made: ""
      frozen_properties: []
      decision: "accepted | rejected | stopped"
  result:
    stable_location: ""
    inline_preview_status: "shown | unavailable | failed"
    technical_gate: "pass | fail | unavailable"
    creative_gate: "pass | fail | unavailable"
    unresolved_defects: []
```

## State rules

- Keep `media_job_id` and `output_index` stable for the life of the requested
  output. A batch retry never renumbers surviving items.
- `submitted` or `processing` may transition only by checking, cancelling, or
  retrieving the same provider job. An unknown response is not permission to
  submit again.
- A changed prompt meaning, authority input or role, model or workflow, billable
  option, count, duration, ratio, or correction target creates a new approved
  version before submission.
- Retry only the failed index after proving the prior request did not create a
  chargeable job, or after a new quote and approval. Do not regenerate accepted
  siblings.
- Preserve the provider receipt internally. Never expose signed URLs, tokens,
  temporary upload handles, or secrets in a user-facing record.
- Display each accepted result once. A provider completion flag can set
  `retrieved`; only inspection can set `accepted`.

## Gate split

For still images, technical checks include dimensions, format, transparency when
required, text legibility, and output integrity. Creative checks include source
fidelity, product or identity stability, composition, evidence, copy, disclosure,
safe area, and campaign consistency.

For campaign video, technical checks include duration, dimensions, frame rate,
codec, audio presence, and playable output. Creative checks include the approved
first frame, temporal continuity, product or identity stability, physical
plausibility, copy and disclosure timing, message order, and scene acceptance.
