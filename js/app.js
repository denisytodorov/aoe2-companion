// === Global State ===
const App = {
  data: null,       // raw data.json
  strings: null,    // raw strings.json
  units: {},        // id -> unit def
  buildings: {},    // id -> building def
  techs: {},        // id -> tech def
  nodeTypes: null,  // node_types from data
  techtrees: null,  // per-civ techtree
  civNames: null,   // civ name -> string id
  civHelptexts: null,
  currentCiv: null,
};

// === Data Loading ===
async function loadData() {
  const [dataResp, stringsResp] = await Promise.all([
    fetch('data/data.json'),
    fetch('data/strings.json'),
  ]);
  App.data = await dataResp.json();
  App.strings = await stringsResp.json();

  // Build lookup maps
  const d = App.data.data;
  for (const [id, obj] of Object.entries(d.units)) {
    App.units[id] = obj;
  }
  for (const [id, obj] of Object.entries(d.buildings)) {
    App.buildings[id] = obj;
  }
  for (const [id, obj] of Object.entries(d.techs)) {
    App.techs[id] = obj;
  }
  App.nodeTypes = d.node_types;
  App.techtrees = App.data.techtrees;
  App.civNames = App.data.civ_names;
  App.civHelptexts = App.data.civ_helptexts;
}

// === Helpers ===
function getString(id) {
  return App.strings[String(id)] || '';
}

function getUnitName(id) {
  const unit = App.units[id];
  if (!unit) return `Unit #${id}`;
  return getString(unit.LanguageNameId);
}

function getBuildingName(id) {
  const b = App.buildings[id];
  if (!b) return `Building #${id}`;
  return getString(b.LanguageNameId);
}

function getTechName(id) {
  const t = App.techs[id];
  if (!t) return `Tech #${id}`;
  return getString(t.LanguageNameId);
}

function formatCost(cost) {
  if (!cost) return '';
  const parts = [];
  if (cost.Food) parts.push(`<span class="cost-food">${cost.Food}F</span>`);
  if (cost.Wood) parts.push(`<span class="cost-wood">${cost.Wood}W</span>`);
  if (cost.Gold) parts.push(`<span class="cost-gold">${cost.Gold}G</span>`);
  if (cost.Stone) parts.push(`<span class="cost-stone">${cost.Stone}S</span>`);
  return parts.join(' ');
}

// === Dropdown ===
function populateDropdown() {
  const select = document.getElementById('civ-dropdown');
  select.innerHTML = '';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- Select a Civilization --';
  select.appendChild(placeholder);

  const civNames = Object.keys(App.techtrees).sort();
  for (const name of civNames) {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  }

  select.addEventListener('change', () => {
    const civ = select.value;
    if (civ) {
      App.currentCiv = civ;
      showCivPage(civ);
    }
  });
}

// === View Switching ===
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
}

function showCivPage(civName) {
  showView('civ-page');
  renderCivPage(civName);
  document.getElementById('view-techtree-btn').style.display = 'inline-block';
}

function showTechTree(civName) {
  showView('techtree-page');
  document.getElementById('techtree-title').textContent = civName + ' Tech Tree';
  renderTechTree(civName);
}

// === Init ===
async function init() {
  document.getElementById('civ-info').innerHTML = '<div class="loading">Loading game data...</div>';

  await loadData();
  populateDropdown();

  document.getElementById('civ-info').innerHTML =
    '<div class="loading">Select a civilization from the dropdown above</div>';

  // View Tech Tree button
  document.getElementById('view-techtree-btn').addEventListener('click', () => {
    if (App.currentCiv) showTechTree(App.currentCiv);
  });

  // Back button
  document.getElementById('back-to-civ-btn').addEventListener('click', () => {
    if (App.currentCiv) showCivPage(App.currentCiv);
  });
}

init();
