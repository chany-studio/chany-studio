# Finishing, delivery and recovery

Use [dialogue-and-mix.md](dialogue-and-mix.md), [color-and-roundtrip.md](color-and-roundtrip.md), and [captions-and-graphics.md](captions-and-graphics.md) for those finishing passes. This reference covers the actual export and the editable handoff.

## Define each output before encoding

Record sequence/version, picture source, caption policy, audio mix/stems, in/out range, frame rate, dimensions, codec/profile, color target and expected duration. Keep a review encode, mastering file and delivery derivative distinct when the job needs them. A high-bitrate review MP4 is not automatically the requested archival master.

Use an output matrix when delivering captioned and clean pictures, separated audio, short versions or multiple languages. Match start/timebase/duration across paired versions. Check whether the picture already contains subtitles. Ensure no unintended In/Out range or work-area selection truncates the program.

## Choose settings for the actual content

Use Proxies and Use Previews are independent export choices. Keep both off for the first full-resolution reference unless verified previews are intentionally part of the mastering route. When reusing previews, confirm format, dimensions, color and quality; Media Encoder has its own Use Previews setting. [Export settings](https://helpx.adobe.com/premiere/desktop/render-and-export/export-files/overview-of-export-settings.html), [preview-file export](https://helpx.adobe.com/ca/premiere/desktop/render-and-export/render-sequences-for-playback/use-preview-files-when-rendering.html).

Maximum Depth concerns processing precision; Maximum Render Quality concerns resampling/transforms. Neither invents missing source detail, and supported GPU paths already perform some of that processing. Select based on the pipeline and inspect output rather than treating every checkbox as a quality guarantee. [Basic export settings](https://helpx.adobe.com/premiere/desktop/render-and-export/export-files/basic-video-settings.html).

Choose bitrate/encoder with a representative test containing moving fine lines, gradients, textured paper, small text and sound peaks. Inspect decoded frames for ringing, breakup, banding and edge damage. If an encoder defect appears, compare a controlled software/hardware encode before changing the whole edit. Do not change the timeline frame rate to satisfy an accidental export-preset default.

## Two levels of verification

First test the risky route on a short passage: altered AE shot, transparency, grade, Korean type, and actual audio routing. Save/reopen the native project and export through Premiere/AME as intended. This verifies a route, not the whole film.

Then inspect the final full export:

- Probe actual codec, dimensions, rational frame rate, decoded frame count, duration, sample rate, channels and color tags. Decode through the file; a playable header is insufficient.
- Watch the full program at 1×, checking missing/offline frames, unintended black or frozen spans, transition boundaries, repeated frames, titles, masks, fine details and lip-sync. Use the manifest to distinguish an explicitly reserved black scene from a defect; do not globally ignore black-frame findings.
- Listen for routing errors, clipping, doubled voices, clicks, silence and cut tails. Measure final loudness/true peak as described in the mix reference. Sample checks do not replace full-program playback.
- Compare burned/clean versions and sidecars. Confirm the beginning, ending and every replacement use the intended picture/audio revision.

Record pass/fail with timecodes and evidence. Meter measurements cannot certify natural acting or narrative clarity. If actual playback/listening is unavailable, say so and leave that decision pending. A failed export stays out of final delivery.

## Package the editable work

Use Project Manager's collect/transcode options deliberately. Current Adobe documentation includes **Convert After Effects Compositions to Clips**, which can flatten linked comps for playback without AE; that is not preservation of editable AE layers. Keep the original AEP and its source dependencies separately when editable graphics are required. [Current Project Manager guide](https://helpx.adobe.com/premiere/desktop/organize-media/transfer-files/copy-transcode-or-archive-project.html).

Check included sequences/nests, source handles and any footage retained for revisions. Do not assume all source attributes can be transcoded to one preset. Preserve originals when source fidelity or later adjustment requires them. Verify image sequences, MOGRTs, fonts, LUTs, audio, plugins and licensed dependencies rather than assuming the manager collected everything.

Open the collected project from its destination and inspect resolved paths. Confirm it is not silently using the original working folders. Reopen the collected AEP too, and make a short proof export from the package. Do not delete or disconnect the user's original files just to test portability. Include a readable dependency list, software versions, selected sequences and unresolved requirements.

## Recovery and feedback

Before a host update or risky conversion, save a project copy and baseline reference. Do not update Premiere mid-delivery just because release notes list a useful fix. If a project fails, try a duplicate/known autosave and isolate the sequence or offending media before resetting preferences or deleting caches.

Track feedback by review version and timecode, with the defect/request and its disposition. After a targeted fix, verify the changed passage plus its adjacent cuts and affected output; rerun broader checks only when timing, routing, color, captions or packaging changed globally.
