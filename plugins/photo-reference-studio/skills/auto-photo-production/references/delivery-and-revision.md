# Delivery and Revision

## Delivery order

Return only the deliverables requested, in this order when present:

1. transparent cutout or white packshot
2. staged commercial image
3. selected reference source link and search query
4. compact production note

Show the actual image or connector preview instead of a raw remote media URL when the tool supports display. Do not expose internal handles, job IDs, or temporary upload URLs.

## Production note

Use a compact Korean note:

```text
보존: [source identity facts checked]
참고: [Visual DNA transferred from the reference]
출력: [job, effective ratio, background, asset count]
검수: [pass and score, or observed unresolved defect]
레퍼런스: [source-page link and query, when applicable]
```

Do not report `pass` without inspecting the output. If exact text is too small or blurred to verify, say it is unverified rather than preserved.

## Follow-up revision routing

Classify the requested change before editing:

- `scene-local`: lighting softness, color balance, crop, copy space, background hue, prop amount, or shadow strength. Edit the accepted staged result while retaining the original source as identity authority.
- `identity-sensitive`: label, logo, geometry, ingredient, edge, transparency, or material correction. Reuse or reattach the original source and repair only the observed defect.
- `new-direction`: new reference, camera angle, major set concept, or substantially different composition. Start a new staged render from the source-derived subject and new reference.

Keep all unmentioned accepted properties fixed. Do not accumulate revisions by repeatedly editing a degraded render when a clean source-based rerender is safer.

## Revision history

Maintain a short internal state for the current run:

```yaml
source_authority: "original source attachment or media handle"
accepted_asset: "latest accepted result"
selected_reference_source: ""
subject_lock: []
fixed_scene_properties: []
revision_request: ""
remaining_uncertainties: []
```

Update it after each accepted revision so a later request such as `배경만 더 밝게` does not silently change the product, food, camera, or composition.
