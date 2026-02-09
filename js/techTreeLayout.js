// === Universal Tech Tree Layout ===
// Defines the structure of the AoE2 tech tree - same for all civs.
// Per-civ availability is determined at render time.

const TECH_TREE_LAYOUT = [
  // === BARRACKS ===
  {
    name: "Barracks",
    buildingId: 12,
    unitLines: [
      {
        name: "Militia Line",
        units: [
          { id: 74, age: 1 },   // Militia
          { id: 75, age: 2 },   // Man-at-Arms
          { id: 77, age: 3 },   // Long Swordsman
          { id: 473, age: 4 },  // Two-Handed Swordsman
          { id: 567, age: 4 },  // Champion
        ]
      },
      {
        name: "Spear Line",
        units: [
          { id: 93, age: 2 },   // Spearman
          { id: 358, age: 3 },  // Pikeman
          { id: 359, age: 4 },  // Halberdier
        ]
      },
      {
        name: "Eagle Line",
        units: [
          { id: 751, age: 2 },  // Eagle Scout
          { id: 753, age: 3 },  // Eagle Warrior
          { id: 752, age: 4 },  // Elite Eagle Warrior
        ]
      },
    ],
    techs: [
      { id: 875, age: 3 },  // Gambesons
      { id: 215, age: 3 },  // Squires
      { id: 602, age: 3 },  // Arson
      { id: 90, age: 2 },   // Tracking
    ]
  },

  // === ARCHERY RANGE ===
  {
    name: "Archery Range",
    buildingId: 87,
    unitLines: [
      {
        name: "Archer Line",
        units: [
          { id: 4, age: 2 },    // Archer
          { id: 24, age: 3 },   // Crossbowman
          { id: 492, age: 4 },  // Arbalester
        ]
      },
      {
        name: "Skirmisher Line",
        units: [
          { id: 7, age: 2 },     // Skirmisher
          { id: 6, age: 3 },     // Elite Skirmisher
          { id: 1155, age: 4 },  // Imperial Skirmisher
        ]
      },
      {
        name: "Cavalry Archer Line",
        units: [
          { id: 39, age: 3 },   // Cavalry Archer
          { id: 474, age: 4 },  // Heavy Cavalry Archer
        ]
      },
      {
        name: "Hand Cannoneer",
        units: [
          { id: 5, age: 4 },    // Hand Cannoneer
        ]
      },
    ],
    techs: [
      { id: 437, age: 3 },  // Thumb Ring
      { id: 436, age: 4 },  // Parthian Tactics
    ]
  },

  // === STABLE ===
  {
    name: "Stable",
    buildingId: 101,
    unitLines: [
      {
        name: "Scout Line",
        units: [
          { id: 448, age: 2 },   // Scout Cavalry
          { id: 546, age: 3 },   // Light Cavalry
          { id: 441, age: 4 },   // Hussar
          { id: 1707, age: 4 },  // Winged Hussar
        ]
      },
      {
        name: "Knight Line",
        units: [
          { id: 38, age: 3 },   // Knight
          { id: 283, age: 4 },  // Cavalier
          { id: 569, age: 4 },  // Paladin
        ]
      },
      {
        name: "Camel Line",
        units: [
          { id: 329, age: 3 },  // Camel Rider
          { id: 330, age: 4 },  // Heavy Camel Rider
          { id: 207, age: 4 },  // Imperial Camel Rider
        ]
      },
      {
        name: "Battle Elephant Line",
        units: [
          { id: 1132, age: 3 },  // Battle Elephant
          { id: 1134, age: 4 },  // Elite Battle Elephant
        ]
      },
      {
        name: "Steppe Lancer Line",
        units: [
          { id: 1370, age: 3 },  // Steppe Lancer
          { id: 1372, age: 4 },  // Elite Steppe Lancer
        ]
      },
    ],
    techs: [
      { id: 435, age: 2 },  // Bloodlines
      { id: 39, age: 3 },   // Husbandry
    ]
  },

  // === SIEGE WORKSHOP ===
  {
    name: "Siege Workshop",
    buildingId: 49,
    unitLines: [
      {
        name: "Ram Line",
        units: [
          { id: 1258, age: 3 },  // Battering Ram
          { id: 422, age: 4 },   // Capped Ram
          { id: 548, age: 4 },   // Siege Ram
        ]
      },
      {
        name: "Mangonel Line",
        units: [
          { id: 280, age: 3 },  // Mangonel
          { id: 550, age: 4 },  // Onager
          { id: 588, age: 4 },  // Siege Onager
        ]
      },
      {
        name: "Scorpion Line",
        units: [
          { id: 279, age: 3 },  // Scorpion
          { id: 542, age: 4 },  // Heavy Scorpion
        ]
      },
      {
        name: "Bombard Cannon",
        units: [
          { id: 36, age: 4 },  // Bombard Cannon
        ]
      },
      {
        name: "Siege Tower",
        units: [
          { id: 1105, age: 3 },  // Siege Tower
        ]
      },
      {
        name: "Armored Elephant Line",
        units: [
          { id: 1744, age: 3 },  // Armored Elephant
          { id: 1746, age: 4 },  // Siege Elephant
        ]
      },
    ],
    techs: []
  },

  // === CASTLE ===
  {
    name: "Castle",
    buildingId: 82,
    unitLines: [
      {
        name: "Castle Units",
        units: [
          { id: 440, age: 3 },  // Petard
          { id: 42, age: 3 },   // Trebuchet
        ]
      },
    ],
    techs: [
      { id: 315, age: 4 },  // Conscription
      { id: 379, age: 4 },  // Hoardings
      { id: 321, age: 4 },  // Sappers
      { id: 408, age: 4 },  // Spies/Treason
    ],
    hasUniqueTechs: true,
    hasUniqueUnit: true,
  },

  // === MONASTERY ===
  {
    name: "Monastery",
    buildingId: 104,
    unitLines: [
      {
        name: "Monk",
        units: [
          { id: 125, age: 3 },  // Monk
        ]
      },
    ],
    techs: [
      { id: 316, age: 3 },  // Redemption
      { id: 319, age: 3 },  // Atonement
      { id: 441, age: 3 },  // Herbal Medicine
      { id: 231, age: 3 },  // Sanctity
      { id: 252, age: 3 },  // Fervor
      { id: 46, age: 4 },   // Devotion
      { id: 45, age: 4 },   // Faith
      { id: 233, age: 4 },  // Illumination
      { id: 230, age: 4 },  // Block Printing
      { id: 438, age: 4 },  // Theocracy
      { id: 439, age: 3 },  // Heresy
    ]
  },

  // === BLACKSMITH ===
  {
    name: "Blacksmith",
    buildingId: 103,
    unitLines: [],
    techs: [
      // Infantry Attack
      { id: 67, age: 2, group: "Infantry Attack" },   // Forging
      { id: 68, age: 3, group: "Infantry Attack" },   // Iron Casting
      { id: 75, age: 4, group: "Infantry Attack" },   // Blast Furnace
      // Infantry Armor
      { id: 74, age: 2, group: "Infantry Armor" },    // Scale Mail Armor
      { id: 76, age: 3, group: "Infantry Armor" },    // Chain Mail Armor
      { id: 77, age: 4, group: "Infantry Armor" },    // Plate Mail Armor
      // Archer Attack
      { id: 199, age: 2, group: "Archer Attack" },    // Fletching
      { id: 200, age: 3, group: "Archer Attack" },    // Bodkin Arrow
      { id: 201, age: 4, group: "Archer Attack" },    // Bracer
      // Archer Armor
      { id: 211, age: 2, group: "Archer Armor" },     // Padded Archer Armor
      { id: 212, age: 3, group: "Archer Armor" },     // Leather Archer Armor
      { id: 219, age: 4, group: "Archer Armor" },     // Ring Archer Armor
      // Cavalry Armor
      { id: 81, age: 2, group: "Cavalry Armor" },     // Scale Barding Armor
      { id: 82, age: 3, group: "Cavalry Armor" },     // Chain Barding Armor
      { id: 80, age: 4, group: "Cavalry Armor" },     // Plate Barding Armor
    ]
  },

  // === UNIVERSITY ===
  {
    name: "University",
    buildingId: 209,
    unitLines: [],
    techs: [
      { id: 93, age: 3 },   // Ballistics
      { id: 322, age: 3 },  // Murder Holes
      { id: 54, age: 3 },   // Treadmill Crane
      { id: 380, age: 3 },  // Heated Shot
      { id: 50, age: 3 },   // Masonry
      { id: 608, age: 4 },  // Arrowslits
      { id: 51, age: 4 },   // Architecture
      { id: 47, age: 4 },   // Chemistry
      { id: 377, age: 4 },  // Siege Engineers
      { id: 194, age: 3 },  // Fortified Wall
      { id: 140, age: 3 },  // Guard Tower
      { id: 63, age: 4 },   // Keep
      { id: 64, age: 4 },   // Bombard Tower
    ]
  },

  // === DOCK ===
  {
    name: "Dock",
    buildingId: 45,
    unitLines: [
      {
        name: "Galley Line",
        units: [
          { id: 539, age: 2 },  // Galley
          { id: 21, age: 3 },   // War Galley
          { id: 442, age: 4 },  // Galleon
        ]
      },
      {
        name: "Fire Ship Line",
        units: [
          { id: 1103, age: 2 },  // Fire Galley
          { id: 529, age: 3 },   // Fire Ship
          { id: 532, age: 4 },   // Fast Fire Ship
        ]
      },
      {
        name: "Demo Ship Line",
        units: [
          { id: 1104, age: 2 },  // Demolition Raft
          { id: 527, age: 3 },   // Demolition Ship
          { id: 528, age: 4 },   // Heavy Demo Ship
        ]
      },
      {
        name: "Cannon Galleon Line",
        units: [
          { id: 420, age: 4 },  // Cannon Galleon
          { id: 691, age: 4 },  // Elite Cannon Galleon
        ]
      },
      {
        name: "Other Ships",
        units: [
          { id: 13, age: 1 },    // Fishing Ship
          { id: 545, age: 2 },   // Transport Ship
          { id: 17, age: 3 },    // Trade Cog
          { id: 1795, age: 3 },  // Dromon
        ]
      },
    ],
    techs: [
      { id: 65, age: 3 },   // Gillnets
      { id: 374, age: 3 },  // Careening
      { id: 375, age: 4 },  // Dry Dock
      { id: 373, age: 4 },  // Shipwright
    ]
  },

  // === TOWN CENTER ===
  {
    name: "Town Center",
    buildingId: 109,
    unitLines: [
      {
        name: "Villager",
        units: [
          { id: 83, age: 1 },  // Villager
        ]
      },
    ],
    techs: [
      { id: 22, age: 1 },   // Loom
      { id: 8, age: 2 },    // Town Watch
      { id: 213, age: 2 },  // Wheelbarrow
      { id: 280, age: 3 },  // Town Patrol
      { id: 249, age: 3 },  // Hand Cart
    ]
  },

  // === MARKET ===
  {
    name: "Market",
    buildingId: 84,
    unitLines: [
      {
        name: "Trade Cart",
        units: [
          { id: 128, age: 2 },  // Trade Cart
        ]
      },
    ],
    techs: [
      { id: 19, age: 2 },   // Cartography
      { id: 48, age: 3 },   // Caravan
      { id: 23, age: 3 },   // Coinage
      { id: 17, age: 4 },   // Banking
      { id: 15, age: 4 },   // Guilds
    ]
  },

  // === MILL ===
  {
    name: "Mill",
    buildingId: 68,
    unitLines: [],
    techs: [
      { id: 14, age: 2 },  // Horse Collar
      { id: 13, age: 3 },  // Heavy Plow
      { id: 12, age: 4 },  // Crop Rotation
    ]
  },

  // === LUMBER CAMP ===
  {
    name: "Lumber Camp",
    buildingId: 562,
    unitLines: [],
    techs: [
      { id: 202, age: 2 },  // Double-Bit Axe
      { id: 203, age: 3 },  // Bow Saw
      { id: 221, age: 4 },  // Two-Man Saw
    ]
  },

  // === MINING CAMP ===
  {
    name: "Mining Camp",
    buildingId: 584,
    unitLines: [],
    techs: [
      { id: 55, age: 2 },   // Gold Mining
      { id: 182, age: 4 },  // Gold Shaft Mining
      { id: 278, age: 2 },  // Stone Mining
      { id: 279, age: 4 },  // Stone Shaft Mining
    ]
  },
];

// Age labels
const AGE_NAMES = ['', 'Dark Age', 'Feudal Age', 'Castle Age', 'Imperial Age'];
