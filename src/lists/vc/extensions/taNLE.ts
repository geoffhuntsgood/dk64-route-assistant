import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const taNLE: Route = mapItemsToRoute({
  name: "Tag Anywhere NLE",
  doc: "https://www.speedrun.com/dk64ce/runs/y222849y",
  docIsVid: true,
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Speed Mode on"
        },
        {
          color: Color.Header,
          text: "NOTE: Move w/DK, swim w/Diddy"
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
          text: "Tag W4/W1, visit K. Lumsy"
        },
        {
          color: Color.DK,
          text: "W1 to Japes Lobby, enter Japes",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Japes",
      steps: [
        {
          color: Color.DK,
          text: "Bush push, pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "To underground (kick jump to skip vines)"
        },
        {
          color: Color.Chunky,
          text: "BP, GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Deathwarp, rock GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim/tag to skew"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Backflip in bounds, tunnel cave GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Through T&S wall back to main"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Kickslide/jump/twirl to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Through wall to hive tunnel, BP"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "BP, stump GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Through wall to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Both Diddy GBs",
          gbs: "x2"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Fall to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Enter painting room"
        },
        {
          color: Color.Chunky,
          text: "Skid jump/jump aerial clip"
        },
        {
          color: Color.Lanky,
          text: "Painting room GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "BP"
        },
        {
          color: Color.Lanky,
          text: "BP, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Vines for T&S, Key 1"
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
          color: Color.Chunky,
          text: "Move Lobby rock"
        },
        {
          color: Color.Lanky,
          text: "Trombone GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W1, turn in Key 1, tag W2"
        },
        {
          color: Color.Tiny,
          text: "Backflip midair tag to climb"
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
          text: "Pwalk to BP"
        },
        {
          color: Color.DK,
          text: "Enter T&S, Key 2, tag W1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to BP, enter Tiny Temple"
        },
        {
          color: Color.Tiny,
          text: "Torch clip, snag Klaptrap GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Tiny GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pswim to Klaptrap GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter, W1"
        },
        {
          color: Color.DK,
          text: "Pwalk to tunnel"
        },
        {
          color: Color.Tiny,
          text: "BP, tunnel skip"
        },
        {
          color: Color.DK,
          text: "Roll clip into Llama Temple"
        },
        {
          color: Color.DK,
          text: "Pswim/tag to skew"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Lanky GB, backflip in bounds",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Climb to matching game GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Through wall to BP"
        },
        {
          color: Color.Tiny,
          text: "Lava GB, Exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Aztec to Factory",
      steps: [
        {
          color: Color.DK,
          text: "W2/W1, turn in Key 2"
        },
        {
          color: Color.Lanky,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxophone GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fall to Factory Lobby"
        },
        {
          color: Color.Chunky,
          text: "Punch box"
        },
        {
          color: Color.Tiny,
          text: "BP"
        },
        {
          color: Color.Diddy,
          text: "Backflip/tag midair to upper platform"
        },
        {
          color: Color.DK,
          text: "Bongos GB, enter Factory",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.DK,
          text: "Robot push/pwalk to Tiny cage"
        },
        {
          color: Color.Lanky,
          text: "Pipe GB, drop to tag W4",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop to BP, slam prod switch"
        },
        {
          color: Color.Lanky,
          text: "Chunky GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Key 3, BP, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pwalk to testing, BP"
        },
        {
          color: Color.Tiny,
          text: "Pwalk to Wheel GB, pwalk out",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Orangstand TBS for piano GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP"
        },
        {
          color: Color.DK,
          text: "Fall to power shed GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tag midair for dark room GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Slam prod switch, W4 to GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Spring GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "BP, drop to crusher GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Factory to Galleon",
      steps: [
        {
          color: Color.DK,
          text: "Drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Galleon Lobby BP, enter Galleon"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Pwalk for cannon game snag GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP, pswim to lighthouse"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "BP"
        },
        {
          color: Color.Chunky,
          text: "Jump to Snide"
        },
        {
          color: Color.Diddy,
          text: "Turn in BPs x4",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Pwalk left of Snide to tunnel"
        },
        {
          color: Color.Chunky,
          text: "Chest GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "BP, enter T&S, Key 4"
        },
        {
          color: Color.Tiny,
          text: "Backflip OOB, left to shipyard"
        },
        {
          color: Color.Chunky,
          text: "BP"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 2DS GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to bonus GB, exit level",
          gbs: "x1"
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
          text: "BFI cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Slam X, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB, tag W3, W3/W1, turn in Key 4",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pwalk to Sprint GB, void out",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W3, enter Forest"
        }
      ]
    },
    {
      name: "Forest",
      steps: [
        {
          color: Color.DK,
          text: "Pink tunnel"
        },
        {
          color: Color.Tiny,
          text: "Bounce/twirl to BP, drop to river"
        },
        {
          color: Color.Diddy,
          text: "Tag skew"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Rocket to dark room door"
        },
        {
          color: Color.Lanky,
          text: "Dark room GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Drop to BP"
        },
        {
          color: Color.Tiny,
          text: "Twirl right to enter mushroom"
        },
        {
          color: Color.Diddy,
          text: "BP, drop, exit mushroom"
        },
        {
          color: Color.Diddy,
          text: "Tag skew"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "To Owl area, BP"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Enter stump"
        },
        {
          color: Color.Tiny,
          text: "Stump GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Blue tunnel to Snide"
        },
        {
          color: Color.Tiny,
          text: "Turn in BP x6",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter T&S, DDQ Key 5"
        },
        {
          color: Color.DK,
          text: "Mill clip for GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim to thorn skew"
        },
        {
          color: Color.DK,
          text: "BP, exit level"
        }
      ]
    },
    {
      name: "Forest to Caves",
      steps: [
        {
          color: Color.Diddy,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W3/W1, turn in Key 5"
        },
        {
          color: Color.Chunky,
          text: "W2, move rock, Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Caves Lobby, punch lava wall"
        },
        {
          color: Color.DK,
          text: "Damage boost to lava GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch other wall"
        },
        {
          color: Color.Lanky,
          text: "BP"
        },
        {
          color: Color.Diddy,
          text: "Rocket to Guitar GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter Caves"
        }
      ]
    },
    {
      name: "Caves",
      steps: [
        {
          color: Color.Diddy,
          text: "Tag W2"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Gone GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Twirl across river"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "BP, tag W4"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Rocket to Lanky BP"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Collect BP"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Rocket to Tiny BP"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Collect BP"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "W2, cross river again"
        },
        {
          color: Color.DK,
          skew: true,
          text: "BP"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Enter Snide cave, through left wall"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Long jump to ice shield GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BP"
        },
        {
          color: Color.Tiny,
          text: "Ice shield clip for GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pwalk out, pswim to DK 5DI"
        },
        {
          color: Color.Tiny,
          text: "Twirl into ice maze"
        },
        {
          color: Color.DK,
          text: "Ice maze GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Pswim to Lanky 5DI"
        },
        {
          color: Color.Lanky,
          text: "5DI GB, pwalk out",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim right of Chunky ice shield"
        },
        {
          color: Color.Lanky,
          text: "Continue to Snide T&S, Key 6"
        },
        {
          color: Color.Lanky,
          text: "Turn in BPs x7",
          gbs: "x7"
        },
        {
          color: Color.Chunky,
          text: "Turn in BPs x6, exit level",
          gbs: "x6"
        }
      ]
    },
    {
      name: "Caves to Castle",
      steps: [
        {
          color: Color.DK,
          text: "W1, Castle Lobby"
        },
        {
          color: Color.DK,
          text: "Open BP gate"
        },
        {
          color: Color.Diddy,
          text: "BP"
        },
        {
          color: Color.DK,
          text: "Enter Castle"
        }
      ]
    },
    {
      name: "Castle",
      steps: [
        {
          color: Color.DK,
          text: "Pwalk in tree, BP, GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim/air swim to crypt"
        },
        {
          color: Color.Diddy,
          text: "BP"
        },
        {
          color: Color.Tiny,
          text: "BP, climb to Rocketbarrel"
        },
        {
          color: Color.Diddy,
          text: "Rocket to Snide"
        },
        {
          color: Color.Tiny,
          text: "Turn in BPs x2",
          gbs: "x2"
        },
        {
          color: Color.Diddy,
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.DK,
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
          text: "Walk up, kick down to W4, enter T&S"
        },
        {
          color: Color.Lanky,
          text: "Key 7"
        },
        {
          color: Color.Chunky,
          text: "Shed GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Clip in trash can"
        },
        {
          color: Color.Tiny,
          text: "Trash GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Tag midair to skip greenhouse GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Castle to Helm",
      steps: [
        {
          color: Color.Lanky,
          text: "Deathwarp, exit Lobby"
        },
        {
          color: Color.DK,
          text: "Turn in Keys 7, 3, 6"
        },
        {
          color: Color.Tiny,
          text: "Port to enter Helm lobby"
        },
        {
          color: Color.Chunky,
          text: "Gone for vines, enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Lanky,
          text: "Orangstand up hills"
        },
        {
          color: Color.DK,
          text: "Pwalks/switch kick OOB"
        },
        {
          color: Color.DK,
          text: "Continue OOB to Key 8"
        },
        {
          color: Color.Header,
          text: "Pause quit, re-enter file"
        }
      ]
    },
    {
      name: "Helm to K. Rool",
      steps: [
        {
          color: Color.DK,
          text: "W1, turn in Key 8, reset"
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
