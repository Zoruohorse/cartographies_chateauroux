function prepareTimelineData(repository) {
  return repository.timeline || [];
}

export function initEvolution({ repository, root }) {
  if (!root) return;

  const timelineData = prepareTimelineData(repository);

  if (!timelineData.length) {
    root.innerHTML = `
      <article class="list-card">
        <h2>Évolution des acteurs</h2>

        <p class="muted">
          Aucune donnée chronologique n'est disponible pour le moment.
        </p>

        <p>
          Le fichier <code>data/timeline.json</code> est actuellement vide.
        </p>

        <p>
          Les données d'évolution seront affichées ici dès qu'un premier
          événement <code>first_documented_position</code> sera ajouté.
        </p>
      </article>
    `;

    return;
  }

  root.innerHTML = `
    <article class="list-card">
      <h2>Évolution des acteurs</h2>

      <p>
        ${timelineData.length} événement(s) chronologique(s) chargé(s).
      </p>
    </article>
  `;

  console.log("Evolution initialized", timelineData);
}
