---
name: chany-campaign-video
description: Plan and create evidence-led non-UGC product commercials, brand films, promotional motion, and performance-ad video with approved stills and measured QA. Use for concept-led campaign video; not for creator testimonials, assembly-only work, or static ads.
---

# Chany Campaign Video

Create a concept-led campaign video without sacrificing product, service, place, interface, vehicle, event, or brand truth. Keep the user's approved evidence and copy authoritative, and make each scene perform a named marketing job.

Read [references/campaign-video-contract.md](references/campaign-video-contract.md) for the concept packet, scene schema, still-first cost ladder, motion decision, attempt log, and handoff contract. When the user supplies a reference-video file or asks for timing analysis, also read the shared [video reference teardown](../chany-studio/references/video-reference-teardown.md). Analyze-only work stops at the teardown unless the user also requested a new concept or production.

For every governing still, read and follow the shared [image model default](../chany-studio/references/image-generation-runtime.md). Use GPT Image 2 (`gpt-image-2`) unless a scoped override meets that contract. Before any paid video operation, read and follow the shared [paid-media runtime contract](../chany-studio/references/higgsfield-runtime-contract.md). Apply the shared [creative quality loop](../chany-studio/references/creative-quality-loop.md) to every final-resolution still and clip.

For every named platform, placement, storefront, outbound channel, upload, schedule, or live publishing operation, read and follow the shared [platform publication adapter](../chany-studio/references/platform-publication-adapter.md). This skill never treats creative approval as authority to upload, activate, publish, or spend.

## Workflow

1. Consume the selected industry direction packet and approved marketing brief. Lock the objective, audience decision, primary message, CTA, claim ledger, required evidence, disclosures, source authorities, platform, duration or duration limit, ratio, and named deliverables.
2. If an authorized reference video is supplied, run the relevant non-destructive `chany-preflight` checks and produce the shared beat table before designing the new sequence. Transfer timing logic only, not protected expression.
3. Build one `video_concept_packet`. Give every scene one `usp_role`, a `message_rank`, a proof or transition job, a continuity decision, and a measurable acceptance condition. Do not add scenes that have no campaign job.
4. Choose the least risky motion route per scene: generated motion, deterministic movement over an accurate still, or authorized supplied or captured footage. Prefer an accurate still move when generated motion would distort identity, geometry, packaging, labels, UI, evidence, or copy.
5. Approve the concept and one governing still for every identity-sensitive generated scene before video generation. The approved still establishes the first-frame authority; a provider success state is not visual acceptance.
6. Inspect the active video-generation tools and schemas. Resolve the live operation, model or workflow, input roles, options, count, and provider-reported cost information when available. Generate only the approved scope and never silently retry an ambiguous paid job.
7. Review every final-resolution clip at meaningful timestamps for authority fidelity, claim and disclosure accuracy, temporal and physical plausibility, continuity, crop, text, audio, and the industry must-pass gates. Record defects and correct one defect class at a time within the approved attempt limit.
8. Hand only accepted clip versions, the approved shot order and in/out points, copy version, target authority, and unresolved defects to `chany-video-assembly` for assembly, segment replacement, variants, or delivery verification.

This skill owns concept, scene design, generation, and clip acceptance. It does not own creator-led UGC, deterministic post-production, publication, or campaign performance interpretation. If a required generation capability is unavailable, return the completed concept packet, shot plan, governing-still prompts, live-interface handoff, and exact unavailable capability without claiming that media was created.
