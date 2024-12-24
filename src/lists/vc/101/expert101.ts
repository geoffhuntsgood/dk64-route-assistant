import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const expert101: Route = mapItemsToRoute({
  name: "101% Expert",
  doc: "https://docs.google.com/document/d/1ZCZRdYDDtHwMQmaCej44c1ckG322ydA1ErtLoz-pESY",
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip on, delete File 1"
        },
        {
          color: Color.Header,
          text: "NOTE: This route uses extensive phasewalks."
        }
      ]
    },
    {
      name: "Start!",
      steps: [
        {
          color: Color.DK,
          text: "Complete Training Barrels"
        },
        {
          color: Color.DK,
          text: "BFI, tag W5, 3 crystals"
        },
        {
          color: Color.DK,
          text: "Caves RC, Caves early"
        },
        {
          color: Color.DK,
          text: "Exit Caves"
        },
        {
          color: Color.DK,
          text: "Pfall to lava GB, leave Lobby",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Aztec roof RC, tag W2"
        },
        {
          color: Color.DK,
          text: "Kick into Japes Lobby, enter Japes"
        }
      ]
    },
    {
      name: "Japes 1",
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
          text: "BP, 3 coins, tag W3 (5)",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Climb to clear BC text"
        },
        {
          color: Color.DK,
          text: "Buy Coconut/Ammo Belt 1"
        },
        {
          color: Color.DK,
          text: "Snide balloon, tag W2 (18)"
        },
        {
          color: Color.DK,
          text: "Diddy GB (21)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Jump down trees to RC (26)"
        },
        {
          color: Color.DK,
          text: "Right switch, W3 (31)"
        },
        {
          color: Color.DK,
          text: "Left switch, balloon (41)"
        },
        {
          color: Color.DK,
          text: "BC CS skip (46)",
          crowns: "x"
        },
        {
          color: Color.DK,
          text: "Cannon to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W4, to Cranky (55)"
        },
        {
          color: Color.DK,
          text: "Cranky balloon (65)"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Simian Slam from Cranky"
        },
        {
          color: Color.Diddy,
          text: "Buy up to Spring, W4"
        },
        {
          color: Color.Diddy,
          text: "Water bunches (10), 3 coins"
        },
        {
          color: Color.Diddy,
          text: "Buy Peanut"
        },
        {
          color: Color.Diddy,
          text: "Pwalk to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim to cave GB, balloon (20)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Tag in T&S for Army Dillo"
        },
        {
          color: Color.DK,
          text: "Pause exit/reset on Key 1",
          keys: "x"
        }
      ]
    },
    {
      name: "Japes 1 to Aztec 1",
      steps: [
        {
          color: Color.Header,
          text: "Turn on Story Skip again"
        },
        {
          color: Color.DK,
          text: "Tag W1, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1/W2, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "Pwalk to BP, 3 coins",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Pwalk for Llama CS skip"
        },
        {
          color: Color.DK,
          text: "Oasis RC"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Tag W1, buy Guitar"
        },
        {
          color: Color.Diddy,
          text: "Rocket to BP, enter Tiny Temple",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Climb to melt ice (18)"
        },
        {
          color: Color.Diddy,
          text: "Pswim to Tiny GB (23), OKONG",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim out, balloon, tag W2 (38)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Pwalk to Cranky, buy up to Super Slam"
        },
        {
          color: Color.DK,
          text: "Balloons (20)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Buy up to Port, tag W3"
        },
        {
          color: Color.Tiny,
          text: "BP, tag far W2 (10)",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Buy Feather, enter T&S"
        },
        {
          color: Color.DK,
          text: "DDQ for Key 5",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Banana push for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Strong Kong to roll out (40)"
        },
        {
          color: Color.DK,
          text: "Roll clip/pwalk in 5DT"
        },
        {
          color: Color.DK,
          text: "5DT GB (L, 2 coins, R)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Blast, temple balloon (54)"
        },
        {
          color: Color.DK,
          text: "Enter Llama Temple, free Lanky",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit/enter level"
        },
        {
          color: Color.DK,
          text: "W1, 2 trees (64)"
        },
        {
          color: Color.DK,
          text: "Llama GB, 1 coin (67)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "1 coin, Klaptrap GB snag (15)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W2/W3"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Single, bunch (6), 2 coins max"
        },
        {
          color: Color.Lanky,
          text: "Buy up to Sprint"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "W3 to rocket (40)"
        },
        {
          color: Color.Diddy,
          text: "Rocket through sun (45)"
        },
        {
          color: Color.Diddy,
          text: "Hit gongs before Try Again"
        },
        {
          color: Color.Diddy,
          text: "Vulture race (50)"
        },
        {
          color: Color.Diddy,
          text: "Fly to 3 trees (65), tower GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fly to totem GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fly to 5DT, charge/pwalk in"
        },
        {
          color: Color.Diddy,
          text: "5DT (R, balloon (75), L)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Aztec 1 to Factory",
      steps: [
        {
          color: Color.Diddy,
          text: "Charge Lobby gongs"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Bonus GB, W2/W1, turn in Key 5",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port to fairy, fall to Factory",
          fairies: "x1"
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
          text: "Tag W2 (5)"
        },
        {
          color: Color.Lanky,
          text: "Robot push/pwalk to open Tiny cage"
        },
        {
          color: Color.Lanky,
          text: "Pipe GB, down pipe (30)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Tag W4, free Chunky GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Avoid coins, buy Trombone (40)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Buy Saxophone"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Cranky then Candy"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Buy Bongos, balloon (10)"
        },
        {
          color: Color.DK,
          text: "Power shed kick for GB (25)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Blast w/all bunches (45)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Dark room RC, GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tag W1 (20), 1 coin, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pwalk to Funky (Tag W5 for safety)"
        },
        {
          color: Color.Chunky,
          text: "Buy Pineapple, Homing"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Buy Grape, Ammo Belt 2"
        },
        {
          color: Color.Lanky,
          text: "Orangstand TBS"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Arcade skip GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter T&S, clear MJ CS"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Key 3",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "Bunch (5), cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "BP, exit/enter level",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Pwalk to Snide balloon (15)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tag W3 (25), balloon (35), BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Pwalk to Wheel GB, bunch (20)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Pwalk out, other bunch (25)"
        },
        {
          color: Color.Tiny,
          text: "Funky balloon (35), fairy",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tower bonus GB (28)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Numbers GB (60)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Bonus GB, go to R&D",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Orangstand TBS for piano GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (50), store position to escape"
        },
        {
          color: Color.Lanky,
          text: "Clockwise for singles (65), BP",
          bps: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pwalk/pfall to BC",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          text: "Pwalk/pfall to toy box"
        },
        {
          color: Color.Chunky,
          text: "Monster GB, balloon, singles (55)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level, Punch box, fairy",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP, re-enter level",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "W2, car race GB, pwalk out",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "R&D room GB, 2 balloons (48)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fall to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Slam prod switch, BP (60), W4",
          bps: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Jump (60), slam prod switch"
        },
        {
          color: Color.Chunky,
          text: "Prod GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Spin/jump for (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Balloon (55), conveyors (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Cross cylinders (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "Spring GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP",
          bps: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Crusher room (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Factory to Galleon",
      steps: [
        {
          color: Color.DK,
          text: "Bongos GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Drop to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BC, drop to Galleon Lobby",
          crowns: "x"
        },
        {
          color: Color.Chunky,
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
          text: "Tag W2/W3 (8)"
        },
        {
          color: Color.Chunky,
          text: "Chest GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Fairy, exit/enter level",
          fairies: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon game (snag?), balloon (25)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "To Lighthouse, tag underwater"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Raise water, tag W5, enter lighthouse"
        },
        {
          color: Color.DK,
          text: "Lighthouse GB (20), balloon (30)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Outside balloon (40), Blast (55)"
        },
        {
          color: Color.DK,
          text: "Turn in BPs (safety only)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Balloon (10), turn in BPs x3",
          gbs: "x3"
        },
        {
          color: Color.Tiny,
          text: "W3, BP (20), enter T&S",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Key 4",
          keys: "x"
        },
        {
          color: Color.Lanky,
          text: "Pwalk to BC, balloons (20)",
          crowns: "x"
        },
        {
          color: Color.Lanky,
          text: "Pwalk to cactus tag"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Balloon (10)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BP, balloon (35)",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Submarine GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter level"
        },
        {
          color: Color.Tiny,
          text: "Cannon room bunches (35)"
        },
        {
          color: Color.Tiny,
          text: "Pswim to tag W2"
        },
        {
          color: Color.Tiny,
          text: "Pswim to 5DS GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fairy, exit/enter level",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "W2 noclip to 2DS GB (60)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Chunky pswim to 5DS GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Seal balloon (30), ship switch, BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Lighthouse GB, bunches (40)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "W5 to mech fish GB, bunches near fish (60)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim to treasure room, balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "Spring to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Bunch, balloon (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Bonus GB (25)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim for pearls"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "Entry singles (30), W2 noclip to 2DS GB (40)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Box balloon (50), Enguarde bunch (55)"
        },
        {
          color: Color.Lanky,
          text: "Pswim to 5DS GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tunnel bunches (50), 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W5 to ship (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          text: "Ship GB, exit/enter level",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "W2 noclip to 5DS GB (60)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tunnel bunches (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "W4, BP, W4 back",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Seal GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Seal race skip GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "BP, pswim to lighthouse",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Pswim for chest bunch (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
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
      name: "Galleon to Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Pswim to pipe GB, exit Lobby",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxophone GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Helm Early"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "10 HOMING, bonus GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "10 MORE HOMING, enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Kickslide up slopes"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Pwalk to DK's room, medal, pull lever",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket through stars"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Punch gates, Chunky's room, medal",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Tiny's room, medal",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Lanky's room, medal",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Diddy's room, medal",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "Rocket to BC",
          crowns: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 8",
          keys: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Exit level on fairies",
          fairies: "x2"
        }
      ]
    },
    {
      name: "Helm to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Damage boost to BP, deathwarp",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Castle Lobby, open BP gate"
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
          text: "Pwalk in tree (5)"
        },
        {
          color: Color.DK,
          text: "BP, balloon (15), roll clip",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.DK,
          text: "GB (20), leave",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W4, climb to W2 (40)"
        },
        {
          color: Color.DK,
          text: "Min 7 coins, drop to tag"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "W2, Rocket to cloud (5), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Tag W5, library clip"
        },
        {
          color: Color.DK,
          text: "1 bunch (45), GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop to Cranky, Jetpac, Slam 3"
        },
        {
          color: Color.DK,
          text: "Drop behind Cranky, enter tunnel (55)"
        },
        {
          color: Color.DK,
          text: "Safety: Tag W1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, up to (20), enter dungeon",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "2 balloons (40), 2 Diddy gates"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Face puzzle GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "2 balloons (20), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "2 bunches (15), balloon (25)"
        },
        {
          color: Color.Diddy,
          text: "Moontail for GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Exit/enter level"
        },
        {
          color: Color.Diddy,
          text: "W5, ballroom GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "2 singles (2), enter ballroom"
        },
        {
          color: Color.Tiny,
          text: "Car race GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fairy, Ports (32)",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter level"
        },
        {
          color: Color.Tiny,
          text: "Airswim to BP, climb to W5",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Down ramp until (51), drop inside"
        },
        {
          color: Color.Tiny,
          text: "Up to trash can (55)"
        },
        {
          color: Color.Tiny,
          text: "Trash GB, 10 HOMING, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Key 7",
          keys: "x"
        },
        {
          color: Color.Lanky,
          text: "W4/W5, tower GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Greenhouse GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BC, leave out back",
          crowns: "x"
        },
        {
          color: Color.Lanky,
          text: "Drop to BP, drop to crypt",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Get (55), enter room"
        },
        {
          color: Color.Lanky,
          text: "Crypt GB, balloon (65)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Deathwarp, up to (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Enter room, crypt GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Deathwarp, Funky balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, balloon (60), enter room",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Tag W1, crypt GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Coffin balloon (75), leave",
          medals: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Enter room, tag W2, balloon (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "Crypt GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Enter room, crypt GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.Chunky,
          text: "Pwalk in tree (45), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.Chunky,
          text: "W4, shed GB, balloon (65)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "20 HOMING, go to museum"
        },
        {
          color: Color.Chunky,
          text: "Pwalk/pfall for GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Balloon (75), exit level",
          medals: "x"
        }
      ]
    },
    {
      name: "Castle to Aztec 2",
      steps: [
        {
          color: Color.Chunky,
          text: "Move rock"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Bonus GB, leave Lobby",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Turn in Keys, 8, 3, 4"
        },
        {
          color: Color.Lanky,
          text: "Pwalk to Sprint GB, void out",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Tag W3, W2, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 2",
      steps: [
        {
          color: Color.Lanky,
          text: "Vulture GB (19)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BC, exit/enter level, W1",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Pwalk/pfall to cage bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Singles by Snide (6)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Beetle race GB (20)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Llama Temple (70), tag W2"
        },
        {
          color: Color.DK,
          text: "Climb to tag W1 (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Trombone for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Cage room balloons (39)"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Stairs singles (42), W1 (47)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "Lava room GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "W2, balloon (45), W1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          skew: true,
          text: "Matching game GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Skew to BP, W2, leave (50)",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "3 trees (65), 5DT balloon (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "5DT GB, leave",
          gbs: "1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Path, 3 trees (65)"
        },
        {
          color: Color.Tiny,
          text: "Enter 5DT, fairy",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "2 trees (75), enter T&S",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Key 2 as Chunky",
          keys: "x"
        },
        {
          color: Color.Chunky,
          text: "Enter 5DT, 2 balloons (26), BP",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Bonus GB, exit/enter level",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Vase GB (47), W1 (48)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tiny Temple, bunches (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          text: "Pswim to GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level"
        }
      ]
    },
    {
      name: "AZTEC 2 TO CAVES",
      steps: [
        {
          color: Color.Chunky,
          text: "Move 2 rocks, Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "W2, Trombone pad, meme jump"
        },
        {
          color: Color.Lanky,
          text: "Pwalk to BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Guitar GB, enter Caves",
          gbs: "x1"
        }
      ]
    },
    {
      name: "CAVES",
      steps: [
        {
          color: Color.Diddy,
          text: "Tag W2, Funky singles (5)"
        },
        {
          color: Color.Diddy,
          text: "Rocket to tag W5"
        },
        {
          color: Color.Diddy,
          text: "Rocket to bonus GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to Lanky cabin T&S"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Key 6 as Lanky",
          keys: "x"
        },
        {
          color: Color.Lanky,
          text: "Cabin GB (10), balloon (20)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Balloon (10), BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "W2 to skip Kosha CS (if not yet)"
        },
        {
          color: Color.Tiny,
          text: "3 river singles (13), Tag W4"
        },
        {
          color: Color.Tiny,
          text: "2 river singles (15) to igloo"
        },
        {
          color: Color.Tiny,
          text: "5DI GB (30)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fairy, leave, tag W1/W3",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Ice shield GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port to balloon (45), W4"
        },
        {
          color: Color.Tiny,
          text: "Mini to bonus GB (50), W3 (55)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "5DI GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "Entry singles (40)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "2 Snide singles, balloon (12)"
        },
        {
          color: Color.Chunky,
          text: "Pswim to Gone GB (20), W2",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "DK cabin GB (5)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "BC, leave",
          crowns: "x"
        },
        {
          color: Color.DK,
          text: "Roll clip for 5DC GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Pwalk for 5DC GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Pwalk to 5DC GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "5DC balloon (75), leave",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Balloon (20)"
        },
        {
          color: Color.Diddy,
          text: "Pwalk to upper 5DC GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pwalk to lower 5DC GB (43)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "W5 to BP (60)",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Ice Tomato GB (70)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Float to beetle race (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Beetle race GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, W1 (25)",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "5DI GB (50)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Blast course (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "Blast bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "W4 to BP, balloon (65)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "5DI GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W3, balloon (60), 5DI GB (70)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BP",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Ice shield GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Singles (75), exit level",
          medals: "x"
        }
      ]
    },
    {
      name: "Caves to Japes 2",
      steps: [
        {
          color: Color.Chunky,
          text: "Small island fairy, slam X",
          fairies: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cage GB, rock GB",
          gbs: "x2"
        },
        {
          color: Color.Chunky,
          text: "Move Japes Lobby rock"
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
          text: "Bush push"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Blast course (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "Blast GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Pswim underground, BP",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "GB (15), deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB, gun skew",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "CS to warp up, tag W1, W2"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Funky bunches (25), cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          skew: true,
          text: "Snide bunch (5), cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Through wall, W4 to balloon (15)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "Hut bunch (5), balloon (15)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "W4 to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "W3, BP, to hive",
          bps: "x"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Tag W5, logs (45), stump GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Enter shell"
        },
        {
          color: Color.Tiny,
          text: "Shell GB (67)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter level"
        },
        {
          color: Color.Tiny,
          text: "W1 to tunnel (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Bonus GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "W2, enter mountain (24), switch clip"
        },
        {
          color: Color.Diddy,
          text: "Minecart GB (49)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Open Lanky cave, BP (52), 2 trees (62)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "W2, mountain GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75), W5",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Hunky, 4 trees (45), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Shell clip, fairy",
          fairies: "x1"
        },
        {
          color: Color.Chunky,
          text: "3 balloons (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Tag at Cranky, BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB (42)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Painting room GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (75), leave/re-enter",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Fairy, exit level",
          fairies: "x1"
        }
      ]
    },
    {
      name: "Japes 2 to Forest",
      steps: [
        {
          color: Color.DK,
          tag: "L",
          text: "Leave Japes Lobby GB, Forest Lobby",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Pwalk/pfall to BC, enter Forest",
          crowns: "x"
        }
      ]
    },
    {
      name: "Forest",
      steps: [
        {
          color: Color.Chunky,
          text: "Tag W2 (5), tag W4, well GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch shed, Triangle (15), spider"
        },
        {
          color: Color.Chunky,
          text: "Clip to main room, OOB to DK GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "2 kegs, leave, keg GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Tag W1, 7 river singles (7)"
        },
        {
          color: Color.Tiny,
          text: "Pswim behind Chunky door"
        },
        {
          color: Color.Tiny,
          text: "2 bunches, clip to back room (17)"
        },
        {
          color: Color.Tiny,
          text: "Spider GB (22)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level, fairy",
          fairies: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter level, pink tunnel (5)"
        },
        {
          color: Color.DK,
          text: "Tag W3, tag W5 (10)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "TBS for rabbit race GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP (8), W4, W3, clockwise to tag (18)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Tag, gun skew"
        },
        {
          color: Color.Diddy,
          skew: true,
          text: "Rocket (10), tag Tiny"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Rocket as Tiny to beanstalk GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "2 mushrooms (32)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          skew: true,
          text: "Tag W2 (20), save apple GB (29)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Through blue wall"
        },
        {
          color: Color.Tiny,
          tag: "L",
          skew: true,
          text: "Balloon (42)"
        },
        {
          color: Color.DK,
          tag: "R",
          skew: true,
          text: "BP, bunch (15), enter shed",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Bonus GB (20)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fairy, exit/enter level",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket to night switch (20)"
        },
        {
          color: Color.Diddy,
          text: "W4 (30), clockwise until (39)"
        },
        {
          color: Color.Diddy,
          text: "Owl GB (44)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Stump GB (50), deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W3 (60), bounce to BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Balloon (70), drop to inner tag"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to bonus GB, tag W5",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fall inside to BP, 3 singles (47)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Out to tag by Blast"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Blast bonus GB (30)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop down, clockwise to (45)"
        },
        {
          color: Color.DK,
          text: "W5 (50), BC",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          text: "Face puzzle GB (44)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Drop to BP (54), enter",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Down until (75), shoot switch",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Shoot switch, slam switch (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Bonus GB, drop down",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Balloon (28), shoot switch"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Shoot switch"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Shoot/slam CS skip, cannon GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Balloon (38), pwalk to light room GB (43)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Slam switch, dark room GB, 1 bunch (53)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "W1 (58), attic GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Roof to (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Pswim to cage GB, across to barn attic",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Bunches (65), GB, fairy",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fairy, deathwarp",
          fairies: "x1"          
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Balloon (75), moonkick to Snide",
          medals: "x"
        }
      ]
    },
    {
      name: "SNIDE'S",
      steps: [
        {
          color: Color.DK,
          text: "Turn in BPs x8 (x5 if safety)",
          gbs: "x8"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Turn in BPs x5",
          gbs: "x5"
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
          text: "Balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Diddy,
          text: "Exit level"
        }
      ]
    },
    {
      name: "FOREST TO K. ROOL",
      steps: [
        {
          color: Color.Diddy,
          text: "Rocket to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Cage GB, drop to W3",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W5 to cage GB, fairy GB",
          gbs: "x2"
        },
        {
          color: Color.Tiny,
          text: "W5/W3, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
