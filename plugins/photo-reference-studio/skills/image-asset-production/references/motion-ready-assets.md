# Motion-ready image handoff

## Separate by planned motion

Prepare only the layers that need independent transformation, deformation, reveal or occlusion. A useful layered shot might contain background, rear scenery, factual insert, character rear parts, torso/head, face replacements, foreground hand/prop, shadows and text. The exact grouping follows the shot.

A generated flat PNG is not a layered PSD. Separate generations can drift in scale, light and identity. Obtain a coherent approved assembly, then prepare or regenerate the required parts through the available image-editing route. Use the host image tool for image edits unless the user explicitly requests another method. Do not quietly use Python to repaint or remove backgrounds when tool instructions require image generation/editing.

Keep backgrounds free of characters if the characters will move independently. A clean plate should cover revealed areas behind the character or prop. Extend hidden joints enough for the planned range, then verify at extremes. There is no universal overlap percentage that guarantees success.

## Registration and layer contract

Use a common canvas or record crop bounds and placement for every part. Record the pivot, parent, front/back order and allowed motion. For mouth/eye variants, a matching canvas plus a stable facial anchor reduces popping; still inspect the actual alignment. Preserve source dimensions and avoid destructive trimming without updating registration data.

For layered Photoshop imports, choose composition-sized layers for a shared coordinate system, or retain layer sizes when object-centered transforms are useful. Either route still needs appropriate joint pivots. Adobe's PSD import behavior does not imply that a PNG contains hidden layers.

## Alpha and edges

Check actual alpha pixels, not just file extension or RGBA mode. Inspect the silhouette over light, dark and intended backgrounds. Look for a baked checkerboard, colored fringe, white halo, truncated shadow, isolated specks and a visible crop rectangle. Pixels under zero alpha may be irrelevant until filtering; edge behavior must be judged after the intended transform and import.

Establish the correct straight/premultiplied interpretation from the source and rendered comparison. A colored edge can come from matte contamination, not only the interpretation setting; changing the setting is not a universal repair. Keep any repaired output separate from the original. The metadata probe cannot pass visual edge quality.

## Resolution and color

Measure actual returned dimensions. Determine the maximum visible size of the subject, not only the canvas. Estimate source-pixels-per-output-pixel using the visible subject bounds and the closest intended crop; check both axes and include the effect of planned scaling. Do not upscale a low-resolution close-up and label it newly detailed.

Generate more usable detail only where the intended crop needs it. Large empty transparent canvases do not add subject detail. A nominal 4K delivery does not prove each asset supports 4K framing.

Use RGB assets for screen work, record ICC metadata when present and inspect the compositing color interpretation. Missing ICC data means unknown tagging, not proof of sRGB. Check the final display transform; do not bake a look into factual map colors or duplicate grading between artwork and finishing.

## Protected content and motion clearance

Keep exact maps, charts, logos and editable type on separate source-controlled layers when accuracy matters. Plan the map's scale, boundaries, key features and caption areas first. Generated background art can provide atmosphere around them without replacing the evidence.

Record reserved regions and the motion envelope of character, hat, hand, prop and shadow. A collision-free neutral pose can overlap a map during a head turn or camera push. Review beginning/end, extrema and transition frames, then the full movement. Bounding boxes are a useful conservative preflight; they cannot determine whether a deliberate foreground overlap obscures essential information.

When an overlap harms meaning, re-block, reframe, change the pose, separate depth or regenerate the staging. Do not shrink the evidence until it becomes unreadable. Test at audience viewing size, not only a zoomed desktop preview.

## Handoff contract

Record per asset: ID/version; actual path/hash; role; canonical reference; tool/model when known; prompt and edit scope; width/height/mode/alpha/ICC; visible bounds; crop placement/pivot/parent/order; maximum screen size; shot uses; accepted state; open defects; source/license record. Unknown fields remain unknown.

Native test: import → inspect alpha/color → set pivots → test extreme motion and crop → render a short excerpt → inspect in the edit. A passed metadata probe is not this test. Use `adobe-after-effects-production` and `adobe-premiere-finishing` when available for those stages.

Primary reference, checked 2026-11-08: [Adobe: preparing and importing still images](https://helpx.adobe.com/after-effects/desktop/import-files/import-still-images/preparing-importing-still-images.html). The practical clearance, joint and raster-budget checks above are production recommendations, not Adobe-prescribed fixed thresholds.
