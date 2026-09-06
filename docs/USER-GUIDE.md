# Chany's Studio 사용 가이드

Chany's Studio는 Claude와 ChatGPT Work에서 같은 프로젝트 지침을 사용하며, 업종별 고객 여정과 증거 기준에 맞춰 광고·마케팅·상세페이지·홍보 콘텐츠를 만드는 전문 스킬 모음입니다. 제품과 음식뿐 아니라 서비스, 교육, 의료, 여행, 공간, 디지털 제품, 자동차, 소비자 기술, 기업·채용, 공연·행사까지 다룹니다.

## 어떤 스킬을 써야 하나요?

Chany's Studio 2.5.0은 두 축, 하나의 전문 크리에이티브 디렉션 계층과 하나의 공통 미디어 실행 루프를 함께 사용합니다.

1. **업종 오버레이**는 고객이 왜 선택하는지, 어떤 근거가 필요한지, 어떤 표현을 피해야 하는지와 그 업종다운 촬영·연출 방향을 정합니다.
2. **공통 제작 스킬**은 브리프, 레퍼런스 보드, 키비주얼, 상세페이지, 광고, 편집, 모델·패션과 콘셉트형 캠페인 영상 같은 실제 산출물을 설계합니다. 생성 실행과 재개는 `chany-media-production-loop`가 공통으로 추적합니다.

업종이 분명하면 기본적으로 주 업종 스킬 하나를 먼저 선택하고 필요한 제작 스킬을 이어 붙입니다. 한 가지 결과가 분명하면 해당 제작 스킬까지 함께 지정하고, 키비주얼·상세페이지·광고·캠페인 영상처럼 여러 결과가 연결되면 ChatGPT Work의 `@chany-studio` 또는 Codex의 `$chany-studio`에 전체 조정을 맡깁니다. 업종이 겹치더라도 서로 다른 규제나 구매 행동을 동시에 다루는 경우가 아니면 주 업종을 두 개 이상 선택하지 않습니다.

ChatGPT Work의 명시 호출은 `@스킬명`, Codex의 명시 호출은 `$스킬명`이며 자연어만으로도 설명에 맞는 스킬을 자동 선택할 수 있습니다. Claude Cowork에서는 `/project-studio` 슬래시 명령을 제외한 전문 작업을 자연어로 요청해 자동 선택합니다.

아래 예시의 `ChatGPT Work`와 `Codex` 호출 줄은 서로 대안입니다. 사용하는 플랫폼의 한 줄만 선택하고 이어지는 요청을 함께 입력하세요.

### 공통 제작·운영 스킬

| 원하는 결과 | 사용할 스킬 |
| --- | --- |
| 새 프로젝트 지침·브리프·에이전트 설정 | ChatGPT `@chany-project` · Codex `$chany-project` |
| 전체 캠페인 또는 여러 산출물 | ChatGPT `@chany-studio` · Codex `$chany-studio` |
| 캠페인 브리프 또는 성과 기반 다음 실험 | ChatGPT `@chany-marketing-brief` · Codex `$chany-marketing-brief` |
| 누끼·순백 팩샷·제품 클린업 | ChatGPT `@chany-product-assets` · Codex `$chany-product-assets` |
| Pinterest 레퍼런스 기본 6장 또는 요청 수량 비교 | ChatGPT `@chany-reference-board` · Codex `$chany-reference-board` |
| 전문 광고·라이프스타일 사진 레퍼런스 | ChatGPT `@chany-commercial-photo-reference` · Codex `$chany-commercial-photo-reference` |
| 수상 광고·캠페인 벤치마크 | ChatGPT `@chany-award-ad-reference` · Codex `$chany-award-ad-reference` |
| 세련된 콘셉트 3안·추천 방향·전문 제작 프롬프트 | ChatGPT `@chany-creative-direction` · Codex `$chany-creative-direction` |
| YouTube·Instagram 영상 레퍼런스의 브라우저 캡처·분석 준비 | ChatGPT `@chany-video-reference-ingest` · Codex `$chany-video-reference-ingest` |
| 제품 연출컷·마스터 키비주얼 | ChatGPT `@chany-campaign-visual` · Codex `$chany-campaign-visual` |
| 상세페이지 이미지 모듈 | ChatGPT `@chany-detail-page` · Codex `$chany-detail-page` |
| 광고·포스터·배너·채널 변형 | ChatGPT `@chany-ad-creative` · Codex `$chany-ad-creative` |
| 기존 이미지 부분 수정 | ChatGPT `@chany-image-edit` · Codex `$chany-image-edit` |
| 성인 모델·패션 착장 | ChatGPT `@chany-model-fashion` · Codex `$chany-model-fashion` |
| 제품 광고·브랜드 필름·프로모션 영상 | ChatGPT `@chany-campaign-video` · Codex `$chany-campaign-video` |
| 이미지·캠페인 영상 생성 실행·재개·화면 검수 | ChatGPT `@chany-media-production-loop` · Codex `$chany-media-production-loop` |
| 승인 영상 조립·컷 교체·훅 변형·검증 | ChatGPT `@chany-video-assembly` · Codex `$chany-video-assembly` |
| 로컬 미디어 도구·한글 폰트 점검 | ChatGPT `@chany-preflight` · Codex `$chany-preflight` |
| 최종 광고·상세페이지·메시지·캠페인 영상 게시 검토 | ChatGPT `@chany-publication-review` · Codex `$chany-publication-review` |

### 업종 오버레이 11개

