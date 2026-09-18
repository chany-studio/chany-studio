# Chany's Studio

## 처음 쓰는 분께

Chany's Studio는 제품 사진이나 짧은 설명만 있으면 광고 이미지, 상세페이지, 짧은 광고 영상을 기획하고 만들어 주는 플러그인(AI 앱에 기능을 더해 주는 추가 프로그램)입니다. 복잡한 설정 없이 평소 말투로 요청하면 됩니다.

AI로 이미지나 영상을 한 번도 만들어 본 적 없는 분, 개발을 모르는 사장님·마케터·수강생을 위해 만들었습니다.

**준비물**

- Claude Cowork 또는 ChatGPT Work를 쓸 수 있는 계정
- 이미지·영상을 실제로 만들 때만: Higgsfield(이미지·영상 생성 서비스) 계정과 크레딧. 요금은 Higgsfield에서 확인하세요.
- 레퍼런스 찾기, 기획, 프로젝트 설정은 크레딧을 쓰지 않습니다.

**설치**: 아래 [설치](#설치) 순서를 따르거나 [설치 및 업데이트 가이드](docs/INSTALL-AND-UPDATE.md)를 보세요.

**첫 요청 해 보기**

Claude Cowork에서는 기호 없이 평소 말투로 요청합니다.

```text
(제품 사진을 첨부한 뒤) 이 제품으로 인스타 광고 이미지 한 장 만들어줘.
이 제품에 어울리는 광고 사진 레퍼런스 찾아줘.
```

ChatGPT Work에서는 앞에 `@chany-studio`를 붙이거나, 똑같이 평소 말투로 요청합니다.

```text
(제품 사진을 첨부한 뒤) @chany-studio 이 제품으로 인스타 광고 이미지 한 장 만들어줘.
@chany-studio 이 제품에 어울리는 광고 사진 레퍼런스 찾아줘.
```

**요청하면 이렇게 진행됩니다**

1. **레퍼런스 자동 추천**: 제품 사진의 모양·색·재질을 살펴 어울리는 레퍼런스(Pinterest 5장 + Meigen 5장)를 찾아 대화에 보여주고, 가장 잘 맞는 한 장을 추천합니다. 다른 사진이 마음에 들면 번호만 말하면 됩니다. 광고 문구는 알려 주신 사실로만 쓰고, 말하지 않은 가격이나 할인은 넣지 않습니다.
2. **확인 카드 1장**: 만들 것, 레퍼런스, 방향, 들어갈 문구, 사용 도구, 비용을 한 번에 보여줍니다. "이대로 1장 만들기" 또는 "2장 만들어 더 나은 것 고르기"를 골라야 생성이 시작됩니다. 필요하면 제품 배경을 먼저 지워 깔끔하게 합성합니다.
3. **결과와 제품 확인**: 완성본과 함께 모양·색상·라벨 글자·로고·개수가 원본 제품과 같은지 ✓로 보여줍니다. 이어서 광고용 고화질(2K·4K)로 키우기, 다른 비율(1:1·4:5·9:16)로 늘리기, 이 이미지로 영상 만들기를 제안합니다. 모두 따로 비용을 확인한 뒤 진행합니다.

영상은 기준 이미지와 영상, 이렇게 확인 카드가 두 번 나옵니다. 여러 방향을 비교해 보고 싶다면 "여러 안 보여줘", "콘셉트 3안", "레퍼런스 먼저 보여줘"라고 말하세요. 자세히 보기 방식으로 바뀝니다. 레퍼런스는 사이트를 정하지 않으면 Pinterest 5장 + Meigen 5장, 총 10장을 보여줍니다.

**전문 용어를 몰라도 됩니다**: "배경 흐리게", "화장품 화보처럼"처럼 평소 말로 요청하면 플러그인이 아웃포커싱, 뷰티디쉬 조명 같은 전문 촬영 용어로 바꿔 만들고, 어떻게 이해했는지 한 줄로 알려줍니다. 느낌을 직접 고르고 싶으면 "느낌 직접 고를래"라고 말하세요. 쉬운 말로 된 질문 카드(빛·각도·배경·영상 움직임)를 보여주고, 끝에 다음에 그대로 쓸 수 있는 전문가식 요청문을 알려줍니다.

**광고 템플릿**: "Higgsfield 광고 템플릿으로 만들어줘"라고 하면 검증된 광고 사진 템플릿 중 제품에 어울리는 것을 골라 비슷한 분위기로 만들 수 있습니다(비율은 템플릿이 지원하는 것만 가능).

**비용**: 플러그인에는 크레딧이 들어 있지 않습니다. 이미지·영상 생성에는 본인의 Higgsfield 크레딧이 쓰이며, 이번 작업의 실제 비용과 현재 잔액은 생성 직전 확인 카드에 표시됩니다. 카드에서 승인하지 않으면 크레딧은 쓰이지 않습니다.

막히면 [문제 해결](docs/TROUBLESHOOTING.md)을, 모르는 단어는 [용어 사전](docs/GLOSSARY.md)을 보세요.

![Chany's Studio](plugins/photo-reference-studio/assets/logo.png)

업종별 구매 여정·증거·연출·컴플라이언스 판단과 공통 제작 워크플로를 결합해 **광고·홍보·마케팅·상세/랜딩·콘텐츠**를 기획하고 제작하는 ChatGPT Work/Codex 및 Claude 플러그인입니다. Chany's Studio 2.10.0은 출처별 시각 레퍼런스, 사용자가 허가한 브라우저 탭 캡처 기반 영상 레퍼런스 분석, 초보자의 말로 세 가지 전문 콘셉트를 설계하는 크리에이티브 디렉션, 최신 공식 제작 규칙과 브랜드 적합 트렌드를 반영한 GPT Image 2.5 프롬프트, 제한된 미디어 제작 루프를 하나의 흐름으로 연결합니다.

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

### Claude Code (개발자용)

Claude Code 설치 명령은 [고급·개발자 안내](docs/ADVANCED.md)로 옮겼습니다.

플랫폼별 세부 절차는 [설치 및 업데이트 가이드](docs/INSTALL-AND-UPDATE.md)를 확인하세요.

## 2축 스킬 구조

버전별 변경 내용은 [변경 이력](CHANGELOG.md)에서 확인하세요. 예전 버전 안내 모음은 [고급·개발자 안내](docs/ADVANCED.md)에 있습니다.

ChatGPT Work에서 스킬을 직접 고를 때는 `@스킬명`, Codex에서는 `$스킬명`을 사용합니다. Claude Cowork에서는 `/project-studio`를 제외한 전문 작업을 자연어로 요청하면 설명에 맞는 스킬이 자동 선택됩니다.

### 1축: 업종 전문 오버레이

업종 스킬은 구매·참여 여정, 의사결정자, 증거 구조, 연출·촬영·모션 원칙, 카피 경계, 채널 산출물과 실패 기준을 담은 `industry direction packet`을 만듭니다. 최종 이미지를 단독 제작하지 않고 승인된 패킷을 공통 제작 스킬에 넘깁니다.

| 업종 스킬 | 핵심 전문 범위 |
| --- | --- |
| ChatGPT `@chany-professional-services` · Codex `$chany-professional-services` | 일반·면허 전문 서비스의 신뢰 형성, 상담 리드, 자격·성과·추천 주장 |
| ChatGPT `@chany-education-marketing` · Codex `$chany-education-marketing` | 학습자·비용 부담자 여정, 모집·등록, 성과·인증·미성년자 보호 |
| ChatGPT `@chany-healthcare-marketing` · Codex `$chany-healthcare-marketing` | 환자 교육·접근, 의료 효능·안전 주장, 개인정보와 필수 사람 검토 |
| ChatGPT `@chany-food-dining` · Codex `$chany-food-dining` | 방문·예약·주문, 메뉴·식욕·시간대·배달 연출, 가격·식이 정보 |
| ChatGPT `@chany-hospitality-travel` · Codex `$chany-hospitality-travel` | 영감→비교→예약→체류 여정, 객실·편의시설·요금·문화적 권리 |
| ChatGPT `@chany-space-real-estate` · Codex `$chany-space-real-estate` | 건축·상업공간·매물, 공간 사실·치수·공시·CGI 투명성 |
| ChatGPT `@chany-digital-product-marketing` · Codex `$chany-digital-product-marketing` | 소비자 앱·양면 플랫폼·B2B SaaS, 활성화·유동성·구매위원회·UI 증거 |
| ChatGPT `@chany-live-culture-events` · Codex `$chany-live-culture-events` | 공연·전시·행사·축제의 티켓·참여 여정, 프로그램 사실·권리·현장 안전 |
| ChatGPT `@chany-automotive-marketing` · Codex `$chany-automotive-marketing` | 자동차·EV·이륜·상용차의 고관여 구매, 모델 잠금·주행 안전·주행거리·금융 |
| ChatGPT `@chany-consumer-tech-marketing` · Codex `$chany-consumer-tech-marketing` | 전자·연결 기기의 제품 잠금, 기능 데모·호환성·성능·인증·구성품 |
| ChatGPT `@chany-corporate-employer` · Codex `$chany-corporate-employer` | 기업 평판·고용 브랜드, EVP·채용·문화 증거와 임직원 권리 |

11개 업종 스킬은 모두 광고·홍보·마케팅·상세/랜딩·콘텐츠 제작에 집중합니다. 결과는 게시 승인서가 아니라 제작 방향 초안이며, 공개 직전에 해당 관할의 최신 규정, 게재 플랫폼 정책, 증거와 권리를 다시 확인하고 책임 있는 사람의 검토를 받아야 합니다.

### 2축: 공통 제작 스킬

| 공통 스킬 | 담당 작업 |
| --- | --- |
| ChatGPT `@chany-motion-design` · Codex `$chany-motion-design` | Higgsfield 기반 광고 타이포·혜택 도식·로고·CTA 모션, 연결 확인 후 실행 |
| ChatGPT `@chany-project` · Codex `$chany-project` | 프로젝트 인터뷰, 공통 `AGENTS.md`, 브리프·상태, ChatGPT Work 위임 규칙과 Claude·로컬 Codex 프로젝트 에이전트 설정 |
| ChatGPT `@chany-studio` · Codex `$chany-studio` | 업종 오버레이와 두 분야 이상이 연결된 전체 캠페인 및 산출물 순서 관리 |
| ChatGPT `@chany-marketing-brief` · Codex `$chany-marketing-brief` | 목표·타깃·메시지·에셋 매트릭스 또는 성과 기반 다음 한 변수 실험 정리 |
| ChatGPT `@chany-jtbd-persona` · Codex `$chany-jtbd-persona` | 제품·서비스 구매 동기·장벽·고객 유형을 근거와 가설로 구분 |
| ChatGPT `@chany-meta-ad-research` · Codex `$chany-meta-ad-research` | Meta 영상·이미지·캐러셀의 디자인·훅·카피·CTA 분석 |
| ChatGPT `@chany-product-assets` · Codex `$chany-product-assets` | 투명 누끼, 순백 팩샷, 제품·음식 클린업 |
| ChatGPT `@chany-reference-board` · Codex `$chany-reference-board` | 사이트 미지정 시 Pinterest 5장 + Meigen 5장(총 10장), Pinterest만 지정 시 기본 6장, 또는 요청 수량을 대화에 표시하고 Visual DNA 구성 |
| ChatGPT `@chany-commercial-photo-reference` · Codex `$chany-commercial-photo-reference` | Production Paradise의 전문 광고·라이프스타일 사진 레퍼런스 |
| ChatGPT `@chany-award-ad-reference` · Codex `$chany-award-ad-reference` | Ads of the World·D&AD·The One Show의 수상 광고·캠페인 벤치마크 |
| ChatGPT `@chany-ai-prompt-reference` · Codex `$chany-ai-prompt-reference` | Meigen 이미지·원본 프롬프트 분석과 제품별 제작 프롬프트 |
| ChatGPT `@chany-creative-direction` · Codex `$chany-creative-direction` | 평범한 요청을 브랜드 코어·감성 에디토리얼·트렌드 포워드 콘셉트와 전문가용 제작 프롬프트로 전환 |
| ChatGPT `@chany-video-reference-ingest` · Codex `$chany-video-reference-ingest` | YouTube·Instagram 등 영상 페이지를 브라우저에서 사용자 허가로 관찰·캡처하고 분석 가능한 레퍼런스 패킷으로 준비 |
| ChatGPT `@chany-campaign-visual` · Codex `$chany-campaign-visual` | 연출컷과 텍스트 없는 마스터 키비주얼 |
| ChatGPT `@chany-detail-page` · Codex `$chany-detail-page` | 히어로·특징·혜택·증거·사용 장면·CTA 상세/랜딩 모듈 |
| ChatGPT `@chany-ad-creative` · Codex `$chany-ad-creative` | 단일 이미지·캐러셀 광고와 게시물 카피, 포스터·배너·채널 재구성 |
| ChatGPT `@chany-image-edit` · Codex `$chany-image-edit` | 마스크 편집, 부분 수정, 문구 복원과 제한된 교체 |
| ChatGPT `@chany-model-fashion` · Codex `$chany-model-fashion` | 성인 모델 일관성, 원본 의류·액세서리 착장 |
| ChatGPT `@chany-campaign-video` · Codex `$chany-campaign-video` | 제품 광고·브랜드 필름·프로모션 영상의 콘셉트, 기준 스틸, 생성과 클립 검수 |
| ChatGPT `@chany-media-production-loop` · Codex `$chany-media-production-loop` | 승인된 이미지·캠페인 영상의 작업 ID, 비용 승인, 화면 검수, 제한된 결함 교정과 안전한 재개 |
| ChatGPT `@chany-video-assembly` · Codex `$chany-video-assembly` | 승인 영상 조립, 지정 구간 교체, 규격 정규화, 훅 변형과 검증 |
| ChatGPT `@chany-preflight` · Codex `$chany-preflight` | 영상·프레임·배치 작업 전 로컬 도구와 한글 폰트 환경 점검 |
| ChatGPT `@chany-publication-review` · Codex `$chany-publication-review` | 정확한 최종 카피·오퍼·에셋 버전의 근거·권리·채널·최종 렌더 게시 전 검수 |

기존 호출은 ChatGPT Work의 `@auto-photo-production`과 Codex의 `$auto-photo-production`에서 한 버전 동안 호환되며 새 `chany-studio` 라우터로 안내됩니다.

## 프로젝트부터 시작하기

새 광고 프로젝트를 만든 뒤 Chany's Studio가 사용할 로컬 폴더를 연결합니다. 초기화는 지침과 작업 구조만 만들며 이미지·영상 생성이나 크레딧 사용을 시작하지 않습니다.

Claude Cowork에서는 다음처럼 시작합니다.

```text
/project-studio 신제품 선크림의 상세페이지, Meta 광고와 15초 브랜드 필름 프로젝트를 설정해줘.
```

Claude의 대화형 환경에서는 호출 내용·첨부파일·기존 프로젝트 기록을 먼저 확인한 뒤, 빠진 캠페인 정보만 네이티브 **Ask your question** 카드에 한 번에 최대 3개씩 표시합니다. Moai에서 이미 답한 일반 프로젝트 질문은 반복하지 않습니다. 설계안이 완성되면 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드에서 선택해야 Chany 관리 파일 쓰기가 시작됩니다. 질문 카드 기능이 현재 호스트에 없거나 답이 비어 있으면 이를 승인으로 간주하지 않고 같은 최소 질문을 일반 대화로 이어가며, 명시적으로 취소하면 재질문 없이 끝납니다. 같은 요청에서 Moai 초기화도 실행하면 Moai 파일은 그 자체의 선행 미리보기와 승인을 거쳐 먼저 작성될 수 있습니다.

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

Moai와 함께 쓰는 방법(개발자용)은 [고급·개발자 안내](docs/ADVANCED.md)를 보세요.

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
Claude Cowork: 이 제품의 마케팅 캠페인을 만들어줘.
ChatGPT Work: @chany-studio로 이 제품의 마케팅 캠페인을 만들어줘.
Codex(개발자용): $chany-studio로 이 제품의 마케팅 캠페인을 만들어줘.
제품 누끼와 팩샷, 마스터 키비주얼, 상세페이지 모듈 5장,
1:1·4:5·9:16 광고소재와 15초 제품 브랜드 필름을 같은 방향으로 구성해줘.
유료 생성 전에 산출물 수와 승인 지점을 먼저 보여줘.
```

한 가지 결과가 분명하면 해당 전문 스킬을 바로 호출합니다.

Claude Cowork에서는 스킬 이름 없이 원하는 결과를 평소 말투로 요청하면 됩니다. 아래 예시는 ChatGPT Work와 개발자용 Codex에서 스킬을 직접 고르는 방법입니다.

```text
ChatGPT Work: @chany-creative-direction으로 이 브리프를 세 가지 세련된 콘셉트로 발전시키고 가장 적합한 방향과 제작 프롬프트를 추천해줘.
Codex(개발자용): $chany-creative-direction으로 이 브리프를 세 가지 세련된 콘셉트로 발전시키고 가장 적합한 방향과 제작 프롬프트를 추천해줘.

ChatGPT Work: @chany-detail-page로 승인된 키비주얼을 사용해 상세페이지 모듈 5장을 만들어줘.
Codex(개발자용): $chany-detail-page로 승인된 키비주얼을 사용해 상세페이지 모듈 5장을 만들어줘.

ChatGPT Work: @chany-ad-creative로 이 프로모션의 1:1 피드와 9:16 스토리 광고를 만들어줘.
Codex(개발자용): $chany-ad-creative로 이 프로모션의 1:1 피드와 9:16 스토리 광고를 만들어줘.

ChatGPT Work: @chany-media-production-loop로 승인된 키비주얼 3종의 생성 작업과 화면 검수를 추적해줘.
Codex(개발자용): $chany-media-production-loop로 승인된 키비주얼 3종의 생성 작업과 화면 검수를 추적해줘.

ChatGPT Work: @chany-campaign-video로 이 제품의 콘셉트형 15초 광고 영상을 기준 이미지부터 클립 검수까지 만들어줘.
Codex(개발자용): $chany-campaign-video로 이 제품의 콘셉트형 15초 광고 영상을 기준 이미지부터 클립 검수까지 만들어줘.

ChatGPT Work: @chany-video-reference-ingest로 이 Instagram Reel을 브라우저 캡처나 첨부 파일로 준비하고 확인된 구성만 내 제품 영상에 맞게 분석해줘.
Codex(개발자용): $chany-video-reference-ingest로 이 YouTube 영상을 브라우저 캡처나 첨부 파일로 준비하고 확인된 구성만 내 제품 영상에 맞게 분석해줘.

ChatGPT Work: @chany-video-assembly로 승인된 캠페인 영상 클립을 조립하거나 지정 구간만 교체하고 결과를 검증해줘.
Codex(개발자용): $chany-video-assembly로 승인된 캠페인 영상 클립을 조립하거나 지정 구간만 교체하고 결과를 검증해줘.
```

상세/랜딩페이지는 목적에 따라 `plan`, `audit`, `produce`로 요청할 수 있습니다. `plan`은 페이지 구조와 촬영 필요 항목, `audit`은 기존 페이지의 증거 범위와 누락된 촬영·자료, `produce`는 이름이 정해진 모듈 제작을 담당합니다. 생성 이미지는 누락된 사실 증거를 대신하지 않습니다.

```text
ChatGPT Work: @chany-detail-page로 기존 랜딩페이지를 audit하고 증거·촬영 공백을 정리해줘.
Codex(개발자용): $chany-detail-page로 기존 랜딩페이지를 audit하고 증거·촬영 공백을 정리해줘.

ChatGPT Work: @chany-publication-review로 최종 광고의 정확한 카피·오퍼·에셋 버전을 게시 전 검수해줘.
Codex(개발자용): $chany-publication-review로 최종 광고의 정확한 카피·오퍼·에셋 버전을 게시 전 검수해줘.
```

게시 검수는 정확한 카피, 오퍼, 목적지, 에셋, 크롭, 레이아웃과 최종 렌더 버전에 묶입니다. 초안 기획과 제작은 계속할 수 있지만 근거, 권리, 검토 시점의 공식 1차 출처 또는 이름이 확인된 책임 검토자가 빠지면 공개는 보류됩니다. 카피·크롭·레이아웃이 바뀌면 새 버전으로 다시 검수해야 하며, 이 절차를 법률 자문이나 법적 승인으로 표현하지 않습니다.

## 캠페인 제작 순서

1. 해당 업종 전문 스킬이 여정·증거·연출·주장 경계를 `industry direction packet`으로 정리합니다.
2. 브랜드·타깃·채널·승인 문구를 공통 캠페인 브리프로 전환합니다.
3. 원본에서 제품, 차량, 공간, UI, 사람, 프로그램과 카피 등 필요한 정체성 잠금을 만듭니다.
4. 필요한 경우 레퍼런스를 대화 안에 실제 이미지로 표시합니다. 사이트를 정하지 않으면 Pinterest 5장 + Meigen 5장(총 10장), 사이트 하나를 지정하면 기본 6장, 장수를 지정하면 그 장수를 따릅니다.
5. 영상 레퍼런스 링크가 있으면 사용자가 호출한 브라우저 확장 캡처, 실제 미디어 URL 또는 첨부 파일 중 관찰 가능한 경로로 레퍼런스 패킷을 만들고 확인한 타이밍만 분석합니다.
6. 브리프와 선택한 레퍼런스 Visual DNA에서 서로 다른 세 가지 콘셉트를 만들고 브랜드 적합성·메시지 명확성·채널 적합성·트렌드 수명을 평가해 한 방향을 승인합니다.
7. 승인 방향을 구도·조명·재질·팔레트·타이포 역할·카피 영역·보존·제외·검수 기준이 명확한 전문가용 프롬프트로 컴파일한 뒤 마스터 키비주얼을 승인합니다.
8. 승인된 패킷과 캠페인 규칙에서 상세/랜딩페이지와 채널 광고를 파생합니다.
9. 콘셉트형 캠페인 영상은 USP별 장면 역할, 모션 방식, 대본·출연자·증거 노출·CTA를 잠그고 제품 장면의 승인 스틸을 첫 프레임 권위로 연결합니다.
10. 승인된 복수 클립을 지정 규격으로 조립하거나 승인 구간만 교체하고, 요청한 경우 훅 하나만 바꾼 변형과 빈 성과 입력표를 만듭니다.
11. 원본, 승인 카피, 프레임레이트, 오디오, 비율, 안전영역, 업종별 실패 기준과 캠페인 일관성을 검수합니다.
12. 실제 성과가 제공되면 추적·비교 가능성·표본을 확인한 뒤 다음 라운드에서 바꿀 한 변수만 정합니다.

기본값은 유료 생성 전에 사용자가 레퍼런스와 산출물 수를 확인하는 방식입니다. 자동 진행을 원하면 범위와 함께 `레퍼런스도 자동 선택해서 끝까지 진행해줘`라고 요청하세요.

## 레퍼런스 검색 규칙

- 사이트를 정하지 않은 범용 비주얼 탐색은 `chany-reference-board`가 Pinterest 5장 + Meigen 5장(총 10장)을 한 보드로 보여줍니다. 두 사이트는 각자의 검색·미리보기 규칙을 따르며 서로 후보를 대신 채우지 않습니다. 자세한 내용은 [복구 규칙](docs/REFERENCE-RECOVERY.md)을 참고하세요.
- 특정 사이트를 지정하면 목적별 경로 하나만 씁니다. Pinterest만은 `chany-reference-board`, Meigen 이미지·원본 프롬프트는 `chany-ai-prompt-reference`, 전문 광고·라이프스타일 사진은 `chany-commercial-photo-reference`의 Production Paradise, 수상 광고와 캠페인 벤치마크는 `chany-award-ad-reference`의 Ads of the World·D&AD·The One Show를 사용합니다.
- 사이트를 지정한 보드는 그 경로만 사용합니다. 후보가 부족해도 다른 경로로 몰래 보충하지 않으며 Stocksy, ShotDeck, Death to Stock은 사용하지 않습니다. Pinterest 경로의 로컬 인라인 미리보기 연결은 계속 공개 Pin 페이지와 `i.pinimg.com`만 허용합니다.
- 표시 수량은 사이트 미지정 시 `10장`(Pinterest 5 + Meigen 5), 사이트 하나를 지정하면 `6장`이 기본입니다. 사용자가 “3장”, “10개”처럼 양의 정수로 지정하면 그 수량을 `target_count`로 사용합니다. 명시한 수량을 임의로 줄이거나 늘리지 않으며, 허용된 두 검색의 후보가 부족하면 요청·표시·부족 수량을 밝힌 미완성 보드로 끝냅니다.
- 선택한 경로에는 업종 taxonomy의 **L1 광역 카테고리 1개를 먼저** 검색합니다.
- 더 좁혀야 할 때만 같은 경로의 **직접 L2 하위 카테고리 0~1개**를 추가합니다. 한 작업에서 여러 L2 형제를 검색하지 않습니다.
- 세 번째 의미 검색어와 스타일·렌즈·지역·색·무드·플랫폼 modifier를 검색어에 붙이지 않습니다.
- 검색 뒤에는 선택한 이미지의 구도·조명·배경·재질·색 관계·정보 위계를 Visual DNA로 분석할 수 있지만, 그 분석어를 새 검색 쿼리로 확장하지 않습니다.
- 선택 결과는 링크나 HTML 목록에만 두지 않고, 지원되는 ChatGPT/Codex 및 Claude 대화 화면에서 실제 이미지로 확인할 수 있게 전달합니다.

## 핵심 보호 원칙

- 제품·음식·차량·공간·UI·프로그램·모델·의류의 승인 원본과 사실 자료가 정체성의 최종 기준입니다.
- 가격, 할인율, 기간, 제품 효능, 비교 주장, CTA와 법적 고지는 임의로 만들지 않습니다.
- 모든 온라인 레퍼런스는 복제 대상이 아니라 구도, 조명, 배경, 색 관계, 재질, 메시지 장치와 정보 위계를 이해하는 방향 자료로만 사용합니다.

최신 트렌드는 검색어에 섞지 않습니다. Pinterest 후보를 모은 뒤 Pinterest Predicts·Pinterest Palette의 현재 신호 중 브랜드·고객·메시지·접근성에 맞는 요소만 한 가지 중심 장치 또는 보조 포인트로 번역합니다. 유행이 맞지 않으면 쓰지 않으며, 제품·로고·인물·공간의 권위 원본을 트렌드 색이나 스타일로 바꾸지 않습니다. 플랫폼 규격과 이미지 생성법은 각 공식 문서에서 확인하지만 그 문서의 예시 이미지는 레퍼런스로 사용하지 않습니다.
- 마스터 키비주얼을 승인한 뒤 상세페이지와 광고 규격을 파생합니다.
- 기존 결과의 부분 수정은 지정 영역과 한 가지 속성만 바꿉니다.
- 라벨·로고·카피·제품 형상·모델 정체성·의류 구조가 바뀐 결과는 실패로 처리합니다.
- 게시 직전에는 관할 규정과 플랫폼 정책의 최신 상태를 다시 확인하고, 근거·권리·안전·표현을 책임 있는 사람이 승인해야 합니다.
- 여러 단계를 자동 생성하기 전에 예상 생성 횟수와 크레딧 사용 지점을 알립니다.

## 이미지 생성 기본 모델과 유료 실행 범위

생성형 정적 이미지와 부분 편집의 기본 모델은 **GPT Image 2.5**, 정확한 모델 ID는 `gpt_image_2_5`입니다. 호출 전 현재 도구 스키마에서 이 모델을 실제로 선택할 수 있는지 확인하고, 요청 기본값과 실제 해석된 모델을 함께 표시합니다. 모델 선택기가 숨겨져 있고 현재 문서나 런타임 정보로 GPT Image 2.5임을 확인할 수 없으면 공급자 기본값을 GPT Image 2.5라고 부르지 않습니다. 사용자가 다른 모델을 지정했거나, 승인된 프로젝트 정책이 있거나, 필수 작업을 `gpt_image_2_5`가 지원하지 않는다고 라이브 확인된 경우에만 해당 산출물 범위에서 대체 모델을 승인받아 사용합니다. 영상·음성·클립 조립에는 이 정적 이미지 기본값을 강제하지 않습니다.

유료 생성 전에는 연결된 도구의 **현재 스키마와 라이브 카탈로그**에서 실제 작업, 모델 또는 워크플로, 입력 역할, 옵션과 제한을 확인합니다. 무료 견적·비용 미리보기가 있으면 먼저 실행하고, 최종 프롬프트, 입력별 역할, 확인된 모델·워크플로와 옵션, 서버 조정값, 공급자가 반환한 크레딧·잔액 정보, 출력 수와 배치 한도를 한 번에 보여준 뒤 승인을 받습니다. `gpt_image_2_5` 기본 정책을 제외한 기억 속 모델명이나 이전 가격표를 런타임 사실처럼 사용하지 않습니다. 모델이나 공급자를 바꾸면 기존 견적·유료 생성 승인·크리에이티브 승인은 해당 범위에서 무효가 되므로 다시 확인합니다.

시간 초과, 연결 끊김 또는 결제·생성 상태를 알 수 없는 결과는 그대로 다시 제출하지 않습니다. 원래 작업 영수증, 상태 또는 기록에서 기존 작업을 먼저 찾습니다. 프롬프트 의미, 입력 또는 역할, 모델·워크플로, 유료 옵션, 수량, 길이, 비율, 언어가 바뀌면 변경 요청으로 보고 새 사전검토와 승인을 받습니다.

- Higgsfield MCP가 연결된 Claude에서는 현재 스키마가 노출하는 영상·Soul 캐릭터·오디오 작업을 실행할 수 있습니다. 정적 이미지에 Higgsfield나 다른 공급자를 쓰려면 위 조건을 충족한 범위별 대체 승인이 필요합니다.
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

업데이트 후 버전이 **2.10.0**인지 확인하고 새 대화 또는 새 작업을 시작하세요.

## 외부 서비스와 데이터

- 플러그인 저장소에는 API 키, 액세스 토큰 또는 사용자 사진이 포함되어 있지 않습니다.
- Higgsfield 기능 사용 시 사용자가 선택한 원본과 레퍼런스가 Higgsfield로 전송될 수 있습니다.
- Claude용 `reference-preview`는 Pinterest의 공개 미리보기만 읽어 대화에 표시합니다.
- 비밀번호, API 키, 액세스 토큰이나 인증 코드를 대화에 붙여 넣지 말고 연결 화면에서 인증하세요.
- 요금, 크레딧, 생성물 권리와 외부 서비스 약관은 각 서비스에서 확인하세요.

## 문서

- [설치 및 업데이트](docs/INSTALL-AND-UPDATE.md)
- [전체 사용 가이드](docs/USER-GUIDE.md)
- [문제 해결](docs/TROUBLESHOOTING.md)
- [변경 이력](CHANGELOG.md)

## 저장소 구조

개발자용 저장소 구조는 [고급·개발자 안내](docs/ADVANCED.md)에 있습니다.

## 라이선스와 공식 참고

이 프로젝트는 [MIT License](LICENSE)로 배포됩니다.

- [OpenAI: Plugins in ChatGPT and Codex](https://help.openai.com/en/articles/20001256-plugins-in-codex/)
- [Claude Cowork: Install plugins](https://claude.com/docs/cowork/guide/plugins)
- [Claude Code: Plugins reference](https://code.claude.com/docs/en/plugins-reference)
- [Higgsfield MCP 도움말](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-higgsfield-mcp)
- [공식 설치·사용설명서](https://jolly-phlox-79c.notion.site/Chany-s-Studio-3c783e9464668140b794ee076be24406)
