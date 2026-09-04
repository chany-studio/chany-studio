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
- 버전: `2.1.0`
- 대표 Skill: `chany-studio`
- 프로젝트 Skill: `chany-project`
- 전문 Skill: 마케팅 브리프, 제품 에셋, 레퍼런스, 키비주얼, 상세페이지, 광고, 편집, 패션, UGC
- 연결: Higgsfield
- Claude Cowork 추가 연결: `reference-preview`

새 작업에서 다음 요청으로 확인할 수 있습니다.

```text
Chany's Studio가 지원하는 전문 스킬과 광고 캠페인 제작 순서를 알려줘.
```

Claude Cowork 레퍼런스 표시 테스트:

```text
$chany-reference-board로 제품 촬영 레퍼런스 6장을 Behance와 Pinterest에서 찾아 링크나 HTML이 아니라 이 대화에 이미지로 보여줘.
```

프로젝트 설정 테스트:

```text
Claude Cowork: /project 테스트 광고 프로젝트를 설정해줘.
ChatGPT Work/Codex: $chany-project로 테스트 광고 프로젝트를 설정해줘.
```

## 기존 사용자 업데이트

### ChatGPT 및 Codex 앱

가져온 마켓플레이스 또는 워크스페이스 플러그인에서 **Refresh**를 누른 뒤 새 작업을 시작합니다.

### Claude Cowork

1. **Customize → Plugins**를 엽니다.
2. `photo-reference-studio` 마켓플레이스에서 **Update**를 누릅니다.
3. 버전 `2.1.0`과 `chany-project`를 포함한 전문 스킬 목록을 확인합니다.
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
- 대표 진입점은 `$chany-studio`입니다.
- 기존 `$auto-photo-production`은 호환 안내용으로 한 버전 유지됩니다.
- 정적 이미지뿐 아니라 Higgsfield 기반 UGC 광고 제작이 추가됐습니다.
- 광고·마케팅·상세페이지·프로모션 워크플로가 우선 범위입니다.

## 2.1에서 추가된 기능

- Claude Cowork의 `/project`와 ChatGPT Work/Codex의 `$chany-project`로 광고 제작 프로젝트를 초기화합니다.
- `AGENTS.md`를 공통 정본으로 만들고 Claude는 `CLAUDE.md`에서 같은 지침을 불러옵니다.
- 프로젝트 브리프·상태, ChatGPT Work 호스팅 위임 규칙과 같은 역할의 Claude·로컬 Codex 프로젝트 에이전트를 함께 설정합니다.
- 기존 지침은 백업한 뒤 관리 구역만 병합하며, `status`, `update`, `doctor` 모드를 지원합니다.
- `AGENTS.override.md` 우선순위를 감지해 공통 지침이 조용히 무시되지 않도록 합니다.

## 업데이트가 반영되지 않을 때

- 설치 상세의 버전이 `2.1.0`인지 확인합니다.
- Refresh 또는 Update 뒤 반드시 새 대화나 새 작업을 시작합니다.
- Claude Code에서는 `/plugin`의 Errors 탭을 확인합니다.
- Claude Cowork에서 레퍼런스 이미지가 안 보이면 Node.js 18 이상과 `reference-preview` 연결을 확인합니다.
- Higgsfield 실행이 안 되면 연결을 해제한 뒤 호스트의 로그인 화면에서 다시 인증합니다.

삭제와 재설치는 [문제 해결 가이드](TROUBLESHOOTING.md)를 먼저 확인한 뒤 최후 수단으로 사용하세요.
