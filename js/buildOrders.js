// === Build Order Data ===
const BUILD_ORDERS = [
  {
    id: "scout-rush",
    name: "Scout Rush",
    summary: "Fast Feudal Age into Stable Scouts. Aggressive opening for early map control.",
    difficulty: "beginner",
    popCount: "21",
    clickUpTime: "~8:30",
    steps: [
      { pop: "1-6",  age: "dark",   task: "6 villagers to sheep" },
      { type: "helper", task: "Build 2 Houses with your 3 starting villagers (2/1)" },
      { pop: "7-10", age: "dark",   task: "4 villagers to wood (build Lumber Camp)" },
      { pop: "11",   age: "dark",   task: "Lure 1st boar" },
      { type: "helper", task: "Build House" },
      { pop: "12-13", age: "dark",  task: "2 villagers to berries (build Mill)" },
      { pop: "14",   age: "dark",   task: "Lure 2nd boar" },
      { pop: "15-16", age: "dark",  task: "2 more villagers to berries (4 total on berries)" },
      { type: "helper", task: "Build House" },
      { pop: "17-20", age: "dark",  task: "4 villagers to wood (2nd Lumber Camp or join 1st)" },
      { pop: "21",   age: "dark",   task: "Click Feudal Age", isBenchmark: true },
      { type: "helper", task: "While advancing: move 4 shepherd villagers to wood; Build Barracks " },
      { pop: null,   age: "feudal", task: "Build Stable immediately, research Double-Bit Axe" },
      { pop: null,   age: "feudal", task: "Produce 3-5 Scouts, take map control" },
      { pop: null,   age: "feudal", task: "Start building farms as berries run out (~8 farms)" },
    ],
    vilDistribution: {
      label: "At Feudal click",
      food: 6, foodNote: "berries",
      wood: 10, woodNote: "",
      gold: 0, goldNote: "",
    },
    vilRebalanced: {
      label: "After rebalancing",
      food: 11, foodNote: "farms",
      wood: 10, woodNote: "",
      gold: 0, goldNote: "",
    },
    benchmarks: [
      "Feudal at 21 pop (~8:30)",
      "Stable down immediately on reaching Feudal",
      "3 Scouts out by ~11:00",
    ],
    followUp: "Add a 2nd Stable or transition into Knights in Castle Age. Wall at home once you have map control. Build farms steadily — aim for 8-10 farms before clicking Castle Age.",
  },
  {
    id: "archer-rush",
    name: "Archer Rush",
    summary: "Fast Feudal into Archery Range mass Archers. Strong sustained ranged pressure.",
    difficulty: "beginner",
    popCount: "22",
    clickUpTime: "~9:00",
    steps: [
      { pop: "1-6",  age: "dark",   task: "6 villagers to sheep" },
      { type: "helper", task: "Build 2 Houses with 2 of your starting villagers" },
      { pop: "7-10", age: "dark",   task: "4 villagers to wood (build Lumber Camp)" },
      { pop: "11",   age: "dark",   task: "Lure 1st boar" },
      { type: "helper", task: "Build House" },
      { pop: "12",   age: "dark",   task: "1 villager to berries (build Mill)" },
      { pop: "13",   age: "dark",   task: "Lure 2nd boar" },
      { pop: "14-16", age: "dark",  task: "3 more villagers to berries (4 total on berries)" },
      { type: "helper", task: "Build House" },
      { pop: "17",   age: "dark",   task: "1 villager to wood (5 on wood total)" },
      { pop: "18-21", age: "dark",  task: "4 villagers to gold (build Mining Camp)" },
      { pop: "22",   age: "dark",   task: "Click Feudal Age", isBenchmark: true },
      { type: "helper", task: "While advancing: move shepherd villagers to wood (need ~10 on wood)" },
      { pop: null,   age: "feudal", task: "Build Archery Range + 2nd Lumber Camp, research Double-Bit Axe" },
      { pop: null,   age: "feudal", task: "Produce Archers non-stop, research Fletching when affordable" },
      { pop: null,   age: "feudal", task: "Start seeding farms as natural food runs out" },
      { pop: null,   age: "feudal", task: "Build 2nd Archery Range when wood allows" },
    ],
    vilDistribution: {
      label: "At Feudal click",
      food: 4, foodNote: "berries",
      wood: 5, woodNote: "",
      gold: 4, goldNote: "",
    },
    vilRebalanced: {
      label: "After rebalancing",
      food: 7, foodNote: "mix",
      wood: 10, woodNote: "",
      gold: 3, goldNote: "",
    },
    benchmarks: [
      "Feudal at 22 pop (~9:00)",
      "Archery Range down immediately on reaching Feudal",
      "Fletching researched early",
      "Constant Archer production — never idle the Range",
    ],
    followUp: "Add a 2nd Archery Range when wood allows. Build farms steadily for food income. Transition to Crossbowmen in Castle Age.",
  },
  {
    id: "men-at-arms",
    name: "Men-at-Arms Rush",
    summary: "Create 3 Militia in Dark Age, upgrade to Men-at-Arms on reaching Feudal for early aggression, then transition into Archers.",
    difficulty: "intermediate",
    popCount: "22",
    clickUpTime: "~9:30",
    steps: [
      { pop: "1-6",  age: "dark",   task: "6 villagers to sheep" },
      { type: "helper", task: "Build 2 Houses with 2 of your starting villagers" },
      { pop: "7-10", age: "dark",   task: "4 villagers to wood (build Lumber Camp)" },
      { pop: "11",   age: "dark",   task: "Lure 1st boar" },
      { type: "helper", task: "Build House" },
      { pop: "12-13", age: "dark",  task: "2 villagers to berries (build Mill)" },
      { pop: "14",   age: "dark",   task: "Lure 2nd boar" },
      { pop: "15-16", age: "dark",  task: "2 more villagers to berries (4 total on berries)" },
      { pop: "17",   age: "dark",   task: "Build Barracks with a shepherd, then send to wood" },
      { type: "helper", task: "Build House" },
      { pop: "18-19", age: "dark",  task: "2 villagers to gold (build Mining Camp)" },
      { type: "helper", task: "Queue 3 Militia from Barracks" },
      { pop: "20-21", age: "dark",  task: "2 villagers to wood" },
      { pop: "22",   age: "dark",   task: "Click Feudal Age", isBenchmark: true },
      { type: "helper", task: "While advancing: move shepherd villagers to wood, rally Militia toward enemy" },
      { pop: null,   age: "feudal", task: "Research Men-at-Arms immediately, send Militia forward" },
      { pop: null,   age: "feudal", task: "Build Archery Range, start Archer production" },
      { pop: null,   age: "feudal", task: "Seed farms as natural food runs out" },
    ],
    vilDistribution: {
      label: "At Feudal click",
      food: 4, foodNote: "berries",
      wood: 7, woodNote: "",
      gold: 2, goldNote: "",
    },
    vilRebalanced: {
      label: "After rebalancing",
      food: 7, foodNote: "mix",
      wood: 10, woodNote: "",
      gold: 3, goldNote: "",
    },
    benchmarks: [
      "Barracks down by ~7:00",
      "3 Militia produced before clicking Feudal",
      "Men-at-Arms upgrade researched immediately on reaching Feudal",
      "Archers follow up behind the aggression",
    ],
    followUp: "Transition into Archers behind the Men-at-Arms aggression. Build farms for food economy. Go Crossbowmen in Castle Age.",
  },
  {
    id: "drush",
    name: "Drush (Dark Age Rush)",
    summary: "Send 3 Militia in Dark Age to harass enemy economy while booming behind it. Buys time to reach Feudal with a stronger economy.",
    difficulty: "intermediate",
    popCount: "24-25",
    clickUpTime: "~10:00",
    steps: [
      { pop: "1-6",  age: "dark",   task: "6 villagers to sheep" },
      { type: "helper", task: "Build 2 Houses with 2 of your starting villagers" },
      { pop: "7-10", age: "dark",   task: "4 villagers to wood (build Lumber Camp)" },
      { pop: "11",   age: "dark",   task: "Lure 1st boar" },
      { type: "helper", task: "Build House" },
      { pop: "12-13", age: "dark",  task: "2 villagers to berries (build Mill)" },
      { pop: "14",   age: "dark",   task: "Lure 2nd boar" },
      { pop: "15-16", age: "dark",  task: "2 more villagers to berries (4 total on berries)" },
      { pop: "17",   age: "dark",   task: "Build Barracks with a shepherd, then send to gold" },
      { type: "helper", task: "Build House" },
      { pop: "18-19", age: "dark",  task: "2 villagers to gold (build Mining Camp)" },
      { type: "helper", task: "Produce 3 Militia and send them to enemy base" },
      { pop: "20-21", age: "dark",  task: "2 villagers to farms (seed farms as sheep/boar deplete)" },
      { pop: "22-23", age: "dark",  task: "2 villagers to wood" },
      { pop: "24-25", age: "dark",  task: "2 villagers to food (farms or berries)" },
      { pop: "25",   age: "dark",   task: "Click Feudal Age", isBenchmark: true },
      { type: "helper", task: "While advancing: balance eco, wall up at home" },
      { pop: null,   age: "feudal", task: "Flexible: Archery Range for Archers, or continue to Castle Age" },
    ],
    vilDistribution: {
      label: "At Feudal click",
      food: 10, foodNote: "farms + berries",
      wood: 8, woodNote: "",
      gold: 2, goldNote: "",
    },
    vilRebalanced: {
      label: "After rebalancing",
      food: 10, foodNote: "sheep",
      wood: 10, woodNote: "",
      gold: 5, goldNote: "",
    },
    benchmarks: [
      "Barracks down by ~6:30",
      "3 Militia out by ~8:00",
      "Militia arrive at enemy base by ~9:00",
      "Feudal click at ~10:00",
    ],
    followUp: "Drush is the most flexible opening. Go Fast Castle, go Archers, or wall and boom — the Militia buy you time. Keep farming up.",
  },
];

