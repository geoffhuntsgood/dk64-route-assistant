import { RouteSection } from "../classes";
import { Color } from "../enums";
import { krool } from "./sections";

export const ta101: RouteSection[] = [
  {
    name: "PRE-START",
    steps: [
      {
        color: Color.Header,
        text: "Speed Mode on, delete file 1"
      },
      {
        color: Color.Header,
        text: "NOTE: Move w/DK, swim w/Diddy"
      },
      {
        color: Color.Header,
        text: "NOTE: EXPERIMENTAL ROUTE. Totals not included."
      }
    ]
  },
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Moonkick to Caves"
      },
      {
        color: Color.Lanky,
        text: "Caves Lobby BP"
      },
      {
        color: Color.Diddy,
        text: "Rocket to Guitar GB, ENTER Caves"
      }
    ]
  },
  {
    name: "CAVES",
    steps: [
      {
        color: Color.Lanky,
        text: "Entry singles (2)"
      },
      {
        color: Color.Chunky,
        text: "Gone GB (8)"
      },
      {
        color: Color.DK,
        text: "Balloon (10)"
      },
      {
        color: Color.Lanky,
        text: "Rest of entry singles (5)"
      },
      {
        color: Color.DK,
        text: "Tag W1 (15)"
      },
      {
        color: Color.Chunky,
        text: "Tag W2 (13)"
      },
      {
        color: Color.Diddy,
        text: "Tag skew"
      },
      {
        color: Color.Tiny,
        text: "Twirl to Funky"
      },
      {
        color: Color.Diddy,
        text: "Singles (5), skew in Tiny tunnel"
      },
      {
        color: Color.Diddy,
        text: "BP, tag W4 (10)"
      },
      {
        color: Color.Tiny,
        text: "Balloon (10), Port to GB (15)"
      },
      {
        color: Color.Diddy,
        text: "Skew back out, rocket to W5"
      },
      {
        color: Color.Lanky,
        text: "BP (25)"
      },
      {
        color: Color.Diddy,
        text: "Rocket to bonus GB (15)"
      },
      {
        color: Color.Diddy,
        text: "Rocket to Lanky cabin T&S"
      },
      {
        color: Color.DK,
        text: "Key 6"
      },
      {
        color: Color.Lanky,
        text: "Trombone pad (30), cabin GB (35)"
      },
      {
        color: Color.Lanky,
        text: "Balloon (45)"
      },
      {
        color: Color.Chunky,
        text: "Tag W2 (10)"
      },
      {
        color: Color.DK,
        text: "DK Cabin GB (20), BC"
      },
      {
        color: Color.Tiny,
        text: "BP, balloon (25)"
      },
      {
        color: Color.DK,
        text: "DK 5DC GB (25)"
      },
      {
        color: Color.Chunky,
        text: "Chunky 5DC GB (30)"
      },
      {
        color: Color.Tiny,
        text: "Backflip to 5DC GB (45)"
      },
      {
        color: Color.Diddy,
        text: "Lower 5DC GB (25)"
      },
      {
        color: Color.Diddy,
        text: "Backflip to balloon (35)"
      },
      {
        color: Color.Diddy,
        text: "Upper 5DC GB (50), fairy"
      },
      {
        color: Color.Lanky,
        text: "W5 to ice castle GB, balloon (55)"
      },
      {
        color: Color.Lanky,
        text: "Beetle race GB (60)"
      },
      {
        color: Color.DK,
        text: "BP"
      },
      {
        color: Color.Chunky,
        text: "Singles, bunch (38)"
      },
      {
        color: Color.Tiny,
        text: "Twirl to Cranky"
      },
      {
        color: Color.Diddy,
        text: "Rocket down to balloon (60)"
      },
      {
        color: Color.Tiny,
        text: "Mini to bonus GB (50)"
      },
      {
        color: Color.Chunky,
        text: "Balloon (48)"
      },
      {
        color: Color.Tiny,
        text: "Mini back out"
      },
      {
        color: Color.DK,
        text: "Up to Blast (50), bonus GB"
      },
      {
        color: Color.Lanky,
        text: "Float to 3 bunches (75)"
      },
      {
        color: Color.Diddy,
        text: "Rocket to star (65)"
      },
      {
        color: Color.Chunky,
        text: "BP, ice shield GB (53)"
      },
      {
        color: Color.Chunky,
        text: "Pwalk out, 5DI GB (63)"
      },
      {
        color: Color.Diddy,
        text: "5DI GB (75)"
      },
      {
        color: Color.Lanky,
        text: "5DI GB (75) (climb w/Diddy)"
      },
      {
        color: Color.DK,
        text: "DK 5DI GB (65) (twirl/backflip)"
      },
      {
        color: Color.DK,
        text: "Deathwarp, igloo singles, tag W1 (75)"
      },
      {
        color: Color.Tiny,
        text: "Tag W3 (55), 5DI GB (70), fairy"
      },
      {
        color: Color.Tiny,
        text: "Swim to Snide (75)"
      },
      {
        color: Color.Chunky,
        text: "2 singles, balloon (75)"
      },
      {
        color: Color.DK,
        text: "EXIT Caves"
      }
    ]
  },
  {
    name: "CAVES -> AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "Damage boost to GB, deathwarp"
      },
      {
        color: Color.Chunky,
        text: "Leave Lobby, rock, Triangle GB"
      },
      {
        color: Color.Chunky,
        text: "Second rock"
      },
      {
        color: Color.Lanky,
        text: "Trombone pad"
      },
      {
        color: Color.DK,
        text: "Aztec Early, ENTER Aztec"
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
        link: "https://docs.google.com/document/d/1j5QXuCXweKcLjyVzExgRxAWU_oAQcj6bRTiYVQQQ2X0"
      },
      {
        color: Color.Chunky,
        text: "Pswim to Klaptrap GB"
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
        text: "Collect GB, singles (19), BC"
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
        text: "Free Tiny GB, pwalk/pswim out"
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
        text: "Ostand TBS, snag piano GB",
        link: "https://docs.google.com/document/d/1j5QXuCXweKcLjyVzExgRxAWU_oAQcj6bRTiYVQQQ2X0"
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
  },
  {
    name: "FACTORY -> GALLEON",
    steps: [
      {
        color: Color.Diddy,
        text: "Leave Lobby, spring to bonus GB"
      },
      {
        color: Color.Chunky,
        text: "Snide BC"
      },
      {
        color: Color.DK,
        text: "Fall to cage GB"
      },
      {
        color: Color.Chunky,
        text: "Galleon Lobby, BP"
      },
      {
        color: Color.Lanky,
        text: "ENTER Galleon"
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Lanky,
        text: "Entry singles (5)"
      },
      {
        color: Color.Chunky,
        text: "2 singles, tag W2 (7)"
      },
      {
        color: Color.Tiny,
        text: "Cannon to tag W3, BP (8)"
      },
      {
        color: Color.Chunky,
        text: "Plank singles (10), enter T&S"
      },
      {
        color: Color.Chunky,
        text: "Key 4"
      },
      {
        color: Color.Lanky,
        text: "2 balloons (25), BC"
      },
      {
        color: Color.Chunky,
        text: "Singles to chests (15), GB"
      },
      {
        color: Color.DK,
        text: "Balloon (10), fairy"
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Cannon game spawn snag GB",
        link: "https://docs.google.com/document/d/1j5QXuCXweKcLjyVzExgRxAWU_oAQcj6bRTiYVQQQ2X0"
      },
      {
        color: Color.Lanky,
        text: "BP"
      },
      {
        color: Color.Tiny,
        text: "Bunches (23)"
      },
      {
        color: Color.Chunky,
        text: "Balloon (25), pswim to lighthouse"
      },
      {
        color: Color.Tiny,
        text: "Balloon by Diddy BP (33)"
      },
      {
        color: Color.Diddy,
        text: "BP"
      },
      {
        color: Color.DK,
        text: "Raise water, tag W5, balloon (20)"
      },
      {
        color: Color.DK,
        text: "Blast course (skip top bunch) (30)"
      },
      {
        color: Color.DK,
        text: "Climb lighthouse (60), GB"
      },
      {
        color: Color.DK,
        text: "Kick to ship"
      },
      {
        color: Color.Diddy,
        text: "Ship switch"
      },
      {
        color: Color.Chunky,
        text: "Ship inside (50)"
      },
      {
        color: Color.Chunky,
        text: "Punch x2, jump to GB, leave"
      },
      {
        color: Color.Diddy,
        text: "Balloon (10), rocket to top GB"
      },
      {
        color: Color.Diddy,
        text: "Guitar pad, bunches (20)"
      },
      {
        color: Color.Diddy,
        text: "Pswim under box to shipyard"
      },
      {
        color: Color.Diddy,
        text: "Mech fish GB (desync?)"
      },
      {
        color: Color.Diddy,
        text: "Bunches under fish (40)"
      },
      {
        color: Color.DK,
        text: "Collect Seal GB"
      },
      {
        color: Color.Diddy,
        text: "Seal race skip GB"
      },
      {
        color: Color.Diddy,
        text: "Cactus balloon (50)"
      },
      {
        color: Color.Chunky,
        text: "Cactus balloon (60), BP"
      },
      {
        color: Color.Lanky,
        text: "Trombone pad bunch (30)"
      },
      {
        color: Color.Tiny,
        text: "Clip in sub for bonus GB"
      },
      {
        color: Color.DK,
        text: "Nearest tunnel for bunches (75)"
      },
      {
        color: Color.Lanky,
        text: "Enguarde bunch (35)"
      },
      {
        color: Color.Chunky,
        text: "Pswim in top of 5DS for bonus GB"
      },
      {
        color: Color.Diddy,
        text: "Pswim to bonus GB, 2 bunches (60)"
      },
      {
        color: Color.Lanky,
        text: "Pswim in 5DS, 3 bunches (50), GB"
      },
      {
        color: Color.Tiny,
        text: "Pswim in 5DS, (50), fairy, GB"
      },
      {
        color: Color.DK,
        text: "Pswim to 5DS bonus GB, pswim out"
      },
      {
        color: Color.Chunky,
        text: "Straight down to tunnel bunches (75)"
      },
      {
        color: Color.Lanky,
        text: "Tag like crazy to enter 2DS"
      },
      {
        color: Color.Lanky,
        text: "Singles, bunch (60), GB"
      },
      {
        color: Color.Tiny,
        text: "Pswim to bonus GB, bunches (60)"
      },
      {
        color: Color.Diddy,
        text: "Pswim in treasure room (65)"
      },
      {
        color: Color.Diddy,
        text: "Balloon (75)"
      },
      {
        color: Color.DK,
        text: "BP"
      },
      {
        color: Color.Diddy,
        text: "Spring to bonus GB"
      },
      {
        color: Color.Tiny,
        text: "Balloon, bunch (75)"
      },
      {
        color: Color.Lanky,
        text: "Float to bonus GB (65)"
      },
      {
        color: Color.Diddy,
        text: "Pswim in chest for pearls"
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "Pwalk to lighthouse"
      },
      {
        color: Color.Lanky,
        text: "Singles, pswim to bunch (75)"
      },
      {
        color: Color.Lanky,
        text: "Enguarde chest GB"
      },
      {
        color: Color.Tiny,
        text: "Mermaid GB, EXIT Galleon"
      }
    ]
  },
  {
    name: "GALLEON -> CASTLE",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim to pipe GB"
      },
      {
        color: Color.Tiny,
        text: "Pswim to void, leave Lobby"
      },
      {
        color: Color.Lanky,
        text: "K. Lumsy cage GB"
      },
      {
        color: Color.Lanky,
        text: "Open Japes"
      },
      {
        color: Color.Lanky,
        text: "Turn in Keys 8, 2, 3, 4, 5"
      },
      {
        color: Color.Lanky,
        text: "Pwalk to Sprint cage GB"
      },
      {
        color: Color.DK,
        text: "Back in bounds (don't void)"
      },
      {
        color: Color.DK,
        text: "Castle Lobby, rock moonkick to bonus GB"
      },
      {
        color: Color.Lanky,
        text: "Bonus GB"
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
        text: "ENTER Castle"
      }
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Cross bridge (5), pwalk in tree"
      },
      {
        color: Color.Chunky,
        text: "Bunch, balloon (15), bonus GB"
      },
      {
        color: Color.DK,
        text: "Shoot switch, BP, balloon (15)"
      },
      {
        color: Color.DK,
        text: "Roll clip to fairy, GB"
      },
      {
        color: Color.DK,
        text: "Jump over raft (20), leave"
      },
      {
        color: Color.DK,
        text: "Singles to (35), tag W1"
      },
      {
        color: Color.Chunky,
        text: "Enter tunnel, singles to tag (20)"
      },
      {
        color: Color.Tiny,
        text: "Twirl to bonus GB"
      },
      {
        color: Color.Chunky,
        text: "Singles to (28), enter dungeon"
      },
      {
        color: Color.Chunky,
        text: "Right, 2 balloons (48)"
      },
      {
        color: Color.Diddy,
        text: "Sniper GB, balloon (10)"
      },
      {
        color: Color.DK,
        text: "Face puzzle GB (40)"
      },
      {
        color: Color.Diddy,
        text: "3 gates (Chunky Punch) (25)"
      },
      {
        color: Color.Lanky,
        text: "2 balloons (20), bonus GB, deathwarp"
      },
      {
        color: Color.Chunky,
        text: "Leave, singles to (60)"
      },
      {
        color: Color.DK,
        text: "W1, drop to crypt"
      },
      {
        color: Color.Lanky,
        text: "Singles/bunches until (50)"
      },
      {
        color: Color.Tiny,
        text: "Funky balloon (10)"
      },
      {
        color: Color.Lanky,
        text: "Enter crypt, sprint GB, deathwarp"
      },
      {
        color: Color.Tiny,
        text: "Bunch (15), GB, deathwarp"
      },
      {
        color: Color.Diddy,
        text: "BP, balloon (35), enter crypt"
      },
      {
        color: Color.Chunky,
        text: "Right to bonus GB"
      },
      {
        color: Color.Diddy,
        text: "Left to GB, bunch, balloon (50)"
      },
      {
        color: Color.DK,
        text: "Bunch (45), minecart GB"
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "W1, singles to (63)"
      },
      {
        color: Color.Tiny,
        text: "Drop for BP"
      },
      {
        color: Color.DK,
        text: "Climb until (75) (Lanky BP on the way)"
      },
      {
        color: Color.Lanky,
        text: "BP"
      },
      {
        color: Color.Tiny,
        text: "Tag W2, up to Cranky (25)"
      },
      {
        color: Color.Tiny,
        text: "Jetpac for Rareware Coin"
      },
      {
        color: Color.Tiny,
        text: "Singles to (33), tag W4"
      },
      {
        color: Color.DK,
        text: "Clip into trash can"
      },
      {
        color: Color.Tiny,
        text: "Trash GB, bunch (38), 5 HOMING"
      },
      {
        color: Color.Lanky,
        text: "Greenhouse GB (75), BC"
      },
      {
        color: Color.Tiny,
        text: "Singles to ballroom (41)"
      },
      {
        color: Color.Diddy,
        text: "Enter ballroom"
      },
      {
        color: Color.Tiny,
        text: "Port (51)"
      },
      {
        color: Color.Tiny,
        text: "Fairy, car race GB"
      },
      {
        color: Color.Diddy,
        text: "Port back, ballroom (75), bonus GB"
      },
      {
        color: Color.Diddy,
        text: "Leave ballroom"
      },
      {
        color: Color.Tiny,
        text: "Singles to DK Switch (62)"
      },
      {
        color: Color.DK,
        text: "Pwalk into library, GB"
      },
      {
        color: Color.Tiny,
        text: "Up to (75), tag W5"
      },
      {
        color: Color.Lanky,
        text: "Tower bonus GB"
      },
      {
        color: Color.DK,
        text: "Drop to W4, enter T&S"
      },
      {
        color: Color.Lanky,
        text: "Key 7"
      },
      {
        color: Color.Chunky,
        text: "Enter shed, GB, balloon (70)"
      },
      {
        color: Color.Chunky,
        text: "Enter museum, pwalk to GB"
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        text: "W2, rocket to bonus GB"
      },
      {
        color: Color.Diddy,
        text: "EXIT Castle, deathwarp, leave Lobby"
      }
    ]
  },
  {
    name: "CASTLE -> JAPES",
    steps: [
      {
        color: Color.Chunky,
        text: "W1, small island fairy, slam X"
      },
      {
        color: Color.Chunky,
        text: "STS to cage GB, rock GB"
      },
      {
        color: Color.DK,
        text: "Japes entrance GB"
      },
      {
        color: Color.Chunky,
        text: "Move Lobby rock"
      },
      {
        color: Color.Lanky,
        text: "Trombone GB"
      },
      {
        color: Color.DK,
        text: "ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES",
    steps: [
      {
        color: Color.DK,
        text: "Bush push, pswim to cage GB"
      },
      {
        color: Color.Chunky,
        text: "Swim underground, (15)"
      },
      {
        color: Color.Chunky,
        text: "BP, GB (twirl), deathwarp"
      },
      {
        color: Color.Chunky,
        text: "Rock GB"
      },
      {
        color: Color.DK,
        text: "Tag W3, balloon (15)"
      },
      {
        color: Color.DK,
        text: "Blast course GB (25)"
      },
      {
        color: Color.DK,
        text: "Moonkick to Funky tree (30)"
      },
      {
        color: Color.Diddy,
        text: "BC, drop to tag skew"
      },
      {
        color: Color.Tiny,
        text: "Twirl to cage GB"
      },
      {
        color: Color.DK,
        text: "Tag W4, singles to Cranky, balloon (50)"
      },
      {
        color: Color.Tiny,
        text: "Hut skew, balloon (15)"
      },
      {
        color: Color.Lanky,
        text: "Balloon (10)"
      },
      {
        color: Color.Diddy,
        text: "W4, BP (3)"
      },
      {
        color: Color.DK,
        text: "Tag/use W3 (55)"
      },
      {
        color: Color.DK,
        text: "Skew to BP"
      },
      {
        color: Color.Tiny,
        text: "BP, tag W5, skew stump GB"
      },
      {
        color: Color.Tiny,
        text: "Log skews (45), wall skew to Funky"
      },
      {
        color: Color.Diddy,
        text: "Skew to cage GB"
      },
      {
        color: Color.Chunky,
        text: "Funky bunches (25), skew to cage GB"
      },
      {
        color: Color.Lanky,
        text: "Snide bunch (15)"
      },
      {
        color: Color.DK,
        text: "Snide balloon (65)"
      },
      {
        color: Color.DK,
        text: "5 singles, tag W2 (70)"
      },
      {
        color: Color.DK,
        text: "Both Diddy GBs"
      },
      {
        color: Color.Lanky,
        text: "Fall to cage GB"
      },
      {
        color: Color.Diddy,
        text: "Shoot painting hill switch"
      },
      {
        color: Color.Lanky,
        text: "Enter painting room (18)"
      },
      {
        color: Color.Lanky,
        text: "Painting room GB (48), fairy"
      },
      {
        color: Color.DK,
        text: "Vines to T&S (75), Key 1"
      },
      {
        color: Color.Diddy,
        text: "2 trees (13), water bunches (23), W2",
      },
      {
        color: Color.Diddy,
        text: "7 singles (30), enter mountain"
      },
      {
        color: Color.Diddy,
        text: "Bridge clip, slam switch"
      },
      {
        color: Color.Diddy,
        text: "Water singles (35)"
      },
      {
        color: Color.Diddy,
        text: "Minecart GB (55)"
      },
      {
        color: Color.Diddy,
        text: "Pswim to tunnel GB, balloon (65)"
      },
      {
        color: Color.Tiny,
        text: "Bonus GB (50)"
      },
      {
        color: Color.Lanky,
        text: "Bonus GB (53)"
      },
      {
        color: Color.Diddy,
        text: "W2, mountain GB, balloon (75), W5"
      },
      {
        color: Color.Tiny,
        text: "Hive GB (70), back out"
      },
      {
        color: Color.Chunky,
        text: "4 trees (45), bonus GB"
      },
      {
        color: Color.Chunky,
        text: "Shell clip to balloons (75)"
      },
      {
        color: Color.Tiny,
        text: "Singles (75), fairy"
      },
      {
        color: Color.Lanky,
        text: "Singles, bunch, balloon (75)"
      },
      {
        color: Color.Lanky,
        text: "BP, bonus GB, EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES -> FOREST",
    steps: [
      {
        color: Color.Tiny,
        text: "Enter Forest Lobby, fairy"
      },
      {
        color: Color.Chunky,
        text: "Pwalk to Gone for BC"
      },
      {
        color: Color.Chunky,
        text: "ENTER Forest"
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.Chunky,
        text: "Tag W2 (5)"
      },
      {
        color: Color.Lanky,
        text: "Tag W1 (5)"
      },
      {
        color: Color.Diddy,
        text: "Tag W4 (5)"
      },
      {
        color: Color.Chunky,
        text: "Well minecart GB (10)"
      },
      {
        color: Color.Chunky,
        text: "Punch mill door"
      },
      {
        color: Color.Chunky,
        text: "Defeat spider"
      },
      {
        color: Color.Tiny,
        text: "Spider GB, bunches (15)"
      },
      {
        color: Color.Chunky,
        text: "Punch box, triangle (15)"
      },
      {
        color: Color.Chunky,
        text: "Clip to front room"
      },
      {
        color: Color.DK,
        text: "Clip to conveyor GB"
      },
      {
        color: Color.Chunky,
        text: "2 kegs, out/in, last keg"
      },
      {
        color: Color.Tiny,
        text: "Leave mill, tag W1, swim to (27)"
      },
      {
        color: Color.Tiny,
        text: "Pswim to thorn skew, balloon (37)"
      },
      {
        color: Color.Chunky,
        text: "Skew behind T&S, tag W2 (20)"
      },
      {
        color: Color.Chunky,
        text: "Hunky, backflip on tomatoes (29)"
      },
      {
        color: Color.Chunky,
        text: "Move apple for GB"
      },
      {
        color: Color.DK,
        text: "Skew at blue wall, BP"
      },
      {
        color: Color.DK,
        text: "Bunch behind mill (5), clip inside"
      },
      {
        color: Color.DK,
        text: "Box switch (10), bonus GB"
      },
      {
        color: Color.DK,
        text: "Box fairy, EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Tag W3 (42)"
      },
      {
        color: Color.DK,
        text: "Pink tunnel (15)"
      },
      {
        color: Color.DK,
        text: "Tag W3, Tag W5 (20)"
      },
      {
        color: Color.Lanky,
        text: "Ostand TBS, rabbit race skip",
        link: "https://docs.google.com/document/d/1j5QXuCXweKcLjyVzExgRxAWU_oAQcj6bRTiYVQQQ2X0"
      },
      {
        color: Color.Lanky,
        text: "Play instrument to save position"
      },
      {
        color: Color.Lanky,
        text: "Singles/bunch (13), BP, tag/use W4"
      },
      {
        color: Color.Lanky,
        text: "W3 (18), clockwise to (23)"
      },
      {
        color: Color.Lanky,
        text: "Manually tag Diddy"
      },
      {
        color: Color.Diddy,
        text: "Gun skew (don't tag)"
      },
      {
        color: Color.Diddy,
        text: "Get in Rocket (10)"
      },
      {
        color: Color.Diddy,
        text: "Get near Ostand tag, manually tag Tiny"
      },
      {
        color: Color.Tiny,
        text: "Go left, skew near top for beanstalk GB"
      },
      {
        color: Color.Tiny,
        text: "Rocket to 1 mushrooms (47), W2"
      },
      {
        color: Color.Diddy,
        text: "Rocket to night switch (20)"
      },
      {
        color: Color.Diddy,
        text: "W4 (30), clockwise to Guitar (35)"
      },
      {
        color: Color.Diddy,
        text: "5 singles clockwise (40)"
      },
      {
        color: Color.Diddy,
        text: "Owl race bonus GB (45)"
      },
      {
        color: Color.Tiny,
        text: "Stump singles (55), enter (60)"
      },
      {
        color: Color.Tiny,
        text: "Play Saxophone, GB, deathwarp"
      },
      {
        color: Color.Diddy,
        text: "W3, Rocket to top bonus GB"
      },
      {
        color: Color.Lanky,
        text: "Slam switch (28), dark room GB (38)"
      },
      {
        color: Color.Lanky,
        text: "Pwalk in light room, bonus GB (43)"
      },
      {
        color: Color.Chunky,
        text: "CCW to BC"
      },
      {
        color: Color.Chunky,
        text: "Back up, CCW to Chunky room"
      },
      {
        color: Color.Chunky,
        text: "Balloon, bunch (44), slam/triangle overlap"
      },
      {
        color: Color.Chunky,
        text: "Face puzzle GB"
      },
      {
        color: Color.Chunky,
        text: "CCW, drop to BP, balloon (54)"
      },
      {
        color: Color.Chunky,
        text: "Enter mushroom (59), drop to mesh"
      },
      {
        color: Color.Diddy,
        text: "2 singles (47), BP"
      },
      {
        color: Color.Chunky,
        text: "Down until (75), shoot switch"
      },
      {
        color: Color.Diddy,
        text: "Shoot switch"
      },
      {
        color: Color.Lanky,
        text: "Shoot switch, balloon (53)"
      },
      {
        color: Color.Tiny,
        text: "Shoot switch, bonus GB (65)"
      },
      {
        color: Color.DK,
        text: "Drop down, switch cs overlap"
      },
      {
        color: Color.DK,
        text: "Cannon to GB (35)"
      },
      {
        color: Color.Lanky,
        text: "Balloon (63)"
      },
      {
        color: Color.DK,
        text: "Tag upper W5 (40), fall to Blast"
      },
      {
        color: Color.DK,
        text: "Blast course bonus GB (50)"
      },
      {
        color: Color.DK,
        text: "Singles to (65)"
      },
      {
        color: Color.Tiny,
        text: "BP, balloon (75)"
      },
      {
        color: Color.DK,
        text: "Fall to W3, W1"
      },
      {
        color: Color.Lanky,
        text: "Float to mill attic GB (75)"
      },
      {
        color: Color.Diddy,
        text: "Pswim to cage GB"
      },
      {
        color: Color.Diddy,
        text: "Singles to barn attic (50)"
      },
      {
        color: Color.Diddy,
        text: "Attic bunches (60), GB, fairy"
      },
      {
        color: Color.Diddy,
        text: "Leave bunch (65)"
      },
      {
        color: Color.DK,
        text: "Balloon behind barn (75)"
      },
      {
        color: Color.DK,
        text: "Moonkick to Snide"
      }
    ]
  },
  {
    name: "SNIDE'S",
    steps: [
      {
        color: Color.DK,
        text: "Turn in BPs x8"
      },
      {
        color: Color.Diddy,
        text: "Balloon (75), turn in BPs x8"
      },
      {
        color: Color.Lanky,
        text: "Turn in BPs x8"
      },
      {
        color: Color.Tiny,
        text: "Turn in BPs x7"
      },
      {
        color: Color.Chunky,
        text: "Turn in BPs x8"
      },
      {
        color: Color.Diddy,
        text: "EXIT Forest"
      }
    ]
  },
  {
    name: "FOREST -> K. ROOL",
    steps: [
      {
        color: Color.Diddy,
        text: "Leave Lobby, cage GB, bonus GB"
      },
      {
        color: Color.Diddy,
        text: "Rocket to BFI"
      },
      {
        color: Color.Tiny,
        text: "STS to cage GB, Rare GB"
      },
      {
        color: Color.DK,
        text: "W5/W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
