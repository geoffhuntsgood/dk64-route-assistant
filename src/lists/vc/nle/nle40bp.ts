import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { vcISGNLE, krool } from "../../commonSections";

export const nle40bp: Route = mapItemsToRoute({
  name: "NLE Advanced (40 BP)",
  doc: "https://docs.google.com/document/d/1sFHSe1E7cYfLC6ahBJqFTqcs_qussrKYNd_sRpcLYWw",
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
    vcISGNLE,
    {
      name: "Isles to Japes 1",
      steps: [
        {
          color: Color.DK,
          text: "Orange barrel, wet escape"
        },
        {
          color: Color.DK,
          text: "Tag W4/W1, visit K. Lumsy"
        },
        {
          color: Color.DK,
          text: "W1, entrance GB to Japes Lobby",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter Japes"
        }
      ]
    },
    {
      name: "Japes 1",
      steps: [
        {
          color: Color.DK,
          text: "Bush push, moonkick to cannon"
        },
        {
          color: Color.DK,
          text: "Cannon to GB, tag W2",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Right switch, kick down"
        },
        {
          color: Color.DK,
          text: "Middle switch, tag W1"
        },
        {
          color: Color.DK,
          text: "Note: Diddy/Switch CS cancel"
        },
        {
          color: Color.DK,
          text: "Pswim to GB, BP",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W3, left switch"
        },
        {
          color: Color.DK,
          text: "Note: Blast/Switch CS cancel, GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W2 to GB, get ammo toward Snide",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Mountain GB, BP",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim for cave GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 1, back to portal"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Japes 1 to Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "W1, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1, tag W2/W3"
        },
        {
          color: Color.DK,
          text: "Enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "BP, 3 crystals"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Guitar to open tunnel"
        },
        {
          color: Color.Diddy,
          text: "BP, Enter Tiny Temple"
        },
        {
          color: Color.Diddy,
          text: "Ledge clip to Tiny GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "OKONG, pswim out"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, tag by Snide"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Gong tower GB, tag by Snide",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Enter T&S, Key 2, tag W5"
        },
        {
          color: Color.DK,
          text: "Bonus GB in sand tunnel",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W5, clip in 5DT for GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Moonkick/roll clip into Llama Temple"
        },
        {
          color: Color.DK,
          text: "Tag W2, gun skew"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Free Lanky, GB, climb to tag",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          skew: true,
          text: "Tag W1, matching game GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Through wall to BP, W2, W1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "W1, W2, lava GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Through back wall to void out"
        },
        {
          color: Color.Tiny,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Aztec to Factory",
      steps: [
        {
          color: Color.Tiny,
          text: "W2, W1, turn in Key 2"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxohpone GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fall to Factory Lobby"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Enter Factory"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.Lanky,
          text: "Robot push, pipe GB, drop to tag",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tag W4, drop for BP"
        },
        {
          color: Color.Diddy,
          text: "Slam prod switch, go to storage"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Free Chunky GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Key 3, BP"
        },
        {
          color: Color.Tiny,
          text: "Cage GB, clip to testing",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, go to R&D"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Drop to power shed, lever GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Dark room GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Slam prod switch, W4 to GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Climb platforms to tag"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Spring GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, drop to crusher room"
        },
        {
          color: Color.DK,
          text: "Clip OOB for GB, clip to void out",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Factory to Japes 2",
      steps: [
        {
          color: Color.DK,
          text: "Bongos GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Punch box"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP, W4"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tag W5, Japes Lobby, move rock"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Trombone GB, enter Japes",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Japes 2",
      steps: [
        {
          color: Color.Lanky,
          text: "W1, gun skew"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "W3, BP, Stump GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          skew: true,
          text: "Through wall for cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          skew: true,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          skew: true,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Enter painting room"
        },
        {
          color: Color.Lanky,
          text: "Clip for painting GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pswim underground"
        },
        {
          color: Color.Chunky,
          text: "Underground BP, GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Deathwarp, rock GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "W1, exit level"
        }
      ]
    },
    {
      name: "Japes to Galleon",
      steps: [
        {
          color: Color.DK,
          text: "W4, drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Galleon Lobby to tag"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BP, enter Galleon"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Open gate, chest GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tag W3, Key 4, OOB to BP"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Pswim to 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Pswim to 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 2DS GB, again to void",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim into treasure room"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Ledge kick from chest to BP"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Pswim to void, BP"
        },
        {
          color: Color.Lanky,
          text: "Pswim to lighthouse"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB, tag at mermaid",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, raise water, turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Turn in BPs x4, W3, BP",
          gbs: "x4"
        },
        {
          color: Color.Tiny,
          text: "Void above T&S, exit level"
        }
      ]
    },
    {
      name: "Galleon to Forest",
      steps: [
        {
          color: Color.Tiny,
          text: "Pswim to pipe GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Void at torch, exit Lobby"
        },
        {
          color: Color.Tiny,
          text: "STS to BFI GB, W5",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "K. Lumsy Sprint GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Turn in Key 4, W1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W5, slam big X, STS to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Big X GB, enter Forest Lobby",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter Forest"
        }
      ]
    },
    {
      name: "Forest",
      steps: [
        {
          color: Color.DK,
          text: "Tag W4, pink tunnel"
        },
        {
          color: Color.DK,
          text: "Tag at inner mushroom moat"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket to mushroom top, get Homing Ammo"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Slam switch, dark room GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Fall to BP, fall to Blast platform"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Climb ladder for BP, back out to tag"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, drop to pswim to Owl"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP, W4, turn in BPs x5",
          gbs: "x5"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Turn in BPs x5",
          gbs: "x5"
        },
        {
          color: Color.DK,
          text: "Key 5, turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.DK,
          text: "Enter mill, clip for GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Exit mill, pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Thorn skew, tag behind thorn barn"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, exit level"
        }
      ]
    },
    {
      name: "Forest to Caves",
      steps: [
        {
          color: Color.Diddy,
          tag: "R",
          text: "Exit Forest Lobby, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fall to tag W3"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W1, turn in Key 5, W1/W2"
        },
        {
          color: Color.Chunky,
          text: "Triangle GB, Caves Lobby",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch left wall"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to Guitar GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Enter Caves"
        }
      ]
    },
    {
      name: "Caves",
      steps: [
        {
          color: Color.Diddy,
          text: "Tag W1, gun skew"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Cross river, BP, tag W4"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Rocket to tag W5"
        },
        {
          color: Color.Diddy,
          text: "Rocket to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to T&S above DK cabin"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 6, DK cabin GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP, 5DC GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "5DC GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "W5, BP, tag at ice castle"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, kick down to tag"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "W4 to ice shield GB, W4",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, W1, pswim for Gone GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Caves to Castle",
      steps: [
        {
          color: Color.Chunky,
          text: "Jump left, Punch wall"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Damage boost to lava GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit Lobby, W1, Castle Lobby"
        },
        {
          color: Color.DK,
          text: "Open BP gate"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, enter Castle"
        }
      ]
    },
    {
      name: "Castle",
      steps: [
        {
          color: Color.Diddy,
          text: "Climb to warps, enter tunnel"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BP"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Clip in tree for BP"
        },
        {
          color: Color.DK,
          text: "Roll clip for GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Back to warps, ledge kick to T&S"
        },
        {
          color: Color.Lanky,
          text: "KKO as Lanky, Key 7"
        },
        {
          color: Color.Lanky,
          text: "Clockwise to BP, drop to crypt"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, deathwarp, exit level"
        }
      ]
    },
    {
      name: "Castle to Aztec 2",
      steps: [
        {
          color: Color.Tiny,
          text: "Turn in Keys 7 & 6"
        },
        {
          color: Color.Tiny,
          text: "Port to Helm Lobby"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Damage boost to BP"
        },
        {
          color: Color.DK,
          text: "Exit, kick to warps, W2"
        },
        {
          color: Color.DK,
          text: "Enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 2",
      steps: [
        {
          color: Color.DK,
          text: "W1 to tag"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Hunky clip OOB by bonus barrel"
        },
        {
          color: Color.Chunky,
          text: "Clip in back to enter 5DT"
        },
        {
          color: Color.Chunky,
          text: "BP, leave 5DT, Snide's"
        },
        {
          color: Color.Chunky,
          text: "Turn in BPs x3",
          gbs: "x3"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Turn in BPs x3",
          gbs: "x3"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Tiny,
          text: "Lose Beaver Bother to regain pause, pause exit"
        }
      ]
    },
    {
      name: "Aztec 2 to Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "W2, Port to Helm Lobby"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Gone for vines, enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Tiny,
          tag: "L",
          text: "Kickslide up hill"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Switch, cross vines"
        },
        {
          color: Color.Chunky,
          text: "Terminal Clips 1 & 2"
        },
        {
          color: Color.Chunky,
          text: "Key 8, reset"
        }
      ]
    },
    {
      name: "Isles to K. Rool",
      steps: [
        {
          color: Color.DK,
          text: "Turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "Reset on K. Rool ship CS"
        },
        {
          color: Color.DK,
          text: "W3, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
