import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Pure planning: no writes, uploads, model calls, authorization or automatic defaults.
export function nextInterviewStep(state = {}) {
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const result = (stage, detail = {}) => ({ stage, ...detail, submission_allowed: false });
  if (!state || typeof state !== 'object' || Array.isArray(state)) return result('invalid-input');
  if (state.cancelled === true) return result('stopped', { message: '새 작업을 멈췄어요. 이미 제출된 작업은 취소 상태를 따로 확인해요.' });
  if (state.job && !['planned', 'quoted', 'approved', 'accepted', 'stopped', 'completed', 'failed', 'cancelled', 'canceled'].includes(state.job.status)) return result('recover-job', { ...(text(state.job.id) ? { job_id: state.job.id } : {}), message: '기존 작업 기록과 결과부터 확인할게요.' });
  const ask = (field, question, options) => result('question', { field, question, options, allow_free_text: true });
  const assets = Array.isArray(state.assets) ? state.assets : [];
  const roles = new Set(['product', 'service', 'reference', 'output']);
  if (assets.some(a => !text(a?.id))) return result('request-attachment', { message: '확인할 수 있는 원본 자료를 대화창에 첨부해 주세요.' });
  if (assets.some(a => a.inspected !== true)) return result('inspect-assets');
  if (assets.some(a => !roles.has(a?.role))) return ask('asset_roles', '어느 자료가 내 제품·서비스이고, 어느 것이 참고 자료인가요?', ['자료별 역할을 알려줄게요', '자료를 다시 살펴봐 주세요']);
  const facts = state.facts ?? {};
  // Callers normalize natural-language intent; exact legacy labels remain compatible.
  const video = facts.medium === 'video' || (!text(facts.medium) && text(facts.output) && ['video', 'short-video', '영상', '짧은 영상', '릴스', '쇼츠', '인스타그램 릴스', '브랜드 필름'].includes(facts.output.trim()));
  if (['edit', 'cutout', 'assembly'].includes(state.intent)) {
    if (!assets.some(a => a.role === 'output' || a.role === 'product' || a.role === 'service')) return result('request-attachment', { message: '수정할 원본을 대화창에 첨부해 주세요.' });
    if (state.intent !== 'cutout' && !text(facts.change)) return ask('change', '어떤 변경이 필요한가요?', state.intent === 'assembly' || video ? ['영상 순서·길이', '자막·소리', '제품·서비스 모습'] : ['제품·서비스 모습', '배치·배경', '글자']);
    return result('production-check', { owner: 'existing-edit-owner', reuse_answers: true });
  }
  if (!text(facts.offer) && !assets.some(a => a.role === 'product' || a.role === 'service')) return ask('offer', '어떤 제품이나 서비스를 소개할까요?', ['제품', '서비스']);
  if (!text(facts.output) && !video) return ask('output', '어떤 콘텐츠를 만들까요?', ['짧은 영상', '이미지', '추천해 주세요']);
  const videoOwners = new Set(['chany-campaign-video', 'chany-viral-product-remake', 'ai-drama-production', 'cinematic-director', 'adobe-video-pipeline', 'adobe-after-effects-production', 'adobe-premiere-finishing', 'chany-motion-design', 'chany-shortform-recut', 'chany-ad-variants', 'chany-video-assembly']);
  const owner = videoOwners.has(state.current_owner) ? state.current_owner : 'chany-campaign-video';
  const videoOwner = video ? { owner } : {};
  if (facts.reference === 'find') return result('find-references', { owner: video ? owner : 'chany-reference-board', ...(video ? { reference_kind: 'video' } : {}) });
  if (facts.reference === 'skip') return result('production-check', { ...videoOwner, reference: 'none', reuse_answers: true });
  if (assets.some(a => a.role === 'reference')) return result('production-check', { ...videoOwner, reference: 'supplied', reuse_answers: true });
  return ask('reference', video ? '원하는 참고 영상이 있나요?' : '원하는 참고 사진이 있나요?', ['있어요', '대신 찾아주세요', video ? '참고 영상 없이 추천해주세요' : '참고 사진 없이 추천해주세요']);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (!process.argv[2]) throw new Error('사용법: node interview-next.mjs <state.json>');
    process.stdout.write(JSON.stringify(nextInterviewStep(JSON.parse(await readFile(process.argv[2], 'utf8'))), null, 2) + '\n');
  } catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 2; }
}
