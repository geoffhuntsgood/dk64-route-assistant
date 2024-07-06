import { RouteSection } from "../classes";
import { Color, Tag } from "../enums";
import { defaultPreStart, krool } from "../utils/sections";

export const allIntermediate: RouteSection[] = [
  defaultPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Complete training barrels"
      },
      {
        color: Color.DK,
        text: "Get camera/shockwave from BFI"
      },
      {
        color: Color.DK,
        text: "Tag W5, 3 crystals"
      },
      {
        color: Color.DK,
        text: "Caves RC, Caves Early"
      },
      {
        color: Color.DK,
        text: "ENTER/EXIT Caves"
      },
      {
        color: Color.DK,
        text: "Ledge clip for lava GB",
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
        text: "Kick to Japes Lobby, ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES 1",
    steps: [
      {
        color: Color.DK,
        text: "Bush Push to river"
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
        text: "Climb to BC",
        totals: {
          crowns: 1
        }
      },
      {
        color: Color.DK,
        text: "Buy Coconut & Ammo Belt 1"
      },
      {
        color: Color.DK,
        text: "Climb tree, Snide balloon (20)"
      },
      {
        color: Color.DK,
        text: "Tag W2, Diddy GB (26)",
        totals: {
          gbs: 3
        }
      },
      {
        color: Color.DK,
        text: "Kick to tree, slope RC (31)"
      },
      {
        color: Color.DK,
        text: "1st switch, W3 (36)"
      },
      {
        color: Color.DK,
        text: "2nd switch, balloon (46)"
      },
      {
        color: Color.DK,
        text: "Climb to 3rd switch, Diddy GB",
        totals: {
          gbs: 4
        }
      },
      {
        color: Color.DK,
        text: "Tag W4, Cranky balloon (65)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Buy up to Spring"
      },
      {
        color: Color.Diddy,
        text: "W4, water bunches (10), 3 coins"
      },
      {
        color: Color.Diddy,
        text: "Buy Peanut"
      },
      {
        color: Color.Diddy,
        text: "Pswim to cave, balloon (20)",
        totals: {
          gbs: 5
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "RESET on 2nd 'Donk' for Key 1",
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
        text: "Tag W1/W3, turn in Key 1"
      },
      {
        color: Color.DK,
        text: "W1, W2, ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "BP, 3 coins",
        totals: {
          bps: 2
        }
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
        text: "Rocket to BP, balloon (10)",
        totals: {
          bps: 3
        }
      },
      {
        color: Color.Diddy,
        text: "Enter Tiny Temple"
      },
      {
        color: Color.Diddy,
        text: "Melt ice, swim to Tiny (35)"
      },
      {
        color: Color.Diddy,
        text: "Pswim to GB, OKONG",
        totals: {
          gbs: 6
        }
      },
      {
        color: Color.Diddy,
        text: "Pswim out, tag W2 (40)"
      },
      {
        color: Color.Diddy,
        text: "Open door, tag at Cranky (45)"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Buy Slam 2, balloons (20)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Buy up to Monkeyport"
      },
      {
        color: Color.Tiny,
        text: "Tag W3, BP, Tag W2 (10)",
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
        tag: Tag.Right,
        text: "DDQ for Key 5",
        totals: {
          keys: 2
        }
      },
      {
        color: Color.DK,
        text: "Banana push to bonus GB",
        totals: {
          gbs: 7
        }
      },
      {
        color: Color.DK,
        text: "Strong Kong out (40)"
      },
      {
        color: Color.DK,
        text: "Roll clip into 5DT"
      },
      {
        color: Color.DK,
        text: "L, 2 coins, R, GB",
        totals: {
          gbs: 8
        }
      },
      {
        color: Color.DK,
        text: "Blast course, balloon (54)"
      },
      {
        color: Color.DK,
        text: "Enter Llama Temple"
      },
      {
        color: Color.DK,
        text: "Free Lanky for GB",
        totals: {
          gbs: 9
        }
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "W1, climb 2 trees (64)"
      },
      {
        color: Color.DK,
        text: "Llama GB (67), 1 coin",
        totals: {
          gbs: 10
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "1 coin, Klaptrap GB (15)",
        totals: {
          gbs: 11
        }
      },
      {
        color: Color.Tiny,
        text: "W2/W3 to tag"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "2 coins max, bunch, single (6)"
      },
      {
        color: Color.Lanky,
        text: "Buy up to Sprint"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "W3, tower GB (51)",
        totals: {
          gbs: 12
        }
      },
      {
        color: Color.Diddy,
        text: "Rocket to sun, 5DT switch (60)"
      },
      {
        color: Color.Diddy,
        text: "Try Again, vulture GB (65)",
        totals: {
          gbs: 13
        }
      },
      {
        color: Color.Diddy,
        text: "Feed totem, enter 5DT"
      },
      {
        color: Color.Diddy,
        text: "R, balloon (75), L, GB",
        totals: {
          gbs: 14,
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
        text: "Charge gongs"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Twirl to bonus GB",
        totals: {
          gbs: 15
        }
      },
      {
        color: Color.Tiny,
        text: "W2, W1, turn in Key 5"
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
        text: "Tag W2 (5), robot push"
      },
      {
        color: Color.Lanky,
        text: "Open Tiny cage OOB"
      },
      {
        color: Color.Lanky,
        text: "Pipe GB, pipe (30), tag W4",
        totals: {
          gbs: 16
        }
      },
      {
        color: Color.Lanky,
        text: "Free Chunky GB (35)",
        totals: {
          gbs: 17
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
        text: "Slam blue switch"
      },
      {
        color: Color.DK,
        text: "Box kick to shed GB (25)",
        totals: {
          gbs: 18
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
          gbs: 19
        }
      },
      {
        color: Color.Chunky,
        text: "Tag W1 (20), 1 coin"
      },
      {
        color: Color.Chunky,
        text: "Climb to bonus GB, enter T&S",
        totals: {
          gbs: 20
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Clear MJ CS, leave T&S"
      },
      {
        color: Color.DK,
        text: "DK Arcade x2, enter T&S",
        totals: {
          gbs: 21,
          nCoin: true
        }
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
        text: "Cage GB (5), BP",
        totals: {
          gbs: 22,
          bps: 5
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Wheel GB (25)",
        totals: {
          gbs: 23
        }
      },
      {
        color: Color.Tiny,
        text: "Funky balloon (35), fairy",
        totals: {
          fairies: 2
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Buy Grape, Homing Ammo"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Buy Pineapple, Ammo Belt 2, BP",
        totals: {
          bps: 6
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Numbers GB (60), fairy",
        totals: {
          gbs: 24,
          fairies: 3
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Block Tower GB (20)",
        totals: {
          gbs: 25
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Bonus GB, go to R&D",
        totals: {
          gbs: 26
        }
      },
      {
        color: Color.Lanky,
        text: "Singles & tag W2 (55)"
      },
      {
        color: Color.Lanky,
        text: "BC ladder push",
        totals: {
          crowns: 2
        }
      },
      {
        color: Color.Lanky,
        text: "BP, balloon (65)",
        totals: {
          bps: 7
        }
      },
      {
        color: Color.Lanky,
        text: "Piano GB: CBCDECA",
        totals: {
          gbs: 27
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Car race GB (45)",
        totals: {
          gbs: 28
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT - tag in Lobby"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "ENTER, hatch balloon (30)"
      },
      {
        color: Color.Chunky,
        text: "Tag W1 (35), W2"
      },
      {
        color: Color.Chunky,
        text: "Toy monster GB (55)",
        totals: {
          gbs: 29
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "R&D GB (50): 3124,4231,1342",
        totals: {
          gbs: 30
        }
      },
      {
        color: Color.Diddy,
        text: "Fall to switch/bonus GB",
        totals: {
          gbs: 31
        }
      },
      {
        color: Color.Diddy,
        text: "Slam prod switch, BP (60), W4",
        totals: {
          bps: 8
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Jump (60), slam prod switch"
      },
      {
        color: Color.Chunky,
        text: "Crusher GB, spin (75)",
        totals: {
          medals: 2
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon, bonus GB (75)",
        totals: {
          gbs: 33,
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
        text: "Spring to GB (75)",
        totals: {
          gbs: 34,
          medals: 5
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, crusher GB (75)",
        totals: {
          gbs: 35,
          bps: 9,
          medals: 6
        }
      },
      {
        color: Color.DK,
        text: "EXIT Factory"
      },
    ]
  },
  {
    name: "FACTORY -> GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "Bongos GB",
        totals: {
          gbs: 36
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch box"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, fairy",
        totals: {
          bps: 10,
          fairies: 4
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Drop to Snide Spring GB",
        totals: {
          gbs: 37
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BC, fall to Galleon, BP",
        totals: {
          bps: 11,
          crowns: 3
        }
      },
      {
        color: Color.Chunky,
        text: "ENTER Galleon"
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Tag W2/W3 (10), BC",
        totals: {
          crowns: 4
        }
      },
      {
        color: Color.Chunky,
        text: "Chest GB, fairy (15)",
        totals: {
          gbs: 38,
          fairies: 5
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Cannon GB, balloon (25)",
        totals: {
          gbs: 39
        }
      },
      {
        color: Color.Chunky,
        text: "Pswim to lighthouse"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Raise water, tag W5"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Lighthouse GB (30)",
        totals: {
          gbs: 40
        }
      },
      {
        color: Color.DK,
        text: "Balloon outside (40)"
      },
      {
        color: Color.DK,
        text: "Blast (55), Snide tag (BPs?)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon (10), turn in BPs",
        totals: {
          gbs: 43
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
        color: Color.Tiny,
        text: "Key 4 as Tiny",
        totals: {
          keys: 4
        }
      },
      {
        color: Color.Tiny,
        text: "OOB above T&S, cactus tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Cactus balloon (10)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Cactus balloon (35), BP",
        totals: {
          bps: 13
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Submarine GB",
        totals: {
          gbs: 44
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Cannon bunches (35)"
      },
      {
        color: Color.Tiny,
        text: "Pswim to tag W2"
      },
      {
        color: Color.Tiny,
        text: "5DS GB (50), fairy",
        totals: {
          gbs: 45,
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
          gbs: 46
        }
      },
      {
        color: Color.Diddy,
        text: "5DS GB, W5, seal balloon (30)",
        totals: {
          gbs: 47
        }
      },
      {
        color: Color.Diddy,
        text: "Ship switch, BP",
        totals: {
          bps: 14
        }
      },
      {
        color: Color.Diddy,
        text: "Lighthouse GB",
        totals: {
          gbs: 48
        }
      },
      {
        color: Color.Diddy,
        text: "W5 to Mech Fish GB",
        totals: {
          gbs: 49
        }
      },
      {
        color: Color.Diddy,
        text: "Bunches by Mech Fish (60)"
      },
      {
        color: Color.Diddy,
        text: "Treasure room GB (75)",
        totals: {
          gbs: 50,
          medals: 7
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Balloon/bunch (75)",
        totals: {
          medals: 8
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Treasure room GB (5)",
        totals: {
          gbs: 51
        }
      },
      {
        color: Color.Lanky,
        text: "Pswim to pearls"
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "Balloons and path (30)"
      },
      {
        color: Color.Lanky,
        text: "W2 noclip, 2DS GB (40)",
        totals: {
          gbs: 52
        }
      },
      {
        color: Color.Lanky,
        text: "Box balloon, 5DS GB (65)",
        totals: {
          gbs: 53
        }
      },
      {
        color: Color.Lanky,
        text: "Enguarde bunch (70)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tunnel (50), 5DS GB",
        totals: {
          gbs: 54
        }
      },
      {
        color: Color.Chunky,
        text: "W5 to Lag Ship (75)",
        totals: {
          gbs: 55,
          medals: 9
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "W2 noclip, 5DS GB (60)",
        totals: {
          gbs: 56
        }
      },
      {
        color: Color.DK,
        text: "Tunnel (75), W4, BP",
        totals: {
          bps: 15,
          medals: 10
        }
      },
      {
        color: Color.DK,
        text: "Get Seal GB",
        totals: {
          gbs: 57
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Seal Race Skip GB",
        totals: {
          gbs: 58
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "BP, pswim to lighthouse",
        totals: {
          bps: 16
        }
      },
      {
        color: Color.Lanky,
        text: "Chest pswim (75)",
        totals: {
          medals: 11
        }
      },
      {
        color: Color.Lanky,
        text: "Enguarde chest GB",
        totals: {
          gbs: 59
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Mermaid GB",
        totals: {
          gbs: 60
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT Galleon"
      },
    ]
  },
  {
    name: "GALLEON -> HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim for pipe GB",
        totals: {
          gbs: 61
        }
      },
      {
        color: Color.Tiny,
        text: "Port to Saxophone GB",
        totals: {
          gbs: 62
        }
      },
      {
        color: Color.Tiny,
        text: "Helm early"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "10 HOMING, bonus GB",
        totals: {
          gbs: 63
        }
      },
      {
        color: Color.Chunky,
        text: "Deathwarp"
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
        text: "Kickslide up hills"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Switch kick to DK's room, medal",
        totals: {
          medals: 12
        }
      },
      {
        color: Color.DK,
        text: "Pull lever in main room"
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
          crowns: 5,
          medals: 16
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Terminal clip, Key 8",
        totals: {
          keys: 5
        }
      },
      {
        color: Color.DK,
        text: "EXIT on fairy picture",
        totals: {
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
        text: "Damage boost to BP",
        totals: {
          bps: 17
        }
      },
      {
        color: Color.DK,
        text: "Deathwarp, leave Lobby"
      },
      {
        color: Color.DK,
        text: "Drop to cage GB",
        totals: {
          gbs: 64
        }
      },
      {
        color: Color.DK,
        text: "Enter Castle Lobby, BP switch"
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
      }
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Cross plank (5)"
      },
      {
        color: Color.DK,
        text: "Pswim into tree"
      },
      {
        color: Color.DK,
        text: "BP, balloon (15)",
        totals: {
          bps: 19
        }
      },
      {
        color: Color.DK,
        text: "Roll clip for fairy, GB (20)",
        totals: {
          gbs: 65,
          fairies: 9
        }
      },
      {
        color: Color.DK,
        text: "Tag W4, to W2 (40), drop to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "W2, rocket to cloud (5)",
      },
      {
        color: Color.Diddy,
        text: "Bonus GB on tower",
        totals: {
          gbs: 66
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Tag W5, library clip",
      },
      {
        color: Color.DK,
        text: "1 bunch (45), library GB",
        totals: {
          gbs: 67
        }
      },
      {
        color: Color.DK,
        text: "Drop to Cranky, Jetpac"
      },
      {
        color: Color.DK,
        text: "Buy Slam 3"
      },
      {
        color: Color.DK,
        text: "Drop behind, enter tunnel (55)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Twirl to bonus GB",
        totals: {
          gbs: 68
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Singles until (15)"
      },
      {
        color: Color.Chunky,
        text: "BP, enter dungeon",
        totals: {
          bps: 20
        }
      },
      {
        color: Color.Chunky,
        text: "2 balloons (35), 2 Diddy gates"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Face puzzle GB",
        totals: {
          gbs: 69
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "2 balloons (20)"
      },
      {
        color: Color.Lanky,
        text: "Bonus GB, deathwarp",
        totals: {
          gbs: 70
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "2 bunches, balloon (25)"
      },
      {
        color: Color.Diddy,
        text: "Moontail for GB",
        totals: {
          gbs: 71
        }
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        text: "W5, fall to ballroom"
      },
      {
        color: Color.Diddy,
        text: "Bonus GB, balloon (50)",
        totals: {
          gbs: 72
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "2 singles (2), car race GB",
        totals: {
          gbs: 73
        }
      },
      {
        color: Color.Tiny,
        text: "Fairy, Port, balloon (32)",
        totals: {
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
        text: "Down to (51), drop"
      },
      {
        color: Color.Tiny,
        text: "Up to trash can (55)"
      },
      {
        color: Color.Tiny,
        text: "Trash GB (60), 10 HOMING",
        totals: {
          gbs: 74
        }
      },
      {
        color: Color.Tiny,
        text: "Enter KKO as Tiny for Key 7",
        totals: {
          keys: 6
        }
      },
      {
        color: Color.Lanky,
        text: "W4/W5, tower GB",
        totals: {
          gbs: 75
        }
      },
      {
        color: Color.Lanky,
        text: "Drop to greenhouse GB, BC (50)",
        totals: {
          gbs: 76,
          crowns: 6
        }
      },
      {
        color: Color.Lanky,
        text: "Drop to BP, drop to crypt (55)",
        totals: {
          bps: 22
        }
      },
      {
        color: Color.Lanky,
        text: "Crypt GB, balloon (65)",
        totals: {
          gbs: 77
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
        text: "Funky balloon (70)"
      },
      {
        color: Color.Tiny,
        text: "Crypt GB (75), deathwarp",
        totals: {
          medals: 18
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, balloon (60)",
        totals: {
          bps: 23
        }
      },
      {
        color: Color.Diddy,
        text: "Crypt GB (75)",
        totals: {
          gbs: 79,
          medals: 19
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Balloon (75), crypt GB",
        totals: {
          gbs: 80,
          medals: 20
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Crypt GB",
        totals: {
          gbs: 81
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER",
      },
      {
        color: Color.Chunky,
        text: "Pswim into tree"
      },
      {
        color: Color.Chunky,
        text: "Balloon (50), bonus GB",
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
        text: "W4 to shed GB",
        totals: {
          gbs: 83
        }
      },
      {
        color: Color.Chunky,
        text: "Balloon (60), 20 HOMING"
      },
      {
        color: Color.Chunky,
        text: "Down to museum"
      },
      {
        color: Color.Chunky,
        text: "Bunch, balloon (75), GB",
        totals: {
          gbs: 84,
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
        text: "Move Lobby rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Bonus GB, leave Lobby",
        totals: {
          gbs: 85
        }
      },
      {
        color: Color.Lanky,
        text: "Pswim to cage GB",
        totals: {
          gbs: 86
        }
      },
      {
        color: Color.Lanky,
        text: "Get Sprint, turn in Keys 8 & 3"
      },
      {
        color: Color.Lanky,
        text: "Press switch, cage GB",
        totals: {
          gbs: 87
        }
      },
      {
        color: Color.Lanky,
        text: "Turn in key 4, W1"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W2, move rock, drop to tag"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "W2 to Trombone pad",
      },
      {
        color: Color.Lanky,
        text: "ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 2",
    steps: [
      {
        color: Color.Lanky,
        text: "Vulture GB, up to (19), BC",
        totals: {
          gbs: 88,
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
        text: "Cage clip to bonus GB",
        totals: {
          gbs: 89
        }
      },
      {
        color: Color.Chunky,
        text: "Stairs by Snide (6)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Beetle Race GB (20)",
        totals: {
          gbs: 90
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Enter Llama Temple"
      },
      {
        color: Color.DK,
        text: "Tag W2/W1 (75)",
        totals: {
          medals: 22
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Fairy, bonus GB",
        totals: {
          gbs: 91,
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
        text: "Climb stairs (42), W1 (47)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Lava room GB (35)",
        totals: {
          gbs: 92
        }
      },
      {
        color: Color.Tiny,
        text: "W2, balloon (45), W1"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Matching game GB",
        totals: {
          gbs: 93
        }
      },
      {
        color: Color.Lanky,
        text: "Skew to BP, W2",
        totals: {
          bps: 24
        }
      },
      {
        color: Color.Lanky,
        text: "Leave temple (50)"
      }
    ]
  },
  {
    name: "AZTEC 2 (CONT)",
    steps: [
      {
        color: Color.Lanky,
        text: "Climb 3 trees (65)"
      },
      {
        color: Color.Lanky,
        text: "5DT GB (R, R), balloon (75)",
        totals: {
          gbs: 94,
          medals: 23
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Path and 3 trees (65)"
      },
      {
        color: Color.Tiny,
        text: "5DT GB (L, L), fairy",
        totals: {
          gbs: 95,
          fairies: 12
        }
      },
      {
        color: Color.Tiny,
        text: "2 trees (75), enter T&S",
        totals: {
          medals: 24
        }
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
        text: "5DT GB (26), BP",
        totals: {
          gbs: 96,
          bps: 25
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Vase Room GB (47), W1 (48)",
        totals: {
          gbs: 97
        }
      },
      {
        color: Color.Chunky,
        text: "Enter Tiny Temple, bunches (75)",
        totals: {
          medals: 25
        }
      },
      {
        color: Color.Chunky,
        text: "Pswim to GB, EXIT",
        totals: {
          gbs: 98
        }
      }
    ]
  },
  {
    name: "AZTEC 2 -> CAVES",
    steps: [
      {
        color: Color.Chunky,
        text: "Leave Lobby, Triangle GB",
        totals: {
          gbs: 99
        }
      },
      {
        color: Color.Chunky,
        text: "Caves Lobby, Punch left wall"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP",
        totals: {
          bps: 26
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Guitar GB, ENTER Caves",
        totals: {
          gbs: 100
        }
      }
    ]
  },
  {
    name: "CAVES",
    steps: [
      {
        color: Color.Diddy,
        text: "Tag W2, Funky (5), Tag W5"
      },
      {
        color: Color.Diddy,
        text: "Rocket to bonus GB (10)",
        totals: {
          gbs: 101
        }
      },
      {
        color: Color.Diddy,
        text: "Fly to T&S above DK cabin"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 6",
        totals: {
          keys: 8
        }
      },
      {
        color: Color.DK,
        text: "DK Cabin GB, BC (5)",
        totals: {
          gbs: 102,
          crowns: 8
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W2 (10), pswim to GB (18)",
        totals: {
          gbs: 103
        }
      },
      {
        color: Color.Chunky,
        text: "W2 CS skip (?), Snide (30)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Swim to tag W4 (2)"
      },
      {
        color: Color.Tiny,
        text: "Tag W1/W3 by igloo (5)"
      },
      {
        color: Color.Tiny,
        text: "Tiny 5DI GB, fairy (20)",
        totals: {
          gbs: 104,
          fairies: 13
        }
      },
      {
        color: Color.Tiny,
        text: "Clip for ice dome GB",
        totals: {
          gbs: 105
        }
      },
      {
        color: Color.Tiny,
        text: "Port to balloon (35), W4"
      },
      {
        color: Color.Tiny,
        text: "Mini to bonus GB, W3 (45)",
        totals: {
          gbs: 106
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Lanky 5DI GB (15)",
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
        text: "W2 to cabin GB (30)",
        totals: {
          gbs: 108
        }
      },
      {
        color: Color.Lanky,
        text: "Waterfall balloon (40)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, balloon (55), 5DC GB (75)",
        totals: {
          gbs: 109,
          bps: 27,
          medals: 26
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "5DC GB (50)",
        totals: {
          gbs: 110
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "5DC GB (15)",
        totals: {
          gbs: 111
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Balloon above cabins (20)"
      },
      {
        color: Color.Diddy,
        text: "Upper 5DC GB (35), fairy",
        totals: {
          fairies: 14
        }
      },
      {
        color: Color.Diddy,
        text: "Lower 5DC GB (43)",
        totals: {
          gbs: 113
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W5 for BP (60)",
        totals: {
          bps: 28
        }
      },
      {
        color: Color.Lanky,
        text: "Ice Tomato, balloon (70)",
        totals: {
          gbs: 114
        }
      },
      {
        color: Color.Lanky,
        text: "Beetle Race (75)",
        totals: {
          gbs: 115,
          medals: 27
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, W1 to 5DI GB (50)",
        totals: {
          gbs: 116,
          bps: 29
        }
      },
      {
        color: Color.DK,
        text: "Blast course (75)",
        totals: {
          gbs: 117,
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
          gbs: 118,
          medals: 29
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W3, balloon (60), W3"
      },
      {
        color: Color.Chunky,
        text: "5DI GB (70), BP",
        totals: {
          bps: 31
        }
      },
      {
        color: Color.Chunky,
        text: "Clip for ice dome GB (75)",
        totals: {
          gbs: 120,
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
        text: "Cage GB, Rock GB",
        totals: {
          gbs: 122
        }
      },
      {
        color: Color.Chunky,
        text: "Japes Lobby, move rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Trombone GB",
        totals: {
          gbs: 123
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "ENTER Japes"
      },
    ]
  },
  {
    name: "JAPES 2",
    steps: [
      {
        color: Color.DK,
        text: "Bush push to Blast (75)",
        totals: {
          gbs: 124,
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
        text: "BP, GB (20)",
        totals: {
          bps: 32
        }
      },
      {
        color: Color.Chunky,
        text: "Deathwarp to rock GB",
        totals: {
          gbs: 126
        }
      }
    ]
  },
  {
    name: "JAPES 2 SKEW SECTION",
    steps: [
      {
        color: Color.Chunky,
        text: "CS to ground, tag W1/W2"
      },
      {
        color: Color.Chunky,
        text: "Funky bunches (30), cage GB",
        totals: {
          gbs: 127
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Cage GB",
        totals: {
          gbs: 128
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Snide bunch (5), cage GB",
        totals: {
          gbs: 129
        }
      },
      {
        color: Color.Lanky,
        text: "Wall skew to W4, balloon (15)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Hut skew, balloon (15)"
      },
      {
        color: Color.Tiny,
        text: "W4, cage GB, W3",
        totals: {
          gbs: 130
        }
      },
      {
        color: Color.Tiny,
        text: "BP, tag W5, log skew (45)",
        totals: {
          bps: 33
        }
      },
      {
        color: Color.Tiny,
        text: "Stump GB, enter shell",
        totals: {
          gbs: 131
        }
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
        text: "W1, bonus GB (75) T&S to tag",
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
        text: "W2, enter mountain (24)"
      },
      {
        color: Color.Diddy,
        text: "Backflip clip to switch"
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
        text: "Open Lanky's cave, BP (52)",
        totals: {
          bps: 34
        }
      },
      {
        color: Color.Diddy,
        text: "W2 to mountain GB",
        totals: {
          gbs: 136
        }
      },
      {
        color: Color.Diddy,
        text: "Balloon (75), W5",
        totals: {
          medals: 33
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "3 trees (45) and bonus GB",
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
        text: "Painting room GB (65)",
        totals: {
          gbs: 139
        }
      },
      {
        color: Color.Lanky,
        text: "Balloon (75), fairy, EXIT Japes",
        totals: {
          fairies: 17,
          medals: 35
        }
      }
    ]
  },
  {
    name: "JAPES 2 -> FOREST",
    steps: [
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Leave Lobby for GB",
        totals: {
          gbs: 140
        }
      },
      {
        color: Color.DK,
        text: "Enter Forest Lobby"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Shoot mushroom"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Shoot mushroom"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Shoot mushroom"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Shoot mushroom"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Shoot mushroom"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Gone for BC, ENTER Forest",
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
        text: "Tag W2/W4, well GB (10)",
        totals: {
          gbs: 141
        }
      },
      {
        color: Color.Chunky,
        text: "Punch shed door, Triangle (15)"
      },
      {
        color: Color.Chunky,
        text: "Beat spider, clip to main room"
      },
      {
        color: Color.Chunky,
        text: "OOB to lever GB",
        totals: {
          gbs: 142
        }
      },
      {
        color: Color.Chunky,
        text: "2 kegs, leave to tag W1"
      },
      {
        color: Color.Chunky,
        text: "Reenter for 3rd keg GB",
        totals: {
          gbs: 143
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Mini to back room"
      },
      {
        color: Color.Tiny,
        text: "Spider GB (15)",
        totals: {
          gbs: 144
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.Tiny,
        text: "Swim to (27), thorn skew"
      }
    ]
  },
  {
    name: "FOREST SKEW SECTION",
    steps: [
      {
        color: Color.Tiny,
        text: "Balloon by T&S (37)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tag W2, save apple (29)",
        totals: {
          gbs: 145
        }
      },
      {
        color: Color.Chunky,
        text: "Clip through blue wall"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "BP, (5), enter shed",
        totals: {
          bps: 36
        }
      }
    ]
  },
  {
    name: "FOREST (CONT)",
    steps: [
      {
        color: Color.DK,
        text: "Bonus GB (10), fairy",
        totals: {
          gbs: 146,
          fairies: 18
        }
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "Pink tunnel to tag W3 (15)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W3 (6)",
      },
      {
        color: Color.Lanky,
        text: "Pswim to rabbit GB (14)",
        totals: {
          gbs: 147
        }
      },
      {
        color: Color.Lanky,
        text: "BP",
        totals: {
          bps: 37
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "W4, rocket to night (20)"
      },
      {
        color: Color.Diddy,
        text: "W4, clockwise to (29)"
      },
      {
        color: Color.Diddy,
        text: "Owl GB (34)",
        totals: {
          gbs: 148
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Stump GB (50)",
        totals: {
          gbs: 149
        }
      },
      {
        color: Color.Tiny,
        text: "Bean, deathwarp"
      },
      {
        color: Color.Tiny,
        text: "W2, 1 mushroom (55), beanstalk GB",
        totals: {
          gbs: 150
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT for fairy, ENTER, W3 (60)",
        totals: {
          fairies: 19
        }
      },
      {
        color: Color.Tiny,
        text: "Mushroom to BP (70), drop to tag",
        totals: {
          bps: 38
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to bonus GB (44)",
        totals: {
          gbs: 151
        }
      },
      {
        color: Color.Diddy,
        text: "Tag W5, inside BP, out to Blast (47)",
        totals: {
          bps: 39
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Blast course (25)",
        totals: {
          gbs: 152
        }
      },
      {
        color: Color.DK,
        text: "Down ladder, clockwise to (40)"
      },
      {
        color: Color.DK,
        text: "W5 (50) to BC",
        totals: {
          crowns: 10
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Face room GB (44)",
        totals: {
          gbs: 153
        }
      },
      {
        color: Color.Chunky,
        text: "Fall to BP (54), enter mushroom",
        totals: {
          bps: 40
        }
      },
      {
        color: Color.Chunky,
        text: "Fall to (75), shoot switch",
        totals: {
          medals: 36
        }
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
        text: "Shoot switch, balloon (24)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Shoot switch"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Slam/shoot overlap, cannon GB (65)",
        totals: {
          gbs: 155
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Balloon (34), dark room GB (49)",
        totals: {
          gbs: 156
        }
      },
      {
        color: Color.Lanky,
        text: "Light room GB (54)",
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
        text: "W1 (59), attic GB, roof for (75)",
        totals: {
          gbs: 158,
          medals: 38
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Pswim to cage GB",
        totals: {
          gbs: 159
        }
      },
      {
        color: Color.Diddy,
        text: "Attic GB (65) and fairy",
        totals: {
          gbs: 160,
          fairies: 20
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Balloon (75), moonkick to Snide's",
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
        text: "Turn in BPs x8",
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
        tag: Tag.Right,
        text: "W5 to fairy cage GB",
        totals: {
          gbs: 200
        }
      },
      {
        color: Color.Tiny,
        text: "Rare Banana, W5/W3, ENTER K. Rool",
        totals: {
          gbs: 201
        }
      }
    ]
  },
  krool
];
