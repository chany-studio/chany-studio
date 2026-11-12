# Dialogue staging and polish

Use when a working rig has poor acting, distracting mouths or competing motion. Preserve the accepted style and exact audio. The recipes below are our adaptation for AE cutout work, not a reproduction of a studio rig.

## Diagnose before adding keys

Review at the intended display size. Identify whether the defect is timing, shape, material, registration, acting or staging. A globally late export cannot be repaired with narrower mouth artwork. A correctly timed ellipse can still be an unconvincing mouth. Write the visible defect and the proof frame/time before choosing a correction.

For each line, mark the character's intention, what changes during the line, the object/person being addressed, and the listener's response. Keep these independent of the phoneme track. Mark where viewer attention should move; a reacting listener need not gesture throughout the speaker's line.

## Separate performance passes

- **Body and gaze:** block the weight, eyeline and main gesture with mouth detail disabled. Read the pose silhouette from the actual shot camera. Keep a still listening interval if it makes the next response clearer.
- **Jaw:** place broad speech openings using the actual sound and available timing. Keep the skull, eyes and nose anchored. For cutout art without a credible jaw seam, use restrained local motion or a properly matched revised part; do not stretch the whole face.
- **Lip contact and shape:** distinguish closure from jaw height. Preserve closed contact for relevant sounds; allow rounded and lateral shapes without forcing a large jaw drop. Shape counts come from the performance, not a universal viseme inventory.
- **Expression and finish:** add only useful corner tension, cheek changes, asymmetry, blinks and secondary movement. Check that expression survives speech and that teeth do not flash brighter than the face.

Carlo Loffredo's published lesson describes reference-led jaw blocking followed by lips, corners and contact, then refinement. Nathaniel Seymour's staging example uses quieter movement to hand attention between two characters, with poses checked from the camera. These are animation principles transferable to AE, although their demonstrated rigs are in Maya. [Lip-sync lesson](https://www.animationmentor.com/blog/tutorial-how-to-animate-believable-lip-sync-for-dialogue-scenes/), [staging lesson](https://www.animationmentor.com/blog/tutorial-use-character-staging-to-guide-viewer-focus/). Article text inspected 2026-11-09; embedded tutorials were not fully watched.

## Prevent common cutout failures

An amplitude envelope expresses energy, not phoneme identity. Keep timing provenance: exact WAV/hash, alignment provider and level (word, character or phoneme), manually corrected spans, and estimated internal sound times. Do not label a syllable-derived estimate as forced phoneme alignment.

When a short gap creates chatter, inspect both sounds before bridging it. Never smooth every closure away. A centered filter may avoid shifting the curve, but it can still weaken required contact; compare the rendered consonant and pause. Avoid fixed frame-count recipes across different frame rates and voices.

Use registered mouth parts whose paper grain, lighting and ink match the face. Parent the parts and any cleanup patch to the same head transform. Keep foreground beard/hat occlusion explicit. A large head turn generally needs a new view, not a scale transform of the front mouth. Preserve the last accepted artwork while testing the revision.

## Review in context

Keep the previous and proposed shot at identical audio, duration and framing. Review the whole face, a close mouth crop, and the preceding/following cut. Sample contact sounds, sustained vowels, transitions, breath pauses and peak head motion. Then review at 1×; frame inspection alone cannot prove convincing speech.

Record visual playback, sampled frames, timing measurements and actual listening separately. If audio cannot be heard through the available surface, leave auditory review open. A playback timecode advancing does not establish that every frame or sound was perceived.

Accept a change only for the defect actually checked. Separate visual timing approval from acting approval and material approval. Stop adding motion when it competes with a map, demonstration or subtitle that the viewer must read.
