# Specialist Routing

Choose the industry overlay by the offer and desired action, then choose the production owner by the final deliverable—not merely by a tool name mentioned in the request.

Project setup is a separate concern: requests to create or update project instructions, briefs, state, `AGENTS.md`, `CLAUDE.md`, or project-specific agents belong to `chany-project` before production routing begins.

## Industry overlay routing

Use one primary industry skill when the domain is known. These skills produce an industry direction packet and delegate actual asset making to the production table below.

| Commercial domain or desired action | Industry skill | Required specialization |
|---|---|---|
| consulting, agency, law, accounting, advisory, or other expertise-led service | `chany-professional-services` | general service vs licensed professional, trust evidence, method and scope |
| school, academy, course, learning platform, recruitment, or enrollment | `chany-education-marketing` | learner/buyer split, learning process, outcomes evidence, minors and fees |
| hospital, clinic, dental, rehabilitation, wellness, or care access | `chany-healthcare-marketing` | benefit-risk balance, privacy, medical-ad review, human publication gate |
| restaurant, cafe, dining, reservation, menu, takeout, or delivery | `chany-food-dining` | occasion, appetite, actual portion/menu truth, order or visit path |
| hotel, resort, accommodation, destination, or booking | `chany-hospitality-travel` | stay prediction, room/amenity truth, fee/accessibility evidence |
| architecture portfolio, interior, commercial space, property sale or lease | `chany-space-real-estate` | purpose mode, geometry truth, flow, virtual-staging disclosure |
| consumer app, two-sided marketplace, or B2B SaaS | `chany-digital-product-marketing` | product mode, actual UI, adoption or buying group, security and ROI evidence |
| performance, exhibition, conference, festival, ticket, or attendance | `chany-live-culture-events` | pre/live/post phases, rights, accessibility, safety and cultural context |
| vehicle launch, model page, dealer, test drive, EV, or fleet | `chany-automotive-marketing` | trim/market lock, safety/ADAS, driving conduct, range and finance evidence |
| consumer electronics, device, wearable, audio, computing, or smart home | `chany-consumer-tech-marketing` | model/port/UI lock, test conditions, compatibility and included items |
| corporate reputation, capabilities, culture, EVP, recruitment, or employer brand | `chany-corporate-employer` | corporate vs employer mode, policy-backed EVP, role truth and nondiscrimination |

General packaged products use the production core without inventing an industry overlay. Fashion stills use `chany-model-fashion`; if the offer is an employer, event, hospitality, or another distinct service rather than the garment itself, select that commercial domain instead.

Do not add two overlays merely because two subjects appear in one scene. Use a secondary overlay only for separately governed offers or deliverable families, and record the boundary.

