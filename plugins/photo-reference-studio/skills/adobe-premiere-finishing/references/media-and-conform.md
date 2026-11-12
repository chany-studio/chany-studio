# Media preparation and conform

Use for ingest, relinking, mixed frame rates, proxies, or playback failures. Keep source media immutable and keep a source-to-working-file mapping when transcoding.

## Identify what the clip actually is

Record path/source ID, duration, frame-rate numerator/denominator, frame dimensions, pixel aspect, field order, audio channels/sample rate, and known color interpretation. Check variable frame rate when footage comes from screen capture or phones; the filename or a rounded average rate is insufficient evidence. Test start, middle and end sync for long AV clips.

Keep the sequence's intended rate. Interpreting a clip at another rate changes its timing; it is not a repair for variable frame rate. If drift, decode problems or proxy/interchange requirements justify a constant-frame-rate transcode, create a separate working copy and compare duration, sync, visible actions and channel mapping. Retain the original and the conversion settings. Adobe's older staff [VFR FAQ](https://community.adobe.com/questions-729/faq-how-to-work-with-variable-frame-rate-vfr-media-in-premiere-pro-1349720) explains sync-preserving decode and CFR preparation; check current [release notes](https://helpx.adobe.com/premiere/desktop/whats-new/release-notes.html) before treating an old workaround as universally necessary.

For footage whose rate differs from the sequence, evaluate the actual cadence. Frame sampling, blending and synthesized motion are different visual choices. Optical-flow interpolation can distort text, fingers or thin map lines; inspect before using it. Keep accepted lip-synced audio/video at their agreed speed. Do not use generated extension or held frames to manufacture documentary evidence or conceal missing action.

## Proxies are an attachment workflow

Use proxies when decode cost is the problem, not automatically for every file. Match identity, timing, aspect and channel structure. Use an unambiguous suffix/location, attach through the proxy workflow, and compare the same frame with proxies on/off. Do not relink a low-resolution proxy as the original merely because its name resembles the missing source.

Adobe documents limitations around source audio-channel modification, Interpret Footage, AE proxy interoperability and Dynamic Link in [proxy workflows](https://helpx.adobe.com/premiere/desktop/organize-media/ingest-proxy-workflow/ingest-and-proxy-workflow.html). Do not depend on those unsupported combinations. Normalize a separate working master when justified, or test a supported handoff using original media. Native AE proxy settings and Premiere proxy attachments are not one shared switch.

Playback's proxy toggle does not set export's Use Proxies checkbox. Inspect export settings independently, including Use Previews. For an approved full-resolution delivery, ensure originals are online and the export uses them. [Adobe proxy export](https://helpx.adobe.com/uk/premiere/desktop/organize-media/ingest-proxy-workflow/export-proxies.html).

## Relink and performance diagnosis

When relinking, verify source ID/path plus duration, timecode and visible content, especially repeated camera filenames. Check the first linked item before allowing wider automatic matches. Relinking to the wrong take can look technically healthy while changing the edit.

Diagnose one cause at a time in a duplicate: source decode, expensive effect, Dynamic Link comp, storage, or preview settings. Lower monitor resolution or make a short preview to distinguish dropped playback from damaged output. A smooth exported test with a stuttering live timeline calls for performance work, not a story retime. Do not clear unrelated caches or reset all preferences as the first response.

After a conform change, recheck caption timing, source in/out, grade placement and audio mapping. A source replacement is not accepted until the edited passage matches in context.
