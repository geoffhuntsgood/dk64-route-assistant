import { RouteSection } from "../classes";
import { Color } from "../enums";
import { taPreStart } from "./sections";

export const ta101: RouteSection[] = [
  taPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Climb to Aztec, Aztec Early"
      },
      {
        color: Color.DK,
        text: "ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC",
    steps: [
      {
        color: Color.Chunky,
        text: "1 single, vase GB (21)"
      },
      {
        color: Color.Chunky,
        text: "Tag W1, remaining singles (25)"
      },
      {
        color: Color.DK,
        text: "Pwalk to BP"
      },
      {
        color: Color.Lanky,
        text: "Entry singles (5)"
      },
      {
        color: Color.Diddy,
        text: "Tag W1, rocket to BP"
      },
      {
        color: Color.Diddy,
        text: "Pwalk into Tiny Temple"
      },
      {
        color: Color.Chunky,
        text: "Bunches (50)"
      },
      {
        color: Color.Tiny,
        text: "Torch clip, snag Klaptrab GB",
        totals: {
          gbs: 2
        }
      },
      {
        color: Color.Chunky,
        text: "Pswim to Klaptrap GB",
        totals: {
          gbs: 3
        }
      },
      {
        color: Color.Chunky,
        text: "Damage skew out to water"
      },
      {
        color: Color.Diddy,
        text: "3 singles (3), swim across"
      },
      {
        color: Color.Lanky,
        text: "4 singles, bunch up to vulture (14)"
      },
      {
        color: Color.Chunky,
        text: "Shoot vulture, balloon (60)"
      },
      {
        color: Color.Lanky,
        text: "Collect GB, singles (19), BC",
        totals: {
          gbs: 4,
          crowns: 1
        }
      },
      {
        color: Color.Diddy,
        text: "4 singles to Tiny room (7)"
      },
      {
        color: Color.Tiny,
        text: "2 balloons (20)"
      },
      {
        color: Color.Diddy,
        text: "Free Tiny GB, pwalk/pswim out",
        totals: {
          gbs: 5
        }
      },
      {
        color: Color.Diddy,
        text: "Balloon outside, tag W2 (22)"
      },
      {
        color: Color.DK,
        text: "Guitar Skip"
      },
      {
        color: Color.Diddy,
        text: "Tunnel singles (27)"
      },
      {
        color: Color.Lanky,
        text: "Singles to Cranky, bunch (29)"
      },
      {
        color: Color.DK,
        text: "Enter T&S for Keys 5 & 2"
      },
      {
        color: Color.DK,
        text: "2 balloons (20)"
      },
      {
        color: Color.Tiny,
        text: "BP, 4 singles (24)"
      },
      {
        color: Color.Chunky,
        text: "Pwalk to bonus GB"
      },
      {
        color: Color.Tiny,
        text: "Remaining singles (30), tag W2"
      },
      {
        color: Color.DK,
        text: "Blast course"
      },
      {
        color: Color.Lanky,
        text: "Tree toward Rocket (34)"
      },
      {
        color: Color.Diddy,
        text: "Stair singles, rocket to sun (35)"
      },
      {
        color: Color.Diddy,
        text: "Charge gongs waiting for Try Again"
      },
      {
        color: Color.Diddy,
        text: "Vulture ring course (40)"
      },
      {
        color: Color.Diddy,
        text: "Vulture race GB"
      },
      {
        color: Color.Diddy,
        text: "Rocket to 3 gong trees (55)"
      },
      {
        color: Color.Diddy,
        text: "Gong tower GB"
      },
      {
        color: Color.Tiny,
        text: "Beetle Race (35)"
      },
      {
        color: Color.Lanky,
        text: "Tree outside gong tower (39)"
      },
      {
        color: Color.Chunky,
        text: "5 stair singles (65)"
      },
      {
        color: Color.Tiny,
        text: "Turn in BP x1"
      },
      {
        color: Color.DK,
        text: "2 coins for Arcade, 3 singles (23)"
      },
      {
        color: Color.Tiny,
        text: "Tag W5 (40)"
      },
      {
        color: Color.DK,
        text: "Banana push to bonus GB"
      },
      {
        color: Color.Diddy,
        text: "Balloon (65)"
      },
      {
        color: Color.DK,
        text: "Roll out of tunnel (43)"
      },
      {
        color: Color.Tiny,
        text: "5DT path, 2 front trees (55)"
      },
      {
        color: Color.Diddy,
        text: "Charge clip/pwalk into 5DT"
      },
      {
        color: Color.Diddy,
        text: "R, balloon (75), L, GB"
      },
      {
        color: Color.DK,
        text: "Roll clip/pwalk into 5DT"
      },
      {
        color: Color.DK,
        text: "L, R, GB"
      },
      {
        color: Color.Lanky,
        text: "Pwalk into 5DT"
      },
      {
        color: Color.Lanky,
        text: "L, balloon (49), R, bonus GB"
      },
      {
        color: Color.Tiny,
        text: "Pwalk into 5DT"
      },
      {
        color: Color.Tiny,
        text: "L, fairy, L, GB"
      },
      {
        color: Color.Tiny,
        text: "2 back trees (65)"
      },
      {
        color: Color.Chunky,
        text: "Pwalk/pfall into 5DT"
      },
      {
        color: Color.Chunky,
        text: "L, balloon (75), BP, bonus GB"
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "W1, 2 trees (53)"
      },
      {
        color: Color.DK,
        text: "Stair singles (56), llama GB"
      },
      {
        color: Color.DK,
        text: "W2, stairs, balloon (70)"
      },
      {
        color: Color.DK,
        text: "Enter Llama Temple"
      },
      {
        color: Color.Lanky,
        text: "Both sets of stairs (55), Trombone"
      },
      {
        color: Color.Lanky,
        text: "Bonus GB"
      },
      {
        color: Color.Tiny,
        text: "Balloon (75)"
      },
      {
        color: Color.DK,
        text: "Skew to Free Lanky GB"
      },
      {
        color: Color.Lanky,
        text: "2 balloons (75)"
      },
      {
        color: Color.DK,
        text: "Stair singles (75)"
      },
      {
        color: Color.Lanky,
        text: "Skew to matching game GB"
      },
      {
        color: Color.DK,
        text: "Pipe skew, fairy on other side"
      },
      {
        color: Color.Lanky,
        text: "BP"
      },
      {
        color: Color.Tiny,
        text: "Lava GB, EXIT Aztec"
      }
    ]
  },
  {
    name: "AZTEC -> HELM",
    steps: [
      {
        color: Color.Diddy,
        text: "Charge gongs"
      },
      {
        color: Color.Tiny,
        text: "Bonus GB, RESET!!"
      },
      {
        color: Color.DK,
        text: "Tag W4/W1"
      },
      {
        color: Color.Tiny,
        text: "Port to Saxophone GB, fairy"
      },
      {
        color: Color.Tiny,
        text: "Helm Early"
      },
      {
        color: Color.Tiny,
        text: "10 HOMING"
      },
      {
        color: Color.Chunky,
        text: "Bonus GB, deathwarp"
      },
      {
        color: Color.Chunky,
        text: "10 MORE HOMING"
      },
      {
        color: Color.Tiny,
        text: "ENTER Helm"
      }
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Kickslide up hills"
      },
      {
        color: Color.DK,
        text: "Pwalk to DK's room, medal"
      },
      {
        color: Color.DK,
        text: "Light clip OOB to pull lever"
      },
      {
        color: Color.Diddy,
        text: "Rocket through stars"
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
        text: "Lanky's room (shoot w/Chunky), medal"
      },
      {
        color: Color.Diddy,
        text: "Diddy's room (pwalk in cage), medal"
      },
      {
        color: Color.Diddy,
        text: "Rocket to BC"
      },
      {
        color: Color.DK,
        text: "Kick down, terminal clip 2"
      },
      {
        color: Color.DK,
        text: "Key 8, EXIT on fairies"
      }
    ]
  },
  {
    name: "HELM -> FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "Damage boost to BP"
      },
      {
        color: Color.DK,
        text: "Deathwarp, leave Lobby"
      },
      {
        color: Color.Chunky,
        text: "Enter Factory Lobby, Punch box"
      },
      {
        color: Color.Tiny,
        text: "BP, fairy"
      },
      {
        color: Color.DK,
        text: "Tag midair to climb to Bongos GB"
      },
      {
        color: Color.Lanky,
        text: "ENTER Factory"
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.Chunky,
        text: "Tag W1 (5)"
      },
      {
        color: Color.DK,
        text: "Singles to hatch (5)"
      },
      {
        color: Color.Chunky,
        text: "Hatch balloon (15)"
      },
      {
        color: Color.Lanky,
        text: "Tag W2 (5)"
      },
      {
        color: Color.Tiny,
        text: "Pwalk/robot push to Snide balloon (10)"
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "Pwalk/robot push OOB"
      },
      {
        color: Color.Lanky,
        text: "Pipe GB from OOB"
      },
      {
        color: Color.Lanky,
        text: "Down pipe (30)"
      },
      {
        color: Color.DK,
        text: "BP, tag high W4"
      },
      {
        color: Color.Tiny,
        text: "Balloon (20)"
      },
      {
        color: Color.DK,
        text: "1 single backtrack (6)"
      },
      {
        color: Color.Diddy,
        text: "Drop to BP, prod switch, tag W4 (10)"
      },
      {
        color: Color.DK,
        text: "Singles to storage (10)"
      },
      {
        color: Color.Lanky,
        text: "Free Chunky GB"
      },
      {
        color: Color.DK,
        text: "Blast course, 4 bunches (30)"
      },
      {
        color: Color.DK,
        text: "Box kick to power shed GB (45)"
      },
      {
        color: Color.Diddy,
        text: "Slam switch for bonus GB"
      },
      {
        color: Color.Chunky,
        text: "Dark room bunches (30), GB"
      },
      {
        color: Color.Chunky,
        text: "Tag W1 (25)"
      },
      {
        color: Color.Tiny,
        text: "BP"
      },
      {
        color: Color.Chunky,
        text: "Bonus GB (use DK)"
      },
      {
        color: Color.Diddy,
        text: "Tag W5 (15)"
      },
      {
        color: Color.Tiny,
        text: "Enter T&S, Key 3"
      },
      {
        color: Color.Tiny,
        text: "Cage GB"
      },
      {
        color: Color.Chunky,
        text: "Pwalk to testing, BP"
      },
      {
        color: Color.DK,
        text: "Numbers game GB (60), fairy"
      },
      {
        color: Color.Lanky,
        text: "Jump to bonus GB"
      },
      {
        color: Color.Tiny,
        text: "Pwalk to wheel GB, bunch (25)"
      },
      {
        color: Color.Tiny,
        text: "Pwalk out on left, bunch (30)"
      },
      {
        color: Color.Tiny,
        text: "Funky balloon (40), fairy"
      },
      {
        color: Color.Lanky,
        text: "Ostand TBS"
      },
      {
        color: Color.DK,
        text: "Spawn snag Arcade GB"
      },
      {
        color: Color.DK,
        text: "Play Arcade round 2"
      },
      {
        color: Color.Diddy,
        text: "W5 (20)"
      },
      {
        color: Color.Diddy,
        text: "Block tower bonus GB (40)"
      },
      {
        color: Color.DK,
        text: "Go to R&D"
      },
      {
        color: Color.Lanky,
        text: "Ostand TBS, snag piano GB"
      },
      {
        color: Color.Lanky,
        text: "Balloon (40)"
      },
      {
        color: Color.Lanky,
        text: "Singles to Diddy's room (43)"
      },
      {
        color: Color.Diddy,
        text: "Diddy's R&D room GB (guitar?)"
      },
      {
        color: Color.Diddy,
        text: "3 balloons (70)"
      },
      {
        color: Color.Lanky,
        text: "Singles to Chunky's room (46), BP"
      },
      {
        color: Color.Chunky,
        text: "Chunky's R&D room GB"
      },
      {
        color: Color.Chunky,
        text: "Balloon, singles (55)"
      },
      {
        color: Color.Lanky,
        text: "Remaining singles, tag W2 (55)"
      },
      {
        color: Color.Lanky,
        text: "Pwalk/ladder push to BC"
      },
      {
        color: Color.Tiny,
        text: "Singles to car race (50)"
      },
      {
        color: Color.Tiny,
        text: "Car race GB"
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Slam prod switch, W4 to GB"
      },
      {
        color: Color.Chunky,
        text: "Spin until (75)"
      },
      {
        color: Color.Lanky,
        text: "Balloon (65)"
      },
      {
        color: Color.Tiny,
        text: "Climb to bonus GB (70)"
      },
      {
        color: Color.Tiny,
        text: "Twirl to bunch (75)"
      },
      {
        color: Color.Diddy,
        text: "Drop to Spring GB (75)"
      },
      {
        color: Color.Lanky,
        text: "Crusher room balloon (75)"
      },
      {
        color: Color.DK,
        text: "Crusher GB (75), EXIT Factory"
      }
    ]
  }
];
