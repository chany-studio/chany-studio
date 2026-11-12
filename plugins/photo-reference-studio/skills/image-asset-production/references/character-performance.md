# Character performance assets

## Identity before quantity

Select one accepted identity master per character. Document visible invariants: head/body ratio, eye/nose/mouth placement, hair/hat silhouette, costume construction, markings, dominant colors and material scale. Do not redesign an official mascot to solve a staging problem.

Build only the views demanded by the sequence. A neutral head, three-quarter head and one usable body pose can be more valuable than a dense sheet of inconsistent variants. Sheets aid comparison but are not automatically production sprites; review individual panels at usable resolution and split/register them through an appropriate supported editing workflow.

Each new expression or pose must reference the accepted identity. Check against the master and adjacent shots, not only the immediately preceding generated variant. Hairline, beard and hat changes can make the same prompt produce a different person.

## Expressions are actions in context

Choose expressions from dialogue beats: noticing, questioning, listening, realizing, explaining, restrained amusement or concern. Specify eye focus, brow action, mouth tension, cheek and head posture together. Do not make every question a wide-open mouth or every conclusion a grin.

Separate expression (attitude), pose (weight, hands and prop relationship), and view (camera angle and crop). Change one axis when diagnosing a problem. Combine them only when the shot requires a performance change. Include listening states so the character can remain alive without continuously gesturing.

For new poses, check weight support, shoulder/neck attachment, wrist direction, finger count, grip and prop contact. A believable hand touching the actual prop is preferable to an impressive but unusable gesture. Distinct poses should communicate distinct beats rather than repeat the same palm-up explanation.

## Mouth art and facial continuity

Plan mouth art from the actual delivery voice and supported rig, not from an arbitrary mouth-count target. Useful shapes may include neutral, closed contact, narrow/open vowels, rounded vowels and lateral shapes; use names and inventory required by the selected rig. Adobe Character Animator's viseme names are software conventions, not a universal Korean phoneme table or an AE auto-rig feature.

Keep mouth location, face plane, beard overlap, paper material, outline, interior value and highlight consistent. Review closed/open alternation on the character's face at final size. A mouth sheet alone cannot show whether a bright tooth block or patch edge will flash during dialogue.

Separate mouth, jaw and cheek treatment when the shot needs them. Cover removed mouth art with a genuinely matching face patch; validate texture and shading at the join. If generation changes the rest of the face, return to the accepted head and edit more narrowly. Generated patches are not guaranteed registered; align in the compositing workflow and save the transformation.

Use the actual revised WAV for later timing. A waveform envelope can drive broad energy but does not identify phonemes. A transcript or shape inventory cannot prove lip sync. Require a dialogue excerpt with a pause, closed consonant and sustained vowel at 1× playback; inspect closed-mouth rests, timing, intensity and transitions. Native motion verification is separate from still-art acceptance.

## Parts for animation

Use a clean head base, eyes/blinks/brows, mouth variants, neck/torso, required arm/hand variants and independent props when independent motion is planned. Preserve enough hidden surface beneath hat, beard, sleeve, wrist and neck to survive the allowed rotation. Do not cut exactly at a joint then expect deformation to fill the hole.

Prefer a new drawn/generated view for a significant head turn over stretching a frontal face. Use limited deformation for breathing, weight and subtle secondary motion; exaggerated deformation can expose texture scaling or limb seams. Side-specific asymmetry must be preserved when swapping poses.

## Evidence and adoption

Record view ID, expression ID, pose ID, canonical reference hash, crop/registration data, intended shot IDs and accepted state. Reject identity drift even if the candidate is attractive. Record the narrow defect and keep the last usable asset available.

Primary references, checked 2026-11-08:

- [Adobe: artwork structure](https://helpx.adobe.com/adobe-character-animator/desktop/creating-and-controlling-puppets/prepare-artwork.html) supports separated facial/body parts and named views. This does not establish that Character Animator is installed or that AE interprets its tags.
- [Adobe: body and lip-sync behaviors](https://helpx.adobe.com/adobe-character-animator/desktop/behaviors/learn-more-about-behaviors/body-directly-controlled.html) documents behavior-dependent controls. Treat automatic analysis as a starting point requiring playback review.