| 업종 | 사용할 스킬 | 대표 용도 |
| --- | --- | --- |
| 전문 서비스 | ChatGPT `@chany-professional-services` · Codex `$chany-professional-services` | 컨설팅, 자문, 전문직, 리드 확보 |
| 교육 | ChatGPT `@chany-education-marketing` · Codex `$chany-education-marketing` | 학교, 학원, 강의, 대학, 에듀테크, 모집 |
| 헬스케어 | ChatGPT `@chany-healthcare-marketing` · Codex `$chany-healthcare-marketing` | 병원, 의원, 치과, 웰니스, 재활, 정신건강, 원격의료 |
| 식당·카페/F&B | ChatGPT `@chany-food-dining` · Codex `$chany-food-dining` | 식당, 카페, 음료, 포장, 배달 |
| 호텔·여행 | ChatGPT `@chany-hospitality-travel` · Codex `$chany-hospitality-travel` | 호텔, 리조트, 숙박, 여행지, 예약형 체험 |
| 공간·인테리어·부동산 | ChatGPT `@chany-space-real-estate` · Codex `$chany-space-real-estate` | 건축, 인테리어, 상업 공간, 매물 홍보 |
| 디지털 제품 | ChatGPT `@chany-digital-product-marketing` · Codex `$chany-digital-product-marketing` | 소비자 앱, 플랫폼, B2B SaaS |
| 자동차·모빌리티 | ChatGPT `@chany-automotive-marketing` · Codex `$chany-automotive-marketing` | 자동차, 전기차, 오토바이, 상용차 |
| 소비자 기술 | ChatGPT `@chany-consumer-tech-marketing` · Codex `$chany-consumer-tech-marketing` | 전자제품, 웨어러블, 연결형 기기 |
| 기업·채용 | ChatGPT `@chany-corporate-employer` · Codex `$chany-corporate-employer` | 기업 브랜드, 평판, 채용, 조직문화 |
| 공연·전시·행사·지역축제 | ChatGPT `@chany-live-culture-events` · Codex `$chany-live-culture-events` | 공연, 전시, 컨퍼런스, 행사, 문화·지역축제 |

Claude Cowork에서는 스킬 이름을 외울 필요 없이 “이 호텔의 예약 전환 캠페인”처럼 업종과 목표를 자연어로 말하면 해당 업종 오버레이를 자동 선택합니다. ChatGPT Work나 Codex에서도 자연어 자동 선택을 사용할 수 있지만, 재현 가능한 작업 기록이 필요하면 위의 명시 호출을 권장합니다.

### 업종 선택과 체인 예시

업종 오버레이가 전략과 증거 기준을 넘겨주면 공통 제작 스킬이 결과물을 만듭니다. 대표 체인은 다음과 같습니다.

```text
식당 오픈 캠페인
chany-food-dining → chany-marketing-brief → chany-reference-board → chany-creative-direction → chany-campaign-visual → chany-ad-creative

호텔 예약 전환
chany-hospitality-travel → chany-marketing-brief → chany-reference-board → chany-creative-direction → chany-campaign-visual → chany-detail-page

병원·의원 홍보
chany-healthcare-marketing → chany-marketing-brief → chany-ad-creative → chany-publication-review

SaaS 제품 데모 영상
chany-digital-product-marketing → chany-marketing-brief → chany-campaign-video → chany-media-production-loop → chany-video-assembly

제품 브랜드 필름
chany-consumer-tech-marketing → chany-marketing-brief → chany-campaign-video → chany-media-production-loop → chany-video-assembly

채용 캠페인
chany-corporate-employer → chany-marketing-brief → chany-campaign-video 또는 chany-ad-creative

지역축제 홍보
chany-live-culture-events → chany-reference-board → chany-creative-direction → chany-campaign-visual → chany-ad-creative
```

위 체인의 `chany-reference-board`는 기본 Pinterest 경로입니다. 전문 광고사진이 핵심이면 `chany-commercial-photo-reference`, 수상 광고 아이디어와 메시지 장치가 핵심이면 `chany-award-ad-reference`로 한 번만 교체합니다.

명시 호출 예시:

```text
ChatGPT Work
@chany-food-dining과 @chany-marketing-brief로 신규 브런치 매장의 오픈 캠페인을 설계해줘.

Codex
$chany-hospitality-travel과 $chany-detail-page로 객실 예약 상세페이지 방향을 만들어줘.

Claude Cowork
신규 지역축제의 방문 전환 캠페인이야. 업종별 전략과 증거 기준을 먼저 잡고 레퍼런스 보드와 9:16 광고까지 이어줘.
```

## 0. 프로젝트 설정

프로젝트를 처음 시작할 때 한 번 실행합니다. 현재 작업 폴더를 읽고 이미 제공된 정보는 다시 묻지 않으며, 부족한 핵심 정보만 한 번에 최대 3개씩 확인합니다. 파일을 쓰기 전 프로젝트 요약, 스킬 체인과 변경 파일을 보여주고 승인을 기다립니다.

```text
Claude Cowork
/project-studio 신제품 선크림의 상세페이지, Meta 광고 3종과 15초 브랜드 필름 프로젝트를 설정해줘.

ChatGPT Work
@chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.

Codex
$chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.

일반 메시지 호환 별칭
/project-studio 신제품 선크림 광고 프로젝트를 설정해줘.
```

