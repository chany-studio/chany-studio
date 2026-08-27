# Production Modes and Defaults

Use the smallest mode that fulfills the request. Do not turn a brief, reference request, banner, or static vertical image into unrelated paid generation.

## Job routing

| User intent | Job | Default deliverables |
|---|---|---|
| 프롬프트만, 제작 지시문 | prompt-brief | six-element brief and one assembled prompt |
| 누끼, 배경 제거, 투명 PNG | cutout | transparent source-faithful asset |
| 흰 배경, 상세페이지용 팩샷 | cutout | white catalog packshot |
| 레퍼런스, 무드, 촬영 방향 | reference-board | six traceable candidates |
| 연출컷, 라이프스타일, 캠페인 이미지 | staged | one staged image |
| 키비주얼, 메인 비주얼, 캠페인 히어로 | key-visual | one accepted master visual and campaign state |
| 홍보 포스터, 할인 포스터 | promo-poster | one visual plate or completed poster |
| 광고소재, 퍼포먼스 광고, SNS 광고 | ad-creative | one static ad for the named placement |
| 광고 모델, 인물 화보 | model-shot | one adult model image and reusable model lock |
| 의류 착장, 모델에게 입히기 | fashion-shot | one locked-model fashion image |
| 부분 수정, 인페인팅, 이것만 바꿔줘 | local-edit | one bounded revision of the accepted image |
| 배너, 썸네일, 피드·스토리 광고 | banner | one banner at the named ratio |
| 상세페이지, 상품페이지 이미지 | detail-page | only the named modules |
| 여러 채널·사이즈로 변환 | channel-set | one accepted direction adapted to named ratios |
| 커머스 이미지 전체, 한 번에 세트 | commerce-suite | only the agreed packshots, key visual, detail modules, and ads |
| 처음부터 끝까지, 누끼와 연출 | full | cutout, reference selection, one staged image |

If the request names several deliverables, combine only those named. Preserve user-supplied source roles, reference, ratio, background, brand direction, exact copy, asset count, platform, model, and garments.

## Defaults

- Reference selection: semi-auto.
- Output count: one asset per requested deliverable.
- Transparent cutout: preserve source framing; no floor, glow, or shadow.
- White packshot: pure #FFFFFF, source-derived subject, centered safe margin, subtle natural contact shadow unless shadowless is requested.
- Staged image: source ratio when viable; otherwise 4:5 for a vertical commercial image.
- Key visual: create and accept one master direction before deriving detail-page or ad assets.
- Promo poster: use the named channel ratio; if absent, preserve source orientation and choose a layout that retains product and copy legibility.
- Model or fashion shot: one adult model, one pose, one final image unless a sequence is requested.
- Banner: choose among 1:1, 3:4, 4:3, 9:16, and 16:9 only when the user did not provide a different supported requirement.
- Banner template: basic unless the message emphasizes an offer, copy, or dominant image.
- Detail page: do not assume a full page. If modules are not named, propose a compact module plan before paid generation.
- Ad creative: use one message objective, one dominant focal point, and one CTA per asset.
- Commerce suite: show the asset matrix and effective paid generation count before starting.
- Generation quality: use the highest practical supported setting; never claim a resolution the tool did not return.
- Copy space: infer it only for copy, layout, platform, or placement requests.
- Marketing copy: never invent discounts, dates, prices, benefits, claims, or legal copy. Draft only when asked and mark it as draft.

## Template routing

| Intent | Template |
|---|---|
| no strong hierarchy specified | basic |
| discount, launch, or one key benefit dominates | emphasis |
| headline or explanation is primary | copy-led |
| product, food, or scene should dominate | image-led |

## Required business choices

Ask one concise question only when the missing value would materially change production:

- exact copy, offer, date, price, CTA, or mandatory legal line
- target channel or ratio when layout cannot be inferred safely
- required detail-page modules
- whether to use a supplied model or create a fictional adult model
- whether automatic reference selection is allowed

Do not ask for a visible product, garment, food, model, or scene fact that can be inspected.

## Checkpoints and cost control

Semi-auto has one default checkpoint: reference selection before paid reference-directed generation.

Do not pause for reference selection when:

- the job is prompt-brief, cutout, or reference-board
- the user supplied a reference
- the brief is complete without a reference
- the user requested auto or 자동 선택

For a detail-page plan or multi-ratio channel set, confirm the effective asset list before generating multiple paid assets. Do not generate unrequested alternatives after a result passes QA.

## Pre-generation record

Maintain this state internally and show a compact summary only when a checkpoint is needed:

    job: ""
    selection_mode: "semi-auto | auto | user-reference | no-reference"
    authoritative_inputs: []
    subject_lock: []
    copy_lock: []
    model_lock: []
    garment_locks: []
    selected_reference: ""
    brand_mood: ""
    ratio: ""
    template: ""
    detail_modules: []
    deliverable_count: 1
    uncertainties: []