// === Rendering ===
function renderBuildOrdersPage() {
  const container = document.getElementById('buildorders-container');

  let html = `
    <div class="bo-page-header">
      <h2>Build Orders</h2>
      <p class="bo-subtitle">Universal build orders for 1v1 Arabia</p>
    </div>
    <div class="bo-grid">
  `;

  for (const bo of BUILD_ORDERS) {
    html += `
      <div class="bo-card" data-bo-id="${bo.id}">
        <div class="bo-card-top">
          <h3 class="bo-card-name">${bo.name}</h3>
          <span class="bo-difficulty bo-difficulty-${bo.difficulty}">${bo.difficulty}</span>
        </div>
        <p class="bo-card-summary">${bo.summary}</p>
        <div class="bo-card-stats">
          <span class="bo-card-stat">${bo.popCount} pop</span>
          <span class="bo-card-stat-sep"></span>
          <span class="bo-card-stat">Feudal ${bo.clickUpTime}</span>
        </div>
      </div>
    `;
  }

  html += '</div>';
  container.innerHTML = html;

  // Attach click handlers
  container.querySelectorAll('.bo-card').forEach(card => {
    card.addEventListener('click', () => {
      renderBuildOrderDetail(card.dataset.boId);
    });
  });
}

function renderResourceChips(dist) {
  let chips = '';
  if (dist.food > 0) {
    chips += `<span class="bo-res-chip bo-res-food">${dist.food} Food${dist.foodNote ? ' (' + dist.foodNote + ')' : ''}</span>`;
  }
  if (dist.wood > 0) {
    chips += `<span class="bo-res-chip bo-res-wood">${dist.wood} Wood${dist.woodNote ? ' (' + dist.woodNote + ')' : ''}</span>`;
  }
  if (dist.gold > 0) {
    chips += `<span class="bo-res-chip bo-res-gold">${dist.gold} Gold${dist.goldNote ? ' (' + dist.goldNote + ')' : ''}</span>`;
  }
  return chips;
}

