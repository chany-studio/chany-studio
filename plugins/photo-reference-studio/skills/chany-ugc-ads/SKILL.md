---
name: chany-ugc-ads
description: Plan and create industry-aware Higgsfield UGC ads for reviews, demonstrations, visits, bookings, tutorials, SaaS demos, virtual try-on, and localized variants using approved evidence and disclosures. Use for short creator-style marketing video; not for polished static fashion imagery or cinematic brand films.
---

# Chany UGC Ads

Create credible short-form UGC advertising with a clear hook, truthful demonstration or experience, consistent creator identity, visible required disclosures, and one CTA.

Read [references/ugc-production.md](references/ugc-production.md) for format selection, script structure, input requirements, execution checkpoints, and QA.

For any governing still created for a UGC scene, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2 (`gpt-image-2`) unless a scoped override meets that contract. Video, avatar, voice, and localization operations remain governed by the live Higgsfield workflow. Before any paid operation, read and follow the shared [paid-media runtime contract](../chany-studio/references/higgsfield-runtime-contract.md). Read and follow the shared [creative quality loop](../chany-studio/references/creative-quality-loop.md) when defining acceptance, inspecting results, correcting defects, and deciding QA.

For every named platform, placement, storefront, outbound channel, upload, schedule, or live publishing operation, read and follow the shared [platform publication adapter](../chany-studio/references/platform-publication-adapter.md). Do not treat creative approval as authority to upload, mutate, activate, or spend.

## Workflow

1. When the user supplies a reference-video file, run the relevant non-destructive environment check through `chany-preflight` without persistent project changes, then read [references/reference-teardown.md](references/reference-teardown.md) and produce the beat table before writing the script. Timing may transfer; content does not.
2. Read the industry direction packet and choose exactly one primary format, journey stage, proof job, and desired action: review, visit, booking, unboxing, tutorial, SaaS demo, or virtual try-on. Treat localization as a derivative of an approved master, not as its narrative format.
3. Lock the approved offer facts, evidence, limitations, disclosure, CTA, creator or avatar authority, language, locale, platform, duration, ratio, and required deliverables.
4. Write a scene-level script with hook, proof or demonstration, and CTA. Mark proposed copy as draft until approved and never fabricate experience, results, testimonials, or scarcity.
5. Inspect the active Higgsfield MCP tools and schemas. Use only capabilities actually exposed in the current connection; website availability alone does not prove MCP availability.
6. Approve one still per product scene and attach it in the live schema's conditioning first-frame role before any paid video call. Read [references/ugc-production.md](references/ugc-production.md) "Approved-still-first rule" for mode, role, version, and recovery requirements.
7. Before paid generation, show the number of planned variants and generation steps. Generate only the approved scope.
8. Review the final-resolution video through the shared bounded creative quality loop for authority fidelity, claim and experience accuracy, industry failure gates, identity and voice consistency, lip sync, timing, disclosures, overlays, captions, audio, accessibility, and platform framing. Must-pass failures cannot be averaged away.

This skill owns narrative, shot planning, generation, and clip acceptance. When the user wants multiple accepted clips conformed, concatenated, exported, or duplicated as hook-only variants, hand those exact versions to `chany-video-assembly`; do not hide post-production inside another paid generation.

Obtain permission for an identifiable person's face or cloned voice and do not use a real person's likeness for deceptive endorsement. Approve one master before localization, then preserve meaning, brand pronunciation, offer values, legal copy, and timing rather than translating word for word.

If a required UGC operation is not exposed through MCP, return the completed script, shot plan, asset-role map, and exact Higgsfield interface handoff. Do not claim generation succeeded.

Paid submission, recovery, and scope changes follow the shared runtime contract exactly. Never blindly resubmit after a timeout, disconnect, or unknown charge state; inspect the original job or receipt first. A changed request requires a new paid-generation preflight and approval under that contract.

Draft scripts, shot plans, and draft renders may proceed while review inputs are incomplete. Before publication, route every applicable exact final script or copy, offer, platform placement, creator disclosure, video, crop or layout, subtitle, audio, and final-render version to `chany-publication-review`; a draft or a review of a different master or localized variant is not publication clearance.
