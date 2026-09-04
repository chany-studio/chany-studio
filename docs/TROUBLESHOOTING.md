# Chany's Studio 문제 해결

[공식 설치·사용설명서 (Notion)](https://jolly-phlox-79c.notion.site/Chany-s-Studio-3c783e9464668140b794ee076be24406)

## 저장소를 추가했지만 플러그인이 안 보임

주소가 정확한지 확인합니다.

```text
https://github.com/chany-studio/chany-studio
```

화면 표시명은 **Chany's Studio**지만 기존 업데이트 호환성을 위한 내부 식별자는 `photo-reference-studio`입니다. 마켓플레이스에서 이 식별자를 찾아 Refresh 또는 Update한 뒤 앱을 다시 시작하세요.

## 업데이트했는데 예전 기능이 나옴

다음 상태는 이전 설치본일 가능성이 높습니다.

- 버전이 `2.1.1`보다 낮음
- 대표 스킬 `chany-studio`가 없음
- 상세페이지·광고·UGC가 전문 스킬로 분리되어 있지 않음
- 레퍼런스를 이미지 대신 링크나 HTML만 제공함

Refresh 또는 Update 후 반드시 새 대화나 새 작업을 시작하세요. 이미 열린 대화는 시작할 때 읽은 이전 지침을 계속 사용할 수 있습니다.

## 기존 `auto-photo-production`만 보임

2.0에서는 `auto-photo-production`이 이전 요청과 문서를 위한 호환 안내로만 남습니다. 새 작업에서는 다음처럼 시작하세요.

```text
Claude Cowork(자연어 자동 선택): 이 제품의 광고 캠페인을 시작해줘.
ChatGPT Work: @chany-studio로 이 제품의 광고 캠페인을 시작해줘.
Codex: $chany-studio로 이 제품의 광고 캠페인을 시작해줘.
```

한 가지 결과라면 ChatGPT Work에서 `@chany-detail-page`, `@chany-ad-creative`, `@chany-ugc-ads`처럼 `@`로, Codex에서 `$chany-detail-page`, `$chany-ad-creative`, `$chany-ugc-ads`처럼 `$`로 해당 전문 스킬을 직접 사용합니다. Claude Cowork에서는 원하는 결과를 자연어로 요청하면 해당 전문 스킬을 자동 선택합니다.

## `/project-studio` 또는 `chany-project`가 보이지 않음

- 설치 상세 버전이 `2.1.1`인지 확인하고 Refresh 또는 Update합니다.
- Claude Cowork에서 짧은 `/project-studio`가 보이지 않으면 `/photo-reference-studio:project-studio`를 사용합니다.
- ChatGPT Work는 `@chany-project`, Codex는 `$chany-project` 또는 “현재 폴더를 광고 프로젝트로 설정해줘”라고 요청합니다.
- ChatGPT에서 `/project-studio …`는 슬래시 메뉴에 등록되지 않습니다. 일반 메시지로 전송되면 호환 별칭으로 처리되며, 입력창에서 가로막히면 `@chany-project`를 사용합니다.
- 업데이트 후 새 대화나 새 작업을 시작합니다. `AGENTS.md`, `CLAUDE.md`와 런타임별 설정은 다음 세션에서 확실히 로드됩니다. `.codex/agents/*.toml`은 로컬 Codex 클라이언트용이며 ChatGPT Work는 `AGENTS.md`의 호스팅 위임 규칙을 사용합니다.

## 프로젝트 지침을 만들 수 없음

- 파일이 연결된 로컬 프로젝트 또는 쓰기 가능한 작업 폴더에서 실행했는지 확인합니다.
- 홈 폴더, 파일시스템 루트와 플러그인 캐시는 안전을 위해 초기화 대상이 아닙니다.
- 기존 `AGENTS.md`나 `CLAUDE.md`에 충돌이 있으면 Chany's Studio가 제시한 병합 내용을 먼저 승인합니다.
- 같은 위치의 `AGENTS.override.md`는 `AGENTS.md`보다 우선합니다. 발견되면 사용자 내용을 보존한 연결 블록을 추가할지 먼저 확인합니다.
- 설정 중에는 이미지·영상 생성, Higgsfield 호출, 자동 커밋과 푸시를 하지 않습니다.
- `doctor` 모드는 읽기 전용입니다. 발견된 문제를 고치려면 별도로 수정 승인을 합니다.

기존 파일을 수정했다면 이전 내용은 `.chany-studio/backups/`에서 확인할 수 있습니다. 이 폴더에는 비밀번호나 API 키를 넣지 마세요.

## Higgsfield 연결 요청이 반복됨

- 앱이 표시하는 연결 또는 로그인 버튼을 사용합니다.
- 인증을 마친 뒤 처음 작업하던 대화로 돌아옵니다.
- 브라우저와 데스크톱 앱의 로그인 계정이 동일한지 확인합니다.
- 관리형 워크스페이스에서는 Higgsfield 연결 허용 여부를 관리자에게 확인합니다.
- 비밀번호, API 키, 액세스 토큰이나 인증 코드를 채팅에 붙여 넣지 않습니다.

Higgsfield 사용 권한, 요금제와 생성 크레딧은 플러그인에 포함되지 않습니다.

## Marketing Studio 템플릿이 자동 실행되지 않음

새 Marketing Studio의 템플릿 방식은 현재 Higgsfield 웹 전용입니다. Chany's Studio는 제품 입력, 브랜드 정보, 카피와 추천 템플릿을 준비한 뒤 웹에서 완료하도록 안내합니다. 웹 전용 기능을 Claude 안에서 완료했다고 표시하면 안 됩니다.

MCP에서 직접 실행 가능한 일반 이미지·영상·Soul·오디오 또는 지원되는 UGC 워크플로와 혼동하지 마세요.

## UGC 영상 생성이 시작되지 않음

- Higgsfield 연결이 현재 대화에서 활성화됐는지 확인합니다.
- 제품 이미지와 크리에이터 이미지의 역할을 각각 지정합니다.
- 목표 길이, 비율, 유형과 승인 CTA를 제공합니다.
- 여러 생성 단계가 있다면 크레딧 사용 범위 확인에 답합니다.
- 해당 템플릿이 웹 전용이면 ChatGPT Work의 `@chany-ugc-ads` 또는 Codex의 `$chany-ugc-ads`가 제공한 입력안을 Marketing Studio에서 실행합니다.

```text
제품 이미지는 제품 권위 입력, 인물 이미지는 성인 크리에이터 권위 입력이야.
15초 9:16 Product Review UGC로 만들고 CTA는 “지금 확인하기”로 고정해줘.
```

## 레퍼런스 이미지가 대화에 표시되지 않음

Claude Cowork에서 플러그인 상세의 `reference-preview` 연결과 컴퓨터의 Node.js 18 이상을 확인합니다.

```text
링크나 HTML만 주지 말고 `reference-preview`를 사용해 Behance·Pinterest 후보 6장을 현재 대화 안의 실제 이미지로 다시 보여줘. 표시되지 않는 후보는 교체해줘.
```

연결은 공개 미리보기만 가져옵니다. 가져올 수 없는 후보는 다른 후보로 교체해야 하며 링크나 HTML은 직접 이미지 표시를 대신하지 않습니다.

## 제품·라벨·모델·의류가 변형됨

해당 결과를 승인하지 말고 원본을 다시 권위 입력으로 지정합니다.

```text
ChatGPT Work: @chany-image-edit로 원본을 다시 권위 입력으로 사용해 관찰된 변형만 복원해줘.
Codex: $chany-image-edit로 원본을 다시 권위 입력으로 사용해 관찰된 변형만 복원해줘.
현재 캠페인 방향, 구도와 조명은 유지해줘.
```

투명 누끼는 생성형 재그리기보다 배경 제거를 우선합니다. 새 아트 디렉션은 여러 번 수정한 이미지가 아니라 깨끗한 원본에서 시작합니다.

## 광고 문구가 틀림

정확한 문구를 텍스트로 다시 제공하고 승인 카피로 고정합니다.

```text
승인 문구는 아래와 같아. 철자, 숫자와 줄 구분을 바꾸지 마.
메인: ...
기간: ...
CTA: ...
```

이미지 생성만으로 정확한 문구가 어려우면 텍스트 없는 비주얼 플레이트를 만들고 조판 가능한 도구로 카피를 적용해야 합니다.

## 부분 수정이 전체 이미지를 바꿈

```text
ChatGPT Work: @chany-image-edit로 배경 밝기만 수정해줘. 제품, 문구, 구도, 크기, 조명 방향과 그림자는 모두 고정해줘.
Codex: $chany-image-edit로 배경 밝기만 수정해줘. 제품, 문구, 구도, 크기, 조명 방향과 그림자는 모두 고정해줘.
```

한 번에 한 가지 속성만 요청하고 지원되는 경우 마스크 또는 명확한 영역을 제공합니다.

## 생성 비용이 예상보다 큼

MCP와 자동화 채널의 생성은 일반 크레딧을 사용할 수 있습니다. 전체 캠페인에서는 다음처럼 요청하세요.

```text
생성 전에 산출물별 예상 생성 횟수와 승인 지점을 보여주고, 승인 전에는 유료 생성을 시작하지 마.
```

## 버그 제보

[GitHub Issues](https://github.com/chany-studio/chany-studio/issues)에 다음을 포함하세요.

- 사용 플랫폼과 앱 버전
- Chany's Studio 버전
- 설치한 GitHub 마켓플레이스 주소
- 사용한 전문 스킬 이름
- 재현 가능한 축약 요청
- 기대한 동작과 실제 동작
- 개인정보와 비밀값을 제거한 오류 메시지 또는 화면
