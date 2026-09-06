# Video Reference Teardown

Use a user-supplied reference video to learn timing and attention structure, not to copy its content.

## Intake and rights boundary

Consume an accepted `video_reference_packet` from `chany-video-reference-ingest`, or create the equivalent record when the user already supplied a local video file. An inspectable source may be a local file, the user's own export, or a user-invoked active-tab recording they are authorized to analyze. Do not download from a platform, bypass access controls, scrape a feed, or reconstruct a protected asset from a link. When only a platform page link is available, route it through `chany-video-reference-ingest`; a visible player supports only the moments actually observed, while a full teardown requires an inspectable capture or file.

Keep teardown local unless the user separately authorizes an external upload. Inspect the source for private screens, people, customer data, or confidential material before creating shareable frames or a contact sheet. Bind the teardown to the capture or file hash and the exact observed time range; never extend conclusions beyond captured coverage.

## Environment and extraction

Use `chany-preflight` to check the media probe, frame-extraction, and contact-sheet capabilities needed in the current runtime. Do not assume that `ffmpeg`, `ffprobe`, ImageMagick, Pillow, or a writable output location exists.

Probe the actual duration, frame rate, dimensions, codecs, and audio presence first. Sample frames at a fixed interval across the clip and arrange them in one contact sheet so beat changes are visible at a glance. One second is a useful starting interval for a short-form ad, not a fixed requirement; halve it when multiple meaningful cuts occur between samples, or increase it for a slow continuous shot. Record the interval and source version.

If extraction cannot run, return the intended timestamps and table scaffold and state which capability is unavailable. Do not claim that frames were inspected.

## Beat table

| Time range | What is on screen and heard | What changed | Why it may hold attention | Transferable timing |
|---|---|---|---|---|

Write one row per meaningful beat, not per sampled frame. Identify visual, narrative, audio, text, camera, or product-state changes and separate observation from interpretation. When audio can be inspected, note speech, music, silence, impacts, and transitions without transcribing or reproducing protected material beyond what analysis requires.

## What transfers

Pacing, beat length, reveal timing, camera behavior, information order, sound-function, and the shape of the opening may inform a new shot plan. The reference product, person, packaging, copy, music, brand marks, distinctive artwork, exact sequence, and other protected expression do not transfer. Map useful timing to approved `usp_role` and `message_rank` values, then build new content from the user's own authorities.

This teardown does not expand any online reference scope. Static-image discovery remains with the selected source-isolated reference owner and its L1-first, direct-L2-only policy. It does not authorize Stocksy, ShotDeck, Death to Stock, or another unlisted provider.
