import json
from pathlib import Path
r=Path(__file__).parent;L=lambda p:json.loads((r/p).read_text(encoding='utf-8'))
a=L('data/actors.json');c=L('data/claims.json');e=L('data/evidence.json');rs=L('data/relations.json');ct=L('data/content.json');s=L('data/sources.json');A={x['id'] for x in a};E={x['id'] for x in e}
assert len(A)==len(a)
for x in c:assert x['subject_id'] in A and set(x['evidence_ids'])<=E
for x in rs:assert x['source_id'] in A and x['target_id'] in A
for section in ('griefs','vigilance'):
 for x in ct[section]:assert set(x.get('evidence_ids',[]))<=E
print(f'OK: {len(a)} entités, {len(c)} positions, {len(rs)} relations, {len(e)} preuves, {len(s)} sources')
