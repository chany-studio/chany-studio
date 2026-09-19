# Higgsfield 모델 조사·후속 업데이트 메모

기록일: 2026-09-19 (한국 시간)
출처 세션: 01a06773-d5d0-7502-92d4-68ac9dbd18d3
상태: 조사 근거 보관. 후속 승인에 따라 목적 기반 추천·편집 라우팅을 작업 트리에 반영했으며 아직 릴리스하지 않았다. 이 문서 자체는 실행 스킬이나 유료 생성 승인이 아니다.

## 사용자의 목표와 확정된 방향

- 사용자는 사진·영상 전문용어나 모델 이름, 프롬프트 작성법을 공부하지 않아도 되어야 한다.
- 제품 사진·서비스 설명·원하는 콘텐츠·선호 레퍼런스를 받으면 AI가 필요한 제작 흐름을 결정한다.
- 첨부 레퍼런스가 있으면 이를 우선하며 불필요한 새 검색과 인터뷰를 생략한다.
- 다중 사이트 트렌드 검색 기능은 제외하기로 했다. 기존 Pinterest/MeiGen 레퍼런스 검색은 유지한다.
- 이미지 기본 모델은 사용자 정책상 GPT Image 2.5. 이번 조사는 이 기본값을 변경하지 않았다.
- 후속 승인: 콘텐츠 목적과 입력을 보고 제작 방식·모델 하나를 추천하도록 구현한다. GPT 기본값 유지, 대안은 기존 확인 카드에서 범위를 승인한 뒤 실행한다.

## 조사 방법과 신뢰 범위

Higgsfield 연결 도구의 읽기 전용 models_list로 이미지 34개·영상 41개 항목을 확인했다. 별칭·구버전·스튜디오 워크플로·후처리 도구가 포함되므로 독립적인 기초 모델 수가 아니다. 웹 공식 소개·가이드·Google 제조사 프롬프트 자료와 비교했다. 실제 이미지/영상 생성, 유료 작업, 동일 조건 품질 벤치마크는 하지 않았다.

공식 마케팅 자료의 '최고', '완벽 보존', '정확한 물리' 표현을 보증으로 취급하지 않는다. 지원 입력/모드/규격은 관찰 사실이고 아래 용도 추천은 그 기능에서 도출한 가설이다. 웹 UI·공개 API·Claude/ChatGPT 커넥터의 지원 범위가 다를 수 있으므로 실행할 때 연결된 도구 스키마와 견적을 다시 확인한다.

## 이미지 생성·편집: 핵심 후보

| 모델 | 확인된 특성 | 추천 작업 / 제한 |
|---|---|---|
| GPT Image 2.5 Flare | 빠른 생성/편집용 변형 | 일상 제품 이미지·시안·SNS. 기존 기본 모델 계열 유지 |
| GPT Image 2.5 Sunburst | 정밀 편집 지향 변형 | 레퍼런스 기반 제품 광고·최종 이미지·세밀한 수정. 보존 결과 검수 필수 |
| Nano Banana Pro | 문자·도표·복합 참고 이미지 해석 | 정보 캐러셀·포스터·서비스/교육 설명. 한글/숫자 검수 필요 |
| Nano Banana 2 / Lite | 빠른 생성/편집, mask 입력 확인 | 빠른 시안·부분 수정. 연결상 Lite는 1K |
| Seedream 5.0 Pro / Lite | 시각 추론·지시 기반 편집 | 정보형 이미지·인포그래픽 후보. Pro 연결은 최대 2K; 웹 grounding 소개가 사실 정확성 보증은 아님 |
| FLUX.2 | 구체적인 구도·색·장면 제어 | 재질·브랜드 컬러·캠페인 구성 후보. HEX 지시가 출력 색의 정확한 일치 보증은 아님 |
| Soul 2.0 | 인물·패션·에디토리얼 | 룩북·라이프스타일·인물 중심 화보. 정밀 패키지 보존의 기본값 아님 |
| Soul Cinema / Cinema Studio Image 2.5 | 영화적 스틸·조명·콘셉트 | 브랜드 필름 기준 이미지·공간·자동차 캠페인 |
| Recraft V4.1 | standard/vector/utility/utility_vector, 팔레트 설정 | 아이콘·그래픽·단순 목업. 현재 연결에 이미지 참고 입력 없음: 내 제품 그대로 넣는 작업 제외 |
| FLUX Kontext | 문맥 기반 편집·스타일 변환으로 등재 | 편집 대안. 최신 모델 대비 우위는 미검증 |
| FLUX.2 Pro Outpaint / Outpaint | 이미지 외곽 확장 | 광고 여백·다른 비율. 전체 재생성 대신 필요한 범위 확장 |
| Background Remover | 배경 제거 | 누끼는 생성보다 전용 도구 우선 |
| Topaz / ByteDance Upscale | 후처리 확대 | 해상도 개선. 라벨·형태 오류 수정의 대안은 아님 |

