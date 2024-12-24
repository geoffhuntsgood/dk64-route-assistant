import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const glitchless101: Route = mapItemsToRoute({
  name: "Glitchless 101%",
  doc: "https://docs.google.com/document/d/1rheoGwmR9_PbBVcT7OGHuZvm45quH8pZ_repNgXB7Dc",
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
          text: "Cranky, Training, Slam"
        },
        {
          color: Color.DK,
          text: "Leave (don't tag warps)"
        },
        {
          color: Color.DK,
          text: "K. Lumsy, Japes Entrance GB",
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
          text: "Swing to switch (5), 3 coins"
        },
        {
          color: Color.DK,
          text: "Diddy/W1 CS overlap"
        },
        {
          color: Color.DK,
          text: "Tag W3 (10), clear BC text"
        },
        {
          color: Color.DK,
          text: "Buy Coconut"
        },
        {
          color: Color.DK,
          text: "Cannon to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop right to T&S alcove (15)"
        },
        {
          color: Color.DK,
          text: "1st switch, W3 (20)"
        },
        {
          color: Color.DK,
          text: "2nd switch, balloon (30)"
        },
        {
          color: Color.DK,
          text: "Climb vine, climb tree (35)"
        },
        {
          color: Color.DK,
          text: "3rd switch/BC overlap"
        },
        {
          color: Color.DK,
          text: "Cannon to 2nd GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Single (36), drop to tag W4"
        },
        {
          color: Color.DK,
          text: "To Cranky (45), balloon (55)"
        },
        {
          color: Color.DK,
          text: "Rambi (60), 3 coins"
        },
        {
          color: Color.DK,
          text: "Break huts & wall"
        },
        {
          color: Color.DK,
          text: "Slam switch"
        },
        {
          color: Color.DK,
          text: "Buy Blast"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Slam switch (5)"
        },
        {
          color: Color.Diddy,
          text: "W4, water bunches (15), 3 coins"
        },
        {
          color: Color.Diddy,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Buy Peanut"
        },
        {
          color: Color.Diddy,
          text: "Up to Snide, shoot switch"
        },
        {
          color: Color.Diddy,
          text: "3 singles (18), enter mountain"
        },
        {
          color: Color.Diddy,
          text: "Bridge clip, 1 coin, slam switch"
        },
        {
          color: Color.Diddy,
          text: "Leave, mountain GB, balloon (28)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Shoot switch again, singles (32)"
        },
        {
          color: Color.Diddy,
          text: "Re-enter, river (37), cart bunch (42)"
        },
        {
          color: Color.Diddy,
          text: "Balloon (52), bunch (57)"
        },
        {
          color: Color.Diddy,
          text: "Minecart GB (62)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Shoot switch for Lanky"
        },
        {
          color: Color.Diddy,
          text: "BP (65), 3 coins"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, 3 coins"
        },
        {
          color: Color.DK,
          text: "1 coin to Blast GB w/bunches (75)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Tunnel GB, 3 coins, balloon (75)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Enter T&S"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Feed T&S, Key 1"
        },
        {
          color: Color.DK,
          text: "Reset on 2nd 'Donk', enter file"
        }
      ]
    },
    {
      name: "Japes 1 to Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "Tag W4/W1/W5, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1, tag W2/W3, climb to Aztec"
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
          text: "Tag W1, shoot switches"
        },
        {
          color: Color.DK,
          text: "BP, 3 coins"
        },
        {
          color: Color.DK,
          text: "Kick through Llama CS"
        },
        {
          color: Color.DK,
          text: "Buy Bongos"
        },
        {
          color: Color.DK,
          text: "Tag W1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Buy Guitar, balloon (10)"
        },
        {
          color: Color.Diddy,
          text: "Tag W2 (15), 5 coins, open tunnel"
        },
        {
          color: Color.Diddy,
          text: "To Cranky (20), buy Charge & Rocket"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Balloons (20), tag W3, tag far W2/W3"
        },
        {
          color: Color.DK,
          text: "Blast course"
        },
        {
          color: Color.DK,
          text: "Steps (24), balloon (34)"
        },
        {
          color: Color.DK,
          text: "Enter Llama Temple"
        },
        {
          color: Color.DK,
          text: "Left to Bongos (37), coins"
        },
        {
          color: Color.DK,
          text: "Steps (40), slam switch"
        },
        {
          color: Color.DK,
          text: "Up to tag W1 (42)"
        },
        {
          color: Color.DK,
          text: "Free Lanky, GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Tag W2, leave temple"
        },
        {
          color: Color.DK,
          text: "Tag W4, roll through tunnel (62)"
        },
        {
          color: Color.DK,
          text: "Stealthy Snoop GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit/enter"
        },
        {
          color: Color.DK,
          text: "W1, 2 trees (72)"
        },
        {
          color: Color.DK,
          text: "Llama GB (75), 1 coin",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket to BP"
        },
        {
          color: Color.Diddy,
          text: "Enter Tiny Temple"
        },
        {
          color: Color.Diddy,
          text: "Melt ice (38), 1 coin"
        },
        {
          color: Color.Diddy,
          text: "To Tiny room (45), GKONG"
        },
        {
          color: Color.Diddy,
          text: "Tiny GB, coins",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Exit/enter, W1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Oasis coins, tunnel coins, BP"
        },
        {
          color: Color.Tiny,
          text: "To Cranky, buy Mini"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Single, bunch (6), coins"
        },
        {
          color: Color.Lanky,
          text: "Buy Ostand"
        },
        {
          color: Color.Lanky,
          text: "W3/W4, coins, buy Grape"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Buy Feather"
        },
        {
          color: Color.Tiny,
          text: "Tag W5 (5), coins, enter T&S"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Feed T&S, Key 2"
        },
        {
          color: Color.Diddy,
          text: "Gong tower GB (48)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Steps (51), Rocket to sun (56)"
        },
        {
          color: Color.Diddy,
          text: "To 5DT, slam switch, steps (60)"
        },
        {
          color: Color.Diddy,
          text: "Try Again for ring course (65)"
        },
        {
          color: Color.Diddy,
          text: "Feed totem, vulture GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Enter 5DT"
        },
        {
          color: Color.Diddy,
          text: "R, balloon (75), L, GB",
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
          text: "Leave Lobby, W2"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BFI for camera/shockwave"
        },
        {
          color: Color.Tiny,
          text: "Cage GB, W5",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "W1, K. Lumsy RC"
        },
        {
          color: Color.DK,
          text: "Turn in Key 2"
        },
        {
          color: Color.DK,
          text: "Climb to Factory Lobby"
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
          text: "Slam blue switch, tag W1"
        },
        {
          color: Color.DK,
          text: "Down hatch, to storage (15)"
        },
        {
          color: Color.DK,
          text: "Blast w/3 bunches (30)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Free Chunky (5)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W1 coins, use W1 (5), hatch coins"
        },
        {
          color: Color.Chunky,
          text: "Hatch pole singles (20)"
        },
        {
          color: Color.Chunky,
          text: "Exit level to tag"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Enter level, tag W2 (10)"
        },
        {
          color: Color.Lanky,
          text: "W1, Chunky GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Climb boxes (15), 3 coins"
        },
        {
          color: Color.Lanky,
          text: "Cranky & Candy"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Cranky"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Cranky, balloon (40)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Cranky & Candy"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Cranky & Candy"
        },
        {
          color: Color.Tiny,
          text: "Slam blue switch, exit/enter"
        },
        {
          color: Color.Tiny,
          text: "To Testing (10)"
        },
        {
          color: Color.Tiny,
          text: "Mini to Wheel GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Mini out, to Funky"
        },
        {
          color: Color.Tiny,
          text: "Balloon (30), fairy"
        },
        {
          color: Color.Tiny,
          text: "Tag W5, buy Ammo Belt 1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Buy Pineapple"
        },
        {
          color: Color.Chunky,
          text: "BP"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Numbers game GB (45)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Balloon (55), fairy"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Block tower GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Jump to Batty Barrel Bandit GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "To R&D, 1 coin, 2 singles (17)"
        },
        {
          color: Color.Lanky,
          text: "Piano GB, balloon (27)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP (35), tag W2 (40)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Pull lever, BC"
        },
        {
          color: Color.DK,
          text: "Fall to power shed"
        },
        {
          color: Color.DK,
          text: "GB (60), EXIT",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Lobby Bongos GB, ENTER, W2",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "R&D room GB (guitar?)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "3 balloons (50)"
        },
        {
          color: Color.Diddy,
          text: "1 coin, fall to Beaver Bother GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Prod switch, BP, 10 singles (60)"
        },
        {
          color: Color.Diddy,
          text: "Climb prod, tag high W4"
        },
        {
          color: Color.Diddy,
          text: "Spring GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Balloon (50), pipe GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Crouch fall to tag"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Jump to bunch (25), prod switch"
        },
        {
          color: Color.Chunky,
          text: "GB, bunches (40)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Balloon (40), conveyors (60)"
        },
        {
          color: Color.Tiny,
          text: "Krazy Kong Klamour GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "BP, drop to crusher room"
        },
        {
          color: Color.DK,
          text: "Strong Kong to GB (75)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit/enter, W2"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "R&D room GB (50), balloon (60)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level, Punch box"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP, fairy, enter level"
        },
        {
          color: Color.Tiny,
          text: "W2, car race GB (70)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter, W1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Dark room RC, GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Climb to Stash Snatch GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Enter/feed T&S"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Feed T&S, leave"
        },
        {
          color: Color.DK,
          text: "Arcade x2, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Feed T&S, enter/exit"
        },
        {
          color: Color.Tiny,
          text: "Key 3, cage GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "BP, exit level"
        }
      ]
    },
    {
      name: "Factory to Galleon",
      steps: [
        {
          color: Color.Diddy,
          tag: "L",
          text: "Leave Lobby, drop to Snide"
        },
        {
          color: Color.Diddy,
          text: "Batty Barrel Bandit GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BC, drop to Galleon Lobby"
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
          color: Color.DK,
          text: "Open lighthouse"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Tag W1/W2 (7)"
        },
        {
          color: Color.Chunky,
          text: "Cannon to tag W3, planks (10)"
        },
        {
          color: Color.Chunky,
          text: "Punch BC gate, to chests (15)"
        },
        {
          color: Color.Chunky,
          text: "GB, fairy, EXIT/ENTER",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Open gate, cannon game GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Balloon (25), 3 coins"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Open shipyard, tag W5, cactus balloon (10)"
        },
        {
          color: Color.Diddy,
          text: "Guitar, enter 5DS (14)"
        },
        {
          color: Color.Diddy,
          text: "Splish Splash Salvage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "1 bunch (19), leave"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Cactus balloon (35), BP"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Trombone (5), box balloon (15), enter 5DS"
        },
        {
          color: Color.Lanky,
          text: "GB, 3 bunches (30)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter"
        },
        {
          color: Color.Lanky,
          text: "BP, tunnel (35)"
        },
        {
          color: Color.Lanky,
          text: "Enguarde GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Triangle, raise water, W5"
        },
        {
          color: Color.Chunky,
          text: "Tunnel bunches (50), enter 5DS"
        },
        {
          color: Color.Chunky,
          text: "Batty Barrel Bandit GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Enguarde bunch (40), DK star x3"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Bongos, tunnel bunches (15)"
        },
        {
          color: Color.DK,
          text: "Enter 5DS, singles to (20)"
        },
        {
          color: Color.DK,
          text: "Krazy Kong Klamour GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W5, lighthouse GB (40)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Balloon (50), outside balloon (60)"
        },
        {
          color: Color.DK,
          text: "Blast w/3 bunches (75)"
        },
        {
          color: Color.DK,
          text: "Tag W3"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Ship switch, BP"
        },
        {
          color: Color.Diddy,
          text: "Rocket to seal balloon (29)"
        },
        {
          color: Color.Diddy,
          text: "Rocket to top for GB, Guitar",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Bunches (39), W5 to mech fish"
        },
        {
          color: Color.Diddy,
          text: "Mech fish desync for GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Mech fish bunches (59)"
        },
        {
          color: Color.Diddy,
          text: "To treasure room (65), balloon (75)"
        },
        {
          color: Color.Diddy,
          text: "Spring to Stealthy Snoop GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Float to Searchlight Seek GB (45)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Balloon (10), Mini, bunch (15)"
        },
        {
          color: Color.Tiny,
          text: "Pearls, exit/enter"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W1, ship GB (75) (2 Punches)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Leave, W5"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "W4 to BP, W4 back"
        },
        {
          color: Color.DK,
          text: "Seal GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Seal race GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Enter sub, Big Bug Bash GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Leave, Saxophone, enter 5DS"
        },
        {
          color: Color.Tiny,
          text: "GB, fairy, bananas to (31)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W5, to mermaid GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter"
        },
        {
          color: Color.Tiny,
          text: "Cannon bunches (46)"
        },
        {
          color: Color.Tiny,
          text: "Singles to 2DS switch (50)"
        },
        {
          color: Color.Tiny,
          text: "Kremling Kosh GB, 1 bunch (55)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W2, cannon to BP, W3 (65)"
        },
        {
          color: Color.Tiny,
          text: "Balloon (75), turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Tiny,
          text: "W3, enter/feed T&S"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Feed T&S, Key 4"
        },
        {
          color: Color.Lanky,
          text: "Drop to BC, balloons (65)"
        },
        {
          color: Color.Lanky,
          text: "Enter 2DS, GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit level"
        }
      ]
    },
    {
      name: "GALLEON TO JAPES 2",
      steps: [
        {
          color: Color.Lanky,
          text: "Leave Lobby, turn in Key 4"
        },
        {
          color: Color.Lanky,
          text: "W1"
        },
        {
          color: Color.Chunky,
          tag: "R",
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
          text: "W1, back to Mad Maze Maul GB (5)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Enter T&S to tag"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Splish Splash Salvage GB (5)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "To main (8)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Throw rock, go underground"
        },
        {
          color: Color.Chunky,
          text: "Singles, jump to bunch (10)"
        },
        {
          color: Color.Chunky,
          text: "BP, GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon, get rock GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Back tunnel, fairy"
        },
        {
          color: Color.Chunky,
          text: "3 balloons (40), rock (45)"
        },
        {
          color: Color.Chunky,
          text: "Climb vine, Funky bunches, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Fall to W4, balloon (15)"
        },
        {
          color: Color.Lanky,
          text: "Slam switch (20), W4, W2, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "To painting room (23)"
        },
        {
          color: Color.Lanky,
          text: "Pegs (43), Trombone, balloon (53)"
        },
        {
          color: Color.Lanky,
          text: "GB, fairy",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Tunnel to BP, all bananas (65)"
        },
        {
          color: Color.Lanky,
          text: "Balloon (75), Speedy Swing Sortie GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "To Cranky to tag"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Balloon (18), switch (23)"
        },
        {
          color: Color.Tiny,
          text: "W4 to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Hive tunnel for BP, stump GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Log (38), past W5, log (53)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Hunky, trees (75)"
        },
        {
          color: Color.Chunky,
          text: "Minecart Mayhem GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Enter hive (58)"
        },
        {
          color: Color.Tiny,
          text: "Room 1 balloon (68)"
        },
        {
          color: Color.Tiny,
          text: "Hive GB (75), exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Japes 2 to Forest 1",
      steps: [
        {
          color: Color.DK,
          tag: "R",
          text: "Leave Lobby, enter Forest"
        }
      ]
    },
    {
      name: "Forest 1",
      steps: [
        {
          color: Color.DK,
          text: "Pink tunnel (5), bounce to tag"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Jetpac for Rareware Coin"
        },
        {
          color: Color.Diddy,
          text: "Buy Super Simian Slam"
        },
        {
          color: Color.Diddy,
          text: "Rocket to mushroom top (10)"
        },
        {
          color: Color.Diddy,
          text: "Teetering Turtle Trouble GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Tag W5, clockwise to tag (13)"
        },
        {
          color: Color.Lanky,
          text: "Slam switch (5), light room (10)"
        },
        {
          color: Color.Lanky,
          text: "Krazy Kong Klamour GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Switch again, dark room GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Clockwise to switch room"
        },
        {
          color: Color.Chunky,
          text: "Slam/Triangle overlap (5), balloon (15)"
        },
        {
          color: Color.Chunky,
          text: "Face puzzle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Counterclockwise, fall to BP, balloon (25)"
        },
        {
          color: Color.Chunky,
          text: "Fall to Blast pad"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Blast w/2 bunches (15)"
        },
        {
          color: Color.DK,
          text: "Peril Path Panic GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fall, clockwise to (25)"
        },
        {
          color: Color.DK,
          text: "Fall, tag W5 (30)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W5, inside mushroom (30)"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Balloon (30)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Crouch fall to BP, 2 singles (15)"
        },
        {
          color: Color.Diddy,
          text: "Fall, shoot switch"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Shoot switch, balloon (40)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Shoot switch, slam switch (5)"
        },
        {
          color: Color.Tiny,
          text: "Speedy Swing Sortie GB, fall",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot switch, climb to (46), fall"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Shoot/slam CS overlap"
        },
        {
          color: Color.DK,
          text: "Cannons to GB (45), leave",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W5 bunch (50), counterclockwise to tag"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Drop to BC"
        },
        {
          color: Color.Tiny,
          text: "Twirl to BP, balloon (15), drop to tag"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Counterclockwise to (42), shoot switch"
        },
        {
          color: Color.Lanky,
          text: "Yellow tunnel (52)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Tag W4, enter stump (28)"
        },
        {
          color: Color.Tiny,
          text: "Saxophone for GB, bean, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Green tunnel switches"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tag W1/W4, enter well (51)"
        },
        {
          color: Color.Chunky,
          text: "Minecart GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch mill door, Triangle (56)"
        },
        {
          color: Color.Chunky,
          text: "Punch box for Tiny"
        },
        {
          color: Color.Chunky,
          text: "Get keg, leave"
        },
        {
          color: Color.Chunky,
          text: "Tag W1, enter mill, kegs GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Slam switch (55), through door"
        },
        {
          color: Color.DK,
          text: "Balloon (65), 21132"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Leave mill, W1, tag W2 (61)"
        },
        {
          color: Color.Chunky,
          text: "Green tunnel switches"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Clear apple CS"
        },
        {
          color: Color.Tiny,
          text: "Mini, plant bean, beanstalk GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tag W2 (66), buy Homing Ammo"
        },
        {
          color: Color.Chunky,
          text: "Hunky, save apple GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket to night switch (25)"
        },
        {
          color: Color.Diddy,
          text: "W4 (35), clockwise to Guitar (40)"
        },
        {
          color: Color.Diddy,
          text: "3 to Rocket (43), Owl ring course"
        },
        {
          color: Color.Diddy,
          text: "Busy Barrel Barrage GB (48)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "W4/W1, climb rope, slam switch"
        },
        {
          color: Color.Diddy,
          text: "Balloon (58), winch"
        },
        {
          color: Color.Diddy,
          text: "Cross river to barn, enter barn (65)"
        },
        {
          color: Color.Diddy,
          text: "Bunch (70), GB, fairy, bunch (75)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Deathwarp"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Float to mill roof (62)"
        },
        {
          color: Color.Lanky,
          text: "Kill bats for GB, bunch (67)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Leave, 3 roof singles (70), jump to tag"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Mill GB from levers",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Cross river to thorn barn (70)"
        },
        {
          color: Color.DK,
          text: "Slam switch (75), enter barn"
        },
        {
          color: Color.DK,
          text: "Switch (80) kick to bonus"
        },
        {
          color: Color.DK,
          text: "Minecart Mayhem GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Box fairy, leave"
        },
        {
          color: Color.DK,
          text: "Back to BP, enter/feed T&S"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Feed T&S, Key 5"
        },
        {
          color: Color.Tiny,
          text: "Balloon outside T&S (38)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Guitar pad, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Super Secret RC"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Swim to (55), Mini into mill (60)"
        },
        {
          color: Color.Tiny,
          text: "Mill bunches (75)"
        },
        {
          color: Color.Tiny,
          text: "Spider GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Forest 1 to Caves",
      steps: [
        {
          color: Color.Tiny,
          text: "Switch for fairy"
        },
        {
          color: Color.Diddy,
          tag: "L",
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
          text: "Leave Lobby, fall to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W3/W1, turn in Key 5"
        },
        {
          color: Color.Chunky,
          text: "W1/W2, move both rocks"
        },
        {
          color: Color.Chunky,
          text: "Triangle GB, fall to tag",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Trombone for Rocket, enter Caves Lobby"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Punch both ice walls"
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
          text: "Tag W2, cross river to Funky"
        },
        {
          color: Color.Diddy,
          text: "Rocket to Mad Maze Maul GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to tag in back"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "DK Cabin GB (5), BC",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W2, cross river, climb to BP"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Move rock (13), move big rock (24)"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Balloon (15), out to Blast (23)"
        },
        {
          color: Color.DK,
          text: "Blast w/4 bunches (43)"
        },
        {
          color: Color.DK,
          text: "Busy Barrel Barrage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Buy Gone"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Buy Port"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Buy Sprint"
        },
        {
          color: Color.Lanky,
          text: "Fall to tag W4, climb to ice castle"
        },
        {
          color: Color.Lanky,
          text: "Ice tomato GB, balloon (10)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Float to Beetle Race GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Float to BP (35), W2, balloon (45)"
        },
        {
          color: Color.Lanky,
          text: "Lanky Cabin GB (55)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, balloon (10) twirl to cabins"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "5DC balloon (20)"
        },
        {
          color: Color.Diddy,
          text: "Upper 5DC GB (35), fairy",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Lower 5DC GB (41), 2 coins",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "5DC GB (53)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "5DC Searchlight Seek GB (44)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "5DC GB (30), W5",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Drop to Mini, Port to GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Balloon (45), W4, Mini"
        },
        {
          color: Color.Tiny,
          text: "Krazy Kong Klamour GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Mini back out, swim to (55)"
        },
        {
          color: Color.Tiny,
          text: "Kickslide up to Cranky"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to DK star (46)"
        },
        {
          color: Color.Diddy,
          text: "Balloon (56), W4 (66) to BP"
        },
        {
          color: Color.Diddy,
          text: "W4 to 5DI GB, balloon (76)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "5DI, bunch, balloon (68)"
        },
        {
          color: Color.DK,
          text: "Singles to GB (73)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "2 singles outside (75)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "5DI, bunch (60), GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Balloon (70), fairy"
        },
        {
          color: Color.Tiny,
          text: "Tag W3 (75)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "BP, 5DI GB, balloon (54)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Ice shield GB, 1 single (55)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "5DI GB (60), balloon (70)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "EXIT/ENTER"
        },
        {
          color: Color.Lanky,
          text: "Entry path (75)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W2 bunch (60)"
        },
        {
          color: Color.Chunky,
          text: "Gone GB (68)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "To Snide, balloon, singles (80)"
        },
        {
          color: Color.Chunky,
          text: "Enter/feed T&S"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Feed T&S"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Feed T&S"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Feed T&S"
        },
        {
          color: Color.DK,
          text: "Feed T&S, Key 6, exit level"
        }
      ]
    },
    {
      name: "Caves to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Lava GB, deathwarp, leave Lobby",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop, W1, to Castle Lobby"
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
          text: "Cross bridge (5), Blast"
        },
        {
          color: Color.DK,
          text: "Climb to warps, tag W4"
        },
        {
          color: Color.DK,
          text: "Climb to W2 (25), drop right"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "W2, Rocket to cloud (5)"
        },
        {
          color: Color.Diddy,
          text: "Big Bug Bash GB, tag W5",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop to Cranky, by SDS Slam"
        },
        {
          color: Color.Diddy,
          text: "Drop left, balloon (15)"
        },
        {
          color: Color.Diddy,
          text: "Drop to crypt, balloon (25)"
        },
        {
          color: Color.Diddy,
          text: "Enter skull, tag W1, far left"
        },
        {
          color: Color.Diddy,
          text: "Tag far W1 (30), charge buttons"
        },
        {
          color: Color.Diddy,
          text: "Charge 4 again, GB, balloon (40)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Leave, BP"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Bananas toward door (12), enter mausoleum"
        },
        {
          color: Color.Lanky,
          text: "Sprint to GB (jump)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (22), deathwarp"
        },
        {
          color: Color.Lanky,
          text: "To Funky (40), buy Ammo Belt 2/Sniper"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Funky balloon (10), enter mausoleum"
        },
        {
          color: Color.Tiny,
          text: "Damage boost to GB (15), deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Enter skull, tag W3, right"
        },
        {
          color: Color.Chunky,
          text: "Searchlight Seek GB, leave",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter skull, left then right (30)"
        },
        {
          color: Color.DK,
          text: "Balloon (40), minecart GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "EXIT/ENTER"
        },
        {
          color: Color.DK,
          text: "Enter tree, BP, balloon (50)"
        },
        {
          color: Color.DK,
          text: "Drop to raft (55), GB, fairy",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W5, kick across for library switch"
        },
        {
          color: Color.DK,
          text: "Library (70), GB/switch CS overlap",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop right toward ballroom"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Candles (55), balloon (65)"
        },
        {
          color: Color.Diddy,
          text: "Minecart Mayhem GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Left single (16), enter ballroom"
        },
        {
          color: Color.Tiny,
          text: "Port (26), Mini, fairy through wall"
        },
        {
          color: Color.Tiny,
          text: "Car race GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Back Port (36), balloon (46)"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter"
        },
        {
          color: Color.Tiny,
          text: "Climb tree, right, backtrack to BP"
        },
        {
          color: Color.Tiny,
          text: "W5, down to (66), drop inside"
        },
        {
          color: Color.Tiny,
          text: "Up to (70), trash can GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "10 Homing Ammo, leave, W4/W5"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Tower, Beaver Bother GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Drop behind to greenhouse"
        },
        {
          color: Color.Lanky,
          text: "GB (70), BC, leave in back",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Drop to BP, down to tunnel (tag W1?)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Twirl to Teetering Turtle Trouble GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "To dungeon (8), Punch right gates"
        },
        {
          color: Color.Chunky,
          text: "2 balloons (28)"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Face puzzle GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Throne GB (CS overlap?), balloon (75)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (80), Kremling Kosh GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Other balloon (90), deathwarp"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Leave dungeon, BP, up to (45)"
        },
        {
          color: Color.Chunky,
          text: "Climb/drop to tree"
        },
        {
          color: Color.Chunky,
          text: "Bunch, balloon (60), switch from below"
        },
        {
          color: Color.Chunky,
          text: "Beaver Bother GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W4 to shed GB, balloon (70)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "20 Homing Ammo, leave, down to museum"
        },
        {
          color: Color.Chunky,
          text: "Balloon (80), GB (85)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level"
        },
        {
          color: Color.Chunky,
          text: "Move Lobby rock"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Float to Searchlight Seek GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Shoot Kasplat gate"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, enter level"
        },
        {
          color: Color.Diddy,
          text: "W2, enter/feed T&S"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Feed T&S"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Feed T&S"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Feed T&S"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Feed T&S, Key 7, exit level"
        }
      ]
    },
    {
      name: "Castle to Aztec 2",
      steps: [
        {
          color: Color.Lanky,
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.Lanky,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "To K. Lumsy, Sprint GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Turn in Keys 7 & 6"
        },
        {
          color: Color.Lanky,
          text: "W1/W2, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 2",
      steps: [
        {
          color: Color.Lanky,
          text: "W1, enter Tiny Temple"
        },
        {
          color: Color.Lanky,
          text: "4 singles (10), switch (15)"
        },
        {
          color: Color.Lanky,
          text: "Vulture GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "3 singles (10), BC"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter, W1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Enter Tiny Temple"
        },
        {
          color: Color.Tiny,
          text: "Mini to Klaptrap GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "2 balloons (30), leave"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Hunky, open tunnel cage"
        },
        {
          color: Color.Chunky,
          text: "Busy Barrel Barrage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Stairs (6), tag at Snide"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Beetle race GB (35)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter Llama Temple, W1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Fairy, Mini (40)"
        },
        {
          color: Color.Tiny,
          text: "Lava GB, 1 bunch (45)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W2, balloon (55), W1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "To matching game"
        },
        {
          color: Color.Lanky,
          text: "Kill enemies/slam switch CS overlap"
        },
        {
          color: Color.Lanky,
          text: "Matching game GB, vine bunch (23)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Trombone, Teetering Turtle Trouble GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "To Lanky room, 2 balloons (43)"
        },
        {
          color: Color.Lanky,
          text: "W1 bunch (48), W2, BP, W2"
        },
        {
          color: Color.Lanky,
          text: "2 stair singles (50), leave"
        },
        {
          color: Color.Lanky,
          text: "3 trees toward 5DT (65)"
        },
        {
          color: Color.Lanky,
          text: "Enter 5DT, R, balloon (75), R"
        },
        {
          color: Color.Lanky,
          text: "Big Bug Bash GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "5DT path (60), 3 trees (75)"
        },
        {
          color: Color.Tiny,
          text: "Enter 5DT, left, Mini for fairy"
        },
        {
          color: Color.Tiny,
          text: "L, GB, leave",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter 5DT, L, R, GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Enter 5DT, 2 balloons (26)"
        },
        {
          color: Color.Chunky,
          text: "L, BP, R, Kremling Kosh GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter"
        },
        {
          color: Color.Chunky,
          text: "Single (27), vase GB (47)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W1, enter Tiny Temple"
        },
        {
          color: Color.Chunky,
          text: "Bunches (72), Klaptrap GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Aztec 2 to Helm",
      steps: [
        {
          color: Color.Diddy,
          tag: "R",
          text: "Charge Lobby gongs"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Big Bug Bash GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Leave Lobby, W2, Port"
        },
        {
          color: Color.Tiny,
          text: "Saxophone GB, fairy",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Enter Helm Lobby"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "10 Homing Ammo"
        },
        {
          color: Color.Chunky,
          text: "Gone to Kremling Kosh GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "10 more Homing Ammo, enter Helm"
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
          color: Color.Chunky,
          tag: "R",
          text: "Switch, vines"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Mini through pipe"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Pull lever"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket through stars"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Punch DK gate"
        },
        {
          color: Color.DK,
          text: "DK room, medal"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Punch other gates, Chunky room, medal"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Tiny room, medal"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Lanky room, medal"
        },
        {
          color: Color.Diddy,
          text: "Diddy room, medal, BC"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 8, exit level on fairies"
        }
      ]
    },
    {
      name: "Helm to Forest 2",
      steps: [
        {
          color: Color.DK,
          text: "Damage boost to BP, deathwarp"
        },
        {
          color: Color.DK,
          text: "Leave Lobby, fall to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop to Galleon Lobby"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BP, slam switch"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Mini to pipe GB, leave Lobby",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Turn in Keys 8 & 3, reset on ship CS"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W5, small island fairy"
        },
        {
          color: Color.Chunky,
          text: "Hunky, slam X, rock GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "W5, Mini to Rare GB, W5",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W3, Forest Lobby, Gone for BC"
        },
        {
          color: Color.Chunky,
          text: "Enter Forest"
        }
      ]
    },
    {
      name: "Forest 2",
      steps: [
        {
          color: Color.Chunky,
          text: "Bounce to tag"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Cannon to day switch, W4"
        },
        {
          color: Color.Lanky,
          text: "Rabbit Race x2 for GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "BP, W4/W1, to Snide"
        },
        {
          color: Color.Lanky,
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Turn in BPs x8",
          gbs: "x8"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Turn in BPs x8, exit level",
          gbs: "x8"
        }
      ]
    },
    {
      name: "Forest 2 to K. Rool",
      steps: [
        {
          color: Color.Diddy,
          text: "Leave Lobby"
        },
        {
          color: Color.Diddy,
          text: "Rocket to Peril Path Panic GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Down to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop down, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
