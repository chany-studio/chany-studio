# Prompt Templates

Use these as assembly templates. Replace bracketed fields with facts visible in the actual images. Remove irrelevant clauses instead of filling them with guesses.

Background removal normally needs no generative prompt and is preferred when exact source pixels, label text, logos, or food structure matter. Use the clean-packshot templates only when a connected tool requires generative editing for the requested background or capture correction.

## Six-element assembly gate

Before writing any production prompt, resolve these elements:

1. subject and authoritative input image
2. style and brand mood
3. composition, camera, and copy space
4. lighting and shadow behavior
5. background, surface, environment, and props
6. quality, ratio, channel, template, and intended use

Put the source role, subject lock, exact copy, and required ratio before optional styling. Describe the wanted state positively. Keep each requirement testable against an input, an approved business value, or the final output.

## Prompt completion standard

A production prompt is complete only when it:

- assigns a single explicit role to every input image
- separates immutable locks from editable art direction
- states exact copy and business values without paraphrasing
- describes composition, camera, light, background, physical contact, and output
- names job-specific exclusions
- requests one deliverable rather than a collage of imagined options
- contains no unsupported resolution, lens, model parameter, or hidden source fact
- can be checked line by line against the final image

For a prompt-brief request, return:

1. the six-element brief
2. the input-role map
3. subject, copy, model, and garment locks that apply
4. one ready-to-run full prompt
5. three short one-variable revision prompts suitable for the likely next edits

Do not return only a short aesthetic sentence when the user asks for a production prompt.

## Prompt order

For product, food, poster, banner, detail-page, and fashion production, use:

**작업 목적 → 입력 이미지 역할 → 불변 잠금 → 승인 문구 → 브랜드·레퍼런스 방향 → 세트·구도·레이아웃 → 빛·카메라 → 물리 연결 → 배제 요소 → 출력·검수**

## Product clean packshot

```text
작업 유형: 원본 제품의 정체성을 보존하는 클린 누끼 팩샷 편집.

이미지 1은 최종 결과에 사용할 실제 제품 원본 또는 원본에서 비생성형으로 분리한 제품입니다. 이미지 1의 제품 한 개만 사용하여 [BACKGROUND: transparent or pure #FFFFFF] 배경의 상업용 팩샷으로 편집해 주세요.

[제품 정체성 보존]
- 원본에서 확인되는 실제 높이와 폭의 비율, 실루엣, 캡과 본체 구조, 모서리 곡률, 투명부 두께를 유지합니다.
- 고유색, 재질, 광택, 반투명도와 자연스러운 명암을 유지합니다.
- 다음의 정확한 인쇄 정보를 원본 그대로 유지합니다: [VISIBLE LABEL TEXT AND LINE BREAKS].
- 새 용기, 새 라벨, 새 로고, 새 장식으로 다시 디자인하지 않습니다.
- 원본에서 보이지 않거나 읽히지 않는 측면, 뒷면과 글자를 새로 만들지 않습니다.

[허용 보정]
- 사용자가 요청했거나 촬영 결함이 제품 인식을 방해하는 경우에만 미세한 좌우 기울기, 수직선 수렴, 원근 왜곡과 렌즈 왜곡을 자연스럽게 보정합니다. 그 외에는 원본 각도와 픽셀 정체성을 유지합니다.
- 제품 중심축과 주요 수평 경계를 정돈하되 실제 높이, 폭, 캡 크기와 곡률은 바꾸지 않습니다.
- 좌우 형태는 정돈할 수 있으나 유광 표면의 하이라이트까지 인위적으로 대칭화하지 않습니다.
- 가림 제거가 필요한 경우 [OCCLUDED AREA]만 보이는 대칭과 인접 재질을 기준으로 최소 복원합니다.

[배경과 외곽]
- 원래 배경, 손, 받침면, 먼지, 얼룩, 기존 그림자와 주변 사물을 제거합니다.
- 가장자리, 투명부, 잎처럼 얇은 구조에 헤일로, 흰 테두리, 회색 프린지, 색 번짐과 계단 현상을 남기지 않습니다.
- [transparent인 경우: 배경과 접지 그림자를 추가하지 않습니다.]
- [#FFFFFF인 경우: 순백색 불투명 배경을 균일하게 사용합니다. 일반 카탈로그 팩샷에는 제품 무게와 광원 방향에 맞는 매우 은은한 접지 그림자만 허용하고, 사용자가 그림자 없는 에셋을 요청하면 접지 그림자, 바닥 반사와 글로우를 모두 제거합니다.]

[구도와 출력]
- 제품을 화면 중앙에 배치하고 전체 외곽에 약 10% 안전 여백을 둡니다.
- [제품의 정면 팩샷이 가능한 경우: 85–100mm 상당의 왜곡이 적은 정면 제품 촬영 원근으로 표현합니다.]
- 제품 전체와 라벨을 고해상도로 선명하게 유지합니다.
- 한 장의 완성 이미지만 출력합니다. 전후 비교, 분할 화면, 콜라주, 추가 문구와 워터마크를 만들지 않습니다.
```