연결된 GPT Image 2.5 ID는 `gpt_image_2_5`. Flare/Sunburst, low/medium/high/xhigh/max, 1k/2k/4k, auto/opaque/transparent, native 4:5를 확인했다. 기본 옵션은 low/1k이므로 납품 품질을 자동 보장하지 않는다. 기존 image-generation-runtime.md도 이미 native 4:5를 기록하고 있어 새롭게 발견된 수정 사항으로 과장하지 말 것.

Grok Image/2.0, Kling O1 Image, OpenAI Hazel, Z Image도 카탈로그에 있었다. 독자적 우위의 근거가 부족한 항목은 기본 추천 우선순위를 높이지 않는다. Hazel의 'best text rendering'은 카탈로그 설명이지 독립 검증이 아니다.

## 영상 생성·편집: 핵심 후보

| 모델/도구 | 확인된 특성 | 추천 작업 / 제한 |
|---|---|---|
| Seedance 2.5 | t2v/omni_reference/video_edit/video_extension; 이미지·영상·오디오; 4–30초, 480p/720p/1080p | 일반 제품 광고·참고 기반 영상의 우선 검토 후보. 편집 모드는 원본 길이 기준이며 일반 duration/ratio와 다르게 동작 |
| Kling 3.0 | 시작/끝 프레임, 오디오, 3–15초, std/pro/4k | 인물·패션·제품 사용 동작. 웹의 다중샷 전용 제어가 커넥터에도 동일하게 노출됐다고 가정 금지 |
| Veo 3.1 | 영화적/사실적 생성과 오디오; 연결상 4/6/8초 | 공간·여행·호텔·자연·브랜드 분위기. 웹의 더 긴 길이를 현재 연결에 적용하지 말 것 |
| Cinema Studio Video | 장르·영화적 연출 설정 | 브랜드 필름·서사. 스튜디오 인터페이스와 기초 모델/커넥터 버전을 구분 |
| MiniMax H3 / H3 Max | 복합 참고 입력; H3 2K, Max 480p/768p로 등재 | 복합 자료의 짧은 광고 후보. Max라는 이름이 무조건 상위 해상도/품질이라는 뜻 아님 |
| FLUX 3 Video | 시작/끝 프레임·영상 참고/이어 만들기·오디오, 5–20초 720p/1080p | 원테이크·장면 연결·브랜드 스토리 후보 |
| Gemini Omni Flash 1.1 | text/image/reference/edit, 생성 3–10초, 편집 원본 최대 30초; 4K 옵션 | 실사 VFX·장면 수정·키프레임 연결 |
| Wan 3.0 / Prime | 복합 참고·시작/끝 프레임·오디오, 2–30초 | 광고·캐릭터의 비교 후보. Prime 우위는 미검증 |
| Kling Turbo / Veo Lite / Seedance Mini | 경량/빠른 계열 | 요청된 시안·예산 제한 작업. 승인 없는 추가 초안 생성 금지 |
| Genjutsu Object Swap | `hf_mult_replace_object`, 원본 영상+이미지 | 비슷한 형태의 제품 교체. 형태·접촉 방식이 달라지면 새 장면 고려 |
| Genjutsu Motion Transfer | `hf_mult_motion_control`, 영상 움직임+이미지 | 움직임을 새 대상/장면에 적용. Object Swap과 혼동 금지 |
| Seedance 2.5 Edit | 영상 편집 모드 | 국소 수정. 웹 Draw to Edit UI가 커넥터에서 그대로 가능한지 별도 확인 |
| Kling 3.0 Omni Edit | `kling_video_edit`, 원본 영상+이미지, std/pro/4k | 참고 기반 영상 수정 |
| FLUX 3 Video Edit | `flux_3_video_edit`, 최대 첫 15초 처리 | 짧은 영상 수정. 긴 영상 전체 처리로 오인 금지 |

Grok Video 1.5, Happy Horse, 구버전 Seedance/Kling/Wan 등도 확인했으나 기본 추천 승격에는 근거·검증이 더 필요하다. Ad Multiplier는 제작 워크플로이며 현재 목록에서 Seedance 2.5 기반으로 표기된다. Clipify·배경 제거·업스케일·Deflicker·Lipsync는 별도 목적 도구다. Sora 등 웹에 보이는 항목이 이 연결 목록에 없다는 사실만으로 서비스 전체 미지원이라 단정하지 않는다.

## 공통 베스트 프랙티스

