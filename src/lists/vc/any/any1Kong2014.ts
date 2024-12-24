import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { krool } from "../../commonSections";

export const any1Kong2014: Route = {
  name: "Any% 1-Kong (2014)",
  doc: "https://docs.google.com/document/d/1GHJMfpSWSD4Ao5acqLS6hTW-f7oSsLytu9Jb8BxWGF0",
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
          text: "Story Skip on"
        }
      ]
    },
    {
      name: "Start!",
      steps: [
        {
          color: Color.DK,
          text: "Pseudo-dive/crouch dive, wet escape"
        },
        {
          color: Color.DK,
          text: "Fall/uncrouch TBS"
        },
        {
          color: Color.DK,
          text: "Down left 2-3 tag rotations, exit tag"
        },
        {
          color: Color.DK,
          text: "Jump on Krem Isle, 1st telegrab"
        },
        {
          color: Color.DK,
          text: "50/50 or stable 2nd telegrab"
        },
        {
          color: Color.DK,
          text: "Helm Lobby Kick or pwalk on back wall"
        },
        {
          color: Color.DK,
          text: "B. Locker text (or skip), enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.DK,
          text: "Slope resets up hill"
        },
        {
          color: Color.DK,
          text: "Switch kick or 2 pwalks"
        },
        {
          color: Color.DK,
          text: "Backflip onto Chunky room OOB corner"
        },
        {
          color: Color.DK,
          text: "180 at beam to Lanky room"
        },
        {
          color: Color.DK,
          text: "Line up/roll between grate and glass"
        },
        {
          color: Color.DK,
          text: "Backflip in bounds (wheel or floor strip)"
        },
        {
          color: Color.DK,
          text: "Terminal clip 2, roll under Key 8 room"
        },
        {
          color: Color.DK,
          text: "Backflip in room, look at window"
        },
        {
          color: Color.DK,
          text: "Key 8, pause quit"
        }
      ]
    },
    {
      name: "ISG",
      steps: [
        {
          color: Color.Header,
          text: "Start timer w/ISG, enter file 1"
        },
        {
          color: Color.DK,
          text: "Enter Cranky's between 40-50 on timer"
        },
        {
          color: Color.DK,
          text: "Cancel Cranky's text at 0:55"
        },
        {
          color: Color.DK,
          text: "Enter Barrel barrel at 1:24.5"
        },
        {
          color: Color.DK,
          text: "Complete barrel, roll to far W3"
        },
        {
          color: Color.DK,
          text: "Pause quit, start to cancel at 2:49"
        },
        {
          color: Color.Header,
          text: "EXAMINE FILE 1!!!!!"
        },
        {
          color: Color.Header,
          text: "Enter/exit Kong battle"
        },
        {
          color: Color.Header,
          text: "Enter/exit Factory boss"
        },
        {
          color: Color.Header,
          text: "Wait on main screen for CS pull-in"
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
          text: "Pfall/pwalk in Factory"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.DK,
          text: "Kick through Chunky cutscene"
        },
        {
          color: Color.DK,
          text: "Tag W1, robot push/pwalk"
        },
        {
          color: Color.DK,
          text: "Fall to storage room, enter T&S"
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
          text: "Leave Lobby, fall to K. Lumsy"
        },
        {
          color: Color.DK,
          text: "Turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "W1/W3, enter K. Rool"
        }
      ]
    },
    krool
  ]
};
