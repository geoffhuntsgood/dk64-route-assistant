import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { defaultPreStart, krool } from "../../utils/sections";

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
        gbs: 1
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
        gbs: 2
      },
      {
        color: Color.DK,
        text: "BP, 3 coins, tag W3 (5)"
      },
      {
        color: Color.DK,
        text: "Climb to BC"
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
        gbs: 3
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
        gbs: 4
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
        gbs: 5
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "RESET on 2nd 'Donk' for Key 1"
      }
    ]
  },
  {
    name: "JAPES 1 TO AZTEC 1",
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
        text: "BP, 3 coins"
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
        text: "Rocket to BP, balloon (10)"
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
        gbs: 6
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
        text: "Tag W3, BP, Tag W2 (10)"
      },
      {
        color: Color.Tiny,
        text: "Buy Feather, enter T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "DDQ for Key 5"
      },
      {
        color: Color.DK,
        text: "Banana push to bonus GB",
        gbs: 7
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
        gbs: 8
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
        gbs: 9
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
        gbs: 10
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "1 coin, Klaptrap GB (15)",
        gbs: 11
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
        gbs: 12
      },
      {
        color: Color.Diddy,
        text: "Rocket to sun, 5DT switch (60)"
      },
      {
        color: Color.Diddy,
        text: "Try Again, vulture GB (65)",
        gbs: 13
      },
      {
        color: Color.Diddy,
        text: "Feed totem, enter 5DT"
      },
      {
        color: Color.Diddy,
        text: "R, balloon (75), L, GB",
        gbs: 14
      },
      {
        color: Color.Diddy,
        text: "EXIT Aztec"
      }
    ]
  },
  {
    name: "AZTEC 1 TO FACTORY",
    steps: [
      {
        color: Color.Diddy,
        text: "Charge gongs"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Twirl to bonus GB",
        gbs: 15
      },
      {
        color: Color.Tiny,
        text: "W2, W1, turn in Key 5"
      },
      {
        color: Color.Tiny,
        text: "Port to fairy, fall to Factory"
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
        gbs: 16
      },
      {
        color: Color.Lanky,
        text: "Free Chunky GB (35)",
        gbs: 17
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
        gbs: 18
      },
      {
        color: Color.DK,
        text: "Blast w/all bunches (45)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Dark room RC, GB (15)",
        gbs: 19
      },
      {
        color: Color.Chunky,
        text: "Tag W1 (20), 1 coin"
      },
      {
        color: Color.Chunky,
        text: "Climb to bonus GB, enter T&S",
        gbs: 20
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Clear MJ CS, leave T&S"
      },
      {
        color: Color.DK,
        text: "DK Arcade x2, enter T&S",
        gbs: 21
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Key 3"
      },
      {
        color: Color.Tiny,
        text: "Cage GB (5), BP",
        gbs: 22
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Wheel GB (25)",
        gbs: 23
      },
      {
        color: Color.Tiny,
        text: "Funky balloon (35), fairy"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Buy Grape, Homing Ammo"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Buy Pineapple, Ammo Belt 2, BP"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Numbers GB (60), fairy",
        gbs: 24
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Block Tower GB (20)",
        gbs: 25
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Bonus GB, go to R&D",
        gbs: 26
      },
      {
        color: Color.Lanky,
        text: "Singles & tag W2 (55)"
      },
      {
        color: Color.Lanky,
        text: "BC ladder push"
      },
      {
        color: Color.Lanky,
        text: "BP, balloon (65)"
      },
      {
        color: Color.Lanky,
        text: "Piano GB: CBCDECA",
        gbs: 27
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Car race GB (45)",
        gbs: 28
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
        gbs: 29
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "R&D GB (50): 3124,4231,1342",
        gbs: 30
      },
      {
        color: Color.Diddy,
        text: "Fall to switch/bonus GB",
        gbs: 31
      },
      {
        color: Color.Diddy,
        text: "Slam prod switch, BP (60), W4"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Jump (60), slam prod switch"
      },
      {
        color: Color.Chunky,
        text: "Crusher GB, spin (75)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon, bonus GB (75)",
        gbs: 33
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Balloon (75)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Spring to GB (75)",
        gbs: 34
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, crusher GB (75)",
        gbs: 35
      },
      {
        color: Color.DK,
        text: "EXIT Factory"
      },
    ]
  },
  {
    name: "FACTORY TO GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "Bongos GB",
        gbs: 36
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch box"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, fairy"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Drop to Snide Spring GB",
        gbs: 37
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BC, fall to Galleon, BP"
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
        text: "Tag W2/W3 (10), BC"
      },
      {
        color: Color.Chunky,
        text: "Chest GB, fairy (15)",
        gbs: 38
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Cannon GB, balloon (25)",
        gbs: 39
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
        gbs: 40
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
        gbs: 43
      },
      {
        color: Color.Tiny,
        text: "W3, BP (20), enter T&S"
      },
      {
        color: Color.Tiny,
        text: "Key 4 as Tiny"
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
        text: "Cactus balloon (35), BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Submarine GB",
        gbs: 44
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
        gbs: 45
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "W2 noclip to 2DS GB (60)",
        gbs: 46
      },
      {
        color: Color.Diddy,
        text: "5DS GB, W5, seal balloon (30)",
        gbs: 47
      },
      {
        color: Color.Diddy,
        text: "Ship switch, BP"
      },
      {
        color: Color.Diddy,
        text: "Lighthouse GB",
        gbs: 48
      },
      {
        color: Color.Diddy,
        text: "W5 to Mech Fish GB",
        gbs: 49
      },
      {
        color: Color.Diddy,
        text: "Bunches by Mech Fish (60)"
      },
      {
        color: Color.Diddy,
        text: "Treasure room GB (75)",
        gbs: 50
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Balloon/bunch (75)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Treasure room GB (5)",
        gbs: 51
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
        gbs: 52
      },
      {
        color: Color.Lanky,
        text: "Box balloon, 5DS GB (65)",
        gbs: 53
      },
      {
        color: Color.Lanky,
        text: "Enguarde bunch (70)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tunnel (50), 5DS GB",
        gbs: 54
      },
      {
        color: Color.Chunky,
        text: "W5 to Lag Ship (75)",
        gbs: 55
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "W2 noclip, 5DS GB (60)",
        gbs: 56
      },
      {
        color: Color.DK,
        text: "Tunnel (75), W4, BP"
      },
      {
        color: Color.DK,
        text: "Get Seal GB",
        gbs: 57
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Seal Race Skip GB",
        gbs: 58
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "BP, pswim to lighthouse"
      },
      {
        color: Color.Lanky,
        text: "Chest pswim (75)"
      },
      {
        color: Color.Lanky,
        text: "Enguarde chest GB",
        gbs: 59
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Mermaid GB",
        gbs: 60
      },
      {
        color: Color.Tiny,
        text: "EXIT Galleon"
      },
    ]
  },
  {
    name: "GALLEON TO HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim for pipe GB",
        gbs: 61
      },
      {
        color: Color.Tiny,
        text: "Port to Saxophone GB",
        gbs: 62
      },
      {
        color: Color.Tiny,
        text: "Helm early"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "10 HOMING, bonus GB",
        gbs: 63
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
        text: "Switch kick to DK's room, medal"
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
        text: "Punch gates, Chunky's room, medal"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Tiny's room, medal"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Lanky's room, medal"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Diddy's room, medal, BC"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Terminal clip, Key 8"
      },
      {
        color: Color.DK,
        text: "EXIT on fairy picture"
      }
    ]
  },
  {
    name: "HELM TO CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Damage boost to BP"
      },
      {
        color: Color.DK,
        text: "Deathwarp, leave Lobby"
      },
      {
        color: Color.DK,
        text: "Drop to cage GB",
        gbs: 64
      },
      {
        color: Color.DK,
        text: "Enter Castle Lobby, BP switch"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, deathwarp"
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
        text: "BP, balloon (15)"
      },
      {
        color: Color.DK,
        text: "Roll clip for fairy, GB (20)",
        gbs: 65
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
        gbs: 66
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Tag W5, library clip",
      },
      {
        color: Color.DK,
        text: "1 bunch (45), library GB",
        gbs: 67
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
        gbs: 68
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Singles until (15)"
      },
      {
        color: Color.Chunky,
        text: "BP, enter dungeon"
      },
      {
        color: Color.Chunky,
        text: "2 balloons (35), 2 Diddy gates"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Face puzzle GB",
        gbs: 69
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "2 balloons (20)"
      },
      {
        color: Color.Lanky,
        text: "Bonus GB, deathwarp",
        gbs: 70
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "2 bunches, balloon (25)"
      },
      {
        color: Color.Diddy,
        text: "Moontail for GB",
        gbs: 71
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
        gbs: 72
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "2 singles (2), car race GB",
        gbs: 73
      },
      {
        color: Color.Tiny,
        text: "Fairy, Port, balloon (32)"
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Airswim to BP, climb to W5"
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
        gbs: 74
      },
      {
        color: Color.Tiny,
        text: "Enter KKO as Tiny for Key 7"
      },
      {
        color: Color.Lanky,
        text: "W4/W5, tower GB",
        gbs: 75
      },
      {
        color: Color.Lanky,
        text: "Drop to greenhouse GB, BC (50)",
        gbs: 76
      },
      {
        color: Color.Lanky,
        text: "Drop to BP, drop to crypt (55)"
      },
      {
        color: Color.Lanky,
        text: "Crypt GB, balloon (65)",
        gbs: 77
      },
      {
        color: Color.Lanky,
        text: "Deathwarp, up to (75)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Funky balloon (70)"
      },
      {
        color: Color.Tiny,
        text: "Crypt GB (75), deathwarp"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, balloon (60)"
      },
      {
        color: Color.Diddy,
        text: "Crypt GB (75)",
        gbs: 79
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Balloon (75), crypt GB",
        gbs: 80
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Crypt GB",
        gbs: 81
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
        gbs: 82
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "W4 to shed GB",
        gbs: 83
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
        gbs: 84
      },
      {
        color: Color.Chunky,
        text: "EXIT Castle"
      }
    ]
  },
  {
    name: "CASTLE TO AZTEC 2",
    steps: [
      {
        color: Color.Chunky,
        text: "Move Lobby rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Bonus GB, leave Lobby",
        gbs: 85
      },
      {
        color: Color.Lanky,
        text: "Pswim to cage GB",
        gbs: 86
      },
      {
        color: Color.Lanky,
        text: "Get Sprint, turn in Keys 8 & 3"
      },
      {
        color: Color.Lanky,
        text: "Press switch, cage GB",
        gbs: 87
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
        gbs: 88
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Cage clip to bonus GB",
        gbs: 89
      },
      {
        color: Color.Chunky,
        text: "Stairs by Snide (6)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Beetle Race GB (20)",
        gbs: 90
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Enter Llama Temple"
      },
      {
        color: Color.DK,
        text: "Tag W2/W1 (75)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Fairy, bonus GB, gun skew",
        gbs: 91
      },
      {
        color: Color.Lanky,
        isSkewed: true,
        text: "Cage room balloons (39)"
      },
      {
        color: Color.Lanky,
        isSkewed: true,
        text: "Climb stairs (42), W1 (47)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        isSkewed: true,
        text: "Lava room GB (35)",
        gbs: 92
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "W2, balloon (45), W1"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        isSkewed: true,
        text: "Matching game GB",
        gbs: 93
      },
      {
        color: Color.Lanky,
        isSkewed: true,
        text: "Through wall to BP, W2"
      },
      {
        color: Color.Lanky,
        text: "Leave temple (50)"
      },
      {
        color: Color.Lanky,
        text: "Climb 3 trees (65)"
      },
      {
        color: Color.Lanky,
        text: "5DT GB (R, R), balloon (75)",
        gbs: 94
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Path and 3 trees (65)"
      },
      {
        color: Color.Tiny,
        text: "5DT GB (L, L), fairy",
        gbs: 95
      },
      {
        color: Color.Tiny,
        text: "2 trees (75), enter T&S"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Key 2 as Chunky"
      },
      {
        color: Color.Chunky,
        text: "5DT GB (26), BP",
        gbs: 96
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Vase Room GB (47), W1 (48)",
        gbs: 97
      },
      {
        color: Color.Chunky,
        text: "Enter Tiny Temple, bunches (75)"
      },
      {
        color: Color.Chunky,
        text: "Pswim to GB, EXIT",
        gbs: 98
      }
    ]
  },
  {
    name: "AZTEC 2 TO CAVES",
    steps: [
      {
        color: Color.Chunky,
        text: "Leave Lobby, Triangle GB",
        gbs: 99
      },
      {
        color: Color.Chunky,
        text: "Caves Lobby, Punch left wall"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Guitar GB, ENTER Caves",
        gbs: 100
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
        gbs: 101
      },
      {
        color: Color.Diddy,
        text: "Fly to T&S above DK cabin"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 6"
      },
      {
        color: Color.DK,
        text: "DK Cabin GB, BC (5)",
        gbs: 102
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W2 (10), pswim to GB (18)",
        gbs: 103
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
        gbs: 104
      },
      {
        color: Color.Tiny,
        text: "Clip for ice dome GB",
        gbs: 105
      },
      {
        color: Color.Tiny,
        text: "Port to balloon (35), W4"
      },
      {
        color: Color.Tiny,
        text: "Mini to bonus GB, W3 (45)",
        gbs: 106
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Lanky 5DI GB (15)",
        gbs: 107
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "W2 to cabin GB (30)",
        gbs: 108
      },
      {
        color: Color.Lanky,
        text: "Waterfall balloon (40)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, balloon (55), 5DC GB (75)",
        gbs: 109
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "5DC GB (50)",
        gbs: 110
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "5DC GB (15)",
        gbs: 111
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Balloon above cabins (20)"
      },
      {
        color: Color.Diddy,
        text: "Upper 5DC GB (35), fairy"
      },
      {
        color: Color.Diddy,
        text: "Lower 5DC GB (43)",
        gbs: 113
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W5 for BP (60)"
      },
      {
        color: Color.Lanky,
        text: "Ice Tomato, balloon (70)",
        gbs: 114
      },
      {
        color: Color.Lanky,
        text: "Beetle Race (75)",
        gbs: 115
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, W1 to 5DI GB (50)",
        gbs: 116
      },
      {
        color: Color.DK,
        text: "Blast course (75)",
        gbs: 117
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "W4 to BP, balloon (65)"
      },
      {
        color: Color.Diddy,
        text: "5DI GB (75)",
        gbs: 118
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W3, balloon (60), W3"
      },
      {
        color: Color.Chunky,
        text: "5DI GB (70), BP"
      },
      {
        color: Color.Chunky,
        text: "Clip for ice dome GB (75)",
        gbs: 120
      },
      {
        color: Color.Chunky,
        text: "EXIT Caves"
      }
    ]
  },
  {
    name: "CAVES TO JAPES 2",
    steps: [
      {
        color: Color.Chunky,
        text: "Small island fairy, slam X"
      },
      {
        color: Color.Chunky,
        text: "Cage GB, Rock GB",
        gbs: 122
      },
      {
        color: Color.Chunky,
        text: "Japes Lobby, move rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Trombone GB",
        gbs: 123
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
        gbs: 124
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Pswim underground"
      },
      {
        color: Color.Chunky,
        text: "BP, GB (20)"
      },
      {
        color: Color.Chunky,
        text: "Deathwarp to rock GB",
        gbs: 126
      },
      {
        color: Color.Chunky,
        isSkewed: true,
        text: "CS to warp up, tag W1/W2"
      },
      {
        color: Color.Chunky,
        isSkewed: true,
        text: "Funky bunches (30), cage GB",
        gbs: 127
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        isSkewed: true,
        text: "Cage GB",
        gbs: 128
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        isSkewed: true,
        text: "Snide bunch (5), cage GB",
        gbs: 129
      },
      {
        color: Color.Lanky,
        isSkewed: true,
        text: "Through wall to W4, balloon (15)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        isSkewed: true,
        text: "Hut bunch (5), balloon (15)"
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "W4, cage GB, W3",
        gbs: 130
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "BP, tag W5, both logs (45)"
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "Stump GB, enter shell",
        gbs: 131
      },
      {
        color: Color.Tiny,
        text: "Shell GB (67)",
        gbs: 132
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "W1, bonus GB (75) T&S to tag",
        gbs: 133
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Bonus GB (20)",
        gbs: 134
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
        gbs: 135
      },
      {
        color: Color.Diddy,
        text: "Open Lanky's cave, BP (52)"
      },
      {
        color: Color.Diddy,
        text: "W2 to mountain GB",
        gbs: 136
      },
      {
        color: Color.Diddy,
        text: "Balloon (75), W5"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "3 trees (45) and bonus GB",
        gbs: 137
      },
      {
        color: Color.Chunky,
        text: "Shell clip, fairy, balloons (75)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP, bonus GB (42)",
        gbs: 138
      },
      {
        color: Color.Lanky,
        text: "Painting room GB (65)",
        gbs: 139
      },
      {
        color: Color.Lanky,
        text: "Balloon (75), fairy, EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES 2 TO FOREST",
    steps: [
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Leave Lobby for GB",
        gbs: 140
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
        text: "Gone for BC, ENTER Forest"
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.Chunky,
        text: "Tag W2/W4, well GB (10)",
        gbs: 141
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
        gbs: 142
      },
      {
        color: Color.Chunky,
        text: "2 kegs, leave to tag W1"
      },
      {
        color: Color.Chunky,
        text: "Reenter for 3rd keg GB",
        gbs: 143
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Mini to back room"
      },
      {
        color: Color.Tiny,
        text: "Spider GB (15)",
        gbs: 144
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.Tiny,
        text: "Swim to (27), thorn skew"
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "Balloon by T&S (37)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        isSkewed: true,
        text: "Tag W2, save apple (29)",
        gbs: 145
      },
      {
        color: Color.Chunky,
        isSkewed: true,
        text: "Through blue wall"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        isSkewed: true,
        text: "BP, (5), enter shed"
      },
      {
        color: Color.DK,
        text: "Bonus GB (10), fairy",
        gbs: 146
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
        gbs: 147
      },
      {
        color: Color.Lanky,
        text: "BP"
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
        gbs: 148
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Stump GB (50)",
        gbs: 149
      },
      {
        color: Color.Tiny,
        text: "Bean, deathwarp"
      },
      {
        color: Color.Tiny,
        text: "W2, 1 mushroom (55), beanstalk GB",
        gbs: 150
      },
      {
        color: Color.Tiny,
        text: "EXIT for fairy, ENTER, W3 (60)"
      },
      {
        color: Color.Tiny,
        text: "Mushroom to BP (70), drop to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to bonus GB (44)",
        gbs: 151
      },
      {
        color: Color.Diddy,
        text: "Tag W5, inside BP, out to Blast (47)"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Blast course (25)",
        gbs: 152
      },
      {
        color: Color.DK,
        text: "Down ladder, clockwise to (40)"
      },
      {
        color: Color.DK,
        text: "W5 (50) to BC"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Face room GB (44)",
        gbs: 153
      },
      {
        color: Color.Chunky,
        text: "Fall to BP (54), enter mushroom"
      },
      {
        color: Color.Chunky,
        text: "Fall to (75), shoot switch"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Shoot switch, bonus GB (75)",
        gbs: 154
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
        gbs: 155
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Balloon (34), dark room GB (49)",
        gbs: 156
      },
      {
        color: Color.Lanky,
        text: "Light room GB (54)",
        gbs: 157
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "W1 (59), attic GB, roof for (75)",
        gbs: 158
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Pswim to cage GB",
        gbs: 159
      },
      {
        color: Color.Diddy,
        text: "Attic GB (65) and fairy",
        gbs: 160
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Balloon (75), moonkick to Snide's"
      }
    ]
  },
  {
    name: "SNIDE'S",
    steps: [
      {
        color: Color.DK,
        text: "Turn in BPs x8",
        gbs: 168
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Turn in BPs x8",
        gbs: 176
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Turn in BPs x5",
        gbs: 181
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Turn in BPs x8",
        gbs: 189
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Balloon (75), turn in BPs x8",
        gbs: 197
      },
      {
        color: Color.Diddy,
        text: "EXIT Forest"
      }
    ]
  },
  {
    name: "FOREST TO K. ROOL",
    steps: [
      {
        color: Color.Diddy,
        text: "Rocket to bonus GB",
        gbs: 198
      },
      {
        color: Color.Diddy,
        text: "Cage GB, drop to W3",
        gbs: 199
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "W5 to fairy cage GB",
        gbs: 200
      },
      {
        color: Color.Tiny,
        text: "Rare Banana, W5/W3, ENTER K. Rool",
        gbs: 201
      }
    ]
  },
  krool
];
