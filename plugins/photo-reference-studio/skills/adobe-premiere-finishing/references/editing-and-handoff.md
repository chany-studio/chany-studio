# Editing and handoff

## Organize to compare, not to decorate

Use media-role bins and named sequences. Vashi Nedomansky's [public Deadpool template](https://blog.adobe.com/en/publish/2016/03/04/putting-deadpool-into-practice-premiere-pro-project-template-and-presets) supplies a concrete reusable model: Selects and Main plus bins for sequences, raw media, photos, graphics, SFX, VFX, titles, music, AE projects and exports. Inspect the original ZIP and test native conversion on the installed Premiere version before use.

Stack selects/main timelines when it helps compare footage; do not force a two-monitor layout onto a different workspace. Use markers for meaning, source/fact notes, and unresolved edit decisions. Avoid adopting feature-film track counts for a short explainer without a reason.

Read [media-and-conform.md](media-and-conform.md) before proxy creation, relinking or source interpretation changes.

## Editorial rhythm

Cut on meaning and performance, not a fixed number of seconds. Use early visuals to establish the thing a question refers to. Hold the evidence long enough to examine it. Use sound bridges where they help continuity, and leave silence where a reaction or conclusion needs space. Compare the revised shot within neighboring shots, not only in isolation.

For a fine cut, identify what is late: the action, reaction, evidence, or transition. Try a small reversible trim and compare the same neighboring passage at 1×. A listener's expression can finish a thought after the spoken line ends; matching every cut to a sentence boundary often removes that response. For information-heavy work, distinguish a pause that lets a viewer inspect evidence from padding that shows nothing new.

## Select the edit that preserves the intended timing

| Need | Edit | Check afterward |
|---|---|---|
| Change one clip's duration and move later material | Ripple | All intended tracks, captions, markers and downstream sync |
| Move the boundary between neighboring clips without changing their combined span | Roll | Both source handles and action/reaction timing |
| Choose a different moment within the same occupied timeline span | Slip | New source in/out, linked sound and continuity |
| Move a clip's position while trimming its neighbors | Slide | Neighbor handles and the preserved overall span |
| Let sound lead or trail the picture cut | Split edit / J or L cut | Speaker sync when visible, consonants, room tone and overlaps |

These are choices for the editorial problem, not a required sequence of operations. Before trimming, inspect source patching, track targeting, linked selection, sync locks and selected edit points. They are different controls. A locked track can protect content while also preventing an intended downstream move; verify the result rather than assuming a padlock guarantees sync. Use Trim mode to view both sides and loop the cut. [Adobe Trim mode](https://helpx.adobe.com/premiere/desktop/edit-projects/trim-clips/edit-in-trim-mode.html), [editing tools](https://helpx.adobe.com/uk/premiere/desktop/get-started/tour-the-workspace/tools-panel-and-options-panel.html).

## Transcript assistance

Use transcripts to locate material and build a rough dialogue assembly when useful. Distinguish correcting transcription text from deleting/rearranging media through Text-Based Editing. Check the timeline after a text edit; bulk pause removal can damage breathing, meaning and reaction time. Final captions are a separate deliverable after the edit. On an approved TTS/lip-sync cut, keep accepted performance timing unless a deliberate revision includes new sync and caption checks. [Adobe Text-Based Editing](https://helpx.adobe.com/premiere/desktop/edit-projects/edit-video-using-text-based-editing/overview-of-text-based-editing.html).

## AE transfer

Use exact in/out frames, comp/sequence frame rate, resolution, pixel aspect, handles, and audio policy. Include enough handles for the actual transition, rather than a universal fixed length. A changed source/comp must invalidate its old render version.

[Adobe Render and Replace](https://helpx.adobe.com/premiere/desktop/render-and-export/render-sequences-for-playback/render-and-replace-media-in-a-sequence.html) supports Restore Unrendered. It excludes stills, nested sequences, adjustment layers and some special clips; image sequences are supported. Clip transitions, intrinsic Opacity, Time Remapping and audio effects are not baked by this command. Intrinsic Motion can bake when Source is Sequence even if Include Video Effects is off. Record those settings, then compare the boundary and Effect Controls. If unsupported, render an intentional versioned intermediate.

For opaque graphics, choose an appropriate high-quality intermediate such as ProRes 422/422 HQ. For transparency, an explicit AE ProRes 4444 render can be tested separately. Do not equate that with a Premiere Render and Replace preset: the current help page identifies its GoPro CineForm with Alpha preset as the alpha-preserving option. Verify the available preset and actual transparent edge; other presets may flatten it. Color checks are in [color-and-roundtrip.md](color-and-roundtrip.md).

Do not bake subtitles into a shot that must later produce a clean version unless a matching clean shot is also supplied. A changed AE comp invalidates its previous shot render. Relink the correct version and verify first/last frames and handles before grading or mixing around it.

## XML interchange proof

Import a short sequence first. Compare source references, starts/ends, duration, channel layout, speed changes, transitions, titles, captions, and effects against the manifest. Save a native project and reopen it. Use integer frames/rational rates; distinguish 30 from 30000/1001. An XML that parses successfully is not an edit that imported correctly.
