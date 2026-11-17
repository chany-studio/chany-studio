# Reference roles and continuity without extra busywork

Use for multi-shot scenes or consistent asset sets within the existing owner. Sources inspected 2026-11-17: [EnterNext character blueprint](https://enternext-docs-2026.s3.ap-northeast-2.amazonaws.com/guide/blueprint/index.html), a [GPTers product-video case](https://www.gpters.org/media/post/create-cuts-serve-advertising-YoDNpy1QkZAwGJs), and a [recent practitioner discussion](https://www.reddit.com/r/StableDiffusion/comments/1xwrrc1/how_to_generate_consistency_scene/). These are practical examples, not controlled model benchmarks. We adopt the mechanisms below, not their characters, prompts, stories or fixed settings.

## Keep one authority per property

| Input role | Use | Exclude |
|---|---|---|
| Identity | original product geometry/label or approved character face | reference background, pose and incidental lighting |
| Wardrobe/body | approved outfit and proportions | competing face designs from multiple sheet panels |
| Location | verified space geometry, landmarks, material and light | incidental people or a camera angle not requested for this shot |
| Prop | actual object and current condition | background or outdated prop state |
| Scene-state capture | accepted preceding take's position, held objects, damage and lighting | treating a generated face or label as the new identity authority |
| Blocking guide | spatial relationship and screen direction | rendering its diagram style or reusing obsolete character positions |

Record each input's ID/order, role, properties used, properties excluded and accepted source/version. Use separate face/body references or isolate panels if a supplied sheet contains conflicting faces. Do not generate a new character sheet unless requested or approved as necessary.

## Prepare only what the scene needs

- Reuse an accepted location image. Add a reverse angle only when the shot needs it and check shared landmarks first. Do not promise arbitrary 3D consistency from one photograph.
- Reuse original identity references throughout. A near-end frame can bridge position/props/light, but inspect it for drift against the original before carrying it forward. A stale state image must not restore a prop that was removed or reverse an action.
- Set a clear starting state, one meaningful action/change and an ending state for each shot. Choose length from performance and the live model mode. The example's 7–9s clips, 10-image setting, 480p/upscale and sub-0.5s pauses are not universal limits; one supplied example itself uses six seconds.
- Keep exact approved Korean lines, speaker, intention and a plausible speaking window. Estimate by reading or measured voice duration where available, not a hard six-syllables-per-second rule. Prompt timestamps are targets; inspect actual speech, omissions, additions, lip sync and cuts. Use deterministic editing for exact final timing.
- A multi-character shot must identify who speaks and who stays silent. Check hands, contact, gaze, spatial direction, light, prop condition and the entry/exit frames. Avoid contradictory “handheld” and “never moves” instructions.
- If the live model supports authorized image/video references for the chosen mode, use them directly. Do not force a redundant paid governing still for narrative scenes whose approved inputs suffice. Product ads retain the product-fidelity gate.

Keep this role/state map in the existing shot packet and media ledger. Reuse accepted frames and fix only the failed shot within the existing approved attempt/credit ceiling. Do not blame every failure on the user's prompt; model limitations, input ambiguity and unsupported controls are separate possible causes.
