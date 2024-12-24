import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";

export const moveless: Route = mapItemsToRoute({
  name: "100 GBs Moveless",
  doc: "https://www.speedrun.com/dk64ce/runs/ydl40evz",
  docIsVid: true,
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip on, delete file 1"
        },
        {
          color: Color.Header,
          text: "Enable infinite oranges in Mystery Menu"
        },
        {
          color: Color.Header,
          text: "NOTE: This route was compiled by me from Zorulda and Ballaam's leaderboard entries. It is subject to change."
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
          text: "Dive barrel normally"
        },
        {
          color: Color.DK,
          text: "Orange barrel: throw oranges at tree"
        },
        {
          color: Color.DK,
          text: "Barrel barrel: throw oranges at tree"
        },
        {
          color: Color.DK,
          text: "Vine barrel: throw orange at back wall"
        },
        {
          color: Color.DK,
          text: "Pswim to leave"
        },
        {
          color: Color.DK,
          text: "Climb to Aztec, tag W2"
        },
        {
          color: Color.DK,
          text: "Aztec Early, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "Pwalk to BP, pwalk to skip CS",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Tag W1, enter T&S"
        },
        {
          color: Color.DK,
          text: "DDQ Key 5, reset on 2nd 'Donk'"
        }
      ]
    },
    {
      name: "Isles to Castle",
      steps: [
        {
          color: Color.Header,
          text: "Oranges and Story Skip, enter file"
        },
        {
          color: Color.DK,
          text: "Tag W4, W5, W1"
        },
        {
          color: Color.DK,
          text: "To K. Lumsy, turn in Key 5"
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
          text: "Pwalk in tree, roll clip to BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          text: "Pwalk in tree again, roll clip to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Climb/moonkick to W2"
        },
        {
          color: Color.DK,
          text: "Tag W4, pwalk in library door"
        },
        {
          color: Color.DK,
          text: "Library GB, pwalk out on left wall",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop to W4 T&S, enter KKO"
        },
        {
          color: Color.Diddy,
          text: "Exit/tag to free Diddy, re-enter"
        },
        {
          color: Color.Chunky,
          text: "Exit/tag to free Chunky, re-enter"
        },
        {
          color: Color.Tiny,
          text: "Exit/tag to free Tiny, re-enter"
        },
        {
          color: Color.Lanky,
          text: "Exit with Lanky"
        },
        {
          color: Color.Lanky,
          text: "Pwalk or ledge clip for greenhouse GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Fall to BP, fall to lower crypt",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Pwalk right of crypt, pwalk to goo"
        },
        {
          color: Color.Lanky,
          text: "Damage boost to GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Leave crypt, BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Climb to moat, swim to tunnel"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Tag at Candy, exit level"
        }
      ]
    },
    {
      name: "Castle to Factory",
      steps: [
        {
          color: Color.Diddy,
          text: "Pwalk to BP, deathwarp",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Exit Lobby, pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Enter K. Lumsy, pwalk to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Void to main"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "TBS, telegrabs to Helm Lobby"
        },
        {
          color: Color.DK,
          text: "Damage boost to BP, deathwarp",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Leave, drop to Factory Lobby"
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
          text: "Pwalk/robot push to open Tiny cage"
        },
        {
          color: Color.Lanky,
          text: "OOB to pipe GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Jump down pipe, across to tag"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, kick to W4 to tag",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Drop to BP, to storage",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Free Chunky GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pwalk behind W1, dark room GB, pwalk back",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP",
          bps: "x1"
        },
        {
          color: Color.Tiny,
          text: "Cage GB, tag in T&S",
          gbs: "1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Skid jump aerial into Tiny cage"
        },
        {
          color: Color.Chunky,
          text: "Pwalk on right wall, navigate to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pwalk grate, pwalk testing, BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Jump to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "To R&D, BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Drop to storage to tag"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Pwalk left of conveyor to crusher room"
        },
        {
          color: Color.DK,
          text: "Crusher room GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Factory to Galleon",
      steps: [
        {
          color: Color.DK,
          text: "Exit Lobby, drop to Snide"
        },
        {
          color: Color.DK,
          text: "Moonkick to bonus"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Collect bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Drop to Galleon Lobby, BP (14)"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter Galleon"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          tag: "L",
          text: "Tag in tunnel, exit/enter"
        },
        {
          color: Color.Chunky,
          text: "Cannon game spawn snag GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pswim to lighthouse, tag underwater"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Enguarde GB",
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
          text: "Exit/enter"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Cannon to BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Pwalk behind BC to shipyard"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Cactus BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Clip into sub for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter"
        },
        {
          color: Color.Tiny,
          text: "Pswim to shipyard, tag W2"
        },
        {
          color: Color.Tiny,
          text: "Pswim to 2DS for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to treasure room"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Skid jump/backflip to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Ledge kick to BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "W2 noclip to 5DS bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit/enter"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Tag in tunnel, BP (19)"
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
          color: Color.Chunky,
          tag: "R",
          text: "Pswim to 5DS bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Pswim in Chunky's room to 5DS bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Pswim to seal race skip GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Galleon to Japes",
      steps: [
        {
          color: Color.Tiny,
          text: "Pswim to pipe GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to void, pswim to leave lobby"
        },
        {
          color: Color.Tiny,
          text: "STS to BFI cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W5 to tag"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Japes entrance GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter Japes"
        }
      ]
    },
    {
      name: "Japes",
      steps: [
        {
          color: Color.DK,
          text: "Bush push to main area"
        },
        {
          color: Color.DK,
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "OOB to BP (20)"
        },
        {
          color: Color.DK,
          text: "Tag W3, climb to both Diddy GBs",
          gbs: "x2"
        },
        {
          color: Color.DK,
          text: "Drop right, tag in T&S"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Drop to BP (21)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "BP (22), slope cancels to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to tunnel bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Pswim to tunnel GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Pswim underground, pwalk to BP (23)"
        },
        {
          color: Color.Chunky,
          text: "Skid jump backflip or pwalk to GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Deathwarp, rock GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Pswim to tunnel bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Back to main, beaver skew"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "W3 to BP (24), stump GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          skew: true,
          text: "Through wall to cage GB",
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
          text: "Drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "W3, tunnel again to hive"
        },
        {
          color: Color.Tiny,
          text: "Torch clip to hive GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tag in T&S, tunnel GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Japes to Forest",
      steps: [
        {
          color: Color.DK,
          tag: "L",
          text: "Tag in Lobby, moonkicks to Forest (or turn in Key 4)"
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
          text: "Blue tunnel to mill"
        },
        {
          color: Color.DK,
          text: "Wall clip to mill GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Thorn skew"
        },
        {
          color: Color.DK,
          tag: "L",
          skew: true,
          text: "BP (25), through left wall by ammo"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Under pink tunnel, to Owl/Rabbit area"
        },
        {
          color: Color.Lanky,
          tag: "R",
          skew: true,
          text: "BP (26)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "Through right wall to enter stump"
        },
        {
          color: Color.Tiny,
          text: "Stump GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pink tunnel, climb to BP (27)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tag at Blast pad, climb to BP (28)"
        },
        {
          color: Color.Diddy,
          text: "Climb to mushroom top"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Clockwise to tag, drop to BP (29)"
        },
        {
          color: Color.Chunky,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Forest to Caves",
      steps: [
        {
          color: Color.Lanky,
          tag: "L",
          text: "Leave Lobby, drop to Caves Lobby"
        },
        {
          color: Color.Lanky,
          text: "Pwalk right of door to BP (30)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Pwalk left of door, kick jump to GB",
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
          color: Color.DK,
          text: "Climb to BP (31), kick left to igloo"
        },
        {
          color: Color.DK,
          text: "Pswim to 5DI GB (front)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Pswim to 5DI GB (front right)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Pswim to 5DI GB (front left)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pswim to 5DI GB (back left)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BP (32), clip to ice shield GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Ledge kick right of Funky to tag W5"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP (33), pwalk to 5DC GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "W5 to BP (34), W5 back"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Pwalk to lower 5DC GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "W5, pwalk to BP (35)"
        },
        {
          color: Color.Diddy,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Caves to Aztec 2",
      steps: [
        {
          color: Color.Chunky,
          tag: "L",
          text: "Leave Lobby, drop to water"
        },
        {
          color: Color.Chunky,
          text: "STS to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pwalk or deathwarp to escape"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Aztec Early, enter Aztec"
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
          color: Color.Diddy,
          text: "Pwalk in Tiny Temple"
        },
        {
          color: Color.Diddy,
          text: "Clip to free Tiny GB, pswim out",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Pwalk in Tiny Temple"
        },
        {
          color: Color.Tiny,
          text: "Spawn snag Klaptrap GB, backflip out",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Guitar skip/pwalk to BP (36)"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Roll clip/pwalk in Llama Temple"
        },
        {
          color: Color.DK,
          text: "Tag W1/W2, pwalk left of W1"
        },
        {
          color: Color.DK,
          text: "Drop to get free Lanky GB OOB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Backflip in bounds, tag high W1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Pwalk left of pipe to BP (37), W2/W1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "W1/W2, lava GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Pwalk in 5DT, pwalk left pillar for GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Pwalk in 5DT, pwalk in left pillar, OOB to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Banana push to bonus GB, pwalk right wall to leave",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Snide's",
      steps: [
        {
          color: Color.DK,
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Turn in BPs x7",
          gbs: "x7"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Turn in BPs x7",
          gbs: "x7"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Turn in BPs x7",
          gbs: "x7"
        },
        {
          color: Color.Header,
          text: "GG!"
        }
      ]
    }
  ]
});