Claude에서 `/project-studio`가 보이지 않으면 `/photo-reference-studio:project-studio`를 사용합니다. ChatGPT Work의 공식 명시 호출은 `@chany-project`, Codex는 `$chany-project`입니다. ChatGPT 또는 Codex에 `/project-studio …`가 일반 메시지로 전달되면 호환 별칭으로 처리하지만 ChatGPT 슬래시 메뉴에 등록되는 명령은 아닙니다.

Claude Cowork에서는 입력·첨부·기존 프로젝트 기록에서 확인되지 않은 항목만 **Ask your question** 카드로 표시합니다. 한 화면의 질문은 최대 3개이며, 필요한 경우 한 번의 차단 항목 후속 질문만 이어집니다. Moai가 이미 수집한 일반 프로젝트 맥락은 재사용하고 광고 목적·타깃·산출물·채널·권리·실행 방식처럼 빠진 캠페인 정보만 보완합니다. 마지막에는 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드가 표시되며, 생성 승인을 선택해야 Chany 관리 파일이 작성됩니다. 같은 요청에서 새 Moai 초기화도 실행한다면 Moai는 이 카드보다 앞서 자체 미리보기와 승인으로 자신의 파일을 만들 수 있습니다.

질문 카드가 현재 Claude 호스트에 노출되지 않거나 빈 답·시간 초과·기술 오류가 돌아오면 플러그인은 이를 답변이나 승인으로 간주하지 않고 같은 최소 항목을 일반 텍스트로 묻습니다. 사용자가 `취소`를 선택하거나 명시적으로 중단하면 재질문 없이 Chany 단계를 종료합니다. ChatGPT Work와 Codex에서는 각 호스트의 구조화 입력 기능이 있으면 그것을 사용하고 없으면 간결한 텍스트 확인으로 전환합니다.

### Moai와 함께 쓸 때

두 플러그인의 프로젝트 명령은 역할이 다릅니다.

- `/project`는 **Moai**가 소유하며 일반 프로젝트 구조와 개발 맥락을 만듭니다.
- `/project-studio`는 **Chany's Studio**가 소유하며 광고·콘텐츠 제작 맥락을 만듭니다.
- 기존 `.moai/**`는 Moai의 정본이므로 Chany's Studio가 수정·삭제·이동하거나 백업하지 않고 읽기 전용으로 재사용합니다.
- 이미 성공적으로 만들어진 Moai 산출물이 있으면 Chany's Studio가 제품·구조·기술 맥락을 자동으로 읽어 같은 질문을 반복하지 않습니다.

기본은 프로젝트와 광고 범위를 한 번에 말하는 것입니다. 이 호출은 기존 Moai 상태를 자동 감지하지만, 새 Moai 실행은 현재 호스트가 정확한 스킬을 같은 요청 안에서 호출하고 기다릴 수 있다고 확인된 경우에만 체인합니다.

```text
Claude Cowork
/project-studio 신규 호텔 예약 사이트의 예약 전환 광고와 상세페이지 제작 환경을 설정해줘.

ChatGPT Work
@chany-project로 신규 호텔 예약 사이트의 광고·콘텐츠 제작 환경을 설정해줘.

Codex
$chany-project로 신규 호텔 예약 사이트의 광고·콘텐츠 제작 환경을 설정해줘.
```

일반 `/project-studio` 초기화가 Moai 상태를 자동 감지합니다. 기존 `.moai/project/*`가 있으면 다시 실행하지 않고 읽어 재사용합니다. 기록이 없으면 단순 설치 표시가 아니라 현재 호스트의 실제 in-process 호출 기능을 확인한 경우에만 통합 승인안에 Moai `project` 단계를 포함합니다. 기능이 없으면 Chany 단독 설정을 진행하고 아래 수동 2단계를 안내합니다.

```text
Claude Cowork: /project-studio --with-moai 신규 호텔 예약·광고 프로젝트를 함께 설정해줘.
ChatGPT Work: @chany-project moai-chain으로 신규 호텔 예약·광고 프로젝트를 함께 설정해줘.
Codex: $chany-project --with-moai 신규 호텔 예약·광고 프로젝트를 함께 설정해줘.
```

Moai가 설치되지 않았거나 현재 세션에서 실제 호출할 수 없으면 Chany's Studio가 `/project`를 흉내 내지 않습니다. 이 경우 Chany 전용 설정만 계속하거나, Moai가 callable한 세션에서 Moai project를 먼저 완료한 뒤 `@chany-project` 또는 `$chany-project`를 실행합니다.

`--with-moai` 또는 `moai-chain`은 Moai 단계를 필수로 요구하므로 Moai나 같은 요청 내 호출 기능이 확인되지 않으면 Chany 쓰기 전에 중단하고 수동 2단계를 알려줍니다. `--chany-only`는 Moai 감지를 건너뜁니다. 플래그가 없어도 Moai의 변경 미리보기와 승인 절차는 항상 유지됩니다.

Moai의 일반 프로젝트 기반을 별도로 검토하고 싶거나 현재 호스트가 플러그인 간 같은 요청 내 호출을 지원하지 않을 때는 Moai `project`를 먼저 실행한 뒤 Chany 프로젝트 설정을 이어가는 수동 2단계를 사용합니다.

프로젝트 기반이 준비된 뒤에는 요청 범위에 맞는 Moai 전문 스킬도 자동으로 확인합니다. 한국 광고 주장, 문자·이메일·푸시 발송 조건, 협찬·추천·사용권, 최신 법령·MFDS 검토, 캠페인·디자인 보강, Higgsfield 실행처럼 실제로 필요한 단계만 제안합니다. 설치되어 있지 않으면 결과를 흉내 내지 않고 Chany 단독 체인으로 진행하며, 근거나 검토자가 부족한 산출물은 초안 상태에 둡니다.

