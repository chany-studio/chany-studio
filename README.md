# AI Photo Reference Studio

![AI Photo Reference Studio](plugins/photo-reference-studio/assets/logo.png)

원본 제품·음식 사진의 정체성을 보존하면서 누끼, 흰 배경 팩샷, 촬영 레퍼런스 보드와 상업용 연출컷을 만드는 Codex 및 Claude Cowork 플러그인입니다.

This dual-platform plugin turns real product or food photographs into source-faithful cutouts, curated reference boards, clean packshots, and reference-directed commercial images in Codex, Claude Cowork, and Claude Code.

## 주요 기능

- 제품 라벨, 로고, 형태, 재질과 음식 재료 구성을 먼저 기록하는 subject lock
- 투명 PNG 누끼와 순백색 팩샷 제작
- Behance·Pinterest 및 Unsplash·Pexels에서 추적 가능한 레퍼런스 6장 구성
- 원본은 피사체 정체성에만, 레퍼런스는 구도·조명 등 Visual DNA에만 사용하는 연출컷 생성
- 원본 대조 QA와 관찰된 결함만 수정하는 1회 보정 재시도
- Higgsfield MCP를 통한 업로드, 배경 제거와 레퍼런스 기반 이미지 편집

## Codex 및 ChatGPT 데스크톱 설치

필요 조건:

- 커스텀 플러그인 마켓플레이스를 지원하는 Codex CLI 또는 ChatGPT 데스크톱 앱
- 연출컷·배경 제거 기능을 사용하려면 Higgsfield 연결 및 해당 서비스 이용 권한

GitHub 마켓플레이스 소스를 추가합니다.

```bash
codex plugin marketplace add junphoto1008-tech/photo-reference-studio --ref main
```

그다음 ChatGPT 데스크톱 앱을 다시 시작하고 Plugins에서 **AI Photo Reference Studio** 마켓플레이스를 선택해 `photo-reference-studio`를 설치합니다. 설치 후에는 새 대화나 새 Codex 작업에서 플러그인을 활성화하세요.

## Claude Cowork 설치

가장 간단한 방법은 [최신 GitHub Release](https://github.com/junphoto1008-tech/photo-reference-studio/releases/latest)에서 `photo-reference-studio.plugin`을 내려받아 Claude Cowork에서 열거나 가져오는 것입니다. 파일 내용을 검토한 뒤 설치를 승인하고 새 Cowork 대화를 시작하세요.

## Claude Code 마켓플레이스 설치

Claude Code에서 `/plugin`을 열어 Marketplace 추가 화면에 다음 저장소를 입력합니다.

```text
junphoto1008-tech/photo-reference-studio
```

명령으로 설치하려면 다음을 실행합니다.

```text
/plugin marketplace add junphoto1008-tech/photo-reference-studio
/plugin install photo-reference-studio@photo-reference-studio
```

설치 후 Higgsfield 연결 요청을 승인하고 새 대화를 시작하세요.

## 사용 예시

- `이 제품 사진을 투명 배경 누끼 PNG로 만들어줘.`
- `이 음식 사진에 맞는 촬영 레퍼런스 6장을 먼저 보여줘.`
- `원본 분석부터 자동 선택, 최종 연출컷과 검수까지 진행해줘.`
- `이 레퍼런스의 구도와 조명만 가져와서 제품 연출컷을 만들어줘.`

기본 staged 작업은 `semi-auto` 모드입니다. 플러그인이 레퍼런스 6장을 제시하면 번호 하나 또는 `자동 선택`을 답한 뒤 유료 이미지 생성을 진행합니다.

## 데이터 및 외부 서비스

- 플러그인 저장소에는 API 키, 액세스 토큰 또는 사용자 사진이 포함되어 있지 않습니다.
- Higgsfield 기능을 사용할 때 원본 사진과 선택한 레퍼런스가 Higgsfield 서비스로 전송될 수 있습니다.
- 레퍼런스 탐색은 Behance, Pinterest, Unsplash와 Pexels의 공개 소스 페이지를 이용합니다.
- 외부 서비스의 이용 약관, 개인정보 처리방침, 요금과 콘텐츠 권리는 각 서비스에서 별도로 확인하세요.

인증이 필요하면 호스트가 표시하는 Higgsfield 연결 또는 로그인 화면에서 OAuth를 완료합니다. 비밀번호, API 키, 액세스 토큰이나 인증 코드를 대화에 붙여 넣지 마세요.

## 저장소 구조

```text
.
├── .agents/plugins/marketplace.json
├── .claude-plugin/marketplace.json
└── plugins/photo-reference-studio/
    ├── .codex-plugin/plugin.json
    ├── .claude-plugin/plugin.json
    ├── .mcp.json
    ├── assets/
    └── skills/auto-photo-production/
```

## 라이선스

이 프로젝트는 [MIT License](LICENSE)로 배포됩니다.

## 참고

- [OpenAI 플러그인 패키징 문서](https://developers.openai.com/plugins/build/plugins)
- [Claude 플러그인 마켓플레이스 문서](https://code.claude.com/docs/en/plugin-marketplaces)
- [Claude 플러그인 규격](https://code.claude.com/docs/en/plugins-reference)
- [프로젝트 소개](https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-v1-0-3c783e9464668140b794ee076be24406)
- [개인정보 처리방침](https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-3c783e94646681089a5dc4694a045cb3)
- [서비스 이용약관](https://jolly-phlox-79c.notion.site/AI-Photo-Reference-Studio-3c783e9464668136822bf7f00201f429)
