# AI Photo Reference Studio

![AI Photo Reference Studio](plugins/photo-reference-studio/assets/logo.png)

하나의 원본 제품·음식·의류 사진에서 누끼와 팩샷부터 키비주얼, 상세페이지 이미지, 모델 착장샷과 광고소재까지 일관된 커머스 이미지 세트를 만드는 Codex 및 Claude Cowork 플러그인입니다.

This dual-platform commerce image studio turns real product, food, and fashion sources into faithful cutouts, inline reference boards, key visuals, detail-page modules, model shots, and channel-ready static ad creatives.

## 주요 기능

- 피사체·무드·구도·조명·배경·출력의 6요소를 갖춘 작업별 완성형 프롬프트
- 제품·음식·모델·의류·승인 문구를 원본별로 잠그는 source and copy lock
- 투명 PNG 누끼, 순백색 팩샷과 캠페인 마스터 키비주얼 제작
- Behance·Pinterest에서만 찾은 레퍼런스 6장을 링크가 아닌 이미지로 대화 안에 직접 표시
- 키비주얼에서 상세페이지 모듈, 프로모션 포스터, 배너와 정적 광고소재를 일관되게 파생
- 성인 모델 일관성 유지와 원본 의류·가방·신발을 보존한 착장 이미지
- 마스크 또는 명확한 영역을 이용해 나머지는 고정하는 인페인팅·국소 수정
- 1:1·3:4·4:3·9:16·16:9 및 기본형·강조형·문구형·이미지형 레이아웃
- 생성→대화 수정→비교 선택과 원본·문구·비율별 QA 및 1회 보정 재시도
- Higgsfield MCP를 통한 업로드, 배경 제거와 레퍼런스 기반 이미지 편집

현재 범위는 정적 커머스 이미지입니다. 영상, GIF, 내레이션, 음성, 음악과 CapCut 작업은 포함하지 않습니다.

## Codex 및 ChatGPT 데스크톱 설치

필요 조건:

- 커스텀 플러그인 마켓플레이스를 지원하는 Codex CLI 또는 ChatGPT 데스크톱 앱
- 연출컷·배경 제거 기능을 사용하려면 Higgsfield 연결 및 해당 서비스 이용 권한

GitHub 마켓플레이스 소스를 추가합니다.

```bash
codex plugin marketplace add junphoto1008-tech/photo-reference-studio --ref main
```

그다음 ChatGPT 데스크톱 앱을 다시 시작하고 Plugins에서 **AI Photo Reference Studio** 마켓플레이스를 선택해 `photo-reference-studio`를 설치합니다. 설치 후에는 새 대화나 새 Codex 작업에서 플러그인을 활성화하세요.

## Claude Cowork 마켓플레이스 설치

1. Claude Desktop에서 **Cowork → Customize → Browse plugins**를 엽니다.
2. **Personal → + → Add marketplace from GitHub**를 선택합니다.
3. 다음 공개 저장소 주소를 입력합니다.

```text
https://github.com/junphoto1008-tech/photo-reference-studio
```

4. 추가된 **photo-reference-studio** 마켓플레이스에서 같은 이름의 플러그인을 선택하고 **Install**을 누릅니다.
5. Higgsfield 연결 요청을 승인한 뒤 새 Cowork 작업을 시작합니다.

Claude의 보안 절차상 마켓플레이스 추가와 플러그인 설치 승인은 두 단계입니다. 저장소를 추가하면 플러그인이 설치 목록에 바로 표시됩니다. 파일 설치가 필요한 경우에는 [최신 GitHub Release](https://github.com/junphoto1008-tech/photo-reference-studio/releases/latest)의 `photo-reference-studio.plugin`을 사용할 수 있습니다.

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
- `이 제품에 맞는 Behance·Pinterest 레퍼런스 6장을 이미지로 바로 보여줘.`
- `이 원본으로 캠페인 키비주얼을 만들고 같은 톤으로 상세페이지 이미지 5장을 구성해줘.`
- `키비주얼을 1:1 피드, 9:16 스토리, 16:9 광고소재로 재구성해줘.`
- `이 모델에게 첨부한 원피스·가방·신발을 원본 그대로 착장시켜줘.`
- `메인 문구와 할인율을 정확히 유지한 프로모션 포스터를 만들어줘.`

기본 staged 작업은 `semi-auto` 모드입니다. 플러그인이 레퍼런스 6장을 제시하면 번호 하나 또는 `자동 선택`을 답한 뒤 유료 이미지 생성을 진행합니다.

## 데이터 및 외부 서비스

- 플러그인 저장소에는 API 키, 액세스 토큰 또는 사용자 사진이 포함되어 있지 않습니다.
- Higgsfield 기능을 사용할 때 원본 사진과 선택한 레퍼런스가 Higgsfield 서비스로 전송될 수 있습니다.
- 레퍼런스 탐색은 Behance와 Pinterest의 공개 소스 페이지만 이용합니다.
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
