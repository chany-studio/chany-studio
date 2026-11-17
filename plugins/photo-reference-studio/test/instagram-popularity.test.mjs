import test from 'node:test';
import assert from 'node:assert/strict';
import { canonicalInstagramUrl, rankInstagramReferences } from '../skills/chany-reference-board/scripts/instagram-popularity.mjs';
const fields = Object.fromEntries(['views','likes','shares'].map(x=>[x,{field:x,definition:`public ${x}`} ]));
const row = (id, values={}, score=3) => ({data:{url:`https://www.instagram.com/reel/${id}/`,timestamp:'2026-11-01T00:00:00Z',views:100,likes:10,shares:5,...values},format:'reel',fit:{score,reason:'Relevant demonstration',evidence:['Observed product use']},fields});
const rank = (candidates, options={}) => rankInstagramReferences({observed_at:'2026-11-17T00:00:00Z',published_since:'2026-05-21T00:00:00Z',candidates,...options});
test('product fit wins before popularity; comparable metrics order equal-fit examples',()=>{
 const result=rank([row('viral',{views:999999,likes:99999,shares:9999},2),row('fit',{views:200}),row('fit2')]);
 assert.deepEqual(result.candidates.map(x=>x.url.split('/')[4]),['fit','fit2','viral']);
 assert.deepEqual(result.comparison_metrics,['views','likes','shares']);
 assert.equal(result.submission_allowed,false);
});
test('missing shares are unknown, real zero is ranked; explicit shares never falls back',()=>{
 const result=rank([row('missing',{shares:undefined}),row('zero',{shares:0})],{sort:'shares'});
 assert.equal(result.candidates.length,1);assert.equal(result.candidates[0].metrics.shares.value,0);
 assert.equal(result.unranked[0].metrics.shares.value,null);assert.equal(result.missing_count,2);
});
test('balanced comparison discloses omitted metrics without imputing zero',()=>{
 const result=rank([row('a',{shares:-1}),row('b')]);
 assert.deepEqual(result.comparison_metrics,['views','likes']);assert.deepEqual(result.excluded_metrics,['plays','shares']);
});
test('plays, views and unlike definitions cannot be combined',()=>{
 const a=row('a'),b=row('b'); b.fields={...fields,views:{field:'views',definition:'video plays'}};
 assert.equal(rank([a,b],{sort:'views'}).status,'insufficient-evidence');
 assert.deepEqual(rank([a,b]).comparison_metrics,['likes','shares']);
 const c=row('c',{views:undefined,videoPlayCount:99999});c.fields={plays:{field:'videoPlayCount',definition:'video plays'}};
 assert.equal(rank([c],{sort:'views'}).candidates.length,0);
});
test('canonical duplicates are not double-counted and unrelated URLs are rejected',()=>{
 const a=row('same'),b=row('same');b.data.url='https://instagram.com/p/same/?utm_source=test';
 const result=rank([a,b,row('bad',{url:'https://instagram.com.evil.example/reel/a/'})]);
 assert.equal(result.sample_size,1);assert.deepEqual(result.rejected.map(x=>x.reason),['duplicate-source','invalid-source-or-error']);
 assert.equal(canonicalInstagramUrl('https://user@instagram.com/p/a/'),null);
});
test('wrong format, unknown/old/future date, error and absent fit are excluded',()=>{
 const wrong=row('wrong');wrong.format='image';const nofit=row('nofit');delete nofit.fit;
 const result=rank([wrong,nofit,row('unknown',{timestamp:null}),row('old',{timestamp:'2020-01-01'}),row('future',{timestamp:'2027-01-01'}),row('error',{errorMessage:'unavailable'})]);
 assert.equal(result.candidates.length,0);assert.equal(result.rejected.length,6);
});
test('unverified numeric strings and invalid counts stay unknown',()=>{
 for(const value of ['123',-1,Infinity,NaN,1.5,null,Number.MAX_SAFE_INTEGER+1]) assert.equal(rank([row('a',{likes:value})],{sort:'likes'}).candidates.length,0);
});
test('explicit count is honored and zero skips without requiring observation',()=>{
 assert.equal(rank([row('a'),row('b')],{limit:1}).candidates.length,1);
 assert.equal(rankInstagramReferences({limit:0,candidates:[]}).status,'skipped');
 assert.throws(()=>rank([],{limit:-1}));assert.throws(()=>rank([],{sort:'comments'}));
 assert.throws(()=>rank([],{observed_at:'invalid'}));
});
test('omitted publication window defaults to 180 days, excluding unknown dates',()=>{
 const result=rank([row('old',{timestamp:'2020-01-01'}),row('unknown',{timestamp:null}),row('recent')],{published_since:undefined});
 assert.equal(result.candidates.length,1);assert.equal(result.rejected.length,2);
});
test('share enrichment replaces an incomplete duplicate independent of input order',()=>{
 const bare=row('a',{shares:undefined}),enriched=row('a',{shares:42});
 for(const rows of [[bare,enriched],[enriched,bare]]) {
  const result=rank(rows,{sort:'shares'});assert.equal(result.sample_size,1);
  assert.equal(result.candidates[0].metrics.shares.value,42);
 }
});
test('conflicting duplicate snapshots are excluded rather than merged',()=>{
 const a=row('a'),b=row('a',{likes:11});
 for(const rows of [[a,b,a],[b,a,b]]) {const result=rank(rows);assert.equal(result.sample_size,0);assert.equal(result.status,'insufficient-evidence');}
});
test('discarded duplicate evidence still detects later conflicts in any order',()=>{
 const a=row('a',{views:undefined,likes:undefined,shares:10});
 const b=row('a',{views:100,likes:1,shares:undefined});
 const c=row('a',{views:100,likes:1,shares:11});
 for(const rows of [[a,b,c],[a,c,b],[b,a,c],[b,c,a],[c,a,b],[c,b,a]]) assert.equal(rank(rows).sample_size,0);
});

test('balanced uses labeled plays when views are missing, never counts both',()=>{
 const a=row('a',{views:undefined,videoPlayCount:200});a.fields={...fields,plays:{field:'videoPlayCount',definition:'public play count'}};
 const result=rank([a]);assert.deepEqual(result.comparison_metrics,['plays','likes','shares']);
 assert.equal(result.candidates[0].metrics.views.value,null);
 assert.equal(rank([a],{sort:'views'}).candidates.length,0);
 assert.equal(rank([a],{sort:'plays'}).candidates[0].metrics.plays.value,200);
 a.data.views=150;assert.deepEqual(rank([a]).comparison_metrics,['views','likes','shares']);
});
