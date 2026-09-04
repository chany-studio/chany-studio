# Paid Media Runtime Contract

Apply this contract to Higgsfield and any other connected media service that can consume credits or create a paid job. The live tool schema and catalog are authoritative; website pages, remembered model names, examples, and this repository are not runtime capability guarantees.

For generative still-image creation or editing, apply [image-generation-runtime.md](image-generation-runtime.md) first. GPT Image 2 (`gpt-image-2`) is the repository-level requested default for those operations. That policy does not prove runtime availability and does not apply to video, audio, or clip assembly. If the live tool cannot resolve the default, stop before generation or obtain approval for the smallest scoped override defined there.

## Resolve the live operation

Before composing a paid call:

1. inspect the tools that are actually connected and the current schema of each candidate operation
2. resolve the operation, model or workflow, supported inputs, input-role semantics, output format, options, and limits from live data
3. assign every attachment an explicit authority or direction-only role
4. use model- or workflow-specific prompt structure when the live documentation requires it; do not force one universal prompt formula across image, video, avatar, voice, editing, or UGC systems
5. if the required capability exists only in a website interface, prepare an exact handoff and state that the connected runtime cannot execute it

Except for the deliberate `gpt-image-2` still-image default defined in the shared image contract, do not hardcode or silently substitute model identifiers, templates, aspect ratios, durations, counts, option values, or prices. A server-selected default must be reported as a resolved value, not represented as the user's original choice or as GPT Image 2 without evidence.

## Cost preflight and approval

When a free quote, cost preview, dry run, or validation operation exists, call it before the paid operation. Present one approval packet containing:

```yaml
paid_generation_approval:
  operation: ""
  final_prompt: ""
  input_roles: []
  resolved_model_or_workflow: ""
  resolved_options: {}
  output_count: 1
  server_adjustments: []
  total_credits: "known value | unavailable"
  balance_after_or_current_balance: "known value | unavailable"
  batch_credit_ceiling: ""
  approved_version_id: ""
```

Use the server-returned cost and balance when available; do not estimate them from an old price table. If cost is unavailable, say so and stop at the user's stated credit boundary. Approval may use a structured question when the host supports it, ordinary conversation when it does not, or an explicit blocker when an outer orchestrator owns user interaction.

One approval covers only the displayed version. A change to prompt meaning, authoritative inputs or roles, model or workflow, billable options, count, duration, ratios, locales, or batch ceiling requires a new paid-generation preflight and approval. A harmless display-format change does not.

An operating-system permission dialog, connector authorization, account login, file picker, or upload confirmation is not approval of creative content, credit use, training, or the paid request. Keep those decisions separate.

## Submission and recovery

Record the approved version and the provider receipt or job reference internally before continuing. Never submit more operations than the approved count or total-credit ceiling.

If the paid submission has an ambiguous outcome—timeout, disconnected response, or unknown charge state—do not send it again. Inspect status, history, or the provider job list with the original receipt; resume or fetch that job when possible. Retry only after the prior outcome is proven not to have created a chargeable job, or after the user approves a newly quoted request.

Distinguish:

- `same request`: status check, result fetch, or idempotent resume with the identical approved version
- `changed request`: any creative, input, model, option, duration, count, or locale change; quote and approve again

Do not expose transient upload URLs, tokens, secrets, or internal handles in user-facing output.

## Result accounting

After completion, report the actual operation count, provider-reported credit use when available, effective model or workflow and options, server adjustments, result location or inline preview, and unresolved defects. Never claim that generation, payment, verification, or delivery occurred unless the connected service confirmed it.
