# Chany’s Studio 2.18 종합 점검·개선 보고

확인일: 2026-11-17, 한국 시간. 시작 상태: 소스·설치된 Codex 플러그인·공식 사이트의 안내 버전은 2.17.0. 소스 기준 커밋은 `7734ac7`, 브랜치는 `main`이었다. 변경 전부터 있던 드라마 관련 사용자 수정 3개 파일을 보존했다.

## 유지한 핵심 가치

**내 제품·서비스 자료와 원하는 레퍼런스로 시작해, 실제 상품의 모습과 사실을 지키면서 원하는 콘텐츠를 완성하는 것.** 레퍼런스가 없으면 대신 찾아 보여준다. 사용자는 모델명이나 복잡한 프롬프트를 외울 필요가 없다. 선택한 구도에 적용하고 결과를 비교해 필요한 부분만 수정한다.

2.18은 이 흐름을 강화한다. 모델 이름만 추가하거나 스킬 수를 늘리지 않았다. 선택한 배경·구도를 유지하는 교체, 참고 느낌으로 새로 촬영하는 제작, 이미 나온 결과의 부분 수정을 분리했다. 생성형 편집이 원본 픽셀의 완전한 보존을 보장한다고 설명하지 않는다. 정확한 글자·로고·UI 및 변경하지 않을 영역은 가능한 경우 마스크·합성·편집 가능한 글자 레이어를 사용한다.

실행 가능한 것은 입력 계획과 모델 제약 검사, 기존 제작 도구로 이어지는 스킬·공통 지침이다. 독립된 이미지 생성 엔진을 새로 만든 것은 아니며, 실제 생성은 연결된 서비스와 해당 계정의 기능·비용에 따른다.

## 요청별 결과

| 요청 | 결과와 확인 위치 |
|---|---|
| 현재 버전과 핵심 가치 보고 | 시작 2.17.0 → 소스 2.18.0. 위 핵심 가치와 아래 배포·검증 상태 참조 |
| 최신 자료를 먼저 모아 선별 | 구현 전 [점검 기록](AI-GENERATION-SKILL-AUDIT-2026-11-17.md), [실제 모델 조회 기록](AI-MODEL-CAPABILITIES-2026-11-17.json)을 작성하고 아래 채택·보류 판단 적용 |
| 제품을 원하는 레퍼런스에 삽입 | `reference-insertion.md`, `reference-plan.mjs` 및 이미지 제작·편집·광고·상세페이지 연결 |
| 서비스도 같은 경험 제공 | 실제 UI·로고·공간·서비스 사실을 원본으로 사용. 없는 기능·가격·후기·성과를 생성하지 않도록 입력과 검수 기준 추가 |
| 레퍼런스를 대신 찾기 | 기본 Pinterest 5 + Meigen 5 유지. 지정 사이트·계정·사용자 자료와 업종별 선별 경로 추가 |
| 노션 자료 전체 검토 | 사이트·추천 계정·폰트·색의 네 묶음과 30개 펼침 항목을 읽고 아래와 같이 반영 |
| Metricool 기능·필요성 판단 | 실제 도구·조회 가능한 항목 확인 및 경쟁 계정·게시물·릴스 읽기 조회. 필수가 아닌 보조 분석으로 결론 |
| AI 캐릭터 설계도 면밀 분석 | 전체 본문·설정표·세 프롬프트·예시 이미지를 읽고 역할 분리·장면 상태를 채택. 사례 전용 수치·모델 우열은 일반화하지 않음 |
| 최신 이미지·영상 모델 반영 | GPT Image 2.6, Seedream 5.5, Gemini Omni 1.2, Seedance 2.5/Flash, Genjutsu 및 Ad Multiplier V2의 확인된 조건 반영 |
| 불필요한 스킬 삭제 또는 발전 | 45개 전체 검토: 유지 26, 개선 18, 중복 통합 1. 아래 개별 판단표 참조 |
| AI 초보자 사용성 | 자료 재질문 최소화, 이미 고른 참조 재사용, 추천 하나와 통합 제작 확인, 실제 이미지 표시, 쉬운 [시작 가이드](REFERENCE-INSERTION-GUIDE.md) |
| 검증 후 공식 사이트 갱신 | 아래 검증·사이트 배포 기록 참조. 실제 모델 품질 검증과 구분 |
| 빠짐없는 보고 | [15개 완료 기준](REFERENCE-STUDIO-2.18-SPEC.md), 본 보고서, 소스·사용법·사이트를 연결 |

