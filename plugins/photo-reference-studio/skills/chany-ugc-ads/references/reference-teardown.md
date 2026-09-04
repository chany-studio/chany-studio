# Reference Video Teardown

Use a user-supplied reference video to learn timing and attention structure, not to copy its content.

## Intake and rights boundary

The user supplies a local video file or a screen recording they are authorized to use. Do not download from a platform, bypass access controls, scrape a feed, or reconstruct a protected asset from a link. When only a link is available, ask for the file or an authorized screen recording.

Keep teardown local unless the user separately authorizes an external upload. Inspect the source for private screens, people, customer data, or confidential material before creating shareable frames or a contact sheet.

## Environment and extraction

Use `chany-preflight` to check the media probe, frame-extraction, and contact-sheet capabilities needed in the current runtime. Do not assume that `ffmpeg`, `ffprobe`, ImageMagick, Pillow, or a writable output location exists.

Probe the actual duration and frame rate first. Sample frames at a fixed interval across the clip and arrange them in one contact sheet so beat changes are visible at a glance. One second is a useful starting interval for a short-form ad, not a fixed requirement; halve it when multiple meaningful cuts occur between samples, or increase it for a slow continuous shot. Record the interval and source version.

If extraction cannot run, return the intended timestamps and table scaffold and state which capability is unavailable. Do not claim that frames were inspected.

## Beat table

| Time range | What is on screen | What changed | Why it may hold attention | Transferable timing |
|---|---|---|---|---|

Write one row per meaningful beat, not per sampled frame. The change column must identify the visual, narrative, audio, text, camera, or product-state transition; a shot list without the change is description, not teardown. Separate observation from interpretation.

## What transfers

Pacing, beat length, reveal timing, camera behavior, information order, and the shape of the opening may inform the new shot plan. The reference product, person, packaging, copy, music, brand marks, distinctive artwork, exact sequence, and other protected expression do not transfer. Map the useful timing to approved `usp_role` and `message_rank` values, then build new content from the user's own authorities.

This video teardown does not expand the Behance/Pinterest search scope. `chany-reference-board` remains the owner of static-image discovery and its L1-first, direct-L2-only policy.
