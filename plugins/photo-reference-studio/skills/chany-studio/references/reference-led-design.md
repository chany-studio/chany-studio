# Reference-led, no-jargon production

Use for "이 사진 느낌으로 내 제품을 만들어줘", a reference attachment/link, or a beginner asking for help choosing a look. Keep the requested production skill as owner; this is not another interview or mandatory research stage.

## Inspect and interpret

Separate input roles: product/person/service evidence establishes what is true; the style reference establishes the desired composition, light, color, texture and layout. Inspect the actual image using a supported viewer/browser. A URL, caption or search snippet alone is not visual inspection. If inaccessible, ask for an uploaded image once and retain all completed work. For video, route temporal inspection to the existing video intake instead of treating a thumbnail as the video.

With multiple images, infer clear roles; ask only if product versus reference is ambiguous. For multiple style references, identify which supplies composition, light or typography; do not average incompatible looks. Summarize the visible composition, not just the background: "제품의 모양과 라벨은 지키고, 참고 사진처럼 제품을 오른쪽 아래에 두어 약간 아래에서 새로 찍은 느낌으로 만들게요." Use only properties actually observed in that reference.

Do not start a ten-image board when the user already supplied the desired reference. If a reference answers the look, skip look questions. Otherwise follow plain-language-direction.md with only the unresolved visible choices. A service can use supplied brand assets, spaces or real interface screenshots; never invent a physical product, interface feature or customer proof.

## Choose the change boundary

- **Reference reshoot (default for a new reference-led product scene):** "내 제품을 이 사진처럼", or selecting a board image for production, means photograph the same product anew using the reference's shooting approach. Preserve physical identity, not the source photograph's pose. Redesign the camera viewpoint, product orientation, frame position and scale, negative space, depth, contact shadows and reflections as needed for the selected composition. This also governs newly generated product stills for video.
- **Bounded edit (only when requested):** "배경만 교체", "제품 각도는 그대로", cutout/packshot preparation, or a local change to an accepted image preserves the relevant existing pose/composition. A reference supplied only for color, lighting or background does not authorize a full reshoot. Extending an accepted image for a new ratio likewise keeps its accepted view. Respect explicit partial locks; do not turn every reference into a full redesign.

Attaching a product photo does not itself select bounded editing. Conversely, a reshoot is not permission to rotate or tilt every product: if the selected reference is frontal/upright, retain that property and transfer its other observed framing and spatial relationships. Never manufacture a different angle just to look different.

Separate **physical identity locks** (actual geometry/proportions, cap and package construction, color/material, logo and label content) from **shooting variables** (2D outline/projection, camera height/view, orientation, location/size in frame and lighting). Perspective may change the visible outline and projected label shape without changing the real object. Keep required information legible where the approved brief requires it; do not force every label into a frontal view. Never invent hidden structure or unreadable text. If an essential new view exposes unsupported details, request the necessary side/back photo or propose a supported viewpoint with the limitation disclosed; do not silently substitute a background-only result. Product count follows the requested/approved scene, not the reference's product family; do not invent other SKUs.

## Compile and produce

Before the existing confirmation, keep a compact composition plan in the current asset specification (no new file or interview):

| Property | Source observation → reference target → production decision |
| --- | --- |
| Camera and product orientation | observed view, upright/lying/tilt; what changes or stays and why |
| Framing | frame position, subject size, crop and empty copy space |
| Space and contact | surface/pedestal height, foreground/background depth, contact and shadow direction |
| Light and finish | highlight shape, shadow softness, palette/material response |

Use observable relationships; do not invent lens settings or exact measurements from a picture. Adapt multi-product references to the approved subject count while keeping the relevant spatial idea. For multiple selected references, specify each output's distinct composition rather than reusing one centered pose with different backgrounds. Mark inferred adaptations as proposed, not observed.

Internally compile: requested deliverable and placement; operation (`reference-reshoot` or `bounded-edit`); indexed input roles; physical identity locks and any explicit view locks; composition plan; light and material response; exact approved copy and reserved space; output dimensions; acceptance checks. Public source prompts and image-derived prompts are distinct. For reshoots, use this instruction pattern with the actual target values:

```text
Create a new photograph of the SAME product, not a cutout pasted into a new background.
Image 1 establishes product identity: [verified geometry, construction, color/material, exact logo/label facts]. Its original camera view, pose, position, scale and lighting are not locked unless listed here: [explicit locks or none].
Image 2 establishes the observed shooting approach, not product identity: [camera/view and orientation], [position, scale and negative space], [depth, support/contact], [light and reflections].
Rephotograph the product with these scene-specific properties: [composition plan]. Keep [approved count] and [required visible details]. Preserve real geometry through perspective; do not flatten the original front view onto the new scene or invent unseen parts/text. Exclude the reference's brands, products and copy.
```

Use the product insertion and image-generation-runtime contracts for input support, source uploads, live cost and the existing single approval. Do not add a separate interview approval. Keep GPT Image 2.5 as default. If reference input is unsupported, state that limitation and offer description-based interpretation without claiming exact matching. Uploading a reference is subject to the existing disclosed input approval, not permission to upload every attachment to unrelated services.

Show the produced image inline when the host supports it, not just a prompt or HTML link. Apply two independent must-pass checks: **product identity** against the source, and **reference composition** against the approved composition plan. Compare the result to both inputs, recording visible matches/mismatches. If the plan calls for a changed view, orientation, placement, scale or spatial arrangement and the result merely retains the source pose with a new background/light, composition fails even when identity passes. A faithful frontal reference may legitimately keep a frontal product. Preserve the user's product over stylistic similarity, but report an unmet composition as a draft/limitation instead of claiming success. Correct only within the existing approved attempt/credit ceiling through [creative-quality-loop.md](creative-quality-loop.md). For third-party inspiration, adapt transferable mechanisms rather than carrying over unrelated logos, claims or brand identity. Never promise pixel-identical reproduction.

Deliver the result first with one short explanation. Hide the technical prompt unless requested; keep it available in the project handoff. If no generation tool is connected, label the output as a prepared direction/prompt, not a completed photo.
