import { RouteSection } from "../../classes";
import { Color } from "../../enums";
import { krool } from "../../utils/sections";

export const any1Kong2015: RouteSection[] = [
  {
    name: "PRE-START",
    steps: [
      {
        color: Color.Header,
        text: "Prereqs: 10 fairies, 2nd controller"
      },
      {
        color: Color.Header,
        text: "RESET console, delete File 1"
      },
      {
        color: Color.Header,
        text: "Note: if having file 1 issues, use file 3"
      },
      {
        color: Color.Header,
        text: "Story Skip on"
      }
    ]
  },
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Cranky, Orange Barrel, Barrel Barrel"
      },
      {
        color: Color.Header,
        text: "Optional: BARREL RESET"
      },
      {
        color: Color.DK,
        text: "Pseudo-dive, pswim escape"
      },
      {
        color: Color.DK,
        text: "Manual SAVE & ISLES RESET"
      }
    ]
  },
  {
    name: "ISG",
    steps: [
      {
        color: Color.Header,
        text: "Start ISG, Story Skip on, enter file"
      },
      {
        color: Color.DK,
        text: "TBS (count TB entries)"
      },
      {
        color: Color.DK,
        text: "Telegrab to Helm"
      },
      {
        color: Color.DK,
        text: "Helm Lobby Kick"
      },
      {
        color: Color.DK,
        text: "B. Locker Text Skip"
      },
      {
        color: Color.DK,
        text: "DK Helm (see 2014 route for details)"
      },
      {
        color: Color.DK,
        text: "Orange dance skip Key 8"
      },
      {
        color: Color.Header,
        text: "IF BARREL RESET & ODD TBS: NO MANUAL SAVE"
      },
      {
        color: Color.Header,
        text: "IF BARREL RESET & EVEN TBS: MANUAL SAVE"
      },
      {
        color: Color.Header,
        text: "IF ISLES RESET & ODD TBS: MANUAL SAVE"
      },
      {
        color: Color.Header,
        text: "IF ISLES RESET & EVEN TBS: NO MANUAL SAVE"
      },
      {
        color: Color.Header,
        text: "After SAVE, QUIT"
      },
      {
        color: Color.Header,
        text: "Main menu ASAP"
      },
      {
        color: Color.Header,
        text: "Factory Boss, pause exit"
      },
      {
        color: Color.Header,
        text: "Hope for good RNG to get pulled into file"
      },
    ]
  },
  {
    name: "ISLES -> FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "Roll out to W4"
      },
      {
        color: Color.DK,
        text: "Pwalk/box kick to Factory early"
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "TAG W1!!"
      },
      {
        color: Color.DK,
        text: "Robot push/pwalk to storage T&S"
      },
      {
        color: Color.DK,
        text: "DK Mad Jack"
      },
      {
        color: Color.DK,
        text: "W1, exit"
      }
    ]
  },
  {
    name: "FACTORY -> K. ROOL",
    steps: [
      {
        color: Color.DK,
        text: "Leave Lobby, kick to K. Lumsy"
      },
      {
        color: Color.DK,
        text: "Japes CS, turn in Keys 8 & 3"
      },
      {
        color: Color.DK,
        text: "Swim to ENTER K. ROOL"
      }
    ]
  },
  krool
];
