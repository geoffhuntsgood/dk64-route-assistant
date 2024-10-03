import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { isgNLE, isgPreStart, krool } from "../../utils/sections";

export const nleIntermediate: RouteSection[] = [
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
        text: "Shoot right switch, kick down"
      },
      {
        color: Color.DK,
        text: "Shoot middle switch, tag W1"
      },
      {
        color: Color.DK,
        text: "Note: Overlap Diddy/Switch CS"
      },
      {
        color: Color.DK,
        text: "Pswim to cage GB",
        gbs: 3
      },
      {
        color: Color.DK,
        text: "Jump in bounds behind gate for BP"
      },
      {
        color: Color.DK,
        text: "Tag W3, overlap Blast/3rd switch CS"
      },
      {
        color: Color.DK,
        text: "Blast GB",
        gbs: 4
      },
      {
        color: Color.DK,
        text: "W2 to Diddy GB",
        gbs: 5
      },
      {
        color: Color.DK,
        text: "Grab ammo, head to Snide"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Enter mountain, switch, mountain top GB",
        gbs: 6
      },
      {
        color: Color.Diddy,
        text: "BP, pswim to cave GB, enter T&S",
        gbs: 7
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 1, walk to EXIT"
      }
    ]
  },
  {
    name: "JAPES 1 -> AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "W1, turn in Key 1, W1"
      },
      {
        color: Color.DK,
        text: "Tag W2/W3, ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "BP, 3 crystals, go to main area"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Guitar to open tunnel door"
      },
      {
        color: Color.Diddy,
        text: "BP, enter Tiny Temple"
      },
      {
        color: Color.Diddy,
        text: "Ledge clip, straight ahead to Tiny GB",
        gbs: 8
      },
      {
        color: Color.Diddy,
        text: "OKONG to free Tiny, pswim to leave"
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
        text: "Banana push to bonus GB, W5",
        gbs: 10
      },
      {
        color: Color.DK,
        text: "Roll clip into 5DT for GB",
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
        text: "Free Lanky for GB, climb to tag W1",
        gbs: 12
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        isSkewed: true,
        text: "Matching game GB",
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
        text: "W1, W2, lava GB, void out",
        gbs: 14
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
        text: "Monkeyport to Saxophone GB",
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
        text: "Robot push OOB to Tiny cage"
      },
      {
        color: Color.Lanky,
        text: "Continue to pipe GB, drop to tag",
        gbs: 16
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Tag W4, drop to BP, slam prod switch"
      },
      {
        color: Color.Diddy,
        text: "Go to storage to tag"
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
        text: "Cage GB, clip to testing room",
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
        text: "BP, back to tag"
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
        text: "Dark room GB, slam prod switch",
        gbs: 20
      },
      {
        color: Color.Chunky,
        text: "W4 to crusher GB, climb to tag",
        gbs: 21
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Cross cylinders, Spring GB, back to tag",
        gbs: 22
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Cross cylinders, BP"
      },
      {
        color: Color.DK,
        text: "Drop to crusher room, clip to GB, clip to void",
        gbs: 23
      },
      {
        color: Color.DK,
        text: "EXIT"
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
        text: "BP, W4 to tag"
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
      }
    ]
  },
  {
    name: "JAPES 2",
    steps: [
      {
        color: Color.Lanky,
        text: "W1 to tag"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Gun skew in river"
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "Twirl to cage GB, W3",
        gbs: 26
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "BP, stump GB",
        gbs: 27
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        isSkewed: true,
        text: "Through right log to cage GB",
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
        text: "Cage GB, enter painting room",
        gbs: 30
      },
      {
        color: Color.Lanky,
        text: "Clip through wall for GB, leave",
        gbs: 31
      },
      {
        color: Color.Lanky,
        text: "Through tunnel to BP, bonus GB",
        gbs: 32
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pswim to underground"
      },
      {
        color: Color.Chunky,
        text: "BP, underground GB, deathwarp",
        gbs: 33
      },
      {
        color: Color.Chunky,
        text: "Cannon out, rock GB",
        gbs: 34
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "W1, EXIT"
      }
    ]
  },
  {
    name: "JAPES 2 -> GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "W4, drop to cage GB, Galleon Lobby",
        gbs: 35
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BP, ENTER Galleon"
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Shoot switches, chest GB",
        gbs: 36
      },
      {
        color: Color.Chunky,
        text: "Cannon to tag W3, Key 4"
      },
      {
        color: Color.Chunky,
        text: "Backflip OOB above T&S"
      },
      {
        color: Color.Chunky,
        text: "OOB left to cactus BP"
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
        text: "Pswim to 2DS GB, pswim to leave",
        gbs: 39
      },
      {
        color: Color.Lanky,
        text: "Pswim to treasure room"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Ledge kick from chest to BP"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Void on back wall, BP, pswim to lighthouse"
      },
      {
        color: Color.Lanky,
        text: "Enguarde GB at bottom, tag at mermaid",
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
        text: "Turn in BPs x4, W3, BP, void over T&S",
        gbs: 48
      },
      {
        color: Color.Tiny,
        text: "EXIT"
      }
    ]
  },
  {
    name: "GALLEON -> FOREST",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim to pipe GB, exit Lobby",
        gbs: 49
      },
      {
        color: Color.Tiny,
        text: "STS to BFI cage GB, W5",
        gbs: 50
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Cage GB behind K. Lumsy",
        gbs: 51
      },
      {
        color: Color.Lanky,
        text: "Sprint GB, turn in Key 4, W1",
        gbs: 52
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W5, slam X, STS to cage GB",
        gbs: 53
      },
      {
        color: Color.Chunky,
        text: "Rock GB, Forest Lobby",
        gbs: 54
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "ENTER Forest"
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.DK,
        text: "Tag W4, pink tunnel, tag behind mushroom"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Rocket to mushroom top, 5 Homing Ammo"
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
        text: "Drop to BP, jump to Blast platform"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Climb ladder, inside for BP, back out"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, drop to water, pswim to owl area"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP, W4, blue tunnel, turn in BPs x5",
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
        tag: Tag.Right,
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
        text: "Thorn skew behind barn"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        isSkewed: true,
        text: "BP, left wall to void"
      },
      {
        color: Color.DK,
        text: "EXIT Forest"
      }
    ]
  },
  {
    name: "FOREST -> CAVES",
    steps: [
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Exit Lobby, cage GB",
        gbs: 72
      },
      {
        color: Color.Diddy,
        text: "Fall down waterfall to W3"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W1, turn in Key 5, W1, W2"
      },
      {
        color: Color.Chunky,
        text: "Move rock, Triangle GB",
        gbs: 73
      },
      {
        color: Color.Chunky,
        text: "Enter Caves Lobby, Punch left wall"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to Guitar GB, ENTER Caves",
        gbs: 74
      }
    ]
  },
  {
    name: "CAVES",
    steps: [
      {
        color: Color.Diddy,
        text: "Tag W1, gun skew in river"
      },
      {
        color: Color.Diddy,
        isSkewed: true,
        text: "Cross river, past Funky"
      },
      {
        color: Color.Diddy,
        isSkewed: true,
        text: "Through Tiny tunnel, BP, tag W4, back out"
      },
      {
        color: Color.Diddy,
        text: "Rocket to tag W5, rocket to bonus GB",
        gbs: 75
      },
      {
        color: Color.Diddy,
        text: "Fly to T&S over DK cabin"
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
        text: "BP, twirl to 5DC GB",
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
        text: "W5 to BP, tag at ice castle"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, kick down right to tag"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "W4 to Monkeyport GB, W4 back",
        gbs: 79
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "BP, W1, pswim to Gone GB",
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
        text: "Jump left, Punch other wall"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Damage boost to lava GB",
        gbs: 81
      },
      {
        color: Color.DK,
        text: "Leave Lobby, W1 to Castle Lobby"
      },
      {
        color: Color.DK,
        text: "Open Kasplat gate"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, ENTER Castle",
        gbs: 82
      },
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.Diddy,
        text: "Climb past warps to tunnel by water"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BP, back to tag"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Leave tunnel, clip into tree for BP"
      },
      {
        color: Color.DK,
        text: "Roll clip to GB, back to warps",
        gbs: 82
      },
      {
        color: Color.DK,
        text: "Ledge kick to T&S by upper W2, Key 7"
      },
      {
        color: Color.Lanky,
        text: "Clockwise to BP, drop to crypt"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, back to tag"
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
        text: "Deathwarp, leave Lobby"
      },
      {
        color: Color.Tiny,
        text: "Turn in Keys 7 & 6"
      },
      {
        color: Color.Tiny,
        text: "Monkeyport to Helm Lobby"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Damage boost to BP, deathwarp, exit Lobby"
      },
      {
        color: Color.DK,
        text: "Kick down to warps, W2 to ENTER Aztec"
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
        text: "Hunky Chunky, clip on wall light by bonus cage"
      },
      {
        color: Color.Chunky,
        text: "Clip in back to enter 5DT"
      },
      {
        color: Color.Chunky,
        text: "BP, leave 5DT, go to Snide"
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
        text: "W2, Monkeyport to Helm Lobby"
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
        text: "Kickslide up hills"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Shoot switch, cross vines"
      },
      {
        color: Color.Chunky,
        text: "Terminal clips 1 & 2"
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
        text: "W1, turn in Keys 8 & 3"
      },
      {
        color: Color.DK,
        text: "RESET on cutscene (ship)"
      },
      {
        color: Color.DK,
        text: "W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
