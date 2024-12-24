import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const glitchlessAny: Route = mapItemsToRoute({
  name: "Glitchless Any%",
  doc: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzSfCuMvYruNml5sIQm-Z6pPJr3D5TF_KjdvpJVbOlhGBCctCNb-9LVEJ96vnDeA/pubhtml#",
  route: [
    {
      name: "Pre-Start",
      steps: [
        {
          color: Color.Header,
          text: "Story Skip on, delete file 1"
        }
      ]
    },
    {
      name: "Start!",
      steps: [
        {
          color: Color.DK,
          text: "Complete all training barrels"
        },
        {
          color: Color.DK,
          text: "Get Slam and exit to main"
        },
        {
          color: Color.DK,
          text: "DON'T TAG WARPS! K. Lumsy"
        },
        {
          color: Color.DK,
          text: "Japes entrance GB, enter Japes",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Japes 1",
      steps: [
        {
          color: Color.DK,
          text: "Jump to switch, 3 coins"
        },
        {
          color: Color.DK,
          text: "Tag W1 to skip Diddy CS"
        },
        {
          color: Color.DK,
          text: "Tag left W3 (5), climb vine"
        },
        {
          color: Color.DK,
          text: "Trigger BC text, buy Coconut"
        },
        {
          color: Color.DK,
          text: "Cannon to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fall to T&S (10)"
        },
        {
          color: Color.DK,
          text: "Fall to 1st switch, W3 (15)"
        },
        {
          color: Color.DK,
          text: "Balloon (25), 2nd switch, vine"
        },
        {
          color: Color.DK,
          text: "3rd switch (30) (skip CS)"
        },
        {
          color: Color.DK,
          text: "BC, cannon to 2nd GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Snide, 5 singles, balloon (45)"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Tag W4, BP, 3 coins"
        },
        {
          color: Color.Diddy,
          text: "Tag at Cranky"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Balloon (55), Rambi (60), 3 coins"
        },
        {
          color: Color.DK,
          text: "Break Tiny, Diddy & DK huts"
        },
        {
          color: Color.DK,
          text: "Slam switch (65), buy Blast"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Buy Charge, slam switch, W4"
        },
        {
          color: Color.Diddy,
          text: "3 river coins, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Buy Peanut, mountain, 1 coin (clip!)"
        },
        {
          color: Color.Diddy,
          text: "Mountain GB, tag W5",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "BP, Blast course GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Tunnel GB, 2 coins, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Feed T&S, Key 1, exit level"
        }
      ]
    },
    {
      name: "Japes 1 to Aztec",
      steps: [
        {
          color: Color.DK,
          text: "Tag W5/W1, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1, tag W2/W3, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec",
      steps: [
        {
          color: Color.DK,
          text: "BP, 3 coins, sand bunches (10)"
        },
        {
          color: Color.DK,
          text: "Buy Bongos"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Tag W1, Guitar, balloon (10)"
        },
        {
          color: Color.Diddy,
          text: "Enter Tiny Temple, thaw (28), 1 coin"
        },
        {
          color: Color.Diddy,
          text: "6 singles to Tiny (34), GKONG"
        },
        {
          color: Color.Diddy,
          text: "4 coins & Tiny GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Exit/enter"
        },
        {
          color: Color.Diddy,
          text: "W1, open back of Aztec"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "4 oasis coins, BP, buy Mini"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Buy Rocket"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Balloons (30), tag W2, Blast"
        },
        {
          color: Color.DK,
          text: "Llama Temple balloon (43), enter"
        },
        {
          color: Color.DK,
          text: "Bongos (47), coins up to 7"
        },
        {
          color: Color.DK,
          text: "3 singles on ramp, 1 on stair (51)"
        },
        {
          color: Color.DK,
          text: "Free Lanky, left stairs (57), tag W1",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "1 coin, tag far W2, lava GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter, W1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Climb 3 trees, llama GB (75)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, 2 coins, W2 (39)"
        },
        {
          color: Color.Diddy,
          text: "6 singles (45), tower GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "W5 coins, buy Feather, enter T&S"
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
          color: Color.Lanky,
          tag: "R",
          text: "W4 coins, Grape, enter Llama Temple"
        },
        {
          color: Color.Lanky,
          text: "W2, BP, W2, W1, matching game",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "1 coin over lava, exit level"
        }
      ]
    },
    {
      name: "Aztec to Factory",
      steps: [
        {
          color: Color.Lanky,
          text: "W2 to tag"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BFI, camera, cage GB, W5",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Tag W4, K. Lumsy RC, turn in Key 2"
        },
        {
          color: Color.DK,
          text: "Climb, enter Factory"
        }
      ]
    },
    {
      name: "Factory",
      steps: [
        {
          color: Color.DK,
          text: "Tag W1, blue switches (15)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Slope resets to Chunky (wait for GB)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W1 coins, use W1 (10), BP"
        },
        {
          color: Color.Chunky,
          text: "1 coin in testing, go to R&D"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "R&D singles (15), BP, W2 (25), W1"
        },
        {
          color: Color.Lanky,
          text: "Get Chunky GB, climb boxes, 3 coins",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Cranky & Candy moves"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Cranky & Candy moves"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Cranky & Candy moves"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Buy Spring"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Cranky moves, balloon (25)"
        },
        {
          color: Color.DK,
          text: "Blast course w/4 bunches (45)"
        },
        {
          color: Color.DK,
          text: "Slope resets + kick jump to shed"
        },
        {
          color: Color.DK,
          text: "Activate prod GB, 3 bunches (60)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Dark room RC, overlap Punch & Triangle"
        },
        {
          color: Color.Chunky,
          text: "Platform bunches (25), GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Slam prod switch, climb prod, 1 coin"
        },
        {
          color: Color.Chunky,
          text: "Crusher GB, 2 bunches (35), tag W4",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Balloon (40), pipe GB (65)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, prod switch, 10 singles to W4 (10)"
        },
        {
          color: Color.Diddy,
          text: "Spring GB (25)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP, crusher room GB (75)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "EXIT, Lobby Bongos GB, ENTER",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "DK Arcade x2, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.DK,
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
          text: "Feed T&S"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Exit/enter to skip CS, Key 3, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "BP (2 coins?), exit Factory"
        }
      ]
    },
    {
      name: "Factory to Japes 2",
      steps: [
        {
          color: Color.Chunky,
          tag: "R",
          text: "Punch box"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BP, W4"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Enter Japes Lobby, move rock"
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
          text: "W1, BP, hill bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Cage GB, BP, up to 9 coins",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Enter hive, stump GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W5, buy Pineapple, Ammo Belt 1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Underground GB, BP, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Japes 2 to Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "W4, Snide BC"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Spring to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Cage GB, enter Galleon Lobby",
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
          text: "Open gate, 3 coins"
        },
        {
          color: Color.Chunky,
          text: "Cannon game GB, balloon (10)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Cannon, tag W3, singles to T&S (13)"
        },
        {
          color: Color.Chunky,
          text: "BC, chest GB (20), W2 bunch (25)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Open shipyard gate"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Tunnel bunches (15)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Tunnel bunches (40)"
        },
        {
          color: Color.Chunky,
          text: "BP, balloon (50), 5 coins max"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "5DS pad, ship bunch, box balloon (20)"
        },
        {
          color: Color.Lanky,
          text: "5DS GB & bunches (35)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter"
        },
        {
          color: Color.Lanky,
          text: "BP, singles (40), BC balloons (60)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Open lighthouse gate, raise water"
        },
        {
          color: Color.DK,
          text: "Lighthouse GB (45), balloon (55)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Turn in BPs x3, ship switch, balloon (10)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Lighthouse GB, bunches (20), BP",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Enguarde, break chests: R, L, DL, GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Bunches: DL, L, 2 singles, R (77)"
        },
        {
          color: Color.Lanky,
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Turn in BPs x4",
          gbs: "x4"
        },
        {
          color: Color.Chunky,
          text: "Ship GB (75) (2 Punches), 7 coins max",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Snide balloon (10), turn in BPs x4",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W3 (20), BP, singles (23), enter T&S"
        },
        {
          color: Color.Tiny,
          text: "Feed T&S"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Feed T&S"
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
          text: "Feed T&S, Key 4, exit level"
        }
      ]
    },
    {
      name: "Galleon to Forest",
      steps: [
        {
          color: Color.Lanky,
          text: "Cage GB, turn in Key 4, W1",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Cage GB, enter Forest",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Forest",
      steps: [
        {
          color: Color.Chunky,
          text: "W2 bunch"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Night switch, tag W4, pink tunnel (5)"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Buy Super Slam, rocket to top"
        },
        {
          color: Color.Diddy,
          text: "Single (11), tag W5, enter middle"
        },
        {
          color: Color.Diddy,
          text: "BP, 7 singles (18), leave"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "11 singles down, clockwise (16)"
        },
        {
          color: Color.DK,
          text: "Jump down, W5 (26), enter mushroom"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Singles to night door, BP, balloon"
        },
        {
          color: Color.Chunky,
          text: "Continue down until (60), shoot switch"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Shoot switch"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Shoot switch, balloon (10)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Shoot switch"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Shoot/slam to overlap CSs"
        },
        {
          color: Color.DK,
          text: "Cannon to GB (41)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Balloon (20), leave, slam switch (25)"
        },
        {
          color: Color.Lanky,
          text: "Dark room GB, bunches (35)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Face puzzle, bunch, balloon (75)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "BC, twirl to BP, balloon (10)"
        },
        {
          color: Color.Tiny,
          text: "Min 9 coins, tag behind mushroom"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Clockwise to W3 (47), shoot switch"
        },
        {
          color: Color.Lanky,
          text: "Yellow tunnel (57), BP"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Around tree, W4, rocket bunches (48)"
        },
        {
          color: Color.Diddy,
          text: "Snide balloon from mushroom (58)"
        },
        {
          color: Color.Diddy,
          text: "2 singles to attic, attic bunches (70)"
        },
        {
          color: Color.Diddy,
          text: "Attic GB, bunch when exiting (75)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Balloon behind barn (51)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Float to bunches, GB, singles (75)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "4 singles toward thorns (55), BP"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Balloon (20), enter T&S"
        },
        {
          color: Color.Tiny,
          text: "Feed T&S"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Feed T&S"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Feed T&S, Key 5, exit level"
        }
      ]
    },
    {
      name: "Forest to Caves",
      steps: [
        {
          color: Color.Diddy,
          tag: "R",
          text: "Cage GB, tag W3",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Turn in Key 5, Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Enter Caves Lobby, break ice walls"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "BP"
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
          text: "Climb to Funky (5), rocket to tag W5"
        },
        {
          color: Color.Diddy,
          text: "Rocket to waterfall (10), tag in back"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Waterfall balloon (10)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "BP, balloon (10), 5DC GB (30)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Bongo pad bunch (5)"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "5DC balloon (20), top 5DC GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "W5, BP, bunches, castle balloon (40)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "BP"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Move rock (13), move big rock (24)"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Cave balloon (15), singles up to (23)"
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
          text: "Baboon Balloon bunches (55)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to W4 bunch, balloon (50)"
        },
        {
          color: Color.Diddy,
          text: "DK star, get bunches (70)"
        },
        {
          color: Color.Diddy,
          text: "5DI GB, balloon (80)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "W3 bunch (35), tag W1, Port to Kosha"
        },
        {
          color: Color.Tiny,
          text: "Kosha RC, bunches (55)"
        },
        {
          color: Color.Tiny,
          text: "5DI GB, balloon (70)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Singles in water (80)"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "W1 (33), 4 5DI singles (37)"
        },
        {
          color: Color.DK,
          text: "5DI GB, balloon, singles (59)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Single in ring (60), kick to tag"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "BP, ice dome GB (29)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "5DI GB, balloon, singles (70)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter, entry singles (75)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W2 bunch (34), Gone GB (42)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Snide balloon & singles (55), feed T&S"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Exit T&S, turn in BPs x3, feed T&S",
          gbs: "x1"
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
          tag: "L",
          text: "Feed T&S, Key 6, turn in BPs x5",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Caves to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Lava GB, to Castle Lobby, open Kasplat",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "BP, deathwarp"
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
          text: "Singles past W1 to W2 (50), drop right"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Tag W1, W2 to Cranky (10)"
        },
        {
          color: Color.Tiny,
          text: "Buy Super Duper Slam"
        },
        {
          color: Color.Tiny,
          text: "Up to trash can (18), GB, bunch (23)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Singles to ballroom (26)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Ballroom bunches, balloon (25)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Ballroom bunches, balloon (56)"
        },
        {
          color: Color.Tiny,
          text: "Singles to castle top (85)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Drop to shed GB, balloon (10)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Museum GB, balloon, bunch (25)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter"
        },
        {
          color: Color.Chunky,
          text: "Tunnel, singles to (43), BP"
        },
        {
          color: Color.Chunky,
          text: "Enter dungeon, Punch 4 Diddy gates"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Face puzzle GB (55)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Dungeon bunches (45)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Dungeon balloons (20)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Punch for balloons (63), exit dungeon"
        },
        {
          color: Color.Chunky,
          text: "Singles through tunnel (75), W1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Tag W3, W4 to greenhouse GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Drop to BP, to crypt, bananas (80)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Crypt balloon (95)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "BP, balloon, crypt GB, balloon (70)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Exit/enter"
        },
        {
          color: Color.Diddy,
          text: "W2, Rocket to balloon, post bunch (85)"
        },
        {
          color: Color.Diddy,
          text: "Turn in BPs x4",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Tower for balloon (90), turn in BPs x4",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Turn in BPs x3, Cranky for Rareware Coin",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W3, W2, feed T&S"
        },
        {
          color: Color.Tiny,
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
          tag: "L",
          text: "Feed T&S"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Feed T&S, Key 7, exit level"
        }
      ]
    },
    {
      name: "Castle to Helm",
      steps: [
        {
          color: Color.Lanky,
          text: "Deathwarp to tag"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Exit Lobby, turn in Keys 6 & 7"
        },
        {
          color: Color.Tiny,
          text: "Port to Saxophone GB, Helm Lobby",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Chunky,
          text: "Slope resets, switch, vines"
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
          tag: "R",
          text: "DK's room"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Punch other gates, Chunky's room"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Tiny's room"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Lanky's room"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Diddy's room, tag DK"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Key 8, exit level"
        }
      ]
    },
    {
      name: "Helm to K. Rool",
      steps: [
        {
          color: Color.DK,
          text: "Turn in Keys 8 & 3"
        },
        {
          color: Color.DK,
          text: "Reset during ship CS"
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
