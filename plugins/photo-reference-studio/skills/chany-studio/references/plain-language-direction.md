# Plain words to professional direction

Beginners describe what they want in everyday words ("배경 흐리게", "화장품 화보처럼"). Professionals get better results because they know the exact photography and film term, and the model responds to that term. This contract lets any Chany skill translate the user's words into professional direction, show the translation so the user learns it, and, when the user wants control, guide them through a short plain-language question card. It works in Claude Cowork (the `AskUserQuestion` card) and ChatGPT Work (its structured input when exposed, otherwise numbered choices in text). It never adds a checkpoint to quick start.

## 1. Translate and reflect back

When a request contains a plain-language look, map each phrase with §4 and use the professional clause in the internal prompt. Reflect the translation back once, in one short line, before the confirmation card:

```text
이렇게 이해했어요: 배경 흐리게 → 아웃포커싱(배경만 흐리고 제품은 선명하게) · 화장품 화보 조명 → 뷰티디쉬 조명(부드럽지만 또렷한 광택)
```

Always pair a term with its plain meaning. Never answer a plain request with a bare term, and never correct the user's wording. If a phrase could mean two different looks (for example "고급스럽게" as dark and moody, or as bright and minimal), choose the one that fits the product and reference, say which one you chose, and let the card's change option cover the other.

## 2. Guided look card

Offer "느낌 직접 고르기" when the user asks how to describe a look, asks for more control, says the result feels wrong without saying why, or picks the card's change option. Ask one card of at most four questions, each with three or four options:

- 빛 (lighting), 각도·거리 (angle and shot size), 배경·색감 (background and tone), and for video 카메라 움직임 (camera movement)
- option label: plain words first, the term in parentheses, for example `배경만 흐리게 (아웃포커싱)`
- option description: what the picture will look like and when it suits a product, in one sentence
- first option: the recommendation for this product and reference, marked `(권장)`
- skip any question the request or chosen reference already answers

After the answers, show the user their request rewritten as a professional brief in Korean, so they can reuse it next time:

```text
전문가식으로 쓰면: "골든아워 역광, 아웃포커싱, 45도 3/4 앵글, 오른쪽에 문구 여백, 웜톤"
```

Then continue to the normal confirmation card. The guided card replaces the change step; it is not an extra approval.

## 3. Answer "이건 뭐라고 해요?"

When the user asks what a look is called or how to ask for it, answer with the term, its plain meaning, and one ready-to-copy request sentence. Keep it to three lines and offer to apply it to the current work.

## 4. Phrase map

Use the closest row. The prompt clause is guidance for the internal prompt, not text to show the user.

### Light

| 이렇게 말하면 | 전문 용어 | 프롬프트에 넣는 뜻 |
|---|---|---|
| 배경 흐리게, 블러, 제품만 또렷하게 | 아웃포커싱(얕은 심도, 보케) | shallow depth of field, background softly out of focus, creamy bokeh, product tack-sharp |
| 화장품 화보처럼, 반짝이는 고급 조명 | 뷰티디쉬 조명 | beauty-dish key light, soft yet crisp specular highlights, even illumination |
| 그림자 없이 부드럽게 | 확산광(소프트박스) | large diffused softbox light, soft gradual shadows |
| 그림자 진하게, 선명하게 | 하드 라이트 | hard direct light, crisp defined shadows |
| 테두리가 빛나게 | 림 라이트 | rim light tracing the product edges |
| 뒤에서 빛이 비치게, 투명하게 빛나게 | 역광(백라이트) | backlight, glowing translucent edges |
| 따뜻한 햇살, 창가 햇빛 | 골든아워 자연광 | warm golden-hour sunlight, diagonal light shaft through a window |
| 어둡고 고급스럽게 | 로우키 | low-key lighting, dark background, controlled highlights |
| 밝고 깨끗하게 | 하이키 | high-key lighting, bright clean background, minimal shadow |
| 유리병 반사가 예쁘게 | 스트립 조명 반사 | strip softbox reflections running along glass edges |
| 시원하고 차갑게 | 쿨톤 + 물방울 연출 | cool color temperature, fine condensation droplets |

### Angle and distance

| 이렇게 말하면 | 전문 용어 | 프롬프트에 넣는 뜻 |
|---|---|---|
| 위에서 내려다본 | 탑뷰(플랫레이) | top-down flat lay |
| 눈높이에서 | 아이레벨 | eye-level camera |
| 아래서 올려다본, 웅장하게 | 로우앵글 | low angle, heroic stance |
| 비스듬히 | 3/4 앵글(45도) | three-quarter view at about 45 degrees |
| 아주 가까이, 질감 보이게 | 매크로(익스트림 클로즈업) | macro close-up revealing surface texture |
| 제품이 크게 | 클로즈업 | close-up, product fills most of the frame |
| 제품 전체와 주변까지 | 풀샷·와이드 | full shot with surrounding scene |
| 글자 넣을 자리 남겨서 | 네거티브 스페이스(카피 여백) | generous empty area reserved for copy on one side |
| 한쪽에 두고 | 삼분할 구도 | subject on a rule-of-thirds line |
| 소품이랑 같이 | 스타일링 컷 | styled set with a few supporting props |
| 손으로 들고 있는 | 핸드 모델 컷 | hand model holding the product naturally |

### Background and tone

| 이렇게 말하면 | 전문 용어 | 프롬프트에 넣는 뜻 |
|---|---|---|
| 따뜻한 느낌 | 웜톤 | warm color grade |
| 차가운 느낌 | 쿨톤 | cool color grade |
| 옛날 필름 사진처럼 | 필름 톤(그레인) | analog film look, fine grain, soft contrast |
| 쨍하고 선명하게 | 하이 콘트라스트 | high contrast, saturated color |
| 몽환적으로 | 소프트 포커스·헤이즈 | soft focus glow, light haze |
| 흰 배경 | 화이트 스윕 | seamless white sweep background |
| 한 가지 색 배경 | 컬러 백드롭 | seamless single-color backdrop |

### Video

| 이렇게 말하면 | 전문 용어 | 프롬프트에 넣는 뜻 |
|---|---|---|
| 천천히 다가가게 | 푸시인(돌리 인) | slow push-in toward the product |
| 점점 멀어지게 | 풀아웃(돌리 아웃) | slow pull-out revealing the scene |
| 옆으로 흘러가듯 | 트래킹(슬라이드) | lateral tracking move |
| 제품이 빙글 돌게 | 턴테이블 | product rotating on a turntable |
| 카메라가 주위를 돌게 | 오비트 | camera orbiting around the product |
| 느리게 | 슬로모션 | slow motion |
| 흔들림 없이 | 고정 샷(락오프) | locked-off static camera |
| 초점이 옮겨가게 | 랙 포커스 | rack focus from foreground to product |
| 빛이 쓱 지나가게 | 라이트 스윕 | light sweep across the product surface |
| 물이 튀게 | 스플래시(고속 촬영) | high-speed liquid splash |
| 한 번에 쭉 이어지게 | 원테이크 | single continuous take |
| 휙 넘어가게 | 휩팬 전환 | whip-pan transition |

## 5. Boundaries

- Do not quiz the user or ask them to pick terms they do not know; options always lead with plain words.
- A term never overrides product truth: if a look would hide the label or change the product, say so and suggest the nearest look that keeps it.
- Physically risky or misleading motion (impossible pours, exaggerated food size, fake speed) follows the industry overlay and creative-direction rules.
