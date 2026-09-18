---
name: chany-ad-creative
description: Create single-image ads, conversion carousels (캐러셀 광고), promotional posters and banners that carry finished design, hook, primary copy and CTA. Use for static performance advertising or Meta-reference adaptation as well as awareness and promotion; not for a text-free hero image or master key visual (use chany-campaign-visual), full pages, or motion video.
---

# Chany Ad Creative

Turn approved authority sources, industry direction, and campaign rules into placement-ready static advertising and promotional layouts.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

Read [references/ad-formats.md](references/ad-formats.md) for objective, template, prompt, multi-channel, exact-copy, and QA rules.

For purchase-oriented ads or reference + product/service adaptation, read the shared [performance-ad contract](../chany-studio/references/performance-ad-contract.md). Keep this skill as output owner: request `chany-meta-ad-research` only for needed ad discovery/analysis and `chany-jtbd-persona` only for unresolved customer decisions. Reuse their packets instead of restarting strategy. For a carousel, also read [references/carousel-ad-contract.md](references/carousel-ad-contract.md).

Read the shared [creative-direction system](../chany-studio/references/creative-direction-system.md) and [current creative signals](../chany-studio/references/current-creative-signals.md). Apply the named placement's current creative pattern—such as mobile hierarchy, safe zones, brand timing, modular asset rules, or CTA treatment—without converting platform guidance into a universal layout formula.

Before generating or generatively editing a still-image plate, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2.5 (`gpt_image_2_5`) unless a scoped override meets that contract. Execute and resume generated plates through `chany-media-production-loop`, which owns the stable job record, paid preflight, inline inspection, and bounded correction; keep this skill as the creative owner.

## Workflow

1. Record the industry mode, journey stage, proof object, publication gate, placement, objective, ratio or pixel size, safe area, one primary message, one CTA, exact approved offer and legal copy, and the accepted campaign lock.
2. Choose `basic`, `emphasis`, `copy-led`, or `image-led` based on the actual message hierarchy.
3. Preserve every applicable product, place, interface, vehicle, event, person, and evidence lock plus the master palette, light, material, props, typography plan, and campaign device. Recompose for each ratio instead of stretching or blind cropping.
4. Use an image model for the visual plate and a layout-capable editor for exact text when needed. If accurate typesetting is unavailable, deliver the clean plate plus a copy map and mark typesetting as pending.
5. Inspect at both high zoom and expected display size, then apply the shared bounded creative quality loop. A wrong digit, price, percentage, date, CTA, unit, legal line, ratio, or unsafe crop is a must-pass failure and cannot be averaged away.

Do not invent scarcity, discounts, prices, availability, outcomes, testimonials, claims, comparisons, qualifications, or legal statements. Apply the industry skill's prohibited-content and human-review gate. Generate one ad unit per named placement by default and never add unrequested variants. A single-image unit has one asset; a carousel unit has the approved number of separate card assets, not one flattened collage. Deliver the accompanying ad-copy packet, not only on-image text.

Inspect the connected tool schema before use. If GPT Image 2.5 is unavailable or unsuitable for a required capability, do not silently switch to a website-only Higgsfield feature or another model. Complete the creative brief and input package, state the gap, and obtain the scoped override required by the image model contract before alternate generation.

Paid submission, recovery, and scope changes follow the shared runtime contract exactly. Never blindly resubmit after a timeout, disconnect, or unknown charge state; inspect the original job or receipt first. A changed request requires a new paid-generation preflight and approval under that contract.

Draft layouts may proceed while review inputs are incomplete. Before publication, route every applicable exact final copy, offer, placement, asset, crop, layout, and final-render version to `chany-publication-review`; a draft or a review of a different version is not publication clearance.
