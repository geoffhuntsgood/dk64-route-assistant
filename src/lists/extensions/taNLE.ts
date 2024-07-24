import { RouteSection } from "../../classes";
import { Color } from "../../enums";
import { krool, taPreStart } from "../../utils/sections";

export const taNLE: RouteSection[] = [
  taPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Tag W4/W1, visit K. Lumsy"
      },
      {
        color: Color.DK,
        text: "W1 to Japes Lobby, ENTER Japes",
        gbs: 1
      }
    ]
  },
  {
    name: "JAPES",
    steps: [
      {
        color: Color.DK,
        text: "Bush push, pswim to cage GB",
        gbs: 2
      },
      {
        color: Color.DK,
        text: "To underground (kick jump to skip vines)"
      },
      {
        color: Color.Chunky,
        text: "BP, GB",
        gbs: 3
      },
      {
        color: Color.Chunky,
        text: "Deathwarp, rock GB",
        gbs: 4
      },
      {
        color: Color.Diddy,
        text: "Pswim/tag to skew"
      }
    ]
  },
  {
    name: "JAPES SKEW SECTION",
    steps: [
      {
        color: Color.Diddy,
        text: "Backflip in bounds, tunnel cave GB",
        gbs: 5
      },
      {
        color: Color.Diddy,
        text: "Skew through T&S wall back to main"
      },
      {
        color: Color.Tiny,
        text: "Kickslide/jump/twirl to cage GB",
        gbs: 6
      },
      {
        color: Color.DK,
        text: "Tag W4, wall skew to hive tunnel"
      },
      {
        color: Color.DK,
        text: "BP"
      },
      {
        color: Color.Tiny,
        text: "BP, stump GB",
        gbs: 7
      },
      {
        color: Color.Diddy,
        text: "Wall skew to cage GB",
        gbs: 8
      },
      {
        color: Color.Chunky,
        text: "Cage GB",
        gbs: 9
      },
      {
        color: Color.DK,
        text: "Both Diddy GBs",
        gbs: 11
      },
      {
        color: Color.Lanky,
        text: "Fall to cage GB",
        gbs: 12
      },
      {
        color: Color.Lanky,
        text: "Skew in painting room"
      }
    ]
  },
  {
    name: "JAPES (CONT)",
    steps: [
      {
        color: Color.Chunky,
        text: "Skid jump/jump aerial clip"
      },
      {
        color: Color.Lanky,
        text: "Painting room GB",
        gbs: 13
      },
      {
        color: Color.Diddy,
        text: "BP"
      },
      {
        color: Color.Lanky,
        text: "BP, bonus GB",
        gbs: 14
      },
      {
        color: Color.DK,
        text: "Vines for T&S, Key 1"
      },
      {
        color: Color.DK,
        text: "EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES -> AZTEC",
    steps: [
      {
        color: Color.Chunky,
        text: "Move Lobby rock"
      },
      {
        color: Color.Lanky,
        text: "Trombone GB",
        gbs: 15
      },
      {
        color: Color.DK,
        text: "W1, turn in Key 1, tag W2"
      },
      {
        color: Color.Tiny,
        text: "Backflip midair tag to climb"
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
        text: "Pwalk to BP"
      },
      {
        color: Color.DK,
        text: "Enter T&S, Key 2, tag W1"
      },
      {
        color: Color.Diddy,
        text: "Rocket to BP, enter Tiny Temple"
      },
      {
        color: Color.Tiny,
        text: "Torch clip, snag Klaptrap GB",
        gbs: 16
      },
      {
        color: Color.Diddy,
        text: "Tiny GB",
        gbs: 17
      },
      {
        color: Color.Chunky,
        text: "Pswim to Klaptrap GB",
        gbs: 18
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.DK,
        text: "Pwalk to tunnel"
      },
      {
        color: Color.Tiny,
        text: "BP, tunnel skip"
      },
      {
        color: Color.DK,
        text: "Roll clip into Llama Temple"
      },
      {
        color: Color.DK,
        text: "Pswim/tag to skew"
      }
    ]
  },
  {
    name: "AZTEC SKEW SECTION",
    steps: [
      {
        color: Color.DK,
        text: "Lanky GB, backflip in bounds",
        gbs: 19
      },
      {
        color: Color.Lanky,
        text: "Skew to matching game GB",
        gbs: 20
      },
      {
        color: Color.Lanky,
        text: "Corner skew to BP"
      },
      {
        color: Color.Tiny,
        text: "Lava GB, EXIT Aztec",
        gbs: 21
      }
    ]
  },
  {
    name: "AZTEC -> FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "W2/W1, turn in Key 2"
      },
      {
        color: Color.Lanky,
        text: "Cage GB",
        gbs: 22
      },
      {
        color: Color.Tiny,
        text: "Port to Saxophone GB",
        gbs: 23
      },
      {
        color: Color.DK,
        text: "Fall to Factory Lobby"
      },
      {
        color: Color.Chunky,
        text: "Punch box"
      },
      {
        color: Color.Tiny,
        text: "BP"
      },
      {
        color: Color.Diddy,
        text: "Backflip/tag midair to upper platform"
      },
      {
        color: Color.DK,
        text: "Bongos GB, ENTER Factory",
        gbs: 24
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "Robot push/pwalk to Tiny cage"
      },
      {
        color: Color.Lanky,
        text: "Pipe GB, drop to tag W4",
        gbs: 25
      },
      {
        color: Color.Diddy,
        text: "Drop to BP, slam prod switch"
      },
      {
        color: Color.Lanky,
        text: "Chunky GB, enter T&S",
        gbs: 26
      },
      {
        color: Color.Tiny,
        text: "Key 3, BP, cage GB",
        gbs: 27
      },
      {
        color: Color.Chunky,
        text: "Pwalk to testing, BP"
      },
      {
        color: Color.Tiny,
        text: "Pwalk to Wheel GB, pwalk out",
        gbs: 28
      },
      {
        color: Color.Lanky,
        text: "Orangstand TBS for piano GB",
        gbs: 29
      },
      {
        color: Color.Lanky,
        text: "BP"
      },
      {
        color: Color.DK,
        text: "Fall to power shed GB",
        gbs: 30
      },
      {
        color: Color.Chunky,
        text: "Tag midair for dark room GB",
        gbs: 31
      },
      {
        color: Color.Chunky,
        text: "Slam prod switch, W4 to GB",
        gbs: 32
      },
      {
        color: Color.Diddy,
        text: "Spring GB",
        gbs: 33
      },
      {
        color: Color.DK,
        text: "BP, drop to crusher GB",
        gbs: 34
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
        text: "Drop to cage GB",
        gbs: 35
      },
      {
        color: Color.Chunky,
        text: "Galleon Lobby BP, ENTER Galleon"
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Pwalk for cannon game snag GB",
        gbs: 36
      },
      {
        color: Color.Lanky,
        text: "BP, pswim to lighthouse"
      },
      {
        color: Color.Lanky,
        text: "Enguarde GB",
        gbs: 37
      },
      {
        color: Color.Diddy,
        text: "BP"
      },
      {
        color: Color.Chunky,
        text: "Jump to Snide"
      },
      {
        color: Color.Diddy,
        text: "Turn in BPs x4",
        gbs: 41
      },
      {
        color: Color.DK,
        text: "Pwalk left of Snide to tunnel"
      },
      {
        color: Color.Chunky,
        text: "Chest GB",
        gbs: 42
      },
      {
        color: Color.Tiny,
        text: "BP, enter T&S, Key 4"
      },
      {
        color: Color.Tiny,
        text: "Backflip OOB, left to shipyard"
      },
      {
        color: Color.Chunky,
        text: "BP"
      },
      {
        color: Color.Lanky,
        text: "Pswim to 5DS GB",
        gbs: 43
      },
      {
        color: Color.Tiny,
        text: "Pswim to 5DS GB",
        gbs: 44
      },
      {
        color: Color.Lanky,
        text: "Pswim to 2DS GB",
        gbs: 45
      },
      {
        color: Color.Tiny,
        text: "Pswim to bonus GB, EXIT Galleon",
        gbs: 46
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
        text: "BFI cage GB",
        gbs: 48
      },
      {
        color: Color.Chunky,
        text: "Slam X, cage GB",
        gbs: 49
      },
      {
        color: Color.Chunky,
        text: "Rock GB, tag W3, W3/W1, turn in Key 4",
        gbs: 50
      },
      {
        color: Color.Lanky,
        text: "Pwalk to Sprint GB, void out",
        gbs: 51
      },
      {
        color: Color.DK,
        text: "W3, ENTER Forest"
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.DK,
        text: "Pink tunnel"
      },
      {
        color: Color.Tiny,
        text: "Bounce/twirl to BP, drop to river"
      },
      {
        color: Color.Diddy,
        text: "Pswim/tag to skew"
      }
    ]
  },
  {
    name: "FOREST SKEW SECTION 1",
    steps: [
      {
        color: Color.Diddy,
        text: "Rocket to dark room door"
      }
    ]
  },
  {
    name: "FOREST (CONT)",
    steps: [
      {
        color: Color.Lanky,
        text: "Dark room GB",
        gbs: 52
      },
      {
        color: Color.Chunky,
        text: "Drop to BP"
      },
      {
        color: Color.Tiny,
        text: "Twirl right to enter mushroom"
      },
      {
        color: Color.Diddy,
        text: "BP, drop, exit mushroom"
      },
      {
        color: Color.Diddy,
        text: "Pswim/tag to skew"
      }
    ]
  },
  {
    name: "FOREST SKEW SECTION 2",
    steps: [
      {
        color: Color.Lanky,
        text: "To Owl area, BP"
      },
      {
        color: Color.Tiny,
        text: "Skew in right wall, backflip under stump"
      }
    ]
  },
  {
    name: "FOREST (CONT 2)",
    steps: [
      {
        color: Color.Tiny,
        text: "Stump GB, deathwarp",
        gbs: 53
      },
      {
        color: Color.DK,
        text: "Blue tunnel to Snide"
      },
      {
        color: Color.Tiny,
        text: "Turn in BP x6",
        gbs: 59
      },
      {
        color: Color.DK,
        text: "Enter T&S, DDQ Key 5"
      },
      {
        color: Color.DK,
        text: "Mill clip for GB",
        gbs: 60
      },
      {
        color: Color.Diddy,
        text: "Pswim to cage GB",
        gbs: 61
      },
      {
        color: Color.Diddy,
        text: "Pswim to thorn skew"
      },
      {
        color: Color.DK,
        text: "BP, EXIT Forest"
      }
    ]
  },
  {
    name: "FOREST -> CAVES",
    steps: [
      {
        color: Color.Diddy,
        text: "Cage GB",
        gbs: 62
      },
      {
        color: Color.DK,
        text: "W3/W1, turn in Key 5"
      },
      {
        color: Color.Chunky,
        text: "W2, move rock, Triangle GB",
        gbs: 63
      },
      {
        color: Color.Chunky,
        text: "Caves Lobby, punch lava wall"
      },
      {
        color: Color.DK,
        text: "Damage boost to lava GB, deathwarp",
        gbs: 64
      },
      {
        color: Color.Chunky,
        text: "Punch other wall"
      },
      {
        color: Color.Lanky,
        text: "BP"
      },
      {
        color: Color.Diddy,
        text: "Rocket to Guitar GB",
        gbs: 65
      },
      {
        color: Color.DK,
        text: "ENTER Caves"
      }
    ]
  },
  {
    name: "CAVES SKEW SECTION",
    steps: [
      {
        color: Color.Diddy,
        text: "Tag W2"
      },
      {
        color: Color.Chunky,
        text: "Gone GB",
        gbs: 66
      },
      {
        color: Color.Tiny,
        text: "Kickslide/jump/twirl to cross river"
      },
      {
        color: Color.Diddy,
        text: "Skew Tiny Tunnel for BP, tag W4"
      },
      {
        color: Color.Diddy,
        text: "Rocket to Lanky BP"
      },
      {
        color: Color.Lanky,
        text: "Collect BP"
      },
      {
        color: Color.Diddy,
        text: "Rocket to Tiny BP"
      },
      {
        color: Color.Tiny,
        text: "Collect BP"
      },
      {
        color: Color.Tiny,
        text: "W2, cross river again"
      },
      {
        color: Color.DK,
        text: "BP"
      },
      {
        color: Color.Chunky,
        text: "Skew in Snide cave, left wall"
      },
      {
        color: Color.Chunky,
        text: "Long jump skew into ice shield GB",
        gbs: 67
      }
    ]
  },
  {
    name: "CAVES (CONT)",
    steps: [
      {
        color: Color.Chunky,
        text: "BP"
      },
      {
        color: Color.Tiny,
        text: "Ice shield clip for GB",
        gbs: 68
      },
      {
        color: Color.Tiny,
        text: "Pwalk out, pswim to DK 5DI"
      },
      {
        color: Color.Tiny,
        text: "Twirl into ice maze"
      },
      {
        color: Color.DK,
        text: "Ice maze GB, deathwarp",
        gbs: 69
      },
      {
        color: Color.DK,
        text: "Pswim to Lanky 5DI"
      },
      {
        color: Color.Lanky,
        text: "5DI GB, pwalk out",
        gbs: 70
      },
      {
        color: Color.Lanky,
        text: "Pswim right of Chunky ice shield"
      },
      {
        color: Color.Lanky,
        text: "Continue to Snide T&S, Key 6"
      },
      {
        color: Color.Lanky,
        text: "Turn in BPs x7",
        gbs: 77
      },
      {
        color: Color.Chunky,
        text: "Turn in BPs x6, EXIT Caves",
        gbs: 83
      }
    ]
  },
  {
    name: "CAVES -> CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "W1, Castle Lobby"
      },
      {
        color: Color.DK,
        text: "Open BP gate"
      },
      {
        color: Color.Diddy,
        text: "BP"
      },
      {
        color: Color.DK,
        text: "ENTER Castle"
      }
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Pwalk in tree, BP, GB",
        gbs: 84
      },
      {
        color: Color.Diddy,
        text: "Pswim/air swim to crypt"
      },
      {
        color: Color.Diddy,
        text: "BP"
      },
      {
        color: Color.Tiny,
        text: "BP, climb to Rocketbarrel"
      },
      {
        color: Color.Diddy,
        text: "Rocket to Snide"
      },
      {
        color: Color.Tiny,
        text: "Turn in BPs x2",
        gbs: 86
      },
      {
        color: Color.Diddy,
        text: "Turn in BPs x4",
        gbs: 90
      },
      {
        color: Color.DK,
        text: "Turn in BPs x6",
        gbs: 96
      },
      {
        color: Color.DK,
        text: "Library clip for GB",
        gbs: 97
      },
      {
        color: Color.DK,
        text: "Walk up, kick down to W4, enter T&S"
      },
      {
        color: Color.Lanky,
        text: "Key 7"
      },
      {
        color: Color.Chunky,
        text: "Shed GB",
        gbs: 98
      },
      {
        color: Color.DK,
        text: "Clip in trash can"
      },
      {
        color: Color.Tiny,
        text: "Trash GB",
        gbs: 99
      },
      {
        color: Color.Lanky,
        text: "Tag midair to skip greenhouse GB, EXIT Castle",
        gbs: 100
      }
    ]
  },
  {
    name: "CASTLE -> HELM",
    steps: [
      {
        color: Color.Lanky,
        text: "Deathwarp, exit Lobby"
      },
      {
        color: Color.DK,
        text: "Turn in Keys 7, 3, 6"
      },
      {
        color: Color.Tiny,
        text: "Port to enter Helm lobby"
      },
      {
        color: Color.Chunky,
        text: "Gone for vines, ENTER Helm"
      },
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.Lanky,
        text: "Orangstand up hills"
      },
      {
        color: Color.DK,
        text: "Pwalks/switch kick OOB"
      },
      {
        color: Color.DK,
        text: "Continue OOB to Key 8"
      },
      {
        color: Color.Header,
        text: "Pause quit, enter file"
      }
    ]
  },
  {
    name: "HELM -> K. ROOL",
    steps: [
      {
        color: Color.DK,
        text: "W1, turn in Key 8, RESET"
      },
      {
        color: Color.DK,
        text: "W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
