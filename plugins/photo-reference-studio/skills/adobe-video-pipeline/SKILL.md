---
name: adobe-video-pipeline
description: Plan and validate an editable Premiere Pro and After Effects production workflow, research proven practitioner methods, and ingest reusable project files or presets with source and test records. Use for cross-app production, workflow manuals, reference-to-production adaptation, or delivery QA.
---

# Adobe video pipeline

Follow the shared [beginner experience contract](../chany-studio/references/beginner-experience.md) and [native production integration](../chany-studio/references/native-production-integration.md). Reuse the approved brief and asset versions. Explain visible outcomes in plain language; keep technical setup internal unless requested. These skills add production guidance, not an Adobe connection or permission to spend.

Produce an editable film whose design, timing, media, and delivery can be checked. Research, reusable originals, craft judgment, and native-app verification are complementary. Do not substitute a tutorial list or an automatic render for a finished production.

## Start with the actual job

Read the current project instructions, approved script, latest feedback, delivery requirements, and existing project files. Distinguish proposed creative choices from accepted ones. Do not carry one client's characters, branding, frame rate, or restrictions into another project.

Record host versions, execution surfaces, source dimensions/frame rates, fonts, plugins, and target format. An Adobe connector does not imply native Premiere/AE project control. Describe capabilities as documented, locally executed, or end-to-end verified.

## Choose the production route

- Premiere owns the film's editorial sequence, voice, music, effects mix, captions, and variants.
- AE owns shots needing designed animation, compositing, tracked inserts, or procedural graphics. Use stable shot IDs shared by the edit, comps, exports, and review notes.
- Use Dynamic Link for iteration when it behaves correctly. Use versioned intermediate renders or Render and Replace for heavy/approved shots, preserving editable sources and a route back. Choose by measured performance, not by a universal ban or mandate.
- Use scripts for repeatable assembly, layout controls, and QA. Animation timing and viewer comprehension still need rendered review.
- Generate new AI footage only when the requested shot needs it and the applicable cost/source permissions are already satisfied.

For native AE work, use `adobe-after-effects-production` if available. For editing and delivery, use `adobe-premiere-finishing` if available. They are optional specialized instructions, not mandatory tool dependencies.

## Image assets and platform workflows

For consistent character art, expressions, backgrounds and animation-ready layers, use `image-asset-production` when available alongside the host image-generation instructions. Keep factual artwork and exact typography separately editable. Verify layer, resolution and motion-clearance requirements before expanding a set of stills.

When researching Newtake or considering a canvas/previs workflow, read [newtake-transferable-workflows.md](references/newtake-transferable-workflows.md). It distinguishes inspected public skills from live service capabilities and records which methods can be used with the chosen image generator and Adobe workflow.

## Research and reuse

Read [research-and-reuse.md](references/research-and-reuse.md) when choosing references or importing another creator's work. It includes source ranking, an evidence register, and distinctions between tutorial descriptions, actual source inspection, and rendered verification.

Prefer a creator's own downloadable source, documented production breakdown, or named first-person account. Use community posts to find concrete problems and alternatives; corroborate technical behavior against current documentation and a small native test. Keep useful disagreements and their conditions. Do not claim that popularity establishes quality or that a famous editor's personal workflow is universal.

Read [practitioner-library.md](references/practitioner-library.md) to locate already investigated originals and avoid repeating acquisition. Preserve source files, terms, creator, download URL, date, hash, and application compatibility. Keep learning-only material out of a client's deliverable. Do not purchase, register, or accept new terms merely to fill a library.

Read [native-production-findings.md](references/native-production-findings.md) for the AE → Premiere trial procedure, template adaptation, plugin compatibility checks, and final-mix measurement.

## Further craft research

When the existing workflow is reliable but performance, material behavior or scene continuity needs improvement, read [advanced-technique-evidence.md](references/advanced-technique-evidence.md). It routes deeper public sources and comparative native trials without treating every effect as necessary or every reference as locally tested.

For a high-quality full-film pass after representative-shot approval, read [shot-review-and-reference-comparison.md](references/shot-review-and-reference-comparison.md). It converts the target reference into shot-level observations and keeps research, native tests and accepted results distinct.

## Production checkpoints

For a broad workflow review, read [technique-lab.md](references/technique-lab.md). It covers editorial rhythm, art direction, typography, animation, procedural rigs, transitions, compositing, CG handoff, color, sound, automation, and delivery with concrete exercises. Select exercises relevant to the job; breadth of coverage does not mean every effect belongs in the film.

1. **Editorial test:** make a timed voice/board edit; verify the question, evidence, turning point, and reading holds. Do not polish a sequence whose structure is still changing.
2. **Look test:** resolve representative styleframes, text hierarchy, composition, texture, and transitions using the actual assets. An already accepted look needs no new permission loop.
3. **Native shot test:** render a representative shot through the intended AE → Premiere route, including text, alpha/color if used, audio and captions. A successful AEP save proves only that step.
4. **Production:** build repeatable controls and versioned shots, review changes in editorial context, and keep voice/music/effects independently editable.
5. **Delivery:** inspect the rendered outputs, reopen source projects, check media dependencies, and compare the delivery list. Preserve unresolved creative, factual, or technical items explicitly.

Read [quality-and-handoff.md](references/quality-and-handoff.md) for review criteria and defect priorities. Numerical encode settings and loudness targets come from the job; do not invent a delivery standard.

## Helpers

`scripts/probe_media.py` reads media with ffprobe, hashes it, optionally compares explicit expectations, and writes a no-clobber JSON report. It cannot judge image quality, map accuracy, intelligibility, or license validity.

```bash
python3 scripts/probe_media.py /absolute/path/render.mov --ffprobe /absolute/path/ffprobe --width 1920 --height 1080 --fps 30 --duration 17 --output /absolute/path/new_report.json
```

Finish with actual artifact links, what was executed, what was inspected, and remaining checks. Never report downloaded material as installed, a static inspection as a successful render, or documented API support as tested automation.
