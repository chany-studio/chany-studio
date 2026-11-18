import test from 'node:test';
import assert from 'node:assert/strict';
import { selectPinterestCandidates } from '../skills/chany-reference-board/scripts/pinterest-candidates.mjs';

const pair = (id = '123', image = 'test.jpg') => ({
  source_url: `https://www.pinterest.com/pin/${id}/`,
  preview_image_url: `https://i.pinimg.com/736x/aa/bb/cc/${image}`,
  paired_in_result: true, title: 'reference', query: 'Product Photography Pinterest',
});

test('mixed provider results cannot become a Pinterest board or generation inputs', () => {
  const rows = [pair(), { ...pair('124'), source_url: 'https://shop.example/product' },
    { ...pair('125'), preview_image_url: 'https://shop.example/image.jpg' },
    { ...pair('126'), paired_in_result: false },
    { ...pair('127'), source_url: 'https://pinterest.com.attacker.example/pin/127/' },
    { ...pair('128'), preview_image_url: 'https://i.pinimg.com@attacker.example/736x/aa/bb/cc/test.jpg' },
    { ...pair('129'), source_url: 'http://www.pinterest.com/pin/129/' },
    { ...pair('130'), source_url: 'https://www.pinterest.com:444/pin/130/' },
    { ...pair('131'), source_url: 'https://www.pinterest.com/ideas/test/131/' }];
  const r = selectPinterestCandidates(rows);
  assert.equal(r.candidates.length, 1);
  assert.equal(r.rejected, 8);
  assert.equal(r.board_complete, false);
  assert.equal(r.missing_visible, 6);
});

test('slug pins and regional subdomains retain observed paths without outbound fields', () => {
  const row = { ...pair(), source_url: 'https://kr.pinterest.com/pin/glow-recipe--123/?tracking=x',
    outbound: 'https://shop.example', verified: true, display_confirmed: true };
  const candidate = selectPinterestCandidates([row]).candidates[0];
  assert.equal(candidate.source_url, 'https://kr.pinterest.com/pin/glow-recipe--123/');
  assert.equal(candidate.pin_id, '123');
  assert.equal(candidate.pin_page_verified, false);
  assert.equal(candidate.display_confirmed, false);
  assert.equal(candidate.outbound, undefined);
});

test('duplicate pins and same assets in different sizes do not inflate counts', () => {
  const r = selectPinterestCandidates([pair(), pair('123', 'other.jpg'),
    { ...pair('124'), preview_image_url: pair().preview_image_url.replace('736x', 'originals') + '?foo=bar' },
    pair('125', 'second.jpg')], 2);
  assert.equal(r.candidate_count, 2);
  assert.deepEqual(r.candidates.map(x => x.number), [1, 2]);
  assert.equal(r.displayed_count, 0);
  assert.equal(r.board_complete, false);
});

test('invalid requested counts are not silently reduced or expanded', () => {
  for (const count of [0, -1, 2.5, '6', Infinity]) assert.throws(() => selectPinterestCandidates([], count));
  assert.equal(selectPinterestCandidates([], 10).missing_visible, 10);
});
