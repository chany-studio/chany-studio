---
name: image-asset-production
description: Create and revise consistent character art, styleframes, scene backgrounds, and separate image assets for animation and compositing. Use for art direction, expression or pose sets, image continuity, controlled image edits, and motion-ready handoff; pair with the host image-generation skill for actual generation.
---

# Image asset production

Follow the shared [beginner experience contract](../chany-studio/references/beginner-experience.md) and [native production integration](../chany-studio/references/native-production-integration.md). Reuse the approved brief and asset versions. Explain visible outcomes in plain language; keep technical setup internal unless requested. These skills add production guidance, not an Adobe connection or permission to spend.

Produce images that support the intended shot, survive revision, and remain coherent across a sequence. A beautiful still is not proof of character continuity or animation readiness.

## Establish the asset contract

Read the current brief, accepted art direction, actual reference images, latest corrections and intended edit. Reuse accepted decisions. Establish which image is the identity master, which controls material/style, which controls composition, and which is the edit target. Do not let a pose reference replace the character's identity.

Record the shot purpose, framing, output canvas, maximum visible size, motion, asset roles, locked features, permitted changes, and review criteria. A standalone illustration does not need a full rig package. A moving character needs more than a flattened illustration. Keep project-specific characters, palette, fonts and provider restrictions in that project's asset plan.

## Generate through the selected surface

Use Chany's Studio's shared [image-generation runtime](../chany-studio/references/image-generation-runtime.md) and the host's image instructions when available. Preserve the GPT Image 2.5 default and approved scoped overrides; report unavailable model selection honestly. Honor the user's chosen provider within that contract. Route generated assets through `chany-media-production-loop`; use current tool arguments, not guessed model IDs or APIs. Do not silently switch to a paid service or CLI to fix ordinary quality issues.

Inspect local edit targets with the available image viewer first. Use local reference paths when supported and all targets have paths; otherwise use the smallest supported recent-image selection containing the targets. Follow the live schema if it differs. Request actual transparency for cutouts and verify the returned alpha. A checkerboard painted into RGB pixels is not transparency.

Return and preserve the actual tool output. Record a model identifier only if exposed. Requested resolution, reference fidelity and layer separation are intentions until measured or inspected. Do not claim an editable PSD or registered rig from a single generated PNG.

## Read only the needed craft guide

- [Art direction and continuity](references/art-direction-and-continuity.md): look development, materials, composition, light, connected scene views and reference roles.
- [Character performance](references/character-performance.md): identity, expressions, poses, mouth art and usable performance coverage.
- [Motion-ready assets](references/motion-ready-assets.md): layer contracts, joints, alpha edges, map/text clearance, resolution and Adobe handoff.
- [Review and evidence](references/review-and-evidence.md): constrained revision, candidate comparison, provenance and acceptance levels.
- [Material and sequence look development](references/material-and-sequence-lookdev.md): coherent material layers, image-to-motion trials, and adapting studio look-development methods without replacing accepted art direction.

For platform workflow research, the optional `adobe-video-pipeline` skill's Newtake reference separates portable methods from service-dependent features. It does not authorize platform use.

## Work in reviewable increments

Resolve one representative image using the approved look. Compare variants with a stated question, such as silhouette readability or material consistency. Expand only the selected direction into the scene's required expressions, poses or layers. Derive additional views from the chosen master; independently generated views often disagree in ways a prompt cannot detect.

For revisions, state **target / change / preserve / proof**. Reuse the last accepted asset rather than repeatedly editing a drifting candidate. A single-variable edit is preferable when the defect is local; changing geometry may legitimately require a new view or pose. Never describe a stochastic edit as a pixel-exact lock.

## Inspect before handoff

Inspect art at intended screen size and important crop size, then examine edges and registration. Compare the whole relevant set for identity, value, texture, light and silhouette. For animation assets, sample extreme poses and camera crops; native motion review remains necessary for seams, texture swimming and expression timing.

`scripts/probe_image_assets.py` reads image dimensions, mode, ICC presence, alpha coverage, nontransparent bounds and hashes. With `--require-alpha` it flags opaque files; `--min-width` and `--min-height` compare explicit requested canvas dimensions. It does not assess edge color contamination, character identity, map correctness, effective subject resolution or animation quality. Use a Python environment with Pillow; do not install dependencies globally without need.

```bash
python3 scripts/probe_image_assets.py /absolute/path/character.png --require-alpha --output /absolute/path/new_probe.json
```

Keep source, candidate and accepted files distinct; preserve IDs, references, prompts, actual output properties and review state. Deliver the images and an asset contract when subsequent production needs them. Identify what was generated, visually checked, technically measured and tested in motion separately. Do not promise a reference channel's quality based on skill installation.
