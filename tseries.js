/*
Starblast: T-Series v1.2 - Galaxy Takeover
 
Credits:
- Mod Code: ASC-027
- Ships: Neuronality,
- Beta Testers: 
*/

var ships = [];
 
var vocabulary = [
  {text: "Hello", icon: "\u0045", key: "O"},
  {text: "Bye", icon: "\u0046", key: "B"},
  {text: "Yes", icon: "\u004c", key: "Y"},
  {text: "No", icon: "\u004d", key: "N"},
  {text: "Thanks", icon: "\u0041", key: "X"},
  {text: "Sorry", icon: "\u00a1", key: "S"},
  {text: "No Prob", icon: "\u0047", key: "P"},
  {text: "Good Game", icon: "\u00a3", key: "G"},
  {text: "Team", icon: "\u0031", key: "T"},
  {text: "Follow Me", icon: "\u0050", key: "F"},
  {text: "Mine", icon: "\u0044", key: "M"},
  {text: "Attack", icon: "\u0049", key: "A"},
  {text: "Help", icon: "\u004a", key: "H"},
  {text: "Kill", icon:"\u005b", key:"K"},
  {text: "Leader", icon: "\u002e", key: "L"},
  {text: "Hmm", icon: "\u004b", key: "Q"},
  {text: "Duel Me", icon: "\u00be", key: "D"},
  {text: "Love", icon:"\u0024", key:"E"},
  {text: "Bruh", icon:"˙ ͜ʟ˙", key:"U"},
  {text: "WTF", icon:"ಠ_ಠ", key:"W"},
];
 
this.options = {
  
//Game Settings :
 
 root_mode: "survival",
 starting_ship: 101,
 starting_ship_maxed: false,
 max_level: 7,
 max_players: 80,
 survival_time: 45,
 survival_level: 8,
 ships: ships,
 reset_tree: true,
 vocabulary: vocabulary,
 soundtrack: "argon.mp3",
 release_crystal: true,
 weapon_drop: 0,
 weapons_store: true,
 projectile_speed: 1,
 healing_enabled: false,
 healing_ratio: 0,
 bouncing_lasers: 1,
 friendly_colors: 0,
 friction_ratio: 1,
 shield_regen_factor: 1,
 power_regen_factor: 1,
 strafe: 0,
 radar_zoom: 2,
 invulnerable_ships: false,
 auto_refill: false,
 collider: true,
 mines_self_destroy: true,
 mines_destroy_delay: 18000,
 speed_mod: 1.2,
 acw_allowed: false,
 
 //Map Settings :
 
 map_size: 100,
 crystal_value: 3,
 asteroids_strength: 1,
 
 //Ship Settings :
 
 lives: 3,
 max_tier_lives: 0,
 rcs_toggle: true, 
};
 
this.tick = function(game) {
 
};
