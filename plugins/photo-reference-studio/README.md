# Chany's Studio 2.12.0

> **처음 쓰시나요?** 준비물, 첫 요청 예시, 비용 안내는 [저장소 README의 처음 쓰는 분께](../../README.md#처음-쓰는-분께)에 정리돼 있습니다.
> 요청하면 확인 카드 한 장으로 만들 것과 비용을 먼저 보여주고, 승인해야 생성이 시작됩니다.
> 모르는 단어는 [용어 사전](../../docs/GLOSSARY.md)을 보세요.

일반 레퍼런스는 Pinterest 5장 + Meigen 5장, 총 10장을 대화에 표시합니다. 동일 L1·직접 L2 범위 재검색은 자동으로 진행하고 레퍼런스 선택·생성 조건 확인을 통합합니다. [사용법](../../docs/REFERENCE-RECOVERY.md).

Claude와 ChatGPT Work/Codex에서 함께 쓰는 광고 프로젝트 지침을 설정하고, 업종별 여정·증거·연출·컴플라이언스와 공통 제작 워크플로를 결합해 광고·홍보·마케팅·상세/랜딩·콘텐츠를 기획·제작합니다.

## 2축 스킬 구조

2.8.0 추가: Higgsfield 광고 모션 디자인, Genjutsu 영상 부분 수정, GPT Image 2.5 Flare·Sunburst 지원. 현재 이미지 기본값은 GPT Image 2.5입니다. [사용법과 예시](../../docs/HIGGSFIELD-UPDATES.md).

2.7.0 추가: `chany-ai-prompt-reference`가 Meigen 이미지·공개 프롬프트를 분석하고 제품별 제작 프롬프트로 연결합니다. 기본 6장 또는 요청 수량, L1→직접 L2 검색, 대화 안 이미지 표시를 적용합니다. [사용법과 예시](../../docs/MEIGEN-REFERENCES.md).

2.6.0은 구매 동기 분석과 Meta 광고 벤치마킹을 영상·단일 이미지·캐러셀 제작에 연결합니다. 전체 광고 본문·제목·CTA와 연결 목적지 검수도 포함합니다. [사용법과 프롬프트 예시](../../docs/PERFORMANCE-ADS.md).

ChatGPT Work에서는 `@스킬명`, Codex에서는 `$스킬명`으로 명시 호출합니다. Claude Cowork에서는 `/project-studio`를 제외한 전문 작업을 자연어로 요청하면 설명에 맞는 스킬이 자동 선택됩니다.

### 업종 전문 오버레이

업종 스킬은 구매·참여 여정, 의사결정자, 증거 구조, 촬영·연출·모션, 카피 경계, 채널 산출물과 실패 기준을 `industry direction packet`으로 정의합니다. 이 패킷은 광고·홍보·마케팅·상세/랜딩·콘텐츠 제작에 사용되며, 업종 스킬 자체가 최종 미디어를 만들지는 않습니다.

| 업종 스킬 | 핵심 전문 범위 |
| --- | --- |
| ChatGPT `@chany-professional-services` · Codex `$chany-professional-services` | 일반·면허 전문 서비스의 신뢰, 상담 리드, 자격·성과·추천 주장 |
| ChatGPT `@chany-education-marketing` · Codex `$chany-education-marketing` | 학습자·비용 부담자 여정, 모집·등록, 성과·인증·미성년자 보호 |
| ChatGPT `@chany-healthcare-marketing` · Codex `$chany-healthcare-marketing` | 환자 교육·접근, 의료 주장·개인정보와 필수 사람 검토 |
| ChatGPT `@chany-food-dining` · Codex `$chany-food-dining` | 방문·예약·주문, 메뉴·시간대·배달 연출, 가격·식이 정보 |
| ChatGPT `@chany-hospitality-travel` · Codex `$chany-hospitality-travel` | 영감→비교→예약→체류 여정, 객실·편의시설·요금·문화적 권리 |
| ChatGPT `@chany-space-real-estate` · Codex `$chany-space-real-estate` | 건축·상업공간·매물의 공간 사실·치수·공시·CGI 투명성 |
| ChatGPT `@chany-digital-product-marketing` · Codex `$chany-digital-product-marketing` | 소비자 앱·양면 플랫폼·B2B SaaS의 활성화·유동성·구매위원회·UI 증거 |
| ChatGPT `@chany-live-culture-events` · Codex `$chany-live-culture-events` | 공연·전시·행사·축제의 티켓·참여, 프로그램 사실·권리·현장 안전 |
| ChatGPT `@chany-automotive-marketing` · Codex `$chany-automotive-marketing` | 자동차·EV·이륜·상용차의 모델 잠금·주행 안전·주행거리·금융 증거 |
| ChatGPT `@chany-consumer-tech-marketing` · Codex `$chany-consumer-tech-marketing` | 전자·연결 기기의 기능 데모·호환성·성능·인증·구성품 |
| ChatGPT `@chany-corporate-employer` · Codex `$chany-corporate-employer` | 기업 평판·고용 브랜드의 EVP·채용·문화 증거와 임직원 권리 |

모든 결과는 게시 전 해당 관할의 최신 규정, 게재 플랫폼 정책, 근거와 권리를 다시 확인하고 책임 있는 사람의 검토를 받아야 합니다.

### 공통 제작 스킬

| 공통 스킬 | 담당 작업 |
| --- | --- |
| ChatGPT `@chany-motion-design` · Codex `$chany-motion-design` | Higgsfield 기반 광고 타이포·혜택 도식·로고·CTA 모션, 연결 확인 후 실행 |
| ChatGPT `@chany-studio` · Codex `$chany-studio` | 업종 오버레이와 여러 결과물을 연결하는 캠페인 라우터 |
| ChatGPT `@chany-project` · Codex `$chany-project` | 프로젝트 인터뷰, `AGENTS.md`, 브리프·상태와 런타임별 에이전트 설정 |
| ChatGPT `@chany-marketing-brief` · Codex `$chany-marketing-brief` | 캠페인 브리프 또는 실제 성과 기반 다음 한 변수 실험 |
| ChatGPT `@chany-jtbd-persona` · Codex `$chany-jtbd-persona` | 제품·서비스 구매 동기·장벽과 근거 기반 고객 분석 |
| ChatGPT `@chany-meta-ad-research` · Codex `$chany-meta-ad-research` | Meta 광고 레퍼런스의 디자인·훅·카피·CTA 분석 |
| ChatGPT `@chany-product-assets` · Codex `$chany-product-assets` | 투명 누끼, 순백 팩샷과 원본 클린업 |
| ChatGPT `@chany-reference-board` · Codex `$chany-reference-board` | 사이트 미지정 시 Pinterest 5장 + Meigen 5장(총 10장), Pinterest만 지정 시 기본 6장, 또는 요청 수량을 대화에 직접 표시 |
| ChatGPT `@chany-commercial-photo-reference` · Codex `$chany-commercial-photo-reference` | Production Paradise 전문 광고·라이프스타일 사진 레퍼런스 |
| ChatGPT `@chany-award-ad-reference` · Codex `$chany-award-ad-reference` | Ads of the World·D&AD·The One Show 수상 광고·캠페인 벤치마크 |
| ChatGPT `@chany-ai-prompt-reference` · Codex `$chany-ai-prompt-reference` | Meigen 이미지·원본 프롬프트 분석과 제품별 제작 프롬프트 |
| ChatGPT `@chany-creative-direction` · Codex `$chany-creative-direction` | 초보자 요청을 세 가지 브랜드 콘셉트, 추천 방향과 전문가 제작 프롬프트로 전환 |
| ChatGPT `@chany-video-reference-ingest` · Codex `$chany-video-reference-ingest` | YouTube·Instagram 등 영상 페이지를 사용자 허가 브라우저 캡처나 첨부 파일로 분석 준비 |
| ChatGPT `@chany-campaign-visual` · Codex `$chany-campaign-visual` | 연출컷과 마스터 키비주얼 |
| ChatGPT `@chany-detail-page` · Codex `$chany-detail-page` | 상세/랜딩페이지 이미지 모듈 |
| ChatGPT `@chany-ad-creative` · Codex `$chany-ad-creative` | 단일 이미지·캐러셀 광고, 게시물 카피·CTA, 포스터·배너 |
| ChatGPT `@chany-image-edit` · Codex `$chany-image-edit` | 제한된 부분 수정과 복원 |
| ChatGPT `@chany-model-fashion` · Codex `$chany-model-fashion` | 성인 모델과 원본 의류 착장 |
| ChatGPT `@chany-campaign-video` · Codex `$chany-campaign-video` | 제품 광고·브랜드 필름·프로모션 영상의 콘셉트, 기준 스틸, 생성과 검수 |
| ChatGPT `@chany-media-production-loop` · Codex `$chany-media-production-loop` | 승인된 이미지·캠페인 영상의 작업 ID, 비용 승인, 화면 검수, 제한된 결함 교정과 안전한 재개 |
| ChatGPT `@chany-video-assembly` · Codex `$chany-video-assembly` | 승인 영상 조립, 지정 구간 교체, 규격 통일, 훅 변형과 검증 |
| ChatGPT `@chany-preflight` · Codex `$chany-preflight` | 영상·프레임·배치 작업 전 실행 환경과 한글 폰트 점검 |
| ChatGPT `@chany-publication-review` · Codex `$chany-publication-review` | 정확한 최종 카피·오퍼·에셋 버전의 근거·권리·채널·최종 렌더 게시 전 검수 |

기존 `@auto-photo-production`(ChatGPT Work)과 `$auto-photo-production`(Codex)은 호환 호출로만 남아 새 `chany-studio` 라우터를 안내합니다.

## 처음 사용하기

새 프로젝트에서는 먼저 지침을 설정합니다.

```text
Claude Cowork: /project-studio 신제품 선크림의 상세페이지와 Meta 광고 프로젝트를 설정해줘.
ChatGPT Work: @chany-project로 현재 폴더를 같은 프로젝트로 설정해줘.
Codex: $chany-project로 현재 폴더를 같은 프로젝트로 설정해줘.
호환 별칭: /project-studio 현재 폴더를 같은 프로젝트로 설정해줘.
```

ChatGPT의 `/project-studio`는 슬래시 메뉴 명령이 아니라 일반 메시지로 전달될 때 동작하는 호환 별칭입니다.

Claude Cowork에서는 프로젝트 입력·첨부·기존 기록을 먼저 읽고, 부족한 캠페인 정보만 네이티브 **Ask your question** 카드로 묻습니다. 첫 화면은 최대 3개 질문이며 이미 확인한 내용은 다시 묻지 않습니다. 설계안 뒤에는 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드가 나타나고, 생성 승인을 선택하기 전에는 Chany 관리 파일을 쓰지 않습니다. 해당 UI가 노출되지 않거나 빈 응답을 반환하면 승인으로 추정하지 않고 최소 텍스트 질문으로 전환하며, 명시적으로 취소하면 재질문하지 않습니다.

### `/project-studio`로 시작하기

보통 `/project-studio <설명>` 하나로 시작합니다. 설정은 작업 폴더에 있는 다른 도구의 파일을 수정·삭제·이동하지 않고, `CLAUDE.md`·`AGENTS.md` 안의 다른 도구 구역도 그대로 둡니다.

```text
Claude Cowork:
/project-studio 반려동물 예약 플랫폼의 출시 광고와 랜딩페이지 제작 구조를 설정해줘.

ChatGPT Work:
@chany-project로 반려동물 예약 플랫폼의 출시 광고와 랜딩페이지 제작 구조를 설정해줘.

Codex:
$chany-project로 반려동물 예약 플랫폼의 출시 광고와 랜딩페이지 제작 구조를 설정해줘.
```

ChatGPT의 정식 호출은 `@chany-project`이며 `/project-studio`를 ChatGPT 슬래시 메뉴 명령으로 안내하지 않습니다.

설정 후 새 작업을 열고 다음 순서로 제작합니다.

1. 제품, 공간, 차량, UI, 프로그램, 사람 등 업종의 사실 기준이 되는 원본을 제공합니다.
2. 목표, 채널, 필요한 산출물을 말하면 업종 오버레이가 `industry direction packet`을 만듭니다.
3. 정확히 들어가야 하는 가격·할인·기간·CTA, 증거와 법적 문구를 텍스트로 제공합니다.
4. 영상 레퍼런스 페이지가 있으면 사용자가 호출한 브라우저 확장 캡처 또는 첨부 파일로 관찰 범위를 먼저 고정합니다.
5. 로컬 영상·프레임·배치 작업이 있으면 먼저 현재 환경의 실제 도구와 승인 문구의 한글 글리프를 점검합니다.
6. Higgsfield 작업이 있으면 호스트의 로그인 화면에서 인증합니다.
7. 여러 유료 생성이 필요하면 라이브 작업·입력 역할·비용·산출물 수와 승인 지점을 확인합니다.
8. `chany-creative-direction`이 일반 언어의 요청을 브랜드 코어·감성 에디토리얼·트렌드 포워드 세 방향으로 발전시키고 하나를 추천한 뒤, 구도·조명·재질·타이포·보존·제외·검수 조건이 명확한 프롬프트로 컴파일합니다.
9. 공통 제작 스킬이 키비주얼, 광고, 상세/랜딩과 캠페인 영상 사양을 승인 방향에서 만들고, `chany-media-production-loop`가 승인된 이미지·영상 생성 작업을 안정적인 ID로 실행·검수합니다.
10. 캠페인 영상 클립은 모두 승인된 뒤 지정 규격으로 조립하거나 승인 구간만 교체하고, 요청 시 훅 하나만 바꾼 변형과 빈 성과 입력표를 만듭니다.
11. 실제 성과가 제공되면 추적·비교 가능성·표본을 확인한 뒤 다음 라운드의 한 변수만 정합니다.

아래에서 사용하는 플랫폼의 첫 줄 하나를 선택하고 나머지 요청을 이어 붙입니다.

```text
ChatGPT Work: @chany-studio로 이 제품의 마스터 키비주얼, 상세페이지 모듈 5장,
Codex: $chany-studio로 이 제품의 마스터 키비주얼, 상세페이지 모듈 5장,
1:1·9:16 광고소재와 15초 제품 브랜드 필름을 같은 캠페인으로 만들어줘.
```

### 상세/랜딩페이지와 게시 전 검수

`chany-detail-page`는 `plan`, `audit`, `produce` 세 모드를 지원합니다. `plan`은 페이지 구조와 촬영 필요 항목, `audit`은 기존 페이지의 증거 범위와 누락된 촬영·자료, `produce`는 이름이 정해진 모듈을 만듭니다. 생성 이미지는 빠진 사실 증거를 대신하지 않습니다.

```text
ChatGPT Work: @chany-detail-page로 기존 랜딩페이지를 audit하고 증거·촬영 공백을 정리해줘.
Codex: $chany-detail-page로 기존 랜딩페이지를 audit하고 증거·촬영 공백을 정리해줘.

ChatGPT Work: @chany-publication-review로 최종 광고의 정확한 카피·오퍼·에셋 버전을 게시 전 검수해줘.
Codex: $chany-publication-review로 최종 광고의 정확한 카피·오퍼·에셋 버전을 게시 전 검수해줘.
```

게시 검수는 정확한 카피, 오퍼, 목적지, 에셋, 크롭, 레이아웃과 최종 렌더 버전에 묶입니다. 초안 기획과 제작은 허용하지만 근거, 권리, 검토 시점의 공식 1차 출처 또는 이름이 확인된 책임 검토자가 빠지면 공개는 보류합니다. 카피·크롭·레이아웃이 바뀌면 새 버전으로 다시 검수해야 하며, 결과를 법률 자문이나 법적 승인으로 부르지 않습니다.

## 레퍼런스와 원본

- 승인 원본과 사실 자료는 제품, 음식, 차량, 공간, UI, 프로그램, 모델, 의류와 카피의 정체성을 결정합니다.
- 사이트를 정하지 않은 범용 비주얼 보드는 `chany-reference-board`가 Pinterest 5장 + Meigen 5장(총 10장)으로 보여주며, 두 사이트는 서로 후보를 대신 채우지 않습니다.
- 사이트를 지정하면 경로 하나만 씁니다. Pinterest만은 `chany-reference-board`, Meigen 이미지·원본 프롬프트는 `chany-ai-prompt-reference`, 전문 광고·라이프스타일 사진은 `chany-commercial-photo-reference`의 Production Paradise, 수상 광고·캠페인 사례는 `chany-award-ad-reference`의 Ads of the World·D&AD·The One Show로 분리합니다.
- 사이트를 지정한 보드는 그 경로만 사용하며 후보가 부족해도 다른 경로로 보충하지 않습니다. Stocksy, ShotDeck, Death to Stock은 허용하지 않습니다. Pinterest용 `reference-preview` 연결은 계속 공개 Pin 페이지와 `i.pinimg.com`만 받습니다.
- 기본 표시 수량은 사이트 미지정 시 10장(Pinterest 5 + Meigen 5), 사이트 하나를 지정하면 6장이며, 사용자가 양의 정수로 장수를 지정하면 정확히 그 수량을 사용합니다. 허용된 두 검색에서 후보가 부족하면 수량을 조용히 줄이지 않고 미완성으로 보고합니다.
- 모든 레퍼런스 경로는 업종 taxonomy의 L1 광역 카테고리 1개를 먼저 검색하고, 필요할 때만 같은 경로의 직접 L2 하위 카테고리 0~1개를 추가합니다.
- 한 작업에서 여러 L2 형제나 세 번째 의미 검색어를 쓰지 않으며 스타일·렌즈·지역·색·무드·플랫폼 modifier도 검색어에 붙이지 않습니다.
- 검색 결과는 복제하지 않고 구도, 조명, 배경, 재질, 색 관계와 정보 위계를 분석하는 방향 자료로 사용합니다. 분석어를 새 검색어로 확장하지 않습니다.
- 각 레퍼런스 스킬은 후보를 기본 수량(통합 10장, 단일 사이트 6장) 또는 요청 수량만큼 링크나 HTML이 아닌 현재 대화의 실제 이미지로 보여줍니다.
- Claude Cowork의 Pinterest 직접 미리보기에는 Node.js 18 이상과 로컬 `reference-preview` 연결이 필요합니다. 다른 두 경로는 호스트가 제공하는 공개 이미지 표시 기능을 사용하며 Pinterest 전용 연결에 URL을 보내지 않습니다.
- 최신 트렌드는 검색어에 넣지 않고 후보 선별 뒤 브랜드 적합성을 평가해 한 가지 중심 장치나 보조 포인트로만 번역합니다. 플랫폼 규격과 프롬프팅은 공식 문서로 확인하되 그 예시 이미지는 레퍼런스로 사용하지 않습니다.
- YouTube·Instagram 등 영상 페이지는 다운로드하지 않습니다. 사용자가 브라우저에서 직접 호출한 활성 탭 캡처, 실제 미디어 URL로 확인된 파일 또는 첨부한 로컬 영상만 정밀 분석하며, 화면에서 일부만 관찰했다면 그 구간까지만 분석했다고 표시합니다.
- 영상 레퍼런스에서는 훅·비트 길이·공개 순서·카메라와 사운드 기능만 새 제품에 맞게 재설계합니다. 원 영상의 인물·제품·카피·음악·브랜드·고유 시퀀스나 캡처 픽셀은 새 광고 자산으로 재사용하지 않습니다.

## 이미지 생성 기본 모델과 Higgsfield 경계

생성형 정적 이미지와 부분 편집은 **GPT Image 2.5**(`gpt_image_2_5`)가 기본입니다. 호출 전 현재 도구 스키마에서 정확한 모델을 선택하거나 현재 문서·런타임 정보로 그 모델이 사용됨을 확인하고, 요청 기본값과 실제 해석 모델을 함께 표시합니다. 확인되지 않은 공급자 기본값을 GPT Image 2.5라고 부르지 않습니다. 다른 모델은 사용자 지정, 승인된 프로젝트 정책 또는 검증된 필수 기능 부재가 있을 때만 해당 범위에 한해 승인받아 사용합니다. 모델이나 공급자가 바뀌면 해당 견적·유료 승인·크리에이티브 승인도 다시 받아야 합니다. 영상·음성·클립 조립에는 이 기본값을 강제하지 않습니다.

유료 생성 전에는 연결된 도구의 **현재 스키마와 라이브 카탈로그**를 확인합니다. 무료 견적·비용 미리보기가 있으면 먼저 실행하고, 최종 프롬프트, 입력별 역할, 확인된 모델·워크플로와 옵션, 서버 조정값, 공급자가 반환한 크레딧·잔액 정보, 출력 수와 배치 한도를 보여준 뒤 승인을 받습니다. `gpt_image_2_5` 기본 정책을 제외한 기억 속 모델명이나 이전 가격표를 현재 사실처럼 사용하지 않습니다.

시간 초과, 연결 끊김 또는 결제·생성 여부가 불명확한 결과는 그대로 다시 제출하지 않고 원래 작업 영수증, 상태 또는 기록을 먼저 확인합니다. 프롬프트 의미, 입력 또는 역할, 모델·워크플로, 유료 옵션, 수량, 길이, 비율, 언어가 바뀌면 새 사전검토와 승인을 받아야 합니다.

- 연결된 Higgsfield MCP에서는 현재 스키마가 노출하는 영상·Soul 캐릭터·오디오 작업을 실행합니다. 정적 이미지는 승인된 범위별 대체 모델일 때만 Higgsfield로 전환합니다.
- 새 Marketing Studio의 템플릿 방식은 현재 Higgsfield 웹에서 완료해야 합니다.
- 기능이 도구에 노출되지 않았으면 사전 기획과 정확한 화면 안내까지만 제공하며 실행 완료로 표현하지 않습니다.
- MCP와 자동화 채널의 생성은 일반 크레딧을 사용할 수 있으므로 다단계 작업 전에 범위를 확인합니다.

## 연결과 데이터

Higgsfield 기능 사용 시 선택한 원본과 레퍼런스가 Higgsfield로 전송될 수 있습니다. 브라우저 확장 캡처는 로컬 저장이 기본이며 Higgsfield나 다른 외부 서비스로 보내기 전에 별도 업로드 승인을 받습니다. 로컬 `reference-preview`는 Pinterest의 공개 미리보기만 불러옵니다. 비밀번호, API 키, 액세스 토큰이나 인증 코드는 대화에 입력하지 말고 호스트의 인증 화면을 사용하세요.

공식 설치·사용설명서: https://jolly-phlox-79c.notion.site/Chany-s-Studio-3c783e9464668140b794ee076be24406

GitHub 마켓플레이스: https://github.com/chany-studio/chany-studio
