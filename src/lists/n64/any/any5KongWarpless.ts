import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const any5KongWarpless: Route = mapItemsToRoute({
  name: "Any% 5-Kong (Warpless)",
  doc: "https://docs.google.com/document/d/19J8_5Fq9G5LYrzaATSZrZcZigUXkSI8npaaZd4yBnJM",
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
          text: "Story Skip on, delete File 1"
        }
      ]
    },
    {
      name: "Start!",
      steps: [
        {
          color: Color.Header,
          text: "Start ISG, enter file"
        },
        {
          color: Color.DK,
          text: "Quit ASAP"
        },
        {
          color: Color.Header,
          text: "Jungle boss, ISG will fade out"
        },
        {
          color: Color.Header,
          text: "Monkey Smash, get kicked out"
        },
        {
          color: Color.Header,
          text: "Start/cancel story intro"
        },
        {
          color: Color.Header,
          text: "Enter file"
        },
        {
          color: Color.DK,
          text: "Cranky, training barrels"
        },
        {
          color: Color.DK,
          text: "Wet Escape"
        }
      ]
    },
    {
      name: "Isles to Japes",
      steps: [
        {
          color: Color.DK,
          text: "STS to BFI"
        },
        {
          color: Color.DK,
          text: "2 crystals, tree for Japes Early"
        }
      ]
    },
    {
      name: "Japes",
      steps: [
        {
          color: Color.DK,
          text: "Bush push"
        },
        {
          color: Color.DK,
          text: "Slope rainbow coin"
        },
        {
          color: Color.DK,
          text: "Climb tree, lag kick to cannon"
        },
        {
          color: Color.DK,
          text: "Get mountain GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Kick jump to cannon tree, right switch"
        },
        {
          color: Color.DK,
          text: "To lower tag barrel, other switches"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Japes to Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Rainbow coin under Caves"
        },
        {
          color: Color.DK,
          text: "Moonkick to Caves Early"
        },
        {
          color: Color.DK,
          text: "Exit level, leave Lobby"
        },
        {
          color: Color.DK,
          text: "Kick right toward Aztec"
        },
        {
          color: Color.DK,
          text: "Orange clip/damage to Aztec Early"
        }
      ]
    },
    {
      name: "Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Orange clip to skip Llama CS"
        },
        {
          color: Color.DK,
          text: "OOB to Cranky"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Buy up to Rocket (alt: only Charge)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Moonkick/roll clip in Llama Temple"
        },
        {
          color: Color.DK,
          text: "Phaseswim to Lanky, 1 crystal"
        },
        {
          color: Color.DK,
          text: "Free Lanky/deathwarp CS overlap"
        },
        {
          color: Color.DK,
          text: "Orange clip, skip Llama again"
        },
        {
          color: Color.DK,
          text: "Oasis rainbow coin"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Enter Tiny Temple"
        },
        {
          color: Color.Diddy,
          text: "Ledge clip or melt ice"
        },
        {
          color: Color.Diddy,
          text: "OKONG or GKONG"
        },
        {
          color: Color.Diddy,
          text: "Free Tiny, reset on 3rd text line"
        }
      ]
    },
    {
      name: "Isles to Factory",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip on, enter file"
        },
        {
          color: Color.DK,
          text: "Switch kick/box kick to Factory Lobby"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Factory Early"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.Lanky,
          text: "Robot push, fall to storage"
        },
        {
          color: Color.Lanky,
          text: "Slop resets to switch"
        },
        {
          color: Color.Lanky,
          text: "Free Chunky/tag W1 CS overlap"
        },
        {
          color: Color.Lanky,
          text: "Buy Trombone"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Buy up to Super Slam"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Buy up to Port"
        },
        {
          color: Color.Tiny,
          text: "Enter T&S, Key 3, exit level"
        }
      ]
    },
    {
      name: "Factory to Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Leave Lobby, drop to Port"
        },
        {
          color: Color.Tiny,
          text: "Helm Early"
        },
        {
          color: Color.Tiny,
          text: "Lobby corner clip, enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Kickslide up slopes"
        },
        {
          color: Color.Chunky,
          text: "Shoot switch, terminal clips 1 & 2"
        },
        {
          color: Color.Chunky,
          text: "Key 8, reset on 2nd 'Donk'"
        }
      ]
    },
    {
      name: "Isles to K. Rool",
      steps: [
        {
          color: Color.DK,
          text: "To K. Lumsy, turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "Swim/roll to enter K. Rool"
        }
      ]
    },
    krool
  ]
});