## Food clean cutout

```text
작업 유형: 원본 음식의 구성과 자연스러운 형태를 보존하는 정밀 누끼 편집.

이미지 1은 최종 결과에 사용할 실제 음식 원본 또는 원본에서 비생성형으로 분리한 음식입니다. 이미지 1의 음식 한 개만 사용하여 [BACKGROUND: transparent or pure #FFFFFF] 배경의 상업용 푸드 컷으로 편집해 주세요.

[음식 정체성 보존]
- 빵, 면, 고기, 소스, 채소, 토핑 등 실제로 보이는 구성과 상대적 위치를 그대로 유지합니다: [VISIBLE INGREDIENT INVENTORY].
- 음식의 길이, 폭, 높이, 방향, 불규칙한 실루엣과 자연스러운 부피를 유지합니다.
- 재료의 개수, 양, 익힘 정도, 소스 흐름과 토핑 분포를 임의로 늘리거나 줄이지 않습니다.
- 더 가지런하거나 대칭적인 음식으로 다시 스타일링하지 않습니다.

[분리와 외곽]
- 원래 배경, 받침면, 기존 그림자와 주변 사물을 제거합니다.
- 잎, 다진 재료, 소스와 재료 사이의 빈틈에 기존 배경이 남지 않게 합니다.
- 작은 토핑을 배경과 함께 삭제하거나 음식 외곽을 지나치게 매끈하게 깎지 않습니다.
- 헤일로, 흰 테두리, 회색 프린지와 잘린 흔적을 남기지 않습니다.

[보정과 출력]
- 비정상적인 렌즈 왜곡만 최소 보정하고 음식의 원래 카메라 각도와 원근은 유지합니다.
- 색과 대비는 자연스러운 푸드 촬영 범위에서만 정돈하고 재료를 플라스틱처럼 만들지 않습니다.
- 음식 전체를 선명하게 유지하고 약 10% 안전 여백을 둡니다.
- 한 장의 완성 이미지만 출력합니다. 추가 음식, 글자, 로고, 워터마크와 콜라주를 만들지 않습니다.
```

## Reference-directed staged image

