---
name: chany-media-production-loop
description: Execute and track bounded still-image and campaign-video generation from an approved asset brief, with stable job records, cost approval, inline review, defect-specific correction, and safe recovery. Use for media generation lifecycle control; not for campaign strategy, creator-template production, deterministic assembly, publication, or code-quality loops.
---

# Chany Media Production Loop

Turn an approved image or campaign-video specification into an inspected asset without unlimited regeneration. The production owner keeps authority over concept, copy, identity and deliverable; this skill owns the generation lifecycle and its evidence.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

Read the shared [runtime boundaries](../chany-studio/references/runtime-boundaries.md),
[media job ledger](../chany-studio/references/media-job-ledger.md), and
[creative quality loop](../chany-studio/references/creative-quality-loop.md).
For a generated still, also apply the [image-generation runtime](../chany-studio/references/image-generation-runtime.md): GPT Image 2.5 (`gpt_image_2_5`) is the default unless that contract authorizes a scoped override.
For any billable provider operation, apply the [paid-media runtime contract](../chany-studio/references/higgsfield-runtime-contract.md).

For source-video revisions, consume the campaign-video owner's [bounded edit contract](../chany-campaign-video/references/video-edit.md), plus [Genjutsu rules](../chany-campaign-video/references/genjutsu-edit.md) when applicable. Retain the source clip version, time range, target, audio policy and preserve list. The approved edit specification replaces a new-film concept/still prerequisite. Reuse approved source frames; do not force a redundant still generation. Native composition edits belong to `chany-motion-design`; only its generated source assets enter this loop.

## Workflow

1. Identify the owning production skill and lock its approved asset version,
   authority inputs and roles, copy, format, must-pass gates, and attempt ceiling.
   Do not invent a missing creative brief.
2. Create one stable ledger record per requested output. Import or upload each
   authority input once when the runtime allows reuse, then bind its reusable
   reference to the ledger without exposing temporary handles.
3. Reuse accepted assets as proof. A still-image request does not require an
   additional paid draft before its approved final image. Generate a draft only
   when requested or included in the approved scope; preserve approved quality
   settings. New generated video uses the accepted governing still and shot contract;
   source-video editing uses the approved source and bounded edit specification.
   Do not generate another still merely because the workflow changed owners.
   Show the actual preview in the conversation when the host supports it; links are a fallback.
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

An approved variant set from the confirmation card (for example two images of the same prompt) is not speculative. Follow [product-insertion.md](../chany-studio/references/product-insertion.md) for the product match check, upscaling, and extra ratios.

Do not silently switch providers or models, submit speculative variants, retry a
whole batch because one item failed, or apply a source-code diagnostic loop
to creative generation.