Moai 결과는 `사용한 정확한 스킬 이름 → 검토 대상 버전 → 확인한 출처와 날짜 → 발견사항 → Chany의 다음 담당 스킬` 형태로 넘깁니다. Moai가 일반 프로젝트나 전문 검토를 맡더라도 Chany's Studio는 캠페인 브리프, 원본·카피 잠금, 유료 생성 승인, 최종 렌더와 게시 상태를 계속 관리합니다.

생성되는 공통 구조:

```text
AGENTS.md                         공통 지침과 ChatGPT Work 위임 규칙
CLAUDE.md                         @AGENTS.md를 불러오는 Claude용 연결 파일
.chany-studio/project.json        비밀값 없는 프로젝트 설정
.chany-studio/brief.md            승인 사실·카피·산출물·제약
.chany-studio/state.md            승인·원본·카피·키비주얼·출력 진행 상태
.claude/agents/<role>.md          Claude 프로젝트 에이전트
.codex/agents/<role>.toml         로컬 Codex 프로젝트 에이전트
```

`AGENTS.md`가 공통 정본이므로 두 런타임의 프로젝트 규칙이 따로 노는 문제를 줄입니다. ChatGPT Work는 이 파일의 역할·위임 규칙으로 호스팅 하위 에이전트를 사용하며, `.codex/agents/*.toml`은 로컬 Codex 클라이언트용입니다. 기존 파일은 삭제하거나 전체 덮어쓰지 않고 Chany's Studio 관리 구역만 갱신하며, 수정 전 원본은 `.chany-studio/backups/`에 보관합니다. 같은 위치에 `AGENTS.override.md`가 있으면 우선순위 충돌과 안전한 연결 방법을 먼저 보여줍니다. 초기화 자체는 Higgsfield를 호출하거나 크레딧을 사용하지 않습니다.

후속 관리:

```text
ChatGPT: @chany-project status
ChatGPT: @chany-project update 상세페이지에 일본어 버전을 추가해줘.
ChatGPT: @chany-project doctor

Codex: $chany-project status
Codex: $chany-project update 상세페이지에 일본어 버전을 추가해줘.
Codex: $chany-project doctor
```

설정 또는 업데이트가 끝나면 새 대화나 새 작업을 열어 프로젝트 지침과 에이전트를 다시 불러옵니다.

## 전체 캠페인 요청

```text
ChatGPT Work: @chany-studio로 이 제품의 광고 캠페인을 구성해줘.
Codex: $chany-studio로 이 제품의 광고 캠페인을 구성해줘.
투명 누끼와 백색 팩샷, 마스터 키비주얼, 상세페이지 모듈 5장,
1:1·4:5·9:16 광고소재와 15초 제품 브랜드 필름이 필요해.
먼저 산출물 수, 승인 지점과 필요한 정확한 문구를 정리해줘.
```

전체 캠페인의 기본 순서는 다음과 같습니다.

`브리프 → 원본 잠금 → 정적 레퍼런스 선택 → 필요한 경우 영상 레퍼런스 캡처·분석 → 크리에이티브 디렉션 승인 → 키비주얼 승인 → 상세페이지 → 광고 변형 → 미디어 작업 장부·화면 검수 → 캠페인 영상 클립 승인 → 필요한 경우 로컬 환경 점검·영상 조립 → 전체 검수 → 필요한 최종 게시 검토`

유료 생성 전에는 현재 연결에서 실제로 제공되는 도구·모델·옵션을 다시 확인합니다. 무료 견적 기능이 있으면 먼저 사용하고, 최종 프롬프트, 입력별 역할, 선택된 워크플로와 옵션, 산출물 수, 서버 조정값, 제공자가 반환한 크레딧 정보와 전체 한도를 보여준 뒤 승인을 받습니다. 시간초과나 연결 끊김으로 결제 여부가 모호하면 같은 요청을 다시 보내지 않고 기존 작업 상태부터 확인합니다. 프롬프트·입력·모델·유료 옵션·수량이 달라지면 새 요청으로 다시 견적과 승인을 받습니다.

## 정적 이미지 기본 모델

생성형 정적 이미지와 부분 편집은 기본적으로 **GPT Image 2**를 사용하며 정확한 모델 ID는 `gpt-image-2`입니다. 키비주얼, 상세페이지용 비주얼 플레이트, 정적 광고, 모델·패션 이미지와 캠페인 영상의 기준 스틸이 이 범위에 포함됩니다. 단순 누끼, 결정적인 조판·합성, 영상·음성·클립 조립은 포함되지 않습니다.

실행 전에는 현재 호스트가 정확한 모델 선택을 노출하는지 확인하고 `요청 기본값: gpt-image-2`와 `실제 해석 모델`을 함께 표시합니다. 확인할 수 없는 공급자 기본값을 GPT Image 2라고 부르지 않습니다. 다른 모델은 사용자가 지정했거나, 승인된 프로젝트 지침에 기록됐거나, 현재 기능 확인에서 `gpt-image-2`가 필수 작업을 처리할 수 없음이 드러난 경우에만 해당 산출물 범위를 적고 승인받아 사용합니다. 단순 품질 불만, 타임아웃 또는 실패 응답만으로 자동 전환하지 않으며, 모델이나 공급자가 달라지면 견적·유료 승인·크리에이티브 승인을 새로 받습니다.

