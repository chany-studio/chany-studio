# Chany's Studio

![Chany's Studio](plugins/photo-reference-studio/assets/logo.png)

업종별 구매 여정·증거·연출·컴플라이언스 판단과 공통 제작 워크플로를 결합해 **광고·홍보·마케팅·상세/랜딩·콘텐츠**를 기획하고 제작하는 ChatGPT Work/Codex 및 Claude 플러그인입니다. Chany's Studio 2.2.2는 업종 전문 오버레이가 방향과 검증 기준을 정하고, 공통 제작 스킬이 승인된 방향을 실제 산출물로 전환하는 2축 구조입니다.

> [공식 설치·사용설명서 (Notion)](https://jolly-phlox-79c.notion.site/Chany-s-Studio-3c783e9464668140b794ee076be24406) · [문제 해결](docs/TROUBLESHOOTING.md)

## 설치할 때 입력할 마켓플레이스 주소

```text
https://github.com/chany-studio/chany-studio
```

`owner/repo` 형식만 받는 화면에서는 다음 값을 입력합니다.

```text
chany-studio/chany-studio
```

플러그인은 화면에서 **Chany's Studio**로 표시됩니다. 기존 사용자의 업데이트 경로를 보호하기 위해 2.0에서도 내부 마켓플레이스 식별자 `photo-reference-studio`는 유지합니다.

## 설치

### ChatGPT 및 Codex 앱

1. **Plugins → Add marketplace**를 엽니다.
2. 위 GitHub 주소를 붙여 넣습니다.
3. **Chany's Studio**를 선택하고 **Install**을 누릅니다.
4. Higgsfield 연결을 승인한 뒤 새 대화 또는 새 작업을 시작합니다.

### Claude Cowork

대화 안 레퍼런스 이미지 표시에는 Claude Desktop이 실행되는 컴퓨터의 **Node.js 18 이상**이 필요합니다.

1. **Customize → Plugins → Browse plugins**를 엽니다.
2. **Personal plugins의 `+` → Add marketplace → Add from a repository**를 선택합니다.
3. 위 GitHub 주소를 입력하고 `photo-reference-studio`를 설치합니다.
4. Higgsfield 로그인을 마치고 `reference-preview` 연결이 활성화됐는지 확인합니다.
5. 새 Cowork 작업을 시작합니다.

### Claude Code

```text
/plugin marketplace add chany-studio/chany-studio
/plugin install photo-reference-studio@photo-reference-studio
/reload-plugins
```

플랫폼별 세부 절차는 [설치 및 업데이트 가이드](docs/INSTALL-AND-UPDATE.md)를 확인하세요.

## 2축 스킬 구조

ChatGPT Work에서 스킬을 직접 고를 때는 `@스킬명`, Codex에서는 `$스킬명`을 사용합니다. Claude Cowork에서는 `/project-studio`를 제외한 전문 작업을 자연어로 요청하면 설명에 맞는 스킬이 자동 선택됩니다.

### 1축: 업종 전문 오버레이

업종 스킬은 구매·참여 여정, 의사결정자, 증거 구조, 연출·촬영·모션 원칙, 카피 경계, 채널 산출물과 실패 기준을 담은 `industry direction packet`을 만듭니다. 최종 이미지를 단독 제작하지 않고 승인된 패킷을 공통 제작 스킬에 넘깁니다.

| 업종 스킬 | 핵심 전문 범위 |
| --- | --- |
| ChatGPT `@chany-professional-services` · Codex `$chany-professional-services` | 일반·면허 전문 서비스의 신뢰 형성, 상담 리드, 자격·성과·추천 주장 |
| ChatGPT `@chany-education-marketing` · Codex `$chany-education-marketing` | 학습자·비용 부담자 여정, 모집·등록, 성과·인증·미성년자 보호 |
| ChatGPT `@chany-healthcare-marketing` · Codex `$chany-healthcare-marketing` | 환자 교육·접근, 의료 효능·안전 주장, 개인정보와 필수 사람 검토 |
| ChatGPT `@chany-food-dining` · Codex `$chany-food-dining` | 방문·예약·주문, 메뉴·식욕·시간대·배달 연출, 가격·식이 정보 |
| ChatGPT `@chany-hospitality-travel` · Codex `$chany-hospitality-travel` | 영감→비교→예약→체류 여정, 객실·편의시설·요금·문화적 권리 |
| ChatGPT `@chany-space-real-estate` · Codex `$chany-space-real-estate` | 건축·상업공간·매물, 공간 사실·치수·공시·CGI 투명성 |
| ChatGPT `@chany-digital-product-marketing` · Codex `$chany-digital-product-marketing` | 소비자 앱·양면 플랫폼·B2B SaaS, 활성화·유동성·구매위원회·UI 증거 |
| ChatGPT `@chany-live-culture-events` · Codex `$chany-live-culture-events` | 공연·전시·행사·축제의 티켓·참여 여정, 프로그램 사실·권리·현장 안전 |
| ChatGPT `@chany-automotive-marketing` · Codex `$chany-automotive-marketing` | 자동차·EV·이륜·상용차의 고관여 구매, 모델 잠금·주행 안전·주행거리·금융 |
| ChatGPT `@chany-consumer-tech-marketing` · Codex `$chany-consumer-tech-marketing` | 전자·연결 기기의 제품 잠금, 기능 데모·호환성·성능·인증·구성품 |
| ChatGPT `@chany-corporate-employer` · Codex `$chany-corporate-employer` | 기업 평판·고용 브랜드, EVP·채용·문화 증거와 임직원 권리 |

11개 업종 스킬은 모두 광고·홍보·마케팅·상세/랜딩·콘텐츠 제작에 집중합니다. 결과는 게시 승인서가 아니라 제작 방향 초안이며, 공개 직전에 해당 관할의 최신 규정, 게재 플랫폼 정책, 증거와 권리를 다시 확인하고 책임 있는 사람의 검토를 받아야 합니다.

### 2축: 공통 제작 스킬

| 공통 스킬 | 담당 작업 |
| --- | --- |
| ChatGPT `@chany-project` · Codex `$chany-project` | 프로젝트 인터뷰, 공통 `AGENTS.md`, 브리프·상태, ChatGPT Work 위임 규칙과 Claude·로컬 Codex 프로젝트 에이전트 설정 |
| ChatGPT `@chany-studio` · Codex `$chany-studio` | 업종 오버레이와 두 분야 이상이 연결된 전체 캠페인 및 산출물 순서 관리 |
| ChatGPT `@chany-marketing-brief` · Codex `$chany-marketing-brief` | 목표·타깃·메시지·승인 카피·채널·에셋 매트릭스 정리 |
| ChatGPT `@chany-product-assets` · Codex `$chany-product-assets` | 투명 누끼, 순백 팩샷, 제품·음식 클린업 |
| ChatGPT `@chany-reference-board` · Codex `$chany-reference-board` | 제한된 업종 검색 경로로 Pinterest 레퍼런스 6장과 Visual DNA 구성 |
| ChatGPT `@chany-campaign-visual` · Codex `$chany-campaign-visual` | 연출컷과 텍스트 없는 마스터 키비주얼 |
| ChatGPT `@chany-detail-page` · Codex `$chany-detail-page` | 히어로·특징·혜택·증거·사용 장면·CTA 상세/랜딩 모듈 |
| ChatGPT `@chany-ad-creative` · Codex `$chany-ad-creative` | 정적 광고, 프로모션 포스터, 배너, 채널별 재구성 |
| ChatGPT `@chany-image-edit` · Codex `$chany-image-edit` | 마스크 편집, 부분 수정, 문구 복원과 제한된 교체 |
| ChatGPT `@chany-model-fashion` · Codex `$chany-model-fashion` | 성인 모델 일관성, 원본 의류·액세서리 착장 |
| ChatGPT `@chany-ugc-ads` · Codex `$chany-ugc-ads` | 리뷰, 언박싱, 튜토리얼, SaaS, Try-on, 현지화 UGC |
| ChatGPT `@chany-video-assembly` · Codex `$chany-video-assembly` | 승인 클립 조립, 지정 규격 정규화, 훅 변형과 빈 성과 입력표 |
| ChatGPT `@chany-preflight` · Codex `$chany-preflight` | 영상·프레임·배치 작업 전 로컬 도구와 한글 폰트 환경 점검 |
| ChatGPT `@chany-publication-review` · Codex `$chany-publication-review` | 정확한 최종 카피·오퍼·에셋 버전의 근거·권리·채널·최종 렌더 게시 전 검수 |

기존 호출은 ChatGPT Work의 `@auto-photo-production`과 Codex의 `$auto-photo-production`에서 한 버전 동안 호환되며 새 `chany-studio` 라우터로 안내됩니다.

## 프로젝트부터 시작하기

새 광고 프로젝트를 만든 뒤 Chany's Studio가 사용할 로컬 폴더를 연결합니다. 초기화는 지침과 작업 구조만 만들며 이미지·영상 생성이나 크레딧 사용을 시작하지 않습니다.

Claude Cowork에서는 다음처럼 시작합니다.

```text
/project-studio 신제품 선크림의 상세페이지, Meta 광고와 15초 리뷰 UGC 프로젝트를 설정해줘.
```

짧은 명령이 보이지 않으면 공식 네임스페이스 호출을 사용합니다.

```text
/photo-reference-studio:project-studio 신제품 선크림 광고 프로젝트를 설정해줘.
```

ChatGPT Work에서는 `@`로 스킬을 선택합니다.

```text
@chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.
```

Codex에서는 `$`로 호출합니다.

```text
$chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.
```

ChatGPT 또는 Codex에 아래 문장이 일반 메시지로 전달되면 같은 스킬의 호환 별칭으로 처리합니다. ChatGPT 슬래시 메뉴에 등록되는 정식 명령은 아닙니다.

```text
/project-studio 신제품 선크림 광고 프로젝트를 설정해줘.
```

### `/project-studio`에서 Moai 문맥 감지와 조건부 체이닝

보통 `/project-studio <설명>` 하나로 시작하면 됩니다. 기존 `.moai/project/*`가 있으면 바로 재사용합니다. 기록이 없을 때는 현재 호스트가 Moai의 정확한 project 스킬을 같은 요청 안에서 실제로 호출하고 완료까지 기다릴 수 있음을 확인한 경우에만 통합 승인안에 Moai 단계를 넣습니다. 설치 폴더나 문서에 이름이 보이는 것만으로 자동 실행을 약속하지 않습니다. 해당 기능이 없으면 Chany 단독 설정과 수동 2단계 안내를 제공합니다. Chany 단계는 `.moai/**`를 수정·삭제·이동하지 않습니다.

플랫폼별 Chany 설정 호출 예시는 다음과 같습니다. Moai의 같은 요청 내 실행 여부는 각 호스트의 실제 호출 기능에 따라 달라집니다.

```text
Claude Cowork:
/project-studio 반려동물 예약 플랫폼의 출시 광고와 랜딩페이지 제작 구조를 설정해줘.

ChatGPT Work:
@chany-project로 반려동물 예약 플랫폼의 출시 광고와 랜딩페이지 제작 구조를 설정해줘.

Codex:
$chany-project로 반려동물 예약 플랫폼의 출시 광고와 랜딩페이지 제작 구조를 설정해줘.
```

모든 런타임에서 확실한 방식은 Moai의 `project`를 먼저 완료하고 Chany 설정을 이어가는 수동 2단계입니다. `--with-moai` 또는 `moai-chain`은 Moai 단계를 필수로 요구하며, Moai 자체 또는 같은 요청 내 호출 기능이 없으면 Chany 단독으로 조용히 넘어가지 않고 수동 2단계를 안내합니다. `--chany-only`는 Moai 감지를 건너뜁니다. 어떤 방식도 Moai 자체의 변경 미리보기와 승인 절차를 생략하지 않습니다. ChatGPT에서는 `/project-studio`를 정식 슬래시 메뉴로 안내하지 말고 `@chany-project`를 사용합니다.

프로젝트의 업종과 산출물이 정해지면 `/project-studio`는 현재 설치돼 실제 호출 가능한 Moai 전문 스킬 중 **가장 작은 관련 체인만** 승인안에 제안합니다. 예를 들어 주장 검수는 `moai-seller:commerce-ad-claim-compliance-kr`, 발송 메시지는 `moai-seller:commerce-message-compliance-kr`, 인플루언서·UGC·권리는 `moai-seller:commerce-influencer-collab`, 현행 법령과 MFDS 질문은 `moai-lawyer:legal-law-research`와 `moai-lawyer:legal-mfds-safety`에 연결할 수 있습니다. 더 깊은 기획·상세페이지·촬영은 `moai-marketer:marketing-campaign-planner`, `moai-seller:commerce-detail-page-planner`, `moai-seller:commerce-product-photo-brief`, 디자인 반복은 `moai-designer:design-brief`, `moai-designer:design-iteration-loop`, `moai-designer:design-landing-motion`, Higgsfield 실행은 `moai-media:media-higgsfield-core`, `moai-media:media-higgsfield-image`, `moai-media:media-higgsfield-video`, `moai-media:media-higgsfield-identity`, `moai-media:media-higgsfield-assets`가 설치된 경우에만 제안됩니다.

각 결과는 정확한 Moai 스킬 이름, 목적, 검토 대상과 버전, 출처 날짜, 발견 사항, 미해결 항목과 후속 Chany 담당을 붙인 인용 가능한 전달물로 받습니다. Chany's Studio는 캠페인 브리프, 원본 잠금, 최종 크리에이티브 QA와 버전 고정 게시 검수를 계속 소유합니다. Moai 전문 스킬이 없으면 이를 흉내 내거나 필수로 만들지 않고 Chany 단독으로 진행하며, 빠진 근거나 사람 검토가 있으면 게시만 보류합니다.

설정이 승인되면 다음을 만듭니다.

- `AGENTS.md`: ChatGPT Work/Codex가 직접 읽는 공통 프로젝트 지침 정본과 호스팅 하위 에이전트 위임 규칙
- `CLAUDE.md`: 같은 `AGENTS.md`를 불러오는 Claude용 연결 파일
- `.chany-studio/`: 프로젝트 브리프, 진행 상태와 비밀값 없는 설정
- `.claude/agents/`: Claude용 프로젝트 에이전트
- `.codex/agents/`: 로컬 Codex 클라이언트용 프로젝트 에이전트

ChatGPT Work는 로컬 Codex의 TOML 에이전트 파일을 전제로 하지 않고 `AGENTS.md`의 역할·위임 규칙으로 호스팅 하위 에이전트를 사용합니다. 기존 지침은 통째로 덮어쓰지 않으며, `AGENTS.override.md`의 우선순위도 먼저 확인합니다. 변경 전 로컬 백업을 만들고 Chany's Studio 관리 구역만 병합합니다. 설정 후에는 새 대화 또는 새 작업을 열어 새 지침을 불러옵니다.

## 바로 시작하기

전체 캠페인은 다음처럼 요청할 수 있습니다. 플랫폼에 맞는 첫 줄 하나를 선택하고 나머지 요청을 이어 붙입니다.

```text
ChatGPT Work: @chany-studio로 이 제품의 마케팅 캠페인을 만들어줘.
Codex: $chany-studio로 이 제품의 마케팅 캠페인을 만들어줘.
제품 누끼와 팩샷, 마스터 키비주얼, 상세페이지 모듈 5장,
1:1·4:5·9:16 광고소재와 15초 제품 리뷰 UGC를 같은 방향으로 구성해줘.
유료 생성 전에 산출물 수와 승인 지점을 먼저 보여줘.
```

한 가지 결과가 분명하면 해당 전문 스킬을 바로 호출합니다.

```text
ChatGPT Work: @chany-detail-page로 승인된 키비주얼을 사용해 상세페이지 모듈 5장을 만들어줘.
Codex: $chany-detail-page로 승인된 키비주얼을 사용해 상세페이지 모듈 5장을 만들어줘.

ChatGPT Work: @chany-ad-creative로 이 프로모션의 1:1 피드와 9:16 스토리 광고를 만들어줘.
Codex: $chany-ad-creative로 이 프로모션의 1:1 피드와 9:16 스토리 광고를 만들어줘.

ChatGPT Work: @chany-ugc-ads로 이 제품의 자연스러운 9:16 언박싱 광고를 만들어줘.
Codex: $chany-ugc-ads로 이 제품의 자연스러운 9:16 언박싱 광고를 만들어줘.

ChatGPT Work: @chany-video-assembly로 승인된 UGC 클립을 지정 규격으로 조립하고 훅만 다른 2개 버전과 빈 성과표를 만들어줘.
Codex: $chany-video-assembly로 승인된 UGC 클립을 지정 규격으로 조립하고 훅만 다른 2개 버전과 빈 성과표를 만들어줘.
```

상세/랜딩페이지는 목적에 따라 `plan`, `audit`, `produce`로 요청할 수 있습니다. `plan`은 페이지 구조와 촬영 필요 항목, `audit`은 기존 페이지의 증거 범위와 누락된 촬영·자료, `produce`는 이름이 정해진 모듈 제작을 담당합니다. 생성 이미지는 누락된 사실 증거를 대신하지 않습니다.

```text
ChatGPT Work: @chany-detail-page로 기존 랜딩페이지를 audit하고 증거·촬영 공백을 정리해줘.
Codex: $chany-detail-page로 기존 랜딩페이지를 audit하고 증거·촬영 공백을 정리해줘.

ChatGPT Work: @chany-publication-review로 최종 광고의 정확한 카피·오퍼·에셋 버전을 게시 전 검수해줘.
Codex: $chany-publication-review로 최종 광고의 정확한 카피·오퍼·에셋 버전을 게시 전 검수해줘.
```

게시 검수는 정확한 카피, 오퍼, 목적지, 에셋, 크롭, 레이아웃과 최종 렌더 버전에 묶입니다. 초안 기획과 제작은 계속할 수 있지만 근거, 권리, 검토 시점의 공식 1차 출처 또는 이름이 확인된 책임 검토자가 빠지면 공개는 보류됩니다. 카피·크롭·레이아웃이 바뀌면 새 버전으로 다시 검수해야 하며, 이 절차를 법률 자문이나 법적 승인으로 표현하지 않습니다.

## 캠페인 제작 순서

1. 해당 업종 전문 스킬이 여정·증거·연출·주장 경계를 `industry direction packet`으로 정리합니다.
2. 브랜드·타깃·채널·승인 문구를 공통 캠페인 브리프로 전환합니다.
3. 원본에서 제품, 차량, 공간, UI, 사람, 프로그램과 카피 등 필요한 정체성 잠금을 만듭니다.
4. 필요한 경우 제한된 업종 검색 경로로 Pinterest 레퍼런스 6장을 대화 안에 실제 이미지로 표시합니다.
5. 마스터 키비주얼을 먼저 승인합니다.
6. 승인된 패킷과 캠페인 규칙에서 상세/랜딩페이지와 채널 광고를 파생합니다.
7. UGC가 포함되면 훅·대본·출연자·증거 노출·CTA를 잠그고 제품 장면마다 승인 스틸을 첫 프레임 권위로 연결해 클립을 제작합니다.
8. 승인된 복수 클립을 지정 규격으로 조립하고, 요청한 경우 훅 하나만 바꾼 변형과 빈 성과 입력표를 만듭니다.
9. 원본, 승인 카피, 비율, 안전영역, 업종별 실패 기준과 캠페인 일관성을 검수합니다.

기본값은 유료 생성 전에 사용자가 레퍼런스와 산출물 수를 확인하는 방식입니다. 자동 진행을 원하면 범위와 함께 `레퍼런스도 자동 선택해서 끝까지 진행해줘`라고 요청하세요.

## 레퍼런스 검색 규칙

- Pinterest에는 업종 taxonomy의 **L1 광역 카테고리 1개를 먼저** 검색합니다.
- 더 좁혀야 할 때만 같은 경로의 **직접 L2 하위 카테고리 0~1개**를 추가합니다. 한 작업에서 여러 L2 형제를 검색하지 않습니다.
- 세 번째 의미 검색어와 스타일·렌즈·지역·색·무드·플랫폼 modifier를 검색어에 붙이지 않습니다.
- 검색 뒤에는 선택한 이미지의 구도·조명·배경·재질·색 관계·정보 위계를 Visual DNA로 분석할 수 있지만, 그 분석어를 새 검색 쿼리로 확장하지 않습니다.
- 선택 결과는 링크나 HTML 목록에만 두지 않고, 지원되는 ChatGPT/Codex 및 Claude 대화 화면에서 실제 이미지로 확인할 수 있게 전달합니다.

## 핵심 보호 원칙

- 제품·음식·차량·공간·UI·프로그램·모델·의류의 승인 원본과 사실 자료가 정체성의 최종 기준입니다.
- 가격, 할인율, 기간, 제품 효능, 비교 주장, CTA와 법적 고지는 임의로 만들지 않습니다.
- Pinterest 레퍼런스는 복제 대상이 아니라 구도, 조명, 배경, 색 관계, 재질과 정보 위계를 이해하는 방향 자료로만 사용합니다.
- 마스터 키비주얼을 승인한 뒤 상세페이지와 광고 규격을 파생합니다.
- 기존 결과의 부분 수정은 지정 영역과 한 가지 속성만 바꿉니다.
- 라벨·로고·카피·제품 형상·모델 정체성·의류 구조가 바뀐 결과는 실패로 처리합니다.
- 게시 직전에는 관할 규정과 플랫폼 정책의 최신 상태를 다시 확인하고, 근거·권리·안전·표현을 책임 있는 사람이 승인해야 합니다.
- 여러 단계를 자동 생성하기 전에 예상 생성 횟수와 크레딧 사용 지점을 알립니다.

## 유료 생성 계약과 Higgsfield 실행 범위

유료 생성 전에는 연결된 도구의 **현재 스키마와 라이브 카탈로그**에서 실제 작업, 모델 또는 워크플로, 입력 역할, 옵션과 제한을 확인합니다. 무료 견적·비용 미리보기가 있으면 먼저 실행하고, 최종 프롬프트, 입력별 역할, 확인된 모델·워크플로와 옵션, 서버 조정값, 공급자가 반환한 크레딧·잔액 정보, 출력 수와 배치 한도를 한 번에 보여준 뒤 승인을 받습니다. 기억한 모델명이나 이전 가격표를 런타임 사실처럼 사용하지 않습니다.

시간 초과, 연결 끊김 또는 결제·생성 상태를 알 수 없는 결과는 그대로 다시 제출하지 않습니다. 원래 작업 영수증, 상태 또는 기록에서 기존 작업을 먼저 찾습니다. 프롬프트 의미, 입력 또는 역할, 모델·워크플로, 유료 옵션, 수량, 길이, 비율, 언어가 바뀌면 변경 요청으로 보고 새 사전검토와 승인을 받습니다.

- Higgsfield MCP가 연결된 Claude에서는 이미지·영상·Soul 캐릭터·오디오 생성과 UGC 워크플로를 실행할 수 있습니다.
- Marketing Studio의 템플릿 방식은 현재 웹 전용이므로, 플러그인은 템플릿 선택과 입력 준비 후 Higgsfield 화면으로 안내합니다.
- Cinema Studio의 정밀 설정은 기획할 수 있지만 사용자가 Higgsfield 화면에서 최종 생성을 확인합니다.
- 도구에서 지원하지 않는 기능을 실행했다고 주장하지 않고, `직접 실행`, `웹에서 완료`, `기획만 가능` 상태를 명확히 표시합니다.

## 기존 사용자 업데이트

- **ChatGPT/Codex:** 설치된 마켓플레이스에서 **Refresh**를 누릅니다.
- **Claude Cowork:** `Customize → Plugins`에서 `photo-reference-studio`의 **Update**를 누릅니다.
- **Claude Code:** 아래 명령을 실행합니다.

```text
/plugin marketplace update photo-reference-studio
/plugin update photo-reference-studio@photo-reference-studio
/reload-plugins
```

업데이트 후 버전이 **2.2.2**인지 확인하고 새 대화 또는 새 작업을 시작하세요.

## 외부 서비스와 데이터

- 플러그인 저장소에는 API 키, 액세스 토큰 또는 사용자 사진이 포함되어 있지 않습니다.
- Higgsfield 기능 사용 시 사용자가 선택한 원본과 레퍼런스가 Higgsfield로 전송될 수 있습니다.
- Claude용 `reference-preview`는 Pinterest의 공개 미리보기만 읽어 대화에 표시합니다.
- 비밀번호, API 키, 액세스 토큰이나 인증 코드를 대화에 붙여 넣지 말고 연결 화면에서 인증하세요.
- 요금, 크레딧, 생성물 권리와 외부 서비스 약관은 각 서비스에서 확인하세요.

## 문서

- [설치 및 업데이트](docs/INSTALL-AND-UPDATE.md)
- [전체 사용 가이드](docs/USER-GUIDE.md)
- [문제 해결](docs/TROUBLESHOOTING.md)
- [변경 이력](CHANGELOG.md)

## 저장소 구조

```text
.
├── .agents/plugins/marketplace.json
├── .claude-plugin/marketplace.json
├── docs/
└── plugins/photo-reference-studio/
    ├── .codex-plugin/plugin.json
    ├── .claude-plugin/plugin.json
    ├── .mcp.claude.json
    ├── .mcp.json
    ├── assets/
    ├── commands/project-studio.md
    ├── mcp/reference-preview/
    └── skills/
```

## 라이선스와 공식 참고

이 프로젝트는 [MIT License](LICENSE)로 배포됩니다.

- [OpenAI: Plugins in ChatGPT and Codex](https://help.openai.com/en/articles/20001256-plugins-in-codex/)
- [Claude Cowork: Install plugins](https://claude.com/docs/cowork/guide/plugins)
- [Claude Code: Plugins reference](https://code.claude.com/docs/en/plugins-reference)
- [Higgsfield MCP 도움말](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-higgsfield-mcp)
- [공식 설치·사용설명서](https://jolly-phlox-79c.notion.site/Chany-s-Studio-3c783e9464668140b794ee076be24406)
