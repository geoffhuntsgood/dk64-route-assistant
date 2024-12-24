import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { krool } from "../../commonSections";

export const anyNoISG: Route = {
  name: "Any% No ISG",
  doc: "https://www.speedrun.com/dk64ce/runs/zxxn1wgz",
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
          text: "Training barrels"
        },
        {
          color: Color.DK,
          text: "Get Slam, pswim to leave"
        }
      ]
    },
    {
      name: "Isles to Helm",
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
          text: "Enter Helm"
        }
      ]
    },
    {
      name: "Helm",
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
      name: "Helm to Aztec",
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
          text: "Enter Aztec"
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
          text: "Oasis RC if buying extra moves"
        },
        {
          color: Color.DK,
          text: "DDQ Key 5, reset on 2nd 'Donk'"
        },
        {
          color: Color.Header,
          text: "Story Skip on, enter file"
        }
      ]
    },
    {
      name: "Isles to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Visit K. Lumsy, turn in Keys 8, 5"
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
          text: "Pswim to crypt, enter T&S by Funky"
        },
        {
          color: Color.Lanky,
          text: "Exit KKO with/tag Lanky"
        },
        {
          color: Color.Tiny,
          text: "Exit KKO with/tag Tiny if buying Mini"
        },
        {
          color: Color.Diddy,
          text: "Exit KKO with Diddy"
        },
        {
          color: Color.Diddy,
          text: "Tag if buying Rocket, leave T&S"
        },
        {
          color: Color.Diddy,
          text: "Buy Peanut, reset"
        }
      ]
    },
    {
      name: "Isles to Factory",
      steps: [
        {
          color: Color.DK,
          text: "W4 to Factory Lobby, enter Factory"
        }
      ]
    },
    {
      name: "Factory",
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
          tag: "R",
          text: "Slope resets to free Chunky"
        },
        {
          color: Color.Lanky,
          text: "Enter T&S"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Enter/leave to clear MJ CS"
        },
        {
          color: Color.DK,
          text: "Key 3"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Buy Trombone"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "(Optional) Buy up to Rocket"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Buy Hunky, Punch"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "(Optional) Buy Mini"
        },
        {
          color: Color.Tiny,
          text: "Exit Factory"
        }
      ]
    },
    {
      name: "Factory to K. Rool",
      steps: [
        {
          color: Color.DK,
          tag: "R",
          text: "Tag in Lobby"
        },
        {
          color: Color.DK,
          text: "Drop to K. Lumsy, turn in Key 3"
        },
        {
          color: Color.DK,
          text: "Enter K. Rool"
        }
      ]
    },
    krool
  ]
};
