const RAW_ORES = [
  {
    "id": 0,
    "name": "Contraption",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Default"
  },
  {
    "id": 1,
    "name": "Scrap Plating",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Common"
  },
  {
    "id": 2,
    "name": "Iron Wiring",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Common"
  },
  {
    "id": 3,
    "name": "Rustbound Alloy",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Common"
  },
  {
    "id": 4,
    "name": "Gearstone",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Common"
  },
  {
    "id": 5,
    "name": "Circuit Ore",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Uncommon"
  },
  {
    "id": 6,
    "name": "Steel Lattice",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Uncommon"
  },
  {
    "id": 7,
    "name": "Pulse Conduit",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Uncommon"
  },
  {
    "id": 8,
    "name": "Mechasil",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Uncommon"
  },
  {
    "id": 9,
    "name": "Logic Crystal",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Rare"
  },
  {
    "id": 10,
    "name": "Servo Core",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Rare"
  },
  {
    "id": 11,
    "name": "Binary Alloy",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Rare"
  },
  {
    "id": 12,
    "name": "Neural Matrix",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Epic"
  },
  {
    "id": 13,
    "name": "Chrono Gear",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Epic"
  },
  {
    "id": 14,
    "name": "Synthetic Soulstone",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Epic"
  },
  {
    "id": 15,
    "name": "Planetary Engine Fragment",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Legendary"
  },
  {
    "id": 16,
    "name": "Omnicore Alloy",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Legendary"
  },
  {
    "id": 17,
    "name": "Machina Heartsteel",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Legendary"
  },
  {
    "id": 18,
    "name": "Singularity Processor",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Mythic"
  },
  {
    "id": 19,
    "name": "Deus Mechanica",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Mythic"
  },
  {
    "id": 20,
    "name": "Axiom Engine",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Ethereal"
  },
  {
    "id": 21,
    "name": "Ghostcode Prism",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Ethereal"
  },
  {
    "id": 22,
    "name": "The Prime Directive",
    "layer": "Contraption Layer",
    "depth": "2,701 and above",
    "rarity": "Celestial"
  },
  {
    "id": 23,
    "name": "Line Stone",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Default"
  },
  {
    "id": 24,
    "name": "Trianglium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Common"
  },
  {
    "id": 25,
    "name": "Squarite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Common"
  },
  {
    "id": 26,
    "name": "Circlite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Common"
  },
  {
    "id": 27,
    "name": "Rectite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Common"
  },
  {
    "id": 28,
    "name": "Kiteanium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Uncommon"
  },
  {
    "id": 29,
    "name": "Ovalium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Uncommon"
  },
  {
    "id": 30,
    "name": "Trapezide",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Uncommon"
  },
  {
    "id": 31,
    "name": "Calcynite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Uncommon"
  },
  {
    "id": 32,
    "name": "Octagonium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Rare"
  },
  {
    "id": 33,
    "name": "Pentagrium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Rare"
  },
  {
    "id": 34,
    "name": "Hexagrite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Rare"
  },
  {
    "id": 35,
    "name": "Crosilite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Epic"
  },
  {
    "id": 36,
    "name": "Loveilite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Epic"
  },
  {
    "id": 37,
    "name": "Snowtanium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Epic"
  },
  {
    "id": 38,
    "name": "Cindrillium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Legendary"
  },
  {
    "id": 39,
    "name": "Wedgilite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Legendary"
  },
  {
    "id": 40,
    "name": "Spherite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Legendary"
  },
  {
    "id": 41,
    "name": "Pi Circumferencium",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Mythic"
  },
  {
    "id": 42,
    "name": "Starlite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Mythic"
  },
  {
    "id": 43,
    "name": "Trishatterite",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Mythic"
  },
  {
    "id": 44,
    "name": "Geometrilekenetic Core",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Ethereal"
  },
  {
    "id": 45,
    "name": "N-Gon",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Ethereal"
  },
  {
    "id": 46,
    "name": "The Solids God of Geometric Mathematics",
    "layer": "Line Stone Layer",
    "depth": "2,401 to 2,700",
    "rarity": "Celestial"
  },
  {
    "id": 47,
    "name": "Asteroid Belt",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Default"
  },
  {
    "id": 48,
    "name": "Basalt Chunk",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Common"
  },
  {
    "id": 49,
    "name": "Celestium Ore",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Common"
  },
  {
    "id": 50,
    "name": "Nickel Nugget",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Common"
  },
  {
    "id": 51,
    "name": "Meteoroid",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Common"
  },
  {
    "id": 52,
    "name": "Cobalt Vein",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Uncommon"
  },
  {
    "id": 53,
    "name": "Platinum Fragment",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Uncommon"
  },
  {
    "id": 54,
    "name": "Iridium Cluster",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Uncommon"
  },
  {
    "id": 55,
    "name": "Iridanyte",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Uncommon"
  },
  {
    "id": 56,
    "name": "Meteor Gem",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Rare"
  },
  {
    "id": 57,
    "name": "Xenon Crystal",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Rare"
  },
  {
    "id": 58,
    "name": "Starsearite",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Rare"
  },
  {
    "id": 59,
    "name": "Void Crystal",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Epic"
  },
  {
    "id": 60,
    "name": "Gravitonium",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Epic"
  },
  {
    "id": 61,
    "name": "Gravonyx",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Epic"
  },
  {
    "id": 62,
    "name": "Cosmic Core",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Legendary"
  },
  {
    "id": 63,
    "name": "Star Ruby",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Legendary"
  },
  {
    "id": 64,
    "name": "Solenyte",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Legendary"
  },
  {
    "id": 65,
    "name": "Singularity Stone",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Mythic"
  },
  {
    "id": 66,
    "name": "Eclipseron",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Mythic"
  },
  {
    "id": 67,
    "name": "Fleeting Hope Final",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Ethereal"
  },
  {
    "id": 68,
    "name": "TURMOILED",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Ethereal"
  },
  {
    "id": 69,
    "name": "Ballic Wrath",
    "layer": "Asteroid Belt Layer",
    "depth": "2,001 to 2,400",
    "rarity": "Celestial"
  },
  {
    "id": 70,
    "name": "Space",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Default"
  },
  {
    "id": 71,
    "name": "Red Star",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Common"
  },
  {
    "id": 72,
    "name": "Orange Star",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Common"
  },
  {
    "id": 73,
    "name": "The Sun",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Common"
  },
  {
    "id": 74,
    "name": "Scrapyx",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Common"
  },
  {
    "id": 75,
    "name": "Meteor",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Uncommon"
  },
  {
    "id": 76,
    "name": "Asteroid",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Uncommon"
  },
  {
    "id": 77,
    "name": "Moon",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Uncommon"
  },
  {
    "id": 78,
    "name": "Noctyrite",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Uncommon"
  },
  {
    "id": 79,
    "name": "Dwarf Planet",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Rare"
  },
  {
    "id": 80,
    "name": "Satellite",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Rare"
  },
  {
    "id": 81,
    "name": "Cosmaril",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Rare"
  },
  {
    "id": 82,
    "name": "Planet",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Epic"
  },
  {
    "id": 83,
    "name": "Comet",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Epic"
  },
  {
    "id": 84,
    "name": "Umbryx",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Epic"
  },
  {
    "id": 85,
    "name": "Planet Ring",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Legendary"
  },
  {
    "id": 86,
    "name": "The ISS",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Legendary"
  },
  {
    "id": 87,
    "name": "Astralyth",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Legendary"
  },
  {
    "id": 88,
    "name": "Oumuamua",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Mythic"
  },
  {
    "id": 89,
    "name": "Aetherion",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Mythic"
  },
  {
    "id": 90,
    "name": "Cupola",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Ethereal"
  },
  {
    "id": 91,
    "name": "Galaxium",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Ethereal"
  },
  {
    "id": 92,
    "name": "TUDOL",
    "layer": "Space Layer",
    "depth": "1,701 to 2,000",
    "rarity": "Celestial"
  },
  {
    "id": 93,
    "name": "High Sky",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Default"
  },
  {
    "id": 94,
    "name": "Jet Contrails",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Common"
  },
  {
    "id": 95,
    "name": "Sun Rays",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Common"
  },
  {
    "id": 96,
    "name": "Thin Clouds",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Common"
  },
  {
    "id": 97,
    "name": "Aeronyx",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Common"
  },
  {
    "id": 98,
    "name": "Drone",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Uncommon"
  },
  {
    "id": 99,
    "name": "Mega Cloud",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Uncommon"
  },
  {
    "id": 100,
    "name": "Foggy Atmosphere",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Uncommon"
  },
  {
    "id": 101,
    "name": "Nimbryl",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Uncommon"
  },
  {
    "id": 102,
    "name": "Falling Space Junk",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Rare"
  },
  {
    "id": 103,
    "name": "Solar Eclipse",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Rare"
  },
  {
    "id": 104,
    "name": "Solarium Ore",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Rare"
  },
  {
    "id": 105,
    "name": "Rocket",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Epic"
  },
  {
    "id": 106,
    "name": "UFO",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Epic"
  },
  {
    "id": 107,
    "name": "Zephyrosite",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Epic"
  },
  {
    "id": 108,
    "name": "Aurora Borealis",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Legendary"
  },
  {
    "id": 109,
    "name": "Glowing Clouds",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Legendary"
  },
  {
    "id": 110,
    "name": "Tempestralith",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Legendary"
  },
  {
    "id": 111,
    "name": "Firmament",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Mythic"
  },
  {
    "id": 112,
    "name": "Stratonium",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Mythic"
  },
  {
    "id": 113,
    "name": "Celestium",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Ethereal"
  },
  {
    "id": 114,
    "name": "Cometium",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Ethereal"
  },
  {
    "id": 115,
    "name": "Made in Heaven",
    "layer": "High Sky Layer",
    "depth": "1,301 to 1,700",
    "rarity": "Celestial"
  },
  {
    "id": 116,
    "name": "Sky",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Default"
  },
  {
    "id": 117,
    "name": "White Cloud",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Common"
  },
  {
    "id": 118,
    "name": "Light Gray Cloud",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Common"
  },
  {
    "id": 119,
    "name": "Dark Gray Cloud",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Common"
  },
  {
    "id": 120,
    "name": "Breezium",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Common"
  },
  {
    "id": 121,
    "name": "Airplane",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Uncommon"
  },
  {
    "id": 122,
    "name": "Kite",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Uncommon"
  },
  {
    "id": 123,
    "name": "Bird",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Uncommon"
  },
  {
    "id": 124,
    "name": "Ventryx",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Uncommon"
  },
  {
    "id": 125,
    "name": "Private Jet",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Rare"
  },
  {
    "id": 126,
    "name": "Weather Balloon",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Rare"
  },
  {
    "id": 127,
    "name": "Helicopter",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Rare"
  },
  {
    "id": 128,
    "name": "Blimp",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Epic"
  },
  {
    "id": 129,
    "name": "Military Helicopter",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Epic"
  },
  {
    "id": 130,
    "name": "Voltacite",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Epic"
  },
  {
    "id": 131,
    "name": "Thunderstorm",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Legendary"
  },
  {
    "id": 132,
    "name": "Tornado",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Legendary"
  },
  {
    "id": 133,
    "name": "Celestara",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Legendary"
  },
  {
    "id": 134,
    "name": "Volcano",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Mythic"
  },
  {
    "id": 135,
    "name": "Skynexium",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Mythic"
  },
  {
    "id": 136,
    "name": "Aetherium Crystal",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Ethereal"
  },
  {
    "id": 137,
    "name": "Tesseract Core",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Ethereal"
  },
  {
    "id": 138,
    "name": "TERRARVM",
    "layer": "Sky Layer",
    "depth": "1,001 to 1,300",
    "rarity": "Celestial"
  },
  {
    "id": 139,
    "name": "Grass",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Default"
  },
  {
    "id": 140,
    "name": "Fescue",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Common"
  },
  {
    "id": 141,
    "name": "Moneywort",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Common"
  },
  {
    "id": 142,
    "name": "Quack Grass",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Common"
  },
  {
    "id": 143,
    "name": "Goose Grass",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Common"
  },
  {
    "id": 144,
    "name": "Patch of Grass",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Uncommon"
  },
  {
    "id": 145,
    "name": "Dallis Grass",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Uncommon"
  },
  {
    "id": 146,
    "name": "Horsetail",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Uncommon"
  },
  {
    "id": 147,
    "name": "Verdanyte",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Uncommon"
  },
  {
    "id": 148,
    "name": "Italian White",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Rare"
  },
  {
    "id": 149,
    "name": "Mallow",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Rare"
  },
  {
    "id": 150,
    "name": "Witch Grass",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Rare"
  },
  {
    "id": 151,
    "name": "Speedwell",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Epic"
  },
  {
    "id": 152,
    "name": "Young Plant",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Epic"
  },
  {
    "id": 153,
    "name": "Floracite",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Epic"
  },
  {
    "id": 154,
    "name": "Yarrow",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Legendary"
  },
  {
    "id": 155,
    "name": "Dandelions",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Legendary"
  },
  {
    "id": 156,
    "name": "Elarion",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Legendary"
  },
  {
    "id": 157,
    "name": "Four Leaf Clovers",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Mythic"
  },
  {
    "id": 158,
    "name": "Sylvanyth",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Mythic"
  },
  {
    "id": 159,
    "name": "Blessed Ore",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Ethereal"
  },
  {
    "id": 160,
    "name": "Eclipsera",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Ethereal"
  },
  {
    "id": 161,
    "name": "Hsixia",
    "layer": "Grass Layer",
    "depth": "751 to 1,000",
    "rarity": "Celestial"
  },
  {
    "id": 162,
    "name": "Deep Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Default"
  },
  {
    "id": 163,
    "name": "Dead Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Common"
  },
  {
    "id": 164,
    "name": "Wet Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Common"
  },
  {
    "id": 165,
    "name": "Fertile Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Common"
  },
  {
    "id": 166,
    "name": "Patchy Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Common"
  },
  {
    "id": 167,
    "name": "Frozen Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Uncommon"
  },
  {
    "id": 168,
    "name": "Cracked Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Uncommon"
  },
  {
    "id": 169,
    "name": "Fake Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Uncommon"
  },
  {
    "id": 170,
    "name": "Xylogranite",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Uncommon"
  },
  {
    "id": 171,
    "name": "Rooted Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Rare"
  },
  {
    "id": 172,
    "name": "Seeded Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Rare"
  },
  {
    "id": 173,
    "name": "Ambryth",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Rare"
  },
  {
    "id": 174,
    "name": "Alien Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Epic"
  },
  {
    "id": 175,
    "name": "Moon's Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Epic"
  },
  {
    "id": 176,
    "name": "Druanite",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Epic"
  },
  {
    "id": 177,
    "name": "Worm Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Legendary"
  },
  {
    "id": 178,
    "name": "Touched Grass",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Legendary"
  },
  {
    "id": 179,
    "name": "Terravine",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Legendary"
  },
  {
    "id": 180,
    "name": "Crater",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Mythic"
  },
  {
    "id": 181,
    "name": "Gaialite",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Mythic"
  },
  {
    "id": 182,
    "name": "Plasma Fire",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Ethereal"
  },
  {
    "id": 183,
    "name": "Gideon",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Ethereal"
  },
  {
    "id": 184,
    "name": "Φοβος",
    "layer": "Deep Grass Layer",
    "depth": "501 to 750",
    "rarity": "Celestial"
  },
  {
    "id": 185,
    "name": "Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Default"
  },
  {
    "id": 186,
    "name": "Grassy Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Common"
  },
  {
    "id": 187,
    "name": "Fungi Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Common"
  },
  {
    "id": 188,
    "name": "Tilled Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Common"
  },
  {
    "id": 189,
    "name": "Claythium",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Common"
  },
  {
    "id": 190,
    "name": "Plant Rooted Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Uncommon"
  },
  {
    "id": 191,
    "name": "Infected Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Uncommon"
  },
  {
    "id": 192,
    "name": "Sun-receiving Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Uncommon"
  },
  {
    "id": 193,
    "name": "Loamyx",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Uncommon"
  },
  {
    "id": 194,
    "name": "Tree Rooted Dirt",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Rare"
  },
  {
    "id": 195,
    "name": "Trash Infected Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Rare"
  },
  {
    "id": 196,
    "name": "Sedryx",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Rare"
  },
  {
    "id": 197,
    "name": "Mega Dirt",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Epic"
  },
  {
    "id": 198,
    "name": "Spider Nested Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Epic"
  },
  {
    "id": 199,
    "name": "Rubrath",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Epic"
  },
  {
    "id": 200,
    "name": "Rubber Duck Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Legendary"
  },
  {
    "id": 201,
    "name": "Paper Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Legendary"
  },
  {
    "id": 202,
    "name": "Shalorite",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Legendary"
  },
  {
    "id": 203,
    "name": "Package Mud",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Mythic"
  },
  {
    "id": 204,
    "name": "Terralyth",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Mythic"
  },
  {
    "id": 205,
    "name": "Greyscale Sword and the Stars",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Ethereal"
  },
  {
    "id": 206,
    "name": "Zero",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Ethereal"
  },
  {
    "id": 207,
    "name": "Aurora ⇋ The ⇋ Final",
    "layer": "Mud Layer",
    "depth": "251 to 500",
    "rarity": "Celestial"
  },
  {
    "id": 208,
    "name": "Packed Mud",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Default"
  },
  {
    "id": 209,
    "name": "Compact Mud",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Common"
  },
  {
    "id": 210,
    "name": "Water Deposited Mud",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Common"
  },
  {
    "id": 211,
    "name": "Plant Mud",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Common"
  },
  {
    "id": 212,
    "name": "Myrstone",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Common"
  },
  {
    "id": 213,
    "name": "Wheel",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Uncommon"
  },
  {
    "id": 214,
    "name": "Mud Town",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Uncommon"
  },
  {
    "id": 215,
    "name": "Dirty Mud",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Uncommon"
  },
  {
    "id": 216,
    "name": "Tynarite",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Uncommon"
  },
  {
    "id": 217,
    "name": "Skeleton",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Rare"
  },
  {
    "id": 218,
    "name": "Treasure",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Rare"
  },
  {
    "id": 219,
    "name": "Alien Mud",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Rare"
  },
  {
    "id": 220,
    "name": "Nokia",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Epic"
  },
  {
    "id": 221,
    "name": "Nuclear Waste",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Epic"
  },
  {
    "id": 222,
    "name": "Geodyne",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Epic"
  },
  {
    "id": 223,
    "name": "Oil Deposit",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Legendary"
  },
  {
    "id": 224,
    "name": "Motor Oil",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Legendary"
  },
  {
    "id": 225,
    "name": "Aurivine",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Legendary"
  },
  {
    "id": 226,
    "name": "Prehistoric Mud",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Mythic"
  },
  {
    "id": 227,
    "name": "Terracron",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Mythic"
  },
  {
    "id": 228,
    "name": "Genesium",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Ethereal"
  },
  {
    "id": 229,
    "name": "Antique Energy",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Ethereal"
  },
  {
    "id": 230,
    "name": "Pure Sanctarite",
    "layer": "Packed Mud Layer",
    "depth": "101 to 250",
    "rarity": "Celestial"
  },
  {
    "id": 231,
    "name": "Dirt",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Default"
  },
  {
    "id": 232,
    "name": "Sand",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Common"
  },
  {
    "id": 233,
    "name": "Silt",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Common"
  },
  {
    "id": 234,
    "name": "Clay",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Common"
  },
  {
    "id": 235,
    "name": "Gravellium",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Common"
  },
  {
    "id": 236,
    "name": "Loam",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Uncommon"
  },
  {
    "id": 237,
    "name": "Peat",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Uncommon"
  },
  {
    "id": 238,
    "name": "Chalk",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Uncommon"
  },
  {
    "id": 239,
    "name": "Ferronyx",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Uncommon"
  },
  {
    "id": 240,
    "name": "Compost",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Rare"
  },
  {
    "id": 241,
    "name": "Gravel",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Rare"
  },
  {
    "id": 242,
    "name": "Landscape",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Rare"
  },
  {
    "id": 243,
    "name": "Entisols",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Epic"
  },
  {
    "id": 244,
    "name": "Aridisols",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Epic"
  },
  {
    "id": 245,
    "name": "Crimora",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Epic"
  },
  {
    "id": 246,
    "name": "Inceptisols",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Legendary"
  },
  {
    "id": 247,
    "name": "Gelisols",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Legendary"
  },
  {
    "id": 248,
    "name": "Amarion",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Legendary"
  },
  {
    "id": 249,
    "name": "Jermanite",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Mythic"
  },
  {
    "id": 250,
    "name": "Atmospheric Concentrator",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Mythic"
  },
  {
    "id": 251,
    "name": "Sands Of Time",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Ethereal"
  },
  {
    "id": 252,
    "name": "Toerium",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Ethereal"
  },
  {
    "id": 253,
    "name": "Beethoven's Silence",
    "layer": "Dirt Layer",
    "depth": "100 to -99",
    "rarity": "Celestial"
  },
  {
    "id": 254,
    "name": "Packed Dirt",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Default"
  },
  {
    "id": 255,
    "name": "Roots",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Common"
  },
  {
    "id": 256,
    "name": "Fungus",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Common"
  },
  {
    "id": 257,
    "name": "Mushrooms",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Common"
  },
  {
    "id": 258,
    "name": "Compaxite",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Common"
  },
  {
    "id": 259,
    "name": "Potatoes",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Uncommon"
  },
  {
    "id": 260,
    "name": "Beets",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Uncommon"
  },
  {
    "id": 261,
    "name": "Parsnips",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Uncommon"
  },
  {
    "id": 262,
    "name": "Bronzium",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Uncommon"
  },
  {
    "id": 263,
    "name": "Ginger",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Rare"
  },
  {
    "id": 264,
    "name": "Turmeric",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Rare"
  },
  {
    "id": 265,
    "name": "Slathem",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Rare"
  },
  {
    "id": 266,
    "name": "Gophers Tunnel",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Epic"
  },
  {
    "id": 267,
    "name": "Moles",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Epic"
  },
  {
    "id": 268,
    "name": "Rubrasyte",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Epic"
  },
  {
    "id": 269,
    "name": "Mollisols",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Legendary"
  },
  {
    "id": 270,
    "name": "Broken Pottery",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Legendary"
  },
  {
    "id": 271,
    "name": "Obryx Opal",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Legendary"
  },
  {
    "id": 273,
    "name": "Pure Hypercompressed Neutronium",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Ethereal"
  },
  {
    "id": 274,
    "name": "Plasma Core",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Ethereal"
  },
  {
    "id": 275,
    "name": "Back there Benjamin",
    "layer": "Packed Dirt Layer",
    "depth": "-100 to -199",
    "rarity": "Celestial"
  },
  {
    "id": 276,
    "name": "Dense Dirt",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Default"
  },
  {
    "id": 277,
    "name": "Garlic",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Common"
  },
  {
    "id": 278,
    "name": "Radish",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Common"
  },
  {
    "id": 279,
    "name": "Yucca",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Common"
  },
  {
    "id": 280,
    "name": "Jicama",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Common"
  },
  {
    "id": 281,
    "name": "Ants",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Uncommon"
  },
  {
    "id": 282,
    "name": "Bugs",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Uncommon"
  },
  {
    "id": 283,
    "name": "Jerusalem Crickets",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Uncommon"
  },
  {
    "id": 284,
    "name": "Argenyx",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Uncommon"
  },
  {
    "id": 285,
    "name": "Millipedes",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Rare"
  },
  {
    "id": 286,
    "name": "Termites",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Rare"
  },
  {
    "id": 287,
    "name": "Onythera",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Rare"
  },
  {
    "id": 288,
    "name": "Broken Weapons",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Epic"
  },
  {
    "id": 289,
    "name": "Old Coins",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Epic"
  },
  {
    "id": 290,
    "name": "Rubraxis",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Epic"
  },
  {
    "id": 291,
    "name": "Arrow Tips",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Legendary"
  },
  {
    "id": 292,
    "name": "Bones",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Legendary"
  },
  {
    "id": 293,
    "name": "Noctyra",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Legendary"
  },
  {
    "id": 294,
    "name": "Ancient Artifact",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Mythic"
  },
  {
    "id": 295,
    "name": "Umbrosite",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Mythic"
  },
  {
    "id": 296,
    "name": "Subspace Tripmine",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Ethereal"
  },
  {
    "id": 297,
    "name": "Chronos",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Ethereal"
  },
  {
    "id": 298,
    "name": "110011 1010010 1010010 110000 1010010 101110 110100 110000 110100",
    "layer": "Dense Dirt Layer",
    "depth": "-200 to -349",
    "rarity": "Celestial"
  },
  {
    "id": 299,
    "name": "Stone",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Default"
  },
  {
    "id": 300,
    "name": "Flint",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Common"
  },
  {
    "id": 301,
    "name": "Coquina",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Common"
  },
  {
    "id": 302,
    "name": "Dolomite",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Common"
  },
  {
    "id": 303,
    "name": "Travertine",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Common"
  },
  {
    "id": 304,
    "name": "Tufa",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Uncommon"
  },
  {
    "id": 305,
    "name": "Oolite",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Uncommon"
  },
  {
    "id": 306,
    "name": "Brecca",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Uncommon"
  },
  {
    "id": 307,
    "name": "Plumbryn",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Uncommon"
  },
  {
    "id": 308,
    "name": "Conglomerate",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Rare"
  },
  {
    "id": 309,
    "name": "Caliche",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Rare"
  },
  {
    "id": 310,
    "name": "Malacitea",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Rare"
  },
  {
    "id": 311,
    "name": "Sandstone",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Epic"
  },
  {
    "id": 312,
    "name": "Siltstone",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Epic"
  },
  {
    "id": 313,
    "name": "Saphyros",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Epic"
  },
  {
    "id": 314,
    "name": "Diatomite",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Legendary"
  },
  {
    "id": 315,
    "name": "Halite",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Legendary"
  },
  {
    "id": 316,
    "name": "Drakonyx",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Legendary"
  },
  {
    "id": 317,
    "name": "Crystal",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Mythic"
  },
  {
    "id": 318,
    "name": "Lithyrium",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Mythic"
  },
  {
    "id": 319,
    "name": "Many Nights Skies",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Ethereal"
  },
  {
    "id": 320,
    "name": "Chromalite",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Ethereal"
  },
  {
    "id": 321,
    "name": "Prismatic Quasar",
    "layer": "Stone Layer",
    "depth": "-350 to -549",
    "rarity": "Celestial"
  },
  {
    "id": 322,
    "name": "Packed Stone",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Default"
  },
  {
    "id": 323,
    "name": "Marble",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Common"
  },
  {
    "id": 324,
    "name": "Novaculite",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Common"
  },
  {
    "id": 325,
    "name": "Quartzite",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Common"
  },
  {
    "id": 326,
    "name": "Skarn",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Common"
  },
  {
    "id": 327,
    "name": "Gneiss",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Uncommon"
  },
  {
    "id": 328,
    "name": "Amphobolite",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Uncommon"
  },
  {
    "id": 329,
    "name": "Hornfels",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Uncommon"
  },
  {
    "id": 330,
    "name": "Zyntherium",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Uncommon"
  },
  {
    "id": 331,
    "name": "Slate",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Rare"
  },
  {
    "id": 332,
    "name": "Schist",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Rare"
  },
  {
    "id": 333,
    "name": "Phyllite",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Rare"
  },
  {
    "id": 334,
    "name": "Soapstone",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Epic"
  },
  {
    "id": 335,
    "name": "Anthracite",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Epic"
  },
  {
    "id": 336,
    "name": "Topazryn",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Epic"
  },
  {
    "id": 337,
    "name": "Mariposite",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Legendary"
  },
  {
    "id": 338,
    "name": "Verdite",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Legendary"
  },
  {
    "id": 339,
    "name": "Hemovyr",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Legendary"
  },
  {
    "id": 340,
    "name": "Lapis Lazulii",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Mythic"
  },
  {
    "id": 341,
    "name": "Volcarion",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Mythic"
  },
  {
    "id": 342,
    "name": "Thunderium",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Ethereal"
  },
  {
    "id": 343,
    "name": "Thefaimnilnilnil",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Ethereal"
  },
  {
    "id": 344,
    "name": "Umhullt von Leiden",
    "layer": "Packed Stone Layer",
    "depth": "-550 to -749",
    "rarity": "Celestial"
  },
  {
    "id": 345,
    "name": "Dense Stone",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Default"
  },
  {
    "id": 346,
    "name": "Diorite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Common"
  },
  {
    "id": 347,
    "name": "Andesite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Common"
  },
  {
    "id": 348,
    "name": "Rhyolite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Common"
  },
  {
    "id": 349,
    "name": "Granite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Common"
  },
  {
    "id": 350,
    "name": "Pegmatite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Uncommon"
  },
  {
    "id": 351,
    "name": "Gabbro",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Uncommon"
  },
  {
    "id": 352,
    "name": "Diabase",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Uncommon"
  },
  {
    "id": 353,
    "name": "Tungryth",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Uncommon"
  },
  {
    "id": 354,
    "name": "Basalt",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Rare"
  },
  {
    "id": 355,
    "name": "Plagioclase",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Rare"
  },
  {
    "id": 356,
    "name": "Jadyx",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Rare"
  },
  {
    "id": 357,
    "name": "Diacite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Epic"
  },
  {
    "id": 358,
    "name": "Sealth Copper",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Epic"
  },
  {
    "id": 359,
    "name": "Granyros",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Epic"
  },
  {
    "id": 360,
    "name": "Tuff",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Legendary"
  },
  {
    "id": 361,
    "name": "Bastneasite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Legendary"
  },
  {
    "id": 362,
    "name": "Nihytrite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Legendary"
  },
  {
    "id": 363,
    "name": "Fire Opal",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Mythic"
  },
  {
    "id": 364,
    "name": "Chasmite",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Mythic"
  },
  {
    "id": 365,
    "name": "Seraph",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Ethereal"
  },
  {
    "id": 366,
    "name": "Waterium Anchorage",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Ethereal"
  },
  {
    "id": 367,
    "name": "Jacob's descent into Eternity",
    "layer": "Dense Stone Layer",
    "depth": "-750 to -999",
    "rarity": "Celestial"
  },
  {
    "id": 368,
    "name": "Obsidian",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Default"
  },
  {
    "id": 369,
    "name": "Salaxum",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Common"
  },
  {
    "id": 370,
    "name": "Baxerite",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Common"
  },
  {
    "id": 371,
    "name": "Suprecerese",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Common"
  },
  {
    "id": 372,
    "name": "Volcrys",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Common"
  },
  {
    "id": 373,
    "name": "Vehicular Salaxum",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Uncommon"
  },
  {
    "id": 374,
    "name": "Deconogaron",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Uncommon"
  },
  {
    "id": 375,
    "name": "Bauxite",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Uncommon"
  },
  {
    "id": 376,
    "name": "Obrythite",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Uncommon"
  },
  {
    "id": 377,
    "name": "Scriolin",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Rare"
  },
  {
    "id": 378,
    "name": "Peragamite",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Rare"
  },
  {
    "id": 379,
    "name": "Lavaspite",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Rare"
  },
  {
    "id": 380,
    "name": "Muosic Obsidian",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Epic"
  },
  {
    "id": 381,
    "name": "Lascero Lamenta",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Epic"
  },
  {
    "id": 382,
    "name": "Dragon Glass",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Epic"
  },
  {
    "id": 383,
    "name": "Rainbow Obsidian",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Legendary"
  },
  {
    "id": 384,
    "name": "Xenotime",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Legendary"
  },
  {
    "id": 385,
    "name": "Voidstone",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Legendary"
  },
  {
    "id": 386,
    "name": "Monazite",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Mythic"
  },
  {
    "id": 388,
    "name": "Draconium",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Ethereal"
  },
  {
    "id": 389,
    "name": "Frosted Diamonds",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Ethereal"
  },
  {
    "id": 390,
    "name": "ΒΞDRΩCK",
    "layer": "Obsidian Layer",
    "depth": "-1,000 to -1,349",
    "rarity": "Celestial"
  },
  {
    "id": 391,
    "name": "Molten Obsidian",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Default"
  },
  {
    "id": 392,
    "name": "Silia",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Common"
  },
  {
    "id": 393,
    "name": "Emberium",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Common"
  },
  {
    "id": 394,
    "name": "Flamespawn",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Common"
  },
  {
    "id": 395,
    "name": "Pyrelith",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Common"
  },
  {
    "id": 396,
    "name": "Shimicala",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Uncommon"
  },
  {
    "id": 397,
    "name": "Graeconogaron",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Uncommon"
  },
  {
    "id": 398,
    "name": "Geris",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Uncommon"
  },
  {
    "id": 399,
    "name": "Ignarion",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Uncommon"
  },
  {
    "id": 400,
    "name": "Pyrrhomomite",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Rare"
  },
  {
    "id": 401,
    "name": "Dotorite",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Rare"
  },
  {
    "id": 402,
    "name": "Flaming Hate",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Rare"
  },
  {
    "id": 403,
    "name": "Centromodor",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Epic"
  },
  {
    "id": 404,
    "name": "Vaporeyester",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Epic"
  },
  {
    "id": 405,
    "name": "Wijkuled",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Epic"
  },
  {
    "id": 406,
    "name": "Blazestone",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Legendary"
  },
  {
    "id": 407,
    "name": "Terracite",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Legendary"
  },
  {
    "id": 408,
    "name": "Gustavon",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Legendary"
  },
  {
    "id": 409,
    "name": "Magmaium",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Mythic"
  },
  {
    "id": 410,
    "name": "Molten Shard",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Mythic"
  },
  {
    "id": 411,
    "name": "Blaze Glass",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Ethereal"
  },
  {
    "id": 412,
    "name": "Hell's Prison",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Ethereal"
  },
  {
    "id": 413,
    "name": "fαтє",
    "layer": "Molten Obsidian Layer",
    "depth": "-1,350 to -1,674",
    "rarity": "Celestial"
  },
  {
    "id": 414,
    "name": "Lava",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Default"
  },
  {
    "id": 415,
    "name": "Rainforged Basalt",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Common"
  },
  {
    "id": 416,
    "name": "Scoria",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Common"
  },
  {
    "id": 417,
    "name": "Pumice",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Common"
  },
  {
    "id": 418,
    "name": "Magmoryx",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Common"
  },
  {
    "id": 419,
    "name": "Solid Lava",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Uncommon"
  },
  {
    "id": 420,
    "name": "Divenestium",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Uncommon"
  },
  {
    "id": 421,
    "name": "Stellan",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Uncommon"
  },
  {
    "id": 422,
    "name": "Flarecryst",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Uncommon"
  },
  {
    "id": 423,
    "name": "Byrrzome",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Rare"
  },
  {
    "id": 424,
    "name": "Xapotote",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Rare"
  },
  {
    "id": 425,
    "name": "Astral Fire",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Rare"
  },
  {
    "id": 426,
    "name": "Gnixon",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Epic"
  },
  {
    "id": 427,
    "name": "Polonite",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Epic"
  },
  {
    "id": 428,
    "name": "Rohoccaim",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Epic"
  },
  {
    "id": 429,
    "name": "Heart of Fire",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Legendary"
  },
  {
    "id": 430,
    "name": "Embedded Sun",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Legendary"
  },
  {
    "id": 431,
    "name": "Pyrite",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Legendary"
  },
  {
    "id": 432,
    "name": "Hell",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Mythic"
  },
  {
    "id": 433,
    "name": "Sunstone",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Mythic"
  },
  {
    "id": 434,
    "name": "Burning Memory",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Mythic"
  },
  {
    "id": 435,
    "name": "Cracked Molten Ruby",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Ethereal"
  },
  {
    "id": 436,
    "name": "Distortion",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Ethereal"
  },
  {
    "id": 437,
    "name": "Destiny marches, like any Man",
    "layer": "Lava Layer",
    "depth": "-1,675 to -1,999",
    "rarity": "Celestial"
  },
  {
    "id": 438,
    "name": "Radioactive Stone",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Default"
  },
  {
    "id": 439,
    "name": "Uranium",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Common"
  },
  {
    "id": 440,
    "name": "Uraniumite",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Common"
  },
  {
    "id": 441,
    "name": "Gamite",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Common"
  },
  {
    "id": 442,
    "name": "Radionyx",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Common"
  },
  {
    "id": 443,
    "name": "Moptazik",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Uncommon"
  },
  {
    "id": 444,
    "name": "Paretium",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Uncommon"
  },
  {
    "id": 445,
    "name": "Limioactive",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Uncommon"
  },
  {
    "id": 446,
    "name": "Uvyrite",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Uncommon"
  },
  {
    "id": 447,
    "name": "Ratiteium",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Rare"
  },
  {
    "id": 448,
    "name": "Zoniumite",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Rare"
  },
  {
    "id": 449,
    "name": "Radium",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Rare"
  },
  {
    "id": 450,
    "name": "Whihite",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Epic"
  },
  {
    "id": 451,
    "name": "Adsimite",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Epic"
  },
  {
    "id": 452,
    "name": "Oganesson",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Epic"
  },
  {
    "id": 453,
    "name": "Prenium",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Legendary"
  },
  {
    "id": 454,
    "name": "Legenium",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Legendary"
  },
  {
    "id": 455,
    "name": "Kryptonite",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Legendary"
  },
  {
    "id": 456,
    "name": "Limonion",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Mythic"
  },
  {
    "id": 457,
    "name": "Ewudojjed",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Mythic"
  },
  {
    "id": 458,
    "name": "Mobile Phone",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Ethereal"
  },
  {
    "id": 459,
    "name": "Circuit",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Ethereal"
  },
  {
    "id": 460,
    "name": "Elephant's Foot",
    "layer": "Radioactive Stone Layer",
    "depth": "-2,000 to -2,399",
    "rarity": "Celestial"
  },
  {
    "id": 461,
    "name": "Toxic Obsidian",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Default"
  },
  {
    "id": 462,
    "name": "Crushed Rock",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Common"
  },
  {
    "id": 463,
    "name": "Oil Waste",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Common"
  },
  {
    "id": 464,
    "name": "Hardened Core",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Common"
  },
  {
    "id": 465,
    "name": "Cracked Bones",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Common"
  },
  {
    "id": 466,
    "name": "Artificial Cube",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Uncommon"
  },
  {
    "id": 467,
    "name": "Cracked Waste",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Uncommon"
  },
  {
    "id": 468,
    "name": "Prehistoric Bot Renmant",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Uncommon"
  },
  {
    "id": 469,
    "name": "Venomyth",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Uncommon"
  },
  {
    "id": 470,
    "name": "Lava Shards",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Rare"
  },
  {
    "id": 471,
    "name": "Molten Debris",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Rare"
  },
  {
    "id": 472,
    "name": "Red Beryl",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Rare"
  },
  {
    "id": 473,
    "name": "Painite",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Epic"
  },
  {
    "id": 474,
    "name": "Ancient Tool",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Epic"
  },
  {
    "id": 475,
    "name": "Actinium",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Epic"
  },
  {
    "id": 476,
    "name": "Sun Crystal",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Legendary"
  },
  {
    "id": 477,
    "name": "Hyperpressurized Waste",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Legendary"
  },
  {
    "id": 478,
    "name": "Plutonium",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Legendary"
  },
  {
    "id": 479,
    "name": "Frost Waste",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Mythic"
  },
  {
    "id": 480,
    "name": "Thorium",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Mythic"
  },
  {
    "id": 481,
    "name": "Cherenkov Crystal",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Ethereal"
  },
  {
    "id": 482,
    "name": "Stationary",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Ethereal"
  },
  {
    "id": 483,
    "name": "αи∂яσмє∂α",
    "layer": "Toxic Obsidian Layer",
    "depth": "-2,400 to -2,699",
    "rarity": "Celestial"
  },
  {
    "id": 484,
    "name": "Toxic Lava",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Default"
  },
  {
    "id": 485,
    "name": "Thorium Dioxide",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Common"
  },
  {
    "id": 486,
    "name": "Silica",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Common"
  },
  {
    "id": 487,
    "name": "Turbulent Ash",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Common"
  },
  {
    "id": 488,
    "name": "Pyroclast",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Common"
  },
  {
    "id": 489,
    "name": "Irradiated Dacite",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Uncommon"
  },
  {
    "id": 490,
    "name": "Topzite",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Uncommon"
  },
  {
    "id": 491,
    "name": "Cobalt",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Uncommon"
  },
  {
    "id": 492,
    "name": "Corrosyte",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Uncommon"
  },
  {
    "id": 493,
    "name": "Petrified Wavellite",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Rare"
  },
  {
    "id": 494,
    "name": "Deep Dirt",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Rare"
  },
  {
    "id": 495,
    "name": "Uranium Hexfloride",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Rare"
  },
  {
    "id": 496,
    "name": "Deformed Nephrite",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Epic"
  },
  {
    "id": 497,
    "name": "Legrandite",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Epic"
  },
  {
    "id": 498,
    "name": "Plasma",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Epic"
  },
  {
    "id": 499,
    "name": "Toximite",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Legendary"
  },
  {
    "id": 500,
    "name": "Polonium",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Legendary"
  },
  {
    "id": 501,
    "name": "Soulsand",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Legendary"
  },
  {
    "id": 502,
    "name": "Astatine",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Mythic"
  },
  {
    "id": 503,
    "name": "Zefendite",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Mythic"
  },
  {
    "id": 504,
    "name": "Ignisaxum",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Ethereal"
  },
  {
    "id": 505,
    "name": "Arctic Frost",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Ethereal"
  },
  {
    "id": 506,
    "name": "Monocrite Abyss",
    "layer": "Toxic Lava Layer",
    "depth": "-2,700 to -2,999",
    "rarity": "Celestial"
  },
  {
    "id": 507,
    "name": "Boiling Lava",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Default"
  },
  {
    "id": 508,
    "name": "Aluminum",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Common"
  },
  {
    "id": 509,
    "name": "Fulocite",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Common"
  },
  {
    "id": 510,
    "name": "Telbar",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Common"
  },
  {
    "id": 511,
    "name": "Mercury",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Common"
  },
  {
    "id": 512,
    "name": "Phigarium",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Uncommon"
  },
  {
    "id": 513,
    "name": "Rizufide",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Uncommon"
  },
  {
    "id": 514,
    "name": "Jagdite",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Uncommon"
  },
  {
    "id": 515,
    "name": "Scaldyrium",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Uncommon"
  },
  {
    "id": 516,
    "name": "Yulacite",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Rare"
  },
  {
    "id": 517,
    "name": "Vaxium",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Rare"
  },
  {
    "id": 518,
    "name": "Farlicin",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Rare"
  },
  {
    "id": 519,
    "name": "Derilium",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Epic"
  },
  {
    "id": 520,
    "name": "Birucite",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Epic"
  },
  {
    "id": 521,
    "name": "Gaseous Iron",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Epic"
  },
  {
    "id": 522,
    "name": "Sacreoxyn",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Legendary"
  },
  {
    "id": 523,
    "name": "Wasecraesiel",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Legendary"
  },
  {
    "id": 524,
    "name": "Thorned Bloomstone",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Legendary"
  },
  {
    "id": 525,
    "name": "The Leviathan Crystal",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Mythic"
  },
  {
    "id": 526,
    "name": "Fire Spider",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Mythic"
  },
  {
    "id": 527,
    "name": "Ulewuthaim",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Ethereal"
  },
  {
    "id": 528,
    "name": "Fallen Star",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Ethereal"
  },
  {
    "id": 529,
    "name": "Look beyond the ̶C̶U̶R̶T̶A̶I̶N̶ Inferno",
    "layer": "Boiling Lava Layer",
    "depth": "-3,000 to -3,399",
    "rarity": "Celestial"
  },
  {
    "id": 530,
    "name": "Outer Core",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Default"
  },
  {
    "id": 531,
    "name": "Riljud",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Common"
  },
  {
    "id": 532,
    "name": "Carzyum",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Common"
  },
  {
    "id": 533,
    "name": "Selorus",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Common"
  },
  {
    "id": 534,
    "name": "Foxrophine",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Common"
  },
  {
    "id": 535,
    "name": "Incindirum",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Uncommon"
  },
  {
    "id": 536,
    "name": "Ectoplasm",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Uncommon"
  },
  {
    "id": 537,
    "name": "Saffron",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Uncommon"
  },
  {
    "id": 538,
    "name": "Corethium",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Uncommon"
  },
  {
    "id": 539,
    "name": "Subsinite",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Rare"
  },
  {
    "id": 540,
    "name": "Aluhargium",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Rare"
  },
  {
    "id": 541,
    "name": "Parchium",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Rare"
  },
  {
    "id": 542,
    "name": "Zanforn-88",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Epic"
  },
  {
    "id": 543,
    "name": "Tarrulum",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Epic"
  },
  {
    "id": 544,
    "name": "Kyawthuite",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Epic"
  },
  {
    "id": 545,
    "name": "K4R-UL-1UM",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Legendary"
  },
  {
    "id": 546,
    "name": "Jyrulphasion",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Legendary"
  },
  {
    "id": 547,
    "name": "Uru",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Legendary"
  },
  {
    "id": 548,
    "name": "ELEMENT TON-618",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Mythic"
  },
  {
    "id": 549,
    "name": "Koiksxolaim",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Mythic"
  },
  {
    "id": 550,
    "name": "Arras",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Ethereal"
  },
  {
    "id": 551,
    "name": "Anomaly",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Ethereal"
  },
  {
    "id": 552,
    "name": "你聽到了嗎？？？？？？？？？",
    "layer": "Outer Core Layer",
    "depth": "-3,400 to -3,699",
    "rarity": "Celestial"
  },
  {
    "id": 553,
    "name": "Middle Core",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Default"
  },
  {
    "id": 554,
    "name": "Soultriek",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Common"
  },
  {
    "id": 555,
    "name": "Rejewel",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Common"
  },
  {
    "id": 556,
    "name": "Jokerium",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Common"
  },
  {
    "id": 557,
    "name": "Unpure Hydrogen",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Common"
  },
  {
    "id": 558,
    "name": "Darnite",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Uncommon"
  },
  {
    "id": 559,
    "name": "Aethernum",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Uncommon"
  },
  {
    "id": 560,
    "name": "Macabrium",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Uncommon"
  },
  {
    "id": 561,
    "name": "Magnyte",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Uncommon"
  },
  {
    "id": 562,
    "name": "Aunalite",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Rare"
  },
  {
    "id": 563,
    "name": "Fernokajin",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Rare"
  },
  {
    "id": 564,
    "name": "Netherite",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Rare"
  },
  {
    "id": 565,
    "name": "Tightly Packed Nickel",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Epic"
  },
  {
    "id": 566,
    "name": "Strange Alloy",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Epic"
  },
  {
    "id": 567,
    "name": "Pyrothyst",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Epic"
  },
  {
    "id": 568,
    "name": "Jeweled Lamenta",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Legendary"
  },
  {
    "id": 569,
    "name": "Cobalt Thorium G",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Legendary"
  },
  {
    "id": 570,
    "name": "Infernox",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Legendary"
  },
  {
    "id": 571,
    "name": "Fingerite Renmants",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Mythic"
  },
  {
    "id": 572,
    "name": "Ignirion",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Mythic"
  },
  {
    "id": 573,
    "name": "Chained Devil",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Ethereal"
  },
  {
    "id": 574,
    "name": "Lavaxite Prism",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Ethereal"
  },
  {
    "id": 575,
    "name": "Fasaria",
    "layer": "Middle Core Layer",
    "depth": "-3,700 to -3,999",
    "rarity": "Celestial"
  },
  {
    "id": 576,
    "name": "Inner Core",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Default"
  },
  {
    "id": 577,
    "name": "Glimmering Iron Ore",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Common"
  },
  {
    "id": 578,
    "name": "Oxygenanium",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Common"
  },
  {
    "id": 579,
    "name": "Glimmering Silver Ore",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Common"
  },
  {
    "id": 580,
    "name": "Compressed Hydrogen",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Common"
  },
  {
    "id": 581,
    "name": "Lavanium",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Uncommon"
  },
  {
    "id": 582,
    "name": "Meltor",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Uncommon"
  },
  {
    "id": 583,
    "name": "Glimmerium",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Uncommon"
  },
  {
    "id": 584,
    "name": "Deephyros",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Uncommon"
  },
  {
    "id": 585,
    "name": "Grainium",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Rare"
  },
  {
    "id": 586,
    "name": "Primorial Rock",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Rare"
  },
  {
    "id": 587,
    "name": "Overglimmering Volcanic Ash",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Rare"
  },
  {
    "id": 588,
    "name": "Magmorthum",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Epic"
  },
  {
    "id": 589,
    "name": "Normalium",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Epic"
  },
  {
    "id": 590,
    "name": "Solaryx",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Epic"
  },
  {
    "id": 591,
    "name": "Alloy Ore",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Legendary"
  },
  {
    "id": 592,
    "name": "The Central",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Legendary"
  },
  {
    "id": 593,
    "name": "Magmyra",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Legendary"
  },
  {
    "id": 595,
    "name": "Aeonsteel",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Mythic"
  },
  {
    "id": 596,
    "name": "Color Overdrive",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Ethereal"
  },
  {
    "id": 597,
    "name": "Burning Entity",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Ethereal"
  },
  {
    "id": 598,
    "name": "Ex Machina Penultimate",
    "layer": "Inner Core Layer",
    "depth": "-4,000 to -4,499",
    "rarity": "Celestial"
  },
  {
    "id": 599,
    "name": "Deep Space",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Default"
  },
  {
    "id": 600,
    "name": "Dark Matter",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Common"
  },
  {
    "id": 601,
    "name": "Black Hole",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Common"
  },
  {
    "id": 602,
    "name": "Planet Remnant",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Common"
  },
  {
    "id": 603,
    "name": "Galaxy",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Common"
  },
  {
    "id": 604,
    "name": "Star Remnant",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Uncommon"
  },
  {
    "id": 605,
    "name": "Arcanum",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Uncommon"
  },
  {
    "id": 606,
    "name": "Neutron Star",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Uncommon"
  },
  {
    "id": 607,
    "name": "Nyxium",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Uncommon"
  },
  {
    "id": 608,
    "name": "Galactic Opal",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Rare"
  },
  {
    "id": 609,
    "name": "Metelum",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Rare"
  },
  {
    "id": 610,
    "name": "Rogue Civilized Object",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Rare"
  },
  {
    "id": 611,
    "name": "Skrep",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Epic"
  },
  {
    "id": 612,
    "name": "Green Comet",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Epic"
  },
  {
    "id": 613,
    "name": "Nebryx",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Epic"
  },
  {
    "id": 614,
    "name": "Litorp",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Legendary"
  },
  {
    "id": 615,
    "name": "Microspobic Speck",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Legendary"
  },
  {
    "id": 616,
    "name": "Cosmyth",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Legendary"
  },
  {
    "id": 618,
    "name": "Quasi-star",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Ethereal"
  },
  {
    "id": 619,
    "name": "Eternium",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Ethereal"
  },
  {
    "id": 620,
    "name": "Alternate Plane",
    "layer": "Deep Space Layer",
    "depth": "-4,500 to -4,999",
    "rarity": "Celestial"
  },
  {
    "id": 621,
    "name": "Moon Stone",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Default"
  },
  {
    "id": 622,
    "name": "Lunarium",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Common"
  },
  {
    "id": 623,
    "name": "Moon Crystal",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Common"
  },
  {
    "id": 624,
    "name": "Selene Ore",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Common"
  },
  {
    "id": 625,
    "name": "Lunarite",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Common"
  },
  {
    "id": 626,
    "name": "Stardust Crystal",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Uncommon"
  },
  {
    "id": 627,
    "name": "Celestial Quartz",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Uncommon"
  },
  {
    "id": 628,
    "name": "Lunaris Ore",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Uncommon"
  },
  {
    "id": 629,
    "name": "Astralium",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Uncommon"
  },
  {
    "id": 630,
    "name": "Moon Soul",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Rare"
  },
  {
    "id": 631,
    "name": "Lunar Amethyst",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Rare"
  },
  {
    "id": 632,
    "name": "Lunarite Essence",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Rare"
  },
  {
    "id": 633,
    "name": "Lunarflame Ore",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Epic"
  },
  {
    "id": 634,
    "name": "Moonshadow Crystal",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Epic"
  },
  {
    "id": 635,
    "name": "Lunarisite",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Epic"
  },
  {
    "id": 636,
    "name": "Lunarisium",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Legendary"
  },
  {
    "id": 637,
    "name": "Solarmoon Essence",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Legendary"
  },
  {
    "id": 638,
    "name": "Selestium",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Legendary"
  },
  {
    "id": 639,
    "name": "Death Star",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Mythic"
  },
  {
    "id": 640,
    "name": "Celesthyne",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Mythic"
  },
  {
    "id": 641,
    "name": "Compute Binaric Datacrite",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Ethereal"
  },
  {
    "id": 642,
    "name": "Nocturnis",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Ethereal"
  },
  {
    "id": 643,
    "name": "Odyssey",
    "layer": "Moon Stone Layer",
    "depth": "-5,000 to -5,499",
    "rarity": "Celestial"
  },
  {
    "id": 644,
    "name": "Venus Stone",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Default"
  },
  {
    "id": 645,
    "name": "Sulvaris",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Common"
  },
  {
    "id": 646,
    "name": "Bloom Quartz",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Common"
  },
  {
    "id": 647,
    "name": "Venite",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Common"
  },
  {
    "id": 648,
    "name": "Scorched Glass",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Common"
  },
  {
    "id": 649,
    "name": "Erosine",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Uncommon"
  },
  {
    "id": 650,
    "name": "Amber Vein Ore",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Uncommon"
  },
  {
    "id": 651,
    "name": "Fumarite Pearl",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Uncommon"
  },
  {
    "id": 652,
    "name": "Venerian Orixio",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Uncommon"
  },
  {
    "id": 653,
    "name": "Crimson Halo",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Rare"
  },
  {
    "id": 654,
    "name": "Valenite",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Rare"
  },
  {
    "id": 655,
    "name": "Ashen Bloomstone",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Rare"
  },
  {
    "id": 656,
    "name": "Shythereon",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Epic"
  },
  {
    "id": 657,
    "name": "Guilded Vapora",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Epic"
  },
  {
    "id": 658,
    "name": "Seraphic Glass",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Epic"
  },
  {
    "id": 659,
    "name": "Venalight",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Legendary"
  },
  {
    "id": 660,
    "name": "Auric Flame Shard",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Legendary"
  },
  {
    "id": 661,
    "name": "Eclipsera Gem",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Legendary"
  },
  {
    "id": 662,
    "name": "Astral Vein",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Ethereal"
  },
  {
    "id": 663,
    "name": "Tartarium",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Ethereal"
  },
  {
    "id": 664,
    "name": "Apocrypha",
    "layer": "Venus Stone Layer",
    "depth": "-5,500 to -5,799",
    "rarity": "Celestial"
  },
  {
    "id": 665,
    "name": "Mercury Stone",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Default"
  },
  {
    "id": 666,
    "name": "Ferrite",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Common"
  },
  {
    "id": 667,
    "name": "Ashenil Goethe",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Common"
  },
  {
    "id": 668,
    "name": "Mercyrosite",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Common"
  },
  {
    "id": 669,
    "name": "Scorched Basalt",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Common"
  },
  {
    "id": 670,
    "name": "Eminescu",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Uncommon"
  },
  {
    "id": 671,
    "name": "Cindermark Ore",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Uncommon"
  },
  {
    "id": 672,
    "name": "Volcaryn",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Uncommon"
  },
  {
    "id": 673,
    "name": "Abedin Crater",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Uncommon"
  },
  {
    "id": 674,
    "name": "Flaresteel",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Rare"
  },
  {
    "id": 675,
    "name": "Radiolyte",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Rare"
  },
  {
    "id": 676,
    "name": "Ignilite Vein",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Rare"
  },
  {
    "id": 677,
    "name": "Auralith",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Epic"
  },
  {
    "id": 678,
    "name": "Sunfire Glass",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Epic"
  },
  {
    "id": 679,
    "name": "Caloris Basin",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Epic"
  },
  {
    "id": 680,
    "name": "Coronathium",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Legendary"
  },
  {
    "id": 681,
    "name": "Vulcanite Prime",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Legendary"
  },
  {
    "id": 682,
    "name": "Rembrandt Basin",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Legendary"
  },
  {
    "id": 683,
    "name": "Heliarchite",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Mythic"
  },
  {
    "id": 684,
    "name": "Tolstoj",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Mythic"
  },
  {
    "id": 685,
    "name": "Reinhardt Core",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Ethereal"
  },
  {
    "id": 686,
    "name": "Stilbon",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Ethereal"
  },
  {
    "id": 687,
    "name": "Pure Divinity",
    "layer": "Mercury Stone Layer",
    "depth": "-5,800 to -6,099",
    "rarity": "Celestial"
  },
  {
    "id": 688,
    "name": "Sun Surface",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Default"
  },
  {
    "id": 689,
    "name": "Prominence",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Common"
  },
  {
    "id": 690,
    "name": "Ember Glass",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Common"
  },
  {
    "id": 691,
    "name": "Solar Ash",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Common"
  },
  {
    "id": 692,
    "name": "Coronal Hole",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Common"
  },
  {
    "id": 693,
    "name": "Photosphere",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Uncommon"
  },
  {
    "id": 694,
    "name": "Chromosphere",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Uncommon"
  },
  {
    "id": 695,
    "name": "Photonyx",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Uncommon"
  },
  {
    "id": 696,
    "name": "Thermite Vein",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Uncommon"
  },
  {
    "id": 697,
    "name": "Sunveil Quartz",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Rare"
  },
  {
    "id": 698,
    "name": "Ignis Shard",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Rare"
  },
  {
    "id": 699,
    "name": "Helios Dust",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Rare"
  },
  {
    "id": 700,
    "name": "Solaris Corestone",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Epic"
  },
  {
    "id": 701,
    "name": "Cinderlight Gem",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Epic"
  },
  {
    "id": 702,
    "name": "Aureflame Alloy",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Epic"
  },
  {
    "id": 703,
    "name": "Prometheon",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Legendary"
  },
  {
    "id": 704,
    "name": "Radiant Solinium",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Legendary"
  },
  {
    "id": 705,
    "name": "Aurora Pyrite",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Legendary"
  },
  {
    "id": 706,
    "name": "Crown of Dawn",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Mythic"
  },
  {
    "id": 707,
    "name": "Infernal Prism",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Mythic"
  },
  {
    "id": 708,
    "name": "Flare",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Ethereal"
  },
  {
    "id": 709,
    "name": "Eternal Solflare",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Ethereal"
  },
  {
    "id": 710,
    "name": "Sunburst Vein",
    "layer": "Sun Surface Layer",
    "depth": "-6,100 to -6,499",
    "rarity": "Celestial"
  },
  {
    "id": 711,
    "name": "Sun Nucleus",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Default"
  },
  {
    "id": 712,
    "name": "Subsurface Hydrogen",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Common"
  },
  {
    "id": 713,
    "name": "Coregrit",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Common"
  },
  {
    "id": 714,
    "name": "Solar Slag",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Common"
  },
  {
    "id": 715,
    "name": "Quadium Hydrogen",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Common"
  },
  {
    "id": 716,
    "name": "Tachocline",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Uncommon"
  },
  {
    "id": 717,
    "name": "Helion Glass",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Uncommon"
  },
  {
    "id": 718,
    "name": "Plasmirum",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Uncommon"
  },
  {
    "id": 719,
    "name": "Irradite",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Uncommon"
  },
  {
    "id": 720,
    "name": "Photovite",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Rare"
  },
  {
    "id": 721,
    "name": "Helicorite",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Rare"
  },
  {
    "id": 722,
    "name": "Starbone",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Rare"
  },
  {
    "id": 723,
    "name": "Infernic Alloy",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Epic"
  },
  {
    "id": 724,
    "name": "Solatrix",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Epic"
  },
  {
    "id": 725,
    "name": "Luminforge Crystal",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Epic"
  },
  {
    "id": 726,
    "name": "Coronaith",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Legendary"
  },
  {
    "id": 727,
    "name": "Vermion",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Legendary"
  },
  {
    "id": 728,
    "name": "Pyrosoul Gem",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Legendary"
  },
  {
    "id": 729,
    "name": "Stellarium",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Mythic"
  },
  {
    "id": 730,
    "name": "Gemisis",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Mythic"
  },
  {
    "id": 731,
    "name": "Solheart",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Ethereal"
  },
  {
    "id": 732,
    "name": "Dimensional Objects",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Ethereal"
  },
  {
    "id": 733,
    "name": "Ultimatum",
    "layer": "Sun Nucleus Layer",
    "depth": "-6,500 to -6,849",
    "rarity": "Celestial"
  },
  {
    "id": 734,
    "name": "Mars Stone",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Default"
  },
  {
    "id": 735,
    "name": "Rustrock",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Common"
  },
  {
    "id": 736,
    "name": "Dustbound Ore",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Common"
  },
  {
    "id": 737,
    "name": "Redstone",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Common"
  },
  {
    "id": 738,
    "name": "Gravellite",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Common"
  },
  {
    "id": 739,
    "name": "Ferrinite",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Uncommon"
  },
  {
    "id": 740,
    "name": "Cinderplate",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Uncommon"
  },
  {
    "id": 741,
    "name": "Terracline",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Uncommon"
  },
  {
    "id": 742,
    "name": "Oxidulite",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Uncommon"
  },
  {
    "id": 743,
    "name": "Martenglass",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Rare"
  },
  {
    "id": 744,
    "name": "Crimson Alloy",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Rare"
  },
  {
    "id": 745,
    "name": "Roubion Core",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Rare"
  },
  {
    "id": 746,
    "name": "Volcarite",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Epic"
  },
  {
    "id": 747,
    "name": "Sangrelite",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Epic"
  },
  {
    "id": 748,
    "name": "Ironshade Crystal",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Epic"
  },
  {
    "id": 749,
    "name": "Martian Soulstone",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Legendary"
  },
  {
    "id": 750,
    "name": "Dustforged Titanite",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Legendary"
  },
  {
    "id": 751,
    "name": "Redquake Ruby",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Legendary"
  },
  {
    "id": 752,
    "name": "Arescore",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Mythic"
  },
  {
    "id": 753,
    "name": "Vermillion Cube",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Mythic"
  },
  {
    "id": 754,
    "name": "Borealis Water",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Ethereal"
  },
  {
    "id": 755,
    "name": "Deimos Seraphite",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Ethereal"
  },
  {
    "id": 756,
    "name": "Phobos",
    "layer": "Mars Stone Layer",
    "depth": "-6,850 to -7,199",
    "rarity": "Celestial"
  },
  {
    "id": 757,
    "name": "Jupiter Gas",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Default"
  },
  {
    "id": 758,
    "name": "Presurized Hydrogen",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Common"
  },
  {
    "id": 759,
    "name": "Jupiter Rock",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Common"
  },
  {
    "id": 760,
    "name": "Metallic Hydrogen",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Common"
  },
  {
    "id": 761,
    "name": "Trapped Storm",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Common"
  },
  {
    "id": 762,
    "name": "Pressure Fog",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Uncommon"
  },
  {
    "id": 763,
    "name": "Ionized Hydrogen",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Uncommon"
  },
  {
    "id": 764,
    "name": "Chargen Ammonia",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Uncommon"
  },
  {
    "id": 765,
    "name": "Aurora Plume",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Uncommon"
  },
  {
    "id": 766,
    "name": "Cyclone Vapor",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Rare"
  },
  {
    "id": 767,
    "name": "Methanic Surge",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Rare"
  },
  {
    "id": 768,
    "name": "Crashed Probe",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Rare"
  },
  {
    "id": 769,
    "name": "Jovian Essence",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Epic"
  },
  {
    "id": 770,
    "name": "Jupiter Station",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Epic"
  },
  {
    "id": 771,
    "name": "Stormbound Plasma",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Epic"
  },
  {
    "id": 772,
    "name": "Great Red Vapor",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Legendary"
  },
  {
    "id": 773,
    "name": "Great Aurorae",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Legendary"
  },
  {
    "id": 774,
    "name": "Europa",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Legendary"
  },
  {
    "id": 775,
    "name": "Zeus Domination",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Mythic"
  },
  {
    "id": 776,
    "name": "Enchantment",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Ethereal"
  },
  {
    "id": 777,
    "name": "Athanatos",
    "layer": "Jupiter Gas Layer",
    "depth": "-7,200 to -7,499",
    "rarity": "Celestial"
  },
  {
    "id": 778,
    "name": "Saturn Gas",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Default"
  },
  {
    "id": 779,
    "name": "Helium Drift",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Common"
  },
  {
    "id": 780,
    "name": "Cold Rings",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Common"
  },
  {
    "id": 781,
    "name": "Golden Haze",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Common"
  },
  {
    "id": 782,
    "name": "Ringborne",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Common"
  },
  {
    "id": 783,
    "name": "Frozen Ammonia",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Uncommon"
  },
  {
    "id": 784,
    "name": "Cryo Fog",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Uncommon"
  },
  {
    "id": 785,
    "name": "Outermost Ring Rock",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Uncommon"
  },
  {
    "id": 786,
    "name": "Pressure Silk",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Uncommon"
  },
  {
    "id": 787,
    "name": "Bandstorm Cloud",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Rare"
  },
  {
    "id": 788,
    "name": "Methane Veil",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Rare"
  },
  {
    "id": 789,
    "name": "Karma & Time",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Rare"
  },
  {
    "id": 790,
    "name": "Ringlight Essence",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Epic"
  },
  {
    "id": 791,
    "name": "Kronos",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Epic"
  },
  {
    "id": 792,
    "name": "Silent Tempest",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Epic"
  },
  {
    "id": 793,
    "name": "Crown Cloud Of Saturn",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Legendary"
  },
  {
    "id": 794,
    "name": "Golden Jetstream",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Legendary"
  },
  {
    "id": 795,
    "name": "David's Ore",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Legendary"
  },
  {
    "id": 796,
    "name": "Star of Temphan",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Mythic"
  },
  {
    "id": 797,
    "name": "Titanos Core",
    "layer": "Saturn Gas Layer",
    "depth": "-7,500 to -7,849",
    "rarity": "Celestial"
  },
  {
    "name": "Suprarational Mark",
    "layer": "Every Layer",
    "depth": "Everywhere",
    "rarity": "Zenith"
  },
  {
    "name": "Revelation",
    "layer": "Every Layer",
    "depth": "Everywhere",
    "rarity": "Zenith"
  },
  {
    "name": "Index Dei laten",
    "layer": "Every Layer",
    "depth": "Everywhere",
    "rarity": "Zenith"
  },
  {
    "name": "Once By Human",
    "layer": "Every Layer",
    "depth": "Everywhere",
    "rarity": "Zenith"
  },
  {
    "name": "Dysfunctional Aberration",
    "layer": "Every Layer",
    "depth": "Everywhere",
    "rarity": "Divine"
  },
  {
    "name": "JeremyDevs",
    "layer": "Every Layer",
    "depth": "Everywhere",
    "rarity": "Nil"
  },
  {
    "id": 798,
    "name": "Uranus Gas",
    "layer": "Uranus Gas Layer",
    "depth": "-7,850 and below",
    "rarity": "Default"
  },
  {
    "id": 799,
    "name": "Uranus Core",
    "layer": "Uranus Gas Layer",
    "depth": "-7,850 and below",
    "rarity": "Celestial"
  },
  {
    "name": "TNT",
    "layer": "Miscellaneous Blocks",
    "depth": "Everywhere",
    "rarity": "Miscellaneous Blocks"
  },
  {
    "name": "Emerald",
    "layer": "Miscellaneous Blocks",
    "depth": "Everywhere",
    "rarity": "Miscellaneous Blocks"
  }
];