# Campaign Visual Production

## Choose the output

- `staged`: one source-faithful product, food, service, place, interface, vehicle, person, or event scene for a named use.
- `key-visual`: one master image that defines a reusable campaign system.
- `prompt-only`: the complete brief, authority map, locks, production prompt, and likely one-variable revisions without generation.

Do not add a poster, detail page, ad set, or alternate concept unless the user requests it.

## Production formulas

Staged image:

**industry message job + proof object + source identity + brand mood + scene + capture settings + physical integration + exclusions**

Master key visual:

**industry message job + source identity + one campaign idea + brand codes + focal composition + distinctive light/material device + copy zones + crop-safe master output**

The master lock records:

```yaml
campaign_idea: ""
subject_placement_and_scale: ""
palette_and_contrast: ""
background_and_surface: ""
material_prop_or_effect_rule: ""
lighting_and_shadow: ""
camera_and_depth: ""
typography_plan: ""
copy_zones: []
crop_safe_area: ""
downstream_ratios: []
```

## Reference roles

The authoritative source controls every applicable subject count, form, proportion, material, color, logo, label, packaging, food composition, spatial geometry, view, interface state, vehicle trim, person identity, event fact, and evidence object. A selected reference may control only composition, negative space, camera, background, lighting, shadow, palette, props, effects, depth, and commercial mood.

Explicitly exclude the reference subject, model, ingredients, garments, architecture, interface, vehicle, artwork, logo, packaging, copy, price, and branded layout. If identity or evidence preservation conflicts with art direction, the authority source wins.

## Industry packet

Before writing the prompt, import only the applicable `message_job`, `proof_objects`, `must_capture`, `directing_rules`, `required_disclosures`, `prohibited_or_high_risk`, and `human_review_gate` fields. A visually attractive image that contradicts an industry failure gate is a failed asset.

## Production prompt

```text
작업 유형: 원본 피사체를 보존한 [상업용 연출컷/캠페인 마스터 키비주얼] 제작.

[입력 역할]
- 이미지 1은 최종 피사체의 권위 원본입니다.
- 이미지 2가 있다면 방향 전용 레퍼런스이며 [VISUAL DNA]만 참고합니다.
- 그 밖의 입력 역할: [ROLE MAP].

[업종·증거]
- 고객 여정 단계와 이 이미지의 메시지 역할: [JOURNEY STAGE AND MESSAGE JOB].
- 화면에서 확인되어야 할 근거: [PROOF OBJECTS AND MUST-CAPTURE].
- 업종 연출 규칙과 게시 전 검토: [DIRECTING RULES AND REVIEW GATE].

[권위 잠금]
[SUBJECT, SPACE, UI, VEHICLE, PERSON, EVENT, COPY AND EVIDENCE LOCKS AS NEEDED]
- 이미지 1의 권위 특성을 변경·복제하거나, 보이지 않는 기능·결과·시설·구성·규모를 발명하지 않습니다.

[캠페인 방향]
- 핵심 아이디어: [ONE IDEA].
- 브랜드 코드: [PALETTE, SHAPES, MATERIALS, MOOD].
- 핵심 시각 장치: [LIGHT, SHADOW, SURFACE, PROP, LIQUID, PARTICLE OR APPROVED INTERACTION].

[구도와 촬영]
- 출력 비율: [RATIO].
- 피사체 위치·크기와 카피 안전 영역: [LAYOUT].
- 카메라, 원근, 심도: [CAMERA].
- 키라이트, 필, 림, 그림자, 하이라이트: [LIGHTING].

[물리 연결]
- 피사체의 무게, 접점, 주변광, 그림자, 반사와 굴절을 장면에 일치시킵니다.
- 떠 있음, 가라앉음, 불가능한 반사와 과도한 블룸을 피합니다.

[배제]
- 레퍼런스의 피사체, 인물, 공간, 인터페이스, 차량, 작품, 패키지, 글자, 로고와 브랜드 요소를 가져오지 않습니다.
- 승인되지 않은 사람, 손, 물체, 문구, 결과, 후기, 워터마크와 콜라주를 만들지 않습니다.
- 업종 패킷의 금지·고위험 표현과 필요한 표시를 따릅니다: [INDUSTRY NEGATIVE CONSTRAINTS AND DISCLOSURES].

[출력]
- 한 장의 완성된 이미지. [KEY VISUAL인 경우: 임의 텍스트 없이 downstream crop에 안전한 마스터].
```

## QA

Staged image weights:

| Criterion | Weight |
|---|---:|
| source identity | 30 |
| reference Visual DNA transfer | 20 |
| physical light, contact, shadow, and reflection | 20 |
| commercial composition and hierarchy | 15 |
| industry proof and material or environment realism | 10 |
| artifact control | 5 |

Accept at 85 or higher.

Key-visual weights:

| Criterion | Weight |
|---|---:|
| source identity | 25 |
| single campaign idea and focal hierarchy | 20 |
| brand, palette, and material coherence | 15 |
| downstream crop flexibility | 15 |
| physical realism | 15 |
| artifact and contamination control | 10 |

Accept at 86 or higher. Any changed authority identity, leaked reference brand, duplicated subject, impossible physical contact, invented hidden detail, space or UI state, unsupported outcome, missing required disclosure, or unverified fidelity claim is an automatic failure.

For a correction, keep accepted composition and light fixed and name only visible defects. Compare the retry with the original authority, not the failed generation.
