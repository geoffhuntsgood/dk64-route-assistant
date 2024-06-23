import { RouteSection } from "../classes/RouteSection";
import { Color, Tag } from "../enums";
import { defaultPreStart, krool } from "./sections";

export const allBeginner: RouteSection[] = [
  defaultPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.Header,
        text: "Video links included in this route!"
      },
      {
        color: Color.DK,
        text: "Talk to Cranky, 4 training barrels"
      },
      {
        color: Color.DK,
        text: "Phaseswim to leave training grounds",
        link: "https://youtu.be/XbR_FXuZ1FU?t=13m5s"
      },
      {
        color: Color.DK,
        text: "Swim to Banana Fairy Island"
      },
      {
        color: Color.DK,
        text: "Swim Through Shores for camera",
        link: "https://youtu.be/XbR_FXuZ1FU?t=15m22s"
      },
      {
        color: Color.DK,
        text: "Tag W5, get 3 crystals"
      },
      {
        color: Color.DK,
        text: "Swim back to main isle, climb up"
      },
      {
        color: Color.DK,
        text: "Rainbow Coin underneath Caves"
      },
      {
        color: Color.DK,
        text: "Moonkick to enter Caves early",
        link: "https://youtu.be/XbR_FXuZ1FU?t=38m21s"
      },
      {
        color: Color.DK,
        text: "B. Locker Skip to enter Caves",
        link: "https://youtu.be/XbR_FXuZ1FU?t=43m20s"
      },
      {
        color: Color.DK,
        text: "EXIT Caves, leave Caves lobby"
      },
      {
        color: Color.DK,
        text: "Kick jump right to upper isles"
      },
      {
        color: Color.DK,
        text: "Tag W2 by Aztec"
      },
      {
        color: Color.DK,
        text: "Drop down, swim to K. Lumsy"
      },
      {
        color: Color.DK,
        text: "Rainbow Coin in back of K. Lumsy"
      },
      {
        color: Color.DK,
        text: "Leave, tag W1, collect Japes GB",
        totals: {
          gbs: 1
        }
      },
      {
        color: Color.DK,
        text: "ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES 1",
    steps: [
      {
        color: Color.DK,
        text: "Bush push to main area",
        link: "https://youtu.be/tTkUY-LwSxU?t=15s"
      },
      {
        color: Color.DK,
        text: "Phaseswim in river for cage GB",
        totals: {
          gbs: 2
        }
      },
      {
        color: Color.DK,
        text: "Stay out of bounds, go towards tunnel"
      },
      {
        color: Color.DK,
        text: "Backflip in bounds behind gate"
      },
      {
        color: Color.DK,
        text: "Blueprint, 3 coins",
        totals: {
          bps: 1
        }
      },
      {
        color: Color.DK,
        text: "Leave tunnel, tag W3 (5)"
      },
      {
        color: Color.DK,
        text: "Climb vine for Battle Crown",
        totals: {
          crowns: 1
        }
      },
      {
        color: Color.DK,
        text: "Enter Funky, buy Coconut/Ammo Belt 1"
      },
      {
        color: Color.DK,
        text: "Deny next upgrade, leave"
      },
      {
        color: Color.DK,
        text: "Climb tree outside Funky (10)"
      },
      {
        color: Color.DK,
        text: "Kick jump to Snide balloon (20)"
      },
      {
        color: Color.DK,
        text: "Climb slope to right (23), tag W2"
      },
      {
        color: Color.DK,
        text: "Climb second slope (26), Diddy GB",
        totals: {
          gbs: 3
        }
      },
      {
        color: Color.DK,
        text: "Kick jump to tree by cannon (31)"
      },
      {
        color: Color.DK,
        text: "Kick jump to left tree by vines"
      },
      {
        color: Color.DK,
        text: "Kick jump to Rainbow Coin on slope"
      },
      {
        color: Color.DK,
        text: "Shoot 1st Coconut switch, use W3 (36)"
      },
      {
        color: Color.DK,
        text: "Shoot 2nd Coconut switch, balloon (46)"
      },
      {
        color: Color.DK,
        text: "Climb vine again, shoot 3rd Cococnut switch"
      },
      {
        color: Color.DK,
        text: "Cross vines, cannon to GB",
        totals: {
          gbs: 4
        }
      },
      {
        color: Color.DK,
        text: "Drop to river, tag W4"
      },
      {
        color: Color.DK,
        text: "Follow singles through tunnel (55)"
      },
      {
        color: Color.DK,
        text: "Balloon by Cranky (65)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Enter Cranky's for Simian Slam"
      },
      {
        color: Color.Diddy,
        text: "Re-enter, buy moves up to Simian Spring"
      },
      {
        color: Color.Diddy,
        text: "Use W4, 2 water bunches (10), 3 coins"
      },
      {
        color: Color.Diddy,
        text: "Buy Peanut from Funky"
      },
      {
        color: Color.Diddy,
        text: "Drop to water, phaseswim to tunnel room"
      },
      {
        color: Color.Diddy,
        text: "Jump in bounds, GB, balloon (20)",
        totals: {
          gbs: 5
        }
      },
      {
        color: Color.Diddy,
        text: "Enter T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Ledge clip or moonkick to Army Dillo",
        link: "https://youtu.be/XbR_FXuZ1FU?t=29m32s"
      },
      {
        color: Color.DK,
        text: "RESET on 2nd 'Donk' when collecting Key 1",
        totals: {
          keys: 1
        }
      }
    ]
  },
  {
    name: "JAPES 1 -> AZTEC 1",
    steps: [
      {
        color: Color.Header,
        text: "Turn on Story Skip again, enter file"
      },
      {
        color: Color.DK,
        text: "Tag W3, use W1 to turn in Key 1"
      },
      {
        color: Color.DK,
        text: "W1 back, W2 to ENTER Aztec"
      },
    ]
  },
  {
    name: "AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "Through tunnel, shoot Coconut switches"
      },
      {
        color: Color.DK,
        text: "Blueprint, 3 coins",
        totals: {
          bps: 2
        }
      },
      {
        color: Color.DK,
        text: "Continue in tunnel, Rainbow Coin under tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Tag W1, enter Candy's to buy Guitar"
      },
      {
        color: Color.Diddy,
        text: "Climb tree, Rocketbarrel to Blueprint",
        totals: {
          bps: 3
        }
      },
      {
        color: Color.Diddy,
        text: "Drop down, balloon (10)"
      },
      {
        color: Color.Diddy,
        text: "Enter Tiny Temple"
      },
      {
        color: Color.Diddy,
        text: "Slam switch, climb tongues to Guitar pad (28)"
      },
      {
        color: Color.Diddy,
        text: "Follow water singles until (34)"
      },
      {
        color: Color.Diddy,
        text: "Phaseswim through right wall, swim to GB",
        totals: {
          gbs: 6
        }
      },
      {
        color: Color.Diddy,
        text: "Backflip on O switch, Charge off"
      },
      {
        color: Color.Diddy,
        text: "Repeat to spell KONG"
      },
      {
        color: Color.Diddy,
        text: "Last water single (35)"
      },
      {
        color: Color.Diddy,
        text: "Phaseswim in same spot straight ahead to leave"
      },
      {
        color: Color.Diddy,
        text: "Tag W2 (40), jump on Llama cage for Guitar"
      },
      {
        color: Color.Diddy,
        text: "Follow tunnel singles (45) to Cranky"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "2 balloons (20), buy up to Super Simian Slam"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Buy up to Monkeyport, tag W3, back to Blueprint",
        totals: {
          bps: 4
        }
      },
      {
        color: Color.Tiny,
        text: "Follow singles (10), tag W2, twirl to Funky"
      },
      {
        color: Color.Tiny,
        text: "Buy Feather, enter T&S"
      },
      {
        color: Color.DK,
        text: "Ledge clip/moonkick to get Key 5 early",
        link: "https://youtu.be/icw4KVavWjI?t=8m27s",
        totals: {
          keys: 2
        }
      },
      {
        color: Color.DK,
        text: "Backflip on Funky's, Banana Push",
        link: "https://youtu.be/UzXzScGj_Wo?t=11m46s"
      },
      {
        color: Color.DK,
        text: "Bonus GB (left, then right)",
        totals: {
          gbs: 7
        }
      },
      {
        color: Color.DK,
        text: "Strong Kong, follow bunches out (40)"
      },
      {
        color: Color.DK,
        text: "Turn left, roll clip into 5-Door Temple",
        link: "https://youtu.be/UzXzScGj_Wo?t=13m27s"
      },
      {
        color: Color.DK,
        text: "Left, 2 coins, right, GB",
        totals: {
          gbs: 8
        }
      },
      {
        color: Color.DK,
        text: "Leave temple, do Baboon Blast"
      },
      {
        color: Color.DK,
        text: "Singles on steps (44), balloon behind (54)"
      },
      {
        color: Color.DK,
        text: "Enter Llama Temple"
      },
      {
        color: Color.DK,
        text: "Phaseswim in lava to free Lanky GB",
        link: "https://youtu.be/GvD0qnR8aeE?t=35m7s",
        totals: {
          gbs: 9
        }
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "W1, climb 2 trees (64)"
      },
      {
        color: Color.DK,
        text: "Llama cage GB (67), 1 coin",
        totals: {
          gbs: 10
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "1 coin under tag, enter Tiny Temple"
      },
      {
        color: Color.Tiny,
        text: "Phaseswim on wall left of Tiny entrance"
      },
      {
        color: Color.Tiny,
        text: "Swing around to right to enter Klaptrap room"
      },
      {
        color: Color.Tiny,
        text: "Klaptrap GB, singles when leaving (15)",
        totals: {
          gbs: 11
        }
      },
      {
        color: Color.Tiny,
        text: "W2, W3"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Bunch, 1 single, 1 coin (6)"
      },
      {
        color: Color.Lanky,
        text: "Buy up to Orangstand Sprint"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "W3, singles on stairs (48), jump across"
      },
      {
        color: Color.Diddy,
        text: "Chimpy Charge gongs, get on tower for GB",
        link: "https://youtu.be/UzXzScGj_Wo?t=8m4s",
        totals: {
          gbs: 12
        }
      },
      {
        color: Color.Diddy,
        text: "Drop down, singles on steps (51)"
      },
      {
        color: Color.Diddy,
        text: "Jump in sand, backflip to Rocketbarrel"
      },
      {
        color: Color.Diddy,
        text: "Rocket through totem sun 3 times (56)"
      },
      {
        color: Color.Diddy,
        text: "Fly to 5-Door Temple, slam switch"
      },
      {
        color: Color.Diddy,
        text: "Fall left to singles on stairs (60)"
      },
      {
        color: Color.Diddy,
        text: "Select yes to Try Again"
      },
      {
        color: Color.Diddy,
        text: "Vulture race, 1 bunch on Llama Temple (65)"
      },
      {
        color: Color.Diddy,
        text: "Feed center totem 4 times"
      },
      {
        color: Color.Diddy,
        text: "Collect vulture race GB",
        totals: {
          gbs: 13
        }
      },
      {
        color: Color.Diddy,
        text: "Fly to Diddy's 5-Door Temple"
      },
      {
        color: Color.Diddy,
        text: "Right, balloon (75), left, GB",
        totals: {
          gbs: 14,
          medals: 1
        }
      },
      {
        color: Color.Diddy,
        text: "EXIT"
      }
    ]
  },
  {
    name: "AZTEC 1 -> FACTORY",
    steps: [
      {
        color: Color.Diddy,
        text: "Chimpy Charge Lobby gongs"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Twirl to bonus GB",
        totals: {
          gbs: 15
        }
      },
      {
        color: Color.Tiny,
        text: "Leave, W2, W1, turn in Key 5"
      },
      {
        color: Color.Tiny,
        text: "Monkeyport in back of Krem Isle"
      },
      {
        color: Color.Tiny,
        text: "Fairy, drop in front for Factory Lobby",
        totals: {
          fairies: 1
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "ENTER Factory"
      },
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.Lanky,
        text: "Tag W2 (5)"
      },
      {
        color: Color.Lanky,
        text: "Robot push out of bounds",
        link: "https://www.youtube.com/watch?v=fbu0dv-oNVg"
      },
      {
        color: Color.Lanky,
        text: "Open Tiny cage out of bounds",
        link: "https://youtu.be/TcgSkGHXE-c?t=584"
      },
      {
        color: Color.Lanky,
        text: "Continue OOB to pipe GB",
        totals: {
          gbs: 16
        }
      },
      {
        color: Color.Lanky,
        text: "Orangstand down pipe (30)"
      },
      {
        color: Color.Lanky,
        text: "Jump across to tag high W4"
      },
      {
        color: Color.Lanky,
        text: "Drop down, tunnel to storage"
      },
      {
        color: Color.Lanky,
        text: "Free Chunky GB (35)",
        totals: {
          gbs: 17
        }
      },
      {
        color: Color.Lanky,
        text: "Climb boxes, avoid coins (40)"
      },
      {
        color: Color.Lanky,
        text: "Buy Trombone from Candy"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Buy Saxophone"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Buy up to Gorilla Gone, then Triangle"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Buy Bongos, balloon (10)"
      },
      {
        color: Color.DK,
        text: "Slam blue switch below boxes"
      },
      {
        color: Color.DK,
        text: "Baboon Blast, 3 bunches (25)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Punch dark room gate, Rainbow Coin"
      },
      {
        color: Color.Chunky,
        text: "Punch switch, play Triangle before cutscene"
      },
      {
        color: Color.Chunky,
        text: "3 platform bunches (15)"
      },
      {
        color: Color.Chunky,
        text: "Fall through left side of box for GB",
        totals: {
          gbs: 18
        }
      },
      {
        color: Color.Chunky,
        text: "W1 bunch (20), pole to bonus GB",
        totals: {
          gbs: 19
        }
      },
      {
        color: Color.Chunky,
        text: "Enter T&S by Arcade"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Enter Mad Jack, leave to clear cutscene"
      },
      {
        color: Color.DK,
        text: "Leave T&S, Arcade x2, enter T&S",
        totals: {
          gbs: 20,
          nCoin: true
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Mad Jack for Key 3 (jumps: 9, 11, 12, 13, 15)",
        totals: {
          keys: 3
        }
      },
      {
        color: Color.Tiny,
        text: "Bunch outside pipe (5), cage GB",
        totals: {
          gbs: 21
        }
      },
      {
        color: Color.Tiny,
        text: "Down pole to Blueprint",
        totals: {
          bps: 5
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Right, follow singles to testing (15)"
      },
      {
        color: Color.Tiny,
        text: "Backflip up to Mini Monkey"
      },
      {
        color: Color.Tiny,
        text: "Dart board GB (25), back through pipe",
        totals: {
          gbs: 22
        }
      },
      {
        color: Color.Tiny,
        text: "Jump/twirl toward Funky"
      },
      {
        color: Color.Tiny,
        text: "Balloon (35), fairy",
        totals: {
          fairies: 2
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Buy Grape, Homing Ammo"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Buy Pineapple, Ammo Belt 2"
      },
      {
        color: Color.Chunky,
        text: "Back to testing for Blueprint",
        totals: {
          bps: 6
        }
      },
      {
        color: Color.Chunky,
        text: "Climb boxes to tag"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Singles through upper tunnel (30)"
      },
      {
        color: Color.DK,
        text: "Numbers game GB, balloon (40)",
        totals: {
          gbs: 23
        }
      },
      {
        color: Color.DK,
        text: "Fairy, back to tag",
        totals: {
          fairies: 3
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Simian Spring up left side of block tower (20)"
      },
      {
        color: Color.Diddy,
        text: "Bonus GB, jump left to tag",
        totals: {
          gbs: 24
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Jump to bonus GB above R&D door",
        totals: {
          gbs: 25
        }
      },
      {
        color: Color.Lanky,
        text: "Go to R&D, 3 singles on right, tag W2 (48)"
      },
      {
        color: Color.Lanky,
        text: "Ladder Push to Battle Crown",
        link: "https://www.youtube.com/watch?v=0Zg1P7mvxYQ&feature=youtu.be",
        totals: {
          crowns: 2
        }
      },
      {
        color: Color.Lanky,
        text: "Blueprint, singles to piano game (54)",
        totals: {
          bps: 7
        }
      },
      {
        color: Color.Lanky,
        text: "Balloon (64), piano GB: CBCDECA",
        totals: {
          gbs: 26
        }
      },
      {
        color: Color.Lanky,
        text: "Remaining single to tag (65)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Tunnel singles to car race GB (45)",
        totals: {
          gbs: 27
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT to tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "ENTER Factory, left to hatch balloon (30)"
      },
      {
        color: Color.Chunky,
        text: "Back to W1 bunch (35), W2"
      },
      {
        color: Color.Chunky,
        text: "Toy monster GB, balloon (45), singles (55)",
        totals: {
          gbs: 28
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Balloon above chute (50)"
      },
      {
        color: Color.DK,
        text: "Drop, enter power shed"
      },
      {
        color: Color.DK,
        text: "Pull lever, 2 bunches (60), GB",
        totals: {
          gbs: 29
        }
      },
      {
        color: Color.DK,
        text: "W1, W2"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Left ladder to R&D room, 3 balloons (50)"
      },
      {
        color: Color.Diddy,
        text: "Charge switches: 3124, 4231, 1342"
      },
      {
        color: Color.Diddy,
        text: "Collect GB, then fall down chute",
        totals: {
          gbs: 30
        }
      },
      {
        color: Color.Diddy,
        text: "Slam switch for bonus GB",
        totals: {
          gbs: 31
        }
      },
      {
        color: Color.Diddy,
        text: "Go to prod, slam switch in back right"
      },
      {
        color: Color.Diddy,
        text: "Blueprint, singles until (60), W4",
        totals: {
          bps: 8
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Jump off for bunch (60), slam prod switch"
      },
      {
        color: Color.Chunky,
        text: "W4 to GB, spin for bunches (75)",
        totals: {
          gbs: 32,
          medals: 2
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon below ledge (55)"
      },
      {
        color: Color.Tiny,
        text: "Climb conveyors (75) to bonus GB",
        totals: {
          gbs: 33,
          medals: 3
        }
      },
      {
        color: Color.Tiny,
        text: "Tag under conveyors"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Balloon (75)",
        totals: {
          medals: 4
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Cross cylinders, Spring to GB (75)",
        totals: {
          gbs: 34,
          medals: 5
        }
      },
      {
        color: Color.Diddy,
        text: "Tag under conveyors"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Cross cylinders to Blueprint",
        totals: {
          bps: 9
        }
      },
      {
        color: Color.DK,
        text: "Drop to crusher room"
      },
      {
        color: Color.DK,
        text: "Strong Kong for 3 bunches (75), GB",
        totals: {
          gbs: 35,
          medals: 6
        }
      },
      {
        color: Color.DK,
        text: "EXIT"
      }
    ]
  },
  {
    name: "FACTORY -> GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "Pull lever for Bongos GB",
        totals: {
          gbs: 36
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Punch box"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Blueprint, fairy",
        totals: {
          bps: 10,
          fairies: 4
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Leave Lobby, drop down left by Snide"
      },
      {
        color: Color.Diddy,
        text: "Spring to bonus GB",
        totals: {
          gbs: 37
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Battle Crown under rock, leave, drop right",
        totals: {
          crowns: 3
        }
      },
      {
        color: Color.Chunky,
        text: "Phaseswim right of Galleon Lobby to enter"
      },
      {
        color: Color.Chunky,
        text: "Blueprint, ENTER Galleon",
        totals: {
          bps: 11
        }
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        text: "Straight for 2 singles (2), tag W2 (7)"
      },
      {
        color: Color.Chunky,
        text: "Cannon to tag W3, singles on planks (10)"
      },
      {
        color: Color.Chunky,
        text: "Drop left, Punch gate for Battle Crown",
        totals: {
          crowns: 4
        }
      },
      {
        color: Color.Chunky,
        text: "Across to tunnel (15)"
      },
      {
        color: Color.Chunky,
        text: "Punch right chest for GB",
        totals: {
          gbs: 38
        }
      },
      {
        color: Color.Chunky,
        text: "Punch left chest for fairy",
        totals: {
          fairies: 5
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER when fairy starts to disappear"
      },
      {
        color: Color.Chunky,
        text: "Switches on right, jump on platform at water peak"
      },
      {
        color: Color.Chunky,
        text: "Shoot Kasplat to move it"
      },
      {
        color: Color.Chunky,
        text: "Cannon game GB, balloon (25)",
        totals: {
          gbs: 39
        }
      },
      {
        color: Color.Chunky,
        text: "Phaseswim left of entry slope"
      },
      {
        color: Color.Chunky,
        text: "Swing right, swim ahead to lighthouse"
      },
      {
        color: Color.Chunky,
        text: "Tag underwater"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Swim up to switch, raise water"
      },
      {
        color: Color.DK,
        text: "Baboon Blast, 3 bunches (15)"
      },
      {
        color: Color.DK,
        text: "Enter/exit/enter lighthouse for cutscene skip"
      },
      {
        color: Color.DK,
        text: "Balloon down from 2nd bunch platform"
      },
      {
        color: Color.DK,
        text: "Pull lever at top (45), drop behind to GB",
        totals: {
          gbs: 40
        }
      },
      {
        color: Color.DK,
        text: "Leave, tag w5, lighthouse balloon (55)"
      },
      {
        color: Color.DK,
        text: "Swim to Snide, turn in Blueprints x3",
        totals: {
          gbs: 43
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Balloon (10), turn in Blueprints x3",
        totals: {
          gbs: 46
        }
      },
      {
        color: Color.Tiny,
        text: "W3 to Blueprint (20)",
        totals: {
          bps: 12
        }
      },
      {
        color: Color.Tiny,
        text: "Cross planks to enter T&S"
      },
      {
        color: Color.Tiny,
        text: "Ledge clip into Pufftoss for Key 4",
        link: "https://youtu.be/25w6CnhRkeY?t=14m49s",
        totals: {
          keys: 4
        }
      },
      {
        color: Color.Header,
        text: "Start phases counterclockwise, turn at -"
      },
      {
        color: Color.Header,
        text: "Phase 1: 1-3-1"
      },
      {
        color: Color.Header,
        text: "Phase 2: 5"
      },
      {
        color: Color.Header,
        text: "Phase 3: 1-2-2"
      },
      {
        color: Color.Header,
        text: "Phase 4: 1-2-1-1"
      },
      {
        color: Color.Header,
        text: "Phase 5: 2-2-1"
      },
      {
        color: Color.Tiny,
        text: "Backflip out of bounds above T&S",
        link: "https://youtu.be/t93PFMmXmlE?t=1h9m"
      },
      {
        color: Color.Tiny,
        text: "Turn left, straight towards cactus tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Cactus balloon (10)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Cactus balloon (35), Blueprint",
        totals: {
          bps: 13
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Swim down, B swim below sub hole to clip in"
      },
      {
        color: Color.Tiny,
        text: "Sub bonus GB",
        totals: {
          gbs: 47
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Cannon room bunches (35)"
      },
      {
        color: Color.Tiny,
        text: "Phaseswim on right wall to tag W2",
        link: "https://youtu.be/eDDLzmORNXM?t=1h42m5s"
      },
      {
        color: Color.Tiny,
        text: "Phaseswim on gate 5 of 5-Door Ship"
      },
      {
        color: Color.Tiny,
        text: "5 singles, 2 bunches (50), GB",
        totals: {
          gbs: 48
        }
      },
      {
        color: Color.Tiny,
        text: "Fairy, EXIT/ENTER on fairy disappear",
        totals: {
          fairies: 6
        }
      },
      {
        color: Color.Tiny,
        text: "Backflip onto W2 holding Z for noclip",
        link: "https://www.twitch.tv/videos/106345736"
      },
      {
        color: Color.Tiny,
        text: "Upper 2-Door Ship entrance, bonus GB",
        totals: {
          gbs: 49
        }
      },
      {
        color: Color.Tiny,
        text: "2 bunches when leaving (60), tag at 5DS"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Phaseswim 45 degrees down/right in top 5DS gate"
      },
      {
        color: Color.Diddy,
        text: "Phaseswim to Diddy's room, bonus GB",
        totals: {
          gbs: 50
        }
      },
      {
        color: Color.Diddy,
        text: "2 bunches when leaving (20)"
      },
      {
        color: Color.Diddy,
        text: "W5, Rocket to balloon above seal (30)"
      },
      {
        color: Color.Diddy,
        text: "Land on ship, slam switch"
      },
      {
        color: Color.Diddy,
        text: "Jump off for Blueprint",
        totals: {
          bps: 14
        }
      },
      {
        color: Color.Diddy,
        text: "Rocket to lighthouse top for GB",
        totals: {
          gbs: 51
        }
      },
      {
        color: Color.Diddy,
        text: "Guitar, 2 bunches (40), W5 to mech fish GB",
        link: "https://youtu.be/3e2koLLglVM",
        totals: {
          gbs: 52
        }
      },
      {
        color: Color.Diddy,
        text: "Bunches under mech fish (60)"
      },
      {
        color: Color.Diddy,
        text: "Treasure room tunnel (65)"
      },
      {
        color: Color.Diddy,
        text: "Phaseswim to treasure room, balloon (75)",
        totals: {
          medals: 7
        }
      },
      {
        color: Color.Diddy,
        text: "Spring to bonus GB",
        totals: {
          gbs: 53
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Bunch and balloon (75)",
        totals: {
          medals: 8
        }
      },
      {
        color: Color.Lanky,
        text: "Float to bonus GB (5)",
        totals: {
          gbs: 54
        }
      },
      {
        color: Color.Lanky,
        text: "Phaseswim into chest keyhole for 5 pearls"
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "Entry singles (10), 2 balloons by crown (30)"
      },
      {
        color: Color.Lanky,
        text: "W2 noclip, lower 2-Door Ship entrance"
      },
      {
        color: Color.Lanky,
        text: "Singles (35), phaseswim on right for GB",
        totals: {
          gbs: 55
        }
      },
      {
        color: Color.Lanky,
        text: "Bunch (40), phaseswim through chest to leave"
      },
      {
        color: Color.Lanky,
        text: "Get onto box for balloon (50)"
      },
      {
        color: Color.Lanky,
        text: "Phaseswim through gate 4 of 5-Door Ship"
      },
      {
        color: Color.Lanky,
        text: "3 bunches (65), GB",
        totals: {
          gbs: 56
        }
      },
      {
        color: Color.Lanky,
        text: "Leave, bunch under Enguarde box (70)"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tunnel bunches at bottom (50)"
      },
      {
        color: Color.Chunky,
        text: "Phaseswim 45 degrees down/right in top of 5DS"
      },
      {
        color: Color.Chunky,
        text: "Bonus GB",
        totals: {
          gbs: 57
        }
      },
      {
        color: Color.Chunky,
        text: "Leave, W5, jump from platform onto ship"
      },
      {
        color: Color.Chunky,
        text: "Slam back of ship, all bunches (75)",
        totals: {
          medals: 9
        }
      },
      {
        color: Color.Chunky,
        text: "Punch barrels for GB",
        totals: {
          gbs: 58
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "W2 noclip, enter front left room of 5-Door Ship"
      },
      {
        color: Color.DK,
        text: "5 singles (60), bonus GB",
        totals: {
          gbs: 59
        }
      },
      {
        color: Color.DK,
        text: "Phaseswim back wall to leave"
      },
      {
        color: Color.DK,
        text: "Tunnel bunches on bottom (75)",
        totals: {
          medals: 10
        }
      },
      {
        color: Color.DK,
        text: "W4 for Blueprint, W4 back",
        totals: {
          bps: 15
        }
      },
      {
        color: Color.DK,
        text: "Collect Seal GB",
        totals: {
          gbs: 60
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Phaseswim under seal race entry"
      },
      {
        color: Color.Lanky,
        text: "Accelerate in back right ship for race GB",
        totals: {
          gbs: 61
        }
      },
      {
        color: Color.Lanky,
        text: "Exit race, then EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        text: "Cannon room for Blueprint",
        totals: {
          bps: 16
        }
      },
      {
        color: Color.Lanky,
        text: "Phaseswim to lighthouse"
      },
      {
        color: Color.Lanky,
        text: "Phaseswim in front of chest below (75)",
        totals: {
          medals: 11
        }
      },
      {
        color: Color.Lanky,
        text: "Get Enguarde, swim to bottom for chest GB",
        totals: {
          gbs: 62
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Mini Monkey to mermaid"
      },
      {
        color: Color.Tiny,
        text: "Get GB before 2nd cutscene starts",
        totals: {
          gbs: 63
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT"
      }
    ]
  },
  {
    name: "GALLEON -> HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Phaseswim in Lobby pipe for GB",
        totals: {
          gbs: 64
        }
      },
      {
        color: Color.Tiny,
        text: "Phaseswim by torch to void out"
      },
      {
        color: Color.Tiny,
        text: "Leave Lobby, phaseswim on left wall"
      },
      {
        color: Color.Tiny,
        text: "Monkeyport on back of Krem Isle"
      },
      {
        color: Color.Tiny,
        text: "Saxophone GB",
        totals: {
          gbs: 65
        }
      },
      {
        color: Color.Tiny,
        text: "Helm Early",
        link: "https://youtu.be/XbR_FXuZ1FU?t=1h30m51s"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "10 Homing Ammo, Gone to bonus GB",
        totals: {
          gbs: 66
        }
      },
      {
        color: Color.Chunky,
        text: "Deathwarp"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "10 more Homing Ammo"
      },
      {
        color: Color.Tiny,
        text: "Backflip in corner, ENTER Helm out of bounds",
        link: "https://youtu.be/XbR_FXuZ1FU?t=1h36m21s"
      }
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.Tiny,
        text: "Kickslide up hills",
        link: "https://youtu.be/XbR_FXuZ1FU?t=1h38m25s"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Shoot switch, vines over lava"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Mini Monkey through pipe to main room"
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
        text: "Punch only DK's gate (bottom level)"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "DK's room, get medal",
        totals: {
          medals: 12
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Climb steps, punch Tiny and Lanky gates"
      },
      {
        color: Color.Chunky,
        text: "Drop left, Chunky's room, get medal",
        totals: {
          medals: 13
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Climb steps, Tiny's room, get medal",
        totals: {
          medals: 14
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Climb steps, Lanky's room, get medal",
        totals: {
          medals: 15
        }
      },
      {
        color: Color.Lanky,
        text: "Lanky maze: Left, then right"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to Diddy's room, get medal",
        totals: {
          medals: 16
        }
      },
      {
        color: Color.Diddy,
        text: "Rocket to top of Blast-o-Matic for Crown",
        totals: {
          crowns: 5
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Climb steps, tag W1 for safety"
      },
      {
        color: Color.DK,
        text: "Terminal clip 2 out of bounds",
        link: "https://youtu.be/XbR_FXuZ1FU?t=1h44m35s"
      },
      {
        color: Color.DK,
        text: "Get Key 8 facing window",
        totals: {
          keys: 5
        }
      },
      {
        color: Color.DK,
        text: "Fairies, EXIT on fairy disappearing",
        totals: {
          fairies: 8
        }
      }
    ]
  },
  {
    name: "HELM -> CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Orange damage boost to Blueprint",
        totals: {
          bps: 17
        }
      },
      {
        color: Color.DK,
        text: "Deathwarp, leave Lobby"
      },
      {
        color: Color.DK,
        text: "Drop right under W4 to cage GB",
        totals: {
          gbs: 67
        }
      },
      {
        color: Color.DK,
        text: "Cannon to Castle Lobby, open Blueprint gate"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Blueprint, deathwarp",
        totals: {
          bps: 18
        }
      },
      {
        color: Color.DK,
        text: "B. Locker Skip to ENTER Castle"
      },
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Cross bridge (5), swim into tree",
        link: "https://youtu.be/f5mtya4XvZ8?t=2m45s"
      },
      {
        color: Color.DK,
        text: "Shoot switch, Blueprint, balloon (15)",
        totals: {
          bps: 19
        }
      },
      {
        color: Color.DK,
        text: "Corner roll clip to fairy",
        totals: {
          fairies: 9
        }
      },
      {
        color: Color.DK,
        text: "Kick jump to GB",
        totals: {
          gbs: 68
        }
      },
      {
        color: Color.DK,
        text: "Jump over raft (20), leave"
      },
      {
        color: Color.DK,
        text: "Climb to tag W4, cross drawbridge"
      },
      {
        color: Color.DK,
        text: "Singles up to W2 (40)"
      },
      {
        color: Color.DK,
        text: "Min 7 coins, drop right to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "W2, rocket to cloud at top (5)"
      },
      {
        color: Color.Diddy,
        text: "Tower bonus GB, drop to tag",
        totals: {
          gbs: 69
        }
      },
      {
        color: Color.DK,
        text: "Tag W5, library clip left of Snide",
        link: "https://youtu.be/ERraNh9SJn0?t=9632"
      },
      {
        color: Color.DK,
        text: "1 bunch inside (45)"
      },
      {
        color: Color.DK,
        text: "Shoot switch/grab GB at same time",
        totals: {
          gbs: 70
        }
      },
      {
        color: Color.DK,
        text: "Leave, kick down left to Cranky"
      },
      {
        color: Color.DK,
        text: "5,000 in Jetpac for Rareware Coin",
        totals: {
          rCoin: true
        }
      },
      {
        color: Color.DK,
        text: "Buy Super Duper Simian Slam"
      },
      {
        color: Color.DK,
        text: "Leave, drop down right"
      },
      {
        color: Color.DK,
        text: "Singles down to tag W1 (55), enter tunnel"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Twirl to bonus GB, back to tag",
        totals: {
          gbs: 71
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Singles until (15), Blueprint",
        totals: {
          bps: 20
        }
      },
      {
        color: Color.Chunky,
        text: "Backtrack, enter dungeon"
      },
      {
        color: Color.Chunky,
        text: "2 balloons (35) through gates @ Diddy switch"
      },
      {
        color: Color.Chunky,
        text: "Punch 2 gates next to tag for Diddy bunches"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Slam switch, face puzzle GB (60)",
        totals: {
          gbs: 72
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Slam switch, balloon (10), Trombone"
      },
      {
        color: Color.Lanky,
        text: "Float to bonus GB, 2nd balloon (20)",
        totals: {
          gbs: 73
        }
      },
      {
        color: Color.Lanky,
        text: "Deathwarp"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Alcove bunches (15), slam switch"
      },
      {
        color: Color.Diddy,
        text: "Balloon (25), moontail to chains for GB",
        link: "https://youtu.be/XbR_FXuZ1FU?t=4109",
        totals: {
          gbs: 74
        }
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        text: "Climb up to use W5, fall down to left"
      },
      {
        color: Color.Diddy,
        text: "Enter ballroom, kill enemies with Guitar"
      },
      {
        color: Color.Diddy,
        text: "Rocket to candles (40), balloon (50)"
      },
      {
        color: Color.Diddy,
        text: "Bonus GB, leave ballroom",
        totals: {
          gbs: 75
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "2 singles on sides (2), enter ballroom"
      },
      {
        color: Color.Tiny,
        text: "Monkeyport (12), Mini Monkey"
      },
      {
        color: Color.Tiny,
        text: "Fairy picture against mini barn right wall",
        totals: {
          fairies: 10
        }
      },
      {
        color: Color.Tiny,
        text: "Car race GB, Monkeyport to balloon (32)",
        totals: {
          gbs: 76
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Phaseswim on left wall of small pool"
      },
      {
        color: Color.Tiny,
        text: "Hang left, swim around to Blueprint",
        totals: {
          bps: 21
        }
      },
      {
        color: Color.Tiny,
        text: "Climb to use W5, down until (51)"
      },
      {
        color: Color.Tiny,
        text: "Jump down inner side, up to trash can (55)"
      },
      {
        color: Color.Tiny,
        text: "Enter trash can, Saxophone for GB (60)",
        totals: {
          gbs: 77
        }
      },
      {
        color: Color.Tiny,
        text: "10 Homing Ammo, leave, enter T&S"
      },
      {
        color: Color.Tiny,
        text: "Ledge clip or moonkick as DK for Key 7",
        totals: {
          keys: 6
        }
      },
      {
        color: Color.Lanky,
        text: "W4/W5, enter tower, defeat enemies"
      },
      {
        color: Color.Lanky,
        text: "Shoot switches w/homing ammo"
      },
      {
        color: Color.Lanky,
        text: "Float up for bonus GB, float again",
        totals: {
          gbs: 78
        }
      },
      {
        color: Color.Lanky,
        text: "Leave, drop behind near tag"
      },
      {
        color: Color.Lanky,
        text: "Enter greenhouse, maze to GB (50)",
        totals: {
          gbs: 79
        }
      },
      {
        color: Color.Lanky,
        text: "Battle Crown, leave through back door",
        totals: {
          crowns: 6
        }
      },
      {
        color: Color.Lanky,
        text: "Drop down right to Blueprint",
        totals: {
          bps: 22
        }
      },
      {
        color: Color.Lanky,
        text: "Clockwise around, drop to crypt"
      },
      {
        color: Color.Lanky,
        text: "Enter Lanky's room (55)"
      },
      {
        color: Color.Lanky,
        text: "Sprint left, Sprint jump across to GB",
        totals: {
          gbs: 80
        }
      },
      {
        color: Color.Lanky,
        text: "Balloon (65), deathwarp"
      },
      {
        color: Color.Lanky,
        text: "(75) on way to tag",
        totals: {
          medals: 17
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Balloon by Funky (70), enter Tiny's room"
      },
      {
        color: Color.Tiny,
        text: "Twirl across (75), goo hands for GB",
        totals: {
          gbs: 81,
          medals: 18
        }
      },
      {
        color: Color.Tiny,
        text: "Deathwarp, back to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Blueprint, balloon (60), enter Diddy's room",
        totals: {
          bps: 23
        }
      },
      {
        color: Color.Diddy,
        text: "Tag W1, left, Charge switches for GB",
        totals: {
          gbs: 82
        }
      },
      {
        color: Color.Diddy,
        text: "Jump/shoot ballon through left coffin (70)"
      },
      {
        color: Color.Diddy,
        text: "W1 back, leave (75)",
        totals: {
          medals: 19
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Enter DK's room, tag W2, left then right"
      },
      {
        color: Color.DK,
        text: "Balloon (70), levers (top left, right, bottom left)"
      },
      {
        color: Color.DK,
        text: "Minecart GB, W2 to leave (75)",
        totals: {
          gbs: 83,
          medals: 20
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Enter Chunky's room, go right"
      },
      {
        color: Color.Chunky,
        text: "Punch front right coffin for bonus GB",
        totals: {
          gbs: 84
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Swim into tree (like DK), Punch wall (40)"
      },
      {
        color: Color.Chunky,
        text: "Balloon (50), go up to right side of gate"
      },
      {
        color: Color.Chunky,
        text: "Shoot up to switch, bonus GB",
        totals: {
          gbs: 85
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Climb tree/jump to W4, enter shed"
      },
      {
        color: Color.Chunky,
        text: "Play Triangle, Punch box, GB",
        totals: {
          gbs: 86
        }
      },
      {
        color: Color.Chunky,
        text: "Balloon (60), 20 Homing Ammo, leave"
      },
      {
        color: Color.Chunky,
        text: "Walk down to museum, Punch shields"
      },
      {
        color: Color.Chunky,
        text: "Balloon (70), move rock to table (75)",
        totals: {
          medals: 21
        }
      },
      {
        color: Color.Chunky,
        text: "Museum GB, EXIT",
        totals: {
          gbs: 87
        }
      }
    ]
  },
  {
    name: "CASTLE -> AZTEC 2",
    steps: [
      {
        color: Color.Chunky,
        text: "Move Lobby rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Float to bonus GB, leave Lobby",
        totals: {
          gbs: 88
        }
      },
      {
        color: Color.Lanky,
        text: "Swim behind K. Lumsy, get cage GB",
        totals: {
          gbs: 89
        }
      },
      {
        color: Color.Lanky,
        text: "Enter K. Lumsy, left to Sprint barrel"
      },
      {
        color: Color.Lanky,
        text: "Turn in Keys 8, 3 on way to switch"
      },
      {
        color: Color.Lanky,
        text: "Press switch, cage GB",
        totals: {
          gbs: 90
        }
      },
      {
        color: Color.Lanky,
        text: "Turn in Key 4, leave, W1"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W2, move first rock, drop to tag"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "W2, Trombone, ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 2",
    steps: [
      {
        color: Color.Lanky,
        text: "W1, enter Tiny Temple, swim to back"
      },
      {
        color: Color.Lanky,
        text: "Vulture GB with homing ammo",
        totals: {
          gbs: 91
        }
      },
      {
        color: Color.Lanky,
        text: "Battle Crown, singles to (19)",
        totals: {
          crowns: 7
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tunnel to Hunky Chunky, clip into cage",
        link: "https://www.youtube.com/watch?v=hYpvlVNUi6A&feature=youtu.be"
      },
      {
        color: Color.Chunky,
        text: "Bonus GB, continue to singles on Snide steps (6)",
        totals: {
          gbs: 92
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Mini Monkey (20) to beetle race GB",
        totals: {
          gbs: 93
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "3 singles on stairs (70), enter Llama Temple"
      },
      {
        color: Color.DK,
        text: "Tag W2, climb to tag W1 (75)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Fairy, down to Trombone pad, bonus GB",
        totals: {
          gbs: 94,
          fairies: 11
        }
      },
      {
        color: Color.Lanky,
        text: "Gun skew to balloons by Lanky's cage (39)",
        link: "https://youtu.be/UzXzScGj_Wo?t=16m51s"
      }
    ]
  },
  {
    name: "AZTEC 2 SKEW SECTION",
    steps: [
      {
        color: Color.Lanky,
        text: "Walk/backflip in bounds towards entrance"
      },
      {
        color: Color.Lanky,
        text: "Singles on stairs (42), W1 (47)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Skew through pipe (25), lava GB, bunches (35)",
        totals: {
          gbs: 95
        }
      },
      {
        color: Color.Tiny,
        text: "W2 back, balloon over lava (45), W1 to tag"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Skew through door for matching game GB",
        link: "https://youtu.be/UzXzScGj_Wo?t=19m45s",
        totals: {
          gbs: 96
        }
      },
      {
        color: Color.Lanky,
        text: "Skew through back left corner to Blueprint",
        totals: {
          bps: 24
        }
      },
      {
        color: Color.Lanky,
        text: "W2, leave (50)"
      }
    ]
  },
  {
    name: "AZTEC 2 (CONT)",
    steps: [
      {
        color: Color.Lanky,
        text: "3 trees toward 5-Door Temple (65)"
      },
      {
        color: Color.Lanky,
        text: "Enter 5DT, balloon (75)",
        totals: {
          medals: 22
        }
      },
      {
        color: Color.Lanky,
        text: "Right to GB, back to tag",
        totals: {
          gbs: 97
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Path singles (50), 3 trees (65)"
      },
      {
        color: Color.Tiny,
        text: "Enter 5DT, fairy on left",
        totals: {
          fairies: 12
        }
      },
      {
        color: Color.Tiny,
        text: "Left for GB, leave, 2 trees (75), enter T&S",
        totals: {
          gbs: 98,
          medals: 23
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Key 2, enter 5DT, 2 balloons (26)"
      },
      {
        color: Color.Chunky,
        text: "Left for Blueprint, switch, right to bonus GB",
        totals: {
          gbs: 99,
          bps: 25
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Shoot switches, move vases for GB (47)",
        totals: {
          gbs: 100
        }
      },
      {
        color: Color.Chunky,
        text: "W1 (48), enter Tiny Temple"
      },
      {
        color: Color.Chunky,
        text: "Kill barrel Kremlings, get bunches (73)"
      },
      {
        color: Color.Chunky,
        text: "Phaseswim to Triangle pad door (75)",
        totals: {
          medals: 24
        }
      },
      {
        color: Color.Chunky,
        text: "Phaseswim through door, swim to GB",
        totals: {
          gbs: 101
        }
      },
      {
        color: Color.Chunky,
        text: "Kill Klaptraps normally if missed. EXIT"
      }
    ]
  },
  {
    name: "AZTEC 2 -> CAVES",
    steps: [
      {
        color: Color.Chunky,
        text: "Leave Lobby, move 2nd rock, Triangle GB",
        totals: {
          gbs: 102
        }
      },
      {
        color: Color.Chunky,
        text: "Jump aerial to Caves Lobby, Punch ice walls"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Orange damage boost to lava GB",
        link: "https://youtu.be/0MFpugQPM88?t=17m7s",
        totals: {
          gbs: 103
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Blueprint in left alcove",
        totals: {
          bps: 26
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to Guitar GB, ENTER Caves",
        totals: {
          gbs: 104
        }
      }
    ]
  },
  {
    name: "CAVES",
    steps: [
      {
        color: Color.Diddy,
        text: "Tag W2, jump across river, climb left"
      },
      {
        color: Color.Diddy,
        text: "Singles past Funky (5), Rocket to tag W5"
      },
      {
        color: Color.Diddy,
        text: "Drop, Rocket to waterfall bonus GB (10)",
        totals: {
          gbs: 105
        }
      },
      {
        color: Color.Diddy,
        text: "Rocket to T&S above DK cabin"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Ledge clip/moonkick to Key 6",
        totals: {
          keys: 7
        }
      },
      {
        color: Color.DK,
        text: "Fall to enter DK cabin"
      },
      {
        color: Color.DK,
        text: "Puzzle or moonkick to GB, Battle Crown",
        link: "https://youtu.be/0MFpugQPM88?t=10m26s",
        totals: {
          gbs: 106,
          crowns: 8
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W2 (10), phaseswim to Gone GB (18)",
        totals: {
          gbs: 107
        }
      },
      {
        color: Color.Chunky,
        text: "W2 Kosha cutscene cancel (if not yet)"
      },
      {
        color: Color.Chunky,
        text: "Right, Punch Snide wall, singles, balloon (30)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "2 river singles (2), jump to tag W4"
      },
      {
        color: Color.Tiny,
        text: "3 singles (5) on way to igloo"
      },
      {
        color: Color.Tiny,
        text: "Tag W1/W3, phaseswim in Tiny's 5-Door Igloo",
        link: "http://i.imgur.com/bmHUp9g.png"
      },
      {
        color: Color.Tiny,
        text: "Balloon (20), GB, fairy",
        totals: {
          gbs: 108,
          fairies: 13
        }
      },
      {
        color: Color.Tiny,
        text: "Kickslide/twirl from igloo top to stalagmite"
      },
      {
        color: Color.Tiny,
        text: "Jump to ice shield, clip for GB (25)",
        link: "https://www.youtube.com/watch?v=JS8O2AMHiRA",
        totals: {
          gbs: 109
        }
      },
      {
        color: Color.Tiny,
        text: "Monkeyport to balloon (35), W4"
      },
      {
        color: Color.Tiny,
        text: "Mini Monkey to bonus GB (40), W3 to tag (45)",
        totals: {
          gbs: 110
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Phaseswim into Lanky's 5-Door Igloo",
        link: "http://i.imgur.com/bmHUp9g.png"
      },
      {
        color: Color.Lanky,
        text: "Backflip up to balloon (15), GB",
        totals: {
          gbs: 111
        }
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER, entry singles (20), W2"
      },
      {
        color: Color.Lanky,
        text: "Float up to Trombone pad to enter cabin (25)"
      },
      {
        color: Color.Lanky,
        text: "Kill Kosha, Sprint switch for GB (30)",
        totals: {
          gbs: 112
        }
      },
      {
        color: Color.Lanky,
        text: "Leave, waterfall balloon (40)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Blueprint, balloon (55), twirl across to cabins",
        totals: {
          bps: 27
        }
      },
      {
        color: Color.Tiny,
        text: "Enter Tiny's 5-Door Cabin, kill Klaptraps"
      },
      {
        color: Color.Tiny,
        text: "Balloon, bunches (75), GB",
        totals: {
          gbs: 113,
          medals: 25
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Enter Chunky's 5-Door Cabin"
      },
      {
        color: Color.Chunky,
        text: "Avoid lights, slam 3 targets, bonus GB (50)",
        totals: {
          gbs: 114
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Enter DK's 5-Door Cabin (10)"
      },
      {
        color: Color.DK,
        text: "Shoot Zingers with Homing Ammo"
      },
      {
        color: Color.DK,
        text: "Bunch (15), GB",
        totals: {
          gbs: 115
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Balloon above cabins (20)"
      },
      {
        color: Color.Diddy,
        text: "Enter upper Diddy 5DC"
      },
      {
        color: Color.Diddy,
        text: "Guitar to kill Koshas, rocket to candles (35)"
      },
      {
        color: Color.Diddy,
        text: "GB, fairy, leave, enter lower Diddy 5DC",
        totals: {
          gbs: 116,
          fairies: 14
        }
      },
      {
        color: Color.Diddy,
        text: "Kill enemies for GB (42)",
        totals: {
          gbs: 117
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W5 to Blueprint (60), climb to ice castle",
        totals: {
          bps: 28
        }
      },
      {
        color: Color.Lanky,
        text: "Slam switch to enter castle, balloon (70)"
      },
      {
        color: Color.Lanky,
        text: "Ice tomato tile GB, leave",
        totals: {
          gbs: 118
        }
      },
      {
        color: Color.Lanky,
        text: "Slam other switch, float to beetle race GB (75)",
        totals: {
          gbs: 119,
          medals: 26
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Blueprint, drop right to W1 (25)",
        totals: {
          bps: 29
        }
      },
      {
        color: Color.DK,
        text: "Singles around igloo (30)"
      },
      {
        color: Color.DK,
        text: "Phaseswim into DK's 5DI",
        link: "http://i.imgur.com/bmHUp9g.png"
      },
      {
        color: Color.DK,
        text: "Door frame bunch (35), balloon (45)"
      },
      {
        color: Color.DK,
        text: "Kick jump in maze for singles (50), GB",
        totals: {
          gbs: 120
        }
      },
      {
        color: Color.DK,
        text: "If you die, play Bongos ASAP on reenter, then walk"
      },
      {
        color: Color.DK,
        text: "Deathwarp, leave, swim/climb up to Baboon Blast"
      },
      {
        color: Color.DK,
        text: "4 Blast bunches (75), bonus GB, tag by Cranky",
        totals: {
          gbs: 121,
          medals: 27
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Rocket to balloon, W4 bunch (57)"
      },
      {
        color: Color.Diddy,
        text: "W4 for singles (65), Blueprint, W4 back",
        totals: {
          bps: 30
        }
      },
      {
        color: Color.Diddy,
        text: "Phaseswim into Diddy's 5DI, balloon (75), GB",
        link: "http://i.imgur.com/bmHUp9g.png",
        totals: {
          gbs: 122,
          medals: 28
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "W3 to balloon (60), W3 back"
      },
      {
        color: Color.Chunky,
        text: "Phaseswim into Chunky's 5DI, balloon (70), GB",
        link: "http://i.imgur.com/bmHUp9g.png",
        totals: {
          gbs: 123
        }
      },
      {
        color: Color.Chunky,
        text: "Blueprint on igloo",
        totals: {
          bps: 31
        }
      },
      {
        color: Color.Chunky,
        text: "Clip into ice shield (75), GB",
        link: "https://youtu.be/ERraNh9SJn0?t=14079",
        totals: {
          gbs: 124,
          medals: 29
        }
      },
      {
        color: Color.Chunky,
        text: "EXIT"
      }
    ]
  },
  {
    name: "CAVES -> JAPES 2",
    steps: [
      {
        color: Color.Chunky,
        text: "Swim to small island, fairy, Hunky Chunky",
        totals: {
          fairies: 15
        }
      },
      {
        color: Color.Chunky,
        text: "Slam big X, Swim Through Shores for cage GB",
        totals: {
          gbs: 125
        }
      },
      {
        color: Color.Chunky,
        text: "Swim to rock GB, enter Japes Lobby",
        totals: {
          gbs: 126
        }
      },
      {
        color: Color.Chunky,
        text: "Move Lobby rock"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Trombone GB",
        totals: {
          gbs: 127
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES 2",
    steps: [
      {
        color: Color.DK,
        text: "Bush Push again to main area"
      },
      {
        color: Color.DK,
        text: "Baboon Blast GB w/2 bunches (75), back to tag",
        totals: {
          gbs: 128,
          medals: 30
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Phaseswim in river to underground (under rock)"
      },
      {
        color: Color.Chunky,
        text: "Follow path to Blueprint, GB (15)",
        totals: {
          gbs: 129,
          bps: 32
        }
      },
      {
        color: Color.Chunky,
        text: "Deathwarp, cannon, throw rock for GB",
        totals: {
          gbs: 130
        }
      },
      {
        color: Color.Chunky,
        text: "Gun skew in water"
      }
    ]
  },
  {
    name: "JAPES 2 SKEW SECTION",
    steps: [
      {
        color: Color.Chunky,
        text: "Use Diddy cutscene to warp up, tag W1"
      },
      {
        color: Color.Chunky,
        text: "W2, 2 Funky roof bunches (25), cage GB",
        totals: {
          gbs: 131
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Drop to cage GB by Funky, up to tag",
        totals: {
          gbs: 132
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Snide bunch (5), drop past W2 for cage GB",
        totals: {
          gbs: 133
        }
      },
      {
        color: Color.Lanky,
        text: "Walk through left wall, fall into tunnel"
      },
      {
        color: Color.Lanky,
        text: "W4, balloon by back left hut (15)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Balloon by front left hut, skew in hut (15)"
      },
      {
        color: Color.Tiny,
        text: "W4, through wall for cage GB",
        totals: {
          gbs: 134
        }
      },
      {
        color: Color.Tiny,
        text: "W3, tunnel to Blueprint, skew to hive area",
        totals: {
          bps: 33
        }
      },
      {
        color: Color.Tiny,
        text: "Tag W5, skew through both logs (45)"
      },
      {
        color: Color.Tiny,
        text: "Skew for stump GB, skew into shell (50)",
        totals: {
          gbs: 135
        }
      }
    ]
  },
  {
    name: "JAPES 2 (CONT)",
    steps: [
      {
        color: Color.Tiny,
        text: "Left to balloon (60)"
      },
      {
        color: Color.Tiny,
        text: "Torch clip and across to GB (68)",
        link: "https://www.youtube.com/watch?v=eDDLzmORNXM&feature=youtu.be&t=5h1m28s",
        totals: {
          gbs: 136
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "W1, back tunnel to bonus GB (75), enter T&S",
        totals: {
          gbs: 137,
          medals: 31
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Leave T&S, bonus GB (20), back to main tag",
        totals: {
          gbs: 138
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "W2, shoot switch, clockwise for 4 (24)"
      },
      {
        color: Color.Diddy,
        text: "Backflip to enter mountain"
      },
      {
        color: Color.Diddy,
        text: "Backflip onto bridge, slam switch"
      },
      {
        color: Color.Diddy,
        text: "Water singles (29) to back room"
      },
      {
        color: Color.Diddy,
        text: "Charge gate, charge 'LO' button"
      },
      {
        color: Color.Diddy,
        text: "Balloon behind conveyor gate (39)"
      },
      {
        color: Color.Diddy,
        text: "Climb conveyors to minecart GB (49)",
        totals: {
          gbs: 139
        }
      },
      {
        color: Color.Diddy,
        text: "Shoot slope switch for Lanky"
      },
      {
        color: Color.Diddy,
        text: "Blueprint in tunnel (52), 2 trees (62)",
        totals: {
          bps: 34
        }
      },
      {
        color: Color.Diddy,
        text: "W2, switch, counterclockwise for (65)"
      },
      {
        color: Color.Diddy,
        text: "Backflip to mountain top, GB, balloon (75)",
        totals: {
          gbs: 140,
          medals: 32
        }
      },
      {
        color: Color.Diddy,
        text: "W5 to tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Hunky Chunky for bonus GB, 4 trees (45)",
        totals: {
          gbs: 141
        }
      },
      {
        color: Color.Chunky,
        text: "Jump aerial clip through shell to tunnel",
        link: "https://youtu.be/F0t4A9vVTG0?t=19787"
      },
      {
        color: Color.Chunky,
        text: "Jump at left corner of Rambi wall to clip"
      },
      {
        color: Color.Chunky,
        text: "Pond fairy, 3 balloons (75), tag by Cranky",
        totals: {
          medals: 33,
          fairies: 16
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Back in tunnel to Blueprint (21)",
        totals: {
          bps: 35
        }
      },
      {
        color: Color.Lanky,
        text: "Bananas up right slope, balloon (39)"
      },
      {
        color: Color.Lanky,
        text: "Left slope to bonus GB (42)",
        totals: {
          gbs: 142
        }
      },
      {
        color: Color.Lanky,
        text: "Through tunnel, vines, slope to painting room"
      },
      {
        color: Color.Lanky,
        text: "All bananas, balloon (75)",
        totals: {
          medals: 34
        }
      },
      {
        color: Color.Lanky,
        text: "Clip or kill Zingers for GB",
        link: "https://youtu.be/cWLJs3mwU_8?t=27",
        totals: {
          gbs: 143
        }
      },
      {
        color: Color.Lanky,
        text: "Fairy, EXIT on fairy disappear",
        totals: {
          fairies: 17
        }
      }
    ]
  },
  {
    name: "JAPES 2 -> FOREST",
    steps: [
      {
        color: Color.Lanky,
        text: "Leave Lobby, cannon to Forest Lobby"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Shoot ceiling mushroom"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Shoot ceiling mushroom"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Shoot ceiling mushroom"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Shoot ceiling mushroom"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Shoot ceiling mushroom"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Gone pad for Battle Crown, ENTER Forest",
        totals: {
          crowns: 9
        }
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.Chunky,
        text: "Tag W2 (5), enter well in back (10)"
      },
      {
        color: Color.Chunky,
        text: "Minecart GB",
        totals: {
          gbs: 144
        }
      },
      {
        color: Color.Chunky,
        text: "Punch cracked mill door in center"
      },
      {
        color: Color.Chunky,
        text: "Ledge clip on lowest box left of spider web"
      },
      {
        color: Color.Chunky,
        text: "Enter spider boss underneath, kill w/pineapple"
      },
      {
        color: Color.Chunky,
        text: "Leave GB for later, Punch box, Triangle (15)"
      },
      {
        color: Color.Chunky,
        text: "Carry keg out, around front, tag W1, inside"
      },
      {
        color: Color.Chunky,
        text: "Place keg on spike wheel"
      },
      {
        color: Color.Chunky,
        text: "Walk into wall right of large box pile"
      },
      {
        color: Color.Chunky,
        text: "Navigate around left to conveyor GB",
        totals: {
          gbs: 145
        }
      },
      {
        color: Color.Chunky,
        text: "Place other 2 kegs on spike wheel for GB",
        totals: {
          gbs: 146
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Climb boxes, Mini Monkey to back room (10)"
      },
      {
        color: Color.Tiny,
        text: "Same ledge clip to spider for GB (55)",
        totals: {
          gbs: 147
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "W1, 12 singles in river (27)"
      },
      {
        color: Color.Tiny,
        text: "Phaseswim near thorns, take damage to skew",
        link: "https://youtu.be/icw4KVavWjI?t=14m51s"
      }
    ]
  },
  {
    name: "FOREST SKEW SECTION",
    steps: [
      {
        color: Color.Tiny,
        text: "Balloon in back (37), through wall left of T&S"
      },
      {
        color: Color.Tiny,
        text: "Backflip in bounds to tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tag W2 (20), Hunky Chunky"
      },
      {
        color: Color.Chunky,
        text: "Singles around apple (29)"
      },
      {
        color: Color.Chunky,
        text: "Backflip/slam to kill tomatoes"
      },
      {
        color: Color.Chunky,
        text: "Carry apple through gates, place left, GB",
        totals: {
          gbs: 148
        }
      },
      {
        color: Color.Chunky,
        text: "Through blue wall behind to tag"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Blueprint, through thorns for bunch (5)",
        totals: {
          bps: 36
        }
      },
      {
        color: Color.DK,
        text: "Roll in back of shed to enter"
      }
    ]
  },
  {
    name: "FOREST (CONT)",
    steps: [
      {
        color: Color.DK,
        text: "Slam lower box, slam switch (10)"
      },
      {
        color: Color.DK,
        text: "Climb ladder, kick jump to bonus GB",
        totals: {
          gbs: 149
        }
      },
      {
        color: Color.DK,
        text: "Climb ladder again, slam box for fairy",
        totals: {
          fairies: 18
        }
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "Right to pink tunnel (15), tag behind mushroom"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Cross river, Rocket to bonus GB at top (10)",
        totals: {
          gbs: 150
        }
      },
      {
        color: Color.Diddy,
        text: "Tag W5 on top, clockwise to tag (13)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Orangstand to slam top switch (5)"
      },
      {
        color: Color.Lanky,
        text: "Back to dark room GB, 2 bunches (15)",
        totals: {
          gbs: 151
        }
      },
      {
        color: Color.Lanky,
        text: "Top switch again, opposite side"
      },
      {
        color: Color.Lanky,
        text: "Bunch (20), bonus GB, counterclockwise to tag",
        totals: {
          gbs: 152
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Continue counterclockwise, enter switch room"
      },
      {
        color: Color.Chunky,
        text: "Face puzzle GB, balloon (44)",
        link: "https://i.imgur.com/JQewhI6.png",
        totals: {
          gbs: 153
        }
      },
      {
        color: Color.Chunky,
        text: "Counterclocwise, drop to Blueprint, balloon (54)",
        totals: {
          bps: 37
        }
      },
      {
        color: Color.Chunky,
        text: "Jump down to tag"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Baboon Blast bonus GB (25)",
        totals: {
          gbs: 154
        }
      },
      {
        color: Color.DK,
        text: "Drop down, clockwise until (40)"
      },
      {
        color: Color.DK,
        text: "Drop to tag W5 (45), tag"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "W5, enter mushroom (59), tag inside"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Balloon (30)"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Drop 2 levels to Blueprint, 2 singles (15)",
        totals: {
          bps: 38
        }
      },
      {
        color: Color.Diddy,
        text: "Drop to bottom, shoot switch"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Shoot switch, balloon (40)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Shoot switch, slam switch (42)"
      },
      {
        color: Color.Tiny,
        text: "Climb for bonus GB, drop back down",
        totals: {
          gbs: 155
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Follow bananas up until (75), drop back down",
        totals: {
          medals: 35
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Shoot switch, then slam switch to overlap"
      },
      {
        color: Color.DK,
        text: "Cannons up to GB (60)",
        totals: {
          gbs: 156
        }
      },
      {
        color: Color.DK,
        text: "Outside, counterclockwise to tag (65)"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Drop to Battle Crown",
        totals: {
          crowns: 10
        }
      },
      {
        color: Color.Tiny,
        text: "Jump/twirl down to Blueprint, balloon (52)",
        totals: {
          bps: 39
        }
      },
      {
        color: Color.Tiny,
        text: "Drop to tag behind mushroom"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Shoot switch over yellow tunnel"
      },
      {
        color: Color.Lanky,
        text: "Go through and left to rabbit race (58)"
      },
      {
        color: Color.Lanky,
        text: "Rabbit race x2 for GB",
        totals: {
          gbs: 157
        }
      },
      {
        color: Color.Lanky,
        text: "Blueprint, tag W4",
        totals: {
          bps: 40
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Singles around mound in back (60)"
      },
      {
        color: Color.Tiny,
        text: "Mini Monkey, Saxophone to enter (65)"
      },
      {
        color: Color.Tiny,
        text: "Saxophone to kill Klaptraps for GB",
        totals: {
          gbs: 158
        }
      },
      {
        color: Color.Tiny,
        text: "Get bean, deathwarp"
      },
      {
        color: Color.Tiny,
        text: "Tag W3 (70), W2, climb 1 mushroom (75)",
        totals: {
          medals: 36
        }
      },
      {
        color: Color.Tiny,
        text: "Plant bean for GB",
        totals: {
          gbs: 159
        }
      },
      {
        color: Color.Tiny,
        text: "EXIT, shoot switch for fairy, ENTER",
        totals: {
          fairies: 19
        }
      },
      {
        color: Color.Tiny,
        text: "Bounce on mushroom to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Rocket to hit night switch (25)"
      },
      {
        color: Color.Diddy,
        text: "W4 (35), clockwise to Guitar pad (40)"
      },
      {
        color: Color.Diddy,
        text: "Rocket to Owl race for bonus GB (45)",
        totals: {
          gbs: 160
        }
      },
      {
        color: Color.Diddy,
        text: "Drop to tag (47)"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "W4/W1 (63), float to enter attic (73)"
      },
      {
        color: Color.Lanky,
        text: "Slam switch, kill bats for GB",
        totals: {
          gbs: 161
        }
      },
      {
        color: Color.Lanky,
        text: "Roof singles (75), tag at blue tunnel",
        totals: {
          medals: 37
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Phaseswim at front of mill for cage GB",
        totals: {
          gbs: 162
        }
      },
      {
        color: Color.Diddy,
        text: "Cross river to barn near Snide"
      },
      {
        color: Color.Diddy,
        text: "Spring inside (50), 2 bunches (65)"
      },
      {
        color: Color.Diddy,
        text: "GB, fairy, deathwarp, tag outside",
        totals: {
          gbs: 163,
          fairies: 20
        }
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Balloon (75)",
        totals: {
          medals: 38
        }
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Climb mushroom, twirl to Snide"
      }
    ]
  },
  {
    name: "SNIDE'S (IN FOREST)",
    steps: [
      {
        color: Color.Tiny,
        text: "Turn in Blueprints x5",
        totals: {
          gbs: 168
        }
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Turn in Blueprints x8",
        totals: {
          gbs: 176
        }
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Turn in Blueprints x5",
        totals: {
          gbs: 181
        }
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Turn in Blueprints x8",
        totals: {
          gbs: 189
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Balloon (75), turn in Blueprints x8",
        totals: {
          gbs: 197,
          medals: 39
        }
      },
      {
        color: Color.Diddy,
        text: "EXIT, leave Lobby"
      }
    ]
  },
  {
    name: "FOREST -> K. ROOL",
    steps: [
      {
        color: Color.Diddy,
        text: "Rocket to bonus GB on island top",
        totals: {
          gbs: 198
        }
      },
      {
        color: Color.Diddy,
        text: "Down to cage GB above waterfall",
        totals: {
          gbs: 199
        }
      },
      {
        color: Color.Diddy,
        text: "Drop to use W3 to tag"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "W5, Swim Through Shores to cage GB",
        totals: {
          gbs: 200
        }
      },
      {
        color: Color.Tiny,
        text: "Inside BFI, get Rare GB",
        totals: {
          gbs: 201
        }
      },
      {
        color: Color.Tiny,
        text: "W5, W3, ENTER K. Rool"
      }
    ]
  },
  krool
];