1. 사진/영상 입력마다 제품·인물·구도·조명·동작의 권위 역할을 분리한다.
2. 실제 제품을 보존해야 하는 영상은 정확한 기준 이미지를 먼저 확보하고 이미 승인된 이미지는 재사용한다.
3. 피사체 동작·카메라 동작·편집 리듬을 분리해서 프롬프트를 구성한다.
4. 수정 대상과 유지 대상을 함께 지정하고 결과를 원본과 비교한다. 지시는 보증이 아니다.
5. 환경음·효과음·대사는 별도 문장으로 설계한다. 필요 없는 오디오를 자동 추가하지 않는다.
6. 한글·가격·날짜·법정 문구는 생성 후 검수하고 필요한 경우 일반 편집으로 조판한다.
7. 누끼·자막·리사이즈·조립 등은 가능한 전용/비생성 작업 우선. 모델 변경만으로 문제를 해결하려 하지 않는다.
8. 사이트 트렌드 수집과 모델의 현재 기능 확인은 다르다. 전자는 제외, 후자는 실행 정확성을 위해 유지한다.

## 후속 설계와 반영 상태

기존 chany-studio/출력별 스킬과 latest-model-routing.md를 확장하는 공통 선택 계층을 권장한다. 모델마다 새 스킬을 만들거나 사용자에게 모델 목록을 암기시키지 않는다.

입력/목적 → 생성·편집·일반 편집 구분 → 필요한 입력과 보존 조건 → 실제 연결 모델/제약 필터 → 기본 모델과 적합한 대안 비교 → 추천 1개 + 이유 한 문장 → 기존 견적/확인 카드 → 제작/검수.

판단 우선순위: 필수 기능·실행 가능성 → 원본 보존 → 납품 목적/품질 → 예산·속도. 광고 성과를 모델 선택만으로 보장하지 않는다. 단일 상품 입력만으로 콘텐츠 형식까지 임의 결정하지 말고 필요한 경우 용도를 한 번 질문한다.

정책 충돌 해소: image-generation-runtime.md에 구체적인 작업 적합성에 따른 대안 제안을 추가하고, 기존 확인 카드의 모델·입력·비용·산출물 범위 승인과 통합했다. 장르나 최신 모델이라는 이유만으로 조용히 대체하지 않으며, 불확실하면 GPT 기본값을 유지한다. 편집·누끼·조립은 생성 필요성부터 구분한다.

추천/자동준비는 바로 가능하지만 유료 실행은 기존 승인 범위 안에서 한다. '알아서'라는 요청을 무제한 비용·모델 교체·재시도 승인으로 해석하지 않는다. 미래의 사전 예산 모드는 모델/입력/출력/시도/총액 범위를 명확히 지원할 때 별도로 설계한다. 실패 시 다른 모델을 연쇄 호출하는 자동 fallback은 넣지 않는다.

## 주요 1차 출처

- https://higgsfield.ai/blog/gpt-image-2-5-higgsfield
- https://higgsfield.ai/gpt-image-2.5
- https://blog.google/products-and-platforms/products/gemini/prompting-tips-nano-banana-pro/
- https://higgsfield.ai/nano-banana-2
- https://higgsfield.ai/seedream-5.0-pro
- https://higgsfield.ai/flux-2-intro
- https://higgsfield.ai/blog/ai-fashion-photo-generator
- https://higgsfield.ai/blog/recraft-v4-higgsfield
- https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-seedance
- https://higgsfield.ai/blog/Kling-3.0-is-on-Higgsfield-User-Guide-AI-Video-Generation
- https://higgsfield.ai/blog/5-Best-AI-Video-Models-2026-Tested-Compared
- https://higgsfield.ai/blog/cinema-studio-3.0
- https://higgsfield.ai/minimax/h3
- https://higgsfield.ai/blog/flux-3-higgsfield
- https://higgsfield.ai/gemini-omni-flash
- https://console.higgsfield.ai/models/alibaba/wan-3.0/text-to-video/playground
- https://higgsfield.ai/blog/higgsfield-genjutsu
- https://higgsfield.ai/blog/edit-ai-video-without-regenerating
- https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/video-gen-prompt-guide

## 작업 상태 / 다음 재개 위치

2026-09-19 구현 시 읽기 전용 카탈로그를 다시 조회하여 이미지 34개·영상 41개 항목과 후보 ID를 확인했다. 2.15.0의 `content-intent.md`, `latest-model-routing.md`, 이미지 모델 정책, 프로젝트 인터뷰/템플릿 및 영상 편집 분기에 반영했다. 사이트 트렌드 검색·새 모델별 스킬·무승인 실행은 추가하지 않았다. 지침·링크·안전 경계 회귀 검증과 유료 생성 품질 실험은 별개다. 실제 출력 품질·호스트 UI의 동일 동작은 이 조사로 보장하지 않는다.
