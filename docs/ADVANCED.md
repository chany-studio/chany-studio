# 고급·개발자 안내

> 초보자는 읽지 않아도 됩니다. 처음 쓰는 분은 [README의 처음 쓰는 분께](../README.md#처음-쓰는-분께)부터 보세요. 여기에는 버전별 변경 내용과 개발자·Moai 사용자를 위한 설명을 모았습니다.

## 버전별 변경 요약

전체 변경 이력은 [CHANGELOG](../CHANGELOG.md)에 있습니다.

### 최근 버전 안내 (README에서 옮김)

2.9.0: 처음 쓰는 분을 위한 **빠른 시작**이 기본입니다. 확인 카드 한 장으로 방향·문구·비용을 함께 승인하고, 대화는 쉬운 한국어로 진행합니다. 용어 사전과 고급 안내 문서를 추가했습니다.

2.8.2: 기본 이미지 모델을 **GPT Image 2.5**로 전환한 내용을 모든 안내에 맞추고, 옛 문구·누락된 스킬 안내를 정리했습니다. 업종 스킬의 공통 양식과 전문 레퍼런스 규칙은 한 곳에서 관리합니다.

2.8.1: 일반 레퍼런스는 **Pinterest 5장 + Meigen 5장, 총 10장을 대화에 표시**합니다. 동일 카테고리 재검색·후보 교체는 추가 허락 없이 자동 진행하고, 레퍼런스 선택과 생성 조건은 한 번에 확인합니다. [사용 예시](REFERENCE-RECOVERY.md).

2.8.0 추가: **Higgsfield 광고 모션 디자인·Genjutsu 영상 부분 수정·GPT Image 2.5 지원**. 현재 이미지 기본값은 GPT Image 2.5이며 실제 연결을 확인한 기능만 실행합니다. [사용법과 예시](HIGGSFIELD-UPDATES.md).

2.7.0 추가: **Meigen 이미지·원본 프롬프트 분석 → 제품·서비스별 제작 프롬프트**. 기본 6장 또는 요청 수량을 대화에 표시하며 프로젝트 초기화와 기존 광고 제작에 연결합니다. [사용법·예시](MEIGEN-REFERENCES.md).

2.6.0 추가: **JTBD → Meta 광고 분석 → 구매 전환 영상·단일 이미지·캐러셀 → 전체 광고 카피·CTA 검수**. Claude와 ChatGPT Work/Codex에서 공통으로 사용하며 MoAI는 선택형 전문 확장입니다. [사용법·복습용 프롬프트·MoAI 검토 결과](PERFORMANCE-ADS.md)를 확인하세요.

### 2.7.0 Meigen 레퍼런스

업데이트 후 `chany-ai-prompt-reference`가 표시되는지 확인하세요. Meigen MCP는 필수 설치 항목이 아닙니다. 연결된 Meigen 검색 도구 또는 브라우저·이미지 표시 기능으로 사용하며 Pinterest용 `reference-preview`와는 별도입니다. [사용법·복습 프롬프트](MEIGEN-REFERENCES.md).

### 1.x에서 2.0으로 바뀐 점

- 화면 이름이 **Chany's Studio**로 변경됐습니다.
- 하나였던 `auto-photo-production` 제작 지침이 카테고리별 전문 스킬로 분리됐습니다.
- 대표 진입점은 ChatGPT Work의 `@chany-studio`와 Codex의 `$chany-studio`입니다.
- 기존 호출은 ChatGPT Work의 `@auto-photo-production`과 Codex의 `$auto-photo-production`에서 호환 안내용으로 한 버전 유지됩니다.
- 광고·마케팅·상세페이지·프로모션 워크플로가 우선 범위입니다.

### 2.1에서 추가된 기능

- Claude Cowork의 `/project-studio`, ChatGPT Work의 `@chany-project`, Codex의 `$chany-project`로 광고 제작 프로젝트를 초기화합니다.
- ChatGPT 또는 Codex에 일반 메시지로 전달된 `/project-studio …`도 호환 별칭으로 처리합니다. ChatGPT 슬래시 메뉴 명령은 아닙니다.
- `AGENTS.md`를 공통 정본으로 만들고 Claude는 `CLAUDE.md`에서 같은 지침을 불러옵니다.
- 프로젝트 브리프·상태, ChatGPT Work 호스팅 위임 규칙과 같은 역할의 Claude·로컬 Codex 프로젝트 에이전트를 함께 설정합니다.
- 기존 지침은 백업한 뒤 관리 구역만 병합하며, `status`, `update`, `doctor` 모드를 지원합니다.
- `AGENTS.override.md` 우선순위를 감지해 공통 지침이 조용히 무시되지 않도록 합니다.

### 2.2.0에서 추가된 기능

- 업종 오버레이가 시장·고객 여정·증거·표현 위험을 정하고 공통 제작 스킬이 결과물을 만드는 2축 구조를 도입했습니다.
- 전문 서비스, 교육, 헬스케어, 식당·카페/F&B, 호텔·여행, 공간·인테리어·부동산, 디지털 제품, 자동차·모빌리티, 소비자 기술, 기업·채용, 공연·전시·행사·지역축제용 업종 스킬 11개를 추가했습니다.
- 레퍼런스 검색은 L1 광역 카테고리를 먼저 찾고 필요할 때 직접 L2 하위 카테고리 하나까지만 사용합니다. 세 번째 분류와 지역·플랫폼·스타일·무드·색·카메라 같은 창작 수식어는 검색어에 넣지 않습니다.
- `/project`는 Moai, `/project-studio`는 Chany's Studio가 소유하도록 경계를 명시했습니다. Chany's Studio는 기존 `.moai/**`를 읽기 전용으로 자동 재사용합니다.
- 일반 `/project-studio`가 기존 Moai 기록을 자동 감지해 재사용하며, 새 Moai 단계는 현재 호스트의 실제 in-process 호출 기능이 확인된 경우에만 승인 후 실행합니다.
- `--with-moai`와 `moai-chain`은 Moai 단계를 필수로 요구하고, `--chany-only`는 Chany 단독 초기화를 강제합니다.
- 프로젝트 설정 뒤에는 설치된 Moai의 규제·마케팅·디자인·미디어 전문 스킬을 필요한 경우에만 정확한 이름·출처·버전과 함께 인계하고, 사용할 수 없으면 Chany 단독 초안 흐름과 명시적 검토 보류로 전환합니다.
- 유료 생성은 현재 도구 스키마·무료 견적·버전별 승인을 따르고, 결과가 불명확할 때 기존 작업을 확인하기 전에는 재제출하지 않습니다.
- 최종 게시 후보는 `chany-publication-review`의 공식 출처·증거·거래·메시지·권리·플랫폼·최종 렌더 게이트와 이름이 지정된 사람 검토를 거칩니다.

### 2.6.0에서 추가된 기능

- `chany-jtbd-persona`와 `chany-meta-ad-research`를 추가해 고객 구매 동기와 공식 Meta 광고 라이브러리의 공개 광고 관찰을 분리했습니다.
- 영상·단일 이미지·캐러셀에 한 구매 전략을 연결하고, 디자인·훅·본문·플랫폼 제목·설명·CTA와 카드 순서를 제품 또는 서비스에 맞게 변형하도록 구성했습니다.
- 공개 게재 정보는 성과 증거로 단정하지 않으며, 실제 성과 자료가 있을 때만 정확한 소재 연결·추적·비교 검토를 별도로 수행합니다.
- 핵심 제작은 MoAI 없이 동작하고, 설치·호출 가능한 전문 스킬만 필요한 범위에서 선택적으로 연결합니다.

[2.6.0 상세 사용법과 예시](PERFORMANCE-ADS.md)

### 2.5.0에서 변경된 기능

- 시각 레퍼런스를 Pinterest 범용 보드, Production Paradise 상업사진 보드, Ads of the World·D&AD·The One Show 수상 광고 보드로 분리했습니다. 각 스킬은 자기 공급자만 사용하며 후보가 부족해도 다른 경로로 보충하지 않습니다. Stocksy, ShotDeck, Death to Stock은 제외했습니다.
- 레퍼런스 표시 수량은 6장을 기본으로 사용하되 사용자가 양의 정수로 지정하면 정확히 그 수량을 따릅니다. 허용된 검색 풀이나 라이브 도구 한도로 채우지 못하면 임의로 수량을 줄이지 않고 미완성 수량을 보고합니다.
- `chany-creative-direction`을 추가해 초보자의 일반 언어를 브랜드 코어·감성 에디토리얼·트렌드 포워드 세 콘셉트, 비교 점수, 추천 방향과 제작 프롬프트로 전환합니다.
- `chany-video-reference-ingest`를 추가해 YouTube·Instagram 등 영상 페이지를 사용자 호출 브라우저 탭 캡처, 실제 미디어 URL 또는 첨부 파일로 분류하고 관찰 가능한 범위만 공용 영상 해체 절차에 넘깁니다.
- 브라우저 확장 캡처는 로컬 저장과 명시적 사용자 동작을 기본으로 하며 플랫폼 다운로드·스트림 재구성·DRM 우회·인증정보 수집을 금지합니다. 외부 서비스 업로드와 움직임 전달·제품 교체·생성은 각각 별도 승인입니다.
- 모든 제작 분야가 목적·입력 권위·장면·구도·조명·재질·타이포·보존·제외·출력·검수 순서의 공통 프롬프트 계약과 안티 제네릭 검수를 사용합니다.
- Pinterest Predicts·Pinterest Palette 신호는 검색어가 아니라 후보 선별 뒤의 브랜드 적합성 판단에만 사용합니다. 플랫폼·상세페이지·GPT Image 2.5 규칙은 현재 공식 문서로 검증하되 승인된 세 레퍼런스 경로 밖의 예시 이미지는 사용하지 않습니다.
- Claude 미리보기 서버는 비어 있지 않은 `original_source_url`을 거부하고 출력에서도 항상 `null`로 유지해 외부 Pin 목적지 우회를 차단합니다.

### 2.4.0에서 변경된 기능

- 이미지·캠페인 영상 생성의 작업 ID, 비용 승인, 공급자 상태, 화면 검수와 제한된 결함 교정을 `chany-media-production-loop`와 공통 미디어 작업 장부로 통합했습니다.
- 코드 진단 반복은 외부 `moai-code-quality-loop`, 창작 생성 반복은 Chany 미디어 제작 루프로 분리해 Claude Code 훅 동작을 Codex나 생성 작업에 잘못 적용하지 않도록 했습니다.
- 크리에이터 템플릿형 영상 전용 스킬을 플러그인에서 제거하고, 승인된 캠페인 영상만 콘셉트 설계 → 미디어 제작 루프 → 조립 단계로 연결합니다.
- 배치 작업은 고정 인덱스를 유지하고 실패 항목만 재검토하며, 불명확한 유료 작업은 원래 작업 ID를 확인하기 전 다시 제출하지 않습니다.

### 2.3.0에서 변경된 기능

- 제품 광고·브랜드 필름·프로모션 영상을 위한 `chany-campaign-video`를 추가했습니다. 업종 지침과 승인 브리프에서 장면별 메시지 역할, 기준 스틸, 모션 방식과 클립 검수를 연결합니다.
- 영상 레퍼런스 분석을 공용 절차로 이동해 모든 캠페인 영상이 같은 로컬 권리·프레임·비트·비복제 규칙을 사용합니다.
- 영상 조립에 `assemble`, `replace-segment`, `variants`, `verify` 모드를 두고, 원본 프레임레이트·오디오 보존, 프로젝트·캠페인·마스터 해시별 출력, 컷 경계 검증을 추가했습니다.
- 마케팅 브리프가 실제 성과의 추적·어트리뷰션·비교 가능성·표본을 확인하고 `winner`, `inconclusive`, `invalid` 중 하나와 다음 한 변수 실험을 기록할 수 있습니다.
- 실패한 생성은 승인본과 분리된 제작 시도 기록으로 남기며, 모델명·가격·플랫폼 규격·폰트 경로는 실행 시점의 권위 없이 고정하지 않습니다.

### 2.2.4에서 변경된 기능

- 생성형 정적 이미지와 부분 편집의 기본 모델을 GPT Image 2.5(`gpt_image_2_5`)로 고정했습니다.
- 다른 모델은 사용자 지정, 승인된 프로젝트 정책 또는 검증된 필수 기능 부재가 있을 때만 범위를 기록하고 승인받아 사용합니다. 전환 시 견적과 유료·크리에이티브 승인을 다시 받습니다.
- 프로젝트 지침, 브리프와 상태 파일에 정적 이미지 모델 정책을 기록합니다. 영상·음성과 로컬 조립은 별도 도구 경계를 유지합니다.
- Claude의 `reference-preview`를 항상 로드하고, Pinterest 검색 전에 미리보기 도구 호출 가능 여부를 확인하도록 보강했습니다.

### 2.2.3에서 변경된 기능

- Claude Cowork의 `/project-studio`가 누락된 프로젝트 정보를 네이티브 **Ask your question** 카드로 수집합니다.
- 기존 입력·첨부·Moai 기록의 답을 재사용하며, 한 화면에는 캠페인에 필요한 질문만 최대 3개 표시합니다.
- Chany 관리 파일을 쓰기 전에는 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드로 정확한 설계안을 확인합니다. 빈 응답은 승인이 아니며, 취소는 재질문 없이 Chany 단계를 끝냅니다. 같은 요청의 Moai 단계는 자체 승인을 따릅니다.
- ChatGPT Work와 Codex는 각 호스트의 구조화 입력을 우선하고, 지원되지 않으면 동일한 승인 경계를 유지한 텍스트 확인으로 전환합니다.

### 2.2.2에서 변경된 기능

- 레퍼런스 검색과 인라인 미리보기 소스를 Pinterest 하나로 제한했습니다.
- L1 검색 1회와 선택적 직접 L2 검색 1회만 사용하며, 서로 다른 Pinterest 이미지 6장이 실제로 표시돼야 보드가 완료됩니다.
- 후보가 실패하면 같은 출처의 미사용 후보로 교체하고 같은 L1·직접 L2 범위에서 제한된 재검색을 자동 진행합니다. 부족하면 실제 이미지를 먼저 보여주고 수량과 원인을 안내합니다. 기본 통합 보드는 Pinterest 5장 + Meigen 5장입니다. [복구 규칙](REFERENCE-RECOVERY.md).

### 2.2.1에서 추가된 기능

- 제품이 등장하는 생성 영상 장면마다 승인 스틸을 현재 영상 도구가 노출하는 이미지 조건 첫 프레임 역할에 연결하고, 모드·역할 오류와 결제 상태가 불명확한 오류를 구분합니다.
- 영상 레퍼런스 파일을 로컬 프레임·컨택트시트·비트 표로 분해해 타이밍만 새 샷 플랜에 옮깁니다.
- `chany-video-assembly`가 승인된 클립을 실제 측정값과 사용자 또는 최신 공식 납품 사양에 맞춰 조립하고 훅만 다른 변형과 빈 성과 입력표를 만듭니다.
- `chany-preflight`가 영상·프레임·배치 작업에 필요한 도구와 한글 폰트를 현재 런타임에서 직접 확인합니다. 설치는 자동으로 시작하지 않습니다.
- 이미지 생성·편집 재시도는 부정문을 누적하지 않고 수량·비율·위치·사용자 제공 치수로 확인 가능한 목표 상태를 지정합니다.

## Claude Code 설치 (README에서 옮김)

```text
/plugin marketplace add chany-studio/chany-studio
/plugin install photo-reference-studio@photo-reference-studio
/reload-plugins
```

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

## `/project-studio`에서 Moai 문맥 감지와 조건부 체이닝

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

프로젝트의 업종과 산출물이 정해지면 `/project-studio`는 현재 설치돼 실제 호출 가능한 Moai 전문 스킬 중 **가장 작은 관련 체인만** 승인안에 제안합니다. 예를 들어 주장 검수는 `moai-seller:commerce-ad-claim-compliance-kr`, 발송 메시지는 `moai-seller:commerce-message-compliance-kr`, 협찬·추천·사용권은 `moai-seller:commerce-influencer-collab`, 현행 법령과 MFDS 질문은 `moai-lawyer:legal-law-research`와 `moai-lawyer:legal-mfds-safety`에 연결할 수 있습니다. 더 깊은 기획·상세페이지·촬영은 `moai-marketer:marketing-campaign-planner`, `moai-seller:commerce-detail-page-planner`, `moai-seller:commerce-product-photo-brief`, 디자인 반복은 `moai-designer:design-brief`, `moai-designer:design-iteration-loop`, `moai-designer:design-landing-motion`, Higgsfield 실행은 `moai-media:media-higgsfield-core`, `moai-media:media-higgsfield-image`, `moai-media:media-higgsfield-video`, `moai-media:media-higgsfield-identity`, `moai-media:media-higgsfield-assets`가 설치된 경우에만 제안됩니다.

각 결과는 정확한 Moai 스킬 이름, 목적, 검토 대상과 버전, 출처 날짜, 발견 사항, 미해결 항목과 후속 Chany 담당을 붙인 인용 가능한 전달물로 받습니다. Chany's Studio는 캠페인 브리프, 원본 잠금, 최종 크리에이티브 QA와 버전 고정 게시 검수를 계속 소유합니다. Moai 전문 스킬이 없으면 이를 흉내 내거나 필수로 만들지 않고 Chany 단독으로 진행하며, 빠진 근거나 사람 검토가 있으면 게시만 보류합니다.

## Moai와 함께 쓸 때

(사용 가이드에서 옮김)

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
