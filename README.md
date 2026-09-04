# Chany's Studio

![Chany's Studio](plugins/photo-reference-studio/assets/logo.png)

제품 원본과 승인 문구를 보존하면서 **광고·마케팅·상세페이지·홍보 콘텐츠**를 기획하고 제작하는 ChatGPT Work/Codex 및 Claude 플러그인입니다. 공통 프로젝트 지침과 런타임별 위임 구성을 먼저 설정하고, 캠페인 기획, 제품 에셋, 레퍼런스, 키비주얼, 상세페이지, 광고, 편집, 패션, UGC를 각각의 전문 스킬로 연결합니다.

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

## 전문 스킬

ChatGPT Work에서 스킬을 직접 고를 때는 `@스킬명`, Codex에서는 `$스킬명`을 사용합니다. Claude Cowork에서는 `/project-studio`를 제외한 전문 작업을 자연어로 요청하면 설명에 맞는 스킬이 자동 선택됩니다.

| 스킬 | 담당 작업 |
| --- | --- |
| ChatGPT `@chany-project` · Codex `$chany-project` | 프로젝트 인터뷰, 공통 `AGENTS.md`, 브리프·상태, ChatGPT Work 위임 규칙과 Claude·로컬 Codex 프로젝트 에이전트 설정 |
| ChatGPT `@chany-studio` · Codex `$chany-studio` | 두 분야 이상이 연결된 전체 캠페인과 산출물 순서 관리 |
| ChatGPT `@chany-marketing-brief` · Codex `$chany-marketing-brief` | 목표·타깃·메시지·승인 카피·채널·에셋 매트릭스 정리 |
| ChatGPT `@chany-product-assets` · Codex `$chany-product-assets` | 투명 누끼, 순백 팩샷, 제품·음식 클린업 |
| ChatGPT `@chany-reference-board` · Codex `$chany-reference-board` | Behance·Pinterest 레퍼런스 6장과 Visual DNA |
| ChatGPT `@chany-campaign-visual` · Codex `$chany-campaign-visual` | 연출컷과 텍스트 없는 마스터 키비주얼 |
| ChatGPT `@chany-detail-page` · Codex `$chany-detail-page` | 히어로·특징·혜택·디테일·사용 장면·CTA 모듈 |
| ChatGPT `@chany-ad-creative` · Codex `$chany-ad-creative` | 정적 광고, 프로모션 포스터, 배너, 채널별 재구성 |
| ChatGPT `@chany-image-edit` · Codex `$chany-image-edit` | 마스크 편집, 부분 수정, 문구 복원과 제한된 교체 |
| ChatGPT `@chany-model-fashion` · Codex `$chany-model-fashion` | 성인 모델 일관성, 원본 의류·액세서리 착장 |
| ChatGPT `@chany-ugc-ads` · Codex `$chany-ugc-ads` | 제품 리뷰, 언박싱, 튜토리얼, SaaS, Try-on, 현지화 UGC |

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
```

## 캠페인 제작 순서

1. 제품·브랜드·타깃·채널·승인 문구를 캠페인 브리프로 정리합니다.
2. 원본에서 제품, 모델, 의류와 카피 잠금을 만듭니다.
3. 필요한 경우 Behance와 Pinterest 레퍼런스 6장을 대화 안에 실제 이미지로 표시합니다.
4. 마스터 키비주얼을 먼저 승인합니다.
5. 승인된 캠페인 규칙에서 상세페이지와 채널 광고를 파생합니다.
6. UGC가 포함되면 훅·대본·크리에이터·제품 노출·CTA를 잠근 뒤 제작합니다.
7. 원본, 승인 카피, 비율, 안전영역과 캠페인 일관성을 검수합니다.

기본값은 유료 생성 전에 사용자가 레퍼런스와 산출물 수를 확인하는 방식입니다. 자동 진행을 원하면 범위와 함께 `레퍼런스도 자동 선택해서 끝까지 진행해줘`라고 요청하세요.

## 핵심 보호 원칙

- 제품·음식·모델·의류 원본은 정체성의 최종 기준입니다.
- 가격, 할인율, 기간, 제품 효능, 비교 주장, CTA와 법적 고지는 임의로 만들지 않습니다.
- Behance·Pinterest 레퍼런스는 구도, 조명, 배경, 색감, 재질과 무드에만 사용합니다.
- 마스터 키비주얼을 승인한 뒤 상세페이지와 광고 규격을 파생합니다.
- 기존 결과의 부분 수정은 지정 영역과 한 가지 속성만 바꿉니다.
- 라벨·로고·카피·제품 형상·모델 정체성·의류 구조가 바뀐 결과는 실패로 처리합니다.
- 여러 단계를 자동 생성하기 전에 예상 생성 횟수와 크레딧 사용 지점을 알립니다.

## Higgsfield 실행 범위

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

업데이트 후 버전이 **2.1.1**인지 확인하고 새 대화 또는 새 작업을 시작하세요.

## 외부 서비스와 데이터

- 플러그인 저장소에는 API 키, 액세스 토큰 또는 사용자 사진이 포함되어 있지 않습니다.
- Higgsfield 기능 사용 시 사용자가 선택한 원본과 레퍼런스가 Higgsfield로 전송될 수 있습니다.
- Claude용 `reference-preview`는 Behance·Pinterest의 공개 미리보기만 읽어 대화에 표시합니다.
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
