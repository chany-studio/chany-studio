# Chany's Studio 설치 및 업데이트

[공식 설치·사용설명서 (Notion)](https://jolly-phlox-79c.notion.site/Chany-s-Studio-3c783e9464668140b794ee076be24406)

## 공통 마켓플레이스 주소

```text
https://github.com/chany-studio/chany-studio
```

축약형이 필요한 화면에서는 다음 값을 입력합니다.

```text
chany-studio/chany-studio
```

화면 표시명은 **Chany's Studio**입니다. 기존 설치와 업데이트가 끊기지 않도록 내부 마켓플레이스 및 플러그인 식별자는 `photo-reference-studio`를 유지합니다.

## ChatGPT 및 Codex 앱

1. **Plugins → Add marketplace**를 엽니다.
2. 공통 GitHub 주소를 입력합니다.
3. 추가된 **Chany's Studio**를 엽니다.
4. `photo-reference-studio`의 구성 요소와 Higgsfield 연결을 확인합니다.
5. **Install**을 누르고 연결 승인을 완료합니다.
6. 새 대화 또는 새 Codex 작업을 시작합니다.

관리형 워크스페이스에서는 관리자가 플러그인 설치 정책과 Higgsfield 접근을 허용해야 할 수 있습니다.

## Claude Cowork

대화 안 레퍼런스 이미지 표시에는 Claude Desktop이 실행되는 컴퓨터의 **Node.js 18 이상**이 필요합니다. `node --version`이 동작하지 않으면 [Node.js LTS](https://nodejs.org/en/download)를 설치하고 Claude Desktop을 다시 시작하세요.

1. **Customize → Plugins → Browse plugins**를 엽니다.
2. **Personal plugins의 `+` → Add marketplace → Add from a repository**를 선택합니다.
3. 공통 GitHub 주소를 입력합니다.
4. `photo-reference-studio`를 선택하고 **Install**을 누릅니다.
5. Higgsfield 인증을 완료합니다.
6. `reference-preview` 연결이 활성화됐는지 확인합니다. 이 연결에는 별도 로그인이 필요하지 않습니다.
7. 새 Cowork 작업을 시작합니다.

## Claude Code

```text
/plugin marketplace add chany-studio/chany-studio
/plugin install photo-reference-studio@photo-reference-studio
/reload-plugins
```

모든 프로젝트에서 개인적으로 사용하려면 설치 범위에서 **User scope**를 선택합니다.

## 설치 확인

플러그인 상세에서 다음을 확인합니다.

- 표시 이름: `Chany's Studio`
- 내부 식별자: `photo-reference-studio`
- 버전: `2.5.0`
- 대표 Skill: `chany-studio`
- 프로젝트 Skill: `chany-project`
- 전문 Skill: 마케팅 브리프, 기본 6장 또는 요청 수량의 Pinterest 레퍼런스, 전문 크리에이티브 디렉션(`chany-creative-direction`), 브라우저 캡처 영상 레퍼런스 준비(`chany-video-reference-ingest`), 제품 에셋, 키비주얼, 상세페이지, 광고, 편집, 패션, 콘셉트형 캠페인 영상(`chany-campaign-video`), 미디어 생성 실행·재개(`chany-media-production-loop`), 영상 조립·컷 교체(`chany-video-assembly`), 환경 점검(`chany-preflight`), 게시 전 검수(`chany-publication-review`)
- 업종 Skill: 전문 서비스, 교육, 헬스케어, 식당·카페/F&B, 호텔·여행, 공간·인테리어·부동산, 디지털 제품, 자동차·모빌리티, 소비자 기술, 기업·채용, 공연·전시·행사·지역축제
- 연결: Higgsfield
- Claude Cowork 추가 연결: 항상 로드되는 `reference-preview`
- 생성형 정적 이미지 기본 모델: GPT Image 2 (`gpt-image-2`)

명시 호출은 ChatGPT Work에서 `@스킬명`, Codex에서 `$스킬명`을 사용합니다. Claude Cowork에서는 `/project-studio` 슬래시 명령을 제공하며, 나머지 전문 스킬은 자연어 요청에 맞춰 자동 선택합니다. 2.2.0부터는 업종 스킬이 전략·증거·규정 확인 방향을 정하고 공통 제작 스킬이 실제 산출물을 만드는 2축 구조입니다.

새 업종 스킬의 내부 이름은 다음과 같습니다.

```text
chany-professional-services
chany-education-marketing
chany-healthcare-marketing
chany-food-dining
chany-hospitality-travel
chany-space-real-estate
chany-digital-product-marketing
chany-automotive-marketing
chany-consumer-tech-marketing
chany-corporate-employer
chany-live-culture-events
```

새 작업에서 다음 요청으로 확인할 수 있습니다.

```text
Chany's Studio가 지원하는 전문 스킬과 광고 캠페인 제작 순서를 알려줘.
```

업종 호출도 새 작업에서 확인합니다.

```text
Claude Cowork: 신규 호텔 예약 캠페인에 맞는 업종 오버레이와 제작 스킬 체인을 알려줘.
ChatGPT Work: @chany-hospitality-travel로 신규 호텔 예약 캠페인의 방향을 잡아줘.
Codex: $chany-hospitality-travel로 신규 호텔 예약 캠페인의 방향을 잡아줘.
```

플랫폼별 레퍼런스 표시 테스트:

```text
Claude Cowork(자연어 자동 선택): 제품 촬영 레퍼런스 6장을 Pinterest에서만 찾아 링크나 HTML이 아니라 이 대화에 이미지로 보여줘.
ChatGPT Work: @chany-reference-board로 제품 촬영 레퍼런스 6장을 Pinterest에서만 찾아 링크나 HTML이 아니라 이 대화에 이미지로 보여줘.
Codex: $chany-reference-board로 제품 촬영 레퍼런스 6장을 Pinterest에서만 찾아 링크나 HTML이 아니라 이 대화에 이미지로 보여줘.

ChatGPT Work: @chany-commercial-photo-reference로 Production Paradise의 전문 광고사진 레퍼런스 6장을 대화에 보여줘.
Codex: $chany-award-ad-reference로 Ads of the World, D&AD, The One Show의 수상 광고 레퍼런스를 비교해줘.
```

프로젝트 설정 테스트:

```text
Claude Cowork: /project-studio 테스트 광고 프로젝트를 설정해줘.
ChatGPT Work: @chany-project로 테스트 광고 프로젝트를 설정해줘.
Codex: $chany-project로 테스트 광고 프로젝트를 설정해줘.
일반 메시지 호환 별칭: /project-studio 테스트 광고 프로젝트를 설정해줘.
```

Claude Cowork에서는 빠진 캠페인 정보가 **Ask your question** 카드로 표시되고, 설계안 뒤에 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드가 나타나는지 확인합니다. 입력이나 기존 기록에 이미 있는 내용은 재질문하지 않으며, 질문 카드가 노출되지 않거나 빈 응답이면 일반 텍스트 확인으로 안전하게 전환해야 합니다. `취소`는 재질문 없이 Chany 단계를 끝내며, 같은 요청의 Moai 초기화는 그 자체의 선행 미리보기와 승인을 사용합니다.

## Moai 연동 설치 확인

Chany's Studio는 Moai 없이도 단독으로 동작합니다. 두 플러그인을 함께 쓰려면 설치 화면에서 **Chany's Studio (`photo-reference-studio`)**와 **Moai**가 각각 설치·활성화됐는지 확인하고, 설치 또는 업데이트 뒤 새 대화나 새 작업을 시작합니다.

각 플러그인을 별도로 먼저 확인하세요.

```text
Moai 확인: Moai가 제공하는 project 기능과 현재 설치 상태를 알려줘.
Chany 확인: Chany's Studio가 제공하는 chany-project와 업종 스킬을 알려줘.
```

`/project`는 Moai 소유, `/project-studio`는 Chany's Studio 소유입니다. 일반 `/project-studio`는 기존 Moai 산출물을 자동으로 읽어 재사용합니다. 산출물이 없을 때는 현재 호스트가 정확한 Moai project 스킬을 같은 요청 안에서 실제 호출·대기할 수 있는 경우에만 승인안에 그 단계를 포함하며, 그렇지 않으면 Chany 단독 설정과 수동 2단계 안내를 제공합니다. Chany 단계는 `.moai/**`를 수정하지 않습니다. `--with-moai` 또는 `moai-chain`은 실제 Moai 단계를 필수로 요구하고, `--chany-only`는 감지를 건너뜁니다.

`/project-studio`로 프로젝트를 설정한 뒤 실제 광고·콘텐츠 작업에서는 요청한 산출물과 위험에 직접 필요한 **설치·활성화된 Moai 전문 스킬만** 조건부로 연결합니다. 예를 들어 한국 광고 주장·메시지·인플루언서, 현행 법령·MFDS 안전, 캠페인 기획, 상세페이지, 디자인 반복, 미디어 제작 검토가 해당합니다. 모든 전문 결과는 실행한 정확한 스킬 이름, 설치 출처와 버전, 검토한 입력·산출물 버전, 근거 출처와 확인 날짜를 포함한 인계 기록으로 Chany 흐름에 돌아옵니다. Moai 결과는 상위 근거일 뿐 게시 승인이나 법률적 승인으로 취급하지 않습니다.

관련 Moai 스킬이 설치되지 않았거나 현재 세션에서 보이지 않으면 Chany's Studio는 이를 모방하지 않고 단독 흐름으로 계속합니다. 이때 만들 수 있는 브리프와 초안은 진행하되, 전문 검토나 공식 근거가 필요한 항목은 미해결 상태로 남기고 게시를 보류합니다. Moai를 설치한 뒤에는 새 대화나 새 작업에서 다시 확인해야 합니다.

## 유료 생성과 최종 게시 계약 확인

생성형 정적 이미지와 부분 편집의 플러그인 기본값은 GPT Image 2이며 정확한 모델 ID는 `gpt-image-2`입니다. 현재 도구가 이 모델을 선택할 수 있는지 먼저 확인하고, 요청 기본값과 실제 해석 모델을 함께 보여줍니다. 확인되지 않은 공급자 기본값을 GPT Image 2라고 표시하지 않습니다. 사용자의 명시적 요청, 승인된 프로젝트 정책 또는 라이브 검증된 필수 기능 부재가 있을 때만 다른 모델을 해당 범위에 한해 승인받아 사용합니다. 영상·음성·클립 조립은 이 정적 이미지 정책의 대상이 아닙니다.

유료 미디어 생성 전에는 연결된 서비스의 **현재 도구 스키마와 카탈로그**를 다시 읽습니다. 무료 견적·비용 미리보기·검증 기능이 있으면 먼저 실행하고, 최종 프롬프트, 입력별 역할, 실제 선택된 모델·워크플로와 옵션, 서버 조정값, 생성 수량, 제공자가 반환한 크레딧 정보를 한 번에 보여준 뒤 해당 버전에 대한 승인을 받습니다. `gpt-image-2` 기본 정책을 제외한 정적 모델명·가격표·플랫폼 수치를 플러그인 문서에서 현재 값처럼 사용하지 않습니다. 모델이나 공급자 변경은 기존 견적과 승인을 무효화하므로 새 사전검토를 거칩니다.

타임아웃이나 연결 해제로 결제·생성 결과가 불명확하면 같은 요청을 다시 제출하지 않습니다. 원래 작업 영수증과 상태·기록을 먼저 확인해 기존 결과를 이어받고, 요청 의미·입력 역할·모델·옵션·수량·길이·비율·언어·크레딧 한도가 바뀌면 새 견적과 승인을 받습니다.

게시 전에는 정확한 최종 카피, 오퍼, 목적지, 크롭·배치와 렌더 버전을 `chany-publication-review`로 검토합니다. 이 검수는 현재 공식 1차 출처와 날짜, 다섯 검토 레인, 안정적인 버전 식별자와 이름이 지정된 사람 검토자를 사용합니다. 상태는 `blocked`, `draft-only`, `ready-for-named-human-review`, `reviewed-by-named-owner` 중 하나이며, 어느 상태도 법률 자문·법률적 승인이나 자동 게시 권한을 뜻하지 않습니다.

## 기존 사용자 업데이트

### ChatGPT 및 Codex 앱

가져온 마켓플레이스 또는 워크스페이스 플러그인에서 **Refresh**를 누른 뒤 새 작업을 시작합니다.

### Claude Cowork

1. **Customize → Plugins**를 엽니다.
2. `photo-reference-studio` 마켓플레이스에서 **Update**를 누릅니다.
3. 버전 `2.5.0`, `chany-project`, `chany-creative-direction`, `chany-campaign-video`, `chany-media-production-loop`, 공통 제작 스킬과 11개 업종 스킬 목록을 확인합니다.
4. 새 Cowork 작업을 시작합니다.

### Claude Code

```text
/plugin marketplace update photo-reference-studio
/plugin update photo-reference-studio@photo-reference-studio
/reload-plugins
```

## 1.x에서 2.0으로 바뀐 점

- 화면 이름이 **Chany's Studio**로 변경됐습니다.
- 하나였던 `auto-photo-production` 제작 지침이 카테고리별 전문 스킬로 분리됐습니다.
- 대표 진입점은 ChatGPT Work의 `@chany-studio`와 Codex의 `$chany-studio`입니다.
- 기존 호출은 ChatGPT Work의 `@auto-photo-production`과 Codex의 `$auto-photo-production`에서 호환 안내용으로 한 버전 유지됩니다.
- 광고·마케팅·상세페이지·프로모션 워크플로가 우선 범위입니다.

## 2.1에서 추가된 기능

- Claude Cowork의 `/project-studio`, ChatGPT Work의 `@chany-project`, Codex의 `$chany-project`로 광고 제작 프로젝트를 초기화합니다.
- ChatGPT 또는 Codex에 일반 메시지로 전달된 `/project-studio …`도 호환 별칭으로 처리합니다. ChatGPT 슬래시 메뉴 명령은 아닙니다.
- `AGENTS.md`를 공통 정본으로 만들고 Claude는 `CLAUDE.md`에서 같은 지침을 불러옵니다.
- 프로젝트 브리프·상태, ChatGPT Work 호스팅 위임 규칙과 같은 역할의 Claude·로컬 Codex 프로젝트 에이전트를 함께 설정합니다.
- 기존 지침은 백업한 뒤 관리 구역만 병합하며, `status`, `update`, `doctor` 모드를 지원합니다.
- `AGENTS.override.md` 우선순위를 감지해 공통 지침이 조용히 무시되지 않도록 합니다.

## 2.2.0에서 추가된 기능

- 업종 오버레이가 시장·고객 여정·증거·표현 위험을 정하고 공통 제작 스킬이 결과물을 만드는 2축 구조를 도입했습니다.
- 전문 서비스, 교육, 헬스케어, 식당·카페/F&B, 호텔·여행, 공간·인테리어·부동산, 디지털 제품, 자동차·모빌리티, 소비자 기술, 기업·채용, 공연·전시·행사·지역축제용 업종 스킬 11개를 추가했습니다.
- 레퍼런스 검색은 L1 광역 카테고리를 먼저 찾고 필요할 때 직접 L2 하위 카테고리 하나까지만 사용합니다. 세 번째 분류와 지역·플랫폼·스타일·무드·색·카메라 같은 창작 수식어는 검색어에 넣지 않습니다.
- `/project`는 Moai, `/project-studio`는 Chany's Studio가 소유하도록 경계를 명시했습니다. Chany's Studio는 기존 `.moai/**`를 읽기 전용으로 자동 재사용합니다.
- 일반 `/project-studio`가 기존 Moai 기록을 자동 감지해 재사용하며, 새 Moai 단계는 현재 호스트의 실제 in-process 호출 기능이 확인된 경우에만 승인 후 실행합니다.
- `--with-moai`와 `moai-chain`은 Moai 단계를 필수로 요구하고, `--chany-only`는 Chany 단독 초기화를 강제합니다.
- 프로젝트 설정 뒤에는 설치된 Moai의 규제·마케팅·디자인·미디어 전문 스킬을 필요한 경우에만 정확한 이름·출처·버전과 함께 인계하고, 사용할 수 없으면 Chany 단독 초안 흐름과 명시적 검토 보류로 전환합니다.
- 유료 생성은 현재 도구 스키마·무료 견적·버전별 승인을 따르고, 결과가 불명확할 때 기존 작업을 확인하기 전에는 재제출하지 않습니다.
- 최종 게시 후보는 `chany-publication-review`의 공식 출처·증거·거래·메시지·권리·플랫폼·최종 렌더 게이트와 이름이 지정된 사람 검토를 거칩니다.

## 2.5.0에서 변경된 기능

- 시각 레퍼런스를 Pinterest 범용 보드, Production Paradise 상업사진 보드, Ads of the World·D&AD·The One Show 수상 광고 보드로 분리했습니다. 각 스킬은 자기 공급자만 사용하며 후보가 부족해도 다른 경로로 보충하지 않습니다. Stocksy, ShotDeck, Death to Stock은 제외했습니다.
- 레퍼런스 표시 수량은 6장을 기본으로 사용하되 사용자가 양의 정수로 지정하면 정확히 그 수량을 따릅니다. 허용된 검색 풀이나 라이브 도구 한도로 채우지 못하면 임의로 수량을 줄이지 않고 미완성 수량을 보고합니다.
- `chany-creative-direction`을 추가해 초보자의 일반 언어를 브랜드 코어·감성 에디토리얼·트렌드 포워드 세 콘셉트, 비교 점수, 추천 방향과 제작 프롬프트로 전환합니다.
- `chany-video-reference-ingest`를 추가해 YouTube·Instagram 등 영상 페이지를 사용자 호출 브라우저 탭 캡처, 실제 미디어 URL 또는 첨부 파일로 분류하고 관찰 가능한 범위만 공용 영상 해체 절차에 넘깁니다.
- 브라우저 확장 캡처는 로컬 저장과 명시적 사용자 동작을 기본으로 하며 플랫폼 다운로드·스트림 재구성·DRM 우회·인증정보 수집을 금지합니다. 외부 서비스 업로드와 움직임 전달·제품 교체·생성은 각각 별도 승인입니다.
- 모든 제작 분야가 목적·입력 권위·장면·구도·조명·재질·타이포·보존·제외·출력·검수 순서의 공통 프롬프트 계약과 안티 제네릭 검수를 사용합니다.
- Pinterest Predicts·Pinterest Palette 신호는 검색어가 아니라 후보 선별 뒤의 브랜드 적합성 판단에만 사용합니다. 플랫폼·상세페이지·GPT Image 2 규칙은 현재 공식 문서로 검증하되 승인된 세 레퍼런스 경로 밖의 예시 이미지는 사용하지 않습니다.
- Claude 미리보기 서버는 비어 있지 않은 `original_source_url`을 거부하고 출력에서도 항상 `null`로 유지해 외부 Pin 목적지 우회를 차단합니다.

## 2.4.0에서 변경된 기능

- 이미지·캠페인 영상 생성의 작업 ID, 비용 승인, 공급자 상태, 화면 검수와 제한된 결함 교정을 `chany-media-production-loop`와 공통 미디어 작업 장부로 통합했습니다.
- 코드 진단 반복은 외부 `moai-code-quality-loop`, 창작 생성 반복은 Chany 미디어 제작 루프로 분리해 Claude Code 훅 동작을 Codex나 생성 작업에 잘못 적용하지 않도록 했습니다.
- 크리에이터 템플릿형 영상 전용 스킬을 플러그인에서 제거하고, 승인된 캠페인 영상만 콘셉트 설계 → 미디어 제작 루프 → 조립 단계로 연결합니다.
- 배치 작업은 고정 인덱스를 유지하고 실패 항목만 재검토하며, 불명확한 유료 작업은 원래 작업 ID를 확인하기 전 다시 제출하지 않습니다.

## 2.3.0에서 변경된 기능

- 제품 광고·브랜드 필름·프로모션 영상을 위한 `chany-campaign-video`를 추가했습니다. 업종 지침과 승인 브리프에서 장면별 메시지 역할, 기준 스틸, 모션 방식과 클립 검수를 연결합니다.
- 영상 레퍼런스 분석을 공용 절차로 이동해 모든 캠페인 영상이 같은 로컬 권리·프레임·비트·비복제 규칙을 사용합니다.
- 영상 조립에 `assemble`, `replace-segment`, `variants`, `verify` 모드를 두고, 원본 프레임레이트·오디오 보존, 프로젝트·캠페인·마스터 해시별 출력, 컷 경계 검증을 추가했습니다.
- 마케팅 브리프가 실제 성과의 추적·어트리뷰션·비교 가능성·표본을 확인하고 `winner`, `inconclusive`, `invalid` 중 하나와 다음 한 변수 실험을 기록할 수 있습니다.
- 실패한 생성은 승인본과 분리된 제작 시도 기록으로 남기며, 모델명·가격·플랫폼 규격·폰트 경로는 실행 시점의 권위 없이 고정하지 않습니다.

## 2.2.4에서 변경된 기능

- 생성형 정적 이미지와 부분 편집의 기본 모델을 GPT Image 2(`gpt-image-2`)로 고정했습니다.
- 다른 모델은 사용자 지정, 승인된 프로젝트 정책 또는 검증된 필수 기능 부재가 있을 때만 범위를 기록하고 승인받아 사용합니다. 전환 시 견적과 유료·크리에이티브 승인을 다시 받습니다.
- 프로젝트 지침, 브리프와 상태 파일에 정적 이미지 모델 정책을 기록합니다. 영상·음성과 로컬 조립은 별도 도구 경계를 유지합니다.
- Claude의 `reference-preview`를 항상 로드하고, Pinterest 검색 전에 미리보기 도구 호출 가능 여부를 확인하도록 보강했습니다.

## 2.2.3에서 변경된 기능

- Claude Cowork의 `/project-studio`가 누락된 프로젝트 정보를 네이티브 **Ask your question** 카드로 수집합니다.
- 기존 입력·첨부·Moai 기록의 답을 재사용하며, 한 화면에는 캠페인에 필요한 질문만 최대 3개 표시합니다.
- Chany 관리 파일을 쓰기 전에는 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드로 정확한 설계안을 확인합니다. 빈 응답은 승인이 아니며, 취소는 재질문 없이 Chany 단계를 끝냅니다. 같은 요청의 Moai 단계는 자체 승인을 따릅니다.
- ChatGPT Work와 Codex는 각 호스트의 구조화 입력을 우선하고, 지원되지 않으면 동일한 승인 경계를 유지한 텍스트 확인으로 전환합니다.

## 2.2.2에서 변경된 기능

- 레퍼런스 검색과 인라인 미리보기 소스를 Pinterest 하나로 제한했습니다.
- L1 검색 1회와 선택적 직접 L2 검색 1회만 사용하며, 서로 다른 Pinterest 이미지 6장이 실제로 표시돼야 보드가 완료됩니다.
- 후보가 실패하면 같은 검색 풀의 사용하지 않은 Pinterest 후보로 교체합니다. 6장 미만이면 미완성으로 표시하고 다른 사이트나 세 번째 검색어로 채우지 않습니다.

## 2.2.1에서 추가된 기능

- 제품이 등장하는 생성 영상 장면마다 승인 스틸을 현재 영상 도구가 노출하는 이미지 조건 첫 프레임 역할에 연결하고, 모드·역할 오류와 결제 상태가 불명확한 오류를 구분합니다.
- 영상 레퍼런스 파일을 로컬 프레임·컨택트시트·비트 표로 분해해 타이밍만 새 샷 플랜에 옮깁니다.
- `chany-video-assembly`가 승인된 클립을 실제 측정값과 사용자 또는 최신 공식 납품 사양에 맞춰 조립하고 훅만 다른 변형과 빈 성과 입력표를 만듭니다.
- `chany-preflight`가 영상·프레임·배치 작업에 필요한 도구와 한글 폰트를 현재 런타임에서 직접 확인합니다. 설치는 자동으로 시작하지 않습니다.
- 이미지 생성·편집 재시도는 부정문을 누적하지 않고 수량·비율·위치·사용자 제공 치수로 확인 가능한 목표 상태를 지정합니다.

## 업데이트가 반영되지 않을 때

- 설치 상세의 버전이 `2.5.0`인지 확인합니다.
- Refresh 또는 Update 뒤 반드시 새 대화나 새 작업을 시작합니다.
- Moai 체이닝을 사용할 때는 두 플러그인의 설치·활성화뿐 아니라 현재 호스트의 실제 플러그인 간 호출 기능도 확인합니다. 기능이 없으면 Moai project 완료 후 Chany를 실행하는 수동 2단계를 사용합니다. 필수 실행은 `--with-moai`, 단독 실행은 `--chany-only`입니다.
- Claude Code에서는 `/plugin`의 Errors 탭을 확인합니다.
- Claude Cowork에서 레퍼런스 이미지가 안 보이면 Node.js 18 이상과 `reference-preview` 연결을 확인합니다.
- Higgsfield 실행이 안 되면 연결을 해제한 뒤 호스트의 로그인 화면에서 다시 인증합니다.

삭제와 재설치는 [문제 해결 가이드](TROUBLESHOOTING.md)를 먼저 확인한 뒤 최후 수단으로 사용하세요.
