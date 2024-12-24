import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const intermediate101: Route = mapItemsToRoute({
  name: "101% Intermediate",
  doc: "https://docs.google.com/document/d/170Vu0a63Jnlgt1-KnczI5VV0V6omhFNBV9DnnSNYKAs",
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip on, delete File 1"
        }
      ]
    },
    {
      name: "Start!",
      steps: [
        {
          color: Color.DK,
          text: "Complete training barrels"
        },
        {
          color: Color.DK,
          text: "Get camera/shockwave from BFI"
        },
        {
          color: Color.DK,
          text: "Tag W5, 3 crystals"
        },
        {
          color: Color.DK,
          text: "Caves RC, Caves Early"
        },
        {
          color: Color.DK,
          text: "Enter/exit Caves"
        },
        {
          color: Color.DK,
          text: "Ledge clip for lava GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Aztec roof RC, tag W2"
        },
        {
          color: Color.DK,
          text: "Kick to Japes Lobby, enter Japes"
        }
      ]
    },
    {
      name: "Japes 1",
      steps: [
        {
          color: Color.DK,
          text: "Bush Push to river"
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
          text: "Climb to BC",
          crowns: "x"
        },
        {
          color: Color.DK,
          text: "Buy Coconut & Ammo Belt 1"
        },
        {
          color: Color.DK,
          text: "Climb tree, Snide balloon (20)"
        },
        {
          color: Color.DK,
          text: "Tag W2, Diddy GB (26)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Kick to tree, slope RC (31)"
        },
        {
          color: Color.DK,
          text: "1st switch, W3 (36)"
        },
        {
          color: Color.DK,
          text: "2nd switch, balloon (46)"
        },
        {
          color: Color.DK,
          text: "Climb to 3rd switch, Diddy GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W4, Cranky balloon (65)"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Buy up to Spring"
        },
        {
          color: Color.Diddy,
          text: "W4, water bunches (10), 3 coins"
        },
        {
          color: Color.Diddy,
          text: "Buy Peanut"
        },
        {
          color: Color.Diddy,
          text: "Pswim to cave, balloon (20)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Reset on 2nd 'Donk' for Key 1",
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
          text: "Tag W1/W3, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1, W2, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "BP, 3 coins",
          bps: "x"
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
          text: "Rocket to BP, balloon (10)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Enter Tiny Temple"
        },
        {
          color: Color.Diddy,
          text: "Melt ice, swim to Tiny (35)"
        },
        {
          color: Color.Diddy,
          text: "Pswim to GB, OKONG",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Pswim out, tag W2 (40)"
        },
        {
          color: Color.Diddy,
          text: "Open door, tag at Cranky (45)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Buy Slam 2, balloons (20)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Buy up to Monkeyport"
        },
        {
          color: Color.Tiny,
          text: "Tag W3, BP, Tag W2 (10)",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Buy Feather, enter T&S"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "DDQ for Key 5",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Banana push to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Strong Kong out (40)"
        },
        {
          color: Color.DK,
          text: "Roll clip into 5DT"
        },
        {
          color: Color.DK,
          text: "L, 2 coins, R, GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Blast course, balloon (54)"
        },
        {
          color: Color.DK,
          text: "Enter Llama Temple"
        },
        {
          color: Color.DK,
          text: "Free Lanky for GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit/enter level"
        },
        {
          color: Color.DK,
          text: "W1, climb 2 trees (64)"
        },
        {
          color: Color.DK,
          text: "Llama GB (67), 1 coin",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "1 coin, Klaptrap GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W2/W3 to tag"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "2 coins max, bunch, single (6)"
        },
        {
          color: Color.Lanky,
          text: "Buy up to Sprint"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "W3, tower GB (51)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to sun, 5DT switch (60)"
        },
        {
          color: Color.Diddy,
          text: "Try Again, vulture GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Feed totem, enter 5DT"
        },
        {
          color: Color.Diddy,
          text: "R, balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "L, GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Aztec 1 to Factory",
      steps: [
        {
          color: Color.Diddy,
          text: "Charge gongs"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Twirl to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W2, W1, turn in Key 5"
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
          text: "Tag W2 (5), robot push"
        },
        {
          color: Color.Lanky,
          text: "Open Tiny cage OOB"
        },
        {
          color: Color.Lanky,
          text: "Pipe GB, pipe (30), tag W4",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Free Chunky GB (35)",
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
          text: "Slam blue switch"
        },
        {
          color: Color.DK,
          text: "Box kick to shed GB (25)",
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
          text: "Tag W1 (20), 1 coin"
        },
        {
          color: Color.Chunky,
          text: "Climb to bonus GB, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Clear MJ CS, leave T&S"
        },
        {
          color: Color.DK,
          text: "DK Arcade x2, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Key 3",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "Cage GB (5)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "BP, exit/enter level",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Wheel GB (25)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Funky balloon (35), fairy",
          fairies: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Buy Grape, Homing Ammo"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Buy Pineapple, Ammo Belt 2, BP",
          bps: "x"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Numbers GB (60)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Block Tower GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Bonus GB, go to R&D",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Singles & tag W2 (55)"
        },
        {
          color: Color.Lanky,
          text: "Ladder push to BC",
          crowns: "x"
        },
        {
          color: Color.Lanky,
          text: "BP, balloon (65)",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Piano GB: CBCDECA",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Car race GB (45)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit, tag in Lobby"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Re-enter, hatch balloon (30)"
        },
        {
          color: Color.Chunky,
          text: "Tag W1 (35), W2"
        },
        {
          color: Color.Chunky,
          text: "Toy monster GB (55)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "R&D GB (50): 3124,4231,1342",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fall to switch/bonus GB",
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
          text: "Crusher GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Spin for (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Balloon climb conveyors (75)",
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
          text: "Cross spinners (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Spring to GB",
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
          text: "Strong Kong through conveyors (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "Crusher GB, exit level",
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
          color: Color.Chunky,
          tag: "L",
          text: "Punch box"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Drop to Snide Spring GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BC, fall to Galleon",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          text: "Lobby BP, enter Galleon",
          bps: "x"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Tag W2/W3 (10), BC",
          crowns: "x"
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
          text: "Cannon GB, balloon (25)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Pswim to lighthouse"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Raise water, tag W5"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Lighthouse GB (30)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Balloon outside (40)"
        },
        {
          color: Color.DK,
          text: "Blast (55), Snide tag (BPs?)"
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
          color: Color.Tiny,
          text: "Key 4 as Tiny",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "OOB above T&S, cactus tag"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Cactus balloon (10)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Cactus balloon (35), BP",
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
          text: "Cannon bunches (35)"
        },
        {
          color: Color.Tiny,
          text: "Pswim to tag W2"
        },
        {
          color: Color.Tiny,
          text: "5DS GB (50)",
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
          text: "5DS GB, W5, seal balloon (30)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Ship switch, BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Lighthouse GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "W5 to Mech Fish GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Bunches by Mech Fish (60)"
        },
        {
          color: Color.Diddy,
          text: "To treasure room (65), balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "Bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Balloon/bunch (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Treasure room GB (5)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Pswim to pearls"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "Balloons and path (30)"
        },
        {
          color: Color.Lanky,
          text: "W2 noclip, 2DS GB (40)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Box balloon, 5DS GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Enguarde bunch (70)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tunnel (50), 5DS GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W5 to Lag Ship (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          text: "Ship GB, exit/enter level",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W2 noclip, 5DS GB (60)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tunnel (75), W4",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "BP, W4 back",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Get Seal GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Seal Race Skip GB",
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
          text: "Chest pswim (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Enguarde chest GB",
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
          text: "Pswim for pipe GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxophone GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Helm early"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "10 HOMING, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Deathwarp"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "10 MORE HOMING, Enter Helm"
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
          tag: "R",
          text: "Switch kick to DK's room, medal",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "Pull lever in main room"
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
          text: "Terminal clip, Key 8",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Exit level on fairy picture",
          fairies: "x2"
        }
      ]
    },
    {
      name: "Helm to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Damage boost to BP",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.DK,
          text: "Drop to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter Castle Lobby, BP switch"
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
          text: "Cross plank (5)"
        },
        {
          color: Color.DK,
          text: "Pswim into tree"
        },
        {
          color: Color.DK,
          text: "BP, balloon (15)",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Roll clip for fairy",
          fairies: "x1"
        },
        {
          color: Color.DK,
          text: "Kick to GB, leave",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W4, to W2 (40), drop to tag"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "W2, rocket to cloud (5)"
        },
        {
          color: Color.Diddy,
          text: "Bonus GB on tower",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Tag W5, library clip"
        },
        {
          color: Color.DK,
          text: "1 bunch (45), library GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop to Cranky, Jetpac"
        },
        {
          color: Color.DK,
          text: "Buy Slam 3"
        },
        {
          color: Color.DK,
          text: "Drop behind, enter tunnel (55)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Twirl to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Singles until (15)"
        },
        {
          color: Color.Chunky,
          text: "BP, enter dungeon",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "2 balloons (35), 2 Diddy gates"
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
          text: "2 balloons (20)"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "2 bunches, balloon (25)"
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
          text: "W5, fall to ballroom"
        },
        {
          color: Color.Diddy,
          text: "Bonus GB, balloon (50)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "2 singles (2), car race GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fairy, Port, balloon (32)",
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
          text: "Down to (51), drop"
        },
        {
          color: Color.Tiny,
          text: "Up to trash can (55)"
        },
        {
          color: Color.Tiny,
          text: "Trash GB (60), 10 HOMING",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Enter KKO as Tiny for Key 7",
          keys: "x"
        },
        {
          color: Color.Lanky,
          text: "W4/W5, tower GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Drop to greenhouse GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BC, leave in back",
          crowns: "x"
        },
        {
          color: Color.Lanky,
          text: "Drop to BP, drop to crypt (55)",
          bps: "x"
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
          text: "Funky balloon (70)"
        },
        {
          color: Color.Tiny,
          text: "Bunch (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          text: "Crypt GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, balloon (60)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Crypt GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Coffin balloon (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Balloon (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "Minecart GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Crypt GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.Chunky,
          text: "Pswim into tree"
        },
        {
          color: Color.Chunky,
          text: "Balloon (50), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.Chunky,
          text: "W4 to shed GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Balloon (60), 20 HOMING"
        },
        {
          color: Color.Chunky,
          text: "Down to museum"
        },
        {
          color: Color.Chunky,
          text: "Bunch, balloon (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          text: "Museum GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Castle to Aztec 2",
      steps: [
        {
          color: Color.Chunky,
          text: "Move Lobby rock"
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
          text: "Get Sprint, turn in Keys 8 & 3"
        },
        {
          color: Color.Lanky,
          text: "Press switch, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Turn in key 4, W1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W2, move rock, drop to tag"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "W2 to Trombone pad"
        },
        {
          color: Color.Lanky,
          text: "Enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 2",
      steps: [
        {
          color: Color.Lanky,
          text: "Vulture GB, up to (19)",
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
          text: "Cage clip to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Stairs by Snide (6)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Beetle Race GB (20)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter Llama Temple"
        },
        {
          color: Color.DK,
          text: "Tag W2/W1 (75)",
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
          text: "Bonus GB, gun skew",
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
          text: "Climb stairs (42), W1 (47)"
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
          text: "Through wall to BP, W2",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Leave temple (50)"
        },
        {
          color: Color.Lanky,
          text: "Climb 3 trees (65)"
        },
        {
          color: Color.Lanky,
          text: "5DT (R, balloon (75))",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "R, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Path and 3 trees (65)"
        },
        {
          color: Color.Tiny,
          text: "5DT (L, fairy)",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "L to GB",
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
          text: "5DT, BP, balloons (26)",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Bonus GB, exit/enter level",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Vase Room GB (47), W1 (48)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Enter Tiny Temple, bunches (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          text: "Pswim to GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Aztec 2 to Caves",
      steps: [
        {
          color: Color.Chunky,
          text: "Leave Lobby, Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Caves Lobby, Punch left wall"
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
          text: "Guitar GB, enter Caves",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Caves",
      steps: [
        {
          color: Color.Diddy,
          text: "Tag W2, Funky (5), Tag W5"
        },
        {
          color: Color.Diddy,
          text: "Rocket to bonus GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fly to T&S above DK cabin"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 6",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "DK Cabin GB (5)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "BC, leave",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W2 (10), pswim to GB (18)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W2 CS skip (?), Snide (30)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Swim to tag W4 (2)"
        },
        {
          color: Color.Tiny,
          text: "Tag W1/W3 by igloo (5)"
        },
        {
          color: Color.Tiny,
          text: "Tiny 5DI GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Clip for ice dome GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Port to balloon (35), W4"
        },
        {
          color: Color.Tiny,
          text: "Mini to bonus GB, W3 (45)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Lanky 5DI GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "W2 to cabin GB (30)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Waterfall balloon (40)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, balloon (55)",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "5DC GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Balloon, bunches (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "5DC GB (50)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "5DC GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Balloon above cabins (20)"
        },
        {
          color: Color.Diddy,
          text: "Upper 5DC GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          text: "Lower 5DC GB (43)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "W5 for BP (60)",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Ice Tomato, balloon (70)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Float to Beetle Race (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Beetle GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, drop to W1",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "W1 to 5DI GB (50)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Blast course bunches (75)",
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
          text: "W3, balloon (60), W3"
        },
        {
          color: Color.Chunky,
          text: "5DI GB (70)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "BP on igloo",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Clip for ice dome GB",
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
          text: "Cage GB, Rock GB",
          gbs: "x2"
        },
        {
          color: Color.Chunky,
          text: "Japes Lobby, move rock"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Trombone GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Enter Japes"
        }
      ]
    },
    {
      name: "Japes 2",
      steps: [
        {
          color: Color.DK,
          text: "Bush push to Blast bunch (75)",
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
          text: "GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Deathwarp to rock GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "CS to warp up, tag W1/W2"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Funky bunches (30), cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          skew: true,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          skew: true,
          text: "Snide bunch (5), cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Through wall to W4, balloon (15)"
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
          text: "W4, cage GB, W3",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "BP, tag W5, both logs (45)",
          bps: "x"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Stump GB, enter shell",
          gbs: "x1"
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
          text: "W1, bonus bunch (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB, T&S to tag",
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
          text: "W2, enter mountain (24)"
        },
        {
          color: Color.Diddy,
          text: "Backflip clip to switch"
        },
        {
          color: Color.Diddy,
          text: "Minecart GB (49)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Open Lanky's cave, BP (52)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "W2 to mountain GB",
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
          text: "3 trees (45) and bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Shell clip, fairy",
          fairies: "x1"
        },
        {
          color: Color.Chunky,
          text: "Balloons (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Through tunnel to BP",
          bps: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Bonus GB (42)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Painting room GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (75)",
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
          text: "Leave Lobby for GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Enter Forest Lobby"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Shoot mushroom"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Shoot mushroom"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Shoot mushroom"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot mushroom"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Shoot mushroom"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Gone for BC, enter Forest",
          crowns: "x"
        }
      ]
    },
    {
      name: "Forest",
      steps: [
        {
          color: Color.Chunky,
          text: "Tag W2/W4, well GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch shed door, Triangle (15)"
        },
        {
          color: Color.Chunky,
          text: "Beat spider, clip to main room"
        },
        {
          color: Color.Chunky,
          text: "OOB to lever GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "2 kegs, leave to tag W1"
        },
        {
          color: Color.Chunky,
          text: "Reenter for 3rd keg GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Mini to back room"
        },
        {
          color: Color.Tiny,
          text: "Spider GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter level, W1"
        },
        {
          color: Color.Tiny,
          text: "Swim to (27), thorn skew"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Balloon by T&S (37)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          skew: true,
          text: "Tag W2, save apple (29)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Through blue wall"
        },
        {
          color: Color.DK,
          tag: "R",
          skew: true,
          text: "BP, (5), enter shed",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Bonus GB (10)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fairy, exit/enter level",
          fairies: "x1"
        },
        {
          color: Color.DK,
          text: "Pink tunnel to tag W3 (15)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "W3 (6)"
        },
        {
          color: Color.Lanky,
          text: "Pswim to rabbit GB (14)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "W4, rocket to night (20)"
        },
        {
          color: Color.Diddy,
          text: "W4, clockwise to (29)"
        },
        {
          color: Color.Diddy,
          text: "Owl GB (34)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Stump GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Bean, deathwarp"
        },
        {
          color: Color.Tiny,
          text: "W2, 1 mushroom (55), beanstalk GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level for fairy, re-enter, W3 (60)",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Mushroom to BP (70), drop to tag",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to bonus GB (44)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Tag W5, inside BP, out to Blast (47)",
          bps: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Blast course (25)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Down ladder, clockwise to (40)"
        },
        {
          color: Color.DK,
          text: "W5 (50) to BC",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Face room GB (44)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Fall to BP (54), enter mushroom",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Fall to (75), shoot switch",
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
          text: "Bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Shoot switch, balloon (24)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Shoot switch"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Slam/shoot overlap, cannon GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Balloon (34), dark room GB (49)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Light room GB (54)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "W1 (59), attic GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Attic roof for (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Pswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Attic GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fairy",
          fairies: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Balloon (75), moonkick to Snide's",
          medals: "x"
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
      name: "Forest to K. Rool",
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
          tag: "R",
          text: "W5 to fairy cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Rare Banana, W5/W3, enter K. Rool",
          gbs: "x1"
        }
      ]
    },
    krool
  ]
});
