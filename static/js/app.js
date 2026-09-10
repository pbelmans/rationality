import {
  classify,
  layers,
  methods,
  references,
  referenceUrl,
  snapshotDate
} from "./model.js";

const dimensions = Array.from({ length: 20 }, (_, index) => index + 1);
const degrees = Array.from({ length: 19 }, (_, index) => index + 2);
const referenceById = new Map(references.map((reference) => [reference.id, reference]));
const methodById = new Map(methods.map((method) => [method.id, method]));

let currentLayer = "rationality";
let currentMethod = null;
let currentReferenceIds = null;

const selector = document.querySelector("#layer-selector");
const legendElement = document.querySelector("#legend");
const table = document.querySelector("#result-table");
const information = document.querySelector("#information");
const specifier = document.querySelector("#specifier");
const methodList = document.querySelector("#method-list");
const paperList = document.querySelector("#paper-list");
const clearFilter = document.querySelector("#clear-filter");
const filterLabel = document.querySelector("#paper-filter-label");

function renderSelector() {
  selector.replaceChildren(
    ...Object.entries(layers).map(([id, layer]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.layer = id;
      button.className = `btn btn-sm btn-outline-dark${id === currentLayer ? " active" : ""}`;
      button.textContent = layer.label;
      button.addEventListener("click", () => selectLayer(id));
      return button;
    })
  );
}

function renderLegend() {
  const items = layers[currentLayer].legend;
  legendElement.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("p");
      row.innerHTML = `<span class="swatch ${item.status}"></span>${item.label}`;
      return row;
    })
  );
}

function renderTable() {
  const header = document.createElement("tr");
  header.innerHTML = "<th class=\"corner\"><i>d</i> / <i>n</i></th>";
  dimensions.forEach((n) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = n;
    header.append(cell);
  });

  const bodyRows = degrees.map((d) => {
    const row = document.createElement("tr");
    const heading = document.createElement("th");
    heading.scope = "row";
    heading.textContent = d;
    row.append(heading);

    dimensions.forEach((n) => {
      const outcome = classify(currentLayer, n, d);
      const cell = document.createElement("td");
      const button = document.createElement("button");
      button.type = "button";
      button.className = `cell ${outcome.status}`;
      button.dataset.n = n;
      button.dataset.d = d;
      button.title = `Dimension ${n}, degree ${d}: ${outcome.headline}`;
      button.setAttribute("aria-label", button.title);
      button.addEventListener("click", () => showResult(n, d, true));
      cell.append(button);
      row.append(cell);
    });
    return row;
  });

  table.replaceChildren(header, ...bodyRows);
  highlightMethod();
}

function referenceMarkup(id) {
  const reference = referenceById.get(id);
  if (!reference) return "";
  const suffix = reference.type === "preprint"
    ? `${reference.note}, ${reference.year}`
    : `${reference.venue} (${reference.year})`;
  return `<li>${reference.authors}, <em>${reference.title}</em>, ${suffix}
    [<a href="${referenceUrl(reference)}">${reference.id}</a>]</li>`;
}

function showResult(n, d, updateHash = false) {
  const outcome = classify(currentLayer, n, d);
  const active = document.querySelector(`.cell.active[data-n="${n}"][data-d="${d}"]`);
  if (active && updateHash) {
    clearResult();
    history.replaceState(null, "", `#${currentLayer}`);
    return;
  }
  document.querySelectorAll(".cell.active").forEach((cell) => cell.classList.remove("active"));
  document.querySelector(`.cell[data-n="${n}"][data-d="${d}"]`)?.classList.add("active");

  const methodLinks = outcome.methods
    .map((id) => `<button type="button" class="method-link" data-method="${id}">${methodById.get(id)?.name}</button>`)
    .join(", ");
  information.innerHTML = `<strong>\\(X_{${d}}^{${n}}\\): ${outcome.headline}.</strong>
    ${outcome.statement}
    ${methodLinks ? `<span class="method-links">Method: ${methodLinks}.</span>` : ""}`;
  information.style.visibility = "visible";
  specifier.innerHTML = ` for \\(X_{${d}}^{${n}}\\)`;
  currentReferenceIds = outcome.refs;

  information.querySelectorAll("[data-method]").forEach((button) => {
    button.addEventListener("click", () => setMethodFilter(button.dataset.method));
  });
  highlightMethod();
  renderPapers();
  window.MathJax?.typesetPromise?.([information, specifier]);
  if (updateHash) history.replaceState(null, "", `#${currentLayer}/${n}/${d}`);
}