```text
작업 유형: 원본 [PRODUCT OR FOOD]과 촬영 레퍼런스를 이용한 상업용 연출사진 제작.

[입력 이미지 역할]
- 이미지 1은 최종 결과에 사용할 실제 [PRODUCT OR FOOD] 원본 또는 원본에서 비생성형으로 분리한 피사체입니다. 형태, 비율, 색, 재질, [LABEL OR INGREDIENTS]와 모든 정체성 정보는 이미지 1에서 가져옵니다.
- 이미지 2는 촬영 스타일 레퍼런스입니다. 이미지 2에서는 [REFERENCE VISUAL DNA]만 참고합니다.
- 이미지 2의 제품 또는 음식, 패키지, 재료, 로고, 라벨, 글자, 가격과 브랜드 정보는 최종 결과에 사용하지 않습니다. 두 이미지의 피사체를 혼합하지 않습니다.

[정체성 보존]
[INSERT SUBJECT LOCK AS CONCISE BULLETS]
- 최종 이미지에는 이미지 1의 주 피사체 한 개만 사용합니다.
- 이미지 1에서 보이지 않거나 읽히지 않는 구조와 정보를 새로 만들지 않습니다.
- 이미지 1의 실제 피사체를 새로 그린 유사품으로 교체하지 않고, 보이는 원본 디테일을 최대한 유지합니다.

[허용 보정]
- [PRODUCT: 기울기, 수직선 수렴, 원근과 렌즈 왜곡만 최소 보정하며 실제 제품 비율과 디자인은 변경하지 않습니다.]
- [FOOD: 완성된 음식 전체를 회전하거나 배치할 수 있지만 재료의 상대적 위치, 양, 높이와 음식 비율은 변경하지 않습니다.]
- 원본의 [HAND/BACKGROUND/UNWANTED OBJECTS]를 완전히 제거하고 가장자리에 잔상과 프린지를 남기지 않습니다.

[레퍼런스에서 가져올 촬영 원리]
[INSERT VISUAL DNA: composition, camera, background/surface, lighting, shadow, palette, props/effects, depth of field, mood]
- 레퍼런스의 구성을 픽셀 단위로 복제하지 말고 빛, 공간, 물성, 시각적 위계와 오브제 배치 원리만 새롭게 적용합니다.

[세트와 구도]
- 출력 비율은 [ASPECT RATIO]입니다.
- 피사체는 [PLACEMENT AND SCALE]로 배치하고 [COPY SPACE IF NEEDED]를 확보합니다.
- 소품은 피사체보다 시각적으로 약하고 핵심 실루엣, 라벨 또는 주요 재료를 가리지 않습니다.

[조명과 카메라]
- [KEY LIGHT, FILL, NEGATIVE FILL, RIM, SHADOW DIRECTION AND HARDNESS].
- [CAMERA HEIGHT, ANGLE, PERSPECTIVE, DEPTH OF FIELD].
- 밝은 배경에서도 피사체의 실제 색, 입체감과 가장자리가 유지되며 하이라이트와 흰색이 클리핑되지 않게 합니다.

[물리적 연결]
- 피사체와 받침면의 접점에 광원 방향과 피사체 무게에 맞는 접지 그림자와 주변광 차폐를 표현합니다.
- 피사체를 공중에 띄우거나 받침면 안에 파묻지 않습니다.
- 반사, 굴절, 액체와 그림자는 주변 조명과 재질에 물리적으로 일치해야 합니다.

[금지 사항]
- [INSERT REFERENCE CONTAMINATION EXCLUSIONS].
- 원본 피사체를 복제, 재디자인, 재조리하거나 레퍼런스 피사체와 결합하지 않습니다.
- 추가 인물, 손, 신체, 글자, 가격, 로고와 워터마크는 사용자가 요청한 경우 외에는 넣지 않습니다.
- 과도한 CGI 질감, 플라스틱 표면, 강한 블룸, 비현실적인 색보정과 저해상도 질감을 피합니다.
- 한 장의 완성 이미지만 출력합니다. 전후 비교, 분할 화면과 콜라주를 만들지 않습니다.

[검수 우선순위]
- 라벨·로고·인쇄 정보 또는 음식 재료가 작은 크기로 인해 원본 대조가 불가능해지지 않도록 피사체 해상도와 선명도를 확보합니다.
- 정체성 보존과 연출 방향이 충돌하면 원본 피사체의 정체성을 우선합니다.
```

