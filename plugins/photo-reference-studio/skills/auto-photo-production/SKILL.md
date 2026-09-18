---
name: auto-photo-production
description: Legacy compatibility shim for explicit auto-photo-production requests. Route old product-photo, key-visual, detail-page, advertising, fashion, video-reference, campaign-video, assembly, and environment-check prompts to the matching Chany's Studio specialist; do not select this skill automatically.
---

# Auto Photo Production — Legacy

This name remains temporarily available so existing saved prompts do not fail. Do not reproduce the former all-in-one workflow.

Route the request as follows:

- multi-asset or end-to-end campaign → `chany-studio`
- project setup, shared instructions, or project state → `chany-project`
- industry-specific direction → the matching industry overlay listed in `chany-studio/references/routing.md`
- marketing plan or asset brief → `chany-marketing-brief`
- purchase motivation, JTBD, or persona analysis → `chany-jtbd-persona`
- Meta Ad Library video, single-image, or carousel benchmarks → `chany-meta-ad-research`
- cutout, white packshot, or source cleanup → `chany-product-assets`
- generic visual references with no named provider → `chany-reference-board`, which shows 10 inline images by default (Pinterest 5 + MeiGen 5); an explicit Pinterest-only board shows six by default; an explicit positive count overrides either default
- MeiGen AI images with their source prompts → `chany-ai-prompt-reference`
- professional commercial or lifestyle photography references from Production Paradise → `chany-commercial-photo-reference`
- awarded advertising and campaign benchmarks from Ads of the World, D&AD, or The One Show → `chany-award-ad-reference`
- vague direction, design concept, current trend translation, or expert-quality prompt → `chany-creative-direction`
- staged image or master key visual → `chany-campaign-visual`
- static ad, carousel, poster, banner, or channel set → `chany-ad-creative`
- product detail-page modules → `chany-detail-page`
- bounded edit or inpainting → `chany-image-edit`
- static adult model or fashion try-on → `chany-model-fashion`
- YouTube, Instagram, or another browser video reference link, authorized tab capture, or local reference-video intake → `chany-video-reference-ingest`
- short product Reel/Short link plus the user's product, or “이 영상에서 제품만 바꿔줘” → `chany-viral-product-remake`
- product commercial, cinematic brand film, promotional motion, concept-led performance video, or Genjutsu object swap / motion transfer → `chany-campaign-video`
- animated ad typography, benefit diagram, logo reveal, or CTA end card → `chany-motion-design`
- multiple controlled edits of one approved source ad or Ad Multiplier → `chany-ad-variants`
- authorized YouTube/long-form video into reviewed Reels or Shorts clips → `chany-shortform-recut`
- product mesh, turntable asset, editable 3D ad scene, or camera previs → `chany-product-3d`
- generated still or campaign-video execution, status, recovery, or retry → `chany-media-production-loop`
- clip assembly, segment replacement, target normalization, hook-only variants, or delivery verification → `chany-video-assembly`
- missing local tool or environment-readiness check → `chany-preflight`
- pre-publication claim, rights, disclosure, or channel review → `chany-publication-review`

Tell the user which current skill now owns the request, then follow that skill. Preserve the original request and do not add deliverables during migration.

For every generative still-image creation or edit, the routed owner must apply Chany's Studio's shared GPT Image 2.5 (`gpt_image_2_5`) default and controlled-override contract. Do not preserve an older prompt's implicit image-model default as though the user explicitly selected it.

Every reference request keeps each provider's own rules: Pinterest Pin pages and `i.pinimg.com` previews for Pinterest, the inspected MeiGen tool or entry for MeiGen, Production Paradise for professional commercial photography, and Ads of the World, D&AD, and The One Show for award references. The generic board combines the Pinterest and MeiGen lanes as described in `chany-studio/references/combined-reference-board.md`, but no lane fills another lane's missing candidates, and a Pin's outbound destination is never followed. Video-page intake is a separate user-authorized browser-capture path and does not expand any static discovery lane.