function clearResult() {
  document.querySelectorAll(".cell.active").forEach((cell) => cell.classList.remove("active"));
  information.style.visibility = "hidden";
  information.textContent = "?";
  specifier.textContent = "";
  currentReferenceIds = null;
  renderPapers();
}

function selectLayer(layer, updateHash = true) {
  currentLayer = layer;
  renderSelector();
  renderLegend();
  renderTable();
  clearResult();
  if (updateHash) history.replaceState(null, "", `#${layer}`);
}

function renderMethods() {
  methodList.replaceChildren(
    ...methods.map((method) => {
      const fragment = document.createDocumentFragment();
      const term = document.createElement("dt");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "method-link";
      button.dataset.method = method.id;
      button.textContent = method.name;
      button.addEventListener("click", () => setMethodFilter(method.id));
      term.append(button);
      const definition = document.createElement("dd");
      definition.textContent = method.summary;
      fragment.append(term, definition);
      return fragment;
    })
  );
}

function highlightMethod() {
  document.querySelectorAll(".cell").forEach((cell) => {
    const outcome = classify(currentLayer, Number(cell.dataset.n), Number(cell.dataset.d));
    const matches = currentMethod && outcome.methods.includes(currentMethod);
    cell.classList.toggle("method-match", Boolean(matches));
    cell.classList.toggle("method-muted", Boolean(currentMethod && !matches));
  });
  document.querySelectorAll("[data-method]").forEach((button) => {
    button.classList.toggle("active", button.dataset.method === currentMethod);
  });
}

function renderPapers() {
  const visible = references.filter((reference) => {
    const matchesSelection = currentReferenceIds === null || currentReferenceIds.includes(reference.id);
    const matchesMethod = !currentMethod || reference.methods.includes(currentMethod);
    return matchesSelection && matchesMethod;
  });

  paperList.replaceChildren(
    ...visible.map((reference) => {
      const item = document.createElement("li");
      const venue = reference.type === "preprint"
        ? `${reference.note}, ${reference.year}`
        : `${reference.venue} (${reference.year})`;
      item.innerHTML = `${reference.authors}, <em>${reference.title}</em>, ${venue}
        [<a href="${referenceUrl(reference)}">${reference.id}</a>]`;
      return item;
    })
  );
  if (visible.length === 0) {
    const item = document.createElement("li");
    item.className = "no-reference";
    item.textContent = "no references available";
    paperList.append(item);
  }
}

function setMethodFilter(id) {
  if (currentMethod === id) {
    clearMethodFilter();
    return;
  }
  currentMethod = id;
  clearResult();
  const method = methodById.get(id);
  filterLabel.textContent = `Highlighting cells using ${method.name}.`;
  filterLabel.hidden = false;
  clearFilter.hidden = false;
  highlightMethod();
  renderPapers();
}

function clearMethodFilter() {
  currentMethod = null;
  filterLabel.hidden = true;
  clearFilter.hidden = true;
  highlightMethod();
  renderPapers();
}

function applyHash() {
  const match = location.hash.match(/^#(rationality|stable|unirationality|connectedness)(?:\/(\d+)\/(\d+))?$/);
  if (!match) {
    selectLayer("rationality", false);
    return;
  }
  selectLayer(match[1], false);
  if (match[2] && match[3]) showResult(Number(match[2]), Number(match[3]));
}

clearFilter.addEventListener("click", clearMethodFilter);
window.addEventListener("hashchange", applyHash);

renderMethods();
renderPapers();
applyHash();

document.documentElement.dataset.snapshot = snapshotDate;
