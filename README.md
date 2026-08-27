# AI Photo Reference Studio

![AI Photo Reference Studio](plugins/photo-reference-studio/assets/logo.png)

원본 제품·음식·모델·의류 사진을 보존하면서 **누끼와 팩샷부터 키비주얼, 상세페이지 이미지, 착장샷, 배너와 정적 광고소재까지** 하나의 캠페인 톤으로 만드는 ChatGPT/Codex 및 Claude 플러그인입니다.

## 설치할 때 입력할 마켓플레이스 주소

아래 주소 하나만 복사해 마켓플레이스 추가 화면에 입력하세요.

```text
https://github.com/junphoto1008-tech/photo-reference-studio
```

`owner/repo` 형식만 받는 화면에서는 다음 값을 입력합니다.

```text
junphoto1008-tech/photo-reference-studio
```

## 3분 설치

### ChatGPT 및 Codex 앱

1. **Plugins**를 열고 **Add marketplace(마켓플레이스 추가)**를 선택합니다.
2. 위 GitHub 저장소 주소를 붙여 넣습니다.
3. 추가된 **AI Photo Reference Studio** 마켓플레이스를 엽니다.
4. `photo-reference-studio`를 선택하고 **Install**을 누릅니다.
5. Higgsfield 연결 요청을 승인한 뒤 **새 대화 또는 새 Codex 작업**을 시작합니다.

관리형 ChatGPT 워크스페이스에서는 관리자 권한이나 플러그인·앱 허용 정책이 필요할 수 있습니다. 마켓플레이스 추가 버튼이 보이지 않으면 워크스페이스 관리자에게 이 저장소를 가져오고 플러그인 및 Higgsfield 접근을 허용해 달라고 요청하세요.

### Claude Cowork

1. Claude Desktop에서 **Customize → Plugins → Browse plugins**를 엽니다.
2. **Personal plugins의 `+` → Add marketplace → Add from a repository**를 선택합니다.
3. 위 GitHub 저장소 주소를 입력합니다.
4. `photo-reference-studio`를 선택하고 **Install**을 누릅니다.
5. Higgsfield 로그인을 마친 뒤 **새 Cowork 작업**을 시작합니다.

### Claude Code

Claude Code 안에서 다음 명령을 실행합니다.

```text
/plugin marketplace add junphoto1008-tech/photo-reference-studio
/plugin install photo-reference-studio@photo-reference-studio
/reload-plugins
```

설치 범위를 물으면 모든 프로젝트에서 개인적으로 쓰려는 경우 **User scope**를 선택합니다.

