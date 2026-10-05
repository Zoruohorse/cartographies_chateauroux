# Cartographie des acteurs du projet Google Ozans — Châteauroux

Dépôt statique prêt pour GitHub Pages. Les vues cartes et réseau utilisent le même référentiel central et reprennent le rendu et les interactions du projet Fouju.

## Publication
1. Décompresser l’archive.
2. Envoyer tout le contenu à la racine d’un dépôt GitHub.
3. Dans **Settings > Pages**, sélectionner **Deploy from a branch**, branche **main**, dossier **/root**.

## Test local
```bash
python3 -m http.server 8000
```
Puis ouvrir `http://localhost:8000`.

## Validation
```bash
python3 validate.py
```

## Données
- `data/actors.json` : acteurs, projets, griefs et éléments de contexte
- `data/claims.json` : positions contextualisées
- `data/evidence.json` : preuves et verbatims
- `data/relations.json` : relations et liens de position vers le projet
- `data/sources.json` : sources éditoriales nettoyées
- `config/taxonomy.json` : catégories, couleurs et types de relation
