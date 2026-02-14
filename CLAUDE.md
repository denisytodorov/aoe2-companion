# AoE2 Companion

A browser-based Age of Empires II reference app. No build tools, no frameworks — just vanilla HTML/CSS/JS with static data files extracted from the game.

**Live site:** https://denisytodorov.github.io/aoe2-companion/
**Repo:** https://github.com/denisytodorov/aoe2-companion

## Vibes

- Dark, moody color palette inspired by medieval strategy games (deep navy `#1a1a2e`, dark blue cards `#0f3460`, gold headings `#f5c542`, red accent `#e94560`)
- Compact, information-dense UI — no wasted space, no fluff
- System font stack (`Segoe UI`, system-ui) for clean readability
- Cards with subtle borders and hover states, no heavy shadows or gradients
- Resource costs color-coded: red for food, brown for wood, yellow for gold, grey for stone
- Tech tree uses color-coded node types: blue for units, green for techs, red border for unique items, dimmed + strikethrough for unavailable
- Sticky header with dropdown selector — single-page feel, no routing
- Tooltips are fixed-position overlays with gold border, support hover and click-to-pin

## Core Features

- **Civ icon grid** — default home screen with 50 civ shield icons in a responsive grid, with search bar for quick filtering
- **Civ selector dropdown** — picks from all civs, populates the civ page
- **Civ info page** — parses game help text into structured sections: civ type, bonuses, unique units, unique techs, team bonus
- **Strategy guides** — 1v1 Arabia strategy data for each civ (opening, castle age plan, key tips, ideal composition), synced from Google Sheet
- **Build orders** — step-by-step build orders with per-step villager resource counts and inline resource icons, synced from Google Sheet
- **Full tech tree** — universal layout (all buildings/units/techs) rendered per-civ with availability overlays, greyed-out unavailable items, highlighted unique units/techs
- **Tooltip system** — hover/click tooltips for units, techs, and buildings showing name, cost, stats, and description text cleaned from game strings
- **Responsive design** — media queries for tablet (768px) and phone (480px) breakpoints

## Architecture

```
index.html           — single page, all views toggled via JS
css/style.css        — all styles, CSS custom properties for theming, responsive breakpoints
data/data.js         — game data (units, buildings, techs, tech trees) as a JS global
data/strings.js      — localized strings as a JS global
data/Icons/          — 50 civ shield PNGs + 4 resource icons (Food, Wood, Gold, Stone)
js/app.js            — init, data loading, view switching, civ grid + search, helpers
js/civPage.js        — civ info page rendering + help text parser
js/strategies.js     — strategy data + rendering (synced from Google Sheet)
js/buildOrders.js    — build order data + step rendering with per-step resource counts
js/techTreeLayout.js — universal tech tree structure (building/unit/tech IDs per age)
js/techTree.js       — per-civ tech tree renderer
js/tooltip.js        — tooltip show/hide/position/pin + help text cleaning
```

Data is loaded via `<script>` tags (globals `AOE2_DATA`, `AOE2_STRINGS`, `STRATEGIES`, `BUILD_ORDERS`), not fetched. Strategy and build order data is maintained in a Google Sheet and synced via CSV export.

## Current Tasks

- Scout into Knights build order (needs research first)
- Tech tree: civs with replacement buildings/units (e.g. Armenian/Georgian Fortified Church replacing Monastery, Warrior Priest replacing Monk, Poles Folwark) are missing those items from the tech tree display — the layout only knows standard building IDs, so replacements are invisible and the base building shows as greyed out
