# Product insertion pipeline

This is the core Chany's Studio job: the user uploads a product photo, the studio finds references that suit that product, and it depicts the same real product as newly photographed in the reference's shooting approach. It is not a default cut-and-paste/background-replacement workflow. Apply it to every still or video whose subject is a physical product the user supplied, respecting the reshoot versus bounded-edit boundary in [reference-led-design.md](reference-led-design.md). It works inside the [beginner experience contract](beginner-experience.md), the [paid runtime contract](higgsfield-runtime-contract.md) and the [image model default](image-generation-runtime.md); it never relaxes their approvals.

Tool names below describe capabilities. Resolve the actual operation from the live tool list and schema each time; if a capability is missing, use the stated fallback and say so in one plain sentence.

## 1. Product profile

Before searching, read the product photo and record internally:

- category and use (e.g. 세럼 병, 텀블러, 과자 봉지)
- physical geometry and proportion: tall, wide, flat, round, multi-part; distinguish observed projected proportions from actual dimensions
- source camera view, orientation and placement as observations, not default preservation locks for a reshoot
- dominant and accent colors, and whether the packaging is light, dark, or transparent
- material and finish: glass, matte plastic, metal, paper, fabric, glossy, reflective
- label and logo areas that must stay readable
- photo quality: background clutter, cropping, blur, glare

## 2. References chosen for this product

A supplied video-reference packet already supplies the visual direction for its governing stills. Reuse observed frames/description and the approved scene plan; do not launch a Pinterest/MeiGen photo board unless the user requests alternate looks. An accepted image reused for animation likewise needs no new board.

First inspect any user-supplied reference image/file/link under [reference-led-design.md](reference-led-design.md). An existing reference replaces automatic discovery unless the user asks for alternatives; a product photo alone is not a style reference. Otherwise run the generic reference board (Pinterest 5 + MeiGen 5 by default, see [combined-reference-board.md](combined-reference-board.md)) using the product category. Rank candidates for this specific product using `chany-reference-board/references/search-policy.md`:

- the reference can accommodate the real product's geometry in its target view; do not limit discovery to the source photo's orientation or centered framing
- its palette flatters or contrasts cleanly with the product colors, and its background keeps the label readable
- its lighting suits the material (soft wrap light for gloss and glass, directional light for matte texture)
- the scene is buildable around the product without hiding or redesigning it

Show the board as numbered inline images with one short plain-Korean line each, mark the recommended one, and continue to the confirmation card without waiting. The user can reply with a different number at the card. If no reference image can be displayed, say so once and continue from the product profile alone.

## 3. Clean product source

Use the original photo directly when its product is clear. Prepare a cutout only when requested or when background clutter materially obscures the subject and the live background-removal operation helps (for example Higgsfield `remove_background`, which needs no prompt). A different intended scene alone does not require background removal; removal does not repair a color cast or reveal hidden surfaces. Compare any prepared cutout with the original at high zoom for edge loss, missing parts, and label damage; the original remains the identity authority. A cutout is an optional identity input, not a locked pose or a layer that must be pasted into a reshoot. Include any needed step and its cost in the existing confirmation card. If removal is unavailable, use the original when adequate and state any material limitation. Background removal keeps the source resolution (a 487×580 photo gave a 487×580 cutout in the 2026-09-18 test), so when the product photo is small, say once that a larger, sharper photo will give a better result; generation itself can still output 2K from a small source.

## 4. "Like this reference" generation

Pass both images to the image model as reference inputs. Inspect the model's input roles first: GPT Image 2.5 on Higgsfield exposes a single `image_references` role (checked 2026-09-18), so both images share that role and the prompt must say which image is which, in input order:

- image 1, the product photo or verified cutout: the subject authority — actual geometry/proportions, construction, color/material and logo/label facts must be preserved; its original camera view, pose, position, scale and lighting are not locked for a reshoot
- image 2, the selected reference: the observed composition, camera angle, lighting, palette, surface, props and mood, adapted to the user's product and approved count; never its product family or branding

When a model exposes separate roles, use them instead of relying on order.

Compile the composition plan and explicit reshoot prompt from [reference-led-design.md](reference-led-design.md). Do not reduce "이 레퍼런스처럼" to "배경과 조명만 변경". If the tool cannot recompose the product while preserving its identity, disclose that limitation instead of silently delivering a background-only edit.

Every reference source (Pinterest, MeiGen, Production Paradise, award archives, Higgsfield templates) may be passed as a generation reference input, but only with the user's explicit approval. The reference is usually someone else's work, and importing it sends it to a third party. Put a dedicated line in the confirmation card that names the source and the risk, for example "참고 사진: 3번(Pinterest, 다른 사람의 작품)을 Higgsfield에 참고 입력으로 보냅니다. 결과가 원본과 너무 비슷하면 광고에 쓰지 마세요." Approving the card with that line is the separate upload approval the runtime contract requires; without that line in the approved card, do not import the reference. If the user says "사진은 보내지 마" or "레퍼런스 사진 없이", or import or a reference role is unavailable, describe the reference in the prompt instead and say the result may resemble it less closely.