## Master commerce key visual

    작업 유형: 원본 피사체를 보존한 커머스 캠페인 마스터 키비주얼 제작.

    [입력 이미지 역할]
    - 이미지 1은 최종 결과에 사용할 실제 [제품/음식/의류] 원본 또는 원본에서 비생성형으로 분리한 피사체입니다.
    - 이미지 2가 있다면 촬영 방향 레퍼런스입니다. 이미지 2에서는 [구도, 빛, 공간, 재질, 색 대비, 소품 원리]만 참고합니다.
    - 다른 입력 이미지가 있다면 각 이미지의 역할을 다음과 같이 제한합니다: [INPUT ROLE MAP].

    [피사체 잠금]
    [INSERT SUBJECT LOCK]
    - 이미지 1의 피사체 수, 형태, 비율, 색, 소재, 질감, 로고, 라벨, 패키지 또는 음식 구성을 변경하지 않습니다.
    - 원본 피사체를 새로 그린 유사품으로 교체하거나 복제하지 않습니다.

    [캠페인 핵심]
    - 캠페인 아이디어: [ONE-SENTENCE CAMPAIGN IDEA].
    - 브랜드 코드: [PALETTE, MATERIAL, SHAPE LANGUAGE, MOOD].
    - 핵심 시각 장치: [DISTINCTIVE LIGHT, SHADOW, SURFACE, PROP, LIQUID, PARTICLE OR HUMAN INTERACTION].
    - 피사체가 첫 번째 초점이며 다른 요소는 이를 보조합니다.

    [마스터 구도]
    - 출력 비율: [MASTER RATIO].
    - 피사체 위치와 크기: [PLACEMENT AND SCALE].
    - 카메라 높이, 각도, 원근, 렌즈 성격: [CAMERA].
    - 문구 안전 영역: [COPY ZONE].
    - 이후 [DOWNSTREAM RATIOS]로 재구성할 수 있도록 핵심 피사체와 시각 장치를 크롭 안전 영역 안에 둡니다.

    [조명과 물성]
    - [KEY LIGHT, FILL, NEGATIVE FILL, RIM, SHADOW, HIGHLIGHT].
    - 실제 소재 반응을 보존하고 흰색·금속·유리·광택 표면의 하이라이트를 클리핑하지 않습니다.
    - 피사체와 받침면의 접점, 그림자, 반사와 굴절을 물리적으로 일치시킵니다.

    [배제 요소]
    - 레퍼런스 제품, 모델, 포장, 로고, 글자, 가격과 브랜드 디자인을 가져오지 않습니다.
    - 사람, 손, 글자, 워터마크, 추가 제품은 승인된 경우 외에는 넣지 않습니다.
    - 과도한 장식, 산만한 배경, 비현실적인 반사, 왜곡된 원근, 강한 블룸과 저해상도 질감을 제외합니다.

    [출력]
    - 광고 캠페인의 기준이 되는 한 장의 완성된 텍스트 없는 마스터 키비주얼을 출력합니다.
    - 분할 화면, 콜라주, 목업, 전후 비교와 임의 문구를 만들지 않습니다.

## Promotional poster with exact copy

    작업 유형: 원본 제품과 승인 문구를 사용하는 [CHANNEL]용 홍보 포스터 제작.

    [입력과 잠금]
    - 이미지 1은 실제 제품 원본 또는 소스에서 분리한 제품입니다.
    [INSERT SUBJECT LOCK]
    - 제품의 형태, 비율, 색, 재질, 로고, 라벨, 패키지 디자인을 원본 그대로 유지합니다.

    [승인 문구 잠금]
    - 메인 제목: [EXACT HEADLINE].
    - 프로모션 또는 이벤트: [EXACT OFFER OR EVENT].
    - 보조 문구: [EXACT SUPPORTING COPY].
    - 기간: [EXACT PERIOD OR OMIT].
    - 혜택: [EXACT APPROVED BENEFITS OR OMIT].
    - CTA: [EXACT CTA].
    - 법적 문구: [EXACT LEGAL COPY OR OMIT].
    - 철자, 숫자, 퍼센트, 통화, 단위, 구두점과 줄 구성을 임의로 바꾸지 않습니다.

    [브랜드와 배경]
    - 브랜드 분위기: [BRAND MOOD].
    - 컬러 팔레트와 재질 언어: [PALETTE AND MATERIALS].
    - 배경 공간과 소품: [BACKGROUND, SURFACE, PROPS].
    - 제품보다 강한 소품, 다른 브랜드 자산과 읽을 수 없는 장식 문구를 넣지 않습니다.

    [레이아웃]
    - 출력 비율과 안전 영역: [RATIO AND SAFE AREA].
    - 템플릿: [BASIC / EMPHASIS / COPY-LED / IMAGE-LED].
    - 시각적 위계: [HEADLINE → PRODUCT → OFFER → SUPPORT → CTA].
    - 문구 영역과 제품 영역을 명확히 분리하고 충분한 여백을 유지합니다.
    - 제품의 라벨과 핵심 실루엣을 문구나 장식으로 가리지 않습니다.

    [촬영과 합성]
    - [CAMERA, LIGHTING, SHADOW, DEPTH].
    - 제품의 접지 그림자와 주변광을 배경에 맞게 표현합니다.
    - 과도한 색보정, 가짜 반사, 떠 있는 제품과 잘린 가장자리를 피합니다.

    [출력]
    - 정확한 문구 렌더링이 가능한 도구라면 승인 문구를 그대로 조판한 완성 포스터 한 장을 출력합니다.
    - 이미지 생성 도구만 사용할 수 있다면 문구를 생성하지 말고 최종 레이아웃과 동일한 텍스트 없는 비주얼 플레이트를 출력하며, [COPY ZONES]를 깨끗하게 비워 둡니다.

