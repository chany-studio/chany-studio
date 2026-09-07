# Moai Specialist Chaining

Chany's Studio owns campaign orchestration and final creative handoffs. Installed Moai specialists may add focused research, commerce, legal, or review work. Their result is upstream evidence, not an automatic approval and not permission to publish.

## Detect before routing

At runtime, inspect the skills that are actually installed and callable. Never assume a Moai package, version, command, or namespace from this document alone. If a relevant specialist is unavailable, continue with the Chany workflow, keep the affected facts or review status unresolved, and state the missing specialist honestly.

Do not register, alias, shadow, or emulate a Moai command. Invoke an available Moai skill by its exposed name and preserve its ownership in the handoff record.

## Relevant specialist routes

Production works without MoAI in Claude, ChatGPT Work and Codex. Preserve optional integration rather than coupling the core to an external package: use an existing result first; request one bounded contribution only for an explicit request or an unresolved specialist need. Reading an installed skill for this plugin's design review is not a runtime invocation. Project `--with-moai` does not automatically enable every production specialist.

Use only the smallest route justified by the deliverable and jurisdiction:

| Trigger | Preferred installed Moai specialist | Chany consumer |
|---|---|---|
| missing buying-motivation or customer-evidence analysis | `moai-seller:commerce-jtbd-persona` | `chany-jtbd-persona`; normalize hypotheses and source scope |
| deeper persuasive copy or thirteen-role page reasoning | `moai-seller:commerce-detail-page-copy` or `moai-marketer:content-copywriting` | current static/video/page owner; no duplicate campaign plan |
| supplied Meta Ads Manager export needing specialist diagnosis | `moai-marketer:marketing-meta-ads-analyzer` | `chany-marketing-brief`; not public Library discovery |
| justified experimental-design question | `moai-marketer:marketing-growth-experiment` | `chany-marketing-brief` measurement plan |
| supplied landing-page message mismatch or conversion friction | `moai-marketer:marketing-landing-page-conversion-audit` | current brief/page owner; diagnosis, not automatic site edits |
| unresolved Korean promotional phrasing | `moai-writer:korean-humanize` | current copy owner; preserve fact anchors and reopen changed-copy review |
| Korean advertising claim, comparison, superlative, listing, or substantiation review | `moai-seller:commerce-ad-claim-compliance-kr` | `chany-publication-review` claim lane |
| Korean promotional SMS, email, push, or Kakao-style outbound message | `moai-seller:commerce-message-compliance-kr` | `chany-publication-review` delivery lane |
| creator collaboration, sponsored content, testimonial disclosure, or usage rights | `moai-seller:commerce-influencer-collab` | `chany-publication-review` endorsement and rights lane |
| current Korean law, regulation, effective date, or primary-source citation | `moai-lawyer:legal-law-research` | the relevant publication-review lane |
| food, supplement, cosmetics, medicine, ingredient, or MFDS safety question | `moai-lawyer:legal-mfds-safety` | domain packet plus publication review |
| campaign journey, channel, or experiment design needs deeper planning | `moai-marketer:marketing-campaign-planner` | `chany-marketing-brief` |
| commerce-page architecture or source-coverage diagnosis | `moai-seller:commerce-detail-page-planner` | `chany-detail-page` in `plan` or `audit` mode |
| missing product capture plan | `moai-seller:commerce-product-photo-brief` | `chany-product-assets` and `chany-detail-page` |
| acceptance criteria or evidence-driven revision design | `moai-designer:design-brief` or `moai-designer:design-iteration-loop` | the applicable Chany production owner |
| Higgsfield live catalog, quote, job lifecycle, or recovery support | `moai-media:media-higgsfield-core` | Chany's paid runtime contract and campaign state |
| supported Higgsfield image or video execution | `moai-media:media-higgsfield-image` or `moai-media:media-higgsfield-video` | the applicable Chany production owner |
| persistent identity or one-use identity-reference execution | `moai-media:media-higgsfield-identity` | `chany-model-fashion` or identity-sensitive `chany-campaign-video` |
| supported 3D, audio, analysis, or other media-asset operation | `moai-media:media-higgsfield-assets` | the applicable Chany production owner |
| coded or motion-rich landing experience explicitly requested | `moai-designer:design-landing-motion` | a separately scoped execution handoff, then `chany-publication-review` |

These are conditional routes, not a required bundle. Do not invoke a legal or compliance specialist merely because the word “advertising” appears; use it when jurisdiction, claim, delivery, endorsement, or regulated-domain risk makes the work relevant. Chany owns the brief, authority locks, creative acceptance contract, and final QA even when Moai supplies execution. Dynamic coded experiences are not silently folded into static `chany-detail-page` production.

## Structured handoff

Never rely on invisible shared context. Convert every specialist result into a compact attributed handoff:

```yaml
specialist_handoff:
  producer: "<exact installed skill name>"
  producer_source: "<installed plugin or package identity>"
  package_version: "unknown | installed version"
  producer_checked_at: ""
  purpose: ""
  jurisdiction: ""
  reviewed_object:
    type: "claim | message | offer | endorsement | law | safety | plan | design | runtime | media-execution | identity | asset-operation | coded-experience"
    version_id: ""
  inputs_considered: []
  findings: []
  required_changes: []
  unresolved_questions: []
  sources:
    - title: ""
      url: ""
      publisher: ""
      checked_at: ""
      effective_date: ""
  specialist_status: ""
  downstream_owner: ""
```

Keep facts, proposals, and conclusions visibly distinct. Preserve the specialist's cautions and source dates. Do not reinterpret a narrow review as clearance for an entire campaign.

## Normalize before adoption

- Do not import fixed persona/job/section counts, 25/50/25 ratios, universal budgets, uplift percentages or sample-size benchmarks as Chany requirements. Use actual evidence and the requested format.
- Keep one canonical claim ledger. Competitor reviews, hypothetical personas, copied sample statistics and specialist confidence scores are not product substantiation. Missing proof remains missing.
- Accept relevant recommendations, not automatic downstream skill chains. Do not silently invoke content-polishing, project setup, account operation or a second campaign planner merely because an upstream result recommends it.
- A requested MoAI contribution uses the host's exposed invocation mechanism and exact discovered name. If unavailable, report `unavailable` and offer Chany-only or a manual handoff. If the user explicitly requires MoAI execution, do not label a Chany fallback as satisfying that requirement. A pasted MoAI result is reusable attributed input, not proof of a current invocation.
- Chany production owns final copy and visual acceptance. Any accepted rewrite invalidates affected approval versions; optional reviews must not erase qualifiers or change prices, metrics or promises.
- `marketing-meta-ads-manager` is a separate live-operation capability, never a required step to research or create advertising. Do not add connector configuration or request account write scopes during creative work.

## Review boundaries

- A claims review does not cover outbound-message consent or sending rules.
- A message-delivery review does not substantiate product claims.
- An endorsement or rights review does not prove the advertised result.
- A law-research result informs a named question; it is not legal representation.
- A planning or design result does not authorize paid generation or publication.
- Any copy, crop, disclosure placement, offer, source evidence, channel, jurisdiction, or asset-version change invalidates the affected review and sends it back to the appropriate lane.

Run `chany-publication-review` on the exact final copy and rendered asset before release when a publication gate applies. Use status language from that skill; never replace it with “legally compliant,” “cleared,” or another blanket conclusion.
