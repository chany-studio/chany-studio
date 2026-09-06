---
name: auto-photo-production
description: Legacy compatibility shim for explicit auto-photo-production requests. Route old product-photo, key-visual, detail-page, advertising, fashion, video-reference, campaign-video, assembly, and environment-check prompts to the matching Chany's Studio specialist; do not select this skill automatically.
---

# Auto Photo Production — Legacy

This name remains temporarily available so existing saved prompts do not fail. Do not reproduce the former all-in-one workflow.

Route the request as follows:

- multi-asset or end-to-end campaign → `chany-studio`
- marketing plan or asset brief → `chany-marketing-brief`
- cutout, white packshot, or source cleanup → `chany-product-assets`
- broad Pinterest reference board with six visible candidates by default or the user's explicit positive count → `chany-reference-board`
- professional commercial or lifestyle photography references from Production Paradise → `chany-commercial-photo-reference`
- awarded advertising and campaign benchmarks from Ads of the World, D&AD, or The One Show → `chany-award-ad-reference`
- vague direction, design concept, current trend translation, or expert-quality prompt → `chany-creative-direction`
- staged image or master key visual → `chany-campaign-visual`
- static ad, poster, banner, or channel set → `chany-ad-creative`
- product detail-page modules → `chany-detail-page`
- bounded edit or inpainting → `chany-image-edit`
- static adult model or fashion try-on → `chany-model-fashion`
- YouTube, Instagram, or another browser video reference link, authorized tab capture, or local reference-video intake → `chany-video-reference-ingest`
- product commercial, cinematic brand film, promotional motion, or concept-led performance video → `chany-campaign-video`
- generated still or campaign-video execution, status, recovery, or retry → `chany-media-production-loop`
- clip assembly, segment replacement, target normalization, hook-only variants, or delivery verification → `chany-video-assembly`
- missing local tool or environment-readiness check → `chany-preflight`

Tell the user which current skill now owns the request, then follow that skill. Preserve the original request and do not add deliverables during migration.

For every generative still-image creation or edit, the routed owner must apply Chany's Studio's shared GPT Image 2 (`gpt-image-2`) default and controlled-override contract. Do not preserve an older prompt's implicit image-model default as though the user explicitly selected it.

Every static-reference request stays inside the selected source-isolated owner: Pinterest Pin pages and `i.pinimg.com` previews for the broad board, Production Paradise for professional commercial photography, or Ads of the World, D&AD, and The One Show for award references. Never blend providers or follow a Pin's outbound destination. Video-page intake is a separate user-authorized browser-capture path and does not expand any static discovery lane.
