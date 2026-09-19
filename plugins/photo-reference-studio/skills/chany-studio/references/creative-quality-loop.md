# Creative Quality Loop

Use a bounded, evidence-driven loop for every generated or substantially edited asset. The goal is a publishable result within an approved scope, not unlimited regeneration. When generation is executed, bind this acceptance record to the stable output in [media-job-ledger.md](media-job-ledger.md) and let `chany-media-production-loop` own submission, recovery, preview, and retry state.

## Acceptance contract

Before the first paid attempt, record:

```yaml
creative_acceptance:
  asset_version_id: ""
  business_job: ""
  one_primary_message: ""
  authority_inputs_and_roles: []
  required_evidence_or_must_capture: []
  exact_copy_and_disclosures: []
  output_format_and_safe_area: ""
  must_pass_gates: []
  scored_criteria: []
  default_attempt_limit: 2
  batch_credit_ceiling: ""
  named_publication_reviewer: ""
```

The default attempt limit means one initial generation plus at most one defect-specific correction. A larger bound requires explicit user approval and a new cost checkpoint. A numeric average never overrides a must-pass failure.

## Inspect with evidence

Review the actual final-resolution image or time-based result, not only a thumbnail or provider success flag. For each finding, record the observed location or timestamp, comparison authority, severity, and downstream impact. Mark unavailable evidence as unavailable; do not award quality points based on assumption.

Check in this order:

1. authority identity, rights, consent, and source fidelity
2. exact facts, offer, copy, qualifications, disclosure, and publication gate
3. named deliverable, format, dimensions, duration, safe area, and legibility
4. industry proof, message hierarchy, physical or temporal realism, and accessibility
5. campaign-family consistency and technical artifacts

## Output-specific evidence

Apply only the checks relevant to the requested asset; keep this internal instead of another user questionnaire.

- Product photos: compare silhouette, proportions, label/logo, color and count to the source, then separately compare composition/light/material to the style reference. Inspect edges, shadows and reflective surfaces; a beautiful image with a changed product fails.
- Carousel/detail-page families: inspect each card/module at intended reading size and the ordered set. Check margins, type hierarchy, repeated product scale, continuity and non-redundant information. Verify each delivered file, not only a contact sheet. Repair only affected cards/modules.
- Thumbnail/poster: inspect at its actual small preview size or intended viewing distance. The subject and main message must remain clear without zoom; inspect placement crops before delivery.
- Generated video/product swap: review playback over the full available duration plus first/last frames, cut boundaries and interaction/occlusion moments. Check changing labels, duplicated parts, grip/contact, reflections, flicker, unintended camera movement and end-frame readability. Sparse still sampling is only a partial check; disclose inaccessible motion/audio rather than claiming full review.
- Final video assembly: check the exported file, not merely source clips. Listen for clipped words, abrupt joins, unintended silence, competing speech/music and synchronization; verify subtitle timing and real reading time. Intended silence is not a defect. Use supplied/licensed audio only.
- 3D: inspect views actually needed for delivery, seams/materials and silhouette. Mark unseen reconstructed surfaces; do not request elaborate rigging for a rigid packshot or claim CAD accuracy.

When review capability is missing, label the specific unchecked dimension. Keep passed properties and accepted versions; never turn a narrow defect into a new campaign.

## Correct one defect class

If a correction is permitted, select the highest-impact observable defect that can be changed without invalidating the approved concept. Freeze every already accepted property, name the target region or timestamp, and change one defect class per attempt. Reattach the relevant authority source whenever identity, product, garment, UI, place, evidence, or exact copy could drift.

After the correction, run the complete must-pass list again and compare against both the authority source and the last accepted version. A fix that causes a new critical defect is a regression and cannot pass.

## Stop and escalate

Stop when any of these occurs:

- all must-pass gates pass and the skill's acceptance threshold is met
- the approved attempt or credit ceiling is reached
- the same defect persists after its corrective attempt
- a different critical defect appears after correction
- the next fix would change the concept, offer, authority input, model or workflow, or approved publication object
- required evidence, rights, disclosure, exact copy, or named human review is missing

Return the best non-passing version only as a clearly labeled draft with its observed defects. Do not conceal failure with an average score, silently switch models, or burn additional credits. A concept-level change returns to the owning planning or production skill and requires a new acceptance and paid-generation approval.
