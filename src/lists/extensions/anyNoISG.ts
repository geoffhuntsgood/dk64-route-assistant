import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { defaultPreStart, krool } from "../../utils/sections";

export const anyNoISG: RouteSection[] = [
  defaultPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Training barrels"
      },
      {
        color: Color.DK,
        text: "Get Slam, pswim to leave"
      }
    ]
  },
  {
    name: "ISLES -> HELM",
    steps: [
      {
        color: Color.DK,
        text: "Tag W4/W1"
      },
      {
        color: Color.DK,
        text: "TBS, telegrabs to Helm Early"
      },
      {
        color: Color.DK,
        text: "ENTER Helm"
      }
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.DK,
        text: "Switch kicks/pwalks to Key 8"
      },
      {
        color: Color.DK,
        text: "Pwalks to Helm Escape"
      }
    ]
  },
  {
    name: "HELM -> AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "Leave Helm Lobby, drop to water"
      },
      {
        color: Color.DK,
        text: "STS to BFI, get shockwave, 3 crystals"
      },
      {
        color: Color.DK,
        text: "Under Caves RC, climb to Aztec"
      },
      {
        color: Color.DK,
        text: "Tag W2, Aztec roof RC"
      },
      {
        color: Color.DK,
        text: "Pwalk/long jump to Aztec Lobby"
      },
      {
        color: Color.DK,
        text: "ENTER Aztec"
      },
    ]
  },
  {
    name: "AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "Pwalk to skip llama CS"
      },
      {
        color: Color.DK,
        text: "(Optional) Oasis RC"
      },
      {
        color: Color.DK,
        text: "DDQ Key 5, RESET on 2nd Donk"
      },
      {
        color: Color.Header,
        text: "STORY SKIP ON AGAIN, enter file"
      }
    ]
  },
  {
    name: "ISLES -> CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Visit K. Lumsy, turn in Keys 8, 5"
      },
      {
        color: Color.DK,
        text: "To Castle Lobby, ENTER Castle"
      }
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Pswim to crypt, enter T&S by Funky"
      },
      {
        color: Color.Lanky,
        text: "Exit with/tag Lanky"
      },
      {
        color: Color.Tiny,
        text: "(Optional) Exit with/tag Tiny"
      },
      {
        color: Color.Diddy,
        text: "(Tag optional) Exit with/tag Diddy"
      },
      {
        color: Color.Diddy,
        text: "Leave T&S, buy Peanut, RESET"
      }
    ]
  },
  {
    name: "ISLES -> FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "W4 to Factory Lobby, ENTER Factory"
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "Kick through Chunky CS"
      },
      {
        color: Color.DK,
        text: "Pwalk/robot push, fall to storage"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Slope resets to free Chunky"
      },
      {
        color: Color.Lanky,
        text: "Enter T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Enter/leave to clear MJ CS"
      },
      {
        color: Color.DK,
        text: "Key 3"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Buy Trombone"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "(Optional) Buy Charge, Rocketbarrel"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Buy Hunky, Punch"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "(Optional) Buy Mini, EXIT Factory"
      }
    ]
  },
  {
    name: "FACTORY -> K. ROOL",
    steps: [
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Tag in Lobby"
      },
      {
        color: Color.DK,
        text: "Drop to K. Lumsy, turn in Key 3"
      },
      {
        color: Color.DK,
        text: "ENTER K. Rool"
      }
    ]
  },
  krool
];