## 1. 마케팅 브리프

제품 사진이나 URL을 제공하고 목표를 말하면 타깃, 핵심 메시지, 채널, 승인 카피와 산출물 계획을 정리합니다.

```text
ChatGPT Work: @chany-marketing-brief로 이 신제품의 인스타그램 런칭 캠페인을 설계해줘.
Codex: $chany-marketing-brief로 이 신제품의 인스타그램 런칭 캠페인을 설계해줘.
인지도와 첫 구매 전환이 목표고 예산을 낭비하지 않게 최소 산출물부터 제안해줘.
```

가격, 할인율, 기간, 제품 효능, 비교 주장과 법적 문구는 제공되지 않으면 확정값으로 만들지 않습니다. 카피를 새로 작성해 달라고 요청하면 승인 전까지 초안으로 표시합니다.

## 2. 제품 에셋

```text
ChatGPT Work: @chany-product-assets로 이 제품을 원본 픽셀과 라벨을 보존한 투명 PNG 누끼와 #FFFFFF 팩샷으로 만들어줘.
Codex: $chany-product-assets로 이 제품을 원본 픽셀과 라벨을 보존한 투명 PNG 누끼와 #FFFFFF 팩샷으로 만들어줘.
```

- 투명 누끼에는 바닥, 그림자와 글로우를 넣지 않습니다.
- 순백 팩샷은 요청이 없으면 약한 자연스러운 접지 그림자를 사용할 수 있습니다.
- 읽히지 않는 라벨이나 보이지 않는 뒷면을 새로 만들지 않습니다.

## 3. 레퍼런스 보드

```text
ChatGPT Work: @chany-reference-board로 이 제품에 맞는 촬영 레퍼런스 6장을 찾아줘.
Codex: $chany-reference-board로 이 제품에 맞는 촬영 레퍼런스 6장을 찾아줘.
Pinterest 후보만 링크가 아니라 이 대화 안에 이미지 6장으로 보여주고,
구도·조명·배경·색감·소품의 Visual DNA를 설명해줘.
```

수량을 말하지 않으면 서로 다른 Pinterest 후보 6장을 표시합니다. “3장”, “10개”처럼 양의 정수로 지정하면 그 장수가 `target_count`가 되며, 정확히 그 수량이 실제로 표시된 뒤 번호 하나 또는 `자동 선택`을 기다립니다. 허용된 검색 풀에서 목표 수량을 채우지 못하면 요청·표시·부족 수량을 밝힌 미완성 보드로 끝내고 선택이나 유료 제작으로 넘어가지 않습니다. 레퍼런스 속 제품, 모델, 로고, 패키지, 문구와 가격은 최종 결과로 가져오지 않습니다.

목적에 따라 다음 중 하나만 선택합니다.

- `@chany-reference-board` / `$chany-reference-board`: Pinterest 범용 비주얼·무드 탐색
- `@chany-commercial-photo-reference` / `$chany-commercial-photo-reference`: Production Paradise의 전문 광고·라이프스타일 사진
- `@chany-award-ad-reference` / `$chany-award-ad-reference`: Ads of the World·D&AD·The One Show의 수상 광고·캠페인 사례

한 보드에서는 출처 경로를 섞지 않습니다. 후보가 부족해도 다른 경로로 자동 보충하지 않으며 Stocksy, ShotDeck, Death to Stock은 사용하지 않습니다. Pinterest 경로는 공개 Pin 페이지와 `i.pinimg.com` 미리보기만 열고 Pin의 외부 목적지를 따라가지 않습니다. 다른 두 경로도 승인된 공개 작업 페이지만 출처로 유지하며 외부 에이전시·브랜드·다운로드 링크를 따라가지 않습니다.

모든 경로의 검색은 업종 오버레이가 정한 분류를 따라 **L1 광역 카테고리부터 시작하고, 필요할 때 직접 연결된 L2 하위 카테고리 하나까지만** 추가합니다. 검색어 자체에는 지역, 플랫폼, 스타일, 무드, 색, 연도, 카메라, 렌즈, 조명, 비율, 타깃, 브랜드 또는 “고급·시네마틱” 같은 창작 수식어를 넣지 않습니다. 이런 연출 조건은 검색 결과를 고르는 Visual DNA와 제작 프롬프트에 적용합니다.

```text
허용
L1: Food Photography
L2: Restaurant Photography

허용
L1: Hospitality Photography
L2: Hotel Photography

금지
Food Photography → Restaurant Photography → Brunch Cafe Photography
moody Seoul brunch cafe 85mm cinematic Instagram ad
```

L2가 불분명하거나 결과가 약하면 세 번째 검색어나 더 세밀한 하위 분류로 내려가지 않고 L1 후보의 선별 기준을 개선합니다.

## 3.1 크리에이티브 디렉션과 최신 감도

디자인 용어를 몰라도 됩니다. 목표·고객·메시지·증거·브랜드 원본·채널을 주면 `chany-creative-direction`이 다음 세 방향을 서로 다른 아이디어로 설계합니다.

1. `brand-core`: 오래 사용할 수 있는 브랜드 중심 방향
2. `emotional-editorial`: 감각과 서사가 더 강한 에디토리얼 방향
3. `trend-forward`: 현재 Pinterest 신호 하나를 브랜드답게 번역한 방향

