# Product photo → Behance → selected composition

Mandatory short contract for “제품 사진으로 레퍼런스 찾아서 만들어줘”, “인스타그램용 광고 사진”, and a later selection such as “1번으로 만들어줘”. Read this before discovery and again before handing a selected photo to a generator. It applies even when the host also requires a native image-generation skill.

Read [Behance discovery](behance-reference-search.md) for search, image display and bounded recovery and [two-image fidelity](photo-match-fidelity.md) for photo-only intake, measured reference anchors, source-verified label text and a targeted AI correction. Honor free-search-only and AI-generation-only requests.

## Choose the source by the requested evidence

- A product-photo request for composition, camera, lighting, texture or mood is **still-photo styling**: use `chany-reference-board`, Behance only, six actual images unless the user requests another count. “Instagram용”, “광고 사진”, “고급”, “전문적인” and “상업용” describe the output; they do not request Instagram performance research or Production Paradise.
- Instagram first applies when the user requests real advertising examples, Reels, engagement/performance comparison or an Instagram source. Keep its video and cost rules.
- Production Paradise is an opt-in specialist source: a named source or explicit request for photographers' commercial portfolios. Never select it merely because the user wants a polished product photo.
- If Behance is blocked, use its bounded recovery and report the shortfall. Do not replace it with shopping pages, a general image search or another provider. A missing preview is not permission to change source or claim a complete board.

## Freeze the selected reference, not the input photo's pose

After the user chooses a number, resolve that exact displayed candidate and its original image. Keep its source URL and immutable selection number. Inspect the **product**, **selected reference**, and later **output** separately.

Write an internal comparison before generation:

| Property | Product identity authority | Composition authority |
|---|---|---|
| Bottle geometry, material, parts, logo, label facts | user's photo | never import the reference's brand |
| Framing/crop, camera distance, visible product area | observed source only | selected reference |
| Position, direction, relative scale, negative space | not locked by default | selected reference |
| Light, contact, surface, background | not locked by default | selected reference |

Record at least three concrete composition anchors and compare them with the input photo, marking each as retained or changed within the user's requested scope. Anchors may match; do not invent differences or change a pose the user explicitly protected. Example: a cropped bottle mouth entering from upper right, close camera distance and a small pool underneath are **not** a full bottle floating diagonally from upper left with long strands. Do not describe an imagined long strand if only a short drop/pool is visible. Source-photo compatibility is not a reason to erase a selected composition that differs. If the requested angle needs an unseen surface, explain that specific limit before choosing a different composition.

## Check the actual image inputs before submission

Follow [product insertion](product-insertion.md), [reference insertion](reference-insertion.md), the existing source/cost confirmation and [image runtime](image-generation-runtime.md). Keep their model and authorization rules; do not silently relabel a host-selected unknown model as GPT Image 2.6.

The actual generation request must contain **both** the user's product image and the **selected** reference image, with their roles stated in the prompt or supported role fields. Merely showing a web image earlier, quoting its URL, or describing it in text is not evidence that the generator received it. Check the resolved files/media IDs against the approved ordered input list. Do not replace the selected reference with the source product photo, another candidate or the previous failed output.

For native image-generation tools, inspect the live input mechanism. When local paths are supported, pass the actual product and selected-reference paths together. When conversation images are supported, ensure the selected reference really is included in the tool's image window; label the selected reference clearly and exclude unselected candidates where supported. Do not submit a product-only edit while saying “1번 레퍼런스로 제작”. If the selected image cannot be supplied, stop that route and disclose the missing input. A text-only approximation needs the user's scoped acceptance and must remain labeled approximate.

Before submission, compare the prompt to the composition anchors. Reject a prompt that preserves the source photo's direction, crop or full-bottle framing when these conflict with the selected reference. The product's shape is not its original pose. Do not pass only the product photo to the generic image skill and let that handoff reset the selection.

## Inspect the result before calling it complete

Compare the output with both authority images. Check identity/label text separately from the selected crop, product position, relative size, light and contact. A prettier version of the original product image does not pass reference matching. State failed checks, preserve the failed draft and use only the already approved correction allowance; no blind retries or unapproved spending. If a label is altered or the reference composition is missed, the result is a draft, not a finished advertisement. Showing the result with a disclaimer does not turn a failed requirement into a pass.
