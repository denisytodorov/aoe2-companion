// === Strategy Data ===
// Source: YouTube video on ideal strategies for every AoE2 civilization
// Covers opening (Dark/Feudal Age) through Castle Age for 1v1 Arabia
// Ideal compositions sourced from Google Sheets
const STRATEGIES = {
  "Armenians": {
    opening: "Scout Rush mixed with Spearmen. You can make Spears in Dark Age, so send a couple forward early for pressure, then follow up with Scouts.",
    castleAge: "Get to Castle Age quickly and build Fortified Churches for Relic control with Warrior Priests. Play Knights initially, then transition to unique units, Champions, or Halberdiers.",
    keyTips: [
      "Dark Age Spears give early pressure before Scouts even arrive",
      "Relic control with Warrior Priests is your primary Castle Age objective",
      "Fortified Churches are the key power spike — rush to them",
    ],
    idealComp: "Warrior Priest + Skirmisher",
  },
  "Aztecs": {
    opening: "Eagle Warrior + one Archery Range. Go Eagles + Skirmishers vs. Archer civs, or Eagles + Archers vs. other civs.",
    castleAge: "Eagle Warrior + Pikeman + Monks. The Eagle-Monk composition is extremely strong with Aztecs.",
    keyTips: [
      "Infantry-heavy play is the way to go",
      "Eagle + Monk is the best Castle Age composition for Aztecs by far",
      "Mix Eagles with the correct Range unit depending on what you face",
    ],
    idealComp: "Eagle Warrior + Skirmisher + Monk + Trebuchet",
  },
  "Bengalis": {
    opening: "Scout Rush or Archer Rush. Avoid infantry — you want to make use of the extra 2 Villagers you get in Feudal Age with a fast Feudal into a solid opening.",
    castleAge: "If you went Scouts, transition to Light Cav + Monks (no Knights available). If Archers, go into Crossbow or Elephant Archers. Monk play is huge with this civ.",
    keyTips: [
      "Fast Feudal to capitalize on the extra Villagers",
      "Don't make Knights in Castle Age — use Light Cav or Monks instead",
      "No Thumb Ring, but Archers into Crossbow still works well",
      "Monks are essential with Bengalis",
    ],
    idealComp: "Ratha + Halberdier/Skirmisher/Light Cav + Elephants/Trebuchet",
  },
  "Berbers": {
    opening: "Scout Rush. This gives you the best flexibility to transition into Camel Archer, Genitour, or Stable units (Knights, Camels, Light Cav).",
    castleAge: "Camel Archer + Genitour is the ideal composition. The Stable also gives access to Bloodlines and Husbandry for these units.",
    keyTips: [
      "Berbers don't get many Feudal Age bonuses — play passively",
      "You really pop off from Castle Age onwards",
      "Camel Archer is your best unit — get to it through the Stable opening",
    ],
    idealComp: "Camel Archer + Hussar + Bombard Cannon/Trebuchet",
  },
  "Bohemians": {
    opening: "Archers and Spears. Play a passive Feudal Age and aim to reach Castle Age as fast as possible.",
    castleAge: "Chemistry Crossbow or Hand Cannoneers. Free gold and stone mining techs smooth out your economy. Hand Cannoneers in Castle Age are extremely strong.",
    keyTips: [
      "Passive Feudal is ideal — your civ comes online in Castle Age",
      "Free mining techs give you a smooth economy",
      "Hand Cannoneers in Castle Age is probably the best strategy",
    ],
    idealComp: "Halberdier + Houfnice + Arbalester",
  },
  "Britons": {
    opening: "One-range Archer opening. Play a relatively passive Feudal Age. Sometimes mix in Militia or Scouts, but Archers are the priority.",
    castleAge: "Extra-range Crossbow + cheaper Town Centers. This sets you up perfectly for the rest of the game.",
    keyTips: [
      "Archers as much as possible is the ideal strategy",
      "Goal is to reach Castle Age where your range bonus and cheaper TCs kick in",
      "Simple effective gameplan — don't overcomplicate it",
    ],
    idealComp: "Longbowman/Arbalester + Halberdier + Trebuchet",
  },
  "Bulgarians": {
    opening: "Men-at-Arms rush. Free Men-at-Arms upgrade makes this very effective. Follow up with a quick Range + Blacksmith or Stable for continued pressure.",
    castleAge: "Krepost rush with heavy army presence. Make the game as messy as possible while maintaining map control for forward Kreposts.",
    keyTips: [
      "Free Men-at-Arms makes the rush extremely cost-effective",
      "Lots of army in Feudal Age is the way to go",
      "Map control is crucial for setting up forward Kreposts",
      "Keep the game messy and aggressive",
    ],
    idealComp: "Hussar + Siege Onager/Ram + Halberdier",
  },
  "Burgundians": {
    opening: "The 'nothing' opening. Go up to Feudal and wall up with maybe a Stable or a couple Spears. Play as defensive as possible — pick up Bow Saw and Heavy Plow.",
    castleAge: "Light Cavalry + Monks or Cavalier + Monks for Relic control. The more passive your Feudal, the more your eco techs pay off.",
    keyTips: [
      "Passive Feudal is the best Feudal for Burgundians",
      "Picking up Relics is the #1 gameplan",
      "Once you get Relics, the game becomes very easy to win",
      "Early eco tech advantage compounds over time",
    ],
    idealComp: "Coustillier + Hand Cannoneer + Bombard Cannon/Trebuchet (+Flemish Rev if 140+ vills)",
  },
  "Burmese": {
    opening: "Two Militia Feudal drush (Dark Age rush). Takes advantage of +1 attack in Feudal and the strong economy without over-investing like Men-at-Arms would.",
    castleAge: "Follow up with a Range or Stable and play a standard game. The early drush gives a small punch without heavy commitment.",
    keyTips: [
      "+1 attack makes Militia surprisingly effective in Dark/Feudal",
      "Two Militia drush is less investment than Men-at-Arms",
      "Lets you transition smoothly into Range or Stable play",
    ],
    idealComp: "Halberdier + Arambai + Monk + Bombard Cannon/Trebuchet",
  },
  "Byzantines": {
    opening: "Skirmisher + Spearman rush. These are your discounted counter units — lean into them.",
    castleAge: "Continue with Elite Skirmisher + Pikeman, or switch to Camels. Keep using discounted counter units while developing your economy toward Imperial Age.",
    keyTips: [
      "Discounted counter units are your bread and butter",
      "Develop economy behind cheap Skirm/Spear pressure",
      "Goal is to reach Imperial Age where Byzantines are very strong",
    ],
    idealComp: "Halberdier + Skirmisher + Monk + Bombard Cannon/Trebuchet + Cataphract/Heavy Camel/Hand Cannoneer",
  },
  "Celts": {
    opening: "Two Militia Feudal drush, then transition to Ranges. Being on Ranges (Archers or Skirms) is the best way to take advantage of the wood bonus.",
    castleAge: "Ranges set up nicely for Siege play. Alternatively, go Stable into Knights + Siege, but without Bloodlines you'd need a committed push.",
    keyTips: [
      "Wood bonus shines when you're on Range units",
      "Two Militia drush is less investment than Men-at-Arms",
      "Range play naturally transitions into strong Siege in Castle Age",
      "If going Knights, commit to an all-in since you lack Bloodlines",
    ],
    idealComp: "Halberdier + Siege Onager + Siege Ram + Trebuchet",
  },
  "Chinese": {
    opening: "Scout Rush. Most flexible and versatile opening. Survive the early Feudal Age and let your extra Villagers pay off — you'll be ahead by default.",
    castleAge: "Anything — the Scout opening keeps all options open. Chinese have one of the most flexible tech trees in the game.",
    keyTips: [
      "Scouts is the most versatile strategy, perfect for Chinese",
      "Just survive early Feudal and your extra Vills do the rest",
      "Flexibility is the Chinese strength — adapt to your opponent",
    ],
    idealComp: "Chu Ko Nu/Arbalester + Light Cav + Trebuchet",
  },
  "Cumans": {
    opening: "Second Town Center in Feudal Age. If you can do this uncontested, you will almost certainly win. Sometimes you need Archers, a Stable, or Spears to survive.",
    castleAge: "The 2 TC boom will put you massively ahead going into Castle Age.",
    keyTips: [
      "2 TC in Feudal is the absolute best Cuman strategy",
      "As long as you survive and stabilize on 2 TCs, you'll be fine",
      "Do whatever is needed to defend the 2 TC play",
      "If uncontested, it's basically a guaranteed win",
    ],
    idealComp: "Elite Kipchak + Hussar + Trebuchet",
  },
  "Dravidians": {
    opening: "Two-range opening with a mix of Archers and Skirmishers. Best way to use the 200 extra wood and faster-firing Skirms. Add Spears if worried about Scouts.",
    castleAge: "Continue pressuring. Take advantage of the power spike from extra wood per age.",
    keyTips: [
      "Put as much pressure as possible to use your early power spike",
      "Two Ranges gets the most value from the 200 starting wood",
      "Faster-firing Skirms are a nice bonus in the mix",
      "Pressure is key — Dravidians want to be aggressive",
    ],
    idealComp: "Skirmisher + Halberdier/Champion/Urumi Swordsman + Bombard Cannon (+Arbalester if needed)",
  },
  "Ethiopians": {
    opening: "One-range Archers, then wait for Castle Age.",
    castleAge: "Crossbow into whatever composition you need. Alternatively, Crossbow + one Stable Knight + forward Siege for an all-in push.",
    keyTips: [
      "Straightforward Archer civ — Archers into Crossbow",
      "Ethiopian Crossbow is very strong",
      "Can mix in Knights and Siege for a deadly Castle Age push",
    ],
    idealComp: "Arbalester + Halberdier + Bombard Cannon",
  },
  "Franks": {
    opening: "Scouts. The classic Frank opening.",
    castleAge: "Knights, and eventually Paladin. Scouts into Knights into Paladin is the dream.",
    keyTips: [
      "Scouts into Knights is the best gameplan for Franks",
      "Sometimes you need to mix in Skirmishers against counter units",
      "Keep it simple — Cavalry is what Franks do best",
    ],
    idealComp: "Paladin spam + Skirmisher/Hand Cannoneer/Throwing Axeman (vs Halberdier) + strong Castle push/Imp with 4+ Relics",
  },
  "Georgians": {
    opening: "Fast up into Scout Rush. Take advantage of healing Scouts aggressively.",
    castleAge: "Develop economy and get to Monaspa as soon as possible. Mass them while building up economy with Churches and Town Centers.",
    keyTips: [
      "Healing Scouts are very powerful — use them aggressively",
      "Monaspa is the key unit — rush to Castle Age for them",
      "Monaspa currently has no generic counter (may be nerfed in future patches)",
      "Economy + mass Monaspa = win condition",
    ],
    idealComp: "Mass Monaspa + Skirmisher",
  },
  "Goths": {
    opening: "Two Militia drush or Men-at-Arms, taking advantage of the extra hunt bonus. Alternatively, Scouts + Spearmen — cheaper Spears are great in Scout wars.",
    castleAge: "Infantry-heavy play. Use the cheaper infantry discount which scales through the ages.",
    keyTips: [
      "Infantry openings capitalize on your bonuses",
      "Scouts + Spears is equally good — cheaper Spears shine in Scout mirrors",
      "Extra hunt bonus helps sustain aggressive openings",
    ],
    idealComp: "Halberdier + Huskarl spam + Bombard Cannon/Trebuchet if needed",
  },
  "Gurjaras": {
    opening: "One-range Archer opening. Don't be tempted by Scouts or Camels in Feudal.",
    castleAge: "Crossbow + Camel. This is an insane composition and the best way to play Gurjaras.",
    keyTips: [
      "Crossbow + Camel in Castle Age is the target composition",
      "Archers in Feudal set up the Crossbow transition perfectly",
      "Resist the urge to go Scouts/Camels early — Archers are better",
    ],
    idealComp: "Chakram Thrower + Shrivamsha Rider/Hussar + Bombard Cannon/Trebuchet",
  },
  "Hindustanis": {
    opening: "Scout Rush and stay flexible. Two main follow-ups: switch to Archers for aggressive building pressure, or go into Camels/Light Cav.",
    castleAge: "Scouts + Archers can break into opponent's base using the bonus damage to buildings. Or transition to Camels/Light Cav for a standard game.",
    keyTips: [
      "Scouts doing more damage to buildings synergizes with Archer follow-up",
      "Scouts into Archers can win the game in Feudal Age",
      "Scouts into Camels/Light Cav is the safer alternative",
      "Stay flexible and read what your opponent is doing",
    ],
    idealComp: "1) Hand Cannoneer + Hussar + Bombard Cannon/Trebuchet 2) Imperial Camel + Skirmisher + Bombard Cannon/Trebuchet",
  },
  "Huns": {
    opening: "Scout Rush. Opens the door to all of the best Hun units in Castle Age.",
    castleAge: "Cavalry Archers or Light Cavalry/Knights. Having the Stable makes your opponent guess your transition.",
    keyTips: [
      "Scouts into CA or Scouts into Light Cav — both are excellent",
      "Don't go Archers into CA — being on Range units all game lets opponent counter with Skirms",
      "The mind game of Stable → CA or Stable → Knights is crucial",
      "Wall up after Scouts to keep your opponent guessing",
    ],
    idealComp: "Heavy Cav Archer + Hussar + Trebuchet",
  },
  "Incas": {
    opening: "Eagle Warrior + Range units. Best combo is Eagles + Skirmishers since you get a discount on food units. Eagles + Spears is also good.",
    castleAge: "Very flexible — Incas can do almost anything in Castle Age.",
    keyTips: [
      "Eagles + Skirms or Skirms + Spears are the best Feudal combos",
      "Food unit discount makes Eagles and Spears very cost-effective",
      "Pick your opening based on the matchup",
      "Castle Age flexibility is a major Inca strength",
    ],
    idealComp: "Kamayuk (vs cav civ)/Elite Eagle (vs archer civ) + Skirmisher + Trebuchet/Siege Ram",
  },
  "Italians": {
    opening: "Scout Rush or one-range Archers. Both are equally good and lead to strong Castle Age units.",
    castleAge: "Fully upgraded Knights or fully upgraded Crossbows — either works. Very versatile civ.",
    keyTips: [
      "Don't play infantry — it slows down your Castle Age timing",
      "Faster Castle Age is your best advantage",
      "Both Scouts and Archers lead to excellent Castle Age options",
      "Italians are more versatile than people think",
    ],
    idealComp: "Genoese Crossbowman + Hussar + Bombard Cannon",
  },
  "Japanese": {
    opening: "Men-at-Arms into fast Range transition. Japanese have a weaker late game so try to gain advantages early.",
    castleAge: "Range units are the best mid-game option — Crossbow, Skirmisher, or Cavalry Archer. CA is particularly strong.",
    keyTips: [
      "Try to end the game as early as possible",
      "Japanese late game is relatively weak",
      "Ranges in mid-game are the best way to use the civ",
      "Cavalry Archers especially scale well for Japanese",
    ],
    idealComp: "Halberdier + Arbalester + Yasama Tower + Trebuchet",
  },
  "Khmer": {
    opening: "Scout Rush + full wall. You don't have a Barracks, so you can't make Spearmen against enemy Scouts — walls are essential for defense.",
    castleAge: "Scouts into Knights, Light Cav, or more Scouts. Farms work insanely fast and don't need drop-off, so your food economy is incredible.",
    keyTips: [
      "Full wall is critical since you can't make Spears",
      "Use houses to stay safe during the Scout Rush",
      "Super-fast Farms give you an insane food economy",
      "Scouts into Knights or continued Scouts are both great",
    ],
    idealComp: "Hussar spam + Heavy Scorpion/Ballista Elephant/Arbalester + Trebuchet",
  },
  "Koreans": {
    opening: "Spear + Skirmisher or one-range Archers. Don't play Scouts or infantry — they slow you down.",
    castleAge: "Continue with wood-heavy units. Mix in Towers or Siege. The wood discount means you want as many wood units as possible.",
    keyTips: [
      "Spam wood units to maximize the wood discount",
      "Don't waste time on Scouts or infantry",
      "Scale into the mid-late game with cheap wood units",
      "Towers and Siege complement your strategy well in Castle Age",
    ],
    idealComp: "Halberdier + Arbalester/War Wagon (if enough res) + Tower + Bombard Cannon/Trebuchet",
  },
  "Lithuanians": {
    opening: "Scouts, or Spear + Skirmisher (even a forward Spear/Skirm rush). All are good openings.",
    castleAge: "Get 2 Relics with multiple Monasteries. Play CA + Knight, or Light Cav — whatever supports Relic control. Stay on 1 TC while fighting for Relics, then boom after.",
    keyTips: [
      "Getting 2 Relics in Castle Age is the #1 priority",
      "Consider 2 Monasteries to speed up Relic collection",
      "Stay on 1 TC while fighting for Relics, add TCs after",
      "Relics power up your Knights significantly",
    ],
    idealComp: "Elite Leitis (with Relics) + Skirmisher + Bombard Cannon/Trebuchet",
  },
  "Magyars": {
    opening: "Scout Rush. Cheaper Scouts + free Forging makes this opening insane. Go Scouts in 99% of cases.",
    castleAge: "Light Cav/Knights or Cavalry Archers. Both scale extremely well, similar to Huns.",
    keyTips: [
      "Cheaper Scouts + free Forging = best Scout Rush in the game",
      "Almost never deviate from Scouts as your opening",
      "Light Cav/Knights or CA are equally strong Castle Age options",
    ],
    idealComp: "Heavy Cav Archer + Magyar Hussar + Trebuchet",
  },
  "Malay": {
    opening: "Two Militia Feudal drush. Free infantry armor means Militia only take 2 damage from Villagers, making them obnoxious to deal with. Add Spears too.",
    castleAge: "Stick with Elephants or Range/Infantry units. Avoid Cavalry — it doesn't work well with Malay.",
    keyTips: [
      "Free armor makes the 2 Militia drush extremely effective",
      "Don't go Men-at-Arms — too fragile of a civ for that investment",
      "Sending Spears forward with the drush compounds the free armor value",
      "Avoid Cavalry in Castle Age — focus on Elephants or Range units",
    ],
    idealComp: "Halberdier + Arbalester + Bombard Cannon",
  },
  "Malians": {
    opening: "One-range Archers. The faster you use gold units, the more you benefit from the gold mining bonus.",
    castleAge: "Crossbow + as many gold units as possible. The gold bonus rewards you for spending gold aggressively.",
    keyTips: [
      "Gold unit spam maximizes your gold mining bonus",
      "Don't be tempted by Scouts — Archers get you on gold faster",
      "More gold units = more advantage from the bonus",
    ],
    idealComp: "Cavalier/Light Cav/Heavy Camel + Gbeto/Hand Cannoneer + Bombard Cannon",
  },
  "Mayans": {
    opening: "Eagles + Archers. Cheaper Archers make this the ideal combo (similar to Aztecs/Incas but with Archers instead of Skirms).",
    castleAge: "Crossbow is the priority. Boom toward Imperial Age where you can play with all kinds of gold units. Plumed Archers are the dream.",
    keyTips: [
      "Eagles + Archers is the best Feudal combination",
      "Cheaper Archers give great value",
      "Goal is to boom into Imperial on Plumed Archers/Crossbow",
      "Mayans want to reach Imperial Age",
    ],
    idealComp: "Halberdier/Elite Eagle + Arbalester/Plumed Archer + Siege Ram/Trebuchet",
  },
  "Mongols": {
    opening: "Scout Rush. Can also try a cheesy Fast Castle into Steppe Lancers (high risk/high reward).",
    castleAge: "Steppe Lancers are absolutely busted for Mongols right now. Scouts into Steppe Lancers is insane. Alternatively CA or Mangudai.",
    keyTips: [
      "Scouts into Steppe Lancers is the best current strategy",
      "FC Steppe Lancers is a strong cheese option",
      "CA or Mangudai are the backup options",
      "Just open Scouts and you'll have a good time with Mongols",
    ],
    idealComp: "Mangudai + Hussar + Siege Ram/Onager",
  },
  "Persians": {
    opening: "Scout Rush into Knights, Camels, or Light Cav.",
    castleAge: "Continue with Cavalry units and boom toward late game. Persian CA sounds appealing but Parthian Tactics is expensive in Castle Age and the bonus isn't strong enough.",
    keyTips: [
      "Cavalry units are the way to go — don't bother with CA",
      "Boom toward Savars in the late game",
      "Keep it simple with Stable units",
    ],
    idealComp: "Paladin (no Elephants) + Crossbowman/Skirmisher + Bombard Cannon/Trebuchet",
  },
  "Poles": {
    opening: "Scout Rush + wall, or Tower Rush. Tower Rush is arguably the best opening if the map supports it. Otherwise, Scout + wall to secure your farms.",
    castleAge: "Boom and all-in Knights with the unique tech. Securing Folwark farms is the #1 economic priority.",
    keyTips: [
      "Tower Rush is extremely effective if the map allows it",
      "Scouts + walls is the safer alternative",
      "Securing 4+ Folwark farms is the key economic strategy",
      "All-in Knights with Szlachta Privileges is the Castle Age play",
    ],
    idealComp: "1) Winged Hussar + Arbalester + Bombard Cannon/Trebuchet 2) Obuch + Skirmisher + Bombard Cannon/Trebuchet",
  },
  "Portuguese": {
    opening: "One-range Archers. Make as many gold units as possible to take advantage of the gold discount.",
    castleAge: "Crossbow into Crossbow + Knight or Crossbow + Siege. Gold units are always the priority.",
    keyTips: [
      "Gold units are always the priority — maximize the discount",
      "Can open with a couple Militia for a small discount benefit, but Archers are better",
      "Similar philosophy to Malians — spam gold units",
    ],
    idealComp: "Arbalester/Organ Gun + Light Cav/Halberdier + Bombard Cannon + Feitoria + Bombard Tower",
  },
  "Romans": {
    opening: "Scout Rush. Men-at-Arms + infantry armor is tempting but overcommits to Feudal Age and is easy to stop with Ranges.",
    castleAge: "Transition from Scouts to Longswords. Scout + Spear opening lets you farm efficiently and opens up options.",
    keyTips: [
      "Scout Rush takes better advantage of Roman economy",
      "Infantry opening is overrated — easy to counter",
      "Scouts into infantry transition in Castle Age is the ideal path",
    ],
    idealComp: "Legionary + Skirmisher + Scorpion",
  },
  "Saracens": {
    opening: "One-range Archers. Don't use infantry. Build a Market and aim for a fast Castle Age.",
    castleAge: "Archer + Siege push to break walls (bonus damage vs. buildings), or Crossbow + Camels. Camel HP bonus makes them dominant vs. Cavalry in early Castle.",
    keyTips: [
      "Crossbow + Camel is almost an auto-win vs. Cavalry civs",
      "Siege push with wall-breaking bonus is an alternative win condition",
      "Market helps you reach Castle Age faster",
      "Saracens are very strong right now",
    ],
    idealComp: "1) Arbalester/Heavy Cav Archer + Light Cav + Bombard Cannon/Trebuchet 2) Heavy Camel + Skirmisher + Bombard Cannon/Trebuchet 3) Mameluke spam",
  },
  "Sicilians": {
    opening: "Fast Castle into Serjeants. Cut Villager production, build a Donjon, and send Serjeants forward to build more Donjons in the enemy base.",
    castleAge: "Serjeant + Donjon forward is the deadliest opening. Standard alternative is Scouts + Spears for farming with Horse Collar, but it's much weaker.",
    keyTips: [
      "FC Serjeant is the best strategy by far",
      "Serjeants building Donjons in the enemy base is devastating",
      "The standard Scouts + Spears opening is serviceable but nowhere near as strong",
      "Commit to the cheese — it's the Sicilian strength",
    ],
    idealComp: "Cavalier (w/UT)/Serjeant + Skirmisher + Trebuchet",
  },
  "Slavs": {
    opening: "Scout Rush. Most flexible opening and farming bonus means you benefit from early farms.",
    castleAge: "Longswords (free Supplies + Gambesons) or Cavalry + Siege. Monks move faster, so Monks + Cavalry is a great combo.",
    keyTips: [
      "Scouts let you farm faster with the farming bonus",
      "Only go Ranges for defensive Skirmishers — otherwise stick to Cav or Infantry",
      "Faster Monks + Cavalry is a strong combo",
      "Longswords with free Supplies and Gambesons are surprisingly effective",
    ],
    idealComp: "Halberdier + Hussar + Siege Onager/Ram",
  },
  "Spanish": {
    opening: "Flexible — Scouts, Spear + Skirm, or even Archers all work. Treat Feudal as a transition period.",
    castleAge: "Get Conquistadors ASAP. Conqs + Monks/Missionaries or Conqs + Mangonel is a deadly Castle Age push.",
    keyTips: [
      "Conquistadors are your best unit — rush to them",
      "Feudal Age is just a bridge to Castle Age Conqs",
      "Secure Stone for a Castle to produce Conqs",
      "Conqs + Missionaries is a terrifying push",
    ],
    idealComp: "Supremacy Bombard Tower + Halberdier + Hussar",
  },
  "Tatars": {
    opening: "Scout Rush. Transition into Cavalry Archers (free Thumb Ring makes them insane) or Stable units (Steppe Lancers, Camels, Light Cav, Knights).",
    castleAge: "Cavalry Archers are the best scaling option. Stable units are also strong. Free Thumb Ring CA is the priority.",
    keyTips: [
      "Scouts into CA is the ideal path — free Thumb Ring is huge",
      "Stable options are equally viable as a backup",
      "One-range Archers into Thumb Ring Crossbow is the third best option",
      "CA scales much better than Crossbow for Tatars",
    ],
    idealComp: "1) Heavy Cav Archer + Hussar + Trebuchet 2) Keshik + Skirmisher + Trebuchet",
  },
  "Teutons": {
    opening: "Tower Rush. Free Murder Holes in Castle Age + garrison bonus makes Towers extremely strong. Sets up forward pressure without relying on mobility.",
    castleAge: "Established forward pressure from towers. Less reliant on mobility (no Husbandry). If not tower rushing, open Archers — cheaper Farms make the Range opening smooth.",
    keyTips: [
      "Tower Rush is the ideal opening — covers the mobility weakness",
      "Free Murder Holes is a huge Castle Age power spike for towers",
      "If you don't tower rush, Archers are better than Scouts (no Husbandry)",
      "Cheaper Farms + Archer opening develops your base smoothly",
    ],
    idealComp: "Halberdier + Monk + Siege Onager/Bombard Cannon/Trebuchet",
  },
  "Turks": {
    opening: "Scouts (play like Huns — into CA, Light Cav, Knight, or Camel), or one-range Archers (play like Saracens — into Archer + Camel or Archer + Light Cav).",
    castleAge: "Either Scouts into CA/Cavalry, or Archers into Archers + Camel/Light Cav. Both are equally good. Gunpowder is for specific scenarios only.",
    keyTips: [
      "Two equally good paths: Scouts route or Archers route",
      "Gold mining bonus supports either approach",
      "Generic units and strategies are better than rushing to gunpowder",
      "Save gunpowder for when the situation specifically calls for it",
    ],
    idealComp: "Heavy Cav Archer + Hussar + Bombard Cannon",
  },
  "Vietnamese": {
    opening: "Scouts into Skirmishers, or Spear + Skirm, or Scouts into Cavalry Archers. Not straight Archers despite being an Archer civ.",
    castleAge: "CA with extra HP feels amazing. Skirms are also strong. Avoid being stuck on pure Crossbow — no Camel to back them up.",
    keyTips: [
      "Don't default to one-range Archers — it's a trap with Vietnamese",
      "Scouts into Skirms or Scouts into CA are both better",
      "Straight Archers leaves you stuck on Crossbow with no Camel support",
      "Extra HP CA in Castle Age is very strong",
    ],
    idealComp: "Rattan Archer + Halberdier + Bombard Cannon",
  },
  "Vikings": {
    opening: "Two Militia Feudal drush. Extra HP on infantry + early pressure lets you seed farms behind it. Play a passive Feudal after the drush.",
    castleAge: "Economy-focused Castle Age. Pull ahead with free Wheelbarrow and Hand Cart. Aim for a faster Imperial Age timing.",
    keyTips: [
      "Drush into passive boom is the ideal Viking gameplan",
      "Free Wheelbarrow and Hand Cart give a massive economic edge",
      "Goal is to reach Imperial Age faster than your opponent",
      "Vikings' late game is weak — win with the early Imperial timing",
    ],
    idealComp: "Skirmisher + Berserker + Siege Ram/Trebuchet",
  },
};

