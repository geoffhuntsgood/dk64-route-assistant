import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool, n64ISGNLE } from "../../commonSections";

export const nle801: Route = mapItemsToRoute({
  name: "NLE 801 IQ Route",
  doc: "https://docs.google.com/document/d/1oM3ozUh-Sa1GGbNys7cPWLYdeFvhlK9GE9hbs7UT_-E",
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Prereqs: 10 fairies, 2nd controller"
        }
      ]
    },
    n64ISGNLE,
    {
      name: "Isles to Japes 1",
      steps: [
        {
          color: Color.DK,
          text: "Dive barrel, orange barrel"
        },
        {
          color: Color.DK,
          text: "Wet escape, tag W4/W1"
        },
        {
          color: Color.DK,
          text: "Visit K. Lumsy, tag far W1"
        },
        {
          color: Color.DK,
          text: "Japes entry GB, enter Japes",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Japes 1",
      steps: [
        {
          color: Color.DK,
          text: "Bush push, cannon to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W2, right switch"
        },
        {
          color: Color.DK,
          text: "Middle switch/Diddy CS overlap"
        },
        {
          color: Color.DK,
          text: "Tag W1, pswim to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "OOB to BP, tag W3",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Left switch/Blast CS overlap"
        },
        {
          color: Color.DK,
          text: "Blast course GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W2 to Free Diddy GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop to T&S"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Key 1",
          keys: "x"
        },
        {
          color: Color.Diddy,
          text: "Drop to BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Pswim to tunnel GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pwalk torch void, exit level"
        }
      ]
    },
    {
      name: "Japes 1 to Aztec",
      steps: [
        {
          color: Color.DK,
          tag: "L",
          text: "Leave Lobby, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1, tag W2/W3"
        },
        {
          color: Color.DK,
          text: "STS to BFI for camera"
        },
        {
          color: Color.DK,
          text: "Climb to/enter Aztec"
        }
      ]
    },
    {
      name: "Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Pwalk to BP, pwalk to skip CS",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket to BP, enter Tiny Temple",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Clip to GB, OKONG, pswim to leave",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Enter Tiny Temple, spawn snag GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Leave, pwalk to BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Twirl face clip, to 5DT"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Pwalk/charge clip to 5DT"
        },
        {
          color: Color.Diddy,
          text: "R, L, GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Enter T&S in back"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 2, pwalk in 5DT",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "L, R, GB, leave",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Moonkick/roll clip in Llama Temple"
        },
        {
          color: Color.DK,
          text: "Tag W2, gun dive to skew"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Free Lanky GB, climb to tag",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          tag: "R",
          text: "Tag W1, matching game GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Corner to BP, W2/W1",
          bps: "x"
        },
        {
          color: Color.Tiny,
          skew: true,
          tag: "R",
          text: "To lava room for GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Back wall to void, exit level"
        }
      ]
    },
    {
      name: "Aztec to Factory",
      steps: [
        {
          color: Color.Tiny,
          text: "Leave Lobby, W2/W1"
        },
        {
          color: Color.Tiny,
          text: "Turn in Key 2"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxophone GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Drop to Factory Lobby"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Ledge kick to Bongo GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Enter Factory"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.Lanky,
          text: "Hatch skip, open Tiny cage OOB"
        },
        {
          color: Color.Lanky,
          text: "Pipe GB, drop to tag",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tag W4, drop to BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Slam prod switch, go to storage"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Free Chunky GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Key 3, headphones",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "BP, to arcade",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Cage GB, pwalk to testing",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pwalk to dartboard, GB, pwalk out",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, to R&D",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Spawn snag Piano game GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag from TBS, F key push"
        },
        {
          color: Color.DK,
          text: "Power shed GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Dark room GB, slam prod switch",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W4 to crusher GB",
          gbs: "x1"
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
          text: "BP, drop to crusher room",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "GB, pwalk to void, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Factory to Japes 2",
      steps: [
        {
          color: Color.Chunky,
          tag: "L",
          text: "Punch box, shoot Kasplat"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP, leave Lobby, W4",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Japes Lobby, enter Japes"
        }
      ]
    },
    {
      name: "Japes 2",
      steps: [
        {
          color: Color.Tiny,
          text: "W1, gun skew"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Twirl to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "W3, BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Stump GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          skew: true,
          tag: "L",
          text: "Through log to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          tag: "L",
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          tag: "L",
          text: "Cage GB, enter painting room",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Wall clip to GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Tunnel to BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB, pwalk to main tag",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pswim underground, pwalk to BP",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Jump to GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB, W1, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Japes 2 to Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Move Lobby rock"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Trombone GB, leave Lobby, tag W5",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "W4, drop to cage GB, enter Galleon",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.DK,
          text: "Tag at crossroads"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Chest GB, vines to T&S",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Key 4",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "BP, back to crossroads",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Pwalk to lighthouse, Enguarde GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, raise water",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Pswim to BP, pswim to shipyard",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 2DS GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Pswim to 5DS GB, tag at cactus",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, pswim on back wall to void",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Pwalk to cannon game spawn snag GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Void, exit level"
        }
      ]
    },
    {
      name: "Galleon to Forest",
      steps: [
        {
          color: Color.Chunky,
          text: "Lobby BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Pswim to pipe GB, pswim to void",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Leave Lobby, STS to BFI cage GB, W5",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Pswim to cage GB, enter K. Lumsy",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Turn in Key 4, pwalk to Sprint GB, void",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W5, Hunky, slam X, STS to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pswim to rock GB from below",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon to Forest Lobby"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Enter Forest"
        }
      ]
    },
    {
      name: "Forest",
      steps: [
        {
          color: Color.Tiny,
          text: "Pink tunnel, bounce/Twirl to BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to mushroom top to tag"
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
          text: "BP, jump to Blast platform to tag",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Climb to enter mushroom, BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Drop to leave, gun skew"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Inbounds in owl tunnel"
        },
        {
          color: Color.Lanky,
          skew: true,
          tag: "R",
          text: "BP"
        },
        {
          color: Color.Tiny,
          skew: true,
          tag: "R",
          text: "Enter anthill"
        },
        {
          color: Color.Tiny,
          text: "Saxophone, GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Blue tunnel to Snide, turn in BPs x6",
          gbs: "x6"
        },
        {
          color: Color.Tiny,
          text: "Enter T&S"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "DDQ Key 5",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Enter mill, clip to GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Leave mill, pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Thorn skew"
        },
        {
          color: Color.DK,
          skew: true,
          tag: "L",
          text: "BP, void left wall, exit level",
          bps: "x"
        }
      ]
    },
    {
      name: "Forest to Caves",
      steps: [
        {
          color: Color.Diddy,
          tag: "R",
          text: "Leave Lobby, jump to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop to W3"
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
          text: "Punch Lanky wall"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP",
          bps: "x"
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
          text: "Climb to BP, Rocket to tag W5",
          bps: "x"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Rocket to back tag"
        },
        {
          color: Color.DK,
          skew: true,
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
          text: "W5 to BP, drop to tag",
          bps: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Gun skew"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Gone GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Snide left wall to ice shield GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "5DI GB (back right)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Ice shield clip to GB, pwalk out",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "5DI GB, pwalk out",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to Snide, turn in BPs x7",
          gbs: "x7"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Turn in BPs x6, enter T&S",
          gbs: "x6"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Key 6",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Ledge kick to BP, exit level",
          bps: "x"
        }
      ]
    },
    {
      name: "Caves to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Pfall to lava GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Leave Lobby, W1 to Castle Lobby"
        },
        {
          color: Color.DK,
          text: "Shoot Kasplat gate"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, deathwarp",
          bps: "x"
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
          text: "Clip in tree, BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Roll clip to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Pswim to crypt"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, leave crypt, Rocket to Snide",
          bps: "x"
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
          text: "Enter W4 T&S"
        },
        {
          color: Color.Tiny,
          text: "Key 7 as Tiny",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "Trash can GB, pwalk to void, exit level",
          gbs: "x1"
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
          text: "Turn in Keys 6 & 7"
        },
        {
          color: Color.Tiny,
          text: "Port to Helm Lobby"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Gone, vines, enter Helm"
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
          color: Color.DK,
          tag: "R",
          text: "DK Helm, safety tag W1"
        },
        {
          color: Color.DK,
          text: "Terminal clip 2 to Key 8",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Pwalk Helm Escape"
        }
      ]
    },
    {
      name: "Helm to K. Rool",
      steps: [
        {
          color: Color.DK,
          text: "Deathwarp"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Leave Lobby, turn in Keys 8 & 3"
        },
        {
          color: Color.Lanky,
          text: "Takeoff skip"
        },
        {
          color: Color.Lanky,
          text: "W1/W3, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
