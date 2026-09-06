---
name: chany-media-production-loop
description: Execute and track bounded still-image and campaign-video generation from an approved asset brief, with stable job records, cost approval, inline review, defect-specific correction, and safe recovery. Use for media generation lifecycle control; not for campaign strategy, creator-template production, deterministic assembly, publication, or code-quality loops.
---

# Chany Media Production Loop

Turn an approved image or campaign-video specification into an inspected asset
without unlimited regeneration. The production owner keeps authority over the
concept, copy, identity, and deliverable; this skill owns the generation job
lifecycle and its evidence.

Read the shared [runtime boundaries](../chany-studio/references/runtime-boundaries.md),
[media job ledger](../chany-studio/references/media-job-ledger.md), and
[creative quality loop](../chany-studio/references/creative-quality-loop.md).
For a generated still, also apply the [image-generation runtime](../chany-studio/references/image-generation-runtime.md): GPT Image 2 (`gpt-image-2`) is the default unless that contract authorizes a scoped override.
For any billable provider operation, apply the [paid-media runtime contract](../chany-studio/references/higgsfield-runtime-contract.md).

## Workflow

1. Identify the owning production skill and lock its approved asset version,
   authority inputs and roles, copy, format, must-pass gates, and attempt ceiling.
   Do not invent a missing creative brief.
2. Create one stable ledger record per requested output. Import or upload each
   authority input once when the runtime allows reuse, then bind its reusable
   reference to the ledger without exposing temporary handles.
3. Resolve the cheapest useful proof before an expensive call: a low-cost image
   draft for image work, or an approved governing still and shot contract for
   generated video. Show the actual preview in the conversation when the host
   can render it; a link-only handoff is a fallback.
4. Resolve the live operation, model or workflow, input roles, options, count,
   quote, and recovery controls. Obtain version-specific approval before a paid
   submission.
5. Submit each distinct output with a stable index and record the provider job
   reference immediately. For batches, keep indices unchanged across status
   checks and retry only a failed index after its previous charge state is known.
6. Wait at a bounded cadence, respect provider retry guidance, and fetch or
   resume the original job after an ambiguous response. Never create a second
   paid job merely because a status response was delayed.
7. Inspect the actual final-resolution image or time-based clip. Separate
   technical delivery checks from creative acceptance and record every defect by
   region or timestamp. Provider success is not visual acceptance.
8. If correction is allowed, change one observable defect class, freeze accepted
   properties, and rerun every must-pass gate. The default is one initial attempt
   plus at most one correction; a larger ceiling requires new approval and cost
   preflight.
9. Mark the record `accepted`, `stopped`, or `failed`. Display accepted results
   once, report unresolved defects and actual cost when available, and hand only
   accepted versions to `chany-video-assembly` or publication review.

Do not silently switch providers or models, submit speculative variants, retry a
whole batch because one item failed, or apply MoAI's source-code diagnostic loop
to creative generation.
