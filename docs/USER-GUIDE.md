# Chany's Studio 사용 가이드

처음 만든다면 [왕초보 실습 교안](https://chany-studio.chanjunpark.chatgpt.site/learn.html)부터 보세요. 플러그인 사용법 → AI 이미지·영상 기본 개념 → 첫 실습 → 수정·저장 순서로 설명하며, 대괄호만 바꿔 쓰는 요청문과 수업용 인쇄 기능이 있습니다. [교안 원문](BEGINNER-WORKBOOK.md)도 제공합니다.

## 먼저 읽어 주세요

- **빠른 시작이 기본입니다.** 원하는 결과를 한 문장으로 요청하면 플러그인이 가장 잘 맞는 방향을 고르고, 문구는 알려 주신 사실로만 씁니다.
- **레퍼런스 자동 추천**: 제품 사진을 올리면 제품의 모양·색·재질에 어울리는 레퍼런스를 찾아 보여주고 한 장을 추천합니다. 그 레퍼런스의 구도·조명·분위기에 내 제품을 넣어 만듭니다.
- **확인 카드**: 유료 생성 전에 만들 것·레퍼런스·방향·문구·사용 도구·실제 비용과 잔액을 한 장으로 보여줍니다. 참고 사진을 생성 서비스에 보낼 때는 출처와 전송을 따로 알리며, 승인해야만 보냅니다. 새 기준 이미지와 영상을 모두 생성하면 두 번 확인합니다. 이미 승인된 기준 이미지는 재사용하고, 기존 영상의 부분 수정에 불필요한 이미지 생성을 추가하지 않습니다.
- **결과 뒤에 할 수 있는 일**: 제품이 원본과 같은지 ✓ 표시로 확인하고, 다른 비율로 늘리기, 이 이미지로 영상 만들기를 이어서 요청할 수 있습니다. 결과가 쓰려는 곳보다 작으면 고화질(2K·4K)로 키우기도 권합니다(Higgsfield 기능 사용, 플러그인에서는 시험 전).
- **여러 방향을 비교하고 싶다면** "여러 안 보여줘", "콘셉트 3안"이라고 말하세요. 자세히 보기 방식으로 바뀝니다. 레퍼런스를 직접 고르려면 "레퍼런스 먼저 보여줘", 레퍼런스 없이 만들려면 "레퍼런스 없이 바로 만들어줘"라고 하면 됩니다.
- **요청 방법**: Claude Cowork는 평소 말투로 요청하면 됩니다. ChatGPT Work는 `@스킬 이름`을 붙이거나 평소 말투로 요청합니다. `$스킬 이름`으로 시작하는 Codex 예시는 개발자용입니다.
- **전문 용어를 배우지 않아도 됩니다**: 원하는 느낌만 말하면 필요한 연출과 프롬프트는 내부에서 정리합니다. 원하는 참고 사진도 함께 올려 주세요. 이미 참고 사진이 있으면 다른 사진을 다시 고르도록 하지 않습니다.
- 모르는 단어는 [용어 사전](GLOSSARY.md), 막히면 [문제 해결](TROUBLESHOOTING.md)을 보세요.

2.8.0의 **Higgsfield 광고 모션·영상 부분 수정·GPT Image 2.5**는 [사용법과 예시](HIGGSFIELD-UPDATES.md)를 확인하세요. 실행 연결은 별도 확인하며 현재 이미지 기본값은 GPT Image 2.5입니다.

2.7.0의 **Meigen 이미지·프롬프트 레퍼런스**는 `chany-ai-prompt-reference`로 호출합니다. [수량 지정·광고 제작 연결·프로젝트 초기화 예시](MEIGEN-REFERENCES.md)를 확인하세요.

Chany's Studio는 Claude와 ChatGPT Work에서 같은 프로젝트 지침을 사용하며, 업종별 고객 여정과 증거 기준에 맞춰 광고·마케팅·상세페이지·홍보 콘텐츠를 만드는 전문 스킬 모음입니다. 제품과 음식뿐 아니라 서비스, 교육, 의료, 여행, 공간, 디지털 제품, 자동차, 소비자 기술, 기업·채용, 공연·행사까지 다룹니다.

## 전문 용어 몰라도 괜찮아요

사진·영상 용어와 프롬프트를 공부할 필요가 없습니다. 원하는 결과를 평소 말로 설명하거나 참고 사진을 올리면 됩니다. 전문적인 설정은 내부에서 처리하며, 용어 설명은 요청할 때만 보여줍니다.

| 이렇게 말하면 | 이렇게 도와줍니다 |
| --- | --- |
| 배경만 흐리게, 제품은 또렷하게 | 제품과 라벨을 살리고 배경만 흐리게 |
| 화장품 화보처럼 반짝이게 | 제품 재질과 참고 사진에 맞는 빛과 반사를 추천 |
| 따뜻한 창가 햇살 | 따뜻한 빛과 자연스러운 그림자로 연출 |
| 이 사진처럼 내 제품으로 | 제품은 그대로, 참고 사진의 구도·빛·분위기를 반영 |
| 글자 넣을 자리 남겨서 | 문구를 읽기 좋은 빈 공간 확보 |
| 천천히 다가가는 영상 | 제품 쪽으로 다가가는 카메라 움직임 |
| 제품이 빙글 도는 영상 | 제품 회전과 카메라 회전을 구분해 연출 |

예시:

```text
이 제품 사진으로 배경은 흐리게, 따뜻한 햇살 느낌으로 인스타 광고 만들어줘.
느낌 직접 고를래.
화장품 화보 조명은 뭐라고 해? 어떻게 요청하면 돼?
```

"느낌 직접 고를래"라고 하면 아직 정해지지 않은 것만 쉬운 선택지로 물어봅니다. "알아서 추천해줘"도 가능합니다. Claude와 ChatGPT 모두 연결된 질문 도구가 있으면 카드로, 없으면 번호 선택 대화로 진행합니다. 참고 사진이 답해 주는 부분은 다시 묻지 않습니다.

### 캐러셀·썸네일·광고 디자인

잡지형 캐러셀, 유튜브 썸네일, 인스타 커버와 Meta 광고는 같은 제작 스킬 안에서 목적별로 다르게 구성합니다. 사이트 트렌드 검색은 하지 않습니다. 참고 사진·브랜드·실제 사용 목적을 기준으로 구도, 문구 크기, 여백과 일관성을 결정하고 결과물을 검수합니다. Pinterest 실사 사진의 연출 분석은 원본 AI 프롬프트와 구분합니다.

일반 레퍼런스 검색 기본값은 Pinterest 5 + MeiGen 5, 총 10장으로 유지합니다. 출처나 장수를 지정하면 그 요청을 따릅니다. 레퍼런스 검색과 제작 장수는 별개이며 불필요한 추가 생성은 하지 않습니다.

```text
첨부한 제품과 참고 사진으로 인스타 잡지형 캐러셀 5장 만들어줘. 어려운 건 알아서 추천해줘.
카페 조명 바꾸는 영상이야. 이 사진으로 유튜브 썸네일 만들어줘. 글자는 짧게.
내 브랜드 색과 첨부한 사진 분위기를 살려 메타 광고를 만들어줘. 제품과 문구가 잘 보이게 해줘.
```

실제 사진 생성에는 연결된 제작 도구가 필요합니다. 이번 추가 지침은 Claude/ChatGPT의 모든 화면에서 같은 질문 카드나 이미지 표시를 보장하는 기능은 아닙니다.

## 목적을 말하면 제작 방식까지 추천해요

무엇을 만들지만큼 **보고 난 사람이 무엇을 하길 바라는지**가 중요합니다. 구매, 문의·예약, 브랜드 기억, 정보 이해·저장 중 목적에 맞춰 구성과 문구를 잡고 제작 도구를 추천합니다.

제품 사진·서비스 설명·기존 프로젝트에서 이미 알 수 있는 내용은 다시 묻지 않습니다. 부족한 핵심 정보만 쉬운 질문 1~3개로 확인합니다. 목적이 정해지지 않았다면 "알아서 추천해줘"라고 해도 되지만, 제품 사진만 보고 판매 광고로 단정하지 않습니다.

진행 순서: **자료·목적 확인 → 구성과 제작 방식 추천 → 방향·문구·비용 확인 → 제작 → 원본과 결과 검수**.

- 이미지 기본값은 GPT Image 2.5입니다. 다른 모델에 작업상 구체적인 이점이 있으면 이유와 비용을 같은 확인 카드에서 제안합니다. 모델 이름을 공부하거나 목록에서 직접 고를 필요는 없습니다.
- 글자 수정·누끼·자막·컷 편집처럼 일반 편집으로 충분하면 전체를 새로 생성하지 않습니다. 영상 생성·AI 영상 수정·일반 영상 편집은 서로 다른 경로입니다.
- 이미 승인한 사진과 기획은 이어서 사용합니다. 기존 영상을 부분 수정할 때 새 기준 이미지를 무조건 만들지 않습니다.
- "알아서"는 방향 추천이지 무제한 결제 승인이 아닙니다. 연결 도구의 지원 여부를 확인하고 유료 실행은 승인한 범위에서만 진행합니다. 모델 선택이 광고 성과나 완벽한 원본 보존을 보장하지는 않습니다.

| 바로 쓸 수 있는 요청 | 진행 방식 |
| --- | --- |
| 이 제품과 참고 사진으로 처음 보는 고객에게 구매를 유도할 인스타 광고 1장 만들어줘 | 첨부 참고 사진 우선, 제품 특징·짧은 메시지·구매 이동에 맞게 구성 |
| 우리 상담 서비스를 처음 아는 사람이 예약 문의하게 만드는 짧은 영상을 만들어줘 | 서비스의 확인된 정보와 신뢰 근거를 중심으로 영상 기획 |
| 이 자료로 저장하고 싶은 잡지형 캐러셀 5장 만들어줘. 구매 문구는 빼줘 | 읽는 순서와 통일된 디자인, 장별 역할을 정하고 개별 이미지로 제작 |
| 이 사진의 배경만 밝게 고쳐줘. 제품과 라벨은 그대로 | 수정 범위와 보존 대상을 정하고 부분 편집 후 비교 |
| 이 영상은 내가 촬영했어. 배경만 바꾸고 제품·움직임·음악은 유지해줘 | 원본·권한과 편집 가능 범위를 확인하고 AI 영상 편집을 제안; 유지 결과 검수 |
| 이 영상 끝 2초를 자르고 자막만 고쳐줘 | 지원되는 일반 영상 편집으로 처리, 불필요한 영상 생성 생략 |

기존 프로젝트도 이미 정해진 목적과 선호도를 먼저 사용합니다. 프로젝트 지침 자체를 새 방식으로 바꾸려면 `/project-studio update`로 변경 내용을 확인한 뒤 저장합니다. Claude와 ChatGPT의 질문 UI·파일 접근·실행 도구가 다르므로, 연결되지 않은 기능은 실행 완료로 표시하지 않습니다.

## 어떤 스킬을 써야 하나요?

구매 전환용 영상·단일 이미지·캐러셀은 [퍼포먼스 광고 제작 가이드](PERFORMANCE-ADS.md)에 요청 예시를 모았습니다. 사진 연출은 Pinterest, 실제 광고 벤치마킹은 Meta 광고 라이브러리로 구분하며 공개 정보만으로 실제 광고 성과를 단정하지 않습니다.

Chany's Studio 2.15.0은 두 축, 하나의 전문 크리에이티브 디렉션 계층과 하나의 공통 미디어 실행 루프를 함께 사용합니다. 여기에 릴스·쇼츠 제품 바이럴 리메이크, 광고 변형, 숏폼 재가공, 제품 3D를 서로 분리된 전문 스킬로 연결합니다.

1. **업종 오버레이**는 고객이 왜 선택하는지, 어떤 근거가 필요한지, 어떤 표현을 피해야 하는지와 그 업종다운 촬영·연출 방향을 정합니다.
2. **공통 제작 스킬**은 브리프, 레퍼런스 보드, 키비주얼, 상세페이지, 광고, 편집, 모델·패션과 콘셉트형 캠페인 영상 같은 실제 산출물을 설계합니다. 생성 실행과 재개는 `chany-media-production-loop`가 공통으로 추적합니다.

업종이 분명하면 기본적으로 주 업종 스킬 하나를 먼저 선택하고 필요한 제작 스킬을 이어 붙입니다. 한 가지 결과가 분명하면 해당 제작 스킬까지 함께 지정하고, 키비주얼·상세페이지·광고·캠페인 영상처럼 여러 결과가 연결되면 ChatGPT Work의 `@chany-studio` 또는 Codex의 `$chany-studio`에 전체 조정을 맡깁니다. 업종이 겹치더라도 서로 다른 규제나 구매 행동을 동시에 다루는 경우가 아니면 주 업종을 두 개 이상 선택하지 않습니다.

ChatGPT Work의 명시 호출은 `@스킬명`, Codex의 명시 호출은 `$스킬명`이며 자연어만으로도 설명에 맞는 스킬을 자동 선택할 수 있습니다. Claude Cowork에서는 `/project-studio` 슬래시 명령을 제외한 전문 작업을 자연어로 요청해 자동 선택합니다.

아래 예시의 `ChatGPT Work`와 `Codex` 호출 줄은 서로 대안입니다. 사용하는 플랫폼의 한 줄만 선택하고 이어지는 요청을 함께 입력하세요.

### 공통 제작·운영 스킬

| 원하는 결과 | 사용할 스킬 |
| --- | --- |
| 새 프로젝트 지침·브리프·에이전트 설정 | ChatGPT `@chany-project` · Codex `$chany-project` |
| 전체 캠페인 또는 여러 산출물 | ChatGPT `@chany-studio` · Codex `$chany-studio` |
| 캠페인 브리프 또는 성과 기반 다음 실험 | ChatGPT `@chany-marketing-brief` · Codex `$chany-marketing-brief` |
| 고객 구매 동기·JTBD·페르소나 분석 | ChatGPT `@chany-jtbd-persona` · Codex `$chany-jtbd-persona` |
| Meta 영상·단일 이미지·캐러셀 광고 분석 | ChatGPT `@chany-meta-ad-research` · Codex `$chany-meta-ad-research` |
| 누끼·순백 팩샷·제품 클린업 | ChatGPT `@chany-product-assets` · Codex `$chany-product-assets` |
| 사이트 미지정 시 Pinterest 5장 + Meigen 5장(총 10장), Pinterest만 지정 시 기본 6장, 또는 요청 수량 비교 | ChatGPT `@chany-reference-board` · Codex `$chany-reference-board` |
| 전문 광고·라이프스타일 사진 레퍼런스 | ChatGPT `@chany-commercial-photo-reference` · Codex `$chany-commercial-photo-reference` |
| 수상 광고·캠페인 벤치마크 | ChatGPT `@chany-award-ad-reference` · Codex `$chany-award-ad-reference` |
| Meigen 이미지·원본 프롬프트 분석과 제품별 제작 프롬프트 | ChatGPT `@chany-ai-prompt-reference` · Codex `$chany-ai-prompt-reference` |
| 세련된 콘셉트 3안·추천 방향·전문 제작 프롬프트 | ChatGPT `@chany-creative-direction` · Codex `$chany-creative-direction` |
| YouTube·Instagram 영상 레퍼런스의 브라우저 캡처·분석 준비 | ChatGPT `@chany-video-reference-ingest` · Codex `$chany-video-reference-ingest` |
| 릴스·쇼츠 링크와 내 제품으로 빠른 제품 바이럴 영상 제작 | ChatGPT `@chany-viral-product-remake` · Codex `$chany-viral-product-remake` |
| 제품 연출컷·마스터 키비주얼 | ChatGPT `@chany-campaign-visual` · Codex `$chany-campaign-visual` |
| 상세페이지 이미지 모듈 | ChatGPT `@chany-detail-page` · Codex `$chany-detail-page` |
| 단일 이미지·캐러셀 광고, 본문·CTA, 포스터·배너 | ChatGPT `@chany-ad-creative` · Codex `$chany-ad-creative` |
| 기존 이미지 부분 수정 | ChatGPT `@chany-image-edit` · Codex `$chany-image-edit` |
| 성인 모델·패션 착장 | ChatGPT `@chany-model-fashion` · Codex `$chany-model-fashion` |
| 제품 광고·브랜드 필름·프로모션 영상 | ChatGPT `@chany-campaign-video` · Codex `$chany-campaign-video` |
| 광고 모션 타이포·혜택 도식·로고 등장·CTA 엔드카드 | ChatGPT `@chany-motion-design` · Codex `$chany-motion-design` |
| 승인된 광고 한 편에서 제품·배경·인물·의상·문구를 통제해 여러 버전 제작 | ChatGPT `@chany-ad-variants` · Codex `$chany-ad-variants` |
| 허가된 YouTube·장편 영상을 릴스·쇼츠로 재가공 | ChatGPT `@chany-shortform-recut` · Codex `$chany-shortform-recut` |
| 제품 사진을 3D 자산·턴테이블·가상 세트·카메라 프리비즈로 제작 | ChatGPT `@chany-product-3d` · Codex `$chany-product-3d` |
| 이미지·캠페인 영상 생성 실행·재개·화면 검수 | ChatGPT `@chany-media-production-loop` · Codex `$chany-media-production-loop` |
| 승인 영상 조립·컷 교체·훅 변형·검증 | ChatGPT `@chany-video-assembly` · Codex `$chany-video-assembly` |
| 로컬 미디어 도구·한글 폰트 점검 | ChatGPT `@chany-preflight` · Codex `$chany-preflight` |
| 최종 광고·상세페이지·메시지·캠페인 영상 게시 검토 | ChatGPT `@chany-publication-review` · Codex `$chany-publication-review` |

### 업종 오버레이 11개

| 업종 | 사용할 스킬 | 대표 용도 |
| --- | --- | --- |
| 전문 서비스 | ChatGPT `@chany-professional-services` · Codex `$chany-professional-services` | 컨설팅, 자문, 전문직, 리드 확보 |
| 교육 | ChatGPT `@chany-education-marketing` · Codex `$chany-education-marketing` | 학교, 학원, 강의, 대학, 에듀테크, 모집 |
| 헬스케어 | ChatGPT `@chany-healthcare-marketing` · Codex `$chany-healthcare-marketing` | 병원, 의원, 치과, 웰니스, 재활, 정신건강, 원격의료 |
| 식당·카페/F&B | ChatGPT `@chany-food-dining` · Codex `$chany-food-dining` | 식당, 카페, 음료, 포장, 배달 |
| 호텔·여행 | ChatGPT `@chany-hospitality-travel` · Codex `$chany-hospitality-travel` | 호텔, 리조트, 숙박, 여행지, 예약형 체험 |
| 공간·인테리어·부동산 | ChatGPT `@chany-space-real-estate` · Codex `$chany-space-real-estate` | 건축, 인테리어, 상업 공간, 매물 홍보 |
| 디지털 제품 | ChatGPT `@chany-digital-product-marketing` · Codex `$chany-digital-product-marketing` | 소비자 앱, 플랫폼, B2B SaaS |
| 자동차·모빌리티 | ChatGPT `@chany-automotive-marketing` · Codex `$chany-automotive-marketing` | 자동차, 전기차, 오토바이, 상용차 |
| 소비자 기술 | ChatGPT `@chany-consumer-tech-marketing` · Codex `$chany-consumer-tech-marketing` | 전자제품, 웨어러블, 연결형 기기 |
| 기업·채용 | ChatGPT `@chany-corporate-employer` · Codex `$chany-corporate-employer` | 기업 브랜드, 평판, 채용, 조직문화 |
| 공연·전시·행사·지역축제 | ChatGPT `@chany-live-culture-events` · Codex `$chany-live-culture-events` | 공연, 전시, 컨퍼런스, 행사, 문화·지역축제 |

Claude Cowork에서는 스킬 이름을 외울 필요 없이 “이 호텔의 예약 전환 캠페인”처럼 업종과 목표를 자연어로 말하면 해당 업종 오버레이를 자동 선택합니다. ChatGPT Work나 Codex에서도 자연어 자동 선택을 사용할 수 있지만, 재현 가능한 작업 기록이 필요하면 위의 명시 호출을 권장합니다.

### 업종 선택과 체인 예시

업종 오버레이가 전략과 증거 기준을 넘겨주면 공통 제작 스킬이 결과물을 만듭니다. 대표 체인은 다음과 같습니다.

```text
식당 오픈 캠페인
chany-food-dining → chany-marketing-brief → chany-reference-board → chany-creative-direction → chany-campaign-visual → chany-ad-creative

호텔 예약 전환
chany-hospitality-travel → chany-marketing-brief → chany-reference-board → chany-creative-direction → chany-campaign-visual → chany-detail-page

병원·의원 홍보
chany-healthcare-marketing → chany-marketing-brief → chany-ad-creative → chany-publication-review

SaaS 제품 데모 영상
chany-digital-product-marketing → chany-marketing-brief → chany-campaign-video → chany-media-production-loop → chany-video-assembly

제품 브랜드 필름
chany-consumer-tech-marketing → chany-marketing-brief → chany-campaign-video → chany-media-production-loop → chany-video-assembly

채용 캠페인
chany-corporate-employer → chany-marketing-brief → chany-campaign-video 또는 chany-ad-creative

지역축제 홍보
chany-live-culture-events → chany-reference-board → chany-creative-direction → chany-campaign-visual → chany-ad-creative
```

위 체인의 `chany-reference-board`는 기본 Pinterest 경로입니다. 전문 광고사진이 핵심이면 `chany-commercial-photo-reference`, 수상 광고 아이디어와 메시지 장치가 핵심이면 `chany-award-ad-reference`로 한 번만 교체합니다.

명시 호출 예시:

```text
ChatGPT Work
@chany-food-dining과 @chany-marketing-brief로 신규 브런치 매장의 오픈 캠페인을 설계해줘.

Codex
$chany-hospitality-travel과 $chany-detail-page로 객실 예약 상세페이지 방향을 만들어줘.

Claude Cowork
신규 지역축제의 방문 전환 캠페인이야. 업종별 전략과 증거 기준을 먼저 잡고 레퍼런스 보드와 9:16 광고까지 이어줘.
```

## 0. 프로젝트 설정

프로젝트를 처음 시작할 때 한 번 실행합니다. 현재 작업 폴더를 읽고 이미 제공된 정보는 다시 묻지 않으며, 부족한 핵심 정보만 한 번에 최대 3개씩 확인합니다. 파일을 쓰기 전 프로젝트 요약, 스킬 체인과 변경 파일을 보여주고 승인을 기다립니다.

`/project-studio`를 실행하면 Claude Cowork에서는 **질문 카드**로 프로젝트 사항을 직접 고를 수 있습니다(ChatGPT Work는 선택 입력이나 번호 선택). 이미 말씀하신 내용은 다시 묻지 않습니다.

- **필요한 질문만**: 콘텐츠의 목적, 보는 사람, 만들 것·올릴 곳 중 빠진 핵심 정보만 최대 3개 질문합니다. 모두 알면 질문을 생략합니다.
- **나머지는 추천**: 분위기·품질·비율은 참고 자료와 목적에 맞춰 기본값을 제안합니다. 별도의 긴 선호도 설문은 없습니다.
- **설정 승인**: 저장할 내용을 확인하고 `승인 후 생성 (권장)`·`설계 수정`·`취소` 중에서 고릅니다.

고른 내용은 프로젝트 브리프에 저장되어 이후 요청의 기본값이 됩니다. 기본값일 뿐이라 이미지·영상을 만들 때마다 확인 카드는 그대로 나오고, 참고 사진도 그 카드에서 승인해야만 보냅니다.

```text
Claude Cowork
/project-studio 신제품 선크림의 상세페이지, Meta 광고 3종과 15초 브랜드 필름 프로젝트를 설정해줘.

ChatGPT Work
@chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.

Codex
$chany-project로 현재 작업 폴더를 신제품 선크림 광고 프로젝트로 설정해줘.

일반 메시지 호환 별칭
/project-studio 신제품 선크림 광고 프로젝트를 설정해줘.
```

Claude에서 `/project-studio`가 보이지 않으면 `/photo-reference-studio:project-studio`를 사용합니다. ChatGPT Work의 공식 명시 호출은 `@chany-project`, Codex는 `$chany-project`입니다. ChatGPT 또는 Codex에 `/project-studio …`가 일반 메시지로 전달되면 호환 별칭으로 처리하지만 ChatGPT 슬래시 메뉴에 등록되는 명령은 아닙니다.

Claude Cowork에서는 입력·첨부·기존 프로젝트 기록에서 확인되지 않은 항목만 **Ask your question** 카드로 표시합니다. 한 화면의 질문은 최대 3개이며, 필요한 경우 한 번의 차단 항목 후속 질문만 이어집니다. 광고 목적·타깃·산출물·채널·권리처럼 빠진 캠페인 정보만 보완합니다. 마지막에는 `승인 후 생성 (권장)`·`설계 수정`·`취소` 카드가 표시되며, 생성 승인을 선택해야 Chany 관리 파일이 작성됩니다.

질문 카드가 현재 Claude 호스트에 노출되지 않거나 빈 답·시간 초과·기술 오류가 돌아오면 플러그인은 이를 답변이나 승인으로 간주하지 않고 같은 최소 항목을 일반 텍스트로 묻습니다. 사용자가 `취소`를 선택하거나 명시적으로 중단하면 재질문 없이 Chany 단계를 종료합니다. ChatGPT Work와 Codex에서는 각 호스트의 구조화 입력 기능이 있으면 그것을 사용하고 없으면 간결한 텍스트 확인으로 전환합니다.

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
1:1·4:5·9:16 광고소재와 15초 제품 브랜드 필름이 필요해.
먼저 산출물 수, 승인 지점과 필요한 정확한 문구를 정리해줘.
```

전체 캠페인의 기본 순서는 다음과 같습니다.

`브리프 → 원본 잠금 → 정적 레퍼런스 선택 → 필요한 경우 영상 레퍼런스 캡처·분석 → 크리에이티브 디렉션 승인 → 키비주얼 승인 → 상세페이지 → 광고 변형 → 미디어 작업 장부·화면 검수 → 캠페인 영상 클립 승인 → 필요한 경우 로컬 환경 점검·영상 조립 → 전체 검수 → 필요한 최종 게시 검토`

유료 생성 전에는 현재 연결에서 실제로 제공되는 도구·모델·옵션을 다시 확인합니다. 무료 견적 기능이 있으면 먼저 사용하고, 최종 프롬프트, 입력별 역할, 선택된 워크플로와 옵션, 산출물 수, 서버 조정값, 제공자가 반환한 크레딧 정보와 전체 한도를 보여준 뒤 승인을 받습니다. 시간초과나 연결 끊김으로 결제 여부가 모호하면 같은 요청을 다시 보내지 않고 기존 작업 상태부터 확인합니다. 프롬프트·입력·모델·유료 옵션·수량이 달라지면 새 요청으로 다시 견적과 승인을 받습니다.

## 정적 이미지 기본 모델

생성형 정적 이미지와 부분 편집은 기본적으로 **GPT Image 2.5**를 사용하며 정확한 모델 ID는 `gpt_image_2_5`입니다. 키비주얼, 상세페이지용 비주얼 플레이트, 정적 광고, 모델·패션 이미지와 캠페인 영상의 기준 스틸이 이 범위에 포함됩니다. 단순 누끼, 결정적인 조판·합성, 영상·음성·클립 조립은 포함되지 않습니다.

실행 전에는 현재 호스트에서 정확한 모델을 선택할 수 있는지 확인하고, 확인되지 않은 공급자 기본값을 GPT Image 2.5라고 부르지 않습니다. 기본 요청은 `gpt_image_2_5`로 기록합니다. 사용자 지정·승인된 프로젝트 지침·필수 기능 부재 또는 구체적인 작업 적합성에 따라 대체 모델을 제안할 수 있습니다. 적용 범위·입력·이유·실제 비용을 기존 확인 카드에 함께 표시하고 승인받은 뒤 사용합니다. 근거가 불확실하면 기본값을 유지합니다. 단순 품질 불만, 타임아웃 또는 실패 응답만으로 자동 전환하지 않으며, 모델이나 공급자가 달라지면 해당 견적과 승인을 새로 받습니다.

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
Pinterest 후보만 링크가 아니라 이 대화 안에 이미지 6장으로 보여주고,
구도·조명·배경·색감·소품의 Visual DNA를 설명해줘.
```

이 예시처럼 Pinterest만 지정했을 때 수량을 말하지 않으면 서로 다른 Pinterest 후보 6장을 표시합니다(Pinterest 전용 기본값). 사이트를 정하지 않으면 Pinterest 5장 + Meigen 5장, 총 10장이 기본입니다. “3장”, “10개”처럼 양의 정수로 지정하면 그 장수가 `target_count`가 되며, 정확히 그 수량이 실제로 표시된 뒤 번호 하나 또는 `자동 선택`을 기다립니다. 허용된 검색 풀에서 목표 수량을 채우지 못하면 요청·표시·부족 수량을 밝힌 미완성 보드로 끝내고 선택이나 유료 제작으로 넘어가지 않습니다. 레퍼런스 속 제품, 모델, 로고, 패키지, 문구와 가격은 최종 결과로 가져오지 않습니다.

목적에 따라 다음 중 하나만 선택합니다.

- `@chany-reference-board` / `$chany-reference-board`: Pinterest 범용 비주얼·무드 탐색
- `@chany-commercial-photo-reference` / `$chany-commercial-photo-reference`: Production Paradise의 전문 광고·라이프스타일 사진
- `@chany-award-ad-reference` / `$chany-award-ad-reference`: Ads of the World·D&AD·The One Show의 수상 광고·캠페인 사례

한 보드에서는 출처 경로를 섞지 않습니다. 후보가 부족해도 다른 경로로 자동 보충하지 않으며 Stocksy, ShotDeck, Death to Stock은 사용하지 않습니다. Pinterest 경로는 공개 Pin 페이지와 `i.pinimg.com` 미리보기만 열고 Pin의 외부 목적지를 따라가지 않습니다. 다른 두 경로도 승인된 공개 작업 페이지만 출처로 유지하며 외부 에이전시·브랜드·다운로드 링크를 따라가지 않습니다.

모든 경로의 검색은 업종 오버레이가 정한 분류를 따라 **L1 광역 카테고리부터 시작하고, 필요할 때 직접 연결된 L2 하위 카테고리 하나까지만** 추가합니다. 검색어 자체에는 지역, 플랫폼, 스타일, 무드, 색, 연도, 카메라, 렌즈, 조명, 비율, 타깃, 브랜드 또는 “고급·시네마틱” 같은 창작 수식어를 넣지 않습니다. 이런 연출 조건은 검색 결과를 고르는 Visual DNA와 제작 프롬프트에 적용합니다.

```text
허용
L1: Food Photography
L2: Restaurant Photography

허용
L1: Hospitality Photography
L2: Hotel Photography

금지
Food Photography → Restaurant Photography → Brunch Cafe Photography
moody Seoul brunch cafe 85mm cinematic Instagram ad
```

L2가 불분명하면 L1 범위를 유지합니다. 같은 범위의 동의어·페이지 이동·재검색은 자동 진행하고 L3로 내려가지 않습니다. 경로당 최대 6회 또는 연속 2회 새 유효 후보가 없으면 중단합니다. [기본 10장·자동 복구·통합 승인 안내](REFERENCE-RECOVERY.md).

## 3.1 크리에이티브 디렉션과 최신 감도

디자인 용어를 몰라도 됩니다. 목표·고객·메시지·증거·브랜드 원본·채널을 주면 `chany-creative-direction`이 다음 세 방향을 서로 다른 아이디어로 설계합니다.

1. `brand-core`: 오래 사용할 수 있는 브랜드 중심 방향
2. `emotional-editorial`: 감각과 서사가 더 강한 에디토리얼 방향
3. `trend-forward`: 현재 Pinterest 신호 하나를 브랜드답게 번역한 방향

각 안은 브랜드 적합성, 고객 관련성, 메시지 명확성, 업종 차별성, 채널 적합성, 제작 가능성, 유행 수명을 평가하고 하나를 추천합니다. 승인 방향은 목적, 입력별 권위, 장면·피사체, 구도·조명·팔레트·재질, 타이포 역할·카피 영역, 보존 항목, 제외 항목, 출력 규격과 관찰 가능한 검수 기준 순서의 제작 프롬프트로 컴파일됩니다. “프리미엄·모던·시네마틱” 같은 모호한 형용사만 쌓거나 모든 결과를 같은 중앙 배치·그라데이션·유리 카드로 만드는 안은 재설계합니다.

```text
ChatGPT Work: @chany-creative-direction으로 이 브리프를 세 가지 세련된 콘셉트로 발전시키고 가장 적합한 방향과 제작 프롬프트를 추천해줘.
Codex: $chany-creative-direction으로 이 브리프를 세 가지 세련된 콘셉트로 발전시키고 가장 적합한 방향과 제작 프롬프트를 추천해줘.
Claude Cowork: 이 브리프를 초보자도 선택할 수 있는 세 가지 전문 콘셉트로 보여주고 추천안의 제작 프롬프트까지 만들어줘.
```

사이트 트렌드 검색은 하지 않습니다. 기존 스타일 예시는 선택 가능한 연출 아이디어일 뿐 현재 유행의 증거가 아닙니다. 첨부 레퍼런스와 브랜드에 맞는 구도·빛·문구를 우선하며 필요한 플랫폼 규격과 도구 지원 여부는 공식 문서로 확인합니다.

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

상세페이지는 `plan`, `audit`, `produce` 세 모드로 동작합니다. 새 페이지의 구조와 필요한 촬영을 정할 때는 `plan`, 기존 페이지의 근거·전환 흐름을 진단할 때는 `audit`, 승인된 모듈을 만들 때는 `produce`를 사용합니다. 각 모듈은 한 메시지만 담당하며, 근거 자료와 wide/medium/close 또는 화면·문서 소스의 보유 여부를 표로 연결합니다. 부족한 실제 증거를 생성 이미지로 대신하지 않고 촬영·자료 요청·주장 축소 중 하나로 해결합니다. 고정 13단 구성이나 가짜 후기·통계·희소성은 강제하지 않습니다.

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

## 9. 캠페인 영상과 미디어 제작 루프

제품 광고, 시네마틱 브랜드 필름, 프로모션 모션과 제품 데모의 콘셉트·장면 설계는 `chany-campaign-video`가 담당합니다.

YouTube·Instagram 등 브라우저에서 재생되는 영상의 구성을 참고하려면 먼저 `chany-video-reference-ingest`를 사용합니다. 사용자가 확장프로그램을 직접 눌러 활성 탭을 캡처하거나, 본인 소유 원본·허가된 화면 녹화·실제 영상 파일을 첨부합니다. 링크 화면만 볼 수 있으면 실제로 재생하며 확인한 타임코드까지만 `observed_excerpt`로 기록하고, 정밀 비트 분석은 캡처 파일이 준비된 뒤 진행합니다.

### 릴스 링크 + 내 제품으로 빠르게 만들기

단순 제품 바이럴 영상은 `chany-viral-product-remake` 하나로 시작하면 됩니다. 링크와 제품 사진을 함께 주면 화면에서 확인 가능한 훅·전개·카메라·재질 변화·사운드 역할을 짧게 분석하고, 내 제품 특성과 맞는 3~6개 비트의 새 9:16 영상으로 연결합니다. 타사 릴스는 원본 픽셀·음악·카피·브랜드를 복제하지 않고 구조만 새로 해석합니다. 제품만 실제로 교체하려면 본인 소유 또는 수정 허가된 원본 영상 파일이 필요합니다.

```text
ChatGPT Work: @chany-viral-product-remake로 이 Instagram Reel 링크와 첨부한 제품 사진을 사용해 9:16 제품 바이럴 영상을 만들어줘.
Codex: $chany-viral-product-remake로 이 쇼츠의 훅과 제품 등장 방식만 분석해서 내 제품에 맞는 새 영상으로 만들어줘.
Claude Cowork: 이 릴스 링크의 구성으로 첨부한 제품을 보여주는 짧은 영상을 만들어줘. 타사 영상이면 새 장면으로 재제작해줘.
```

```text
ChatGPT Work: @chany-video-reference-ingest로 이 Instagram Reel을 브라우저 캡처로 준비하고 훅·컷·카메라·사운드 기능만 분석해줘.
Codex: $chany-video-reference-ingest로 이 YouTube 영상을 브라우저 캡처나 첨부 파일로 준비하고 내 제품 광고에 옮길 수 있는 구성만 정리해줘.
Claude Cowork: 이 영상 링크를 브라우저에서 내가 허가한 캡처로 확인하고, 실제 관찰 범위를 표시해서 제품 광고 구성으로 재설계해줘.
```

플러그인은 플랫폼 페이지에서 영상을 내려받거나 스트림을 재구성하지 않습니다. 확장프로그램·브라우저 연결이 현재 런타임에 노출되지 않으면 링크를 분석한 척하지 않고, 필요한 구간을 재생해 캡처한 `MP4` 또는 `WebM` 파일을 첨부하도록 안내합니다. 캡처는 로컬 저장이 기본이며 외부 분석·생성 서비스 업로드는 별도 승인입니다.

```text
ChatGPT Work: @chany-campaign-video로 이 제품의 15초 콘셉트형 광고 영상을 기준 이미지부터 제작해줘.
Codex: $chany-campaign-video로 이 제품의 15초 콘셉트형 광고 영상을 기준 이미지부터 제작해줘.
각 장면의 USP 역할을 밝히고 제품 형태가 불안정한 장면은 승인 이미지의 줌·팬 방식으로 전환해줘.
```

문서·콘셉트·기준 이미지·영상 순으로 비용이 커지는 구조를 따릅니다. 각 장면은 승인된 USP나 전환 역할을 가져야 하며, 제품·패키지·UI·공간·차량 등 정체성이 중요한 장면은 GPT Image 2.5 기준 이미지를 먼저 승인합니다. 생성형 움직임이 정체성이나 증거를 훼손하면 정확한 이미지에 결정적인 줌·팬·패럴랙스를 적용하거나 승인된 실제 영상으로 전환합니다.

실제 생성·재개·검수는 `chany-media-production-loop`가 담당합니다. 각 출력에 고정된 작업 ID와 인덱스를 만들고, 입력 역할·모델·옵션·비용 승인·공급자 작업 상태·결과 버전·결함을 한 장부로 묶습니다.

```text
ChatGPT Work: @chany-media-production-loop로 승인된 키비주얼 3종을 생성하고 결과를 대화 화면에 보여준 뒤 결함별로 검수해줘.
Codex: $chany-media-production-loop로 승인된 캠페인 영상 장면 3개의 생성 작업을 안정적인 인덱스로 추적하고 실패한 장면만 검토해줘.
```

기본 반복 한도는 최초 생성 1회와 결함 하나를 고치는 교정 1회입니다. 시간 초과나 연결 끊김은 재생성 신호가 아니며 원래 작업 ID를 먼저 조회합니다. 배치 중 한 결과만 실패하면 승인된 나머지를 다시 만들지 않습니다. 공급자 성공 표시는 수신 완료일 뿐이며, 이미지 원본 해상도 또는 영상의 주요 타임스탬프를 실제로 확인해야 승인됩니다.

사용자가 권한을 가진 브라우저 캡처나 로컬 레퍼런스 파일을 받으면 공용 분석 절차로 프레임·컨택트시트·영상과 음향의 비트별 변화·타이밍을 먼저 분석합니다. 플랫폼 영상을 직접 내려받거나 내용·인물·브랜드·음악·고유 시퀀스를 복제하지 않습니다. 연결된 MCP가 실제 미디어 URL 가져오기, 움직임 전달, 제품 교체, 성과 예측 또는 편집을 지원하면 현재 스키마·권리·업로드·비용을 확인한 뒤 해당 단계만 실행합니다. 웹 전용 기능은 입력과 작업안을 준비한 뒤 해당 화면에서 완료합니다.

## 10. 실행 환경 점검

```text
ChatGPT Work: @chany-preflight로 프로젝트에 영구 변경을 남기지 않고 이번 영상 조립에 필요한 도구와 한글 폰트를 점검해줘.
Codex: $chany-preflight로 프로젝트에 영구 변경을 남기지 않고 이번 영상 조립에 필요한 도구와 한글 폰트를 점검해줘.
```

환경 점검은 실제 버전·기능 명령과 승인 문구의 글리프 증거를 사용해 `사용 가능`, `누락`, `관찰 불가`, `차단`을 구분합니다. 읽기만으로 글리프를 확인할 수 없을 때는 운영체제 임시 공간에서 고유한 샘플을 검사하고 즉시 정리하며 프로젝트에는 남기지 않습니다. 처음에는 아무것도 설치하지 않으며, 보완이 필요하면 현재 운영체제와 실제 패키지 관리자를 확인한 해결안과 변경 범위를 먼저 보여주고 별도 승인을 받습니다. 이는 Higgsfield 유료 생성 전 비용·입력·모델을 확인하는 사전검토와 다른 단계입니다.

## 11. 영상 조립·컷 교체와 훅 변형

```text
ChatGPT Work: @chany-video-assembly로 승인된 클립을 조립하거나 지정 구간만 교체하고 결과 규격과 오디오를 검증해줘.
Codex: $chany-video-assembly로 승인된 클립을 조립하거나 지정 구간만 교체하고 결과 규격과 오디오를 검증해줘.
```

조립은 승인된 샷 순서와 카피를 그대로 사용합니다. 입력과 최종 파일을 실제로 측정하고, 오디오가 없는 클립에는 목표 오디오 형식의 무음을 넣으며, 프로젝트·캠페인·마스터 해시별 새 경로를 사용합니다. 마스터 수정과 변형은 원본 프레임레이트와 오디오를 기본적으로 보존하고, 승인된 납품 사양이 명시적으로 요구할 때만 변경합니다. 컷 교체는 정확한 시작·종료 시점과 오디오 정책을 먼저 잠그고 진입·종료 경계와 음향 연속성을 검사합니다. 훅 변형에서는 텍스트 한 요소만 바꾸고 마스터·컷·오디오·프레임레이트·서체·위치·내보내기 설정은 고정합니다.

집행 결과가 들어오면 `chany-marketing-brief`가 추적 정의, 어트리뷰션 기간, 비교 가능한 집행 조건과 표본을 확인합니다. 조건이 부족하면 승자를 억지로 정하지 않고 `inconclusive` 또는 `invalid`로 기록한 뒤, 다음 라운드에서 바꿀 한 변수만 제안합니다.

## 12. 게시 전 검토

```text
ChatGPT Work: @chany-publication-review로 이 광고의 정확한 문구, 제안 조건, 권리와 최종 렌더 버전을 검수해줘.
Codex: $chany-publication-review로 이 광고의 정확한 문구, 제안 조건, 권리와 최종 렌더 버전을 검수해줘.
게시 국가는 한국, 채널은 Meta 피드, 게시 예정일은 9월 10일이고 담당 검토자는 마케팅 책임자 김OO야.
```

검토는 주장·근거, 가격·배송·구독·환불 등 거래 조건, 이메일·문자·푸시 같은 발송 조건, 협찬·추천·저작권·초상권, 업종·플랫폼·최종 렌더의 다섯 영역을 분리합니다. 게시 시점에 최신 공식 1차 자료를 확인하고 정확한 카피·오퍼·랜딩·크롭·최종 파일 버전에 결박합니다. 문구, 번역, 가격, CTA, 고지 위치, 크롭, 레이아웃 또는 렌더가 바뀌면 이전 검토는 무효입니다.

상태는 `blocked`, `draft-only`, `ready-for-named-human-review`, `reviewed-by-named-owner`만 사용합니다. 이는 법률 자문이나 법적 승인, 플랫폼 사전승인 또는 자동 게시 권한이 아닙니다. 자료가 부족해도 초안 제작은 계속할 수 있지만 게시·발송은 멈춥니다.

## 입력 정보 템플릿

```text
업종/비즈니스 유형:
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
- 캠페인 영상의 제품 노출, 출연자 일관성, 음성·자막 동기와 전환 흐름
- 출력 비율, 채널 안전영역과 작은 화면 가독성
- 업종별 필수 근거, 자격·수치·가격·일정·접근성·후원 표기가 확인 가능한 사실과 일치하는지

치명적인 불일치가 있으면 승인하지 않고 관찰된 문제만 지정해 한 번 보정합니다. 확인할 수 없는 사항은 정확하다고 주장하지 않습니다. 의료, 교육, 부동산, 전문 서비스, 자동차, 채용, 유료 협찬처럼 표시·규제 위험이 있는 콘텐츠는 법률 자문처럼 단정하지 않고 게시 전 담당자, 관할 기관과 채널의 최신 규정을 확인하는 단계로 넘깁니다.
