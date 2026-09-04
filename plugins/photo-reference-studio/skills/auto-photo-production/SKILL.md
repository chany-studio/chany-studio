---
name: auto-photo-production
description: Legacy compatibility shim for explicit auto-photo-production requests. Route old product-photo, key-visual, detail-page, advertising, fashion, UGC, assembly, and environment-check prompts to the matching Chany's Studio specialist; do not select this skill automatically.
---

# Auto Photo Production — Legacy

This name remains temporarily available so existing saved prompts do not fail. Do not reproduce the former all-in-one workflow.

Route the request as follows:

- multi-asset or end-to-end campaign → `chany-studio`
- marketing plan or asset brief → `chany-marketing-brief`
- cutout, white packshot, or source cleanup → `chany-product-assets`
- Pinterest reference board with exactly six visible candidates → `chany-reference-board`
- staged image or master key visual → `chany-campaign-visual`
- static ad, poster, banner, or channel set → `chany-ad-creative`
- product detail-page modules → `chany-detail-page`
- bounded edit or inpainting → `chany-image-edit`
- static adult model or fashion try-on → `chany-model-fashion`
- review, unboxing, tutorial, SaaS, try-on, or localized UGC video → `chany-ugc-ads`
- clip assembly, vertical normalization, or hook-only variants → `chany-video-assembly`
- missing local tool or environment-readiness check → `chany-preflight`

Tell the user which current skill now owns the request, then follow that skill. Preserve the original request and do not add deliverables during migration.
