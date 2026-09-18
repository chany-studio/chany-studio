---
name: chany-shortform-recut
description: Turn one authorized YouTube or supplied long-form video into reviewed Reels, Shorts, or social clips with approved crops, subtitles, hooks, and CTA treatment. Use for 숏폼 재가공, 영상 클립 추출, Clipify, or long-to-short requests; not for downloading unauthorized streams or inventing a new campaign from unrelated footage.
---

# Chany Shortform Recut

Extract useful marketing moments while preserving the source's meaning and rights. Read the shared [performance-ad contract](../chany-studio/references/performance-ad-contract.md), [platform publication adapter](../chany-studio/references/platform-publication-adapter.md), [latest model routing](../chany-studio/references/latest-model-routing.md), and [publication gate](../chany-publication-review/references/publication-gate.md).

Follow the shared [beginner experience contract](../chany-studio/references/beginner-experience.md) for plain-Korean choices, one confirmation card, paid-generation approval, and concise recovery.

## Intake and boundary

- Accept an authorized YouTube URL or a user-supplied/local source that the available workflow supports. Do not reconstruct streams, bypass access controls, or claim a visible player was downloaded.
- Warn once that automatic clip selection and transcription require human review, especially for long videos, regulated claims, names, prices, dates, and Korean spacing.
- Lock requested clip count, placement, ratio, approximate segment length, subtitle style, language, brand color, CTA behavior, and whether face-tracked cropping is acceptable.

## Workflow

1. Inspect the live Clipify or equivalent schema. Clipify was verified on 2026-09-18 for one YouTube URL per job, 1–20 clips, 9:16/1:1/16:9, subtitle styling, face tracking, and 2–60 second segments; treat these as a capability snapshot, not permanent limits.
2. If the exact source type is unsupported, return a legal handoff or use `chany-video-reference-ingest` for analysis only. Do not silently switch source acquisition methods.
3. Show one confirmation card with source, clip count, ratio, segment length, subtitle treatment, crop behavior, current cost, and publication status. Generation approval is not publication approval.
4. Submit once and recover the original job after an uncertain response. Do not duplicate a pending long-running recut job.
5. Review every candidate for complete thought, factual meaning, hook clarity, safe crop, speaker continuity, transcript accuracy, subtitle readability, brand fit, duplicate segments, and CTA continuity. Reject clips that change the source's meaning or cut away required qualification.
6. Deliver only reviewed clips, numbered in stable order with source time range and suggested use. Route exact final versions with claims, offers, rights, or platform release requirements through `chany-publication-review`.

Read [references/recut-acceptance.md](references/recut-acceptance.md) for the clip review table.