| User intent | Owner skill | Typical result |
|---|---|---|
| animated ad typography, benefit diagrams, logo reveal, CTA card, animate an approved still layout | `chany-motion-design` | capability-checked Higgsfield motion graphics or explicitly plan-only handoff |
| Genjutsu object swap or motion transfer on authorized footage | `chany-campaign-video` using its Genjutsu revision mode | bounded generated revision, then accepted replacement to assembly |
| initialize or update an advertising-production project | `chany-project` | shared project instructions, brief, state, and runtime-specific delegation configuration |
| campaign strategy, launch plan, message hierarchy, asset plan | `chany-marketing-brief` | approved brief and asset matrix |
| customer purchase motivations, JTBD, persona or buying barriers | `chany-jtbd-persona` | evidence-labeled customer insight packet, not final copy |
| Meta Ad Library research for video, single-image or carousel ads | `chany-meta-ad-research` | observed ad mechanisms, full copy-field analysis and original-adaptation map, not assumed winners |
| transparent cutout, background removal, white packshot, source cleanup | `chany-product-assets` | reusable source asset |
| broad visual references, Pinterest + MeiGen, or a Pinterest-only moodboard | `chany-reference-board` | default 10 inline candidates across Pinterest + MeiGen; explicit provider/count respected |
| MeiGen references, AI images with source prompts, or prompt-backed visual inspiration | `chany-ai-prompt-reference` | six visible MeiGen image-and-prompt pairs by default, or requested count, with an original product-specific prompt handoff |
| high-end commercial, advertising, or lifestyle photography references | `chany-commercial-photo-reference` | visible Production Paradise references with creator provenance and transferable photographic craft |
| awarded advertising, campaign ideas, or commercial-photography benchmarks | `chany-award-ad-reference` | visible Ads of the World, D&AD, or The One Show cases with message mechanism and Visual DNA |
| vague visual request, concept territories, trend translation, or expert prompt direction | `chany-creative-direction` | three brand-specific territories, one recommendation, and an approved creative-direction packet |
| YouTube, Instagram, or other video reference link; browser capture; reference-video structure analysis | `chany-video-reference-ingest` | capability-labeled capture packet and, when inspectable, a non-copying beat table |
| staged subject or experience image, hero art, campaign key visual | `chany-campaign-visual` | one staged image or accepted master visual |
| static ad, conversion carousel, sale or event poster, feed creative, story creative, banner | `chany-ad-creative` | single-image or ordered card assets plus accompanying ad copy |
| e-commerce detail page, PDP, service/booking/launch landing modules | `chany-detail-page` | named evidence-led page modules |
| executable, coded, or motion-rich landing experience | capability-gated `moai-designer:design-landing-motion` handoff when installed and callable | separate executable experience, then exact-version publication review |
| inpaint, remove or replace one region, copy repair, “only change this” | `chany-image-edit` | one bounded revision |
| static adult model campaign, lookbook, source-locked fashion try-on | `chany-model-fashion` | one model or fashion still |
| product commercial, cinematic brand film, promotional motion, concept-led performance video | `chany-campaign-video` | approved concept packet, governing stills, and accepted campaign clips |
| execute or resume generated still-image and campaign-video jobs | `chany-media-production-loop` | stable job ledger, inline result review, and an accepted or explicitly stopped asset version |
| assemble accepted clips, replace an approved segment, normalize a target, produce or verify variants | `chany-video-assembly` | one verified delivered cut or replacement, controlled variant set, and blank performance table |
| check local tools before assembly, extraction, or batch image work | `chany-preflight` | observed environment report and an approval-gated unblocking path |
| final claims, offer, delivery, endorsement, rights, disclosure, and publication readiness | `chany-publication-review` | version-bound review record and named human-review status |

## Boundary decisions

- Generic visual-reference requests now use `chany-reference-board` as coordinator under [combined-reference-board.md](combined-reference-board.md): 10 total, Pinterest 5 + MeiGen 5, displayed inline. Explicit provider/count requests override this default. Keep each lane's source and preview restrictions; combined research is not cross-filling missing candidates. All reference lanes use [reference-recovery.md](reference-recovery.md) for automatic bounded same-category searches and one consolidated selection/production decision.

- Motion-only graphics belong to `chany-motion-design`; full-film planning stays with `chany-campaign-video`. Invoke motion only when requested or required by the approved output, never for static carousels. Generative object changes use the campaign-video Genjutsu mode, not deterministic assembly. Native After Effects work requires a verified Higgsfield bridge, not merely an advertised integration. GPT Image 2.5 is the still-image default through the existing image runtime; other models require a scoped override.

- MeiGen is an additional source-isolated AI image/prompt lane owned by `chany-ai-prompt-reference`. Select it when requested or when prompt-backed AI execution is the research purpose. It is optional after Meta/JTBD strategy, never an automatic extra board. Use callable MeiGen tools or public browser access and supported inline image display; preserve the Pinterest preview allowlist. Do not cross-fill providers, treat engagement as conversion evidence, or change GPT Image 2.5 because the reference used another model.

