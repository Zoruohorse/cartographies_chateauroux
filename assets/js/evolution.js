function prepareTimelineData(repository) {
  return repository.timeline || [];
}

function buildPeriods(events) {
  return [];
}

function resolveDisplayCategory(actor) {
  return null;
}

function computeSeries(data) {
  return [];
}

function renderMetrics(root, data) {
  // à compléter
}

function renderChart(root, data) {
  // à compléter
}

function renderLegend(root, data) {
  // à compléter
}

function renderRoster(root, data) {
  // à compléter
}

export function initEvolution({ repository, root }) {
  if (!root) return;

  const timelineData = prepareTimelineData(repository);

  root.innerHTML = `
    <div class="list-card">
      <h2>Évolution des acteurs</h2>
      <p>
        Le module d'évolution est initialisé.
      </p>
      <p>
        ${timelineData.length} événement(s) chronologique(s) chargé(s).
      </p>
    </div>
  `;

  console.log("Evolution initialized", repository);
}
