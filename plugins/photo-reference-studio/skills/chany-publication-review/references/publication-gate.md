# Publication Gate

Use this gate for the exact candidate named in the review record. The purpose is to expose unresolved marketing-production risk and route a bounded decision to a named human owner. It is not legal advice, legal clearance, regulatory certification, platform approval, or permission to publish.

## 1. Establish the review boundary

Record the actual market and distribution context before interpreting any requirement:

- country, state or province, locality, language, currency, and intended publication date;
- paid ad, organic post, marketplace listing, detail page, website, app store, email, SMS, messenger, creator account, print, OOH, broadcast, in-venue, or other named placement;
- audience, age boundary, targeting or exclusion logic, and whether the context is sensitive or regulated;
- offer type, seller or provider, transaction path, landing destination, and accountable business owner;
- exact copy, asset, crop, layout, subtitle, thumbnail, final render, offer, and destination version identifiers.

Review each materially different jurisdiction, channel, language, offer, or render separately. A general brand approval does not automatically cover a channel variant.

## 2. Build the official-source record at review time

Look up current primary sources when the review is performed, not from memory alone.

Use, as applicable:

- official laws, regulations, regulator guidance, public-agency notices, and authoritative registers;
- the official advertising, commerce, messaging, creator, accessibility, and technical policies of the actual platform;
- current first-party product or service records, approved evidence, price and inventory systems, contracts, releases, licenses, and brand policy;
- current domain authorities identified by the active industry skill.

For every relied-on source, record its title, publisher, direct URL or internal record ID, published or updated date when available, effective date, access date and time, expiry or recheck trigger, jurisdiction, channel, relevant requirement, and review lane. If no publication or effective date is shown, write `unknown`; never invent one. Check whether a future rule will be effective on the intended publication date. If a rule is unavailable, contradictory, stale, expired, or outside the reviewer's expertise, record the gap and keep the candidate `draft-only` or `blocked` as warranted.

Blogs, search snippets, AI summaries, archived memories, and competitor behavior may help locate an authority but do not substitute for the official source. Quote only what is necessary and preserve the source's scope, exceptions, effective date, and definitions.

## 3. Lane A — claims and evidence

Review every express and reasonably implied claim, including words, images, demonstrations, supers, captions, voice-over, testimonials, comparisons, charts, UI states, before-and-after material, and omissions.

For each claim, record:

- exact claim text or visual implication and where it appears;
- evidence owner, evidence artifact, date, method, population or sample, conditions, limitations, market, and expiry or recheck date;
- whether the evidence supports the exact strength, scope, timeframe, comparison, typicality, and audience interpretation;
- required qualification or disclosure and whether it remains clear and proximate in the final render;
- the named subject-matter owner who must accept the residual risk.

Do not promote an inference from appearance, stock footage, generated imagery, a single testimonial, or a weaker study into a verified product or outcome fact. If evidence is missing or mismatched, remove or narrow the claim for the draft and block publication of the unsupported version.

## 4. Lane B — offer and transaction

Compare the ad and final render with the actual transaction path. Check:

- seller or provider identity, product or service identity, eligibility, geography, inventory or availability, timing, quantity, and material exclusions;
- price, currency, mandatory fees, tax treatment where material, subscription or renewal, financing, discount basis, coupon conditions, shipping, returns, cancellation, refund, warranty, and deadline;
- CTA, destination, checkout or booking state, form fields, data collection, confirmation, and post-click continuity;
- scarcity, urgency, savings, free, guarantee, trial, ranking, availability, and total-price statements against current first-party records.

An accurate creative cannot clear a stale landing page or inconsistent checkout. Missing transaction facts result in `draft-only`; deceptive price, false scarcity, unavailable inventory, or a materially inconsistent destination may be `blocked` until corrected.

## 5. Lane C — outbound messaging

Apply this lane to email, SMS, messenger, push, direct message, lead outreach, remarketing, and other addressed communications. Verify for the actual jurisdiction and service:

- lawful and platform-permitted recipient basis, list provenance, audience suppression, age rules, and sensitive-data restrictions;
- sender identity, subject or preview accuracy, advertising identification, contact details, frequency, timing, quiet hours, and required records;
- consent and withdrawal state, usable unsubscribe or opt-out path, suppression behavior, reply handling, and transactional-versus-promotional classification;
- personalization inputs, automated decision or AI disclosure where applicable, link destination, tracking, privacy notice, and data minimization.

Do not send a test or live message as part of review. If recipient authority, consent, sender identity, required notice, or opt-out behavior is unknown, keep the work `draft-only` and block dispatch.

## 6. Lane D — endorsement, UGC, and rights

Review both the truth of the endorsement and the rights to use every element:

- material connection, payment, gift, affiliate, employment, sponsorship, agency, and brand-control disclosures;
- endorser identity, actual experience, approved wording, typicality, claim support, edit integrity, synthetic or actor status, and reuse scope;
- creator, performer, model, attendee, patient, student, employee, child, property, location, artwork, music, voice, trademark, logo, archive, stock, and generated-media rights;
- consent or release purpose, channels, territories, term, edit rights, paid amplification, whitelisting, exclusivity, revocation or takedown process, and credit requirements;
- privacy, confidentiality, cultural authority, community benefit, and restrictions on sacred, sensitive, medical, financial, employment, or minor-related material.

A disclosure does not cure a false claim or missing right. Unclear ownership, expired scope, undisclosed material connection, fabricated experience, or unauthorized identifiable person or protected work blocks publication of the affected version.

