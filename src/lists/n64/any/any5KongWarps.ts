import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const any5KongWarps: Route = mapItemsToRoute({
  name: "Any% 5-Kong (Warps)",
  doc: "https://docs.google.com/document/d/14QnzaOGhb5Wjdgz_8ntZpDil8UNi4ww_jq_WQiHCz2g",
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
          text: "Tag W5/W1"
        },
        {
          color: Color.DK,
          text: "To K. Lumsy, tag W1"
        },
        {
          color: Color.DK,
          text: "Open Japes, go around back"
        },
        {
          color: Color.DK,
          text: "Switch kick to tag high W4"
        },
        {
          color: Color.DK,
          text: "Drop to water, STS to BFI"
        },
        {
          color: Color.DK,
          text: "2 crystals, W5"
        },
        {
          color: Color.DK,
          text: "Japes entry GB, enter Japes",
          gbs: "x1"
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
          text: "Plant kick to rainbow coin"
        },
        {
          color: Color.DK,
          text: "Tree kick to cannon, Diddy GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Three switches, exit level"
        }
      ]
    },
    {
      name: "Japes to Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Tag far W3"
        },
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
          text: "Pause exit, leave Lobby"
        },
        {
          color: Color.DK,
          text: "Kick right toward Aztec"
        },
        {
          color: Color.DK,
          text: "Orange clip to enter Aztec"
        }
      ]
    },
    {
      name: "Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Orange clip to skip Llama CS, tag W1"
        },
        {
          color: Color.DK,
          text: "Guitar Skip, to Cranky"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Buy up to Rocket"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Moonkick/roll clip in Llama Temple"
        },
        {
          color: Color.DK,
          text: "Phaseswim to free Lanky, 1 crystal"
        },
        {
          color: Color.DK,
          text: "Deathwarp, W1, oasis rainbow coin"
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
          text: "OKONG or GKONG to free Tiny"
        },
        {
          color: Color.Diddy,
          text: "Reset"
        }
      ]
    },
    {
      name: "Isles to Factory",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip again, enter file"
        },
        {
          color: Color.DK,
          text: "W4, Factory Lobby"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Factory Early"
        },
        {
          color: Color.Lanky,
          text: "Robot push to storage"
        },
        {
          color: Color.Lanky,
          text: "Slope resets to free Chunky"
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
          text: "Leave lobby, drop to Port"
        },
        {
          color: Color.Tiny,
          text: "Helm Early, enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Kickslide up hills"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot switch, terminal clips 1 & 2"
        },
        {
          color: Color.DK,
          text: "Alternate: Switch kick, terminal clip 2"
        },
        {
          color: Color.Chunky,
          text: "Key 8 facing window, reset"
        }
      ]
    },
    {
      name: "Helm to K. Rool",
      steps: [
        {
          color: Color.Header,
          text: "Enter file"
        },
        {
          color: Color.DK,
          text: "W1, turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "W1, W3, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