// === Rendering ===
function renderStrategy(civName) {
  const container = document.getElementById('civ-strategy');
  if (!container) return;

  const strat = STRATEGIES[civName];

  if (!strat) {
    container.innerHTML = `<div class="strategy-section">
      <h3>Strategy Guide</h3>
      <p class="no-strategy">No strategy guide available for ${civName} yet.</p>
    </div>`;
    return;
  }

  let html = `<div class="strategy-section">
    <h3>Strategy Guide <span style="font-size:0.75rem;color:var(--text-secondary);text-transform:none;letter-spacing:0;">(1v1 Arabia)</span></h3>`;

  html += `<div class="strategy-block">
    <h4>Feudal Opening</h4>
    <p>${strat.opening}</p>
  </div>`;

  html += `<div class="strategy-block">
    <h4>Castle Age Plan</h4>
    <p>${strat.castleAge}</p>
  </div>`;

  if (strat.keyTips && strat.keyTips.length > 0) {
    html += `<div class="strategy-block">
      <h4>Key Tips</h4>
      <ul>${strat.keyTips.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`;
  }

  if (strat.idealComp) {
    html += `<div class="strategy-block">
      <h4>Ideal Composition</h4>`;
    if (strat.idealComp === "Coming soon") {
      html += `<p class="no-strategy">${strat.idealComp}</p>`;
    } else {
      html += `<p>${strat.idealComp}</p>`;
    }
    html += `</div>`;
  }

  html += '</div>';
  container.innerHTML = html;
}
