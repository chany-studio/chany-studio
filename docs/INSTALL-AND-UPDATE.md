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

Node.js는 컴퓨터에서 작은 도우미 프로그램을 실행해 주는 무료 도구입니다. 여기서는 Pinterest 레퍼런스 이미지를 대화 안에 미리 보여 줄 때만 쓰입니다. `node --version`은 Node.js가 설치됐는지 확인하는 명령인데, 직접 입력하기 어렵다면 건너뛰고 [초보자용 Node.js 설치 순서](TROUBLESHOOTING.md#nodejs가-필요하다고-나와요-claude-cowork-이미지-미리보기)를 따라 하세요. Node.js가 없어도 Meigen 레퍼런스와 이미지 생성은 쓸 수 있습니다.

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

## Higgsfield 연결과 크레딧

- 이미지와 영상을 실제로 만들려면 Higgsfield(이미지·영상 생성 서비스) 계정이 필요합니다.
- 설치 과정이나 앱의 설정 → 커넥터(또는 앱) 화면에서 Higgsfield를 연결하고 로그인합니다.
- 플러그인에는 크레딧이 들어 있지 않습니다. 크레딧 충전과 요금은 Higgsfield에서 확인하세요. 실제 비용과 잔액은 생성 직전 확인 카드에 표시됩니다.
- 프로젝트 설정, 기획, 레퍼런스 찾기는 크레딧을 쓰지 않습니다.

## 설치 확인

플러그인 상세에서 다음을 확인합니다.

- 표시 이름: `Chany's Studio`
- 내부 식별자: `photo-reference-studio`
- 버전: `2.14.0`
- 대표 Skill: `chany-studio`
- 프로젝트 Skill: `chany-project`
- 전문 Skill: 마케팅 브리프, JTBD 고객 분석(`chany-jtbd-persona`), Meta 광고 리서치(`chany-meta-ad-research`), 레퍼런스 보드(사이트 미지정 시 Pinterest 5장 + Meigen 5장, Pinterest만 지정 시 기본 6장, 또는 요청 수량), Meigen 이미지·프롬프트 레퍼런스(`chany-ai-prompt-reference`), 전문 크리에이티브 디렉션(`chany-creative-direction`), 브라우저 캡처 영상 레퍼런스 준비(`chany-video-reference-ingest`), 제품 에셋, 키비주얼, 상세페이지, 광고, 편집, 패션, 콘셉트형 캠페인 영상(`chany-campaign-video`), 광고 모션 디자인(`chany-motion-design`), 미디어 생성 실행·재개(`chany-media-production-loop`), 영상 조립·컷 교체(`chany-video-assembly`), 환경 점검(`chany-preflight`), 게시 전 검수(`chany-publication-review`)
- 업종 Skill: 전문 서비스, 교육, 헬스케어, 식당·카페/F&B, 호텔·여행, 공간·인테리어·부동산, 디지털 제품, 자동차·모빌리티, 소비자 기술, 기업·채용, 공연·전시·행사·지역축제
- 연결: Higgsfield
- Claude Cowork 추가 연결: 항상 로드되는 `reference-preview`
- 생성형 정적 이미지 기본 모델: GPT Image 2.5 (`gpt_image_2_5`)

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

Claude Cowork에서는 빠진 캠페인 정보가 **Ask your question** 카드로 표시되고, 설계안 뒤에 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드가 나타나는지 확인합니다. 입력이나 기존 기록에 이미 있는 내용은 재질문하지 않으며, 질문 카드가 노출되지 않거나 빈 응답이면 일반 텍스트 확인으로 안전하게 전환해야 합니다. `취소`는 재질문 없이 Chany 단계를 끝냅니다.

## 유료 생성과 최종 게시 계약 확인

생성형 정적 이미지와 부분 편집의 플러그인 기본값은 GPT Image 2.5이며 정확한 모델 ID는 `gpt_image_2_5`입니다. 현재 도구가 이 모델을 선택할 수 있는지 먼저 확인하고, 요청 기본값과 실제 해석 모델을 함께 보여줍니다. 확인되지 않은 공급자 기본값을 GPT Image 2.5라고 표시하지 않습니다. 사용자의 명시적 요청, 승인된 프로젝트 정책 또는 라이브 검증된 필수 기능 부재가 있을 때만 다른 모델을 해당 범위에 한해 승인받아 사용합니다. 영상·음성·클립 조립은 이 정적 이미지 정책의 대상이 아닙니다.

유료 미디어 생성 전에는 연결된 서비스의 **현재 도구 스키마와 카탈로그**를 다시 읽습니다. 무료 견적·비용 미리보기·검증 기능이 있으면 먼저 실행하고, 최종 프롬프트, 입력별 역할, 실제 선택된 모델·워크플로와 옵션, 서버 조정값, 생성 수량, 제공자가 반환한 크레딧 정보를 한 번에 보여준 뒤 해당 버전에 대한 승인을 받습니다. `gpt_image_2_5` 기본 정책을 제외한 정적 모델명·가격표·플랫폼 수치를 플러그인 문서에서 현재 값처럼 사용하지 않습니다. 모델이나 공급자 변경은 기존 견적과 승인을 무효화하므로 새 사전검토를 거칩니다.

타임아웃이나 연결 해제로 결제·생성 결과가 불명확하면 같은 요청을 다시 제출하지 않습니다. 원래 작업 영수증과 상태·기록을 먼저 확인해 기존 결과를 이어받고, 요청 의미·입력 역할·모델·옵션·수량·길이·비율·언어·크레딧 한도가 바뀌면 새 견적과 승인을 받습니다.

게시 전에는 정확한 최종 카피, 오퍼, 목적지, 크롭·배치와 렌더 버전을 `chany-publication-review`로 검토합니다. 이 검수는 현재 공식 1차 출처와 날짜, 다섯 검토 레인, 안정적인 버전 식별자와 이름이 지정된 사람 검토자를 사용합니다. 상태는 `blocked`, `draft-only`, `ready-for-named-human-review`, `reviewed-by-named-owner` 중 하나이며, 어느 상태도 법률 자문·법률적 승인이나 자동 게시 권한을 뜻하지 않습니다.

## 기존 사용자 업데이트

### ChatGPT 및 Codex 앱

가져온 마켓플레이스 또는 워크스페이스 플러그인에서 **Refresh**를 누른 뒤 새 작업을 시작합니다.

### Claude Cowork

1. **Customize → Plugins**를 엽니다.
2. `photo-reference-studio` 마켓플레이스에서 **Update**를 누릅니다.
3. 버전 `2.14.0`, `chany-project`, `chany-jtbd-persona`, `chany-meta-ad-research`, `chany-creative-direction`, `chany-campaign-video`, `chany-viral-product-remake`, `chany-ad-variants`, `chany-shortform-recut`, `chany-product-3d`, `chany-media-production-loop`, 공통 제작 스킬과 11개 업종 스킬 목록을 확인합니다.
4. 새 Cowork 작업을 시작합니다.

### Claude Code

```text
/plugin marketplace update photo-reference-studio
/plugin update photo-reference-studio@photo-reference-studio
/reload-plugins
```

## 예전 버전의 변경 내용

버전별로 바뀐 점은 [변경 이력](../CHANGELOG.md)과 [고급·개발자 안내의 버전별 변경 요약](ADVANCED.md#버전별-변경-요약)에 있습니다.

## 업데이트가 반영되지 않을 때

- 설치 상세의 버전이 `2.14.0`인지 확인합니다.
- Refresh 또는 Update 뒤 반드시 새 대화나 새 작업을 시작합니다.
- Claude Code에서는 `/plugin`의 Errors 탭을 확인합니다.
- Claude Cowork에서 레퍼런스 이미지가 안 보이면 Node.js 18 이상과 `reference-preview` 연결을 확인합니다. Node.js 설치 방법은 [문제 해결의 Node.js 안내](TROUBLESHOOTING.md#nodejs가-필요하다고-나와요-claude-cowork-이미지-미리보기)를 보세요.
- Higgsfield 실행이 안 되면 연결을 해제한 뒤 호스트의 로그인 화면에서 다시 인증합니다.

삭제와 재설치는 [문제 해결 가이드](TROUBLESHOOTING.md)를 먼저 확인한 뒤 최후 수단으로 사용하세요.
