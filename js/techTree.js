// === Tech Tree Rendering ===

function renderTechTree(civName) {
  const container = document.getElementById('techtree-container');
  const civTree = App.techtrees[civName];
  if (!civTree) {
    container.innerHTML = '<div class="loading">No tech tree data available.</div>';
    return;
  }

  // Build sets of available IDs for quick lookup
  const availableUnits = new Set(civTree.units.map(u => u.id));
  const availableTechs = new Set(civTree.techs.map(t => t.id));
  const availableBuildings = new Set(civTree.buildings.map(b => b.id));

  // Get unique unit/tech IDs
  const uniqueIds = civTree.unique || {};
  const uniqueUnitIds = new Set([
    uniqueIds.castleAgeUniqueUnit,
    uniqueIds.imperialAgeUniqueUnit,
  ].filter(Boolean));
  const uniqueTechIds = new Set([
    uniqueIds.castleAgeUniqueTech,
    uniqueIds.imperialAgeUniqueTech,
  ].filter(Boolean));

  let html = '';

  for (const section of TECH_TREE_LAYOUT) {
    const buildingAvailable = availableBuildings.has(section.buildingId);

    // Skip sections where the building isn't available (e.g., no Stable for Aztecs)
    // But still show it greyed out for clarity
    const sectionClass = buildingAvailable ? '' : ' tt-section-unavailable';

    html += `<div class="techtree-section${sectionClass}">`;
    html += `<div class="techtree-section-header">${section.name}</div>`;

    // Age headers
    html += '<div class="techtree-ages">';
    for (let age = 1; age <= 4; age++) {
      html += `<div class="techtree-age-header">${AGE_NAMES[age]}</div>`;
    }

    // Render unit lines
    for (const line of section.unitLines) {
      for (let age = 1; age <= 4; age++) {
        html += '<div class="techtree-age-col">';
        const unitsInAge = line.units.filter(u => u.age === age);
        for (const unit of unitsInAge) {
          const isAvailable = availableUnits.has(unit.id);
          const isUnique = uniqueUnitIds.has(unit.id);
          const name = getUnitName(unit.id);
          const classes = ['tt-node', 'tt-unit'];
          if (!isAvailable) classes.push('tt-unavailable');
          if (isUnique) classes.push('tt-unique');

          html += `<div class="${classes.join(' ')}" data-type="unit" data-id="${unit.id}">${name}</div>`;
        }
        html += '</div>';
      }
    }

    // Render unique units in Castle section
    if (section.hasUniqueUnit && uniqueIds.castleAgeUniqueUnit) {
      // Castle age unique unit
      for (let age = 1; age <= 4; age++) {
        html += '<div class="techtree-age-col">';
        if (age === 3 && uniqueIds.castleAgeUniqueUnit) {
          const name = getUnitName(uniqueIds.castleAgeUniqueUnit);
          html += `<div class="tt-node tt-unit tt-unique" data-type="unit" data-id="${uniqueIds.castleAgeUniqueUnit}">${name}</div>`;
        }
        if (age === 4 && uniqueIds.imperialAgeUniqueUnit) {
          const name = getUnitName(uniqueIds.imperialAgeUniqueUnit);
          html += `<div class="tt-node tt-unit tt-unique" data-type="unit" data-id="${uniqueIds.imperialAgeUniqueUnit}">${name}</div>`;
        }
        html += '</div>';
      }
    }

    // Render unique techs in Castle section
    if (section.hasUniqueTechs) {
      for (let age = 1; age <= 4; age++) {
        html += '<div class="techtree-age-col">';
        if (age === 3 && uniqueIds.castleAgeUniqueTech) {
          const name = getTechName(uniqueIds.castleAgeUniqueTech);
          html += `<div class="tt-node tt-tech tt-unique" data-type="tech" data-id="${uniqueIds.castleAgeUniqueTech}">${name}</div>`;
        }
        if (age === 4 && uniqueIds.imperialAgeUniqueTech) {
          const name = getTechName(uniqueIds.imperialAgeUniqueTech);
          html += `<div class="tt-node tt-tech tt-unique" data-type="tech" data-id="${uniqueIds.imperialAgeUniqueTech}">${name}</div>`;
        }
        html += '</div>';
      }
    }

    // Render generic techs
    if (section.techs.length > 0) {
      for (let age = 1; age <= 4; age++) {
        html += '<div class="techtree-age-col">';
        const techsInAge = section.techs.filter(t => t.age === age);
        for (const tech of techsInAge) {
          const isAvailable = availableTechs.has(tech.id);
          const name = getTechName(tech.id);
          const classes = ['tt-node', 'tt-tech'];
          if (!isAvailable) classes.push('tt-unavailable');

          html += `<div class="${classes.join(' ')}" data-type="tech" data-id="${tech.id}">${name}</div>`;
        }
        html += '</div>';
      }
    }

    html += '</div>'; // .techtree-ages
    html += '</div>'; // .techtree-section
  }

  container.innerHTML = html;

  // Attach tooltip events
  container.querySelectorAll('.tt-node:not(.tt-unavailable)').forEach(node => {
    node.addEventListener('mouseenter', handleTooltipShow);
    node.addEventListener('mouseleave', handleTooltipHide);
    node.addEventListener('click', handleTooltipToggle);
  });
}