설치 화면을 찾기 어렵거나 파일 설치가 필요한 경우 [최신 GitHub Release](https://github.com/junphoto1008-tech/photo-reference-studio/releases/latest)의 `photo-reference-studio.plugin`을 사용할 수 있습니다.

플랫폼별 상세 화면, 관리자 설치, 업데이트와 재설치는 [설치 및 업데이트 가이드](docs/INSTALL-AND-UPDATE.md)를 확인하세요.

## 설치 후 바로 시작하기

가장 간단한 사용법은 **원본 사진을 첨부하고 원하는 결과를 한 문장으로 말하는 것**입니다. 사진에 보이는 사실을 다시 설명할 필요는 없습니다.

```text
이 제품 원본을 보존하면서 Behance·Pinterest 레퍼런스 6장을 이미지로 바로 보여줘.
하나를 고른 다음 키비주얼부터 상세페이지 이미지 5장과 1:1·9:16 광고소재까지 같은 톤으로 만들어줘.
```

기본 흐름은 다음과 같습니다.

1. 원본의 형태·라벨·재질·색상과 승인 문구를 분석하고 잠급니다.
2. 필요한 경우 Behance와 Pinterest에서만 레퍼런스 6장을 찾습니다.
3. 링크 목록이 아니라 **대화 안에 이미지로 직접 표시**합니다.
4. 사용자가 번호 하나 또는 `자동 선택`을 답합니다.
5. 선택한 방향으로 마스터 키비주얼을 만든 뒤 필요한 상세페이지·광고 규격으로 확장합니다.
6. 원본, 문구, 비율과 채널 요구사항을 비교 검수하고 필요한 경우 한 번 보정합니다.

기본값은 유료 생성 전에 레퍼런스를 확인하는 `semi-auto`입니다. 처음부터 자동으로 진행하려면 요청 끝에 `레퍼런스도 자동 선택해서 끝까지 진행해줘`라고 추가하세요.

## 만들 수 있는 이미지

| 필요한 결과 | 요청 예시 |
| --- | --- |
| 투명 누끼·백색 팩샷 | `이 제품을 투명 PNG 누끼와 순백색 팩샷으로 만들어줘.` |
| 레퍼런스 보드 | `Behance·Pinterest 레퍼런스 6장을 이미지로 보여주고 각각의 구도와 조명을 설명해줘.` |
| 마스터 키비주얼 | `프리미엄 여름 캠페인 키비주얼을 4:5로 만들어줘.` |
| 상세페이지 이미지 | `키비주얼 톤을 유지해 히어로·특징·사용 장면·디테일·마감 모듈 5장을 만들어줘.` |
| 프로모션 포스터 | `승인 문구와 할인율을 정확히 유지한 1:1 강조형 포스터를 만들어줘.` |
| 광고소재·배너 | `같은 캠페인으로 1:1 피드, 9:16 스토리, 16:9 배너를 재구성해줘.` |
| 모델·착장 이미지 | `이 성인 모델에게 첨부한 원피스·가방·신발을 원본 그대로 착장시켜줘.` |
| 부분 수정 | `선택한 이미지에서 배경만 조금 밝게 하고 제품·문구·구도는 고정해줘.` |
| 전체 커머스 세트 | `누끼, 팩샷, 키비주얼, 상세페이지 5장, 광고소재 3종을 한 캠페인으로 만들어줘.` |

지원 비율은 기본적으로 `1:1`, `3:4`, `4:3`, `4:5`, `9:16`, `16:9`이며 실제 플랫폼 규격이나 픽셀 크기를 지정하면 그것을 우선합니다. 현재 범위는 **정적 커머스 이미지**입니다. 영상, GIF, 내레이션, 음성, 음악과 CapCut 작업은 포함하지 않습니다.

전체 제작법, 입력 템플릿, 작업별 프롬프트와 수정 요령은 [사용 가이드](docs/USER-GUIDE.md)를 확인하세요.

## 좋은 결과를 위한 입력

원본 사진만으로도 시작할 수 있으며, 다음 정보가 있으면 상업용 결과를 더 정확하게 만들 수 있습니다.

- 가장 해상도가 높은 원본 사진
- 결과물 목적: 키비주얼, 상세페이지, 광고, 배너 등
- 채널과 비율 또는 픽셀 크기
- 반드시 그대로 써야 하는 승인 문구, 가격, 할인율, 기간과 CTA
- 브랜드 컬러·로고·가이드와 피해야 할 표현
- 원하는 레퍼런스가 있다면 그 이미지와 역할

숫자, 가격, 할인율, 날짜, 제품 효능과 법적 고지는 임의로 만들지 않습니다. 정확한 문구가 필요한 작업에서는 사용자가 제공한 승인 문구가 기준입니다.

## 기존 사용자 업데이트

GitHub에 새 버전이 올라가도 이미 열린 대화가 자동으로 새 지침을 다시 읽지는 않을 수 있습니다. 업데이트한 뒤 새 작업을 시작하세요.

- **ChatGPT/Codex:** 가져온 플러그인 또는 워크스페이스 플러그인에서 **Refresh**를 눌러 원본 마켓플레이스의 최신 버전을 가져옵니다.
- **Claude Cowork:** `Customize → Plugins`에서 추가한 `photo-reference-studio` 마켓플레이스의 **Update**를 누릅니다.
- **Claude Code:** 아래 명령을 실행합니다.

```text
/plugin marketplace update photo-reference-studio
/plugin update photo-reference-studio@photo-reference-studio
/reload-plugins
```

- **`.plugin` 파일로 직접 설치:** [최신 Release](https://github.com/junphoto1008-tech/photo-reference-studio/releases/latest) 파일을 다시 설치합니다. 충돌이 나면 이전 설치본을 제거한 뒤 새 파일을 설치하세요.

업데이트 후 플러그인 상세 화면에서 버전이 **1.3.0**인지 확인하세요. 예전 안내에 Unsplash 또는 Pexels가 보이면 이전 설치본입니다.

## 핵심 보호 원칙

- 제품·음식·모델·의류 원본이 정체성의 기준입니다.
- Behance·Pinterest 레퍼런스는 구도, 조명, 배경, 색감과 무드에만 사용합니다.
- 레퍼런스 속 제품, 모델, 로고, 패키지, 문구나 가격을 가져오지 않습니다.
- 투명 누끼는 가능하면 비생성형 배경 제거를 사용해 원본 픽셀을 보존합니다.
- 승인된 결과의 부분 수정은 지정 영역과 한 가지 속성만 바꾸고 나머지를 고정합니다.
- 라벨·로고·문구·의류 구조가 바뀐 결과는 실패로 처리합니다.

## 외부 서비스와 데이터

- 플러그인 저장소에는 API 키, 액세스 토큰 또는 사용자 사진이 포함되어 있지 않습니다.
- Higgsfield 기능을 사용할 때 원본 사진과 선택한 레퍼런스가 Higgsfield로 전송될 수 있습니다.
- 레퍼런스 탐색은 Behance와 Pinterest의 공개 소스 페이지만 이용합니다.
- 외부 서비스의 이용 약관, 개인정보 처리방침, 요금, 생성 크레딧과 콘텐츠 권리는 각 서비스에서 별도로 확인하세요.
- 비밀번호, API 키, 액세스 토큰이나 인증 코드를 대화에 붙여 넣지 마세요. 호스트가 표시하는 연결 화면에서 인증합니다.

## 문제 해결

플러그인이 안 보이거나, 업데이트가 반영되지 않거나, Higgsfield 연결 또는 이미지 표시가 실패하는 경우 [문제 해결 가이드](docs/TROUBLESHOOTING.md)를 확인하세요.

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
    ├── .mcp.json
    ├── assets/
    └── skills/auto-photo-production/
```

## 라이선스와 공식 참고

이 프로젝트는 [MIT License](LICENSE)로 배포됩니다.

- [OpenAI: Plugins in ChatGPT and Codex](https://help.openai.com/en/articles/20001256-plugins-in-codex/)
- [Claude Cowork: Install plugins](https://claude.com/docs/cowork/guide/plugins)
- [Claude Code: Discover and install plugins](https://code.claude.com/docs/en/discover-plugins)
- [Claude Code: Plugins reference](https://code.claude.com/docs/en/plugins-reference)
- [프로젝트 소개](https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-v1-0-3c783e9464668140b794ee076be24406)
- [개인정보 처리방침](https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-3c783e94646681089a5dc4694a045cb3)
- [서비스 이용약관](https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-3c783e9464668136822bf7f00201f429)