각 안은 브랜드 적합성, 고객 관련성, 메시지 명확성, 업종 차별성, 채널 적합성, 제작 가능성, 유행 수명을 평가하고 하나를 추천합니다. 승인 방향은 목적, 입력별 권위, 장면·피사체, 구도·조명·팔레트·재질, 타이포 역할·카피 영역, 보존 항목, 제외 항목, 출력 규격과 관찰 가능한 검수 기준 순서의 제작 프롬프트로 컴파일됩니다. “프리미엄·모던·시네마틱” 같은 모호한 형용사만 쌓거나 모든 결과를 같은 중앙 배치·그라데이션·유리 카드로 만드는 안은 재설계합니다.

```text
ChatGPT Work: @chany-creative-direction으로 이 브리프를 세 가지 세련된 콘셉트로 발전시키고 가장 적합한 방향과 제작 프롬프트를 추천해줘.
Codex: $chany-creative-direction으로 이 브리프를 세 가지 세련된 콘셉트로 발전시키고 가장 적합한 방향과 제작 프롬프트를 추천해줘.
Claude Cowork: 이 브리프를 초보자도 선택할 수 있는 세 가지 전문 콘셉트로 보여주고 추천안의 제작 프롬프트까지 만들어줘.
```

최신 신호는 Pinterest Predicts와 Pinterest Palette를 후보 선별 뒤에만 사용합니다. 검색어에는 연도·트렌드명·색·무드를 넣지 않습니다. 한 콘셉트에는 원칙적으로 중심 신호 하나와 선택적 보조 포인트 하나만 쓰며, 브랜드·메시지·제품 진실·접근성에 맞지 않으면 유행을 쓰지 않습니다. 플랫폼 규격, 상세페이지 구조와 GPT Image 2 프롬프팅은 실행 시점의 공식 문서로 확인하지만 그 문서의 예시 이미지는 레퍼런스로 취급하지 않습니다.

## 4. 캠페인 키비주얼

```text
ChatGPT Work: @chany-campaign-visual로 제품 형태와 패키지 문구를 보존한 4:5 마스터 키비주얼을 만들어줘.
Codex: $chany-campaign-visual로 제품 형태와 패키지 문구를 보존한 4:5 마스터 키비주얼을 만들어줘.
프리미엄 미니멀 무드, 부드러운 확산광, 우측 카피 여백으로 구성해줘.
```

키비주얼은 이후 산출물의 팔레트, 조명, 표면, 소품, 제품 배치, 카피존과 크롭 안전영역을 정하는 캠페인 기준입니다.

## 5. 상세페이지

```text
ChatGPT Work: @chany-detail-page로 승인된 키비주얼 톤을 유지해 상세페이지 모듈 5장을 만들어줘.
Codex: $chany-detail-page로 승인된 키비주얼 톤을 유지해 상세페이지 모듈 5장을 만들어줘.
1) 히어로 2) 핵심 특징 3) 사용 장면 4) 소재 디테일 5) 마감 CTA 순서야.
```

상세페이지는 `plan`, `audit`, `produce` 세 모드로 동작합니다. 새 페이지의 구조와 필요한 촬영을 정할 때는 `plan`, 기존 페이지의 근거·전환 흐름을 진단할 때는 `audit`, 승인된 모듈을 만들 때는 `produce`를 사용합니다. 각 모듈은 한 메시지만 담당하며, 근거 자료와 wide/medium/close 또는 화면·문서 소스의 보유 여부를 표로 연결합니다. 부족한 실제 증거를 생성 이미지로 대신하지 않고 촬영·자료 요청·주장 축소 중 하나로 해결합니다. 고정 13단 구성이나 가짜 후기·통계·희소성은 강제하지 않습니다.

## 6. 광고·포스터·배너

```text
ChatGPT Work: @chany-ad-creative로 아래 승인 문구를 사용한 1:1 피드와 9:16 스토리 광고를 만들어줘.
Codex: $chany-ad-creative로 아래 승인 문구를 사용한 1:1 피드와 9:16 스토리 광고를 만들어줘.
메인: 여름 한정 20% OFF
기간: 8월 31일까지
CTA: 지금 구매하기
```

한 광고에는 한 가지 목표, 한 가지 핵심 메시지와 한 가지 CTA를 사용합니다. 이미지 생성 모델이 정확한 텍스트를 보장하지 못하면 텍스트 없는 비주얼 플레이트를 먼저 만들고 조판 가능한 도구로 승인 카피를 넣습니다.

## 7. 부분 수정

```text
ChatGPT Work: @chany-image-edit로 승인한 이미지에서 배경 밝기만 한 단계 올려줘.
Codex: $chany-image-edit로 승인한 이미지에서 배경 밝기만 한 단계 올려줘.
제품, 라벨, 구도, 크기, 조명 방향, 그림자와 문구는 모두 고정해줘.
```

`문구만 크게`, `제품만 오른쪽으로`, `그림자만 부드럽게`처럼 한 번에 한 가지 변화를 요청하는 것이 가장 안정적입니다. 새 캠페인 방향이나 큰 구도 변경은 원래 제작 스킬에서 새 결과로 만듭니다.

## 8. 모델과 패션

```text
ChatGPT Work: @chany-model-fashion으로 첨부한 성인 모델의 얼굴·헤어·체형을 고정하고,
Codex: $chany-model-fashion으로 첨부한 성인 모델의 얼굴·헤어·체형을 고정하고,
원피스와 가방을 원본 구조와 색상 그대로 착장한 3:4 전신 광고 이미지를 만들어줘.
```

