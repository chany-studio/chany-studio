# Delivery and Revision

## Delivery order

Return only the deliverables requested, in this order when present:

1. transparent cutout or white packshot
2. directly visible reference board
3. accepted master key visual or staged image
4. detail-page modules
5. poster, banner, or static ad creatives
6. channel adaptations
7. selected reference provenance and search query
8. compact production note

Show the actual image or connector preview instead of a raw remote media URL. In Claude Cowork, keep the six reference images visible in the current conversation through native tool/MCP image content or a host-rendered image attachment. A link, HTML file, contact sheet, or separate artifact may be included only as an optional secondary convenience after the inline images. Do not expose internal handles, job IDs, or temporary upload URLs.

## Production note

Use a compact Korean note:

```text
보존: [source identity facts checked]
참고: [Visual DNA transferred from the reference]
캠페인: [master direction or not applicable]
출력: [job, effective ratio, template, background, asset count]
문구: [exact-copy pass, draft, pending typesetting, or not applicable]
검수: [rubric, pass and score, or observed unresolved defect]
레퍼런스: [source-page link and query, when applicable]
```

Do not report `pass` without inspecting the output. If exact text is too small or blurred to verify, say it is unverified rather than preserved.

## Follow-up revision routing

Classify the requested change before editing:

- `scene-local`: lighting softness, color balance, crop, copy space, background hue, prop amount, or shadow strength. Edit the accepted staged result while retaining the original source as identity authority.
- `identity-sensitive`: label, logo, geometry, ingredient, edge, transparency, or material correction. Reuse or reattach the original source and repair only the observed defect.
- `copy-sensitive`: wording, numeral, percentage, date, price, unit, CTA, legal line, hierarchy, or line break. Repair from the approved copy lock and prefer a layout-capable tool.
- `model-sensitive`: facial identity, hair, body proportion, skin appearance, anatomy, or consistency. Reuse the model authority image or accepted fictional-model master.
- `garment-sensitive`: silhouette, length, construction, closure, seam, pattern, color, material, drape, logo, or accessory. Reuse the corresponding garment authority image.
- `layout-local`: copy scale, product position, spacing, safe area, or ratio-specific recomposition. Keep source and campaign locks fixed.
- `new-direction`: new reference, camera angle, major set concept, or substantially different composition. Start a new staged render from the source-derived subject and new reference.

Keep all unmentioned accepted properties fixed. Do not accumulate revisions by repeatedly editing a degraded render when a clean source-based rerender is safer.

## Revision history

Maintain a short internal state for the current run:

```yaml
source_authority: "original source attachment or media handle"
accepted_asset: "latest accepted result"
selected_reference_source: ""
subject_lock: []
copy_lock: []
model_authority: ""
model_lock: []
garment_authorities: []
garment_locks: []
campaign_master: ""
campaign_lock: []
target_channel: ""
ratio: ""
template: ""
fixed_scene_properties: []
revision_request: ""
remaining_uncertainties: []
```

Update it after each accepted revision so a later request such as `배경만 더 밝게` does not silently change the product, food, camera, or composition.
