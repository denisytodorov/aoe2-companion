// === Civ Page Rendering ===

function parseCivHelptext(htmlStr) {
  // Clean up the HTML string
  const text = htmlStr
    .replace(/<br\s*\/?>\s*\n?/g, '\n')
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '')
    .trim();

  const lines = text.split('\n').map(l => l.trim()).filter(l => l);

  const result = {
    civType: '',
    bonuses: [],
    uniqueUnits: '',
    uniqueTechs: [],
    teamBonus: '',
  };

  let section = 'type'; // type -> bonuses -> uniqueUnit -> uniqueTechs -> teamBonus

  for (const line of lines) {
    const lower = line.toLowerCase();

    if (lower.startsWith('unique unit') || lower.startsWith('unique units')) {
      section = 'uniqueUnit';
      continue;
    }
    if (lower.startsWith('unique tech') || lower.startsWith('unique techs')) {
      section = 'uniqueTechs';
      continue;
    }
    if (lower.startsWith('team bonus')) {
      section = 'teamBonus';
      continue;
    }

    const cleaned = line.replace(/^[\u2022•]\s*/, '').trim();
    if (!cleaned) continue;

    switch (section) {
      case 'type':
        if (!result.civType) {
          result.civType = cleaned;
          section = 'bonuses';
        }
        break;
      case 'bonuses':
        result.bonuses.push(cleaned);
        break;
      case 'uniqueUnit':
        if (cleaned) result.uniqueUnits += (result.uniqueUnits ? ', ' : '') + cleaned;
        break;
      case 'uniqueTechs':
        if (cleaned) result.uniqueTechs.push(cleaned);
        break;
      case 'teamBonus':
        if (cleaned) result.teamBonus += (result.teamBonus ? ' ' : '') + cleaned;
        break;
    }
  }

  return result;
}

function renderCivPage(civName) {
  const helptextId = App.civHelptexts[civName];
  const helptext = getString(helptextId);

  if (!helptext) {
    document.getElementById('civ-info').innerHTML =
      `<div class="loading">No data found for ${civName}</div>`;
    return;
  }

  const info = parseCivHelptext(helptext);

  let html = '';

  // Header
  html += `<div class="civ-header">
    <h2 class="civ-name">${civName}</h2>
    <div class="civ-type">${info.civType}</div>
  </div>`;

  // Bonuses
  if (info.bonuses.length > 0) {
    html += `<div class="info-section">
      <h3>Civilization Bonuses</h3>
      <ul>${info.bonuses.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>`;
  }

  // Unique Unit
  if (info.uniqueUnits) {
    html += `<div class="info-section">
      <h3>Unique Unit${info.uniqueUnits.includes(',') ? 's' : ''}</h3>
      <p>${info.uniqueUnits}</p>
    </div>`;
  }

  // Unique Techs
  if (info.uniqueTechs.length > 0) {
    html += `<div class="info-section">
      <h3>Unique Technologies</h3>
      <ul>${info.uniqueTechs.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }

  // Team Bonus
  if (info.teamBonus) {
    html += `<div class="info-section">
      <h3>Team Bonus</h3>
      <p>${info.teamBonus}</p>
    </div>`;
  }

  document.getElementById('civ-info').innerHTML = html;

  // Render strategy
  renderStrategy(civName);
}
