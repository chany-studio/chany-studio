import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Local planning only: no network, file mutation, generation or spending.
export function planReference(input = {}) {
  const errors = [];
  const nonempty = value => typeof value === 'string' && value.trim().length > 0;
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { status: 'needs-input', errors: ['입력 계획은 객체여야 합니다.'], submission_allowed: false };
  const subject = input.subject ?? {};
  const reference = input.reference;
  const intent = input.intent ?? 'reshoot';
  const sources = Array.isArray(subject.sources) ? subject.sources : [];
  const locks = Array.isArray(subject.locks) ? subject.locks : [];
  if (!['product', 'service'].includes(subject.kind)) errors.push('제품 또는 서비스 종류를 지정해 주세요.');
  if (!['insert', 'reshoot', 'edit'].includes(intent)) errors.push('지원하지 않는 변경 방식입니다.');
  if (!sources.length || sources.some(s => !nonempty(s?.id) || !nonempty(s?.purpose))) errors.push('실제 제품·서비스 자료와 자료의 용도가 필요합니다.');
  if (!locks.length || locks.some(value => !nonempty(value))) errors.push('지켜야 할 제품 특징·서비스 사실을 빈칸 없이 확인해 주세요.');
  if (input.approved_copy !== undefined && (!Array.isArray(input.approved_copy) || input.approved_copy.some(value => !nonempty(value)))) errors.push('확정 문구는 빈칸 없는 문자열 목록이어야 합니다.');
  if (errors.length) return { status: 'needs-input', errors, submission_allowed: false };
  if (!nonempty(reference?.id)) return {
    status: 'needs-reference', next_owner: 'chany-reference-board',
    message: '이 제품·서비스에 맞는 레퍼런스를 찾아 보여드릴게요.', submission_allowed: false,
  };
  if (reference.inspected !== true) return {
    status: 'needs-inspection', message: '참고 이미지의 실제 구도를 먼저 확인합니다.', submission_allowed: false,
  };
  const composition = reference.composition;
  if (typeof composition !== 'string' || !composition.trim()) errors.push('실제로 확인한 참고 구도를 기록해 주세요.');
  const target = input.target ?? {};
  const preserve = Array.isArray(target.preserve) ? target.preserve : [];
  if (intent !== 'reshoot' && (!nonempty(target.region) || !preserve.length || preserve.some(value => !nonempty(value)))) errors.push('바꿀 영역과 유지할 부분을 빈칸 없이 지정해 주세요.');
  if (target.exact_untouched_pixels !== undefined && typeof target.exact_untouched_pixels !== 'boolean') errors.push('원본 픽셀 고정 여부는 true 또는 false로 지정해 주세요.');
  // User-supplied edit intent can establish this; do not demand a second ownership interview.
  if (intent !== 'reshoot' && reference.edit_authorized !== true) errors.push('참고 원본을 편집하는 범위가 아직 정해지지 않았습니다. 기존 요청·확인 카드에서 확인해 주세요.');
  const exact = target.exact_untouched_pixels === true;
  const caps = input.capabilities ?? {};
  if (exact && intent === 'reshoot') errors.push('새 촬영과 원본 픽셀 고정은 함께 적용할 수 없습니다. 변경 범위를 정해 주세요.');
  if (exact && caps.deterministic_mask_composite !== true) errors.push('원본의 나머지 픽셀을 보존할 합성 도구가 확인되지 않았습니다.');
  if (!exact && caps.reference_images !== true) errors.push('제품·서비스와 참고 이미지를 함께 받을 제작 도구가 확인되지 않았습니다.');
  if (errors.length) return { status: 'needs-resolution', errors, submission_allowed: false };

  const operation = { insert: 'reference-insert', reshoot: 'reference-reshoot', edit: 'bounded-edit' }[intent];
  const inputs = sources.map((s, i) => ({ index: i + 1, id: s.id, role: 'identity-authority', purpose: s.purpose }));
  inputs.push({ index: inputs.length + 1, id: reference.id, role: intent === 'reshoot' ? 'composition-reference' : 'base-layout', purpose: composition });
  const copy = Array.isArray(input.approved_copy) ? input.approved_copy : [];
  const prompt = [
    ...inputs.map(s => `Image ${s.index}: ${s.role}; ${s.purpose}.`),
    `Preserve verified offer facts: ${locks.join('; ')}.`,
    intent === 'reshoot'
      ? `Create a new scene of the same offer using this observed composition: ${composition}. Do not lock the source photograph's pose unless explicitly listed.`
      : `Use Image ${inputs.length} as the base layout. Change only ${target.region}. Keep ${preserve.join('; ')}. Fit the actual offer to the reference's position, scale, perspective and contact.`,
    'Do not invent product parts, interface functions, testimonials, prices or claims. Exclude unrelated reference brands and copy.',
    copy.length ? `Use only this approved copy: ${copy.join(' | ')}. Keep exact text in an editable layer where possible.` : 'Do not add advertising copy.',
  ].join('\n');
  return {
    status: 'prepared', operation,
    next_owner: typeof input.current_owner === 'string' && input.current_owner.trim()
      ? input.current_owner : intent === 'reshoot' ? 'chany-campaign-visual' : 'chany-image-edit',
    execution: exact ? 'deterministic-mask-composite' : 'reference-capable-generation',
    inputs, identity_locks: [...locks], protected_elements: [...preserve], prompt,
    checks: ['offer-identity', 'reference-composition', 'exact-copy', ...(intent === 'reshoot' ? [] : ['protected-regions'])],
    pending: ['live-tool-contract', 'input-and-cost-approval', 'actual-output-inspection'],
    submission_allowed: false,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (!process.argv[2]) throw new Error('사용법: node reference-plan.mjs <input.json>');
    const result = planReference(JSON.parse(await readFile(process.argv[2], 'utf8')));
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    if (result.status !== 'prepared') process.exitCode = 2;
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 2;
  }
}
