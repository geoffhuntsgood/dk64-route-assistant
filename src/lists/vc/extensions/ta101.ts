import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const ta101: Route = mapItemsToRoute({
  name: "Tag Anywhere 101%",
  doc: "https://www.speedrun.com/dk64ce/runs/meg7q43y",
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
          text: "NOTE: This route is my own and is subject to change."
        }
      ]
    },
    {
      name: "Start!",
      steps: [
        {
          color: Color.Tiny,
          text: "Tag T>C midair to climb toward Aztec"
        },
        {
          color: Color.DK,
          text: "Moonkick to Caves Early"
        },
        {
          color: Color.Chunky,
          text: "Punch left wall"
        },
        {
          color: Color.Lanky,
          text: "BP"
        },
        {
          color: Color.Chunky,
          text: "Punch right wall"
        },
        {
          color: Color.DK,
          text: "Damage boost to lava GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to Guitar GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Enter Caves"
        }
      ]
    },
    {
      name: "Caves",
      steps: [
        {
          color: Color.Lanky,
          text: "Entry singles (5)"
        },
        {
          color: Color.Chunky,
          text: "Tag W2 (5)"
        },
        {
          color: Color.Diddy,
          text: "Tag skew"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Gone room balloon (10)"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Gone GB, leave (13)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Tag W1 (15)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Twirl across river"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Climb to Funky, through Tiny tunnel (5)"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Tag W4 (10), BP"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Balloon (10), Port to GB (15), Port back",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Back through Tiny tunnel"
        },
        {
          color: Color.Diddy,
          text: "Rocket to W5"
        },
        {
          color: Color.Lanky,
          text: "BP (25)"
        },
        {
          color: Color.Diddy,
          text: "Jump back, Rocket to bonus GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to top of Lanky cabin"
        },
        {
          color: Color.DK,
          text: "Enter T&S, Key 6"
        },
        {
          color: Color.Lanky,
          text: "Open cabin (30), waterfall balloon (40)"
        },
        {
          color: Color.Lanky,
          text: "Cabin GB (45)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tag W2 (18)"
        },
        {
          color: Color.DK,
          text: "DK Cabin GB (20), BC",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "BP, balloon (25), Twirl to 5DC"
        },
        {
          color: Color.DK,
          text: "Roll clip to Chunky 5DC"
        },
        {
          color: Color.Chunky,
          text: "5DC bonus GB (38)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Roll clip to DK 5DC"
        },
        {
          color: Color.DK,
          text: "5DC GB (25), leave (30)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Backflip up, 5DC GB (35), balloon (45)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Lower 5DC GB (25)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Backflip up cabins, balloon (35)"
        },
        {
          color: Color.Diddy,
          text: "Upper 5DC GB (50), fairy",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W5, Twirl to ice castle"
        },
        {
          color: Color.Lanky,
          text: "Ice tomato GB, balloon (55)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Beetle race GB (60)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "BP"
        },
        {
          color: Color.Chunky,
          text: "Rock/switch bunches (51)"
        },
        {
          color: Color.Tiny,
          text: "Twirl to Cranky"
        },
        {
          color: Color.DK,
          text: "Pad singles (35), Blast bonus GB (55)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fall/Rocket to W4 (55), balloon (65)"
        },
        {
          color: Color.Tiny,
          text: "5 singles to igloo (50), tag W3 (55)"
        },
        {
          color: Color.DK,
          text: "Tag W1 (60), pswim in 5DI (front)"
        },
        {
          color: Color.DK,
          text: "Door (65), balloon (75), 5DI GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim in 5DI (front right)"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75), 5DI GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim in 5DI (front left)"
        },
        {
          color: Color.Lanky,
          text: "Singles (65), balloon (75), GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pwalk out or exit/enter"
        },
        {
          color: Color.Tiny,
          text: "Pswim in 5DI (back right)"
        },
        {
          color: Color.Tiny,
          text: "5DI GB (60), balloon (70), fairy",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BP, pswim in 5DI (back left)"
        },
        {
          color: Color.Chunky,
          text: "Balloon (61), 5DI GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Clip for ice shield GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pwalk out or exit/enter"
        },
        {
          color: Color.Tiny,
          text: "Swim back, mini to bonus area (75)"
        },
        {
          color: Color.Chunky,
          text: "Balloon (75)"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Caves to Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Leave Lobby, kick right"
        },
        {
          color: Color.Chunky,
          text: "Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Move 2nd rock"
        },
        {
          color: Color.Lanky,
          text: "Trombone for Rocketbarrel"
        },
        {
          color: Color.DK,
          text: "Tag W2, Aztec Early"
        },
        {
          color: Color.Diddy,
          text: "Charge gongs"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Enter Aztec"
        }
      ]
    },
    {
      name: "Aztec",
      steps: [
        {
          color: Color.Chunky,
          text: "Tag W1 (1), vase GB (21)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Through tunnel (25)"
        },
        {
          color: Color.DK,
          text: "BP, sand bunches (10)"
        },
        {
          color: Color.Lanky,
          text: "Tunnel singles (5)"
        },
        {
          color: Color.DK,
          text: "Tag W1, enter T&S"
        },
        {
          color: Color.DK,
          text: "Key 5, then Key 2"
        },
        {
          color: Color.Diddy,
          text: "Rocket to BP, balloon (10)"
        },
        {
          color: Color.Diddy,
          text: "Enter Tiny Temple"
        },
        {
          color: Color.Chunky,
          text: "Bunches (50)"
        },
        {
          color: Color.Tiny,
          text: "Spawn snag Klaptrap GB, swim out (5)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "To Tiny room (17)"
        },
        {
          color: Color.Diddy,
          text: "Free Tiny GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Balloons (25)"
        },
        {
          color: Color.Lanky,
          text: "Back tunnel (9), slam switch (14)"
        },
        {
          color: Color.Chunky,
          text: "Shoot vulture, balloon (60)"
        },
        {
          color: Color.Lanky,
          text: "Vulture GB (19), BC",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pswim to Klaptrap GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          text: "W1, pwalk past tunnel door"
        },
        {
          color: Color.Tiny,
          text: "BP, tunnel to bonus cage (30)"
        },
        {
          color: Color.Chunky,
          text: "Pwalk/clip for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Tunnel (35), tag W2"
        },
        {
          color: Color.Lanky,
          text: "Climb tree to right (24)"
        },
        {
          color: Color.DK,
          text: "Blast, balloon (20), enter Llama Temple (24)"
        },
        {
          color: Color.Lanky,
          text: "Left stairs (27), W1 (32), right stairs (35)"
        },
        {
          color: Color.Lanky,
          text: "Trombone for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Balloon (45)"
        },
        {
          color: Color.DK,
          text: "Pswim, tag skew"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Free Lanky GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Balloons (55)"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Backflip out, climb to W1 (31)"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Matching game GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Down far stairs (35)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Through pipe, fairy picture on far side (50)"
        },
        {
          color: Color.Lanky,
          text: "BP"
        },
        {
          color: Color.Tiny,
          text: "Lava GB, 1 bunch (55)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          text: "W1, 3 trees (50), llama GB (53)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "W2 (22), to Rocket (25)"
        },
        {
          color: Color.Diddy,
          text: "Rocket to sun (30), 5DT switch"
        },
        {
          color: Color.Diddy,
          text: "2 stair singles (32), vulture race (37)"
        },
        {
          color: Color.Diddy,
          text: "Rocket to vulture GB, 3 tower trees (52)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Gong tower GB, stairs (55)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Beetle race GB (60)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "5 stair singles (65)"
        },
        {
          color: Color.DK,
          text: "2 stair singles (55)"
        },
        {
          color: Color.DK,
          text: "Turn in BPs x2",
          gbs: "x2"
        },
        {
          color: Color.DK,
          text: "Banana push to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Balloon (65)"
        },
        {
          color: Color.DK,
          text: "Strong Kong out (75)"
        },
        {
          color: Color.Lanky,
          text: "Climb 2 trees (65)"
        },
        {
          color: Color.Tiny,
          text: "5DT path (65)"
        },
        {
          color: Color.DK,
          text: "5DT GB: L, R",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "5DT GB: R, balloon (75), L",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "2 trees (75)"
        },
        {
          color: Color.Tiny,
          text: "5DT GB: L, fairy, L",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "5DT GB: L, balloon (75), R, bonus",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "5DT GB: balloon (75), L, BP, R, bonus",
          gbs: "x1"
        },
        {
          color: Color.Header,
          text: "Reset, re-enter file"
        }
      ]
    },
    {
      name: "Isles to Helm",
      steps: [
        {
          color: Color.DK,
          text: "Activate ring warps"
        },
        {
          color: Color.Lanky,
          text: "Tag far W1, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxophone GB, fairy",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Helm Early"
        },
        {
          color: Color.DK,
          text: "10 Homing, Twirl or damage boost to DK BP"
        },
        {
          color: Color.Chunky,
          text: "Gone for bonus GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Clip OOB, enter Helm"
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
          color: Color.DK,
          text: "Navigate to main or skip to DK's room"
        },
        {
          color: Color.DK,
          text: "Pull lever"
        },
        {
          color: Color.Diddy,
          text: "Rocket through stars"
        },
        {
          color: Color.DK,
          text: "DK's room (if not done yet), medal"
        },
        {
          color: Color.Chunky,
          text: "Chunky's room, medal"
        },
        {
          color: Color.Tiny,
          text: "Tiny's room, medal"
        },
        {
          color: Color.Lanky,
          text: "Lanky's room, medal (shoot w/Chunky)"
        },
        {
          color: Color.Diddy,
          text: "Diddy's room, medal, BC"
        },
        {
          color: Color.DK,
          text: "Terminal clip to Key 8"
        },
        {
          color: Color.DK,
          text: "Exit level on fairies"
        }
      ]
    },
    {
      name: "Helm to Factory",
      steps: [
        {
          color: Color.DK,
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.DK,
          text: "Drop to/enter Factory Lobby"
        },
        {
          color: Color.Chunky,
          text: "Punch box"
        },
        {
          color: Color.Tiny,
          text: "BP, fairy"
        },
        {
          color: Color.DK,
          text: "Midair tag D>L for Bongos GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter Factory"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.DK,
          text: "Singles to hatch (5)"
        },
        {
          color: Color.Chunky,
          text: "Hatch balloon (10), tag W1 (15)"
        },
        {
          color: Color.Lanky,
          text: "Tag W2 (5)"
        },
        {
          color: Color.Lanky,
          text: "Pwalk/robot push to Tiny cage"
        },
        {
          color: Color.Lanky,
          text: "Continue OOB to pipe GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Down pipe (30)"
        },
        {
          color: Color.DK,
          text: "BP"
        },
        {
          color: Color.Diddy,
          text: "10 singles (10), BP, slam switch, tag W4"
        },
        {
          color: Color.DK,
          text: "To storage, Blast w/3 bunches (20)"
        },
        {
          color: Color.Lanky,
          text: "Free Chunky GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Dark room GB w/bunches (30)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tag storage W1 (35)"
        },
        {
          color: Color.Tiny,
          text: "Enter T&S (can enter w/DK), Key 3"
        },
        {
          color: Color.Tiny,
          text: "BP"
        },
        {
          color: Color.Diddy,
          text: "Tunnel singles (13)"
        },
        {
          color: Color.Chunky,
          text: "Bonus GB (roll w/DK)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Remaining tunnel singles (15), W5 (20)"
        },
        {
          color: Color.Tiny,
          text: "Pipe bunch (5), cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "DK Arcade x2",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pwalk to testing, BP"
        },
        {
          color: Color.Tiny,
          text: "Backtrack for 5 (10)"
        },
        {
          color: Color.DK,
          text: "Numbers GB (25), balloon (35), fairy",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Block tower bonus GB w/4 bunches (40)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pwalk/Mini to wheel GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Funky balloon (30), fairy"
        },
        {
          color: Color.Lanky,
          text: "Jump to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "To R&D, tag W2 (35), 3 to right (38)"
        },
        {
          color: Color.Tiny,
          text: "Tunnel to car race GB (40), pwalk back",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Clip to BC, BP, 2 singles (40)"
        },
        {
          color: Color.Chunky,
          text: "Toy monster GB (45), balloon (55)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pincode (guitar): 3124, 4231, 1342"
        },
        {
          color: Color.Diddy,
          text: "Pincode GB, 3 balloons (70)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Remaining R&D singles (45)"
        },
        {
          color: Color.Lanky,
          text: "Piano game GB, balloon (55)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Balloon (45), drop to power shed"
        },
        {
          color: Color.DK,
          text: "Shed GB (60)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Slam switch for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "To prod, balloon (50)"
        },
        {
          color: Color.Chunky,
          text: "Slam prod switch, W4 to GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (65)"
        },
        {
          color: Color.Tiny,
          text: "Conveyors to bonus GB (70)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Twirl to bunch (75)"
        },
        {
          color: Color.Diddy,
          text: "Drop to Spring GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Drop to crusher room, balloon (75)"
        },
        {
          color: Color.DK,
          text: "Strong Kong to GB (75)",
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
          text: "Leave Lobby, drop to Snide"
        },
        {
          color: Color.Diddy,
          text: "Spring to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BC"
        },
        {
          color: Color.DK,
          text: "Drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pswim to Galleon Lobby"
        },
        {
          color: Color.Chunky,
          text: "BP, enter Galleon"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Cannon game spawn snag GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP"
        },
        {
          color: Color.Tiny,
          text: "Bunches (15)"
        },
        {
          color: Color.Chunky,
          text: "Balloon (10)"
        },
        {
          color: Color.Diddy,
          text: "Pswim to lighthouse"
        },
        {
          color: Color.Tiny,
          text: "Balloon by Diddy BP (25)"
        },
        {
          color: Color.Diddy,
          text: "BP, raise water"
        },
        {
          color: Color.DK,
          text: "Blast course w/3 bunches (15)"
        },
        {
          color: Color.DK,
          text: "Lighthouse GB (35), balloon (45)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Balloon (55)"
        },
        {
          color: Color.Diddy,
          text: "Seal balloon (10)"
        },
        {
          color: Color.Diddy,
          text: "Slam ship switch"
        },
        {
          color: Color.Chunky,
          text: "Ship GB (35) (2 punches)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to lighthouse GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Guitar, bunches (20)"
        },
        {
          color: Color.Diddy,
          text: "Pswim through cannon room"
        },
        {
          color: Color.Diddy,
          text: "Tag W2, enter mech fish"
        },
        {
          color: Color.Diddy,
          text: "Mech fish GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Bunches under mech fish (40)"
        },
        {
          color: Color.DK,
          text: "Seal GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to seal race skip GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag back to DK to escape"
        },
        {
          color: Color.DK,
          text: "Tunnel bunches (70)"
        },
        {
          color: Color.Chunky,
          text: "Tunnel bunches (50)"
        },
        {
          color: Color.Chunky,
          text: "Pswim to 5DS bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim to bonus GB, bunches (50), pswim out",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to 5DS GB (32), 2 bunches (42)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Pswim to 5DS bonus GB (75), pswim out",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 5DS GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Enguarde bunch (20), box balloon (30)"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 2DS GB (40)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to bonus GB, pswim to leave (52)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim to treasure room (55), balloon (65)"
        },
        {
          color: Color.DK,
          text: "BP while climbing"
        },
        {
          color: Color.Diddy,
          text: "Spring to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Bunch (57), balloon (67)"
        },
        {
          color: Color.Lanky,
          text: "Climb to bonus GB (45)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim in treasure chest for pearls"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter"
        },
        {
          color: Color.Lanky,
          text: "Entry singles (50)"
        },
        {
          color: Color.Chunky,
          text: "2 singles (52), tag W2 (57)"
        },
        {
          color: Color.Chunky,
          text: "Chest GB (62), fairy",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Cannon to W3 (72), BP (75)"
        },
        {
          color: Color.Chunky,
          text: "Enter T&S (65), Key 4"
        },
        {
          color: Color.Diddy,
          text: "Cannon to Cranky (75), Jetpac"
        },
        {
          color: Color.Chunky,
          text: "Punch BC gate"
        },
        {
          color: Color.Lanky,
          text: "BC, balloons (70)"
        },
        {
          color: Color.Lanky,
          text: "Pwalk to shipyard, Trombone pad bunch (75)"
        },
        {
          color: Color.Chunky,
          text: "BP, cactus balloon (75)"
        },
        {
          color: Color.Tiny,
          text: "Clip in sub for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter"
        },
        {
          color: Color.Tiny,
          text: "Pswim to lighthouse"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Mermaid GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Galleon to Castle",
      steps: [
        {
          color: Color.Tiny,
          text: "Pswim to pipe GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to void, leave Lobby"
        },
        {
          color: Color.Tiny,
          text: "STS to BFI cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Slam X, STS to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB, tag far W3",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "W3/W1 to K. Lumsy"
        },
        {
          color: Color.Lanky,
          text: "Turn in Keys 8, 2, 3, 4, 5"
        },
        {
          color: Color.Lanky,
          text: "Pwalk/Sprint to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "To Castle Lobby"
        },
        {
          color: Color.DK,
          text: "Moonkick on rock to bonus barrel"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Shoot BP gate"
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
          text: "Cross bridge (5)"
        },
        {
          color: Color.DK,
          text: "Pwalk/swim in tree"
        },
        {
          color: Color.DK,
          text: "Shoot switch, balloon (15), BP"
        },
        {
          color: Color.Chunky,
          text: "Punch wall (5), balloon (15)"
        },
        {
          color: Color.Chunky,
          text: "Shoot switch from corner for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Roll clip to fairy, GB, bunch (20)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pswim to BP"
        },
        {
          color: Color.Lanky,
          text: "Enter lower crypt"
        },
        {
          color: Color.Lanky,
          text: "All bananas (30)"
        },
        {
          color: Color.Tiny,
          text: "Funky balloon (10)"
        },
        {
          color: Color.Lanky,
          text: "Enter mausoleum"
        },
        {
          color: Color.Lanky,
          text: "Sprint to GB (jump), balloon (40), deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Hand GB (15), deathwarp, leave",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "BP, balloon (10), enter skull"
        },
        {
          color: Color.Diddy,
          text: "Tag warps, L, L"
        },
        {
          color: Color.Diddy,
          text: "GB (15), balloon (25)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "L, R, balloon (35), minecart GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "R, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          text: "Climb to warps, tag W1"
        },
        {
          color: Color.Chunky,
          text: "Enter tunnel"
        },
        {
          color: Color.Chunky,
          text: "BP, singles up to (33), enter dungeon"
        },
        {
          color: Color.Diddy,
          text: "Left, punch 2 gates (35)"
        },
        {
          color: Color.Lanky,
          text: "Balloon (50), bonus GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Forward, punch 2 gates (45)"
        },
        {
          color: Color.DK,
          text: "Face puzzle GB (40)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "2 balloons through grates (53)"
        },
        {
          color: Color.Diddy,
          text: "Balloon (55), throne GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Leave, singles to (60)"
        },
        {
          color: Color.Tiny,
          text: "Twirl to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Singles to (65), leave"
        },
        {
          color: Color.DK,
          text: "Tag W1, singles to (48)"
        },
        {
          color: Color.Diddy,
          text: "Rocket to bonus GB (60)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Tag W5, down to (34)"
        },
        {
          color: Color.DK,
          text: "Pwalk in library, 1 bunch (53), GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Down to (45)"
        },
        {
          color: Color.Diddy,
          text: "Enter ballroom"
        },
        {
          color: Color.Diddy,
          text: "Candles (75), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port (55), Port again (65)"
        },
        {
          color: Color.Tiny,
          text: "Balloon (75), Port back"
        },
        {
          color: Color.Tiny,
          text: "Fairy, car race GB, leave ballroom",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tag W4, shed GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Balloon (75), 10 Homing"
        },
        {
          color: Color.DK,
          text: "Clip into trash can"
        },
        {
          color: Color.Tiny,
          text: "Trash can GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Greenhouse GB (75), BC",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Drop to BP, enter T&S at W2"
        },
        {
          color: Color.DK,
          text: "Singles down to (75), climb to warps"
        },
        {
          color: Color.Lanky,
          text: "W5, tower bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Drop to museum"
        },
        {
          color: Color.Chunky,
          text: "Pwalk to GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Castle to Japes",
      steps: [
        {
          color: Color.DK,
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.DK,
          text: "W1 to Japes Lobby GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Move rock"
        },
        {
          color: Color.Lanky,
          text: "Trombone GB",
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
          text: "Bush push, pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "OOB to underground"
        },
        {
          color: Color.Chunky,
          text: "Tunnel (5), 1 bunch (10)"
        },
        {
          color: Color.Chunky,
          text: "Twirl/kick to BP, GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon, rock GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W3 (5), balloon (15)"
        },
        {
          color: Color.DK,
          text: "Blast GB w/2 bunches (25)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Climb to BC, climb tree (30)"
        },
        {
          color: Color.Chunky,
          text: "Funky bunches (20)"
        },
        {
          color: Color.DK,
          text: "Snide balloon (40), hill (43)"
        },
        {
          color: Color.Diddy,
          text: "Tag W2, 4 singles (4), enter mountain"
        },
        {
          color: Color.Diddy,
          text: "Bridge clip, slam switch"
        },
        {
          color: Color.Diddy,
          text: "River singles (9), minecart (14)"
        },
        {
          color: Color.Diddy,
          text: "Balloon (24), bunch (29)"
        },
        {
          color: Color.Diddy,
          text: "Charge skip"
        },
        {
          color: Color.Diddy,
          text: "Bunch (34), minecart GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Climb tree (39), shoot switch"
        },
        {
          color: Color.DK,
          text: "Vines to T&S (48), Key 1"
        },
        {
          color: Color.Lanky,
          text: "Enter painting room (3)"
        },
        {
          color: Color.Lanky,
          text: "Painting room bunches (23), balloon (33)"
        },
        {
          color: Color.Chunky,
          text: "Skid jump aerial to clip"
        },
        {
          color: Color.Lanky,
          text: "GB, leave/re-enter for fairy",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Water bunches (49)"
        },
        {
          color: Color.Diddy,
          text: "Pswim to tunnel GB, balloon (59)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB (38)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB (5), back to main (8)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Tag skew, backflip up"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Twirl to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "BP (62)"
        },
        {
          color: Color.DK,
          skew: true,
          text: "W3 (53), BP"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "5 tunnel singles (25)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "BP, tag W5, left log (23)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Stump GB, right log (38)",
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
          color: Color.Lanky,
          skew: true,
          text: "Snide bunch (43)"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Hill (56), both Diddy GBs",
          gbs: "x2"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Drop to W4, tunnel singles (65)"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Cranky balloon (75)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Hut bunch (43), balloon (53)"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Balloon (53)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Through Rambi wall (60)"
        },
        {
          color: Color.Tiny,
          text: "Balloon (70), fairy"
        },
        {
          color: Color.Chunky,
          text: "3 balloons (55)"
        },
        {
          color: Color.Lanky,
          text: "BP, all bananas (65)"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB, balloon (75)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "W2, remaining singles (65)"
        },
        {
          color: Color.Diddy,
          text: "Mountain GB, balloon (75)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W5, 4 trees (75), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Mini to enter hive (75)"
        },
        {
          color: Color.Tiny,
          text: "Torch clip to GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Japes to Forest",
      steps: [
        {
          color: Color.DK,
          text: "Leave Lobby, W3 to cannon"
        },
        {
          color: Color.DK,
          text: "Kick to Diddy cage"
        },
        {
          color: Color.Diddy,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Enter Forest Lobby, fairy"
        },
        {
          color: Color.Chunky,
          text: "Pwalk to Gone pad for BC"
        },
        {
          color: Color.Chunky,
          text: "Enter Forest"
        }
      ]
    },
    {
      name: "Forest",
      steps: [
        {
          color: Color.Chunky,
          text: "Tag W2 (5)"
        },
        {
          color: Color.Chunky,
          text: "Enter well for minecart GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch mill door"
        },
        {
          color: Color.Chunky,
          text: "Triangle (15)"
        },
        {
          color: Color.Tiny,
          text: "Bunches (10)"
        },
        {
          color: Color.Chunky,
          text: "Ledge clip to spider, beat w/Chunky"
        },
        {
          color: Color.Tiny,
          text: "Spider GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Clip to main room"
        },
        {
          color: Color.DK,
          text: "Clip to conveyor GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "2 kegs, leave/re-enter, keg, GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Swim to (27)"
        },
        {
          color: Color.Tiny,
          text: "Thorn skew by DK barn"
        },
        {
          color: Color.DK,
          skew: true,
          text: "BP"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Balloon (37), through back wall"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Tag W2 (20), save apple (29)"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Take apple to main for GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Through blue wall"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Switch bunch (5), enter barn"
        },
        {
          color: Color.DK,
          text: "Slam switch (10), kick to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Slam box for fairy"
        },
        {
          color: Color.DK,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          text: "Pink tunnel (15), tag W5 (20)"
        },
        {
          color: Color.Lanky,
          text: "Tag W3 (5), singles to (12)"
        },
        {
          color: Color.Lanky,
          text: "Pswim to Owl area"
        },
        {
          color: Color.Lanky,
          text: "Tag W4, BP"
        },
        {
          color: Color.Lanky,
          text: "Rabbit race x2 for GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Mini to enter stump (50)"
        },
        {
          color: Color.Tiny,
          text: "Stump GB, bean, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to night switch (10)"
        },
        {
          color: Color.Diddy,
          text: "W4 (20), clockwise to Guitar (25)"
        },
        {
          color: Color.Diddy,
          text: "Clockwise to (30), Rocket to Owl race"
        },
        {
          color: Color.Diddy,
          text: "Owl race bonus GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "W4"
        },
        {
          color: Color.Tiny,
          text: "W3 (55), enter mushroom"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB (60), drop, shoot switch",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Shoot switch"
        },
        {
          color: Color.Diddy,
          text: "Shoot switch"
        },
        {
          color: Color.Lanky,
          text: "Balloon (30), shoot switch"
        },
        {
          color: Color.DK,
          text: "Switch/slam overlap for GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (40)"
        },
        {
          color: Color.Chunky,
          text: "Down to vines (48), BP, balloon (58)"
        },
        {
          color: Color.Chunky,
          text: "Drop to mesh, 2 ladder singles (60)"
        },
        {
          color: Color.Diddy,
          text: "BP, singles to (42)"
        },
        {
          color: Color.DK,
          text: "Outside, Blast bonus GB w/2 bunches (45)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Down ladder, clockwise to (60)"
        },
        {
          color: Color.Tiny,
          text: "BP, balloon (70)"
        },
        {
          color: Color.Diddy,
          text: "Drop, Rocket to bonus GB (52)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W5 (65)"
        },
        {
          color: Color.Diddy,
          text: "Clockwise to Chunky room (57)"
        },
        {
          color: Color.Chunky,
          text: "Face puzzle GB (65), balloon (75)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Climb to switch (45)"
        },
        {
          color: Color.Lanky,
          text: "Dark room GB w/1 bunch (50)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Climb to switch, light room bonus GB (55)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Counterclockwise to BC"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter"
        },
        {
          color: Color.Lanky,
          text: "W1 (60), float to attic (65)"
        },
        {
          color: Color.Lanky,
          text: "Attic GB (75)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Balloon behind Diddy barn (75)"
        },
        {
          color: Color.Diddy,
          text: "Enter barn (65)"
        },
        {
          color: Color.Diddy,
          text: "Barn attic GB, fairy, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Moonkick to Snide"
        },
        {
          color: Color.DK,
          text: "Turn in BPs x6",
          gbs: "x6"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75), turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Lanky,
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Tiny,
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Chunky,
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter"
        },
        {
          color: Color.Tiny,
          text: "W2, climb 1 mushroom (75)"
        },
        {
          color: Color.Tiny,
          text: "Beanstalk GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "EXIT Forest"
        }
      ]
    },
    {
      name: "Forest to K. Rool",
      steps: [
        {
          color: Color.Diddy,
          text: "Leave Lobby, Rocket to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "STS to BFI for Rare GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W5/W1, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
