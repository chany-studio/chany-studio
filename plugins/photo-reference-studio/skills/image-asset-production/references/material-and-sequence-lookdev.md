# Material and sequence look development

Use when individual images look attractive but disagree in style, or when a texture becomes unstable in motion. The goal is a coherent final shot, not extra surface detail everywhere.

## Sources and what transfers

Disney's look-development breakdown separates material contributions and tests them on a whole character and in a lit shot. Pixar's stylization discussion connects shape, material, camera, light and compositing to the film's look. Their rendering tools are not assumed to be available in AE. [Disney Look Development](https://disneyanimation.com/process/look-development/), [Pixar Stylization](https://prod.renderman.pixar.com/stories/stylization-at-pixar).

GIANTSTEP CG supervisor SeoHee Choi describes handcrafted imperfections, adjusted miniature scale and coordinated lighting in *Tastefully Yours*. Transfer controlled material detail and consistency, not that title's composition, character art or continuous-shot structure. [Creator's breakdown](https://www.seoheechoi.com/tastefully-yours).

Disney's *Paperman* paper describes texture carried through motion fields to keep its drawn surface coherent. This supports testing temporal consistency; it does not make a parented AE paper layer an implementation of the Paperman system. [Research paper](https://media.disneyanimation.com/uploads/production/publication_asset/122/asset/pman.pdf).

All four primary texts were inspected 2026-11-09. The following asset protocol is an original adaptation for generated art and Adobe composition.

## Describe the material as editable decisions

Separate the base value/color, fiber or grain scale, edge irregularity, visible thickness, contact shadow and cast shadow. For a generated flat image, record which are baked in and which can be controlled later. Do not promise independent passes from a flattened PNG.

Keep the light direction and grain scale consistent with the identity master. Reserve stronger texture and detail for useful focal areas. Avoid producing dirt or torn edges simply to signal craftsmanship. Fine noise that is convincing at 400% may flicker or vanish at final size.

When a character needs alternate expressions, compare cheek, jaw, mouth cavity and teeth under the same light. A new mouth should not introduce plastic highlights into matte paper. An expression can change geometry and tension while preserving paper type, ink density and beard continuity.

## Resolve a sequence, not isolated thumbnails

Select only the frames needed to answer the problem: a representative wide view, dialogue crop, graphic/evidence view and a transition boundary are useful candidates. Put them next to the last accepted frames. Judge dominant values, negative space, focal hierarchy and texture before increasing detail.

For a small local fix, edit from the canonical asset and retain the wider frame as a check. For a changed camera angle, produce a genuinely matching view; don't distort the old face to imitate a new view. Preserve authoritative map, logo, diagram and exact text separately from generated imagery.

Compare the set at intended viewing size and as small thumbnails. The thumbnail test checks hierarchy, not delivery legibility. Test typography on the actual image in Adobe; a blank area in a prompt is not guaranteed usable text space.

## Require a motion trial for moving assets

Hand off source dimensions, actual alpha, subject bounds, registration transform, allowed deformation and maximum crop. Attach paper art and its material to the object transform. Keep any screen-space finishing grain deliberately separate. If geometry moves but its fiber remains still, revise the setup.

Test the resting state, extreme motion, overlap and return in the native comp. Check seam exposure, edge halos, shadow attachment, tooth flashes, texture scale and identity drift. Use actual target audio for a mouth trial. A still contact sheet cannot certify any of these temporal qualities.

Record asset approval and motion approval separately. Keep the original generated output and the accepted composite, along with generation evidence and revision scope. Claim only the generation surface/model actually exposed by the tool.
