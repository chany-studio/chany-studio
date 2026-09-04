# 설치 및 업데이트 가이드

[공식 설치·사용설명서 (Notion)](https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-v1-0-3c783e9464668140b794ee076be24406)

## 공통 마켓플레이스 주소

```text
https://github.com/junphoto1008-tech/photo-reference-studio
```

GitHub 축약형을 요구하는 경우:

```text
junphoto1008-tech/photo-reference-studio
```

플러그인 이름과 마켓플레이스 이름은 모두 `photo-reference-studio`입니다.

## ChatGPT 및 Codex 앱에 처음 설치

1. 앱에서 **Plugins**를 엽니다.
2. **Add marketplace** 또는 **마켓플레이스 추가**를 선택합니다.
3. 공통 GitHub 주소를 입력합니다.
4. 새로 추가된 **AI Photo Reference Studio** 마켓플레이스를 엽니다.
5. `photo-reference-studio`의 구성 요소와 Higgsfield 연결을 확인합니다.
6. **Install**을 누르고 필요한 연결 승인을 완료합니다.
7. 새 대화 또는 새 Codex 작업에서 사용합니다.

관리형 워크스페이스에서 이 메뉴가 없거나 설치가 차단되면 개인 설정 문제가 아닐 수 있습니다. 관리자 또는 소유자가 다음을 확인해야 합니다.

- Workspace settings의 Plugins에서 플러그인을 가져오거나 사용할 수 있게 지정했는지
- 플러그인 설치 정책이 해당 사용자 역할에 `Available` 또는 `Installed`인지
- Higgsfield와 같은 포함 앱 또는 MCP 연결이 허용되어 있는지
- 외부 서비스 로그인과 작업 권한이 허용되어 있는지

OpenAI는 마켓플레이스에서 가져온 워크스페이스 플러그인의 최신 원본을 가져올 때 **Refresh**를 사용하도록 안내합니다.

## Claude Cowork에 처음 설치

직접 이미지 미리보기 기능에는 Claude Desktop이 실행되는 컴퓨터의 **Node.js 18 이상**이 필요합니다. 터미널에서 `node --version`을 실행해 `v18` 이상이 표시되는지 먼저 확인하세요. 명령을 찾을 수 없다면 [Node.js 공식 다운로드](https://nodejs.org/en/download)에서 LTS 버전을 설치하고 Claude Desktop을 다시 시작합니다. 별도 npm 패키지는 필요하지 않습니다.

1. Claude Desktop에서 **Customize**를 엽니다.
2. **Plugins → Browse plugins**로 이동합니다.
3. **Personal plugins** 영역의 `+`를 누릅니다.
4. **Add marketplace → Add from a repository**를 선택합니다.
5. 공통 GitHub 주소를 입력합니다.
6. 추가된 마켓플레이스에서 `photo-reference-studio`를 선택합니다.
7. **Install**을 누르고 Higgsfield 인증을 완료합니다.
8. 플러그인 상세에서 Skill, Higgsfield와 로컬 `reference-preview` 연결이 활성화되었는지 확인합니다. `reference-preview`에는 별도 로그인이 필요하지 않습니다.
9. 새 Cowork 작업을 시작합니다.

마켓플레이스 추가와 플러그인 설치는 별도 단계입니다. 저장소를 추가했더라도 플러그인 카드에서 Install을 누르지 않았다면 아직 설치된 것이 아닙니다.

## Claude Code에 처음 설치

Claude Code 세션 안에서 실행:

```text
/plugin marketplace add junphoto1008-tech/photo-reference-studio
/plugin install photo-reference-studio@photo-reference-studio
/reload-plugins
```

`/plugin` 인터페이스에서는 다음 순서로도 설치할 수 있습니다.

1. **Marketplaces** 탭에서 GitHub 저장소를 추가합니다.
2. **Discover** 탭에서 `photo-reference-studio`를 찾습니다.
3. 세부 구성 요소를 확인하고 User, Project 또는 Local scope를 선택합니다.
4. 설치 요약에 reload 안내가 나오면 `/reload-plugins`를 실행합니다.

모든 프로젝트에서 혼자 사용하려면 User scope, 저장소 구성원과 설정을 공유하려면 Project scope, 현재 저장소에서 본인만 쓰려면 Local scope를 선택합니다.

## 기존 사용자 업데이트

### ChatGPT 및 Codex

1. Plugins 또는 Workspace settings의 Plugins를 엽니다.
2. 가져온 `photo-reference-studio` 플러그인을 선택합니다.
3. **Refresh**를 눌러 원본 마켓플레이스의 최신 버전을 가져옵니다.
4. 플러그인 상세에서 버전이 `1.3.2`인지 확인합니다.
5. 앱을 다시 시작하거나 새 작업을 시작합니다.

개인 설치 화면에서 Refresh가 보이지 않고 Update만 보이면 Update를 사용합니다. 어느 버튼도 없으면 마켓플레이스를 새로 고친 다음 플러그인을 제거·재설치합니다.

### Claude Cowork

1. **Customize → Plugins**를 엽니다.
2. Personal plugins에서 추가한 `photo-reference-studio` 마켓플레이스를 찾습니다.
3. 마켓플레이스의 **Update**를 누릅니다.
4. 설치된 플러그인을 열어 `1.3.2`인지 확인합니다.
5. 새 Cowork 작업을 시작합니다.

### Claude Code

```text
/plugin marketplace update photo-reference-studio
/plugin update photo-reference-studio@photo-reference-studio
/reload-plugins
```

`/plugin → Marketplaces`에서 해당 마켓플레이스의 자동 업데이트를 켤 수도 있습니다. 버전이 바뀌어도 이미 열려 있던 세션은 이전 구성 요소를 유지할 수 있으므로 reload 후 새 세션에서 검증하는 것이 안전합니다.

## 정상 설치 확인

플러그인 상세 화면에서 다음을 확인합니다.

- 이름: `photo-reference-studio`
- 버전: `1.3.2`
- Skill: `auto-photo-production`
- Connector 또는 MCP: 모든 플랫폼의 `higgsfield`, Claude Cowork·Claude Code의 `reference-preview`
- 레퍼런스 소스: Behance와 Pinterest만 표시

간단한 테스트 요청:

```text
AI Photo Reference Studio가 제공하는 작업 종류와 현재 레퍼런스 검색 정책을 짧게 알려줘.
```

정상 버전은 누끼·팩샷·키비주얼·상세페이지·착장샷·정적 광고소재를 안내하고 레퍼런스 소스를 Behance와 Pinterest로만 설명합니다. Claude Cowork 레퍼런스 보드는 `reference-preview`를 통해 현재 대화 안의 실제 이미지로 표시하고 링크나 HTML만으로 끝내지 않습니다.

## 제거

- ChatGPT/Codex: Plugins에서 플러그인을 선택해 Uninstall 또는 Remove를 사용합니다.
- Claude Cowork: `Customize → Plugins`에서 설치 플러그인을 열고 Uninstall을 사용합니다.
- Claude Code: `/plugin uninstall photo-reference-studio@photo-reference-studio`를 사용합니다.

마켓플레이스를 제거하면 그 마켓플레이스에서 설치한 플러그인도 함께 제거될 수 있으므로, 단순 업데이트에는 marketplace remove를 사용하지 마세요.
