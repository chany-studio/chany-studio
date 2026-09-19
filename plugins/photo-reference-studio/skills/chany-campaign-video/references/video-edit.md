# Bounded source-video editing

Use this branch when an existing authorized video needs a specific visual change. `chany-campaign-video` owns intent and acceptance; `chany-media-production-loop` executes generative jobs. This branch replaces new-film concept/still generation steps. It does not add a mandatory reference board, marketing interview or new still.

## Choose the smallest operation

| Request | Owner and operation |
| --- | --- |
| Trim, reorder, subtitles, exact copy overlay, audio level, or replace an accepted segment | `chany-video-assembly`, using supported deterministic tools; no generative video model merely for these edits |
| Replace an object/product, or transfer a driving clip's motion | [genjutsu-edit.md](genjutsu-edit.md); distinguish object swap from a new motion-transferred scene |
| Change a background, lighting, appearance or another named visual region | a live-supported video-edit mode through the shared model router |
| Extend the beginning/end | supported video-extension mode; approve added duration, direction, join and audio policy |
| Independent edited versions of one ad | `chany-ad-variants` |
| Extract Shorts/Reels from a longer source | `chany-shortform-recut` |
| Reinterpret a public reference using the user's product without source editing rights | reference ingest and original scene planning, not uploading or transforming that footage |

Seedance 2.5 `video_edit`, Kling Omni Edit, FLUX 3 Video Edit and Gemini Omni Flash 1.1 `edit` are candidates, not interchangeable calls. Check source roles, duration, quality, audio behavior and edit coverage live through [latest-model-routing.md](../../chany-studio/references/latest-model-routing.md). A short supported input window must never silently truncate the user's film. Ask once about a required segment or propose a different workflow; segmenting a long film can create extra paid jobs and needs scoped approval.

## One edit specification

1. Inspect the actual source and permission to edit/upload it through the supported host intake. A page URL or thumbnail cannot establish timing, source access or rights. Reuse an accepted reference/source packet; otherwise route to video-reference ingest. Do not bypass a private/login/download restriction.
2. Record the source version, requested time range, one intended change, target object/region, product/identity references, and preserve list: timing/cuts, product, people, camera, text, logos, audio, duration and framing. Mark unspecified nonessential choices as proposed; ask only when the target or preservation intent is ambiguous.
3. Select the least invasive feasible workflow. Preserve original files. Reuse source frames and accepted stills as evidence; do not spend on a redundant new governing still. When untouched areas must be pixel-identical, use a supported mask/compositing workflow or disclose that generative whole-frame editing cannot guarantee that requirement. Decline the incompatible route rather than claiming exact preservation.
4. Compile the internal prompt as source + time/region + target state + fixed properties + continuity/audio requirements. Do not add new dialogue, music, claims or people unless requested and authorized. Model defaults that synthesize or replace audio must be explicitly resolved; retained source audio is a separate verified authority, not assumed output behavior.
5. Show one edit confirmation containing the change, affected range, what stays fixed, actual model/mode, source/reference transmission and current quote. For an existing accepted source, do not require a new paid still confirmation. If a genuinely new scene is necessary, disclose the changed scope and use the normal still-first flow.
6. Execute and recover through the media loop. Review the whole edited interval, first/last frames, cut boundaries, occlusions, contact/reflections, product/label fidelity, unaffected regions, subtitles, audio and final duration. Compare against the source, not merely the prompt. Mark partial inspection or unverifiable audio honestly.
7. Deliver a new version and concise change/remaining-defect note. Only accepted clips go to assembly; assembly is optional unless a complete cut or reinsertion was requested. Keep the existing one-attempt plus at-most-one-approved-correction ceiling; no chained model fallback.
