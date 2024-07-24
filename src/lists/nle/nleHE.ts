import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { isgNLE, isgPreStart, krool } from "../../utils/sections";

export const nleHE: RouteSection[] = [
  isgPreStart,
  isgNLE,
  {
    name: "ISLES -> JAPES 1",
    steps: [
      {
        color: Color.Header,
        text: "NOTE: This route uses phasewalks/phasefalls."
      },
      {
        color: Color.DK,
        text: "Orange barrel, pswim to escape"
      },
      {
        color: Color.DK,
        text: "Tag W4/W1, K. Lumsy"
      },
      {
        color: Color.DK,
        text: "W1, entrance GB to Japes",
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
        text: "Note: Blast to cancel CS, GB",
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
        text: "Key 1, torch clip to void"
      },
      {
        color: Color.DK,
        text: "EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES 1 -> AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "W1, turn in Key 1"
      },
      {
        color: Color.DK,
        text: "W1, tag W2/W3, BFI camera"
      },
      {
        color: Color.DK,
        text: "ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "BP, 3 crystals"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, enter Tiny Temple"
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
        text: "Torch clip to Klaptrap GB",
        gbs: 9
      },
      {
        color: Color.Tiny,
        text: "Guitar Skip, BP, tag at Snide"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Gong tower GB, tag at Snide",
        gbs: 10
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Enter T&S by W5, Key 2"
      },
      {
        color: Color.DK,
        text: "Tag W5, bonus GB, W5",
        gbs: 11
      },
      {
        color: Color.DK,
        text: "Moonkick/roll clip in Llama Temple"
      },
      {
        color: Color.DK,
        text: "Tag W2"
      }
    ]
  },
  {
    name: "AZTEC SKEW SECTION",
    steps: [
      {
        color: Color.DK,
        text: "Free Lanky, GB, skew to tag",
        gbs: 12
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Tag W1, skew to matching game",
        gbs: 13
      },
      {
        color: Color.Lanky,
        text: "Skew to BP, W2, W1"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
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
    name: "AZTEC -> FACTORY",
    steps: [
      {
        color: Color.Tiny,
        text: "W2, W1, turn in Key 2"
      },
      {
        color: Color.Tiny,
        text: "Port, Saxophone GB",
        gbs: 15
      },
      {
        color: Color.Tiny,
        text: "Factory Lobby to tag"
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
        text: "Robot push to Tiny's cage"
      },
      {
        color: Color.Lanky,
        text: "OOB to pipe GB, drop to tag",
        gbs: 16
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Tag W4, drop to BP"
      },
      {
        color: Color.Diddy,
        text: "Slam switch, storage to tag"
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
        text: "HEADPHONES, BP"
      },
      {
        color: Color.Tiny,
        text: "Cage GB, tag in T&S",
        gbs: 18
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pfall/pwalk to testing, BP"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP, Ostand TBS for piano GB",
        gbs: 19
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Exit TBS as DK, push OOB"
      },
      {
        color: Color.DK,
        text: "Drop to shed, lever GB",
        gbs: 20
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Dark room GB, prod switch",
        gbs: 21
      },
      {
        color: Color.Chunky,
        text: "W4 to crusher GB, tag near T&S",
        gbs: 22
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Spring GB",
        gbs: 23
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Enter T&S, Key 3"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "BP, drop to crusher room"
      },
      {
        color: Color.DK,
        text: "Clip OOB for GB, clip to void out",
        gbs: 24
      },
      {
        color: Color.DK,
        text: "EXIT Factory"
      },
    ]
  },
  {
    name: "FACTORY -> JAPES 2",
    steps: [
      {
        color: Color.DK,
        text: "Bongos GB",
        gbs: 25
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch box"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, leave Lobby, W4"
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
        gbs: 26
      }
    ]
  },
  {
    name: "JAPES 2",
    steps: [
      {
        color: Color.Lanky,
        text: "W1 to tag"
      }
    ]
  },
  {
    name: "JAPES 2 SKEW SECTION",
    steps: [
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Cage GB",
        gbs: 27
      },
      {
        color: Color.Tiny,
        text: "W3, BP, Stump GB",
        gbs: 28
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Wall skew for cage GB",
        gbs: 29
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Cage GB",
        gbs: 30
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Cage GB, skew in painting room",
        gbs: 31
      }
    ]
  },
  {
    name: "JAPES 2 (CONT)",
    steps: [
      {
        color: Color.Lanky,
        text: "Clip for GB",
        gbs: 32
      },
      {
        color: Color.Lanky,
        text: "BP, bonus GB",
        gbs: 33
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pswim underground, BP, GB",
        gbs: 34
      },
      {
        color: Color.Chunky,
        text: "Deathwarp, rock GB",
        gbs: 35
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "W1, EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES 2 -> GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "W4, cage GB, Galleon Lobby",
        gbs: 36
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "BP, ENTER Galleon"
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Chest GB, tag W3",
        gbs: 37
      },
      {
        color: Color.Chunky,
        text: "Cannon skew, cannon spawn snag",
        gbs: 38
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, raise water"
      },
      {
        color: Color.Diddy,
        text: "Turn in BPs x4, tag by Snide",
        gbs: 42
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "W3, BP, tag in T&S"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Key 4, OOB to cactus BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Pswim to 5DS GB",
        gbs: 43
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Pswim to 5DS GB",
        gbs: 44
      },
      {
        color: Color.Lanky,
        text: "Pswim for 2DS GB",
        gbs: 45
      },
      {
        color: Color.Lanky,
        text: "Pswim to void, BP"
      },
      {
        color: Color.Lanky,
        text: "Pswim to lighthouse"
      },
      {
        color: Color.Lanky,
        text: "Enguarde GB, tag near mermaid",
        gbs: 46
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Pswim to void, EXIT Galleon"
      }
    ]
  },
  {
    name: "GALLEON -> FOREST",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim to pipe GB",
        gbs: 47
      },
      {
        color: Color.Tiny,
        text: "Pswim to void, exit Lobby"
      },
      {
        color: Color.Tiny,
        text: "STS to BFI GB, W5",
        gbs: 48
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Pswim to cage GB",
        gbs: 49
      },
      {
        color: Color.Lanky,
        text: "Sprint GB, turn in Key 4, W1",
        gbs: 50
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W5, slam X, STS to cage GB",
        gbs: 51
      },
      {
        color: Color.Chunky,
        text: "Big X GB, enter Forest Lobby",
        gbs: 52
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
        text: "Pink tunnel to mushroom"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Shoot switch"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Shoot switch"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Shoot switch"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Shoot switch"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "CS overlap for cannon GB",
        gbs: 53
      },
      {
        color: Color.DK,
        text: "Exit to top, clockwise to tag"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Slam switch, dark room GB",
        gbs: 54
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Fall to BP, fall to Blast"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Climb into mushroom, BP, back out"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, gun skew"
      }
    ]
  },
  {
    name: "FOREST SKEW SECTION",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim to Owl"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Skew into stump for GB",
        gbs: 55
      }
    ]
  },
  {
    name: "FOREST (CONT)",
    steps: [
      {
        color: Color.Tiny,
        text: "Deathwarp, blue tunnel to Snide"
      },
      {
        color: Color.Tiny,
        text: "Turn in BPs x6, enter T&S",
        gbs: 61
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 5, enter mill, clip for GB",
        gbs: 62
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Exit mill, pswim to cage GB",
        gbs: 63
      },
      {
        color: Color.Diddy,
        text: "Thorn skew, tag DK behind barn"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, left wall skew to void"
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
        gbs: 64
      },
      {
        color: Color.Diddy,
        text: "Fall to W3"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W1, turn in Key 5, W1, W2"
      },
      {
        color: Color.Chunky,
        text: "Triangle GB, Caves Lobby",
        gbs: 65
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
        text: "Rocket to Guitar GB, ENTER Caves",
        gbs: 66
      }
    ]
  },
  {
    name: "CAVES SKEW SECTION",
    steps: [
      {
        color: Color.Diddy,
        text: "Gun skew, tag W4, BP, back out"
      }
    ]
  },
  {
    name: "CAVES (CONT)",
    steps: [
      {
        color: Color.Diddy,
        text: "Rocket to tag W5, rocket to back"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "DK Cabin GB",
        gbs: 67
      },
      {
        color: Color.DK,
        text: "5DC GB",
        gbs: 68
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "5DC GB",
        gbs: 69
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "W5, BP, tag at ice castle"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, kick down to tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Gun skew"
      }
    ]
  },
  {
    name: "CAVES SKEW SECTION 2",
    steps: [
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Gone GB, SNIDE HEADPHONES",
        gbs: 70
      },
      {
        color: Color.Chunky,
        text: "Skew to ice shield GB",
        gbs: 71
      }
    ]
  },
  {
    name: "CAVES (CONT 2)",
    steps: [
      {
        color: Color.Chunky,
        text: "BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "W4, Monkeyport GB",
        gbs: 72
      },
      {
        color: Color.Tiny,
        text: "W4, pswim to Snide"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Turn in BPs x7",
        gbs: 79
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Key 6, turn in BPs x6",
        gbs: 85
      },
      {
        color: Color.Chunky,
        text: "Pfall/pwalk to EXIT Caves"
      }
    ]
  },
  {
    name: "CAVES -> CASTLE",
    steps: [
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Lava GB, exit Lobby, W1",
        gbs: 86
      },
      {
        color: Color.DK,
        text: "Castle Lobby, open BP gate"
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
        text: "Pswim/pwalk in tree, BP, GB",
        gbs: 87
      },
      {
        color: Color.DK,
        text: "Airswim to crypt"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, exit crypt, rocket to top"
      },
      {
        color: Color.Diddy,
        text: "Turn in BPs x4",
        gbs: 91
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Turn in BPs x6",
        gbs: 97
      },
      {
        color: Color.DK,
        text: "Library clip for GB",
        gbs: 98
      },
      {
        color: Color.DK,
        text: "Down to ballroom tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Shed GB, enter T&S, start KKO",
        gbs: 99
      },
      {
        color: Color.Tiny,
        text: "Finish KKO as Tiny, Key 7"
      },
      {
        color: Color.Tiny,
        text: "Trash GB, death jump, EXIT Castle",
        gbs: 100
      }
    ]
  },
  {
    name: "CASTLE -> HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Turn in Keys 7 and 6"
      },
      {
        color: Color.Tiny,
        text: "Port to Helm Lobby"
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
        text: "Shoot switch, vines"
      },
      {
        color: Color.Chunky,
        text: "Terminal clips 1 & 2"
      },
      {
        color: Color.Chunky,
        text: "Key 8, pfall/pwalk to escape"
      }
    ]
  },
  {
    name: "HELM -> K. ROOL",
    steps: [
      {
        color: Color.Chunky,
        text: "Leave, turn in Keys 8 & 3"
      },
      {
        color: Color.Chunky,
        text: "W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
