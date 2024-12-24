import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { krool } from "../../commonSections";

export const any1Kong2015: Route = {
  name: "Any% 1-Kong (2015)",
  doc: "https://pastebin.com/ezTY6uAx",
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Prereqs: 10 fairies, 2nd controller"
        },
        {
          color: Color.Header,
          text: "Reset console, delete File 1"
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
      name: "Start!",
      steps: [
        {
          color: Color.DK,
          text: "Cranky, Orange Barrel, Barrel Barrel"
        },
        {
          color: Color.Header,
          text: "Barrel Reset or manual save & Isles Reset"
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
          text: "TBS (count attempts)"
        },
        {
          color: Color.DK,
          text: "Telegrabs to Helm"
        },
        {
          color: Color.DK,
          text: "B. Locker Text Skip, enter Helm"
        },
        {
          color: Color.DK,
          text: "DK Helm (see 2014 route)"
        },
        {
          color: Color.DK,
          text: "Orange dance skip Key 8"
        },
        {
          color: Color.Header,
          text: "- Manual save if Barrel Reset/Even TBS"
        },
        {
          color: Color.Header,
          text: "- Manual save if Isles Reset/Odd TBS"
        },
        {
          color: Color.Header,
          text: "Quit, hold A to main menu ASAP"
        },
        {
          color: Color.Header,
          text: "Factory Boss, pause exit, pulled into file"
        }
      ]
    },
    {
      name: "Isles to Factory",
      steps: [
        {
          color: Color.DK,
          text: "W4 to Factory Lobby"
        },
        {
          color: Color.DK,
          text: "Pfall/pwalk to enter Factory"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.DK,
          text: "Kick through Chunky CS, tag W1"
        },
        {
          color: Color.DK,
          text: "Robot push/pwalk to storage T&S"
        },
        {
          color: Color.DK,
          text: "Key 3, W1, exit"
        }
      ]
    },
    {
      name: "Factory to K. Rool",
      steps: [
        {
          color: Color.DK,
          text: "Leave Lobby, drop to K. Lumsy"
        },
        {
          color: Color.DK,
          text: "Turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "Swim to enter K. Rool"
        }
      ]
    },
    krool
  ]
};
