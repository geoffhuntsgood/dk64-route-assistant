import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";
import { defaultPreStart, krool } from "../../utils/sections";

export const glitchlessAny: RouteSection[] = [
  defaultPreStart,
  {
    name: "START!",
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
        text: "Japes entrance GB, ENTER Japes",
        gbs: 1
      }
    ]
  },
  {
    name: "JAPES 1",
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
        gbs: 2
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
        gbs: 3
      },
      {
        color: Color.DK,
        text: "Snide, 5 singles, balloon (45)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Tag W4, BP, 3 coins"
      },
      {
        color: Color.Diddy,
        text: "Tag at Cranky"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
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
        tag: Tag.Right,
        text: "Buy Charge, slam switch, W4"
      },
      {
        color: Color.Diddy,
        text: "3 river coins, cage GB",
        gbs: 4
      },
      {
        color: Color.Diddy,
        text: "Buy Peanut, mountain, 1 coin (clip!)"
      },
      {
        color: Color.Diddy,
        text: "Mountain GB, tag W5",
        gbs: 5
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Cage GB",
        gbs: 6
      },
      {
        color: Color.DK,
        text: "BP, Blast course GB (75)",
        gbs: 7
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Tunnel GB, 2 coins, enter T&S",
        gbs: 8
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Feed T&S, Key 1, EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES 1 TO AZTEC",
    steps: [
      {
        color: Color.DK,
        text: "Tag W5/W1, turn in Key 1"
      },
      {
        color: Color.DK,
        text: "W1, tag W2/W3, ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC",
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
        tag: Tag.Right,
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
        gbs: 9
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        text: "W1, open back of Aztec"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "4 oasis coins, BP, buy Mini"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Buy Rocket"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
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
        gbs: 10
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "1 coin, tag far W2, lava GB",
        gbs: 11
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Climb 3 trees, llama GB (75)",
        gbs: 12
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, 2 coins, W2 (39)"
      },
      {
        color: Color.Diddy,
        text: "6 singles (45), tower GB",
        gbs: 13
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "W5 coins, buy Feather, enter T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Feed T&S, Key 2"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W4 coins, Grape, enter Llama Temple"
      },
      {
        color: Color.Lanky,
        text: "W2, BP, W2, W1, matching game",
        gbs: 14
      },
      {
        color: Color.Lanky,
        text: "1 coin over lava, EXIT Aztec"
      }
    ]
  },
  {
    name: "AZTEC TO FACTORY",
    steps: [
      {
        color: Color.Lanky,
        text: "W2 to tag"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BFI, camera, cage GB, W5",
        gbs: 15
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Tag W4, K. Lumsy RC, turn in Key 2"
      },
      {
        color: Color.DK,
        text: "Climb to and ENTER Factory"
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "Tag W1, blue switches (15)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Slope resets to Chunky (wait for GB)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W1 coins, use W1 (10), BP"
      },
      {
        color: Color.Chunky,
        text: "1 coin in testing, go to R&D"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "R&D singles (15), BP, W2 (25), W1"
      },
      {
        color: Color.Lanky,
        text: "Get Chunky GB, climb boxes, 3 coins",
        gbs: 16
      },
      {
        color: Color.Lanky,
        text: "Cranky & Candy moves"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Cranky & Candy moves"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Cranky & Candy moves"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Buy Spring"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
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
        gbs: 17
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Dark room RC, overlap Punch & Triangle"
      },
      {
        color: Color.Chunky,
        text: "Platform bunches (25), GB",
        gbs: 18
      },
      {
        color: Color.Chunky,
        text: "Slam prod switch, climb prod, 1 coin"
      },
      {
        color: Color.Chunky,
        text: "Crusher GB, 2 bunches (35), tag W4",
        gbs: 19
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Balloon (40), pipe GB (65)",
        gbs: 20
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, prod switch, 10 singles to W4 (10)"
      },
      {
        color: Color.Diddy,
        text: "Spring GB (25)",
        gbs: 21
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, crusher room GB (75)",
        gbs: 22
      },
      {
        color: Color.DK,
        text: "EXIT, Lobby Bongos GB, ENTER",
        gbs: 23
      },
      {
        color: Color.DK,
        text: "DK Arcade x2, enter T&S",
        gbs: 24
      },
      {
        color: Color.DK,
        text: "Feed T&S"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Exit/enter to skip CS, Key 3, cage GB",
        gbs: 25
      },
      {
        color: Color.Tiny,
        text: "BP (2 coins?), EXIT Factory"
      },
    ]
  },
  {
    name: "FACTORY TO JAPES 2",
    steps: [
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Punch box"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, W4"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Enter Japes Lobby, move rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Trombone GB, ENTER Japes",
        gbs: 26
      }
    ]
  },
  {
    name: "JAPES 2",
    steps: [
      {
        color: Color.Lanky,
        text: "W1, BP, hill bonus GB",
        gbs: 27
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Cage GB, BP, up to 9 coins",
        gbs: 28
      },
      {
        color: Color.Tiny,
        text: "Enter hive, stump GB",
        gbs: 29
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W5, buy Pineapple, Ammo Belt 1"
      },
      {
        color: Color.Chunky,
        text: "Rock GB",
        gbs: 30
      },
      {
        color: Color.Chunky,
        text: "Underground GB, BP, EXIT Japes",
        gbs: 31
      }
    ]
  },
  {
    name: "JAPES 2 TO GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "W4, Snide BC"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Spring to bonus GB",
        gbs: 32
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Cage GB, enter Galleon Lobby",
        gbs: 33
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BP, ENTER Galleon"
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Open gate, 3 coins"
      },
      {
        color: Color.Chunky,
        text: "Cannon game GB, balloon (10)",
        gbs: 34
      },
      {
        color: Color.Chunky,
        text: "Cannon, tag W3, singles to T&S (13)"
      },
      {
        color: Color.Chunky,
        text: "BC, chest GB (20), W2 bunch (25)",
        gbs: 35
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Open shipyard gate"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Tunnel bunches (15)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Tunnel bunches (40)"
      },
      {
        color: Color.Chunky,
        text: "BP, balloon (50), 5 coins max"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "5DS pad, ship bunch, box balloon (20)"
      },
      {
        color: Color.Lanky,
        text: "5DS GB & bunches (35)",
        gbs: 36
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "BP, singles (40), BC balloons (60)"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Open lighthouse gate, raise water"
      },
      {
        color: Color.DK,
        text: "Lighthouse GB (45), balloon (55)",
        gbs: 37
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Turn in BPs x3, ship switch, balloon (10)",
        gbs: 40
      },
      {
        color: Color.Diddy,
        text: "Lighthouse GB, bunches (20), BP",
        gbs: 41
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Enguarde, break chests: R, L, DL, GB",
        gbs: 42
      },
      {
        color: Color.Lanky,
        text: "Bunches: DL, L, 2 singles, R (77)"
      },
      {
        color: Color.Lanky,
        text: "Turn in BPs x4",
        gbs: 46
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Turn in BPs x4",
        gbs: 50
      },
      {
        color: Color.Chunky,
        text: "Ship GB (75) (2 Punches), 7 coins max",
        gbs: 51
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Snide balloon (10), turn in BPs x4",
        gbs: 55
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
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Feed T&S, Key 4, EXIT Galleon"
      }
    ]
  },
  {
    name: "GALLEON TO FOREST",
    steps: [
      {
        color: Color.Lanky,
        text: "Cage GB, turn in Key 4, W1",
        gbs: 56
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Cage GB, ENTER Forest",
        gbs: 57
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.Chunky,
        text: "W2 bunch"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Night switch, tag W4, pink tunnel (5)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
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
        tag: Tag.Left,
        text: "11 singles down, clockwise (16)"
      },
      {
        color: Color.DK,
        text: "Jump down, W5 (26), enter mushroom"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Singles to night door, BP, balloon"
      },
      {
        color: Color.Chunky,
        text: "Continue down until (60), shoot switch"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Shoot switch"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Shoot switch, balloon (10)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Shoot switch"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Shoot/slam to overlap CSs"
      },
      {
        color: Color.DK,
        text: "Cannon to GB (41)",
        gbs: 58
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Balloon (20), leave, slam switch (25)"
      },
      {
        color: Color.Lanky,
        text: "Dark room GB, bunches (35)",
        gbs: 59
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Face puzzle, bunch, balloon (75)",
        gbs: 60
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BC, twirl to BP, balloon (10)"
      },
      {
        color: Color.Tiny,
        text: "Min 9 coins, tag behind mushroom"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Clockwise to W3 (47), shoot switch"
      },
      {
        color: Color.Lanky,
        text: "Yellow tunnel (57), BP"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
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
        gbs: 61
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Balloon behind barn (51)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Float to bunches, GB, singles (75)",
        gbs: 62
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "4 singles toward thorns (55), BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon (20), enter T&S"
      },
      {
        color: Color.Tiny,
        text: "Feed T&S"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Feed T&S, Key 5, EXIT Forest"
      }
    ]
  },
  {
    name: "FOREST TO CAVES",
    steps: [
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Cage GB, tag W3",
        gbs: 63
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Turn in Key 5, Triangle GB",
        gbs: 64
      },
      {
        color: Color.Chunky,
        text: "Enter Caves Lobby, break ice walls"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Guitar GB, ENTER Caves",
        gbs: 65
      }
    ]
  },
  {
    name: "CAVES",
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
        tag: Tag.Right,
        text: "Waterfall balloon (10)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "BP, balloon (10), 5DC GB (30)",
        gbs: 66
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Bongo pad bunch (5)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "5DC balloon (20), top 5DC GB (35)",
        gbs: 67
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W5, BP, bunches, castle balloon (40)"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Move rock (13), move big rock (24)"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Cave balloon (15), singles up to (23)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Buy Gone"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Buy Port"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Baboon Balloon bunches (55)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to W4 bunch, balloon (50)"
      },
      {
        color: Color.Diddy,
        text: "DK star, get bunches (70)"
      },
      {
        color: Color.Diddy,
        text: "5DI GB, balloon (80)",
        gbs: 68
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "W3 bunch (35), tag W1, Port to Kosha"
      },
      {
        color: Color.Tiny,
        text: "Kosha RC, bunches (55)"
      },
      {
        color: Color.Tiny,
        text: "5DI GB, balloon (70)",
        gbs: 69
      },
      {
        color: Color.Tiny,
        text: "Singles in water (80)"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "W1 (33), 4 5DI singles (37)"
      },
      {
        color: Color.DK,
        text: "5DI GB, balloon, singles (59)",
        gbs: 70
      },
      {
        color: Color.DK,
        text: "Single in ring (60), kick to tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "BP, ice dome GB (29)",
        gbs: 71
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "5DI GB, balloon, singles (70)",
        gbs: 72
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER, entry singles (75)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W2 bunch (34), Gone GB (42)",
        gbs: 73
      },
      {
        color: Color.Chunky,
        text: "Snide balloon & singles (55), feed T&S"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Exit T&S, turn in BPs x3, feed T&S",
        gbs: 76
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Feed T&S"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Feed T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Feed T&S, Key 6, turn in BPs x5",
        gbs: 81
      },
      {
        color: Color.DK,
        text: "EXIT Caves"
      }
    ]
  },
  {
    name: "CAVES TO CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Lava GB, to Castle Lobby, open Kasplat",
        gbs: 83
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "BP, deathwarp"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "ENTER Castle"
      }
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Singles past W1 to W2 (50), drop right"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Tag W1, W2 to Cranky (10)"
      },
      {
        color: Color.Tiny,
        text: "Buy Super Duper Slam"
      },
      {
        color: Color.Tiny,
        text: "Up to trash can (18), GB, bunch (23)",
        gbs: 83
      },
      {
        color: Color.Tiny,
        text: "Singles to ballroom (26)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Ballroom bunches, balloon (25)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Ballroom bunches, balloon (56)"
      },
      {
        color: Color.Tiny,
        text: "Singles to castle top (85)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Drop to shed GB, balloon (10)",
        gbs: 84
      },
      {
        color: Color.Chunky,
        text: "Museum GB, balloon, bunch (25)",
        gbs: 85
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
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
        tag: Tag.Right,
        text: "Face puzzle GB (55)",
        gbs: 86
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Dungeon bunches (45)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Dungeon balloons (20)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Punch for balloons (63), exit dungeon"
      },
      {
        color: Color.Chunky,
        text: "Singles through tunnel (75), W1"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Tag W3, W4 to greenhouse GB (50)",
        gbs: 87
      },
      {
        color: Color.Lanky,
        text: "Drop to BP, to crypt, bananas (80)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Crypt balloon (95)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, balloon, crypt GB, balloon (70)",
        gbs: 88
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        text: "W2, Rocket to balloon, post bunch (85)"
      },
      {
        color: Color.Diddy,
        text: "Turn in BPs x4",
        gbs: 92
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Tower for balloon (90), turn in BPs x4",
        gbs: 96
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Turn in BPs x3, Cranky for Rareware Coin",
        gbs: 99
      },
      {
        color: Color.Chunky,
        text: "W3, W2, feed T&S"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Feed T&S"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Feed T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Feed T&S"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Feed T&S, Key 7, EXIT Castle"
      }
    ]
  },
  {
    name: "CASTLE TO HELM",
    steps: [
      {
        color: Color.Lanky,
        text: "Deathwarp to tag"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Exit Lobby, turn in Keys 6 & 7"
      },
      {
        color: Color.Tiny,
        text: "Port to Saxophone GB, Helm Lobby",
        gbs: 100
      },
      {
        color: Color.Chunky,
        text: "ENTER Helm"
      }
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.Chunky,
        text: "Slope resets, switch, vines"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Mini through pipe"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Pull lever"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Rocket through stars"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch DK gate"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "DK's room"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch other gates, Chunky's room"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Tiny's room"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Lanky's room"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Diddy's room, tag DK"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Key 8, EXIT Helm"
      }
    ]
  },
  {
    name: "HELM TO K. ROOL",
    steps: [
      {
        color: Color.DK,
        text: "Turn in Keys 8 & 3"
      },
      {
        color: Color.DK,
        text: "RESET during CS (ship)"
      },
      {
        color: Color.DK,
        text: "W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
