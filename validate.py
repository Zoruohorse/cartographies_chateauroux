import json
from pathlib import Path
root=Path(__file__).resolve().parent
load=lambda p:json.loads((root/p).read_text(encoding="utf-8"))
a=load("data/actors.json");c=load("data/claims.json");e=load("data/evidence.json");r=load("data/relations.json");s=load("data/sources.json");t=load("config/taxonomy.json");m=load("data/meta.json")
ids=[x["id"] for x in a]; assert len(ids)==len(set(ids)),"IDs acteurs dupliqués"
A=set(ids); E={x["id"] for x in e}; S={x["id"] for x in s}
assert m["id"] in A,"Projet central absent des acteurs"
for x in c:
 assert x["subject_id"] in A and x["project_id"] in A
 assert set(x.get("evidence_ids",[]))<=E
for x in r:
 assert x["source_id"] in A and x["target_id"] in A
 assert set(x.get("evidence_ids",[]))<=E
 assert x["type"] in t["relation_types"]
for x in e:
 assert x.get("source_id") is None or x["source_id"] in S
for x in a:
 assert all(k in t["categories"] for k in x.get("categories",[]))
print(f"OK: {len(a)} entités, {len(c)} positions, {len(r)} relations, {len(e)} preuves, {len(s)} sources")