## 최신 정보의 선별

공식 발표는 기능의 공개 사실, 실제 연결 도구는 이번 환경의 입력 계약, 커뮤니티 글은 작업 경험의 근거로 구분했다. 아래 자료는 11월 17일 확인했다. 게시일이 보이는 자료는 그 날짜를 사용하고, 상대 시각만 보인 사례는 정확한 작성일을 추정하지 않았다. 공급사 홍보나 한 사람의 경험을 독립 성능 비교로 취급하지 않았다.

| 근거·발표 시점 | 확인·선별 결과 | 적용 |
|---|---|---|
| [OpenAI Images 2.6](https://openai.com/index/introducing-images-2-6/), 11/4 | 2.6·GIF·SVG 발표와 실제 Higgsfield 모델을 대조 | 새 작업 기본값 2.6. Sunburst/Flare는 별도 ID. 기존 2.5 작업 유지. 참조를 못 받는 SVG 때문에 제품 사진을 버리지 않음 |
| [Google Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/), 11/5 | 텍스트·첫 프레임·다중 참조·편집·연장의 지원 조건이 다름 | 15초를 모든 모드의 한도로 일반화하지 않고 모드별 검사 |
| [Higgsfield 변경 이력](https://higgsfield.ai/creator-hub/changelog), 11/9~16 | Seedream 5.5, Seedance 4K·Flash, GPU·Short Drama 발표 | 실제 카탈로그에서 확인된 모델 조건만 채택. GPU 대여·Short Drama 전체 자동화는 기본 경로에 추가하지 않음 |
| [Kling 4.0 공식 발표](https://kuaishou.gcs-web.com/node/11766/pdf), 10/16 | 발표 기능과 연결 도구의 모델 식별자가 다름 | Genjutsu Flash의 관찰된 조건만 사용. 별도 Kling 4.0 전체 기능을 제공한다고 주장하지 않음 |
| [Adobe MAX 발표](https://news.adobe.com/news/downloads/pdfs/2026/11/firefly-release-max-2026.pdf), 11/10 | 정식·베타·미리보기 기능을 구분할 필요 | 기존 Adobe 역할 유지. 앱 설치·실제 연결·렌더 확인 없이 자동 실행 약속하지 않음 |
| [Canva Craft](https://www.canva.dev/blog/developers/image-gen-with-craft/), 10/28 | 개발자 preview | 일반 사용자에게 즉시 실행 가능한 기본 기능으로 넣지 않음 |
| [Pika H3 Flex](https://creation.pika.art/blog/pika-h3-flex), 10/29 | 별도 실행 환경과 조건 확인 필요 | 관찰 후보. 추가 대여·설치·과금을 기본 제작에 붙이지 않음 |
| [GPTers: 광고 컷 제작 사례](https://www.gpters.org/media/post/create-cuts-serve-advertising-YoDNpy1QkZAwGJs), 페이지상 약 3개월 전 | 제품·Pinterest 구도·인물 일관성과 짧은 말하기 장면의 실제 시행착오 | 제품 기준과 촬영 조건을 먼저 고정하고 이미지 검수 후 영상화. 특정 모델이 언제나 우월하다는 주장은 제외 |
| [GPTers: 레퍼런스에서 취향 규칙 찾기](https://www.gpters.org/wealth/post/showed-him-good-references-0ayqOeCidkQkpLk), 페이지상 약 3개월 전 | 캐러셀 전체 흐름·마지막 행동 유도·사용자의 선호를 구분하는 사례 | 실제 확인 장수 기록, 사용자 선호와 AI 해석 분리, 서비스 사실 자료와 수정 기록 재사용 |
| [r/StableDiffusion: 장면 일관성 경험](https://www.reddit.com/r/StableDiffusion/comments/1xwrrc1/how_to_generate_consistency_scene/), 조회 시 최근 글 | 여러 컷에서 장소 기준·현재 소품 상태를 구분한 개인 경험 | 원래 외형 기준·공간 기준·직전 상태를 별도 입력 역할로 관리. 낮은 증거 수준의 작업 사례이며 성능 보증 아님 |
| [아이보스: GPT Image 2.5 소개](https://www.i-boss.co.kr/ab-2877-18035?PB_1387529883=10&media=madtimes), 9/9 | 국내 동향 맥락에는 유용하나 오래된 2차 소개 | 현재 기본 모델 결정의 근거에서는 제외 |

Runway·BFL의 신규 발표는 이번 검색에서 충분한 직접 근거를 확보하지 못해 갱신 사실을 만들어 넣지 않았다. GPTers의 최신 영화 제작 글은 목록에서만 확인한 항목을 완독 사례로 기록하지 않았다.

### 실제 연결에서 반영한 조건

- **GPT Image 2.6:** `gpt_image_2_6`와 `gpt_image_2_6_flare`를 구분한다. 이전 `variant`를 넘기지 않는다. 확인된 참조 한도 16장, GIF 프레임·크기 조건, 참조를 받지 않는 SVG를 검사한다. OpenAI 직접 API의 `complexity`는 확인된 Higgsfield 옵션이 아니므로 전송하지 않는다.
- **Gemini Omni Flash 1.2:** 텍스트·단일 첫 프레임 3~15초, 일반 참조·첫/끝 프레임 3~10초. 편집 원본 3~15초, 연장 원본 1~30초와 추가 3~10초를 구분한다.
- **Seedance 2.5:** 4K, 최대 30초, 이미지 합계 30·영상 10·오디오 10 조건을 기록했다. 영상 편집의 실제 원본 길이와 연장의 원본 비율을 따른다. 480p 초안의 유효기간 7일 및 최종 출력의 별도 비용·초안 전체 길이를 확인한다.
- **Seedance 2.5 Flash:** 480p/720p와 이미지 10·영상 5·오디오 5 조건으로 따로 검사한다. 본 모델의 4K·초안 기능을 그대로 복사하지 않는다.
- **Seedream 5.5:** PNG·투명 배경·확인된 해상도와 참조 10장 조건을 기록했다. 투명 출력 요청과 실제 알파 검수는 별개다.
- **Genjutsu:** 제품 교체 본 모델·Flash와 동작 제어의 참조 수·길이 조건을 분리했다. 제품 교체의 4~30초 한도를 동작 제어에 임의로 적용하지 않는다.
- **Ad Multiplier V2:** 전체 재제작과 시작/hook·마무리/CTA 변경을 구분한다. 구간 미탐지 시 앞뒤 추가, 길이 변화, 일부 구간만 성공한 결과와 과금·복구를 안내한다.

10개 모델의 날짜 있는 조건과 로컬 검사기를 배포물에 포함했다. 이는 실행 전 입력 오류를 찾는 검사이며 실시간 호환성, 계정 이용 가능 여부, 비용 견적 또는 출력 품질의 대체물이 아니다.

## 사용자 노션 자료 분석

[제공한 미감 자료](https://teamourproject.notion.site/3fdb1222998681158528c3ba82ed1700)는 레퍼런스 사이트·추천 계정·폰트·색을 묶은 큐레이션이었다. 외부 공개 노션이라 연결 도구에서는 읽지 못했으나 브라우저에서 30개 펼침 항목을 열어 본문 전체를 확인했다.

| 묶음 | 읽은 범위 | 채택·주의 |
|---|---|---|
| 사이트 | 37개 항목. 종합 디자인, 브랜딩·패키지, 웹/UI, 타이포, 사진·공간, 모션, 국내 디자인, 목업 | 업종에 맞는 출처 1~2개부터 선택. Dieline·The Brand Identity·Mobbin의 현재 페이지를 별도 확인. 노트폴리오는 검색 도구에서 JS 화면까지만 확인되어 개별 작품 검증으로 세지 않음 |
| Instagram | 추천 계정 33개. 해외·국내 스튜디오, 패키지, 공간, 영상·에디토리얼, 타이포, 브랜드 | 출발점으로만 사용. 모든 계정을 직접 열었거나 Metricool 경쟁 계정에 등록됐다고 가정하지 않음 |
| 폰트 | 후보 39개(한글 22·영문 17), 관련 사이트 10개 | 제목·본문 역할과 작은 화면 가독성 반영. 개별 사용처의 실제 폰트 라이선스 확인. 플랫폼 전체가 같은 라이선스라는 일반화 제외 |
| 색 | 도구 5개와 연결된 팔레트 자료 2개 | 브랜드 색·명도 대비·실제 적용을 우선. 특정 배색 비율을 모든 작업에 강제하지 않음 |

원문에 있는 모든 사이트의 전체 콘텐츠, 33개 계정의 모든 게시물, 연결된 팔레트 자료의 모든 조합을 재검증한 것은 아니다. 검토한 목록과 실제 개별 사례 확인을 구분했다. 목록·서체·팔레트 자료를 통째로 복제하지 않고 [선별 출처 지침](../plugins/photo-reference-studio/skills/chany-studio/references/curated-reference-sources.md)으로 연결했다.

기본 Pinterest 보드는 계속 Pinterest 전용이다. 사용자가 지정한 사이트·계정 탐색은 별도 경로로 표시한다. 미리보기 서버의 허용 주소를 넓히거나 부족한 Pinterest 결과에 다른 출처를 섞지 않는다. 기존 전역 문구와 새 탐색 경로의 충돌도 수정했다.

## Metricool의 실제 필요성

**결론: 필수가 아니다. 알려진 경쟁 계정의 게시물과 반응을 비교하거나 내 계정 결과를 분석할 때 선택적으로 유용하다.** 이번 연결에서 인스타그램 전체 키워드 검색·유사 이미지 검색·새 경쟁 계정 등록 도구는 확인되지 않았다.

실제 `getbrandsettings`로 연결 상태를 확인하고, `getanalyticsavailablemetrics`로 경쟁 계정·게시물·릴스의 조회 항목을 확인했다. 2026-10-18~11-17을 대상으로 세 종류를 각각 읽기 조회했으며 **세 결과 모두 `rows: []`**였다. 빈 결과만으로 원인을 특정하거나 서비스 전체에 기능이 없다고 결론 내리지 않았다. 계정 설정·연결 방식·등록된 경쟁 계정·대상 기간을 확인할 필요가 있다.

조회 가능한 공개 반응·캡션·시각·URL과 비공개 도달·저장·매출을 구분한다. 경쟁 계정의 매출·ROAS를 공개 반응에서 추정하지 않는다. [Metricool 연결 방식 안내](https://help.metricool.com/access-to-instagram-from-metricool-connection-types-and-differences-kcsrb)와 [경쟁 계정 분석 안내](https://help.metricool.com/competitor-analysis-ouhue)를 실제 도구와 대조했다. Facebook을 통한 연결과 Instagram 직접 연결의 분석 범위도 같다고 가정하지 않는다.

연결이 없거나 결과가 비면 원본 링크·사용자가 지정한 계정·공개 자료 탐색으로 이어간다. 기존 제작에 Metricool 설치를 강제하거나 전용 스킬을 추가하지 않았다. [사용자 안내](REFERENCE-INSERTION-GUIDE.md)와 [실행 지침](../plugins/photo-reference-studio/skills/chany-studio/references/metricool-reference-research.md)에 반영했다. 계정 변경·경쟁 계정 추가·게시·메시지 전송은 하지 않았으며 계정 식별자와 원자료를 배포물에 넣지 않았다.

## AI 캐릭터 설계도 분석

[제공한 EnterNext 설계도](https://enternext-docs-2026.s3.ap-northeast-2.amazonaws.com/guide/blueprint/index.html)는 AI 캐릭터·공간 참조를 준비하고 대화 장면을 이어 만드는 제작 사례다. 전체 설명, 설정표, 세 개의 프롬프트, 캐릭터·공간·상태·동작 예시 이미지를 읽었다. 실제 완성 영상을 처음부터 끝까지 재생·청취한 검증은 아니다.

| 채택한 원칙 | 적용 방식 |
|---|---|
| 얼굴·의상·공간·소품의 자료 역할 분리 | 각 이미지에서 사용할 정보와 제외할 정보를 지정. 다른 인물의 얼굴을 잘못 가져오지 않음 |
| 빈 공간 기준과 필요할 때만 반대 시점 | 반복 사용 가능한 공간 기준을 만들되 모든 작업에 3D·추가 컷 생성을 강제하지 않음 |
| 직전 장면의 상태 이어받기 | 이전 프레임은 위치·소품 상태, 원래 인물 자료는 외형 기준으로 분리 |
| 누가 언제 말하고 움직이는지 명확히 | 화자·대사·행동 구간을 설계하고 실제 출력의 입·목소리·동작을 검수 |
| 출력에서 드러난 문제를 고치기 | 기획표 통과와 실제 영상 재생 검수를 구분 |

채택하지 않은 일반화: 모든 장면을 7~9초·4~5줄로 만들기, 참조 10장 고정, 480p→1080p를 유일한 경로로 안내, 전체 영상 참조를 항상 배제, 0.5초 쉼·초당 음절 수를 절대 규칙으로 적용, 프롬프트에 쓴 시각이 정확히 구현된다고 보장하기. 실제 세 예시는 길이도 같지 않았다. 최신 모델 조건·이야기 목적·한국어 대사·실제 출력에 맞게 판단한다.

타인의 캐릭터·이야기·프롬프트·이미지는 플러그인에 복제하지 않았다. 원리는 [참조 역할과 연속성](../plugins/photo-reference-studio/skills/chany-studio/references/reference-roles-and-continuity.md)에 정리해 드라마·연출·이미지 소재 스킬에서 함께 읽는다.

## 스킬 45개 전수 판단

별도 읽기 검토에서 모든 `SKILL.md` 본문을 확인했다. **유지 26개, 개선 18개, 중복 통합 1개.** 삭제한 공개 호출명은 없다. 전문 스킬은 사실 보존·결과물·작업 단계가 달라 남길 이유가 있었다. `auto-photo-production`의 복제된 라우팅 설명은 제거하고 공통 진입점으로 통합했다.

| 스킬 | 결정 | 이유·반영 |
|---|---|---|
| adobe-after-effects-production | 유지 | 정확한 글자·합성·편집 가능한 모션 |
| adobe-premiere-finishing | 유지 | 컷·음향·자막·납품 검수 |
| adobe-video-pipeline | 유지 | Adobe 앱 사이 자산·타이밍·프로젝트 인계 |
| ai-drama-production | 개선 | 원래 인물 기준과 직전 장면 상태 분리 |
| auto-photo-production | 통합 | 중복 라우팅 삭제, 기존 이름은 공통 경로 연결 |
| chany-ad-creative | 개선 | 제품·서비스 삽입과 정확한 카피 보존 |
| chany-ad-variants | 개선 | 전체 재제작과 시작·마무리 변경, 부분 성공 구분 |
| chany-ai-prompt-reference | 개선 | 원본 프롬프트와 새 제작 요청, 새 모델 정책 연결 |
| chany-automotive-marketing | 유지 | 차종·트림·조건·안전 표현 |
| chany-award-ad-reference | 유지 | 수상 광고의 메시지 구조 분석 |
| chany-campaign-video | 개선 | 최신 영상 제약·교체·연장 경로 |
| chany-campaign-visual | 개선 | 구도 유지 삽입과 새 촬영 구분 |
| chany-commercial-photo-reference | 유지 | 상업사진 출처·촬영 완성도 탐색 |
| chany-consumer-tech-marketing | 유지 | 실제 기기·포트·UI·구성품 보존 |
| chany-corporate-employer | 유지 | 고객과 채용 대상의 목적·증거 차이 |
| chany-creative-direction | 개선 | 쉬운 요구를 제작 방향으로 전환, 참조 재사용 |
| chany-detail-page | 개선 | 실제 제품·서비스 화면을 페이지 구성에 적용 |
| chany-digital-product-marketing | 유지 | 실제 UI·기능·구독 조건 보호 |
| chany-education-marketing | 유지 | 실제 과정·수강 조건·학습 결과 |
| chany-food-dining | 유지 | 실제 음식·가격·분량·방문 목적 |
| chany-healthcare-marketing | 유지 | 환자·효과·자격 근거와 사람 검토 |
| chany-hospitality-travel | 유지 | 실제 객실·시설·뷰·예약 조건 |
| chany-image-edit | 개선 | 구도 그대로 대상만 바꾸는 수정 범위 |
| chany-jtbd-persona | 유지 | 근거 있는 고객 가설, 불필요한 전략 반복 방지 |
| chany-live-culture-events | 유지 | 일정·출연진·티켓·행사 사실 |
| chany-marketing-brief | 개선 | 선택형 Metricool 자료, 반응·매출 구분 |
| chany-media-production-loop | 개선 | 입력 검사·원본 역할·작업 회수·비용 범위 |
| chany-meta-ad-research | 유지 | 공식 Meta 광고 구조 분석은 사진 검색과 다름 |
| chany-model-fashion | 개선 | 새 모델 정책, 인물·의상 원본 유지 |
| chany-motion-design | 유지 | 읽히는 문구 모션과 메시지 구성 |
| chany-preflight | 유지 | 실제 도구·파일·폰트 이용 가능 여부 |
| chany-product-3d | 유지 | 관측·추정 표면과 치수 한계 |
| chany-product-assets | 개선 | 새 이미지 정책 연결, 누끼·알파 검수 유지 |
| chany-professional-services | 유지 | 제품 사진 없는 서비스의 과정·전문성·증거 |
| chany-project | 개선 | 새 작업 기본값 갱신, 기존 승인 정책 보존 |
| chany-publication-review | 유지 | 제작 완료와 최종본 공개 검토 분리 |
| chany-reference-board | 개선 | 사용자 큐레이션·계정·선택형 Metricool 탐색 |
| chany-shortform-recut | 유지 | 긴 영상 재편집은 새 생성과 별개 |
| chany-space-real-estate | 유지 | 실제 공간·치수·조건과 가상 연출 구분 |
| chany-studio | 개선 | 제품/서비스와 레퍼런스를 가장 짧은 제작 경로로 연결 |
| chany-video-assembly | 유지 | 승인 영상의 순서·길이·음향 결합 |
| chany-video-reference-ingest | 유지 | 링크·미리보기·실제 재생의 증거 수준 구분 |
| chany-viral-product-remake | 유지 | 짧은 참조 영상과 제품을 한 번에 받는 진입점 |
| cinematic-director | 개선 | 연출 역할을 유지하며 원본·장면 상태 연결 |
| image-asset-production | 개선 | 인물·배경·소품의 역할별 원본 연결 |

## 검증·배포 기록

- 플러그인 자동 검사: **130개 중 129 통과, 실패 0, 건너뜀 1**. 건너뛴 항목은 검사 환경의 Python에 Pillow가 없어 실행하지 못한 이미지 알파 확인이다.
- reference-preview MCP: **15개 통과**. Pinterest 주소 허용 목록은 변경하지 않았다.
- Claude 플러그인 매니페스트 검증: 통과. Codex/Claude 버전 2.18.0과 마켓플레이스 ID·경로·가이드 일치 확인.
- 별도 읽기 검토: 빈 자료/보존 조건 통과, 비용 옵션 타입 누락, 큐레이션과 전역 출처 제한 충돌을 발견해 수정했다. 재현 회귀와 관련 계약을 확인했다.
- Claude 새 세션: 로컬 2.18 플러그인을 지정하고 읽기 전용 대표 요청을 시도했으나 `Not logged in`으로 실행하지 못했다. 통과로 세지 않았다.
- Codex 새 세션: 현재 사용할 수 있는 독립 새 세션 실행 도구를 확보하지 못해 미검증. 이미 설치된 2.17.0 캐시는 변경하지 않았다.
- 유료 이미지·영상 생성, 사용자 파일의 외부 업로드, 실제 생성 품질 비교, Adobe 앱 렌더는 이번 검증에 포함하지 않았다.
- 공식 사이트 준비 검증: 14개 테스트, TypeScript 확인, 앱·카탈로그 린트, 정적 빌드 통과. 데스크톱과 390px 모바일 화면, 제품 삽입 가이드, 플랫폼별 요청문 표시·복사 완료 표시, Metricool 도움말을 브라우저에서 확인했다. 첫 화면의 세 시작 경로, 최신 모델·Metricool 도움말, 실습 교안과 점검 보고 링크를 2.18 내용으로 준비했다. 공개 배포 결과는 배포 후 기록한다.

자동 검사 통과는 “어떤 제품·레퍼런스라도 완벽하게 동일하게 나온다”는 보증이 아니다. 실제 작업에서는 제품·라벨·UI와 레퍼런스 구도를 각각 비교하고, 모델·입력·작업 수·비용 및 최종 파일을 확인한다.
