import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { vcISGNLE, krool } from "../../commonSections";

export const nleIntermediate: Route = mapItemsToRoute({
  name: "NLE Intermediate",
  doc: "https://docs.google.com/document/d/1FcKiAVEQmdBdrY-bf6sr0WSjzSg5KKoCVlpqhgJff7E",
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
          text: "Shoot right switch, kick down"
        },
        {
          color: Color.DK,
          text: "Shoot middle switch, tag W1"
        },
        {
          color: Color.DK,
          text: "Note: Overlap Diddy/Switch CS"
        },
        {
          color: Color.DK,
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Jump in bounds behind gate for BP"
        },
        {
          color: Color.DK,
          text: "Tag W3, overlap Blast/3rd switch CS"
        },
        {
          color: Color.DK,
          text: "Blast GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W2 to Diddy GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Grab ammo, head to Snide"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Enter mountain, switch, mountain top GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "BP, pswim to cave GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 1, walk to exit level"
        }
      ]
    },
    {
      name: "Japes 1 to Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "W1, turn in Key 1, W1"
        },
        {
          color: Color.DK,
          text: "Tag W2/W3, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "BP, 3 crystals, go to main area"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Guitar to open tunnel door"
        },
        {
          color: Color.Diddy,
          text: "BP, enter Tiny Temple"
        },
        {
          color: Color.Diddy,
          text: "Ledge clip, straight ahead to Tiny GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "OKONG to free Tiny, pswim to leave"
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
          text: "Banana push to bonus GB, W5",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Roll clip into 5DT for GB",
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
          text: "Free Lanky for GB, climb to tag W1",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          skew: true,
          text: "Matching game GB",
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
          text: "W1, W2, lava GB, void out on back wall",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level"
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
          text: "Monkeyport to Saxophone GB",
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
          text: "Robot push OOB to Tiny cage"
        },
        {
          color: Color.Lanky,
          text: "Continue to pipe GB, drop to tag",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tag W4, drop to BP, slam prod switch"
        },
        {
          color: Color.Diddy,
          text: "Go to storage to tag"
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
          text: "Cage GB, clip to testing room",
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
          text: "BP, back to tag"
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
          text: "Dark room GB, slam prod switch",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W4 to crusher GB, climb to tag",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Cross cylinders, Spring GB, back to tag",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Cross cylinders, BP"
        },
        {
          color: Color.DK,
          text: "Drop to crusher room, clip to GB, clip to void",
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
          text: "BP, W4 to tag"
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
          text: "W1 to tag"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Gun skew in river"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Twirl to cage GB, W3",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "BP, stump GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          skew: true,
          text: "Through right log to cage GB",
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
          text: "Clip through wall for GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Through tunnel to BP, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pswim to underground"
        },
        {
          color: Color.Chunky,
          text: "BP, underground GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon out, rock GB",
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
          text: "W4, drop to cage GB, Galleon Lobby",
          gbs: "x1"
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
          text: "Shoot switches, chest GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon to tag W3, Key 4"
        },
        {
          color: Color.Chunky,
          text: "Backflip OOB above T&S"
        },
        {
          color: Color.Chunky,
          text: "OOB left to cactus BP"
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
          text: "Pswim to 2DS GB, pswim to leave",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to treasure room"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Ledge kick from chest to BP"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Void on back wall, BP, pswim to lighthouse"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB at bottom, tag at mermaid",
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
          text: "Turn in BPs x4, W3, BP, void over T&S",
          gbs: "x4"
        },
        {
          color: Color.Tiny,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Galleon to Forest",
      steps: [
        {
          color: Color.Tiny,
          text: "Pswim to pipe GB, exit Lobby",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "STS to BFI cage GB, W5",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Cage GB behind K. Lumsy",
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
          text: "Rock GB, Forest Lobby",
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
          text: "Tag W4, pink tunnel, tag behind mushroom"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket to mushroom top, 5 Homing Ammo"
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
          text: "Drop to BP, jump to Blast platform"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Climb ladder, inside for BP, back out"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, drop to water, pswim to owl area"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP, W4, blue tunnel, turn in BPs x5",
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
          tag: "R",
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
          text: "Thorn skew behind barn"
        },
        {
          color: Color.DK,
          tag: "L",
          skew: true,
          text: "BP, left wall to void"
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
          text: "Fall down waterfall to W3"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W1, turn in Key 5, W1, W2"
        },
        {
          color: Color.Chunky,
          text: "Move rock, Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Enter Caves Lobby, Punch left wall"
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
          text: "Tag W1, gun skew in river"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Cross river, past Funky"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Through Tiny tunnel, BP, tag W4, back out"
        },
        {
          color: Color.Diddy,
          text: "Rocket to tag W5, rocket to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fly to T&S over DK cabin"
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
          text: "BP, twirl to 5DC GB",
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
          text: "W5 to BP, tag at ice castle"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, kick down right to tag"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "W4 to Monkeyport GB, W4 back",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, W1, pswim to Gone GB",
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
          text: "Jump left, Punch other wall"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Damage boost to lava GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Leave Lobby, W1 to Castle Lobby"
        },
        {
          color: Color.DK,
          text: "Open Kasplat gate"
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
          text: "Climb past warps to tunnel by water"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BP, back to tag"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Leave tunnel, clip into tree for BP"
        },
        {
          color: Color.DK,
          text: "Roll clip to GB, back to warps",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Ledge kick to T&S by upper W2, Key 7"
        },
        {
          color: Color.Lanky,
          text: "Clockwise to BP, drop to crypt"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, back to tag"
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
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.Tiny,
          text: "Turn in Keys 7 & 6"
        },
        {
          color: Color.Tiny,
          text: "Monkeyport to Helm Lobby"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Damage boost to BP, deathwarp, exit Lobby"
        },
        {
          color: Color.DK,
          text: "Kick down to warps, W2 to enter Aztec"
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
          text: "Hunky Chunky, clip on wall light by bonus cage"
        },
        {
          color: Color.Chunky,
          text: "Clip in back to enter 5DT"
        },
        {
          color: Color.Chunky,
          text: "BP, leave 5DT, go to Snide"
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
          text: "W2, Monkeyport to Helm Lobby"
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
          text: "Kickslide up hills"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot switch, cross vines"
        },
        {
          color: Color.Chunky,
          text: "Terminal clips 1 & 2"
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
          text: "W1, turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "Reset on cutscene (ship)"
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
