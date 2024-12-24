import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool, n64ISGNLE } from "../../commonSections";

export const nle40bp: Route = mapItemsToRoute({
  name: "NLE Advanced 40 BP",
  doc: "https://docs.google.com/document/d/1v1mxEoyEM_mStvPhxRWyhETX8QW1FsOiD1fkOHiEMEQ",
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
          text: "Visit K. Lumsy, Japes entry GB",
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
          text: "Bush push, lag kick to cannon"
        },
        {
          color: Color.DK,
          text: "Cannon to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Get ammo, tag W2"
        },
        {
          color: Color.DK,
          text: "Right switch, kick down"
        },
        {
          color: Color.DK,
          text: "Middle switch/Diddy CS overlap, tag W1"
        },
        {
          color: Color.DK,
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Continue OOB to BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Tag W3, Blast to cancel right switch CS"
        },
        {
          color: Color.DK,
          text: "Blast GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W2 to Free Diddy GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Get ammo toward Snide"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Enter mountain, bridge clip"
        },
        {
          color: Color.Diddy,
          text: "Leave, mountain GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop to BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Pswim to tunnel GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 1, torch clip to void",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Japes to Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "Leave Lobby, turn in Key 1, W1"
        },
        {
          color: Color.DK,
          text: "Tag W2/W3, climb to Aztec Lobby"
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
          text: "Get BP, 3 crystals",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Kick through Llama CS, tag W1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Guitar to open back of Aztec"
        },
        {
          color: Color.Diddy,
          text: "Rocket to BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Enter Tiny Temple"
        },
        {
          color: Color.Diddy,
          text: "Ledge clip to Free Tiny GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "OKONG, pswim back to leave temple"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Tunnel BP, tag at 5DT",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Charge clip in 5DT"
        },
        {
          color: Color.Diddy,
          text: "R, L, GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Enter T&S behind 5DT"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 2, roll clip in 5DT",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "L, R, GB, leave",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "To Funky, banana push to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Roll out, to Llama Temple"
        },
        {
          color: Color.DK,
          text: "Moonkick/roll clip to enter temple"
        },
        {
          color: Color.DK,
          text: "Tag W2, gun skew"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Pswim to free Lanky, get GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Backflip out, climb to tag"
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
          text: "Through wall to BP, W2, W1",
          bps: "x"
        },
        {
          color: Color.Tiny,
          skew: true,
          tag: "R",
          text: "W1, W2, lava GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Through back wall to void, exit level"
        }
      ]
    },
    {
      name: "Aztec 1 to Factory",
      steps: [
        {
          color: Color.Tiny,
          text: "W2, W1, turn in Key 2"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxophone GB, drop to Factory Lobby",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Enter Factory"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.Lanky,
          text: "Robot push to pipe GB, drop to tag",
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
          text: "Free Chunky, GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Key 3",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "BP, climb to arcade",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Mini to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Clip through tunnel to testing, tag in back"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, go to R&D",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Drop to power shed GB",
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
          text: "Cross cylinders, Spring GB, back to tag",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Cross cylinders, shoot for BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Drop to crusher room, clip to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Clip again to void, exit level"
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
          text: "BP, leave Lobby, W4",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Enter Japes"
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
          text: "W3, tunnel BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "To hive, stump GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          skew: true,
          tag: "L",
          text: "Through wall to cage GB",
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
          text: "Drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Enter painting room"
        },
        {
          color: Color.Lanky,
          text: "Clip for GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Tunnel to BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB, back to main",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pswim to underground, BP",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB (damage skip)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W1, exit level"
        }
      ]
    },
    {
      name: "Japes 2 to Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Move rock"
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
          text: "W4, drop to cage GB, Galleon Lobby",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BP, enter Galleon",
          bps: "x"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Chest GB, vines to W3",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon skew"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Spawn snag cannon game GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pswim to lighthouse, tag underwater"
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
          color: Color.Tiny,
          tag: "R",
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Tiny,
          text: "W3, BP, enter T&S",
          bps: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Key 4",
          keys: "x"
        },
        {
          color: Color.Header,
          text: "Pufftoss Phases (start CCW):"
        },
        {
          color: Color.Header,
          text: "- Phase 1: 1-3-1"
        },
        {
          color: Color.Header,
          text: "- Phase 2: 5"
        },
        {
          color: Color.Header,
          text: "- Phase 3: 1-2-2"
        },
        {
          color: Color.Header,
          text: "- Phase 4: 1-2-1-1 (end CCW)"
        },
        {
          color: Color.Header,
          text: "- Phase 5: 2-2-1"
        },
        {
          color: Color.Chunky,
          text: "Backflip OOB over T&S"
        },
        {
          color: Color.Chunky,
          text: "Left to shipyard, cactus BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "5DS GB, pswim to treasure room",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Ledge kick to BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Pswim right of chest to void"
        },
        {
          color: Color.Lanky,
          text: "Pswim to BP, pswim to lighthouse",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB, tag at mermaid",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to void, exit level"
        }
      ]
    },
    {
      name: "Galleon to Forest",
      steps: [
        {
          color: Color.Tiny,
          text: "Pswim to pipe GB, pswim to void",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Leave Lobby, STS for cage GB, W5",
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
          text: "W5, Hunky, slam X"
        },
        {
          color: Color.Chunky,
          text: "STS to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB, cannon to Forest Lobby",
          gbs: "x1"
        },
        {
          color: Color.DK,
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
          color: Color.Tiny,
          tag: "L",
          text: "Bounce/Twirl to BP, drop to tag",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to mushroom top, 1 Homing crate"
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
          text: "Drop to BP, jump to Blast to tag",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Climb inside mushroom, BP, drop to leave",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Pswim to giant tree"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "BP, W4, blue tunnel to Snide",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Turn in BPs x5",
          gbs: "x5"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Turn in BPs x5, enter T&S",
          gbs: "x5"
        },
        {
          color: Color.DK,
          text: "Key 5",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.DK,
          text: "Mill clip to GB",
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
          color: Color.Diddy,
          skew: true,
          text: "Tag behind barn"
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
          text: "Drop to W3 to tag"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W1, turn in Key 5, W1, W2"
        },
        {
          color: Color.Chunky,
          text: "Move 2nd rock, Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Caves Lobby, Punch both walls"
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
          text: "Jump across river, climb to BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Tag W4, back to Rocket to tag W5"
        },
        {
          color: Color.Diddy,
          text: "Rocket to DK cabin T&S"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 6",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "DK cabin GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP, Twirl to cabins",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "5DC GB",
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
          text: "W5 to BP, tag at ice castle",
          bps: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, drop to tag W1",
          bps: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
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
          text: "Through Snide left wall"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Long jump to ice shield GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Igloo BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "W4, Port to GB, Port/W4 back",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to void, exit level"
        }
      ]
    },
    {
      name: "Caves to Castle",
      steps: [
        {
          color: Color.DK,
          tag: "R",
          text: "Damage boost to lava GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Leave Lobby, drop to W1, Castle Lobby"
        },
        {
          color: Color.DK,
          text: "Shoot Kasplat gate"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, enter Castle",
          bps: "x"
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
          text: "BP, back to tag",
          bps: "x"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Leave tunnel on same side"
        },
        {
          color: Color.DK,
          text: "Pswim/STS in tree for BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Roll clip to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Back to warps, ledge kick to T&S"
        },
        {
          color: Color.Lanky,
          text: "Key 7",
          keys: "x"
        },
        {
          color: Color.Lanky,
          text: "Clockwise to BP, drop to crypt",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, back to tag",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, deathwarp, exit level",
          bps: "x"
        }
      ]
    },
    {
      name: "Castle to Aztec 2",
      steps: [
        {
          color: Color.Tiny,
          text: "Leave Lobby, turn in Keys 7 & 6"
        },
        {
          color: Color.Tiny,
          text: "Port to Helm Lobby"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Damage boost to BP, deathwarp",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Leave Lobby, kick down to warps"
        },
        {
          color: Color.DK,
          text: "W2, enter Aztec"
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
          text: "Hunky, clip OOB by bonus"
        },
        {
          color: Color.Chunky,
          text: "To 5DT, clip in back"
        },
        {
          color: Color.Chunky,
          text: "BP, leave, to Snide",
          bps: "x"
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
          text: "Lose Beaver Bother, pause exit"
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
          text: "Kickslide up slope"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot switch, terminal clips 1 & 2"
        },
        {
          color: Color.Chunky,
          text: "Key 8, reset",
          keys: "x"
        }
      ]
    },
    {
      name: "Isles to K. Rool",
      steps: [
        {
          color: Color.DK,
          text: "W1, turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "Reset on takeoff CS"
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
