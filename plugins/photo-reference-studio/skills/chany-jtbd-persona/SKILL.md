---
name: chany-jtbd-persona
description: Analyze purchase motivations (구매 동기), JTBD and personas for products or services from supplied research, reviews, Q&A and offer evidence. Use before conversion creative when customer decisions or objections are unclear; not for final copy, ad targeting or media generation.
---

# Chany JTBD & Persona

Explain the progress a customer wants in a specific situation, then turn that insight into a usable creative brief. Support products and services equally: the desired action can be purchase, consultation, booking, trial, enrollment, or adoption.

Every user-facing turn follows the shared [beginner experience contract](../chany-studio/references/beginner-experience.md): quick start by default, plain Korean without internal field names, and one confirmation card before any paid generation.

## Inputs and evidence

Read the supplied offer information and existing project brief first. Separate **offer facts**, **customer evidence**, and **creative references**. A reference ad is evidence of its construction, not proof that our customers share its motivations or that our offer delivers its claims.

Use supplied research, reviews, Q&A, interviews, sales objections, or service inquiries with source locators. If evidence is missing, produce a clearly labeled hypothesis draft and ask only for information needed to choose the primary customer decision. Do not block useful planning solely because a product has no reviews. Do not scrape more reviews or substitute competitor customers automatically.

## Analyze

1. Identify the situation, trigger, desired progress, current alternative (including doing nothing), and friction. Distinguish the user, buyer, and approver when they differ.
2. Write jobs as **When [situation], I want [progress], so I can [outcome]**. Separate functional, emotional, and social jobs. Start with up to three distinct candidates per group; nine is a coverage aid, not a quota. Keep empty groups honest instead of inventing motivations.
3. For each candidate, record supporting observations, counterevidence, evidence strength, offer fit, and purchase barrier. Qualitative priority is based on fit, relevance to the requested action, and evidence—not invented market size or performance scores. Select one primary job per ad unit (video, single image or carousel); supporting jobs must earn their space.
4. Group customers by decision situation and behavior. Create one primary profile and up to two meaningfully different supporting profiles when the evidence supports them. Do not fabricate names, ages, income, occupations, quotes, or percentages to make a profile look researched.
5. Where known, distinguish unfamiliar, aware, considering, and existing customers. Do not infer audience temperature from appearance or treat these labels as ad-platform targeting configuration.

## Deliver a compact customer insight packet

Return `customer_insight_packet` with:

- `insight_version_id`, `offer_type` (product/service/hybrid), `desired_action`, `source_refs`, and `limitations`;
- `jobs[]`: `job_id`, `kind`, `situation`, `progress`, `desired_outcome`, `alternative`, `barrier`, `source_refs`, `evidence_status` (supported/hypothesis/unknown), `priority_reason`;
- `primary_job_id`, optional `supporting_job_ids`, and audience profiles with situation, decision role, needs, objections, decision criteria, awareness when known, and uncertainty;
- `claim_ledger_version_id` referencing the canonical [claim ledger](../chany-marketing-brief/references/brief-schema.md), retaining every applicable field and its `missing | draft | verified | approved` status. Add stable `claim_id` values for downstream references; do not replace the ledger with a simplified schema. A supported customer need does not approve a product promise.

Return the packet to the requesting owner: `chany-ad-creative`, `chany-campaign-video`, `chany-detail-page` or `chany-marketing-brief`. Conversion creative uses the shared [performance-ad contract](../chany-studio/references/performance-ad-contract.md) and its selective thirteen-role guide. This skill never generates media.

## Optional MoAI collaboration

Read [MoAI specialist chaining](../chany-studio/references/moai-specialist-chain.md) when MoAI is available or the user requests it. Reuse an existing `commerce-jtbd-persona` result instead of rerunning the analysis. Invoke `moai-seller:commerce-jtbd-persona` only if that exact capability is exposed and callable; installed files alone do not prove execution. Preserve its attributed handoff, evidence gaps, and hypotheses. If unavailable, perform the Chany analysis above without claiming MoAI ran or requiring installation.
