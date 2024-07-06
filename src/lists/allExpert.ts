import { RouteSection } from "../classes";
import { Color, Tag } from "../enums";
import { defaultPreStart, krool } from "../utils/sections";

export const allExpert: RouteSection[] = [
  defaultPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.Header,
        text: "NOTE: This route uses extensive phasewalks."
      },
      {
        color: Color.DK,
        text: "Complete Training Barrels"
      },
      {
        color: Color.DK,
        text: "BFI, tag W5, 3 crystals"
      },
      {
        color: Color.DK,
        text: "Caves RC, Caves early"
      },
      {
        color: Color.DK,
        text: "EXIT Caves"
      },
      {
        color: Color.DK,
        text: "Pfall to lava GB, leave Lobby",
        totals: {
          gbs: 1
        }
      },
      {
        color: Color.DK,
        text: "Aztec roof RC, tag W2"
      },
      {
        color: Color.DK,
        text: "Kick into Japes Lobby, ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES 1",
    steps: [
      {
        color: Color.DK,
        text: "Bush push to main area"
      },
      {
        color: Color.DK,
        text: "Pswim to cage GB",
        totals: {
          gbs: 2
        }
      },
      {
        color: Color.DK,
        text: "BP, 3 coins, tag W3 (5)",
        totals: {
          bps: 1
        }
      },
      {
        color: Color.DK,
        text: "Climb to clear BC text"
      },
      {
        color: Color.DK,
        text: "Buy Coconut/Ammo Belt 1"
      },
      {
        color: Color.DK,
        text: "Snide balloon, tag W2 (18)"
      },
      {
        color: Color.DK,
        text: "Diddy GB (21)",
        totals: {
          gbs: 3
        }
      },
      {
        color: Color.DK,
        text: "Jump down trees to RC (26)"
      },
      {
        color: Color.DK,
        text: "Right switch, W3 (31)"
      },
      {
        color: Color.DK,
        text: "Left switch, balloon (41)"
      },
      {
        color: Color.DK,
        text: "BC CS skip (46)",
        totals: {
          crowns: 1
        }
      },
      {
        color: Color.DK,
        text: "Cannon to GB",
        totals: {
          gbs: 4
        }
      },
      {
        color: Color.DK,
        text: "Tag W4, to Cranky (55)"
      },
      {
        color: Color.DK,
        text: "Cranky balloon (65)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Simian Slam from Cranky"
      },
      {
        color: Color.Diddy,
        text: "Buy up to Spring, W4"
      },
      {
        color: Color.Diddy,
        text: "Water bunches (10), 3 coins"
      },
      {
        color: Color.Diddy,
        text: "Buy Peanut"
      },
      {
        color: Color.Diddy,
        text: "Pwalk to cage GB",
        totals: {
          gbs: 5
        }
      },
      {
        color: Color.Diddy,
        text: "Pswim to cave GB, balloon (20)",
        totals: {
          gbs: 6
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Tag in T&S for Army Dillo"
      },
      {
        color: Color.DK,
        text: "Pause exit/reset on Key 1",
        totals: {
          keys: 1
        }
      }
    ]
  },
  {
    name: "JAPES 1 -> AZTEC 1",
    steps: [
      {
        color: Color.Header,
        text: "Turn on Story Skip again"
      },
      {
        color: Color.DK,
        text: "Tag W1, turn in Key 1"
      },
      {
        color: Color.DK,
        text: "W1/W2, ENTER Aztec"
      },
    ]
  },
  {
    name: "AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "Pwalk to BP, 3 coins",
        totals: {
          bps: 2
        }
      },
      {
        color: Color.DK,
        text: "Pwalk for Llama CS skip"
      },
      {
        color: Color.DK,
        text: "Oasis RC"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Tag W1, buy Guitar"
      },
      {
        color: Color.Diddy,
        text: "Rocket to BP, enter Tiny Temple",
        totals: {
          bps: 3
        }
      },
      {
        color: Color.Diddy,
        text: "Climb to melt ice (18)"
      },
      {
        color: Color.Diddy,
        text: "Pswim to Tiny GB (23), OKONG"
      },
      {
        color: Color.Diddy,
        text: "Pswim out, balloon, tag W2 (38)"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Pwalk to Cranky, buy up to Super Slam"
      },
      {
        color: Color.DK,
        text: "Balloons (20)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Buy up to Port, tag W3"
      },
      {
        color: Color.Tiny,
        text: "BP, tag far W2 (10)",
        totals: {
          bps: 4
        }
      },
      {
        color: Color.Tiny,
        text: "Buy Feather, enter T&S"
      },
      {
        color: Color.DK,
        text: "DDQ for Key 5",
        totals: {
          keys: 2
        }
      },
      {
        color: Color.DK,
        text: "Banana push for bonus GB",
        totals: {
          gbs: 8
        }
      },
      {
        color: Color.DK,
        text: "Strong Kong to roll out (40)"
      },
      {
        color: Color.DK,
        text: "Roll clip/pwalk in 5DT"
      },
      {
        color: Color.DK,
        text: "5DT GB (L, 2 coins, R)",
        totals: {
          gbs: 9
        }
      },
      {
        color: Color.DK,
        text: "Blast, temple balloon (54)"
      },
      {
        color: Color.DK,
        text: "Enter Llama Temple, free Lanky",
        totals: {
          gbs: 10
        }
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "W1, 2 trees (64)"
      },
      {
        color: Color.DK,
        text: "Llama GB, 1 coin (67)",
        totals: {
          gbs: 11
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "1 coin, Klaptrap GB snag (15)",
        totals: {
          gbs: 12
        }
      },
      {
        color: Color.Tiny,
        text: "W2/W3"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Single, bunch (6), 2 coins max"
      },
      {
        color: Color.Lanky,
        text: "Buy up to Sprint"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "W3 to rocket (40)"
      },
      {
        color: Color.Diddy,
        text: "Rocket through sun (45)"
      },
      {
        color: Color.Diddy,
        text: "Hit gongs before Try Again"
      },
      {
        color: Color.Diddy,
        text: "Vulture race (50)",
      },
      {
        color: Color.Diddy,
        text: "Fly to 3 trees (65), tower GB",
        totals: {
          gbs: 13
        }
      },
      {
        color: Color.Diddy,
        text: "Fly to totem GB",
        totals: {
          gbs: 14
        }
      },
      {
        color: Color.Diddy,
        text: "Fly to 5DT, charge/pwalk in"
      },
      {
        color: Color.Diddy,
        text: "5DT GB (R, balloon (75), L)",
        totals: {
          gbs: 15,
          medals: 1
        }
      },
      {
        color: Color.Diddy,
        text: "EXIT Aztec"
      }
    ]
  },
  {
    name: "AZTEC 1 -> FACTORY",
    steps: [
      {
        color: Color.Diddy,
        text: "Charge Lobby gongs"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Bonus GB, W2/W1, turn in Key 5",
        totals: {
          gbs: 16
        }
      },
      {
        color: Color.Tiny,
        text: "Port to fairy, fall to Factory",
        totals: {
          fairies: 1
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "ENTER Factory"
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.Lanky,
        text: "Tag W2 (5)"
      },
      {
        color: Color.Lanky,
        text: "Robot push/pwalk to open Tiny cage"
      },
      {
        color: Color.Lanky,
        text: "Pipe GB, down pipe (30)",
        totals: {
          gbs: 17
        }
      },
      {
        color: Color.Lanky,
        text: "Tag W4, free Chunky GB (35)",
        totals: {
          gbs: 18
        }
      },
      {
        color: Color.Lanky,
        text: "Avoid coins, buy Trombone (40)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Buy Saxophone"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Cranky then Candy"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Buy Bongos, balloon (10)"
      },
      {
        color: Color.DK,
        text: "Power shed kick for GB (25)",
        totals: {
          gbs: 19
        }
      },
      {
        color: Color.DK,
        text: "Blast w/all bunches (45)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Dark room RC, GB (15)",
        totals: {
          gbs: 20
        }
      },
      {
        color: Color.Chunky,
        text: "Tag W1 (20), 1 coin, bonus GB",
        totals: {
          gbs: 21
        }
      },
      {
        color: Color.Chunky,
        text: "Pwalk to Funky (Tag W5 for safety)"
      },
      {
        color: Color.Chunky,
        text: "Buy Pineapple, Homing"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Buy Grape, Ammo Belt 2"
      },
      {
        color: Color.Lanky,
        text: "Orangstand TBS"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Arcade skip GB",
        totals: {
          gbs: 22
        }
      },
      {
        color: Color.DK,
        text: "Enter T&S, clear MJ CS"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Key 3",
        totals: {
          keys: 3
        }
      },
      {
        color: Color.Tiny,
        text: "Bunch (5), cage GB, BP",
        totals: {
          gbs: 23,
          bps: 5
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Pwalk to Snide balloon (15)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tag W3 (25), balloon (35), BP",
        totals: {
          bps: 6
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Pwalk to Wheel GB, bunch (20)",
        totals: {
          gbs: 24
        }
      },
      {
        color: Color.Tiny,
        text: "Pwalk out, other bunch (25)"
      },
      {
        color: Color.Tiny,
        text: "Funky balloon (35), fairy",
        totals: {
          fairies: 2
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Tower bonus GB (28)",
        totals: {
          gbs: 25
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Numbers GB (60), fairy",
        totals: {
          gbs: 26,
          fairies: 3
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Bonus GB, go to R&D",
        totals: {
          gbs: 27
        }
      },
      {
        color: Color.Lanky,
        text: "Orangstand TBS for piano GB",
        totals: {
          gbs: 28
        }
      },
      {
        color: Color.Lanky,
        text: "Balloon (50), store position to escape"
      },
      {
        color: Color.Lanky,
        text: "Clockwise for singles (65), BP",
        totals: {
          bps: 7
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pwalk/pfall to BC",
        totals: {
          crowns: 2
        }
      },
      {
        color: Color.Chunky,
        text: "Pwalk/pfall to toy box"
      },
      {
        color: Color.Chunky,
        text: "Monster GB, balloon, singles (55)",
        totals: {
          gbs: 29
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT, Punch box"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, fairy, ENTER",
        totals: {
          bps: 8,
          fairies: 4
        }
      },
      {
        color: Color.Tiny,
        text: "W2, car race GB, pwalk out",
        totals: {
          gbs: 30
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "R&D room GB, 2 balloons (48)",
        totals: {
          gbs: 31
        }
      },
      {
        color: Color.Diddy,
        text: "Fall to bonus GB",
        totals: {
          gbs: 32
        }
      },
      {
        color: Color.Diddy,
        text: "Slam prod switch, BP (60), W4",
        totals: {
          bps: 9
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Jump (60), slam prod switch"
      },
      {
        color: Color.Chunky,
        text: "Prod GB, spin for (75)",
        totals: {
          gbs: 33,
          medals: 2
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon (55), bonus GB (75)",
        totals: {
          gbs: 34,
          medals: 3
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Balloon (75)",
        totals: {
          medals: 4
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Spring GB (75)",
        totals: {
          gbs: 35,
          medals: 5
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, Crusher GB (75)",
        totals: {
          gbs: 36,
          bps: 10,
          medals: 6
        }
      },
      {
        color: Color.DK,
        text: "EXIT Factory"
      }
    ]
  },
  {
    name: "FACTORY -> GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "Bongos GB",
        totals: {
          gbs: 37
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Drop to bonus GB",
        totals: {
          gbs: 38
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BC, drop to Galleon Lobby",
        totals: {
          crowns: 3
        }
      },
      {
        color: Color.Chunky,
        text: "BP, ENTER Galleon",
        totals: {
          bps: 11
        }
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Tag W2/W3 (8)"
      },
      {
        color: Color.Chunky,
        text: "Chest GB, fairy (15)",
        totals: {
          gbs: 39,
          fairies: 5
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Cannon game (snag?), balloon (25)",
        totals: {
          gbs: 40
        }
      },
      {
        color: Color.Chunky,
        text: "To Lighthouse, tag underwater"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Raise water, tag W5, enter lighthouse"
      },
      {
        color: Color.DK,
        text: "Lighthouse GB (20), balloon (30)",
        totals: {
          gbs: 41
        }
      },
      {
        color: Color.DK,
        text: "Outside balloon (40), Blast (55)"
      },
      {
        color: Color.DK,
        text: "Turn in BPs (safety only)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon (10), turn in BPs x3",
        totals: {
          gbs: 44
        }
      },
      {
        color: Color.Tiny,
        text: "W3, BP (20), enter T&S",
        totals: {
          bps: 12
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Key 4",
        totals: {
          keys: 4
        }
      },
      {
        color: Color.Lanky,
        text: "Pwalk to BC, balloons (20)",
        totals: {
          crowns: 4
        }
      },
      {
        color: Color.Lanky,
        text: "Pwalk to cactus tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Balloon (10)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BP, balloon (35)",
        totals: {
          bps: 13
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Submarine GB",
        totals: {
          gbs: 45
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Cannon room bunches (35)"
      },
      {
        color: Color.Tiny,
        text: "Pswim to tag W2"
      },
      {
        color: Color.Tiny,
        text: "Pswim to 5DS GB (50), fairy",
        totals: {
          gbs: 46,
          fairies: 6
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "W2 noclip to 2DS GB (60)",
        totals: {
          gbs: 47
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Chunky pswim to 5DS GB (20)",
        totals: {
          gbs: 48
        }
      },
      {
        color: Color.Diddy,
        text: "Seal balloon (30), ship switch"
      },
      {
        color: Color.Diddy,
        text: "BP, lighthouse GB, bunches (40)",
        totals: {
          gbs: 49,
          bps: 14
        }
      },
      {
        color: Color.Diddy,
        text: "W5 to mech fish, bunches near fish (60)",
        totals: {
          gbs: 50
        }
      },
      {
        color: Color.Diddy,
        text: "Pswim to treasure room, bonus GB (75)",
        totals: {
          gbs: 51,
          medals: 7
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Bunch, balloon (75)",
        totals: {
          medals: 8
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Bonus GB (25)",
        totals: {
          gbs: 52
        }
      },
      {
        color: Color.Lanky,
        text: "Pswim for pearls"
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "Entry singles (30), W2 noclip to 2DS GB (40)",
        totals: {
          gbs: 53
        }
      },
      {
        color: Color.Lanky,
        text: "Box balloon (50), Enguarde bunch (55)"
      },
      {
        color: Color.Lanky,
        text: "Pswim to 5DS GB (65)",
        totals: {
          gbs: 54
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tunnel bunches (50), 5DS GB",
        totals: {
          gbs: 55
        }
      },
      {
        color: Color.Chunky,
        text: "W5 to ship GB (75)",
        totals: {
          gbs: 56,
          medals: 9
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "W2 noclip to 5DS GB (60)",
        totals: {
          gbs: 57
        }
      },
      {
        color: Color.DK,
        text: "Tunnel bunches (75), W4, BP",
        totals: {
          bps: 15,
          medals: 10
        }
      },
      {
        color: Color.DK,
        text: "Seal GB",
        totals: {
          gbs: 58
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Seal race skip GB",
        totals: {
          gbs: 59
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "BP, Pswim to lighthouse",
        totals: {
          bps: 16
        }
      },
      {
        color: Color.Lanky,
        text: "Pswim for chest bunch (75)",
        totals: {
          medals: 11
        }
      },
      {
        color: Color.Lanky,
        text: "Enguarde GB",
        totals: {
          gbs: 60
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Mermaid GB",
        totals: {
          gbs: 61
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT Galleon"
      }
    ]
  },
  {
    name: "GALLEON -> HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim to pipe GB, EXIT Lobby",
        totals: {
          gbs: 62
        }
      },
      {
        color: Color.Tiny,
        text: "Port to Saxophone GB",
        totals: {
          gbs: 63
        }
      },
      {
        color: Color.Tiny,
        text: "Helm Early"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "10 HOMING, bonus GB, deathwarp",
        totals: {
          gbs: 64
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "10 MORE HOMING, ENTER Helm"
      }
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Kickslide up slopes"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Pwalk to DK's room, medal, pull lever",
        totals: {
          medals: 12
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Rocket through stars"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch gates, Chunky's room, medal",
        totals: {
          medals: 13
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Tiny's room, medal",
        totals: {
          medals: 14
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Lanky's room, medal",
        totals: {
          medals: 15
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Diddy's room, medal, BC",
        totals: {
          medals: 16,
          crowns: 5
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 8, EXIT on fairies",
        totals: {
          keys: 5,
          fairies: 8
        }
      }
    ]
  },
  {
    name: "HELM -> CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Damage boost to BP, deathwarp",
        totals: {
          bps: 17
        }
      },
      {
        color: Color.DK,
        text: "Drop to cage GB",
        totals: {
          gbs: 65
        }
      },
      {
        color: Color.DK,
        text: "Castle Lobby, open BP gate"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, deathwarp",
        totals: {
          bps: 18
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "ENTER Castle"
      },
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Pwalk in tree (5)"
      },
      {
        color: Color.DK,
        text: "BP, balloon (15), roll clip",
        totals: {
          bps: 19
        }
      },
      {
        color: Color.DK,
        text: "Fairy, GB (20)",
        totals: {
          gbs: 66,
          fairies: 9
        }
      },
      {
        color: Color.DK,
        text: "Tag W4, climb to W2 (40)"
      },
      {
        color: Color.DK,
        text: "Min 7 coins, drop to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "W2, Rocket to cloud (5), bonus GB",
        totals: {
          gbs: 67
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Tag W5, library clip"
      },
      {
        color: Color.DK,
        text: "1 bunch (45), GB",
        totals: {
          gbs: 68
        }
      },
      {
        color: Color.DK,
        text: "Drop to Cranky, Jetpac, Slam 3"
      },
      {
        color: Color.DK,
        text: "Drop behind Cranky, enter tunnel (55)"
      },
      {
        color: Color.DK,
        text: "Safety: Tag W1"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Bonus GB",
        totals: {
          gbs: 69
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "BP, up to (20), enter dungeon",
        totals: {
          bps: 20
        }
      },
      {
        color: Color.Chunky,
        text: "2 balloons (40), 2 Diddy gates"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Face puzzle GB",
        totals: {
          gbs: 70
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "2 balloons (20), bonus GB",
        totals: {
          gbs: 71
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "2 bunches (15), balloon (25)"
      },
      {
        color: Color.Diddy,
        text: "Moontail for GB",
        totals: {
          gbs: 72
        }
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        text: "W5, ballroom GB (50)",
        totals: {
          gbs: 73
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "2 singles (2), enter ballroom"
      },
      {
        color: Color.Tiny,
        text: "Car race GB, fairy, Ports (32)",
        totals: {
          gbs: 74,
          fairies: 10
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Airswim to BP, climb to W5",
        totals: {
          bps: 21
        }
      },
      {
        color: Color.Tiny,
        text: "Down ramp until (51), drop inside"
      },
      {
        color: Color.Tiny,
        text: "Up to trash can (55)"
      },
      {
        color: Color.Tiny,
        text: "Trash GB, 10 HOMING, Key 7",
        totals: {
          keys: 6
        }
      },
      {
        color: Color.Lanky,
        text: "W4/W5, tower GB",
        totals: {
          gbs: 76
        }
      },
      {
        color: Color.Lanky,
        text: "Greenhouse GB (50), BC",
        totals: {
          gbs: 77,
          crowns: 6
        }
      },
      {
        color: Color.Lanky,
        text: "Drop to BP, drop to crypt",
        totals: {
          bps: 22
        }
      },
      {
        color: Color.Lanky,
        text: "Get (55), enter room"
      },
      {
        color: Color.Lanky,
        text: "Crypt GB, balloon (65)",
        totals: {
          gbs: 78
        }
      },
      {
        color: Color.Lanky,
        text: "Deathwarp, up to (75)",
        totals: {
          medals: 17
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Enter room, crypt GB (65)",
        totals: {
          gbs: 79
        }
      },
      {
        color: Color.Tiny,
        text: "Deathwarp, Funky balloon (75)",
        totals: {
          medals: 18
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, balloon (60), enter room",
        totals: {
          bps: 23
        }
      },
      {
        color: Color.Diddy,
        text: "Tag W1, crypt GB, balloon (75)",
        totals: {
          gbs: 80,
          medals: 19
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Enter room, tag W2",
      },
      {
        color: Color.DK,
        text: "Balloon (75), crypt GB",
        totals: {
          gbs: 81,
          medals: 20
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Enter room, crypt GB",
        totals: {
          gbs: 82
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Pwalk in tree (45), bonus GB",
        totals: {
          gbs: 83
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "W4, shed GB, balloon (65)",
        totals: {
          gbs: 84
        }
      },
      {
        color: Color.Chunky,
        text: "20 HOMING, go to museum"
      },
      {
        color: Color.Chunky,
        text: "Pwalk/pfall for GB, balloon (75)",
        totals: {
          gbs: 85,
          medals: 21
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT Castle"
      }
    ]
  },
  {
    name: "CASTLE -> AZTEC 2",
    steps: [
      {
        color: Color.Chunky,
        text: "Move rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Bonus GB, leave Lobby",
        totals: {
          gbs: 86
        }
      },
      {
        color: Color.Lanky,
        text: "Pswim to cage GB",
        totals: {
          gbs: 87
        }
      },
      {
        color: Color.Lanky,
        text: "Turn in Keys, 8, 3, 4"
      },
      {
        color: Color.Lanky,
        text: "Pwalk to Sprint GB, void out",
        totals: {
          gbs: 88
        }
      },
      {
        color: Color.Lanky,
        text: "Tag W3, W2, ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 2",
    steps: [
      {
        color: Color.Lanky,
        text: "Vulture GB (19), BC",
        totals: {
          gbs: 89,
          crowns: 7
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pwalk/pfall to cage bonus GB",
        totals: {
          gbs: 90
        }
      },
      {
        color: Color.Chunky,
        text: "Singles by Snide (6)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Beetle race GB (20)",
        totals: {
          gbs: 91
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Llama Temple (70), tag W2"
      },
      {
        color: Color.DK,
        text: "Climb to tag W1 (75)",
        totals: {
          medals: 22
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Fairy, Trombone for bonus GB",
        totals: {
          gbs: 92,
          fairies: 11
        }
      }
    ]
  },
  {
    name: "AZTEC 2 SKEW SECTION",
    steps: [
      {
        color: Color.Lanky,
        text: "Skew to balloons (39)"
      },
      {
        color: Color.Lanky,
        text: "Stairs singles (42), W1 (47)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Lava room GB (35)",
        totals: {
          gbs: 93
        }
      },
      {
        color: Color.Tiny,
        text: "W2, balloon (45), W1"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Skew to matching game GB",
        totals: {
          gbs: 94
        }
      },
      {
        color: Color.Lanky,
        text: "Skew to BP, W2, leave (50)",
        totals: {
          bps: 24
        }
      }
    ]
  },
  {
    name: "AZTEC 2 (CONT)",
    steps: [
      {
        color: Color.Lanky,
        text: "3 trees (65), 5DT GB (75)",
        totals: {
          gbs: 95,
          medals: 23
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Path, 3 trees (65)"
      },
      {
        color: Color.Tiny,
        text: "5DT GB, fairy, 2 trees (75)",
        totals: {
          gbs: 96,
          fairies: 12,
          medals: 24
        }
      },
      {
        color: Color.Tiny,
        text: "Enter T&S"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Key 2 as Chunky",
        totals: {
          keys: 7
        }
      },
      {
        color: Color.Chunky,
        text: "5DT GB, 2 balloons (26), BP",
        totals: {
          gbs: 97,
          bps: 25
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Vase GB (47), W1 (48)",
        totals: {
          gbs: 98
        }
      },
      {
        color: Color.Chunky,
        text: "Tiny Temple, bunches (75)",
        totals: {
          medals: 25
        }
      },
      {
        color: Color.Chunky,
        text: "Pswim to GB",
        totals: {
          gbs: 99
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT Aztec"
      },
    ]
  },
  {
    name: "AZTEC 2 -> CAVES",
    steps: [
      {
        color: Color.Chunky,
        text: "Move 2 rocks, Triangle GB",
        totals: {
          gbs: 100
        }
      },
      {
        color: Color.Lanky,
        text: "W2, Trombone pad, meme jump"
      },
      {
        color: Color.Lanky,
        text: "Pwalk to BP",
        totals: {
          bps: 26
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Guitar GB, ENTER Caves",
        totals: {
          gbs: 101
        }
      }
    ]
  },
  {
    name: "CAVES",
    steps: [
      {
        color: Color.Diddy,
        text: "Tag W2, Funky singles (5)"
      },
      {
        color: Color.Diddy,
        text: "Rocket to tag W5"
      },
      {
        color: Color.Diddy,
        text: "Rocket to bonus GB (10)",
        totals: {
          gbs: 102
        }
      },
      {
        color: Color.Diddy,
        text: "Rocket to Lanky cabin T&S"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Key 6 as Lanky",
        totals: {
          keys: 8
        }
      },
      {
        color: Color.Lanky,
        text: "Cabin GB (10), balloon (20)",
        totals: {
          gbs: 103
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Balloon (10), BP",
        totals: {
          bps: 27
        }
      },
      {
        color: Color.Tiny,
        text: "W2 to skip Kosha CS (if not yet)"
      },
      {
        color: Color.Tiny,
        text: "3 river singles (13), Tag W4"
      },
      {
        color: Color.Tiny,
        text: "2 river singles (15) to igloo"
      },
      {
        color: Color.Tiny,
        text: "5DI GB (30), fairy",
        totals: {
          gbs: 104,
          fairies: 13
        }
      },
      {
        color: Color.Tiny,
        text: "Tag W1/W3, ice shield GB (35)",
        totals: {
          gbs: 105
        }
      },
      {
        color: Color.Tiny,
        text: "Port to balloon (45), W4"
      },
      {
        color: Color.Tiny,
        text: "Mini to bonus GB (50), W3 (55)",
        totals: {
          gbs: 106
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "5DI GB (35)",
        totals: {
          gbs: 107
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "Entry singles (40)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "2 Snide singles, balloon (12)"
      },
      {
        color: Color.Chunky,
        text: "Pswim to Gone GB (20), W2",
        totals: {
          gbs: 108
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "DK cabin GB, BC (5)",
        totals: {
          gbs: 109,
          crowns: 8
        }
      },
      {
        color: Color.DK,
        text: "Roll clip for 5DC GB (15)",
        totals: {
          gbs: 110
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Pwalk for 5DC GB (50)",
        totals: {
          gbs: 111
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Pwalk to 5DC GB (75)",
        totals: {
          gbs: 112,
          medals: 26
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Balloon (20)"
      },
      {
        color: Color.Diddy,
        text: "Pwalk to upper 5DC GB (35), fairy",
        totals: {
          gbs: 113,
          fairies: 14
        }
      },
      {
        color: Color.Diddy,
        text: "Pwalk to lower 5DC GB (43)",
        totals: {
          gbs: 114
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W5 to BP (60)",
        totals: {
          bps: 28
        }
      },
      {
        color: Color.Lanky,
        text: "Ice Tomato GB (70)",
        totals: {
          gbs: 115
        }
      },
      {
        color: Color.Lanky,
        text: "Beetle race GB (75)",
        totals: {
          gbs: 116,
          medals: 27
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, W1 (25) to 5DI GB (50)",
        totals: {
          gbs: 117,
          bps: 29
        }
      },
      {
        color: Color.DK,
        text: "Blast bonus GB (75)",
        totals: {
          gbs: 118,
          medals: 28
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "W4 to BP, balloon (65)",
        totals: {
          bps: 30
        }
      },
      {
        color: Color.Diddy,
        text: "5DI GB (75)",
        totals: {
          gbs: 119,
          medals: 29
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W3, balloon (60), 5DI GB (70)",
        totals: {
          gbs: 120
        }
      },
      {
        color: Color.Chunky,
        text: "BP, ice shield GB (75)",
        totals: {
          gbs: 121,
          bps: 31,
          medals: 30
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT Caves"
      }
    ]
  },
  {
    name: "CAVES -> JAPES 2",
    steps: [
      {
        color: Color.Chunky,
        text: "Small island fairy, slam X",
        totals: {
          fairies: 15
        }
      },
      {
        color: Color.Chunky,
        text: "Cage GB, rock GB",
        totals: {
          gbs: 123
        }
      },
      {
        color: Color.Chunky,
        text: "Move Japes Lobby rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Trombone GB, ENTER Japes",
        totals: {
          gbs: 124
        }
      }
    ]
  },
  {
    name: "JAPES 2",
    steps: [
      {
        color: Color.Lanky,
        text: "Bush push"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Blast GB (75)",
        totals: {
          gbs: 125,
          medals: 31
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Pswim underground"
      },
      {
        color: Color.Chunky,
        text: "BP, GB (15), deathwarp",
        totals: {
          gbs: 126,
          bps: 32
        }
      },
      {
        color: Color.Chunky,
        text: "Rock GB",
        totals: {
          gbs: 127
        }
      }
    ]
  },
  {
    name: "JAPES 2 SKEW SECTION",
    steps: [
      {
        color: Color.Chunky,
        text: "CS to ground, tag W1, W2"
      },
      {
        color: Color.Chunky,
        text: "Funky bunches (25), cage GB",
        totals: {
          gbs: 128
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Snide bunch (5), cage GB",
        totals: {
          gbs: 129
        }
      },
      {
        color: Color.Lanky,
        text: "Wall skew, W4 to balloon (15)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Hut skew (5), balloon (15)"
      },
      {
        color: Color.Tiny,
        text: "W4 to cage GB, W3, BP",
        totals: {
          gbs: 130,
          bps: 33
        }
      },
      {
        color: Color.Tiny,
        text: "Tag W5, logs (45), stump GB",
        totals: {
          gbs: 131
        }
      },
      {
        color: Color.Tiny,
        text: "Skew into shell"
      }
    ]
  },
  {
    name: "JAPES 2 (CONT)",
    steps: [
      {
        color: Color.Tiny,
        text: "Shell GB (67)",
        totals: {
          gbs: 132
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "W1 to bonus GB (75), enter T&S",
        totals: {
          gbs: 133,
          medals: 32
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Bonus GB (20)",
        totals: {
          gbs: 134
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "W2, enter mountain (24), switch clip"
      },
      {
        color: Color.Diddy,
        text: "Minecart GB (49)",
        totals: {
          gbs: 135
        }
      },
      {
        color: Color.Diddy,
        text: "Open Lanky cave, BP (52), 2 trees (62)",
        totals: {
          bps: 34
        }
      },
      {
        color: Color.Diddy,
        text: "W2, mountain GB (75), W5",
        totals: {
          gbs: 136,
          medals: 33
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Hunky, 4 trees (45), bonus GB",
        totals: {
          gbs: 137
        }
      },
      {
        color: Color.Chunky,
        text: "Shell clip, fairy, balloons (75)",
        totals: {
          fairies: 16,
          medals: 34
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP, bonus GB (42)",
        totals: {
          gbs: 138,
          bps: 35
        }
      },
      {
        color: Color.Lanky,
        text: "Painting room GB, balloon (75), fairy",
        totals: {
          gbs: 139,
          fairies: 17,
          medals: 35
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES 2 -> FOREST",
    steps: [
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Leave Japes Lobby GB, Forest Lobby",
        totals: {
          gbs: 140
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Pwalk/pfall to BC, ENTER Forest",
        totals: {
          crowns: 9
        }
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.Chunky,
        text: "Tag W2 (5), tag W4, well GB (10)",
        totals: {
          gbs: 141
        }
      },
      {
        color: Color.Chunky,
        text: "Punch shed, Triangle (15), spider",
      },
      {
        color: Color.Chunky,
        text: "Clip to main room, OOB to DK GB",
        totals: {
          gbs: 142
        }
      },
      {
        color: Color.Chunky,
        text: "2 kegs, leave, keg GB",
        totals: {
          gbs: 143
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Tag W1, 7 river singles (7)"
      },
      {
        color: Color.Tiny,
        text: "Pswim behind Chunky door"
      },
      {
        color: Color.Tiny,
        text: "2 bunches, clip to back room (17)"
      },
      {
        color: Color.Tiny,
        text: "Spider GB (22)",
        totals: {
          gbs: 144
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT, fairy",
        totals: {
          fairies: 18
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "ENTER, pink tunnel (5)"
      },
      {
        color: Color.DK,
        text: "Tag W3, tag W5 (10)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "TBS for rabbit race GB",
        totals: {
          gbs: 145
        }
      },
      {
        color: Color.Lanky,
        text: "BP (8), W4, W3, clockwise to tag (18)",
        totals: {
          bps: 36
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Tag, gun skew"
      }
    ]
  },
  {
    name: "FOREST SKEW SECTION",
    steps: [
      {
        color: Color.Diddy,
        text: "Rocket (10), tag Tiny"
      },
      {
        color: Color.Tiny,
        text: "Rocket as Tiny to beanstalk GB",
        totals: {
          gbs: 146
        }
      },
      {
        color: Color.Tiny,
        text: "2 mushrooms (32)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tag W2 (20), save apple GB (29)",
        totals: {
          gbs: 147
        }
      },
      {
        color: Color.Chunky,
        text: "Skew through blue wall"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon (42)"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "BP, bunch (15), enter shed",
        totals: {
          bps: 37
        }
      }
    ]
  },
  {
    name: "FOREST (CONT)",
    steps: [
      {
        color: Color.DK,
        text: "Fairy, bonus GB (20)",
        totals: {
          gbs: 148,
          fairies: 19
        }
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Rocket to night switch (20)"
      },
      {
        color: Color.Diddy,
        text: "W4 (30), clockwise until (39)"
      },
      {
        color: Color.Diddy,
        text: "Owl GB (44)",
        totals: {
          gbs: 149
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Stump GB (50), deathwarp",
        totals: {
          gbs: 150
        }
      },
      {
        color: Color.Tiny,
        text: "W3 (60), bounce to BP",
        totals: {
          bps: 38
        }
      },
      {
        color: Color.Tiny,
        text: "Balloon (70), drop to inner tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to bonus GB, tag W5",
        totals: {
          gbs: 151
        }
      },
      {
        color: Color.Diddy,
        text: "Fall inside to BP, 3 singles (47)",
        totals: {
          bps: 39
        }
      },
      {
        color: Color.Diddy,
        text: "Out to tag by Blast"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Blast bonus GB (30)",
        totals: {
          gbs: 152
        }
      },
      {
        color: Color.DK,
        text: "Drop down, clockwise to (45)"
      },
      {
        color: Color.DK,
        text: "W5 (50), BC",
        totals: {
          crowns: 10
        }
      },
      {
        color: Color.Chunky,
        text: "Face puzzle GB (44)",
        totals: {
          gbs: 153
        }
      },
      {
        color: Color.Chunky,
        text: "Drop to BP (54), enter, fall until (75)",
        totals: {
          bps: 40,
          medals: 36
        }
      },
      {
        color: Color.Chunky,
        text: "Shoot switch"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Shoot switch, bonus GB (75)",
        totals: {
          gbs: 154,
          medals: 37
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Balloon (28), shoot switch"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Shoot switch"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Shoot/slam CS skip, cannon GB (65)",
        totals: {
          gbs: 155
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Balloon (38), pwalk to light room (43)",
        totals: {
          gbs: 156
        }
      },
      {
        color: Color.Lanky,
        text: "Slam switch, dark room GB, 1 bunch (53)",
        totals: {
          gbs: 157
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "W1 (58), attic GB, roof to (75)",
        totals: {
          gbs: 158,
          medals: 38
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Pswim to cage GB, across to barn attic",
        totals: {
          gbs: 159
        }
      },
      {
        color: Color.Diddy,
        text: "Bunches (65), GB, fairy",
        totals: {
          gbs: 160,
          fairies: 20
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Balloon (75), moonkick to Snide",
        totals: {
          medals: 39
        }
      }
    ]
  },
  {
    name: "SNIDE'S",
    steps: [
      {
        color: Color.DK,
        text: "Turn in BPs x8 (x5 if safety)",
        totals: {
          gbs: 168
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Turn in BPs x8",
        totals: {
          gbs: 176
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Turn in BPs x5",
        totals: {
          gbs: 181
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Turn in BPs x8",
        totals: {
          gbs: 189
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Balloon (75), turn in BPs x8",
        totals: {
          gbs: 197,
          medals: 40
        }
      },
      {
        color: Color.Diddy,
        text: "EXIT Forest"
      }
    ]
  },
  {
    name: "FOREST -> K. ROOL",
    steps: [
      {
        color: Color.Diddy,
        text: "Rocket to bonus GB",
        totals: {
          gbs: 198
        }
      },
      {
        color: Color.Diddy,
        text: "Cage GB, drop to W3",
        totals: {
          gbs: 199
        }
      },
      {
        color: Color.Tiny,
        text: "W5 to cage GB, fairy GB",
        totals: {
          gbs: 201
        }
      },
      {
        color: Color.Tiny,
        text: "W5/W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