## Static ad creative

    작업 유형: [PLACEMENT]용 정적 커머스 광고소재 제작.

    [광고 목표]
    - 목표: [AWARENESS / CONSIDERATION / CONVERSION / RETARGETING].
    - 핵심 메시지 하나: [ONE APPROVED MESSAGE].
    - CTA 하나: [EXACT CTA].
    - 타깃 또는 사용 맥락: [ONLY IF PROVIDED].

    [권위 입력]
    - 이미지 1은 실제 제품 원본입니다.
    - 이미지 2가 있다면 승인된 키비주얼 또는 캠페인 마스터입니다.
    [INSERT SUBJECT AND COPY LOCKS]

    [배치와 위계]
    - 비율과 배치 안전 영역: [RATIO, PLACEMENT SAFE AREA].
    - 제품, 핵심 메시지, CTA의 순서로 즉시 읽히는 위계를 만듭니다.
    - 한 화면에 여러 혜택과 여러 CTA를 경쟁시키지 않습니다.
    - 작은 모바일 미리보기에서도 제품과 핵심 메시지가 구분되도록 대비와 여백을 확보합니다.

    [캠페인 일관성]
    - 승인된 키비주얼의 [PALETTE, LIGHT, MATERIAL, PROP, TYPOGRAPHY PLAN]을 유지합니다.
    - 비율에 맞게 재구성하되 제품과 캠페인 개념을 새로 만들지 않습니다.

    [출력]
    - 요청한 배치 한 개에 맞는 광고소재 한 장만 출력합니다.
    - 플랫폼 UI, 휴대폰 목업, 여러 배너를 한 화면에 모은 보드와 임의 문구를 만들지 않습니다.

## Consistent adult model master

    작업 유형: 반복 사용 가능한 성인 커머스 모델 마스터 이미지 제작.

    [모델 권위]
    - 이미지 1이 실제 모델 소스라면 얼굴 인상, 얼굴 비율, 눈·코·입 형태, 헤어, 피부 표현과 체형 비율은 이미지 1을 기준으로 유지합니다.
    - 이미지 1이 없다면 다음 승인된 가상 성인 모델 프로필을 사용합니다: [ADULT MODEL PROFILE].
    - 미성년으로 보이는 표현을 만들지 않습니다.

    [행동과 촬영]
    - 표정과 행동: [EXPRESSION AND ACTION].
    - 샷 크기와 앵글: [FULL BODY / HALF BODY / CLOSE-UP, CAMERA ANGLE].
    - 장소와 배경: [LOCATION AND BACKGROUND].
    - 조명과 무드: [NATURAL OR STUDIO LIGHT, COMMERCIAL MOOD].

    [일관성 잠금]
    [INSERT MODEL LOCK]
    - 포즈, 표정, 의상과 장소는 요청 범위에서 바꿀 수 있지만 정체성 특징과 체형 비율은 바꾸지 않습니다.
    - 피부를 플라스틱처럼 만들지 않고 손, 손가락, 관절, 치아와 눈을 해부학적으로 자연스럽게 표현합니다.

    [출력]
    - 사실적인 성인 상업용 모델 이미지 한 장만 출력합니다.
    - 콜라주, 전후 비교, 추가 인물, 워터마크와 문구를 만들지 않습니다.