The prompt must replace the reference's subject with our product and must exclude every brand mark, person, text, packaging, and distinctive branded execution from the reference. Reject any result that could pass for the reference itself: the goal is the reference's look with our product, not a copy of someone else's photo. When a reference was passed as an input, add one plain line under the result: "원본 레퍼런스와 너무 비슷하지 않은지 확인한 뒤 광고에 써 주세요."

## 5. Quality settings

Ad work needs explicit quality settings; provider defaults are tuned for speed. Inspect the model's parameters and, for GPT Image 2.5, request `quality: high` and `resolution: 2k` for social placements, or `resolution: 4k` for print and large placements, instead of the provider defaults (`low`, `1k` when checked on 2026-09-18). Use the `sunburst` variant for detailed edits of an existing image. Show the resolution in the confirmation card and take the price only from the live quote.

## 6. How many to make

Default to one image. Before showing the card, get the live quote for both one image and two images of the same prompt and inputs, and show both totals in the card, so choosing "2장 만들어 더 나은 것 고르기" approves an exact quoted total rather than an estimate. If the two-image quote is unavailable, do not offer that option. When chosen, request two variants in one call (live `count`; up to 4 only after a new quote and approval) and let the user pick or accept the recommended one. This is an approved variant set, not a speculative variant.

## 7. Product and composition checks

After each result, compare identity with the original and composition with the approved reference plan. Show the actual result first, then two short checks in plain Korean, with only verified items marked passed:

```text
제품 확인: ✓ 모양·비율  ✓ 색상  ✓ 라벨 글자  ✓ 로고  ✓ 개수
구도 확인: ✓ 촬영 각도·제품 방향  ✓ 위치·크기·여백  ✓ 공간감·빛·그림자
```

Judge physical proportions with perspective in mind, not by identical 2D outline. Mark a failed item with ✗ and one plain sentence. A reshoot that misses the planned composition and changes only background/light fails the second check even if the product is accurate. For an explicit background-only edit, instead check that the requested background changed and the original pose stayed fixed. A ✗ triggers the bounded correction in [creative-quality-loop.md](creative-quality-loop.md) only within the approved attempt and credit ceiling. Keep passed identity properties, but do not freeze the source pose or composition that failed. Never mark ✓ for something that cannot be verified at the displayed resolution; write "확인 어려움" instead.

## 8. Ad-grade finishing

Generate at the needed resolution in the first place when the model supports it (§5). Offer upscaling only for an image made below the needed size, an older image, or a model without high-resolution output: use the live upscale operation (for example Higgsfield `upscale_image` at 2K or 4K; it needs an uploaded or generated image, its width and height, and has its own cost preflight) with its own small confirmation.

## 9. Other ratios from the accepted image

When only more ratios are needed (1:1, 4:5, 9:16, 16:9), extend the accepted image with the live outpainting operation (for example Higgsfield `outpaint_image`) instead of generating a new scene. This preserves an accepted view; it is not the default for a new reference reshoot. Verify the original region rather than promising pixel identity. Check that the product, label, and copy area remain inside the new safe area. If extending cannot keep the product placement sensible, propose a crop or regeneration with the approved prompt and obtain the affected approval before execution. For video, change the ratio with the live video reframe operation (for example Higgsfield `reframe`). Bundle all extra ratios into one confirmation card.

## 10. Video from the accepted image

"이 이미지로 영상 만들어줘" goes to `chany-campaign-video` with the accepted image as the governing first frame, so the still-image card is already done and only the video card remains. Keep product motion simple and physically plausible (slow push-in, turntable, light sweep, pour or splash only when the product supports it), and run the product match check on key frames.

## 11. Model choice

GPT Image 2.5 (`gpt_image_2_5`) remains the still-image default. The live Higgsfield catalog also recommends a dedicated product and advertising route (`marketing_studio_image`). Do not switch silently: use it only when the user chooses it or when a recorded comparison test shows better product fidelity, and name the model used in the confirmation card.

Recorded comparison (2026-09-18, one packaged-food product, same two inputs and prompt, 4:5 at 2K): GPT Image 2.5 at `quality: high` kept the logo, small printed text, and contents closest to the original and followed the reference lighting most faithfully; `marketing_studio_image` also scored well and cost less, but changed the product contents (fewer, differently shaped items). One test is not a benchmark; keep GPT Image 2.5 as the default and offer the cheaper model only as a named alternative.

## 12. Higgsfield ad templates as references

The Higgsfield Marketing Studio preset feed (checked 2026-09-18: 986 presets such as product shots, product shots with people, hypermotion and mixed-media video) is a ready-made reference source built for this exact job: each preset has a cover image and recreates its look with the user's product photo. When the user asks for templates, or wants the easiest path, list presets from the live feed filtered to the product's category and show their cover images as numbered inline references alongside, never mixed into, the Pinterest and MeiGen board. Create from a preset only after the confirmation card, with the product photo as the preset's product input and the live cost quote (the pricing document is available from the live Marketing Studio cost operation). In the 2026-09-18 test, creating a product-shot preset from the conversation worked through the Higgsfield connector, accepted only the ratios the preset allows (4:5 was rejected; 3:4 worked), kept the product faithfully, and followed the preset's look only loosely. Tell the user that a template gives a similar mood, not an exact copy of its cover, and choose the nearest allowed ratio. If the create operation is not exposed in the current host, prepare the product input and chosen preset and hand off honestly instead of claiming completion.
