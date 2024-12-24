import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { krool } from "../../commonSections";

export const anyAllKeys: Route = {
  name: "Any% All Keys",
  doc: "https://www.speedrun.com/dk64ce/runs/znv441lm",
  docIsVid: true,
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip on, delete File 1"
        },
        {
          color: Color.Header,
          text: "NOTE: This route is based on the VC WR video."
        }
      ]
    },
    {
      name: "Start!",
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
        }
      ]
    },
    {
      name: "Isles to Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Climb to tag W2"
        },
        {
          color: Color.DK,
          text: "Aztec Early, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec",
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
          text: "Key 2, reset on 2nd 'Donk'"
        }
      ]
    },
    {
      name: "ISG",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip on"
        },
        {
          color: Color.Header,
          text: "Start ISG, enter file"
        },
        {
          color: Color.DK,
          text: "Enter tag barrel, back to training grounds"
        },
        {
          color: Color.DK,
          text: "Vine barrel, tag W3/W1 in ring"
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
        }
      ]
    },
    {
      name: "Treehouse to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Out to W1, turn in Key 5"
        },
        {
          color: Color.DK,
          text: "To Castle Lobby, enter Castle"
        }
      ]
    },
    {
      name: "Castle",
      steps: [
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
          text: "Deathwarp, exit level"
        }
      ]
    },
    {
      name: "Castle to Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.Tiny,
          text: "Tiny (backup: DK) Helm Early"
        },
        {
          color: Color.Tiny,
          text: "Enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Kickslide up hill"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Switch kick/pwalks to Key 8"
        },
        {
          color: Color.DK,
          text: "Pwalks to Helm Escape"
        }
      ]
    },
    {
      name: "Helm to Factory",
      steps: [
        {
          color: Color.DK,
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.DK,
          text: "Drop to Factory Lobby, enter Factory"
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
          text: "Robot push/pwalk, drop to storage T&S"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Key 3"
        },
        {
          color: Color.Tiny,
          text: "W1, exit level"
        }
      ]
    },
    {
      name: "Factory to Galleon",
      steps: [
        {
          color: Color.DK,
          tag: "R",
          text: "Leave Lobby, drop to Galleon Lobby"
        },
        {
          color: Color.DK,
          text: "Enter Galleon"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.DK,
          text: "Cannon to W3 T&S"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Key 4 as Tiny"
        },
        {
          color: Color.Tiny,
          text: "Void out, exit level"
        }
      ]
    },
    {
      name: "Galleon to Japes",
      steps: [
        {
          color: Color.DK,
          tag: "R",
          text: "To K. Lumsy, turn in keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "To Japes Lobby, enter Japes"
        }
      ]
    },
    {
      name: "Japes",
      steps: [
        {
          color: Color.DK,
          text: "Bush push to vine T&S, Key 1"
        },
        {
          color: Color.DK,
          text: "Bush push to exit level"
        }
      ]
    },
    {
      name: "Japes to Caves",
      steps: [
        {
          color: Color.DK,
          text: "W2 to Caves Lobby, enter Caves"
        }
      ]
    },
    {
      name: "Caves",
      steps: [
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
        }
      ]
    },
    krool
  ]
};
