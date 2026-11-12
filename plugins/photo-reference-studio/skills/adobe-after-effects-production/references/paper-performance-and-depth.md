# Paper, performance, and depth

Use this supplement for collage, cutout characters, material-aware motion, tracked inserts, or simple CG. These are production recipes and trial decisions, not locally rendered approvals. Keep an unchanged baseline shot and compare the same content, duration, and audio.

## Choose the smallest useful depth system

Use independently placed flat layers for paper art that needs parallax and ordering. Use a native 3D mesh or imported model only when the shot needs a visible side, changing silhouette, or coherent lighting in volume. A camera orbit is not automatically more informative than a well-staged flat shot.

Adobe documents native parametric meshes and materials, and Advanced 3D rendering of models, cameras, and lights. Check the installed version, renderer, GPU, effect support and alpha/color path on the actual machine. An old tutorial's renderer limitations may no longer match a current release. Do not change an entire accepted film's renderer to test one object. Sources: [meshes](https://helpx.adobe.com/after-effects/desktop/work-with-3d-composition/create-parametric-meshes/working-with-parametric-meshes.html), [Advanced 3D](https://helpx.adobe.com/after-effects/desktop/work-with-3d-composition/advanced-3d-renderer/advanced-3d-renderer.html), [feature history](https://github.com/AdobeDocs/after-effects-feature-history).

## Paper rig: material follows movement

An independently authored setup:

1. Separate paper backing, ink/art, edge, contact shadow, cast shadow and the control null. Attach the paper grain to the object; reserve comp-space grain for a deliberate finishing layer.
2. Establish a resting contact state, lift, travel and settle. Choose one light direction. As a sheet lifts, coordinate shadow offset, softness and density with height; return to a tight contact shadow when it lands. A 2D shadow rig is a stylized approximation, not a physical simulation.
3. Let one edge or secondary piece settle after the main mass. Use a few designed poses rather than independent permanent wiggles on every property. Texture should remain legible and quiet during reading holds.
4. Keep authoritative content intact. Animate blank backing or decorative margins when bending would alter a map, table, logo, or evidence. Never use displacement on the evidence layer merely to make it match paper roughness.

Test the resting pose, largest lift, edge-on pose, peak overlap, and settled frame on both light and dark backgrounds. Then play through at the final size. Reject floating shadows, grain sliding through an object, edge boiling, and text that becomes blurry during its reading interval. These tests and shadow relationships are our adaptation, not a copied creator rig.

## Character acting before lip motion

Write the intention of a line and the listener's response. Block a neutral pose, intention pose, emphasis, and return. Use gaze to establish what the character is looking at. Hold still when stillness supports the delivery; do not randomize every blink or head movement.

For separate artwork, pivot body parts around credible joints and keep seams covered. For continuous art, test local Puppet deformation. Adobe distinguishes position, advanced and bend pins; engine changes after rigging can alter deformation, so choose the engine before authoring. An Overlap pin manages portions of a single mesh; it is not a solution for collisions with another map layer. Source: [Puppet tools](https://helpx.adobe.com/after-effects/desktop/animate-in-after-effects/animate-with-puppet-tools/animating-puppet-tools.html).

Make jaw motion local; protect eyes, nose, skull shape and the original ink texture. Use matched mouth artwork, and inspect closures as well as open vowels. Facial identity must survive the pose extremes. If the supplied art has no usable jaw boundary, prepare revised art or use a restrained local deformation instead of stretching the whole head.

For follow-through, define a hierarchy and preserve segment length; offset selected rotations or poses so the extremities settle after the main movement. Joey Korenman's public lesson demonstrates a Puppet/bone chain for continuous artwork. Its older Duik UI is not a current-host guarantee. Source: [School of Motion lesson and transcript](https://schoolofmotion.com/blog/animation-tricks-follow-through-after-effects).

Evaluate lip motion against the exact final WAV at 1×. Use the word or character timing to place emphasis, but do not label internally estimated phonemes as forced alignment. Save a short dialogue test including closed-mouth sounds, pauses, a head turn, and a listening reaction.

## Occlusion and tracked compositing

First distinguish an editorial collision from a physical occlusion. If a face covers necessary information, restage the shot. If a hand should physically pass in front of an insert, create a foreground holdout.

Mocha's tracked region and exported surface have different purposes: the former finds motion, the latter defines placement. Use the grid or a temporary insert to inspect drift before integrating art. A hand is a separate foreground problem; do not include it as if it were part of the tracked plane. Source: [Boris FX quick start](https://borisfx.com/documentation/mocha/quick-start-guide/).

Use existing alpha or a simple mask when sufficient. For difficult moving subjects, Object Matte is a documented selection/propagation/refinement candidate; inspect the whole shot before freezing. A cached or frozen matte is not proof of edge quality. Source: [Adobe Object Matte](https://helpx.adobe.com/after-effects/desktop/roto-brush-and-refine-matte/roto-brush/object-matte.html).

On school or evidence footage, preserve the actual screen content. Tracking a fabricated result into a real screen would change what the footage proves. Background cleanup, de-identification and synthetic demonstration each need distinct records.

## Type, selective emphasis, and transitions

Keep dialogue subtitles stable and use a separate emphasis layer for selected terms. Text Animators and selectors can target portions of editable type; verify Korean grouping, punctuation and tracking on the actual font. Variable axes require a font exposing those axes; do not replace an accepted static font just to use that feature. Sources: [text animation](https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html), [variable axes](https://helpx.adobe.com/after-effects/desktop/variable-font-axes/work-with-variable-font-axes/working-with-variable-font-axes.html).

For a transition, record the outgoing focal point and incoming focal point in screen coordinates. Preserve a useful relationship in position, direction or object identity. Paper can motivate an occlusion reveal; it must reveal the next evidence before the corresponding explanation becomes unclear. Transition length comes from the action and reading needs. Never force the same wipe on every boundary.

Use separately adjustable camera, object and type motion. If all three move while a new fact is introduced, simplify one before adding blur. Review the transition as part of both adjacent shots, including the action handles.

## Optional rigs and plugins

Native controls, Puppet and bundled Mocha can cover the first trials. Duik is an optional rigging candidate for repeated articulated performances; its publisher documents commercial tool use, but that does not grant rights to third-party character art. Check current release and the legitimate download path; do not assume an old tutorial's installer is current. Do not install a binary, make a donation, or claim commercial eligibility on a site's form just to finish research. [Publisher license explanation](https://rxlab.guide/dusan/license.html).

Deliver the chosen route, baseline and changed render, source/rig dependencies, and the defect improved. Leave unexecuted trials marked untested.