모델과 의류·액세서리 이미지는 각각 별도의 권위 입력입니다. 의류 길이, 칼라, 소매, 패턴, 여밈, 재질, 로고와 액세서리 구조를 섞거나 다시 디자인하지 않습니다.

## 9. 캠페인 영상과 미디어 제작 루프

제품 광고, 시네마틱 브랜드 필름, 프로모션 모션과 제품 데모의 콘셉트·장면 설계는 `chany-campaign-video`가 담당합니다.

YouTube·Instagram 등 브라우저에서 재생되는 영상의 구성을 참고하려면 먼저 `chany-video-reference-ingest`를 사용합니다. 사용자가 확장프로그램을 직접 눌러 활성 탭을 캡처하거나, 본인 소유 원본·허가된 화면 녹화·실제 영상 파일을 첨부합니다. 링크 화면만 볼 수 있으면 실제로 재생하며 확인한 타임코드까지만 `observed_excerpt`로 기록하고, 정밀 비트 분석은 캡처 파일이 준비된 뒤 진행합니다.

```text
ChatGPT Work: @chany-video-reference-ingest로 이 Instagram Reel을 브라우저 캡처로 준비하고 훅·컷·카메라·사운드 기능만 분석해줘.
Codex: $chany-video-reference-ingest로 이 YouTube 영상을 브라우저 캡처나 첨부 파일로 준비하고 내 제품 광고에 옮길 수 있는 구성만 정리해줘.
Claude Cowork: 이 영상 링크를 브라우저에서 내가 허가한 캡처로 확인하고, 실제 관찰 범위를 표시해서 제품 광고 구성으로 재설계해줘.
```

플러그인은 플랫폼 페이지에서 영상을 내려받거나 스트림을 재구성하지 않습니다. 확장프로그램·브라우저 연결이 현재 런타임에 노출되지 않으면 링크를 분석한 척하지 않고, 필요한 구간을 재생해 캡처한 `MP4` 또는 `WebM` 파일을 첨부하도록 안내합니다. 캡처는 로컬 저장이 기본이며 외부 분석·생성 서비스 업로드는 별도 승인입니다.

```text
ChatGPT Work: @chany-campaign-video로 이 제품의 15초 콘셉트형 광고 영상을 기준 이미지부터 제작해줘.
Codex: $chany-campaign-video로 이 제품의 15초 콘셉트형 광고 영상을 기준 이미지부터 제작해줘.
각 장면의 USP 역할을 밝히고 제품 형태가 불안정한 장면은 승인 이미지의 줌·팬 방식으로 전환해줘.
```

문서·콘셉트·기준 이미지·영상 순으로 비용이 커지는 구조를 따릅니다. 각 장면은 승인된 USP나 전환 역할을 가져야 하며, 제품·패키지·UI·공간·차량 등 정체성이 중요한 장면은 GPT Image 2 기준 이미지를 먼저 승인합니다. 생성형 움직임이 정체성이나 증거를 훼손하면 정확한 이미지에 결정적인 줌·팬·패럴랙스를 적용하거나 승인된 실제 영상으로 전환합니다.

실제 생성·재개·검수는 `chany-media-production-loop`가 담당합니다. 각 출력에 고정된 작업 ID와 인덱스를 만들고, 입력 역할·모델·옵션·비용 승인·공급자 작업 상태·결과 버전·결함을 한 장부로 묶습니다.

```text
ChatGPT Work: @chany-media-production-loop로 승인된 키비주얼 3종을 생성하고 결과를 대화 화면에 보여준 뒤 결함별로 검수해줘.
Codex: $chany-media-production-loop로 승인된 캠페인 영상 장면 3개의 생성 작업을 안정적인 인덱스로 추적하고 실패한 장면만 검토해줘.
```

기본 반복 한도는 최초 생성 1회와 결함 하나를 고치는 교정 1회입니다. 시간 초과나 연결 끊김은 재생성 신호가 아니며 원래 작업 ID를 먼저 조회합니다. 배치 중 한 결과만 실패하면 승인된 나머지를 다시 만들지 않습니다. 공급자 성공 표시는 수신 완료일 뿐이며, 이미지 원본 해상도 또는 영상의 주요 타임스탬프를 실제로 확인해야 승인됩니다.

사용자가 권한을 가진 브라우저 캡처나 로컬 레퍼런스 파일을 받으면 공용 분석 절차로 프레임·컨택트시트·영상과 음향의 비트별 변화·타이밍을 먼저 분석합니다. 플랫폼 영상을 직접 내려받거나 내용·인물·브랜드·음악·고유 시퀀스를 복제하지 않습니다. 연결된 MCP가 실제 미디어 URL 가져오기, 움직임 전달, 제품 교체, 성과 예측 또는 편집을 지원하면 현재 스키마·권리·업로드·비용을 확인한 뒤 해당 단계만 실행합니다. 웹 전용 기능은 입력과 작업안을 준비한 뒤 해당 화면에서 완료합니다.

## 10. 실행 환경 점검

```text
ChatGPT Work: @chany-preflight로 프로젝트에 영구 변경을 남기지 않고 이번 영상 조립에 필요한 도구와 한글 폰트를 점검해줘.
Codex: $chany-preflight로 프로젝트에 영구 변경을 남기지 않고 이번 영상 조립에 필요한 도구와 한글 폰트를 점검해줘.
```

