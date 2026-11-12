# Dialogue, music and final mix

Use for voice-led edits, dialogue repair, music design, stems or loudness checks. Preserve an untreated reference and compare at matched perceived level; louder is not automatically clearer.

## Route before processing

Map source channels deliberately, then check clip, track, submix and output routes. A stereo file may contain unrelated mono recordings; a single narration channel normally needs one intentional route to a stereo mix. Do not duplicate it onto two centered tracks just to make two output channels. Solo each voice and check left/right output, then check the combined mix for accidental doubling and phase loss. [Adobe channel mapping](https://helpx.adobe.com/premiere/desktop/add-audio-effects/advanced-audio-techniques/audio-channel-mapping.html), [pan and balance](https://helpx.adobe.com/premiere/desktop/add-audio-effects/apply-audio-effects/pan-or-balance-a-stereo-track.html).

Use clip gain for uneven source takes and clip-specific repair. Use track processing for material that needs a shared treatment, and submixes only when group control helps. Avoid processing or summing the same signal twice. Speech, music, effects and ambience should remain independently controllable. [Track versus Clip Mixer](https://helpx.adobe.com/premiere/desktop/add-audio-effects/advanced-audio-techniques/about-audio-track-mixer.html), [submixes](https://helpx.adobe.com/in/premiere/desktop/add-audio-effects/advanced-audio-techniques/create-a-submix.html).

## Repair the performance, then balance it

Listen to dialogue alone for clipped consonants, edit clicks, abrupt noise-floor changes, tails and unintended pauses. Use short edit fades where needed without fading away syllables. Preserve natural breaths unless a specific breath distracts; clean TTS does not need automatic noise reduction merely because a repair tool exists.

Apply cleanup, EQ, de-essing and compression to a diagnosed problem, one stage at a time. Audition quiet and emphatic lines. Retain each speaker's identity; reject watery noise reduction, dull consonants, pumping or flattened emphasis. Keep parameters responsive to the recording instead of prescribing one EQ curve or compressor preset for every voice. Do not alter approved performance speed to fit a picture cut.

## Music and sound are part of the edit

Sketch sound cues while testing scene timing: a purposeful paper movement, a transition lead, a reaction pause, or a restrained music change. Avoid a whoosh on every cut. In a primary [Paul Rogers interview](https://blog.frame.io/2022/04/13/art-of-the-cut-everything-everywhere-all-at-once/), he describes testing substantial sound design during picture editing to learn whether a scene works. This supports early sound trials, not copying that film's sound assets or pacing.

For ducking, tag the intended dialogue and music, generate a first pass, then inspect phrase openings, pauses and recovery. Re-generating [ducking keyframes](https://helpx.adobe.com/premiere/desktop/add-audio-effects/adjust-volume-and-levels/automatically-duck-audio.html) overwrites manual adjustments, so keep a mix revision. Adjust by listening rather than repeatedly generating over a finished pass.

Use [Remix](https://helpx.adobe.com/in/premiere/desktop/add-audio-effects/apply-audio-effects/remix-audio-in-premiere.html) only when a licensed music arrangement benefits from a different duration. Its duration is approximate; it does not guarantee the exact ending frame or lyrical continuity. Listen across every rearrangement and place the ending deliberately. Retain the source and editable remix, plus a baked reference for handoff if needed. Never apply this music operation to approved narration or lip-sync audio.

## Automation and output evidence

Read plays existing automation; Write can overwrite it throughout playback. Touch returns toward the prior curve after release; Latch holds the changed value until stopping. Choose intentionally, inspect track keyframes and return to Read for review/export. Off ignores stored automation and is not equivalent to Read. [Adobe automation modes](https://helpx.adobe.com/ca/premiere/desktop/add-audio-effects/apply-audio-effects/audio-track-mixer-automation-modes.html).

Set the delivery loudness and true-peak criteria from the actual destination/client. If none exists, record the proposed review target as provisional. Do not silently assign a universal online LUFS standard. Measure the final encoded file after all routing, dynamics, gain and codec stages; source WAV normalization and a limiter setting are not proof of final compliance. Recheck loudness and true peak after a corrective export.

Stems need identical start, duration, rate and channel descriptions. State whether they are untreated, processed pre-master, or print stems; nonlinear master processing means separately exported stems may not sum to the limited full mix. Include the final mix and document that distinction. Listen through the full program, including the last tail; record playback/listening pending if the host cannot actually perform it.
