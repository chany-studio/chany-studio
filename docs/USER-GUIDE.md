# Chany's Studio 사용 가이드

Chany's Studio는 Claude와 ChatGPT Work에서 같은 프로젝트 지침을 사용하며 제품 원본과 승인 문구를 기준으로 광고·마케팅·상세페이지·홍보 콘텐츠를 만드는 전문 스킬 모음입니다.

## 어떤 스킬을 써야 하나요?

한 가지 결과가 분명하면 해당 전문 스킬을 바로 사용합니다. 키비주얼, 상세페이지, 광고, UGC처럼 두 분야 이상이 연결되면 ChatGPT Work의 `@chany-studio` 또는 Codex의 `$chany-studio`를 사용합니다. ChatGPT Work의 명시 호출은 `@스킬명`, Codex의 명시 호출은 `$스킬명`이며 자연어만으로도 설명에 맞는 스킬을 자동 선택할 수 있습니다. Claude Cowork에서는 `/project-studio` 슬래시 명령을 제외한 전문 작업을 자연어로 요청해 자동 선택합니다.

아래 예시의 `ChatGPT Work`와 `Codex` 호출 줄은 서로 대안입니다. 사용하는 플랫폼의 한 줄만 선택하고 이어지는 요청을 함께 입력하세요.

| 원하는 결과 | 사용할 스킬 |
| --- | --- |
| 새 프로젝트 지침·브리프·에이전트 설정 | ChatGPT `@chany-project` · Codex `$chany-project` |
| 전체 캠페인 또는 여러 산출물 | ChatGPT `@chany-studio` · Codex `$chany-studio` |
| 캠페인 목표·타깃·메시지·산출물 계획 | ChatGPT `@chany-marketing-brief` · Codex `$chany-marketing-brief` |
| 누끼·순백 팩샷·제품 클린업 | ChatGPT `@chany-product-assets` · Codex `$chany-product-assets` |
| Behance·Pinterest 레퍼런스 비교 | ChatGPT `@chany-reference-board` · Codex `$chany-reference-board` |
| 제품 연출컷·마스터 키비주얼 | ChatGPT `@chany-campaign-visual` · Codex `$chany-campaign-visual` |
| 상세페이지 이미지 모듈 | ChatGPT `@chany-detail-page` · Codex `$chany-detail-page` |
| 광고·포스터·배너·채널 변형 | ChatGPT `@chany-ad-creative` · Codex `$chany-ad-creative` |
| 기존 이미지 부분 수정 | ChatGPT `@chany-image-edit` · Codex `$chany-image-edit` |
| 성인 모델·패션 착장 | ChatGPT `@chany-model-fashion` · Codex `$chany-model-fashion` |
| 리뷰·언박싱·튜토리얼 UGC | ChatGPT `@chany-ugc-ads` · Codex `$chany-ugc-ads` |

## 0. 프로젝트 설정

프로젝트를 처음 시작할 때 한 번 실행합니다. 현재 작업 폴더를 읽고 이미 제공된 정보는 다시 묻지 않으며, 부족한 핵심 정보만 한 번에 최대 3개씩 확인합니다. 파일을 쓰기 전 프로젝트 요약, 스킬 체인과 변경 파일을 보여주고 승인을 기다립니다.

```text
Claude Cowork
/project-studio 신제품 선크림의 상세페이지, Meta 광고 3종과 15초 리뷰 UGC 프로젝트를 설정해줘.

ChatGPT Work
@chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.

Codex
$chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.

일반 메시지 호환 별칭
/project-studio 신제품 선크림 광고 프로젝트를 설정해줘.
```

Claude에서 `/project-studio`가 보이지 않으면 `/photo-reference-studio:project-studio`를 사용합니다. ChatGPT Work의 공식 명시 호출은 `@chany-project`, Codex는 `$chany-project`입니다. ChatGPT 또는 Codex에 `/project-studio …`가 일반 메시지로 전달되면 호환 별칭으로 처리하지만 ChatGPT 슬래시 메뉴에 등록되는 명령은 아닙니다.

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
1:1·4:5·9:16 광고소재와 15초 리뷰형 UGC가 필요해.
먼저 산출물 수, 승인 지점과 필요한 정확한 문구를 정리해줘.
```

전체 캠페인의 기본 순서는 다음과 같습니다.

`브리프 → 원본 잠금 → 레퍼런스 선택 → 키비주얼 승인 → 상세페이지 → 광고 변형 → UGC → 전체 검수`

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
Behance와 Pinterest 후보를 링크만 주지 말고 이 대화 안에 이미지로 보여주고,
구도·조명·배경·색감·소품의 Visual DNA를 설명해줘.
```

기본적으로 후보 6장을 보여준 뒤 번호 하나 또는 `자동 선택`을 기다립니다. 레퍼런스 속 제품, 모델, 로고, 패키지, 문구와 가격은 최종 결과로 가져오지 않습니다.

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

상세페이지 전체 HTML이 아니라 요청한 이미지 모듈을 제작합니다. 특징이나 혜택은 사용자가 제공한 사실만 사용합니다.

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

## 9. UGC 광고

```text
ChatGPT Work: @chany-ugc-ads로 이 제품의 15초 9:16 리뷰형 UGC 광고를 만들어줘.
Codex: $chany-ugc-ads로 이 제품의 15초 9:16 리뷰형 UGC 광고를 만들어줘.
첫 2초에 문제 상황을 보여주고, 실제 사용 장면과 제품 클로즈업 뒤 승인 CTA로 끝내줘.
같은 성인 크리에이터와 제품 형태를 모든 장면에서 유지해줘.
```

지원하는 대표 유형은 Product Review, Unboxing, Tutorial, SaaS, Try-on과 Localization입니다. 스킬은 다음을 순서대로 잠급니다.

1. 광고 목표와 플랫폼
2. 훅, 근거, 제품 시연과 CTA
3. 제품 및 크리에이터 권위 입력
4. 음성·자막·언어
5. 샷과 제품 노출 시간
6. 최종 영상의 제품 정확도, 카피와 전환 흐름

Higgsfield MCP가 지원하는 UGC 워크플로는 Claude 안에서 실행할 수 있습니다. Marketing Studio 템플릿이 필요한 작업은 입력과 템플릿을 준비한 뒤 Higgsfield 웹에서 완료합니다.

## 입력 정보 템플릿

```text
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
- UGC의 제품 노출, 크리에이터 일관성, 음성·자막 동기와 전환 흐름
- 출력 비율, 채널 안전영역과 작은 화면 가독성

치명적인 불일치가 있으면 승인하지 않고 관찰된 문제만 지정해 한 번 보정합니다. 확인할 수 없는 사항은 정확하다고 주장하지 않습니다.
