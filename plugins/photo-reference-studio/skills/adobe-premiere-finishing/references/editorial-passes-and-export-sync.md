# Editorial passes and export sync

## Review the film at different scales

Choose passes by the actual defect. In a story pass, write what the viewer should understand before and after each scene. Check whether the picture supplies that evidence when the sentence needs it. In a fine cut, judge the handoff between shots, eye travel, speech rhythm and reading holds. In polish, inspect local masks, mouth timing, type, sound tails and encoding. Keep unresolved story changes visible rather than hiding them behind finished graphics.

Erik Vogt-Nilsen describes scene selects and separate assembly, fine-tuning and polish passes for *Plainclothes*. He also describes motivated shot choices. His use of one Productions project per scene is a personal organizational method, not a requirement for every film. Adopt the review discipline without forcing an unnecessary project conversion. [First-person Adobe interview](https://blog.adobe.com/en/publish/2025/01/24/sundance-2025-erik-vogt-nilsen-on-bringing-plainclothes-to-life-with-premiere-pro-productions-and-frame-io), text inspected 2026-11-09.

## Long-form explanations

Use these independently authored editorial tests:

- Identify the question, evidence and consequence. If a sentence does not connect, remove or rewrite it within the approved scope before timing its graphics.
- For a complex image, reveal a location, a relevant detail, then its relationship to the whole. Use a separate interpretive highlight without altering factual pixels. Do not imply an observed before/after change from two unrelated sources.
- List what changes during a long hold. A hold may be necessary for reading; if there is nothing to read or observe, shorten it or provide relevant evidence. Avoid continuous decorative motion as a substitute for editorial progress.
- Review the outgoing and incoming focal position. Use an action, visual relationship or voice continuation when it helps. A repeated transition is not required for consistency.
- Treat approximate durations as approximate. Remove a rejected line across picture, all voice tracks, effects, captions and markers. Recalculate the end; do not pad merely to recover a round number.
- Apply representative-cut feedback to every affected full-film occurrence, not only the excerpt. Keep full-film and excerpt version pointers distinct.

## Measure an export delay before correcting it

A locally observed Premiere export introduced a constant AAC offset despite an aligned PCM reference. This is a route-specific finding, not a claim that all Adobe exports need a fixed correction.

If the same mix is available, decode the exported audio and reference to the same sample rate/channel interpretation. Compare several audible windows across the program with bounded cross-correlation. Avoid silence and repetitive effects; check correlation strength as well as the best lag. First reconcile pan law, channel routing and processing, since a different mix is not a trustworthy alignment reference.

A constant, strongly supported lag may justify a timestamp correction on a separate copy, preserving the original export and video stream. Verify the first sound, end tail, all test windows, duration and player behavior after correction. Nonconstant lags indicate possible retiming, dropped material or a changed source; investigate those instead of applying one global offset. Do not use the local 1,024-sample observation as a preset for future files.

An export-mix correlation says nothing about whether an animated mouth matches the spoken phoneme. Keep encoded sync QC, source lip timing and perceptual speech review separate.

## Delivery evidence

Save the selected sequence, reopen the native project, confirm media and track routing, then export the intended range. Record actual frame count, codec/color, sample rate/channels, decode status and measured audio level. Check black/frozen reports against the scene manifest; an explicitly reserved empty scene is not a license to ignore other blanks.

Describe scope plainly: short passage versus full program, sampled visuals versus continuous viewing, measurements versus listening. Technical export success does not confer reference parity or publication approval.
