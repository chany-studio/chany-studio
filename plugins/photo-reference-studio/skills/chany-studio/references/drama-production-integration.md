# Drama production integration

These two specialists extend the existing production axis without adding an industry overlay, a second brief or a new connector. Read [beginner-experience.md](beginner-experience.md) and reuse the current project brief, state, approved sources and decisions. Ordinary ads, stills and bounded edits do not require a drama pipeline.

## Owners and handoffs

- `ai-drama-production` owns narrative films and episodic or branded drama: story causality, series/episode development, dialogue performance, blocking, shot plans, continuity and creative acceptance.
- `cinematic-director` supplies only the requested directing craft, templates and defect diagnosis. Load relevant sections on demand. It does not become a second production coordinator.
- `chany-campaign-video` retains product commercials, campaign concepts, brand films without an episodic drama request, and bounded generative source-video edits. A branded narrative drama belongs to the drama owner; a shared brand does not require two briefs or two concepts.
- `image-asset-production` prepares coherent character, expression, pose, prop and environment sets when requested. Reuse accepted assets before making new ones.
- `chany-media-production-loop` owns every generated asset's submission, job ID, reusable input handles, receipts, charge reconciliation and bounded retries. The drama manifest references that ledger; it never authorizes spending or submits jobs itself.
- `chany-video-assembly` consumes the drama owner's accepted shot plan and media jobs for measured cuts. Carry narrative beat and dialogue roles; do not invent sales USP/CTA fields for fiction. Preserve the approved timing and editorial intention. Use `adobe-video-pipeline`, `adobe-after-effects-production` and `adobe-premiere-finishing` for explicitly requested native projects under [native-production-integration.md](native-production-integration.md).
- `chany-publication-review` retains exact-version release review. A script, a successful provider job, a file probe or a production-manifest pass is never publication approval.

## Reference-conditioned drama

Before generation, record the chosen conditioning mode in the shot plan and job ledger:

1. **First-frame mode:** an accepted governing still fixes the opening composition. Use the live tool's actual first-frame input role. Reuse an existing accepted still.
2. **Reference mode:** accepted character, wardrobe, prop and environment assets have separate roles and explicit inclusion/exclusion rules. An empty environment reference governs space, not cast. Use this mode only when the live operation supports the required reference conditioning. There is no forced `start_image`, composite first frame or additional paid still merely to satisfy a still-first checklist.

Record each source version, role, intended attribute and conflicting attribute to exclude, then map these to the live schema. Do not invent parameters or promise identity/voice stability. If a required control is unavailable, return the feasible plan and identify the unresolved choice before dependent spending. Existing campaign-video still-first rules remain unchanged for ordinary new commercials; this exception is scoped to a drama-owned reference-mode shot.

Use [image-generation-runtime.md](image-generation-runtime.md) for any generated image, [higgsfield-runtime-contract.md](higgsfield-runtime-contract.md) for paid provider calls, and [media-job-ledger.md](media-job-ledger.md) for execution. A reference pack is not approval for paid generation. Reuse valid approval for the same inputs, prompt, model, count and cost scope. Do not add paid probes or repeated confirmations. Default retry authority remains one initial attempt plus at most one approved correction; inherited directing examples cannot enlarge it.

## Continuity, editing and evidence

Keep episode, scene, shot and generation-block IDs distinct. Track cast and wardrobe versions, room geometry, screen direction, prop state, dialogue speaker, listening reactions and voice authority across independent jobs. Generated blocks may be produced out of edit order; accepted takes return to one frame-based timeline. Measure spoken dialogue before claiming exact timing. Inspect full playback and listen where the host supports it; static frames and transcripts cannot prove motion or audio quality.

The [production manifest](../../ai-drama-production/references/manifest-format.md) is a projection of existing creative state and the job ledger, not a second source of financial truth. Derive its budget values from current receipts and authorization. `check_production.py` needs Python 3, reads local records/files and writes its report to stdout. `plan` allows pending assets as warnings; `release` rejects missing files, pending claims/reviews and reviews not bound to the current final-output SHA-256. It does not decode media, verify review truth, certify rights or authorize publication. Preserve the report alongside the exact render and the studio's release review.

## Precedence and reusable scope

Current user decisions, host rules, live tool schemas and these studio contracts take precedence over inherited directing examples. Fixed FPS, duration, lens, clip limits, mandatory keyframes and retry counts are examples to adapt. Product identity follows the studio's reference-composition reshoot policy; do not force compositing, a frozen viewpoint or a new cutout because a directing reference suggests it.

Keep client characters, private scripts, internal paths, production logs and customer-specific profiles in their authorized projects. Imported research ledgers are dated source observations, not a claim that this release repeated video tests or confirmed current model capabilities. Preserve upstream license and [attribution](../../cinematic-director/NOTICE.md). Installing either skill does not install a model, editor, Python or provider account.