- A request to configure the working project uses `chany-project`. A single known production output uses its owner directly. Use `chany-studio` when two or more production rows are required or when the user asks for a complete campaign.
- `프롬프트만` is a mode of the owner skill. It does not automatically route to marketing strategy.
- A reference plus one final output keeps the output skill as owner. For a generic visual board use the combined Pinterest + MeiGen contract; explicit specialist boards keep their own lane. Pass the selected source and analysis to the production owner. Conversion work follows [performance-ad-contract.md](performance-ad-contract.md); Meta ad analysis may supply design direction directly without a second Pinterest board. Use creative-direction selection only once unless the approved direction changes.
- Reference providers are isolated by skill: `chany-reference-board` may use only public Pinterest Pin pages and `i.pinimg.com`; `chany-commercial-photo-reference` may use only public Production Paradise pages; `chany-award-ad-reference` may use only public Ads of the World, D&AD, and The One Show work pages. Never cross-fill a weak lane with another provider. Stocksy, ShotDeck, and Death to Stock are not permitted reference sources.
- `chany-meta-ad-research` is a separate official Meta Ad Library lane for video, image and carousel advertising, not a relaxation of those photography allowlists. Pinterest is for still photographic/style references, never video intake. User-supplied video files/links use `chany-video-reference-ingest`; other supplied reference files may be inspected directly without broadening discovery sources.
- Public-library search is not Ads Manager reporting or operation. Requested performance data analysis belongs to `chany-marketing-brief`, optionally with a callable MoAI analyzer. Account writes, budgets and activation remain separately approved actions, not part of creative production.
- A product-page hero that sits inside a scrolling commerce page belongs to `chany-detail-page`. A standalone paid-media or social placement belongs to `chany-ad-creative`.
- Static images, copy, and module plans for a landing page belong to `chany-detail-page`. Executable or motion-rich landing implementation is a separate capability-gated handoff to `moai-designer:design-landing-motion` when actually installed and callable; if it is unavailable, return the completed static plan and state that executable implementation was not performed.
- A text-free master composition belongs to `chany-campaign-visual`. A finished layout with offer, CTA, legal copy, or placement constraints belongs to `chany-ad-creative`.
- Source cleanup before any composition belongs to `chany-product-assets`. A local change to an already accepted composition belongs to `chany-image-edit`.
- Static editorial, lookbook, and fashion try-on belong to `chany-model-fashion`. Concept-led product demonstrations, authorized presenter footage, brand films, and promotional motion belong to `chany-campaign-video`; casual creator-template production is outside this plugin.
- Campaign-video narrative and scene design belong to `chany-campaign-video`; the generated-media job lifecycle belongs to `chany-media-production-loop`. Both may use the shared local video teardown when an authorized reference file is supplied, and neither turns analysis into unrequested production.
- Conforming, segment replacement, concatenation, variants, and technical verification of accepted campaign-video clip versions belong to `chany-video-assembly`. Environment readiness belongs to `chany-preflight`, which is not the paid-generation cost preflight.
- A new reference, offer, core composition, or campaign idea is not a local edit. Return it to the original production owner.

## Campaign sequencing

For conversion-ad requests, use the smaller sequence in [performance-ad-contract.md](performance-ad-contract.md) instead of requiring every general stage below. Single-image and carousel share the static owner; video has its own production owner. Neither JTBD nor thirteen persuasion roles introduces a second campaign orchestrator.

For a requested campaign family, propose only the needed stages:

1. The selected industry skill fixes the domain mode, journey, proof, directing rules, claims gates, and L1-to-L2 reference route.
2. `chany-marketing-brief` fixes objective, audience, claims, copy status, channels, and asset count using that packet.
3. `chany-product-assets` creates clean source assets when the originals are not already production-ready.
4. When art direction is missing or explicitly requested, choose only the matching reference lane: Pinterest for broad visual discovery, Production Paradise for professional commercial photography, or the award archives for campaign benchmarks.
5. `chany-creative-direction` translates the brief, optional selected reference Visual DNA, and current signals into three territories and one approved production packet.
6. `chany-campaign-visual` creates and locks one master direction.
7. `chany-detail-page`, `chany-ad-creative`, `chany-model-fashion`, and `chany-campaign-video` derive only their named deliverables; `chany-media-production-loop` executes and records their requested generated assets.
8. `chany-video-assembly` delivers or revises the cut only after every included clip version and replacement boundary is accepted.
9. `chany-image-edit` repairs bounded image defects without changing the accepted campaign.
10. `chany-publication-review` checks the exact final copy and rendered assets when jurisdiction, claims, offers, outbound delivery, endorsement, rights, disclosure, platform, or industry gates make release review relevant.

Apply `runtime-boundaries.md` before selecting any loop. Use `chany-media-production-loop` and `media-job-ledger.md` for generated still-image and campaign-video jobs, never a source-code diagnostic loop. Apply `image-generation-runtime.md` before every generative still-image creation or edit. Its default is GPT Image 2.5 (`gpt_image_2_5`); a different model is a scoped override, never a silent fallback. Apply `higgsfield-runtime-contract.md` and `creative-quality-loop.md` before paid operations. Show the effective paid-generation plan and live cost information when available; do not assume that one final video equals one paid generation call. When observed results arrive, `chany-marketing-brief` checks tracking, attribution, comparability, and sample sufficiency before recommending the next one-variable round. Installed Moai specialists may supply attributed evidence through `moai-specialist-chain.md`, but Chany retains campaign orchestration and never treats a specialist result as blanket legal clearance.
