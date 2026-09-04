# Commercial Model and Fashion Production

## Authority roles

Assign each input exactly one role:

- `model authority`: facial proportions, visible identity, hair, skin appearance, body proportions, and fixed styling traits
- `garment authority`: one garment's silhouette, length, collar, sleeves, construction, seams, closures, pattern, color, material, drape, logo, and decoration
- `accessory authority`: one accessory's shape, hardware, material, color, logo, and wear position
- `direction reference`: pose, camera, light, environment, and mood only

Do not merge garment construction or accessories across sources. Hidden details stay unknown.

If there is no model source, create one approved fictional adult profile:

```yaml
adult_age_range: ""
face_shape_and_proportions: ""
hair: ""
skin_appearance: ""
body_proportions: ""
fixed_makeup_and_styling: ""
```

## Consent and representation

Use an identifiable real person's image only for the authorized purpose. Do not imply endorsement, transform a real person into a misleading identity, sexualize a person without authorization, or generate a minor or minor-looking subject in an adult commercial context. Keep body appearance realistic and do not create deceptive before-and-after claims.

## Model prompt

```text
작업 유형: 반복 사용 가능한 성인 상업 모델 이미지 제작.

[모델 권위]
- [SOURCE MODEL ROLE OR APPROVED FICTIONAL ADULT PROFILE].
[MODEL LOCK]

[촬영]
- 표정과 행동: [EXPRESSION AND ACTION].
- 샷과 앵글: [SHOT SIZE AND CAMERA].
- 장소와 배경: [LOCATION].
- 조명과 무드: [LIGHT AND COMMERCIAL MOOD].
- 채널과 크롭: [FORMAT].

[보존]
- 포즈, 표정과 장소는 요청 범위에서 바꿀 수 있지만 얼굴, 헤어, 피부와 체형의 정체성 특징은 바꾸지 않습니다.
- 손, 관절, 치아와 눈을 자연스럽게 표현하고 피부를 플라스틱처럼 만들지 않습니다.

[출력]
- 성인 상업 모델 이미지 한 장. 추가 인물, 문구, 워터마크, 콜라주 없음.
```

## Fashion try-on prompt

```text
작업 유형: 승인된 성인 모델에게 원본 의류와 액세서리를 정확히 착장한 정적 캠페인 이미지 제작.

[입력 역할]
- 모델 권위: [MODEL SOURCE].
- 각 의류·액세서리 권위: [ROLE MAP].
- 방향 전용 레퍼런스: [OPTIONAL VISUAL DNA].

[잠금]
[MODEL LOCK]
[GARMENT AND ACCESSORY LOCKS]
- 실루엣, 길이, 칼라, 소매, 절개, 봉제선, 여밈, 패턴, 색, 소재, 드레이프, 로고와 장식을 바꾸지 않습니다.

[장면]
- 포즈와 행동: [POSE].
- 장소, 샷, 카메라와 조명: [SCENE AND CAPTURE].
- 핵심 의류 디테일을 팔, 가방, 머리카락 또는 소품으로 가리지 않습니다.
- 몸과 의류의 접점, 중력, 주름, 겹침과 그림자를 실제 착장처럼 표현합니다.

[출력]
- 한 장의 완성된 정적 상업 이미지. 추가 인물, 재디자인, 콜라주와 임의 문구 없음.
```

## QA

| Criterion | Weight |
|---|---:|
| model identity and proportion consistency | 25 |
| garment and accessory fidelity | 30 |
| anatomy, fit, folds, contact, and gravity | 20 |
| pose, camera, scene, and commercial direction | 15 |
| skin, fabric, and artifact realism | 10 |

Accept at 88 or higher with no critical failure. Changed identity, garment redesign, wrong color or pattern, missing accessories, impossible anatomy, fused limbs, broken hands, floating clothing, implausible contact, or unauthorized additional people are automatic failures.

Compare every garment with its own authority, not an earlier generated result. One retry may correct only observed defects while retaining accepted pose, scene, and light.