## Source-locked fashion try-on

    작업 유형: 승인된 모델에게 원본 의류와 액세서리를 정확히 착장한 상업용 패션 이미지 제작.

    [입력 이미지 역할]
    - 이미지 1은 모델 정체성의 기준입니다.
    - 이미지 2는 [GARMENT 1]의 기준입니다.
    - 이미지 3은 [GARMENT OR ACCESSORY 2]의 기준입니다.
    - 추가 이미지는 다음 역할만 가집니다: [INPUT ROLE MAP].
    - 서로 다른 이미지의 의류 디자인을 혼합하지 않습니다.

    [모델 잠금]
    [INSERT MODEL LOCK]

    [의류·액세서리 잠금]
    [INSERT GARMENT AND ACCESSORY LOCKS]
    - 실루엣, 길이, 칼라, 소매, 절개, 봉제선, 여밈, 패턴, 색, 소재, 광택, 드레이프, 로고와 장식을 바꾸지 않습니다.
    - 다른 의류로 교체하거나 더 짧고 타이트하게 재디자인하지 않습니다.

    [착장과 장면]
    - 포즈와 행동: [POSE AND ACTION].
    - 장소와 배경: [LOCATION].
    - 샷 크기, 카메라와 조명: [SHOT, CAMERA, LIGHTING].
    - 의류 전체가 요청한 샷에서 읽히도록 하며 핵심 디테일을 팔, 가방, 머리카락 또는 소품으로 가리지 않습니다.
    - 몸과 의류의 접점, 중력, 주름, 겹침과 그림자를 실제 착장처럼 표현합니다.

    [금지 사항]
    - 모델 정체성 변경, 의류 색상·패턴·길이 변경, 장식 추가, 원치 않는 레이어, 추가 인물, 잘못된 손, 융합된 신체와 떠 있는 액세서리를 금지합니다.

    [출력]
    - 한 장의 완성된 상업용 착장 이미지만 출력합니다.

## Channel banner

    작업 유형: 승인된 커머스 캠페인을 [RATIO] [CHANNEL] 배너로 재구성.

    [권위 입력]
    - 실제 제품 원본: 이미지 1.
    - 승인된 키비주얼 또는 캠페인 마스터: 이미지 2.
    [INSERT SUBJECT AND COPY LOCKS]

    [템플릿]
    - 유형: [BASIC / EMPHASIS / COPY-LED / IMAGE-LED].
    - 제품 위치와 크기: [PLACEMENT AND SCALE].
    - 문구 영역: [COPY ZONE].
    - 위계: [HEADLINE → PRODUCT OR OFFER → CTA].
    - 채널 안전 영역: [SAFE AREA].

    [재구성 규칙]
    - 마스터의 팔레트, 조명, 재질, 소품 언어와 타이포그래피 계획을 유지합니다.
    - 캔버스를 늘이거나 기존 이미지를 무작정 자르지 말고 비율에 맞게 다시 구성합니다.
    - 제품 비율과 로고를 변형하지 않으며 문구로 제품을 가리지 않습니다.

    [출력]
    - 요청한 한 개 비율의 배너 한 장만 출력합니다.

## Detail-page image module

    작업 유형: 동일한 캠페인 시스템을 사용하는 상세페이지 [MODULE TYPE] 이미지 제작.

    [모듈 목적]
    - 유형: [HERO / CLEAN PRODUCT / FEATURE / DETAIL / LIFESTYLE / COMPARISON / CLOSING CTA].
    - 전달해야 할 승인 정보: [EXACT APPROVED CONTENT].
    - 제품 원본과 캠페인 마스터: [INPUT ROLE MAP].

    [잠금]
    [INSERT SUBJECT, COPY, MODEL AND GARMENT LOCKS AS NEEDED]
    - 제공되지 않은 사양, 효능, 수치, 비교 우위와 법적 주장을 만들지 않습니다.

    [캠페인 시스템]
    - 팔레트: [PALETTE].
    - 조명과 소재 언어: [LIGHT AND MATERIAL].
    - 타이포그래피와 여백 계획: [TYPE AND SPACING].
    - 제품 스케일과 이미지 스타일: [PRODUCT SCALE AND IMAGE STYLE].
    - 다른 상세페이지 모듈과 연결될 때도 이 규칙을 유지합니다.

    [레이아웃과 출력]
    - 출력 비율 또는 픽셀 규격: [RATIO OR DIMENSIONS].
    - 제품, 정보, 문구의 위계: [HIERARCHY].
    - 한 장의 완성 모듈만 출력하며 다른 모듈을 한 화면에 축소해 모으지 않습니다.

