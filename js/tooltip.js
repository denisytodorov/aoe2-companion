// === Tooltip System ===

let tooltipPinned = false;

function handleTooltipShow(e) {
  if (tooltipPinned) return;
  showTooltip(e.currentTarget, e);
}

function handleTooltipHide(e) {
  if (tooltipPinned) return;
  hideTooltip();
}

function handleTooltipToggle(e) {
  const tooltip = document.getElementById('tooltip');
  if (tooltipPinned) {
    tooltipPinned = false;
    hideTooltip();
  } else {
    tooltipPinned = true;
    showTooltip(e.currentTarget, e);
  }
}

function showTooltip(node, e) {
  const tooltip = document.getElementById('tooltip');
  const type = node.dataset.type;
  const id = parseInt(node.dataset.id);

  let html = '';

  if (type === 'unit') {
    const unit = App.units[id];
    if (!unit) return;
    const name = getString(unit.LanguageNameId);
    const helpText = getString(unit.LanguageHelpId);

    html += `<div class="tooltip-name">${name}</div>`;

    // Cost
    if (unit.Cost) {
      html += `<div class="tooltip-cost">${formatCost(unit.Cost)}</div>`;
    }

    // Stats
    html += '<div class="tooltip-stats">';
    if (unit.HP) {
      html += `<span class="tooltip-stat-label">HP</span><span class="tooltip-stat-value">${unit.HP}</span>`;
    }
    if (unit.Attack) {
      html += `<span class="tooltip-stat-label">Attack</span><span class="tooltip-stat-value">${unit.Attack}</span>`;
    }
    if (unit.MeleeArmor !== undefined) {
      html += `<span class="tooltip-stat-label">Armor</span><span class="tooltip-stat-value">${unit.MeleeArmor}/${unit.PierceArmor}</span>`;
    }
    if (unit.Range) {
      html += `<span class="tooltip-stat-label">Range</span><span class="tooltip-stat-value">${unit.Range}</span>`;
    }
    if (unit.Speed) {
      html += `<span class="tooltip-stat-label">Speed</span><span class="tooltip-stat-value">${unit.Speed}</span>`;
    }
    if (unit.ReloadTime) {
      html += `<span class="tooltip-stat-label">Reload</span><span class="tooltip-stat-value">${unit.ReloadTime}s</span>`;
    }
    if (unit.TrainTime) {
      html += `<span class="tooltip-stat-label">Train Time</span><span class="tooltip-stat-value">${unit.TrainTime}s</span>`;
    }
    html += '</div>';

    // Description
    if (helpText) {
      const desc = cleanHelpText(helpText);
      if (desc) {
        html += `<div class="tooltip-desc">${desc}</div>`;
      }
    }
  } else if (type === 'tech') {
    const tech = App.techs[id];
    if (!tech) return;
    const name = getString(tech.LanguageNameId);
    const helpText = getString(tech.LanguageHelpId);

    html += `<div class="tooltip-name">${name}</div>`;

    // Cost
    if (tech.Cost) {
      html += `<div class="tooltip-cost">${formatCost(tech.Cost)}</div>`;
    }

    // Research time
    if (tech.ResearchTime) {
      html += '<div class="tooltip-stats">';
      html += `<span class="tooltip-stat-label">Research Time</span><span class="tooltip-stat-value">${tech.ResearchTime}s</span>`;
      html += '</div>';
    }

    // Description
    if (helpText) {
      const desc = cleanHelpText(helpText);
      if (desc) {
        html += `<div class="tooltip-desc">${desc}</div>`;
      }
    }
  } else if (type === 'building') {
    const building = App.buildings[id];
    if (!building) return;
    const name = getString(building.LanguageNameId);
    const helpText = getString(building.LanguageHelpId);

    html += `<div class="tooltip-name">${name}</div>`;

    if (building.Cost) {
      html += `<div class="tooltip-cost">${formatCost(building.Cost)}</div>`;
    }

    html += '<div class="tooltip-stats">';
    if (building.HP) {
      html += `<span class="tooltip-stat-label">HP</span><span class="tooltip-stat-value">${building.HP}</span>`;
    }
    if (building.Attack) {
      html += `<span class="tooltip-stat-label">Attack</span><span class="tooltip-stat-value">${building.Attack}</span>`;
    }
    if (building.Range) {
      html += `<span class="tooltip-stat-label">Range</span><span class="tooltip-stat-value">${building.Range}</span>`;
    }
    if (building.GarrisonCapacity) {
      html += `<span class="tooltip-stat-label">Garrison</span><span class="tooltip-stat-value">${building.GarrisonCapacity}</span>`;
    }
    html += '</div>';

    if (helpText) {
      const desc = cleanHelpText(helpText);
      if (desc) {
        html += `<div class="tooltip-desc">${desc}</div>`;
      }
    }
  }

  tooltip.innerHTML = html;
  tooltip.style.display = 'block';

  // Position tooltip
  positionTooltip(tooltip, e);
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
}

function positionTooltip(tooltip, e) {
  const padding = 12;
  const rect = tooltip.getBoundingClientRect();
  let x = e.clientX + padding;
  let y = e.clientY + padding;

  // Keep tooltip on screen
  if (x + tooltip.offsetWidth > window.innerWidth) {
    x = e.clientX - tooltip.offsetWidth - padding;
  }
  if (y + tooltip.offsetHeight > window.innerHeight) {
    y = e.clientY - tooltip.offsetHeight - padding;
  }
  if (x < 0) x = padding;
  if (y < 0) y = padding;

  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

function cleanHelpText(text) {
  // Split on <br> first - the first line is typically "Research/Create X (cost)",
  // and subsequent lines contain the actual description.
  let parts = text.split(/<br\s*\/?>\s*\n?/);

  // Drop the leading "Create/Build/Research/Train X (cost)" line if present
  let firstPlain = parts[0].replace(/<\/?[^>]+>/g, '').trim();
  if (/^(Create|Build|Research|Train)\s/i.test(firstPlain) && parts.length > 1) {
    parts = parts.slice(1);
  }

  let clean = parts.join(' ')
    .replace(/<\/?[^>]+>/g, '')       // remove remaining HTML tags
    .replace(/[‹›]\w+[‹›]?/g, '')    // remove stat placeholders like ‹hp› ‹attack›
    .replace(/‹\w+›/g, '')           // catch any remaining ‹markers›
    .replace(/\s+/g, ' ')
    .trim();

  // Truncate if very long
  if (clean.length > 250) {
    clean = clean.substring(0, 247) + '...';
  }

  return clean;
}

// Close pinned tooltip when clicking elsewhere
document.addEventListener('click', (e) => {
  if (tooltipPinned && !e.target.closest('.tt-node') && !e.target.closest('.tooltip')) {
    tooltipPinned = false;
    hideTooltip();
  }
});
