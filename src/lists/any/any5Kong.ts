import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { isgPreStart, krool } from "../../utils/sections";

export const any5Kong: RouteSection[] = [
  isgPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.Header,
        text: "Start ISG, enter file"
      },
      {
        color: Color.DK,
        text: "Pause quit ASAP to main menu"
      },
      {
        color: Color.Header,
        text: "Jungle Boss, ISG will fade out"
      },
      {
        color: Color.Header,
        text: "Monkey Smash, get kicked out"
      },
      {
        color: Color.Header,
        text: "Trigger Intro Story again to end ISG"
      },
      {
        color: Color.Header,
        text: "Enter file"
      },
      {
        color: Color.DK,
        text: "Go to Cranky, spawn training barrels"
      },
      {
        color: Color.DK,
        text: "Dive Barrel - hold up left or up right"
      },
      {
        color: Color.DK,
        text: "Orange Barrel - throw directly next to tree"
      },
      {
        color: Color.DK,
        text: "Barrel Barrel - hold B (or shoot them)"
      },
      {
        color: Color.DK,
        text: "Vine Barrel - kick to second vine"
      },
      {
        color: Color.DK,
        text: "Phaseswim from pool, or leave through tunnel"
      }
    ]
  },
  {
    name: "START TO JAPES",
    steps: [
      {
        color: Color.DK,
        text: "Tag W2 and W5, swim to K. Lumsy"
      },
      {
        color: Color.DK,
        text: "K. Lumsy cutscene, leave"
      },
      {
        color: Color.DK,
        text: "Tag W1, go around back"
      },
      {
        color: Color.DK,
        text: "Climb to Factory - box roll/switch kick"
      },
      {
        color: Color.DK,
        text: "Tag upper W4, kick towards Banana Fairy Island"
      },
      {
        color: Color.DK,
        text: "Swim Through Shores into BFI"
      },
      {
        color: Color.DK,
        text: "Get Camera/Shockwave, leave"
      },
      {
        color: Color.DK,
        text: "Get 2 crystal coconuts, use W5"
      },
      {
        color: Color.DK,
        text: "Roll to Japes Lobby, dance skip GB"
      },
      {
        color: Color.DK,
        text: "ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES",
    steps: [
      {
        color: Color.DK,
        text: "Skip text/cutscenes"
      },
      {
        color: Color.DK,
        text: "Kick jump to DK switch or Bush Push"
      },
      {
        color: Color.DK,
        text: "Lanky slope Rainbow Coin"
      },
      {
        color: Color.DK,
        text: "Tree moonkick or climb to Diddy GB"
      },
      {
        color: Color.DK,
        text: "Three switches, free Diddy"
      },
      {
        color: Color.DK,
        text: "Pause exit"
      }
    ]
  },
  {
    name: "JAPES TO AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "Leave Japes Lobby"
      },
      {
        color: Color.DK,
        text: "Tag W3 in ring"
      },
      {
        color: Color.DK,
        text: "Get Rainbow Coin on the way to Aztec"
      },
      {
        color: Color.DK,
        text: "Moonkick to Caves Early, B. Locker Skip"
      },
      {
        color: Color.DK,
        text: "ENTER Caves, pause exit, leave Lobby"
      },
      {
        color: Color.DK,
        text: "Kick jump right to tag W2 outside Aztec"
      },
      {
        color: Color.DK,
        text: "W2, W1, turn in Key 1, W1, W2, ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "Guitar Skip to Cranky's"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Get Simian Slam from Cranky"
      },
      {
        color: Color.Diddy,
        text: "Re-enter Cranky, buy Charge and Rocket, leave"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Moonkick or roll clip to enter Llama Temple"
      },
      {
        color: Color.DK,
        text: "Phaseswim to Lanky cage"
      },
      {
        color: Color.DK,
        text: "Free Lanky, deathwarp to cancel cutscene"
      },
      {
        color: Color.DK,
        text: "W1 to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Oasis Rainbow Coin, enter Tiny Temple"
      },
      {
        color: Color.Diddy,
        text: "Charge clip/ledge clip to Tiny"
      },
      {
        color: Color.Diddy,
        text: "OKONG or GKONG to free Tiny"
      },
      {
        color: Color.Diddy,
        text: "Pause exit"
      }
    ]
  },
  {
    name: "AZTEC TO FACTORY",
    steps: [
      {
        color: Color.Diddy,
        text: "Leave Aztec Lobby, W2, W4"
      },
      {
        color: Color.Lanky,
        text: "Factory Early (see doc for details)"
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.Lanky,
        text: "Slam blue switch, walk to storage"
      },
      {
        color: Color.Lanky,
        text: "Slope resets up pipe to free Chunky"
      },
      {
        color: Color.Lanky,
        text: "Climb boxes to Cranky/Candy"
      },
      {
        color: Color.Lanky,
        text: "Buy Trombone from Candy"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Buy Hunky, Punch, Super Simian Slam from Cranky"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Buy Mini, Twirl, Monkeyport from Cranky"
      },
      {
        color: Color.Tiny,
        text: "Back to storage room, enter T&S"
      },
      {
        color: Color.Tiny,
        text: "Ledge clip into boss (or moonkick w/DK)"
      },
      {
        color: Color.Tiny,
        text: "Pause exit to skip cutscene"
      },
      {
        color: Color.Tiny,
        text: "Ledge clip again, enter Mad Jack"
      },
      {
        color: Color.Header,
        text: "Mad Jack jumps: 9-11-12-13-15"
      },
      {
        color: Color.Tiny,
        text: "Get Key 3, pause exit"
      }
    ]
  },
  {
    name: "FACTORY TO HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Drop to Monkeyport pad, Port up"
      },
      {
        color: Color.Tiny,
        text: "Helm Early (see doc for details)"
      },
      {
        color: Color.Tiny,
        text: "ENTER Helm"
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
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Shoot switch, cross vines"
      },
      {
        color: Color.Chunky,
        text: "Terminal clips 1 & 2 (see doc)"
      },
      {
        color: Color.Chunky,
        text: "Get Key 8, RESET on 2nd 'Donk'"
      }
    ]
  },
  {
    name: "HELM TO K. ROOL",
    steps: [
      {
        color: Color.Header,
        text: "Re-enter file"
      },
      {
        color: Color.DK,
        text: "W1, turn in Keys 8 & 3"
      },
      {
        color: Color.DK,
        text: "W1, W3, enter K. Rool"
      },
      {
        color: Color.Header,
        text: "Note: see doc for K. Rool strategies"
      }
    ]
  },
  krool
];