## Multi-channel adaptation

    작업 유형: 승인된 마스터 키비주얼을 [TARGET RATIO AND CHANNEL]로 재구성.

    [유지할 캠페인 잠금]
    [SUBJECT, COPY, MODEL, GARMENT, PALETTE, LIGHT, MATERIAL, PROP, TYPE AND SPACING LOCKS]

    [변경할 항목]
    - 캔버스 비율: [TARGET RATIO].
    - 피사체 위치와 크기: [NEW PLACEMENT].
    - 문구 줄바꿈과 크기: [APPROVED REFLOW].
    - 채널 안전 영역: [SAFE AREA].

    [금지 사항]
    - 제품이나 모델을 새로 생성하지 않습니다.
    - 캠페인 색, 조명, 핵심 시각 장치와 문구 의미를 바꾸지 않습니다.
    - 늘이기, 찌그러뜨리기, 핵심 피사체 절단과 자동 크롭 흔적을 남기지 않습니다.

    [출력]
    - 지정된 채널과 비율의 완성 이미지 한 장만 출력합니다.

## Masked local image edit

    작업 유형: 승인된 이미지의 지정 영역만 수정하는 인페인팅.

    [편집 대상]
    - 이미지 1은 승인된 현재 결과입니다.
    - 수정 영역 또는 마스크: [EXACT REGION].
    - 원본 이미지 2가 있다면 제품, 모델, 음식 또는 의류 정체성 복원의 기준입니다.
    - 추가 레퍼런스는 각 역할을 다음과 같이 제한합니다: [UP TO THREE DISTINCT REFERENCE ROLES].

    [한 가지 수정]
    - [ONE REQUESTED CHANGE].

    [반드시 고정]
    - [SUBJECT, COPY, MODEL, GARMENT, COMPOSITION, CAMERA, LIGHT, BACKGROUND AND CAMPAIGN PROPERTIES THAT MUST NOT CHANGE].
    - 수정 영역 밖의 픽셀과 모든 승인 요소를 다시 생성하지 않습니다.

    [경계와 물리 연결]
    - 마스크 경계에 이음새, 반복 무늬, 색 번짐, 헤일로와 해상도 차이를 남기지 않습니다.
    - 새로 노출되거나 수정된 표면의 원근, 빛, 그림자, 반사, 질감과 노이즈를 주변과 일치시킵니다.

    [출력]
    - 지정 영역만 수정된 한 장의 완성 이미지를 출력합니다.

## Local conversational revisions

Use short revision prompts only after recording the accepted state.

    이 작업은 승인된 이미지의 국소 수정입니다. 제품, 모델, 의류, 캠페인 개념, 구도, 조명과 배경은 그대로 유지하고 [ONE PROPERTY]만 [TARGET STATE]로 수정하세요. 다른 영역을 다시 생성하지 말고 한 장의 수정 결과만 출력하세요.

Examples of one-property changes:

- 문구만 더 크게: preserve copy wording, product, layout grid, background, and lighting; change only the approved copy scale and necessary line wrapping.
- 배경만 더 밝게: preserve subject color and exposure; lift only background luminance without clipping whites.
- 그림자만 부드럽게: preserve direction and contact point; increase source size and soften only the shadow edge.
- 제품만 오른쪽으로: preserve scale, camera, shadow, and all styling; translate the product and repair only newly exposed background.
- 새 비율로: use the multi-channel adaptation prompt rather than stretching the accepted image.

## Corrective retry

```text
이 이미지는 이전 결과의 국소 수정 작업입니다. 전체 연출 방향, 구도와 조명은 유지하고 아래 결함만 수정하세요. 원본 이미지 1이 정체성의 최종 기준입니다.

[반드시 원본 이미지 1에서 다시 대조할 불변 요소]
[IMMUTABLE FACTS]

[관찰된 결함]
[ONLY OBSERVED DEFECTS]

[수정 지시]
- 위 결함이 있는 부분만 원본 이미지 1과 일치하도록 복원합니다.
- 결함 수정 과정에서 라벨, 재료, 비율, 색, 재질, 그림자 방향과 다른 정상 영역을 변경하지 않습니다.
- 레퍼런스 이미지의 피사체, 브랜드, 글자와 재료를 가져오지 않습니다.
- 한 장의 수정된 완성 이미지만 출력합니다.
```