function renderBuildOrderDetail(id) {
  const bo = BUILD_ORDERS.find(b => b.id === id);
  if (!bo) return;

  const container = document.getElementById('buildorders-container');

  // Steps
  let stepsHtml = '';
  for (const step of bo.steps) {
    if (step.type === 'helper') {
      stepsHtml += `
        <div class="bo-step bo-step-helper">
          <span class="bo-step-pop"></span>
          <span class="bo-step-task">${step.task}</span>
        </div>`;
    } else if (step.isBenchmark) {
      stepsHtml += `
        <div class="bo-step bo-step-benchmark">
          <span class="bo-step-pop">${step.pop || ''}</span>
          <span class="bo-step-age bo-age-${step.age}">${step.age}</span>
          <span class="bo-step-task">${step.task}</span>
        </div>`;
    } else {
      stepsHtml += `
        <div class="bo-step">
          <span class="bo-step-pop">${step.pop || ''}</span>
          <span class="bo-step-age bo-age-${step.age}">${step.age}</span>
          <span class="bo-step-task">${step.task}</span>
        </div>`;
    }
  }

  // Benchmarks
  let benchHtml = '';
  for (const b of bo.benchmarks) {
    benchHtml += `<li>${b}</li>`;
  }

  let html = `
    <div class="bo-detail">
      <div class="bo-detail-header">
        <button class="btn bo-back-btn" id="bo-back-btn">Back</button>
        <h2>${bo.name}</h2>
        <span class="bo-difficulty bo-difficulty-${bo.difficulty}">${bo.difficulty}</span>
      </div>

      <p class="bo-detail-summary">${bo.summary}</p>

      <div class="bo-detail-meta">
        <span class="bo-card-stat">${bo.popCount} pop</span>
        <span class="bo-card-stat-sep"></span>
        <span class="bo-card-stat">Feudal ${bo.clickUpTime}</span>
      </div>

      <div class="bo-resource-section">
        <div class="bo-resource-row">
          <span class="bo-resource-label">${bo.vilDistribution.label}:</span>
          <div class="bo-resource-chips">
            ${renderResourceChips(bo.vilDistribution)}
          </div>
        </div>
        <div class="bo-resource-row">
          <span class="bo-resource-label">${bo.vilRebalanced.label}:</span>
          <div class="bo-resource-chips">
            ${renderResourceChips(bo.vilRebalanced)}
          </div>
        </div>
      </div>

      <div class="bo-steps-section">
        <h3>Build Order Steps</h3>
        <div class="bo-steps">
          ${stepsHtml}
        </div>
      </div>

      <div class="bo-benchmarks-section">
        <h3>Key Benchmarks</h3>
        <ul class="bo-benchmarks-list">
          ${benchHtml}
        </ul>
      </div>

      <div class="bo-followup-section">
        <h3>What's Next?</h3>
        <p>${bo.followUp}</p>
      </div>
    </div>
  `;

  container.innerHTML = html;

  document.getElementById('bo-back-btn').addEventListener('click', () => {
    renderBuildOrdersPage();
  });
}
