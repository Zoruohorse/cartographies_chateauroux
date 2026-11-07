import json
from pathlib import Path
r=Path(__file__).resolve().parent
read=lambda name:json.loads((r/name).read_text(encoding='utf-8'))
actors,claims,relations,evidence,sources,timeline=[read('data/'+x+'.json') for x in ('actors','claims','relations','evidence','sources','timeline')]
content=read('data/content.json');tax=read('config/taxonomy.json')
def idx(rows):
 ids=[z['id'] for z in rows];assert len(ids)==len(set(ids)), 'IDs dupliqués'
 return {z['id']:z for z in rows}
A,C,R,E,S=[idx(x) for x in (actors,claims,relations,evidence,sources)]
def check(ids,kind):
 assert ids,kind
 for eid in ids:
  assert eid in E, (kind,eid)
  sid=E[eid]['source_id'];assert sid in S,(kind,sid)
  assert S[sid].get('url','').startswith('https://'),(kind,sid)
assert 'project_google_ozans' in A
for c in claims:
 assert c['subject_id'] in A
 assert c['value'] in tax['stances'] and c['value']!='all'
 check(c['evidence_ids'],c['id'])
for x in relations:
 assert x['source_id'] in A and x['target_id'] in A
 assert x['type'] in tax['relation_types']
 check(x['evidence_ids'],x['id'])
for field in ('griefs','vigilance','milestones','fact_sheet'):
 for x in content[field]:check(x['evidence_ids'],field)
for x in timeline:
 assert x['actor_id'] in A
 assert x['status']=='confirmed' and x['date_precision']=='day'
 assert all(s in S for s in x['source_ids'])
print(f"OK : {len(A)} noeuds, {len(C)} positions, {len(R)} relations, {len(E)} preuves, {len(S)} sources, {len(timeline)} dates d'evolution")
