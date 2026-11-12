# 조사 근거와 적용 판단

2026-11-11에 추가한 공식 영상·가이드·첨부 스킬의 검토는 [Higgsfield 출처 기록](higgsfield-source-ledger.md)에 있다. 아래 커뮤니티·GitHub 조사와 확인 수준을 합쳐서 전편 시청 완료로 해석하지 않는다.

확인일 2026-11-10. 커뮤니티 게시자의 경험, 공식 문서, 저장소 메타데이터와 이 스킬의 자체 판단을 구분한다. 아래 후기는 글을 확인한 근거이며 연결된 영화의 전체 재생·청취 품질을 독립 검증했다는 뜻은 아니다. 게시글의 모델 우열·비용 절감·수상·성과를 일반 법칙으로 채택하지 않았다.

## 커뮤니티 사례

| 출처·확인 수준 | 관찰과 스킬 적용 | 한계 |
|---|---|---|
| [Reddit: 12분 영화의 인물 일관성 후기](https://www.reddit.com/r/aifilmmaking/comments/1w484j8/what_i_learned_about_character_consistency_while/) · 본문·댓글 | 인물·장소 참조가 있어도 구도와 목소리 문제가 남음. 다각도 원본과 컷 구도, 대사·공간 음향을 각각 관리 | 제작자 자기보고와 댓글. 연속 프레임 참조도 변형을 누적할 수 있음 |
| [Reddit: 두 인물 대화 제작 토론](https://www.reddit.com/r/aifilmmaking/comments/1vxqjdk/what_are_you_using_for_clean_twocharacter/) · 본문·댓글 | 화면 좌우·시선·OTS 구도를 이미지 단계에서 정하고 화자별 생성과 편집 연결을 시험 | 추천 도구 홍보 댓글 포함. 특정 도구 보증 제외 |
| [Reddit: 제작 과정 공유](https://www.reddit.com/r/aifilmmaking/comments/1sgs2z9/my_ai_film_making_process_share_yours/) · 본문·댓글 | 조사·극본·음성·이미지·편집·음향을 분리 관리 | 저해상도 업스케일의 품질 복원 주장은 채택하지 않음 |
| [GPTers: SF 예고편 자동화 후기](https://www.gpters.org/nocode/post/strange-review-read-thinking-Rg1YnPamXOzybHx) · 본문 | 장면별 음성 배치에서 오차가 누적돼 전체 타임라인 기준으로 변경. 전역 프레임 검사와 음향 분리로 반영 | 특정 모델명·성능·무료 조건은 독립 검증하지 않음 |
| [GPTers: 없는 물건 상점 제작 후기](https://www.gpters.org/media/post/review-creating-everything-world-dTLXgjHi3EbEbGK) · 본문 | 자동 제작 흐름이 있어도 이야기가 재미있다는 뜻은 아님. 생성 전 대본·프리비즈 검사로 반영 | 특정 자동화 실행 명령·보안 우회 설정은 가져오지 않음 |
| [GPTers: 1인 영화 예고편 제작](https://www.gpters.org/media/post/one-person-movie-trailer-6KHKfkSsBQ7AxhU) · 게시글 | 짧은 예고편에서 이미지·동작·편집을 분리하는 사례 | 예고편 완성은 장편 서사·연기 품질의 증거가 아님. 음악·음성 권리 승계하지 않음 |
| [Hugging Face: 첫 영화 클립 토론](https://discuss.huggingface.co/t/1st-movie-clip/175306) · 원글·일부 답글 | 긴 인물 장면의 얼굴 변형 경험을 실패 사례로 기록 | 답글의 LLM 생성 추정 설명·정확한 임곗값·미검증 워크플로는 제외 |

발견했지만 근거 채택을 제한한 자료: [Reddit 10단계 제작](https://www.reddit.com/r/aifilmmaking/comments/1wi5l2l/not_just_typing_a_prompt_my_10step_workflow_for_a/)와 [목소리 토론](https://www.reddit.com/r/aifilmmaking/comments/1urxadr/question_for_people_making_ai_films/)은 검색 발췌 수준에서 발견해 독립 근거로 사용하지 않았다. [Disquiet AI 영화 도구 소개](https://disquiet.io/articles/4NsPNq)는 도구 탐색 자료로만 분류했다.

Threads는 `site:threads.com`, `site:threads.net`과 한국어·영어 제작 과정 검색을 시도했지만 이 조사에서 출처로 채택할 만한 본문을 확보하지 못했다. Threads 전체에 사례가 없다는 뜻이 아니다. 비공개 계정·로그인 영역은 수집하지 않았다.

## 공식 문서로 교차 확인한 항목

- [ScreenSkills: 제작 과정](https://www.screenskills.com/media/vb2noxrx/how-content-gets-made-word-format.pdf), [스크립트 슈퍼바이저](https://www.screenskills.com/job-profiles/browse/film-and-tv-drama/technical/script-supervisor-film-and-tv-drama): 기획·촬영 준비·연속성 기록을 별도 작업으로 둔다.
- [VicScreen 용어집](https://vicscreen.vic.gov.au/glossary/): 시리즈·극본 개발 문서의 역할을 구분하는 참고. 모든 작품의 제출 문서 규격으로 강제하지 않는다.
- [Toon Boom: 애니매틱](https://docs.toonboom.com/help/storyboard-pro-25/storyboard/getting-started/animatic.html): 콘티에 시간과 소리를 결합하는 검토 단계의 근거.
- [Runway Gen-4 영상 프롬프트](https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide), [이미지 참조](https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References): 이미지의 외형 역할과 움직임 지시, 참조 활용을 분리한다. Gen-4의 지원 길이를 다른 모델 규격으로 옮기지 않는다.
- [Netflix NPFP 프로그램 조건](https://npfp.netflixstudios.com/program-conditions): 자동 검사와 수동 검토가 함께 필요하다는 참고. 이 스킬은 NPFP 인증·Netflix 납품 규격 구현이 아니다. 자사 숏폼 전체 재생 검사는 자체 채택한 기준이다.

Netflix AssetQC 지식 허브의 직접 열기는 JavaScript 안내만 반환했다. 그 페이지 본문을 읽었다고 기록하지 않고, 읽을 수 있는 NPFP 공개 문서로 범위를 한정했다.

## GitHub 후보 비교

숫자는 확인 시점의 GitHub API 값이다. 별은 다운로드 수·평점·완성작 평가가 아니다. 공식 다운로드 비교 자료는 확보하지 못했다. 모든 저장소가 Codex 스킬 패키지는 아니다.

| 저장소 | 별 / 포크 | 확인한 용도·채택 판단 |
|---|---:|---|
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | 6,768 / 732 | Remotion 코드 영상·프리뷰 제작. 검토 후보 중 별이 가장 많지만 이번 서사·연기 제작의 주 스킬로 설치하지 않음. 기존 Adobe 마감 유지 |
| [jtydhr88/ComfyTV](https://github.com/jtydhr88/ComfyTV) | 1,184 / 88 | MIT, ComfyUI 중심 제작 앱. 단순 스킬과 앱 설치를 구별하고 이번에 설치하지 않음 |
| [wuwangzhang1216/DirectorSKILL](https://github.com/wuwangzhang1216/DirectorSKILL) | 341 / 51 | MIT, 연출·블로킹·연속성·음향·수정 자료. `cinematic-director` 보조 스킬로 채택 |
| [0xhughs/director-skills](https://github.com/0xhughs/director-skills) | 20 / 3 | MIT, 대본·영상 제작 후보. 기능 중복과 상대적으로 작은 공개 사용 신호를 고려해 추가 설치 보류 |
| [cajias/agentic-video-skills](https://github.com/cajias/agentic-video-skills) | 5 / 1 | 메타데이터에서 라이선스 식별 안 됨. 재배포·설치 제외 |
| [newtake-ai/marketplace](https://github.com/newtake-ai/marketplace) | 1 / 0 | 라이선스 식별 안 됨, 서비스 전제 포함. 기존 프로젝트의 공개 자료 참고만 유지 |

‘가장 좋은 스킬’의 절대 순위는 확인할 수 없었다. 서사 작업 적합성, 공개 유지 상태, 라이선스, 실행 의존성, 출처 추적 가능성을 함께 보고 선택했다.

## 외부 스킬 도입 기록

DirectorSKILL 고정 커밋: `c65ae0d14457053efb1e354c7e7f7e120d97fad1`. 원래 MIT LICENSE를 보존했다. 루트 지침과 핵심 참조를 읽고, 55개 파일에서 실행 코드 후보와 위험 명령 문자열을 점검했다. Python·셸·JS 실행 파일은 발견되지 않았다. 저장소의 GitHub workflow는 실행하지 않았다. 이는 전체 공급망 보안 보증이 아니다.

원본의 짧은 컷, 단일 화자, 재시도 횟수, FPS 같은 강한 기본값은 유용한 출발점일 수 있으나 모든 작품·모델에 대한 법칙은 아니다. 상위 `ai-drama-production`은 실제 기능·예산·장면 목적을 확인하게 한다. 외부 자료의 문장을 대량 복사해 새 스킬을 만들지 않고, 원본은 라이선스와 함께 별도 보존했다.

## 조사 갱신 방법

도구 선택이 필요할 때 현재 공식 기능·가격부터 확인한다. 커뮤니티 새 사례는 날짜, 실제 제작자 여부, 공개 결과물, 구체적 실패·수정, 상업적 이해관계를 기록한다. 가능한 경우 원본 영상을 실제 재생해 본문 설명과 대조한다. 논쟁 중인 방법은 대표 장면에서 시험하며 미검증 임곗값을 제작 규칙으로 추가하지 않는다.
