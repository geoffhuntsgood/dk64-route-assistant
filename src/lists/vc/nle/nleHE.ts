import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { vcISGNLE, krool } from "../../commonSections";

export const nleHE: Route = mapItemsToRoute({
  name: "NLE Helm Escape",
  doc: "https://docs.google.com/document/d/102A9Ii0M4ZnCHg_obKMCrL6UUvsG7_yP0MJAo7JCJnQ",
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
        },
        {
          color: Color.Header,
          text: "NOTE: This route uses phasewalks."
        }
      ]
    },
    vcISGNLE,
    {
      name: "Treehouse to Japes 1",
      steps: [
        {
          color: Color.DK,
          text: "Orange barrel, wet escape"
        },
        {
          color: Color.DK,
          text: "Tag W4/W1, K. Lumsy"
        },
        {
          color: Color.DK,
          text: "W1, entrance GB to Japes",
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
          text: "Note: Blast to cancel CS, GB",
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
          text: "Key 1, torch clip to void"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Japes 1 to Aztec",
      steps: [
        {
          color: Color.DK,
          text: "W1, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1, tag W2/W3, BFI camera"
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
          text: "BP, 3 crystals"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, enter Tiny Temple"
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
          text: "Torch clip to Klaptrap GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Guitar Skip, BP, tag at Snide"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Gong tower GB, tag at Snide",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Enter T&S by W5, Key 2"
        },
        {
          color: Color.DK,
          text: "Tag W5, bonus GB, W5",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Moonkick/roll clip in Llama Temple"
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
          text: "W1, W2, lava GB, void out",
          gbs: "x1"
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
          text: "Port, Saxophone GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Factory Lobby to tag"
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
          text: "Robot push to Tiny's cage"
        },
        {
          color: Color.Lanky,
          text: "OOB to pipe GB, drop to tag",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tag W4, drop to BP"
        },
        {
          color: Color.Diddy,
          text: "Slam switch, storage to tag"
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
          text: "HEADPHONES, BP"
        },
        {
          color: Color.Tiny,
          text: "Cage GB, tag in T&S",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pfall/pwalk to testing, BP"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP, Ostand TBS for piano GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Exit TBS as DK, push OOB"
        },
        {
          color: Color.DK,
          text: "Drop to shed, lever GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Dark room GB, prod switch",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W4 to crusher GB, tag near T&S",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Spring GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Enter T&S, Key 3"
        },
        {
          color: Color.DK,
          tag: "R",
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
          text: "BP, leave Lobby, W4"
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
          text: "W1 to tag, gun skew"
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
          text: "Cage GB, enter painting room",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Clip for GB",
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
          text: "Pswim underground, BP, GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Deathwarp, rock GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "W1, exit level"
        }
      ]
    },
    {
      name: "Japes 2 to Galleon",
      steps: [
        {
          color: Color.DK,
          text: "W4, cage GB, Galleon Lobby",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, enter Galleon"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Chest GB, tag W3",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon skew, cannon spawn snag",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, raise water"
        },
        {
          color: Color.Diddy,
          text: "Turn in BPs x4, tag by Snide",
          gbs: "x4"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "W3, BP, tag in T&S"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Key 4, OOB to cactus BP"
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
          text: "Pswim for 2DS GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to void, BP"
        },
        {
          color: Color.Lanky,
          text: "Pswim to lighthouse"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB, tag near mermaid",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Pswim to void, exit level"
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
          text: "Pswim to void, exit Lobby"
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
          text: "Sprint GB, turn in Key 4, W1",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W5, slam X, STS to cage GB",
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
          text: "Pink tunnel to mushroom"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Shoot switch"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Shoot switch"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Shoot switch"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot switch"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "CS overlap for cannon GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit to top, clockwise to tag"
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
          text: "Fall to BP, fall to Blast"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Climb into mushroom, BP, back out"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, gun skew"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Pswim to Owl"
        },
        {
          color: Color.Lanky,
          tag: "L",
          skew: true,
          text: "BP"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "Enter stump for GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Deathwarp, blue tunnel to Snide"
        },
        {
          color: Color.Tiny,
          text: "Turn in BPs x6, enter T&S",
          gbs: "x6"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 5, enter mill, clip for GB",
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
          text: "Thorn skew, tag DK behind barn"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, left wall skew to void"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Forest to Caves",
      steps: [
        {
          color: Color.Diddy,
          tag: "R",
          text: "Exit Lobby, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fall to W3"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W1, turn in Key 5, W1, W2"
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
          text: "Rocket to Guitar GB, enter Caves",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Caves",
      steps: [
        {
          color: Color.Diddy,
          text: "Gun skew"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Tag W4, BP, back out"
        },
        {
          color: Color.Diddy,
          text: "Rocket to tag W5, rocket to back"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "DK Cabin GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "5DC GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "5DC GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "W5, BP, tag at ice castle"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, kick down to tag"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Gun skew"
        },
        {
          color: Color.Chunky,
          tag: "L",
          skew: true,
          text: "Gone GB, SNIDE HEADPHONES",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Skew to ice shield GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BP"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "W4, Monkeyport GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W4, pswim to Snide"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Turn in BPs x7",
          gbs: "x7"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Key 6, turn in BPs x6",
          gbs: "x6"
        },
        {
          color: Color.Chunky,
          text: "Pfall/pwalk right of Snide, exit level"
        }
      ]
    },
    {
      name: "Caves to Castle",
      steps: [
        {
          color: Color.DK,
          tag: "R",
          text: "Lava GB, exit Lobby, W1",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Castle Lobby, open BP gate"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, deathwarp"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Enter Castle"
        }
      ]
    },
    {
      name: "Castle",
      steps: [
        {
          color: Color.DK,
          text: "Pswim/pwalk in tree, BP, GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Airswim to crypt"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, exit crypt, rocket to top"
        },
        {
          color: Color.Diddy,
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Turn in BPs x6",
          gbs: "x6"
        },
        {
          color: Color.DK,
          text: "Library clip for GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Down to ballroom tag"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Shed GB, enter T&S, start KKO",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Finish KKO as Tiny, Key 7"
        },
        {
          color: Color.Tiny,
          text: "Trash GB, death jump, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Castle to Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Turn in Keys 7 and 6"
        },
        {
          color: Color.Tiny,
          text: "Port to Helm Lobby"
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
          text: "Shoot switch, vines"
        },
        {
          color: Color.Chunky,
          text: "Terminal clips 1 & 2"
        },
        {
          color: Color.Chunky,
          text: "Key 8, pfall/pwalk to escape"
        }
      ]
    },
    {
      name: "Helm to K. Rool",
      steps: [
        {
          color: Color.Chunky,
          text: "Leave, turn in Keys 8 & 3"
        },
        {
          color: Color.Chunky,
          text: "W3, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
