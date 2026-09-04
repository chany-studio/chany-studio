# Campaign Visual Production

## Choose the output

- `staged`: one source-faithful lifestyle, product, or food scene for a named use.
- `key-visual`: one master image that defines a reusable campaign system.
- `prompt-only`: the complete brief, authority map, locks, production prompt, and likely one-variable revisions without generation.

Do not add a poster, detail page, ad set, or alternate concept unless the user requests it.

## Production formulas

Staged image:

**source identity + brand mood + scene + capture settings + physical integration + exclusions**

Master key visual:

**source identity + one campaign idea + brand codes + focal composition + distinctive light/material device + copy zones + crop-safe master output**

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

The authoritative source controls subject count, form, proportion, material, color, logo, label, packaging, and visible food composition. A selected reference may control only composition, negative space, camera, background, lighting, shadow, palette, props, effects, depth, and commercial mood.

Explicitly exclude the reference product, model, ingredients, garments, logo, packaging, copy, price, and branded layout. If identity preservation conflicts with art direction, the source wins.

## Production prompt

```text
작업 유형: 원본 피사체를 보존한 [상업용 연출컷/캠페인 마스터 키비주얼] 제작.

[입력 역할]
- 이미지 1은 최종 피사체의 권위 원본입니다.
- 이미지 2가 있다면 방향 전용 레퍼런스이며 [VISUAL DNA]만 참고합니다.
- 그 밖의 입력 역할: [ROLE MAP].

[피사체 잠금]
[SUBJECT LOCK]
- 이미지 1의 피사체 수, 형태, 비율, 색, 소재, 질감, 라벨, 로고, 패키지 또는 음식 구성을 변경하거나 복제하지 않습니다.

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
- 레퍼런스의 제품, 인물, 패키지, 글자, 로고와 브랜드 요소를 가져오지 않습니다.
- 승인되지 않은 사람, 손, 추가 제품, 문구, 워터마크와 콜라주를 만들지 않습니다.

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
| material or food realism | 10 |
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

Accept at 86 or higher. Any changed subject identity, leaked reference brand, duplicated subject, impossible physical contact, invented hidden detail, or unverified fidelity claim is an automatic failure.

For a correction, keep accepted composition and light fixed and name only visible defects. Compare the retry with the original authority, not the failed generation.