환경 점검은 실제 버전·기능 명령과 승인 문구의 글리프 증거를 사용해 `사용 가능`, `누락`, `관찰 불가`, `차단`을 구분합니다. 읽기만으로 글리프를 확인할 수 없을 때는 운영체제 임시 공간에서 고유한 샘플을 검사하고 즉시 정리하며 프로젝트에는 남기지 않습니다. 처음에는 아무것도 설치하지 않으며, 보완이 필요하면 현재 운영체제와 실제 패키지 관리자를 확인한 해결안과 변경 범위를 먼저 보여주고 별도 승인을 받습니다. 이는 Higgsfield 유료 생성 전 비용·입력·모델을 확인하는 사전검토와 다른 단계입니다.

## 11. 영상 조립·컷 교체와 훅 변형

```text
ChatGPT Work: @chany-video-assembly로 승인된 클립을 조립하거나 지정 구간만 교체하고 결과 규격과 오디오를 검증해줘.
Codex: $chany-video-assembly로 승인된 클립을 조립하거나 지정 구간만 교체하고 결과 규격과 오디오를 검증해줘.
```

조립은 승인된 샷 순서와 카피를 그대로 사용합니다. 입력과 최종 파일을 실제로 측정하고, 오디오가 없는 클립에는 목표 오디오 형식의 무음을 넣으며, 프로젝트·캠페인·마스터 해시별 새 경로를 사용합니다. 마스터 수정과 변형은 원본 프레임레이트와 오디오를 기본적으로 보존하고, 승인된 납품 사양이 명시적으로 요구할 때만 변경합니다. 컷 교체는 정확한 시작·종료 시점과 오디오 정책을 먼저 잠그고 진입·종료 경계와 음향 연속성을 검사합니다. 훅 변형에서는 텍스트 한 요소만 바꾸고 마스터·컷·오디오·프레임레이트·서체·위치·내보내기 설정은 고정합니다.

집행 결과가 들어오면 `chany-marketing-brief`가 추적 정의, 어트리뷰션 기간, 비교 가능한 집행 조건과 표본을 확인합니다. 조건이 부족하면 승자를 억지로 정하지 않고 `inconclusive` 또는 `invalid`로 기록한 뒤, 다음 라운드에서 바꿀 한 변수만 제안합니다.

## 12. 게시 전 검토

```text
ChatGPT Work: @chany-publication-review로 이 광고의 정확한 문구, 제안 조건, 권리와 최종 렌더 버전을 검수해줘.
Codex: $chany-publication-review로 이 광고의 정확한 문구, 제안 조건, 권리와 최종 렌더 버전을 검수해줘.
게시 국가는 한국, 채널은 Meta 피드, 게시 예정일은 9월 10일이고 담당 검토자는 마케팅 책임자 김OO야.
```

검토는 주장·근거, 가격·배송·구독·환불 등 거래 조건, 이메일·문자·푸시 같은 발송 조건, 협찬·추천·저작권·초상권, 업종·플랫폼·최종 렌더의 다섯 영역을 분리합니다. 게시 시점에 최신 공식 1차 자료를 확인하고 정확한 카피·오퍼·랜딩·크롭·최종 파일 버전에 결박합니다. 문구, 번역, 가격, CTA, 고지 위치, 크롭, 레이아웃 또는 렌더가 바뀌면 이전 검토는 무효입니다.

상태는 `blocked`, `draft-only`, `ready-for-named-human-review`, `reviewed-by-named-owner`만 사용합니다. 이는 법률 자문이나 법적 승인, 플랫폼 사전승인 또는 자동 게시 권한이 아닙니다. 자료가 부족해도 초안 제작은 계속할 수 있지만 게시·발송은 멈춥니다.

## 입력 정보 템플릿

```text
업종/비즈니스 유형:
제품/브랜드:
캠페인 목표:
타깃:
채널:
비율/크기/길이:
핵심 메시지:
승인 문구:
가격/할인/기간:
CTA:
법적 고지:
브랜드 컬러·가이드:
필요한 산출물:
고정할 것:
수정 가능한 것:
레퍼런스 선택: 직접 선택 / 자동 선택 / 첨부 사용
```

사진에 보이는 사실은 다시 설명할 필요가 없습니다. 다만 정확한 가격, 프로모션과 법적 문구처럼 이미지에서 확정할 수 없는 비즈니스 값은 텍스트로 제공해야 합니다.

## 결과 검수

분야별로 다음을 원본과 비교합니다.

- 제품 수량, 실루엣, 비율, 색상, 재질, 라벨과 로고
- 승인 카피, 숫자, 가격, 기간, CTA와 줄 구분
- 마스터 키비주얼과 상세페이지·광고 사이의 캠페인 일관성
- 모델 얼굴, 헤어, 체형과 성인 표현
- 의류 실루엣, 구조, 색상, 패턴과 액세서리
- 캠페인 영상의 제품 노출, 출연자 일관성, 음성·자막 동기와 전환 흐름
- 출력 비율, 채널 안전영역과 작은 화면 가독성
- 업종별 필수 근거, 자격·수치·가격·일정·접근성·후원 표기가 확인 가능한 사실과 일치하는지

치명적인 불일치가 있으면 승인하지 않고 관찰된 문제만 지정해 한 번 보정합니다. 확인할 수 없는 사항은 정확하다고 주장하지 않습니다. 의료, 교육, 부동산, 전문 서비스, 자동차, 채용, 유료 협찬처럼 표시·규제 위험이 있는 콘텐츠는 법률 자문처럼 단정하지 않고 게시 전 담당자, 관할 기관과 채널의 최신 규정을 확인하는 단계로 넘깁니다.
