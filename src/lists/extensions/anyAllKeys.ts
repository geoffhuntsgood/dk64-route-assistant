import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { defaultPreStart, krool } from "../../utils/sections";

export const anyAllKeys: RouteSection[] = [
  defaultPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Visit Cranky"
      },
      {
        color: Color.DK,
        text: "Barrel barrel"
      },
      {
        color: Color.DK,
        text: "Pswim to leave"
      },
    ]
  },
  {
    name: "ISLES -> AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "Climb to tag W2"
      },
      {
        color: Color.DK,
        text: "Aztec Early, ENTER Aztec"
      }
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
        text: "Enter T&S, DDQ Key 5"
      },
      {
        color: Color.DK,
        text: "Key 2, RESET on 2nd Donk"
      }
    ]
  },
  {
    name: "ISG",
    steps: [
      {
        color: Color.Header,
        text: "STORY SKIP ON AGAIN"
      },
      {
        color: Color.DK,
        text: "Start ISG, enter file"
      },
      {
        color: Color.DK,
        text: "Enter tag barrel, back to training grounds"
      },
      {
        color: Color.DK,
        text: "Vine barrel, tag W3/W1"
      },
      {
        color: Color.DK,
        text: "Tag far W1, pause quit"
      },
      {
        color: Color.Header,
        text: "EXAMINE FILE 1!"
      },
      {
        color: Color.Header,
        text: "Jungle Boss, pause exit"
      },
      {
        color: Color.Header,
        text: "Castle Boss, ISG fadeout"
      },
      {
        color: Color.Header,
        text: "Monkey Smash, get kicked out"
      },
      {
        color: Color.Header,
        text: "Caves Boss, ISG fadeout"
      },
      {
        color: Color.Header,
        text: "Monkey Smash, get kicked out"
      },
      {
        color: Color.Header,
        text: "Galleon Boss, ISG fadeout"
      },
      {
        color: Color.Header,
        text: "Monkey Smash, get kicked out"
      },
      {
        color: Color.Header,
        text: "Factory Boss, pause exit"
      },
      {
        color: Color.Header,
        text: "Get pulled in from main menu"
      },
      {
        color: Color.DK,
        text: "W1, turn in Key 5"
      },
      {
        color: Color.DK,
        text: "To Castle Lobby, ENTER Castle"
      },
      {
        color: Color.DK,
        text: "Roll to lower T&S, enter KKO"
      },
      {
        color: Color.Tiny,
        text: "Key 7 as Tiny"
      },
      {
        color: Color.Tiny,
        text: "Deathwarp, EXIT Castle"
      },
      {
        color: Color.Tiny,
        text: "Deathwarp, leave Lobby"
      },
      {
        color: Color.Tiny,
        text: "Port to Helm Early"
      },
      {
        color: Color.Tiny,
        text: "Kickslide up hill"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Switch kick or pwalks to Key 8"
      },
      {
        color: Color.DK,
        text: "Pwalks to leave Helm"
      },
      {
        color: Color.DK,
        text: "Drop to Factory Lobby, Factory Early"
      },
      {
        color: Color.DK,
        text: "Kick through Chunky CS, tag W1"
      },
      {
        color: Color.DK,
        text: "Robot push/pwalk, drop to storage T&S"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Key 3"
      },
      {
        color: Color.Tiny,
        text: "W1, EXIT Factory"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Leave Lobby, drop to Galleon Lobby"
      },
      {
        color: Color.DK,
        text: "Galleon Early"
      },
      {
        color: Color.DK,
        text: "To W3 T&S"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Key 4 as Tiny"
      },
      {
        color: Color.Tiny,
        text: "Void out, EXIT Galleon"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "To K. Lumsy, turn in keys 8 & 3"
      },
      {
        color: Color.DK,
        text: "To Japes Lobby, ENTER Japes"
      },
      {
        color: Color.DK,
        text: "Bush push to vine T&S, Key 1"
      },
      {
        color: Color.DK,
        text: "Bush push to EXIT Japes"
      },
      {
        color: Color.DK,
        text: "W2 to Caves Lobby, Caves Early"
      },
      {
        color: Color.DK,
        text: "Pswim to Snide T&S, Key 6"
      },
      {
        color: Color.DK,
        text: "Pwalk to leave, exit Lobby"
      },
      {
        color: Color.DK,
        text: "Kick down to K. Rool"
      },
    ]
  },
  krool
];
