# Plain words to professional direction

Users never need to learn photography, film, design vocabulary or prompt writing. Interpret everyday words and supplied reference images into concrete production decisions internally. Use Claude's AskUserQuestion or the current host's callable structured question tool when available, otherwise short numbered choices. Never assume tool availability from the platform name, simulate a tool call, or change operating mode to obtain a question widget. This guidance is shared by Claude and ChatGPT Work/Codex.

## 1. Translate and reflect back

When a request contains a plain-language look, use §4 as possible interpretations, not a fixed dictionary. Keep terminology in the internal production prompt. Reflect only the visible result in one sentence when useful:

```text
제품과 글자는 선명하게 두고, 배경만 부드럽게 흐리게 만들게요.
```

Do not teach terminology or show a rewritten expert brief unless asked. For a material ambiguity, ask about visible differences: background blur versus motion blur versus hiding a face. For minor choices, infer from the supplied reference and product and recommend a default. "화장품 화보" does not imply beauty-dish lighting; choose light size, direction and reflections from the desired finish and material. A still reference does not establish an exact lens, light fixture or original prompt.

## 2. Guided look card

This guidance never adds a checkpoint to quick start; reuse the existing confirmation for paid production.

Offer "느낌 직접 고르기" when useful, not as a mandatory interview. Ask only 1–3 unresolved questions at a time, within the live tool's limits, with 2–3 plain-language choices. Include a recommendation and allow "알아서 추천해 줘" or free text:

- 빛 (lighting), 각도·거리 (angle and shot size), 배경·색감 (background and tone), and for video 카메라 움직임 (camera movement)
- option label: visible effect only, for example `배경만 흐리게` or `움직이는 느낌으로`
- option description: what the picture will look like and when it suits a product, in one sentence
- first option: the recommendation for this product and reference, marked `(권장)`
- skip any question the request or chosen reference already answers

After the answers, summarize the intended appearance, not the professional vocabulary:

```text
따뜻한 햇빛 아래 제품은 선명하게, 배경은 부드럽게 만들고 오른쪽에 문구 자리를 남길게요.
```

Then continue to the normal confirmation card. The guided card replaces the change step; it is not an extra approval.

## 3. Answer "이건 뭐라고 해요?"

When the user asks what a look is called or how to ask for it, answer with the term, its plain meaning, and one ready-to-copy request sentence. Keep it to three lines and offer to apply it to the current work.

## 4. Phrase map

Use the closest row. The prompt clause is guidance for the internal prompt, not text to show the user.

### Light

| 이렇게 말하면 | 전문 용어 | 프롬프트에 넣는 뜻 |
|---|---|---|
| 배경만 흐리게, 제품만 또렷하게 | 얕은 심도 | shallow depth of field, background softly out of focus, product and label sharp; ambiguous blur requires clarification |
| 화장품 화보처럼, 반짝이는 고급 조명 | 소재에 맞는 반사광 제어 | select diffused light and controlled highlights from the reference and product finish; beauty dish is only one possible setup |
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

- A supplied reference file/link takes priority over discovery. Follow [reference-led-design.md](reference-led-design.md): inspect it, separate style authority from product authority, and skip the automatic board unless alternatives were requested. Show existing reference previews when supported; never invent a visual option or claim a link was inspected when it was not.
- Revision requests such as "덜 광고 같게" change only the relevant copy density, layout or lighting while preserving accepted product, text and other locks. Ask only if the intended difference is genuinely unclear.

- Do not quiz the user or ask them to pick terms they do not know; options always lead with plain words.
- A term never overrides product truth. Preserve real geometry and label content, not the original photo's angle or 2D outline. Keep label information visible when the brief requires it; do not force every reference into a frontal pose merely to show every letter. If an essential view needs unsupported hidden details, request the relevant source view or disclose a supported alternative under [reference-led-design.md](reference-led-design.md).
- Physically risky or misleading motion (impossible pours, exaggerated food size, fake speed) follows the industry overlay and creative-direction rules.