## 7. Lane E — domain, platform, and final render

### Domain and platform

- Apply the active `industry_direction` controls, including its `claim_ledger`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate`.
- Check the current official rules and technical specifications for each exact channel, placement, audience, format, destination, and publication date.
- For every named platform, placement, storefront, outbound channel, upload, schedule, or live operation, complete the shared platform publication adapter. Its current-source and mutation controls are mandatory inputs to this lane and cannot be skipped by another production skill.
- Confirm domain-specific qualifications, warnings, accessibility, professional review, safety, targeting, pricing, recordkeeping, and prohibited-content gates.
- When sources or rules conflict, preserve both interpretations, identify scope and date, and escalate to the named owner instead of silently choosing the easier path.

### Final render

Inspect the actual exported asset, not only the script, layout file, or prompt:

- all approved copy, numbers, product or service identity, labels, logos, offer terms, CTA, captions, subtitles, alt text, and credits are correct;
- disclosures and qualifications are readable, audible when required, sufficiently persistent, proximate to the claim, and not hidden by crop, fold, truncation, interface chrome, safe areas, motion, contrast, or compression;
- the crop, layout, composite, retouch, generated content, playback speed, sequencing, thumbnail, and sound do not create a new misleading implication;
- the destination, product state, price, availability, language, aspect ratio, duration, file format, accessibility treatment, and platform preview match the reviewed placement;
- no temporary text, placeholder, hidden layer, unsafe instruction, private data, metadata leak, unlicensed element, or unintended variant remains.

Capture a stable final-render identifier. If the reviewed export cannot be identified exactly, it cannot progress beyond `draft-only`.

## 8. Status calculation

Use only these top-level statuses:

| Status | Meaning | Publication consequence |
|---|---|---|
| `blocked` | A prohibited, unsafe, deceptive, unauthorized, or materially unsupported element remains. | Do not publish; correct or escalate the element. |
| `draft-only` | Draft work may continue, but facts, evidence, sources, rights, disclosures, version IDs, or reviewer information is incomplete. | Do not publish or dispatch. |
| `ready-for-named-human-review` | All five lanes and official-source checks are complete for a frozen version, with a named authorized owner waiting to decide. | Do not publish until that owner records the decision. |
| `reviewed-by-named-owner` | The named authorized owner recorded a scoped decision for the exact frozen version. | Follow the recorded decision and organizational release process; this is not legal clearance. |

Do not average lane results. One material blocker controls the asset. For a batch, split independent assets into separate records or use the lowest unresolved status.

## 9. Version invalidation and re-review

The review scope must include immutable or stable IDs for copy, offer, destination, each asset variant, and each final render. Retain the old review as an audit record.

Invalidate the review after any change to:

- headline, body, supers, caption, translation, voice-over, subtitle, CTA, price, offer, qualification, disclosure, credit, or legal line;
- crop, layout, aspect ratio, text size or position, sequence, duration, thumbnail, composite, retouch, audio mix, or exported file;
- target audience, targeting, jurisdiction, channel, placement, landing destination, seller, availability, publication timing, or a relied-on official policy;
- evidence, rights, consent, contract, license, named reviewer, or material industry-direction control.

A changed derivative starts at no higher than `draft-only`. Rerun the affected lanes and the final-render check, record new identifiers and sources, and obtain a new decision from the named owner. Never relabel an old review as covering the new version.

Treat a passed `recheck_by`, an expired evidence or rights record, an expired or superseded source, or a rule that becomes effective on or before the intended publication date as an invalidation trigger even when the asset files did not change. Reset the candidate to at most `draft-only` until the affected sources and lanes are refreshed and the named owner records a new scoped decision.

## 10. Optional installed Moai chain

When `/project-studio` selected Moai specialist chaining or the user requests it, and the applicable Moai skills are installed and visible, route bounded questions as follows:

- `moai-seller:commerce-ad-claim-compliance-kr`: Korean commerce advertising claims, evidence, offer, and display questions;
- `moai-seller:commerce-message-compliance-kr`: Korean outbound-message classification, consent, sender, opt-out, and sending-rule questions;
- `moai-seller:commerce-influencer-collab`: creator collaboration, material connection, contract, deliverable, and disclosure questions;
- `moai-lawyer:legal-law-research`: primary-law and official-guidance research for a named jurisdiction and issue;
- `moai-lawyer:legal-mfds-safety`: Korean MFDS-sensitive food, cosmetic, health, medical, or safety questions within that skill's scope.

These are Moai-owned skills and commands. Chany's Studio does not rename, shadow, emulate, or take ownership of them. If unavailable, say so and continue with a Chany review record that clearly holds publication for missing expert or source review. Attribute returned findings to Moai, retain their scope and dates, and independently bind the final Chany review to the exact copy and asset versions.

## 11. Reviewer handoff

Give the named owner a compact decision packet:

1. exact review scope and version identifiers;
2. proposed status and every publication blocker;
3. lane-by-lane findings and concrete corrections;
4. official sources with publisher, title, URL, dates, scope, and any conflict;
5. unresolved judgment calls and their business impact;
6. the decision choices `approved-within-scope`, `changes-required`, or `rejected`;
7. invalidation conditions and recheck date.

Record what the owner actually decided. Silence, a generic “looks good,” prior campaign approval, or a tool result is not a named-owner review of the exact current version.
