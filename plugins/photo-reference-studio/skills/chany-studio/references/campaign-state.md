# Campaign State and Handoffs

Maintain one compact state record for a multi-skill campaign. Unknown values stay empty or explicitly uncertain; never fill them by guessing.

```yaml
campaign_id: ""
objective: "awareness | consideration | conversion | retargeting"
audience_and_context: ""
channels: []
authoritative_inputs: []
subject_lock: []
copy_lock:
  product_name: ""
  headline: ""
  offer_or_event: ""
  supporting_copy: []
  price: ""
  period: ""
  claims: []
  cta: ""
  legal_copy: ""
  status: "missing | draft | approved"
model_authority: ""
model_lock: []
garment_authorities: []
garment_locks: []
selected_reference:
  provider: ""
  source_url: ""
  visual_dna: {}
campaign_master: ""
campaign_lock:
  idea: ""
  palette: []
  lighting: ""
  material_and_props: ""
  typography_plan: ""
  copy_zones: []
  crop_safe_area: ""
asset_matrix: []
accepted_assets: []
remaining_uncertainties: []
paid_generation_plan: []
```
## Handoff rules

- Pass original authority images, not merely an earlier generated approximation, whenever identity could change.
- Pass only approved copy as locked copy. Keep draft copy visibly marked.
- The reference handoff contains its source page and transferable Visual DNA, not reusable pixels or implied rights.
- The campaign-visual handoff contains the accepted master plus explicit campaign rules. Downstream skills may recompose for format but may not invent a new campaign direction.
- Each produced asset returns its effective ratio or duration, source/copy verification status, and observed unresolved defects.
- Do not expose temporary media handles, internal job IDs, or upload URLs to the user.

## Checkpoints

Pause only when the missing decision materially affects cost or business meaning:

- exact offer, price, period, CTA, mandatory legal copy, or an unapproved claim
- target placement when layout cannot be inferred safely
- detail-page module list or multi-asset count
- use of a supplied person versus a fictional adult creator or model
- reference selection in `semi-auto`
- planned UGC variants, locales, or multiple paid generation stages

If the user explicitly authorizes automatic selection within a named scope, proceed without adding extra checkpoints.

## Family QA and delivery

Each specialist performs its own asset QA. The router then checks the family for:

- product, model, garment, offer, CTA, and legal-copy consistency
- one recognizable palette, lighting, material, and typography system
- correct channel formats and deliberate recomposition
- no missing, duplicate, or unrequested deliverables
- no member with a critical specialist failure

Deliver only the requested assets, followed by a compact note:

```text
보존: [authoritative identities checked]
캠페인: [master direction and inherited locks]
출력: [asset, channel, effective size or duration]
문구: [approved pass, draft, pending typesetting, or not applicable]
검수: [pass or observed unresolved defect]
레퍼런스: [source-page link when used]
```
