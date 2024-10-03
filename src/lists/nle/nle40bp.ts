import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { isgNLE, isgPreStart, krool } from "../../utils/sections";

export const nle40bp: RouteSection[] = [
  isgPreStart,
  isgNLE,
  {
    name: "ISLES -> JAPES 1",
    steps: [
      {
        color: Color.DK,
        text: "Orange barrel, pswim to escape"
      },
      {
        color: Color.DK,
        text: "Tag W4/W1, visit K. Lumsy"
      },
      {
        color: Color.DK,
        text: "W1, entrance GB to Japes Lobby",
        gbs: 1
      },
      {
        color: Color.DK,
        text: "ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES 1",
    steps: [
      {
        color: Color.DK,
        text: "Bush push, moonkick to cannon"
      },
      {
        color: Color.DK,
        text: "Cannon to GB, tag W2",
        gbs: 2
      },
      {
        color: Color.DK,
        text: "Right switch, kick down"
      },
      {
        color: Color.DK,
        text: "Middle switch, tag W1"
      },
      {
        color: Color.DK,
        text: "Note: Diddy/Switch CS cancel"
      },
      {
        color: Color.DK,
        text: "Pswim to GB, BP",
        gbs: 3
      },
      {
        color: Color.DK,
        text: "Tag W3, left switch"
      },
      {
        color: Color.DK,
        text: "Note: Blast/Switch CS cancel, GB",
        gbs: 4
      },
      {
        color: Color.DK,
        text: "W2 to GB, get ammo toward Snide",
        gbs: 5
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Mountain GB, BP",
        gbs: 6
      },
      {
        color: Color.Diddy,
        text: "Pswim for cave GB, enter T&S",
        gbs: 7
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 1, back to portal"
      },
      {
        color: Color.DK,
        text: "EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES 1 -> AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "W1, turn in Key 1"
      },
      {
        color: Color.DK,
        text: "W1, tag W2/W3"
      },
      {
        color: Color.DK,
        text: "ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "BP, 3 crystals"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Guitar to open tunnel"
      },
      {
        color: Color.Diddy,
        text: "BP, Enter Tiny Temple"
      },
      {
        color: Color.Diddy,
        text: "Ledge clip to Tiny GB",
        gbs: 8
      },
      {
        color: Color.Diddy,
        text: "OKONG, pswim out"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, tag by Snide"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Gong tower GB, tag by Snide",
        gbs: 9
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Enter T&S, Key 2, tag W5"
      },
      {
        color: Color.DK,
        text: "Bonus GB in sand tunnel",
        gbs: 10

      },
      {
        color: Color.DK,
        text: "W5, clip in 5DT for GB",
        gbs: 11
      },
      {
        color: Color.DK,
        text: "Moonkick/roll clip into Llama Temple"
      },
      {
        color: Color.DK,
        text: "Tag W2, gun skew"
      },
      {
        color: Color.DK,
        isSkewed: true,
        text: "Free Lanky, GB, climb to tag",
        gbs: 12
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        isSkewed: true,
        text: "Tag W1, matching game GB",
        gbs: 13
      },
      {
        color: Color.Lanky,
        isSkewed: true,
        text: "Through wall to BP, W2, W1"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        isSkewed: true,
        text: "W1, W2, lava GB",
        gbs: 14
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "Through back wall to void out"
      },
      {
        color: Color.Tiny,
        text: "EXIT Aztec"
      }
    ]
  },
  {
    name: "AZTEC 1 -> FACTORY",
    steps: [
      {
        color: Color.Tiny,
        text: "W2, W1, turn in Key 2"
      },
      {
        color: Color.Tiny,
        text: "Port to Saxohpone GB",
        gbs: 15
      },
      {
        color: Color.Tiny,
        text: "Fall to Factory Lobby"
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
        text: "Robot push, pipe GB, drop to tag",
        gbs: 16
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Tag W4, drop for BP"
      },
      {
        color: Color.Diddy,
        text: "Slam prod switch, go to storage"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Free Chunky GB",
        gbs: 17
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Key 3, BP"
      },
      {
        color: Color.Tiny,
        text: "Cage GB, clip to testing",
        gbs: 18
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "BP, go to R&D"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Drop to power shed, lever GB",
        gbs: 19
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Dark room GB",
        gbs: 20
      },
      {
        color: Color.Chunky,
        text: "Slam prod switch, W4 to GB",
        gbs: 21
      },
      {
        color: Color.Chunky,
        text: "Climb platforms to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Spring GB",
        gbs: 22
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, drop to crusher room"
      },
      {
        color: Color.DK,
        text: "Clip OOB for GB, clip to void out",
        gbs: 23
      },
      {
        color: Color.DK,
        text: "EXIT Factory"
      }
    ]
  },
  {
    name: "FACTORY -> JAPES 2",
    steps: [
      {
        color: Color.DK,
        text: "Bongos GB",
        gbs: 24
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch box"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, W4"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tag W5, Japes Lobby, move rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Trombone GB, ENTER Japes",
        gbs: 25
      },
    ]
  },
  {
    name: "JAPES 2",
    steps: [
      {
        color: Color.Lanky,
        text: "W1, gun skew"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        isSkewed: true,
        text: "Cage GB",
        gbs: 26
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "W3, BP, Stump GB",
        gbs: 27
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        isSkewed: true,
        text: "Through wall for cage GB",
        gbs: 28
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        isSkewed: true,
        text: "Cage GB",
        gbs: 29
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        isSkewed: true,
        text: "Cage GB",
        gbs: 30
      },
      {
        color: Color.Lanky,
        isSkewed: true,
        text: "Enter painting room"
      },
      {
        color: Color.Lanky,
        text: "Clip for painting GB",
        gbs: 31
      },
      {
        color: Color.Lanky,
        text: "BP, bonus GB",
        gbs: 32
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pswim underground"
      },
      {
        color: Color.Chunky,
        text: "Underground BP, GB",
        gbs: 33
      },
      {
        color: Color.Chunky,
        text: "Deathwarp, rock GB",
        gbs: 34
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "W1, EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES 2 -> GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "W4, drop to cage GB",
        gbs: 35
      },
      {
        color: Color.DK,
        text: "Galleon Lobby to tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BP, ENTER Galleon"
      },
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Open gate, chest GB",
        gbs: 36
      },
      {
        color: Color.Chunky,
        text: "Tag W3, Key 4, OOB to BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Pswim to 5DS GB",
        gbs: 37
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Pswim to 5DS GB",
        gbs: 38
      },
      {
        color: Color.Lanky,
        text: "Pswim to 2DS GB, again to void",
        gbs: 39
      },
      {
        color: Color.Lanky,
        text: "Pswim into treasure room"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Ledge kick from chest to BP"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Pswim to void, BP"
      },
      {
        color: Color.Lanky,
        text: "Pswim to lighthouse"
      },
      {
        color: Color.Lanky,
        text: "Enguarde GB, tag at mermaid",
        gbs: 40
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, raise water, turn in BPs x4",
        gbs: 44
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Turn in BPs x4, W3, BP",
        gbs: 48
      },
      {
        color: Color.Tiny,
        text: "Void above T&S, EXIT Galleon"
      }
    ]
  },
  {
    name: "GALLEON -> FOREST",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim to pipe GB",
        gbs: 49
      },
      {
        color: Color.Tiny,
        text: "Void at torch, exit Lobby"
      },
      {
        color: Color.Tiny,
        text: "STS to BFI GB, W5",
        gbs: 50
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Pswim to cage GB",
        gbs: 51
      },
      {
        color: Color.Lanky,
        text: "K. Lumsy Sprint GB",
        gbs: 52
      },
      {
        color: Color.Lanky,
        text: "Turn in Key 4, W1"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W5, slam big X, STS to cage GB",
        gbs: 53
      },
      {
        color: Color.Chunky,
        text: "Big X GB, enter Forest Lobby",
        gbs: 54
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "ENTER Forest"
      },
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.DK,
        text: "Tag W4, pink tunnel"
      },
      {
        color: Color.DK,
        text: "Tag at inner mushroom moat"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Rocket to mushroom top, get Homing Ammo"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Slam switch, dark room GB",
        gbs: 55
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Fall to BP, fall to Blast platform"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Climb ladder for BP, back out to tag"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, drop to pswim to Owl"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP, W4, turn in BPs x5",
        gbs: 60
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Turn in BPs x5",
        gbs: 65
      },
      {
        color: Color.DK,
        text: "Key 5, turn in BPs x4",
        gbs: 69
      },
      {
        color: Color.DK,
        text: "Enter mill, clip for GB",
        gbs: 70
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Exit mill, pswim to cage GB",
        gbs: 71
      },
      {
        color: Color.Diddy,
        text: "Thorn skew, tag behind thorn barn"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, EXIT Forest"
      },
    ]
  },
  {
    name: "FOREST -> CAVES",
    steps: [
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Exit Forest Lobby, cage GB",
        gbs: 72
      },
      {
        color: Color.Diddy,
        text: "Fall to tag W3"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W1, turn in Key 5, W1/W2"
      },
      {
        color: Color.Chunky,
        text: "Triangle GB, Caves Lobby",
        gbs: 73
      },
      {
        color: Color.Chunky,
        text: "Punch left wall"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to Guitar GB",
        gbs: 74
      },
      {
        color: Color.Diddy,
        text: "ENTER Caves"
      }
    ]
  },
  {
    name: "CAVES",
    steps: [
      {
        color: Color.Diddy,
        text: "Tag W1, gun skew"
      },
      {
        color: Color.Diddy,
        isSkewed: true,
        text: "Cross river, BP, tag W4"
      },
      {
        color: Color.Diddy,
        isSkewed: true,
        text: "Rocket to tag W5"
      },
      {
        color: Color.Diddy,
        text: "Rocket to bonus GB",
        gbs: 75
      },
      {
        color: Color.Diddy,
        text: "Rocket to T&S above DK cabin"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 6, DK cabin GB",
        gbs: 76
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, 5DC GB",
        gbs: 77
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "5DC GB",
        gbs: 78
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W5, BP, tag at ice castle"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, kick down to tag"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "W4 to ice shield GB, W4",
        gbs: 79
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "BP, W1, pswim for Gone GB",
        gbs: 80
      },
      {
        color: Color.Chunky,
        text: "EXIT Caves"
      }
    ]
  },
  {
    name: "CAVES -> CASTLE",
    steps: [
      {
        color: Color.Chunky,
        text: "Jump left, Punch wall"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Damage boost to lava GB",
        gbs: 81
      },
      {
        color: Color.DK,
        text: "Exit Lobby, W1, Castle Lobby"
      },
      {
        color: Color.DK,
        text: "Open BP gate"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, ENTER Castle"
      }
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.Diddy,
        text: "Climb to warps, enter tunnel"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Clip in tree for BP"
      },
      {
        color: Color.DK,
        text: "Roll clip for GB",
        gbs: 82
      },
      {
        color: Color.DK,
        text: "Back to warps, ledge kick to T&S"
      },
      {
        color: Color.Lanky,
        text: "KKO as Lanky, Key 7"
      },
      {
        color: Color.Lanky,
        text: "Clockwise to BP, drop to crypt"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, deathwarp, EXIT Castle"
      }
    ]
  },
  {
    name: "CASTLE -> AZTEC 2",
    steps: [
      {
        color: Color.Tiny,
        text: "Turn in Keys 7 & 6"
      },
      {
        color: Color.Tiny,
        text: "Port to Helm Lobby"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Damage boost to BP"
      },
      {
        color: Color.DK,
        text: "Exit, kick to warps, W2"
      },
      {
        color: Color.DK,
        text: "ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 2",
    steps: [
      {
        color: Color.DK,
        text: "W1 to tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Hunky clip OOB by bonus barrel"
      },
      {
        color: Color.Chunky,
        text: "Clip in back to enter 5DT"
      },
      {
        color: Color.Chunky,
        text: "BP, leave 5DT, Snide's"
      },
      {
        color: Color.Chunky,
        text: "Turn in BPs x3",
        gbs: 85
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Turn in BPs x4",
        gbs: 89
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Turn in BPs x4",
        gbs: 93
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Turn in BPs x3",
        gbs: 96
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Turn in BPs x4",
        gbs: 100
      },
      {
        color: Color.Tiny,
        text: "Lose Beaver Bother to regain pause, pause exit"
      }
    ]
  },
  {
    name: "AZTEC 2 -> HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "W2, Port to Helm Lobby"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Gone for vines, ENTER Helm"
      }
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Kickslide up hill"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Switch, cross vines"
      },
      {
        color: Color.Chunky,
        text: "Terminal Clips 1 & 2"
      },
      {
        color: Color.Chunky,
        text: "Key 8, RESET"
      }
    ]
  },
  {
    name: "ISLES -> K. ROOL",
    steps: [
      {
        color: Color.DK,
        text: "Turn in Keys 8 & 3"
      },
      {
        color: Color.DK,
        text: "RESET on K. Rool ship CS"
      },
      {
        color: Color.DK,
        text: "W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
