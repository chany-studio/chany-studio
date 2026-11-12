---
name: adobe-after-effects-production
description: Build and refine native After Effects motion graphics and composites with editable layers, reusable controls, JSX automation, and rendered verification. Use for typography, diagram/map motion, keying, tracked inserts, MOGRT authoring, or AE shot production.
---

# After Effects production

Follow the shared [beginner experience contract](../chany-studio/references/beginner-experience.md) and [native production integration](../chany-studio/references/native-production-integration.md). Reuse the approved brief and asset versions. Explain visible outcomes in plain language; keep technical setup internal unless requested. These skills add production guidance, not an Adobe connection or permission to spend.

Create a designed, editable shot and verify its render. Start from the current shot brief, exact text/assets, accepted look, duration, frame rate, output color/alpha requirements, and installed AE version. Resolve only decisions that actually block the requested work.

## Design and animation

Read [motion-craft.md](references/motion-craft.md). Establish the key readable frame before animation, then define entry, reading hold, and exit against the edit/voice. Use a small coherent set of motion behaviors. Apply native text and shape layers where they preserve editability and exact content. A supplied official map/logo is authoritative; don't redraw or distort it merely to fit a motion effect.

Use stable names and logical precomps. Separate source plates, mattes, graphics, type, and controls. Link repeated components to bounded controls instead of copying dozens of independent keyframes. For original third-party rigs, inspect creator terms and compatibility before reuse; a source downloaded for learning is not a production asset by default.

## Performance, paper and depth

For cutout character acting, material-aware paper motion, local jaw/cheek deformation, occlusion, or native 3D trials, read [paper-performance-and-depth.md](references/paper-performance-and-depth.md). It adds shot recipes and comparative tests; documentation is not a rendered-quality claim.

When dialogue still looks mechanical or multiple animated elements compete, read [dialogue-staging-and-polish.md](references/dialogue-staging-and-polish.md). It separates jaw, lip contact, expression and attention, and defines comparison tests for an existing rig before replacing artwork.

## Compositing

Read [compositing-and-color.md](references/compositing-and-color.md) when keying, tracking, inserting a map/screen, working with alpha, or matching live action. Judge the entire shot including occlusions, not only its first frame.

## Automation

Read [jsx-and-render.md](references/jsx-and-render.md) before authoring or running automation. Verify API behavior against the installed host/current reference. Never infer that Premiere UXP APIs work inside AE ExtendScript.

Preserve existing projects. Prefer adding a clearly named folder/comp or creating a separate test, then save a new revision. Scripts must reject missing sources, unknown fonts/effects, invalid timings, and output collisions with a specific error. Avoid silently changing application preferences to make a script work.

## Reusable templates

Expose the controls an editor needs: text, approved variant, numeric value/unit, and supported media replacement. Protect fixed design values; too many controls make a template harder to use. Test short/long text and the shortest/longest supported duration. Use responsive timing regions where suitable, but test the resulting MOGRT in Premiere before claiming compatibility.

## Verify

Inspect start/end, peak movement, readable holds, transition boundaries, and the final rendered file. Check missing glyphs, frame clipping, matte edges, expression errors, unexpected font fallback, color/alpha, and dependencies. Review at native resolution and in the editorial sequence. Save the AEP, the shot render, and a concise record of settings and open issues. A successful script execution is not final quality approval.
