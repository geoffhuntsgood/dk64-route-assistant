import { Route } from "../../../classes";
import { Color } from "../../../enums/Color";
import { mapItemsToRoute } from "../../../utils/utils";
import { krool } from "../../commonSections";

export const beginner101: Route = mapItemsToRoute({
  name: "101% Beginner",
  doc: "https://docs.google.com/document/d/1IXTi3nh70Gps8G_BlEo2kquOix47i_qjQ1WKIhCk8n4",
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
          text: "Note: Video links available! Click **"
        }
      ]
    },
    {
      name: "Start!",
      steps: [
        {
          color: Color.DK,
          text: "Cranky, training barrels"
        },
        {
          color: Color.DK,
          text: "Phaseswim to main isle",
          link: "https://youtu.be/XbR_FXuZ1FU?t=13m5s"
        },
        {
          color: Color.DK,
          text: "Swim to Fairy Island"
        },
        {
          color: Color.DK,
          text: "Swim Through Shores",
          link: "https://youtu.be/XbR_FXuZ1FU?t=15m22s"
        },
        {
          color: Color.DK,
          text: "Get camera/shockwave"
        },
        {
          color: Color.DK,
          text: "Tag W5, get 3 crystals"
        },
        {
          color: Color.DK,
          text: "Swim back to main isle"
        },
        {
          color: Color.DK,
          text: "Rainbow Coin under Caves"
        },
        {
          color: Color.DK,
          text: "Moonkick to Caves early",
          link: "https://youtu.be/XbR_FXuZ1FU?t=38m21s"
        },
        {
          color: Color.DK,
          text: "B. Locker Skip to Caves",
          link: "https://youtu.be/XbR_FXuZ1FU?t=43m20s"
        },
        {
          color: Color.DK,
          text: "Exit Caves, leave lobby"
        },
        {
          color: Color.DK,
          text: "Kick right to upper isles"
        },
        {
          color: Color.DK,
          text: "Tag W2 by Aztec"
        },
        {
          color: Color.DK,
          text: "Drop, swim to K. Lumsy"
        },
        {
          color: Color.DK,
          text: "Rainbow Coin behind K. Lumsy"
        },
        {
          color: Color.DK,
          text: "Tag W1, collect Japes GB",
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
          text: "Bush push to main area",
          link: "https://youtu.be/tTkUY-LwSxU?t=15s"
        },
        {
          color: Color.DK,
          text: "Phaseswim to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Walk OOB towards tunnel"
        },
        {
          color: Color.DK,
          text: "Backflip in bounds behind gate"
        },
        {
          color: Color.DK,
          text: "Blueprint, 3 coins",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Leave tunnel, tag W3 (5)"
        },
        {
          color: Color.DK,
          text: "Climb vine for Battle Crown",
          crowns: "x"
        },
        {
          color: Color.DK,
          text: "Funky, Coconut/Ammo Belt 1"
        },
        {
          color: Color.DK,
          text: "Deny next upgrade, leave"
        },
        {
          color: Color.DK,
          text: "Tree outside Funky (10)"
        },
        {
          color: Color.DK,
          text: "Kick to Snide balloon (20)"
        },
        {
          color: Color.DK,
          text: "Hill to right (23), tag W2"
        },
        {
          color: Color.DK,
          text: "2nd hill (26), Diddy GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Kick to tree by cannon (31)"
        },
        {
          color: Color.DK,
          text: "Kick to left tree by vines"
        },
        {
          color: Color.DK,
          text: "Kick to Rainbow Coin on slope"
        },
        {
          color: Color.DK,
          text: "Shoot 1st switch, use W3 (36)"
        },
        {
          color: Color.DK,
          text: "Shoot 2nd switch, balloon (46)"
        },
        {
          color: Color.DK,
          text: "Climb vine, shoot 3rd switch"
        },
        {
          color: Color.DK,
          text: "Cross vines, cannon to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop to river, tag W4"
        },
        {
          color: Color.DK,
          text: "Singles through tunnel (55)"
        },
        {
          color: Color.DK,
          text: "Balloon by Cranky (65)"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Cranky's, Simian Slam"
        },
        {
          color: Color.Diddy,
          text: "Re-enter, buy Simian Spring"
        },
        {
          color: Color.Diddy,
          text: "W4, water bunches (10), 3 coins"
        },
        {
          color: Color.Diddy,
          text: "Climb vine, buy Peanut"
        },
        {
          color: Color.Diddy,
          text: "Drop, phaseswim to tunnel"
        },
        {
          color: Color.Diddy,
          text: "Jump in bounds, GB, balloon (20)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Enter T&S"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Ledge clip/moonkick for Key 1",
          link: "https://youtu.be/XbR_FXuZ1FU?t=29m32s",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "2nd 'Donk' Reset on Key 1 grab"
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
          text: "Tag W3, W1, turn in Key 1"
        },
        {
          color: Color.DK,
          text: "W1 back, W2, enter Aztec"
        }
      ]
    },
    {
      name: "Aztec 1",
      steps: [
        {
          color: Color.DK,
          text: "Shoot Coconut switches"
        },
        {
          color: Color.DK,
          text: "Blueprint, 3 coins",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Tunnel, Rainbow Coin under tag"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Tag W1, Candy's for Guitar"
        },
        {
          color: Color.Diddy,
          text: "Climb tree, Rocket to Blueprint",
          bps: "x"
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
          text: "Slam switch, tongues to Guitar pad (28)"
        },
        {
          color: Color.Diddy,
          text: "Water singles until (34)"
        },
        {
          color: Color.Diddy,
          text: "Phaseswim through right wall to GB",
          gbs: "x1"
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
          text: "Phaseswim again to leave"
        },
        {
          color: Color.Diddy,
          text: "Tag W2 (40), jump over Llama"
        },
        {
          color: Color.Diddy,
          text: "Guitar to open tunnel"
        },
        {
          color: Color.Diddy,
          text: "Tunnel singles (45) to Cranky"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "2 balloons (20), buy Slam 2"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Buy Monkeyport, tag W3"
        },
        {
          color: Color.Tiny,
          text: "Back to Blueprint",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Singles (10), tag W2, to Funky"
        },
        {
          color: Color.Tiny,
          text: "Buy Feather, enter T&S"
        },
        {
          color: Color.DK,
          text: "Key 5 early",
          link: "https://youtu.be/icw4KVavWjI?t=8m27s",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Backflip on Funky's, Banana Push",
          link: "https://youtu.be/UzXzScGj_Wo?t=11m46s"
        },
        {
          color: Color.DK,
          text: "Bonus GB (left, then right)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Strong Kong, bunches out (40)"
        },
        {
          color: Color.DK,
          text: "Left, roll clip in 5-Door Temple",
          link: "https://youtu.be/UzXzScGj_Wo?t=13m27s"
        },
        {
          color: Color.DK,
          text: "Left, 2 coins, right, GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Leave temple, Baboon Blast"
        },
        {
          color: Color.DK,
          text: "Step singles (44), balloon (54)"
        },
        {
          color: Color.DK,
          text: "Enter Llama Temple"
        },
        {
          color: Color.DK,
          text: "Phaseswim in lava, free Lanky",
          link: "https://youtu.be/GvD0qnR8aeE?t=35m7s",
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
          text: "Llama cage GB (67), 1 coin",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "1 coin under tag, Tiny Temple"
        },
        {
          color: Color.Tiny,
          text: "Phaseswim left of Tiny entrance"
        },
        {
          color: Color.Tiny,
          text: "Swim right to Klaptrap room GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Singles (15), leave"
        },
        {
          color: Color.Tiny,
          text: "W2, W3"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Bunch, single (6), 1 coin"
        },
        {
          color: Color.Lanky,
          text: "Buy up to Sprint"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "W3, stairs (48), jump across"
        },
        {
          color: Color.Diddy,
          text: "Charge gongs for GB",
          link: "https://youtu.be/UzXzScGj_Wo?t=8m4s",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop down, steps (51)"
        },
        {
          color: Color.Diddy,
          text: "Jump in sand, backflip to Rocket"
        },
        {
          color: Color.Diddy,
          text: "Rocket in center sun 3 times (56)"
        },
        {
          color: Color.Diddy,
          text: "Fly to 5-Door Temple, slam switch"
        },
        {
          color: Color.Diddy,
          text: "Fall left to stairs (60)"
        },
        {
          color: Color.Diddy,
          text: "Select yes to Try Again"
        },
        {
          color: Color.Diddy,
          text: "Vulture race, bunch on temple (65)"
        },
        {
          color: Color.Diddy,
          text: "Feed center totem 4 times"
        },
        {
          color: Color.Diddy,
          text: "Collect vulture race GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fly to Diddy's 5-Door Temple"
        },
        {
          color: Color.Diddy,
          text: "Right, balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "Left, GB, exit level",
          gbs: "x1"
        }
      ]
    },
    {
      name: "Aztec 1 to Factory",
      steps: [
        {
          color: Color.Diddy,
          text: "Chimpy Charge Lobby gongs"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Twirl to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Leave Lobby, W2, W1, turn in Key 5"
        },
        {
          color: Color.Tiny,
          text: "Monkeyport behind Krem Isle"
        },
        {
          color: Color.Tiny,
          text: "Fairy, drop in front",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Enter Factory Lobby"
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
          gbs: "x1"
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
          gbs: "x1"
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
          tag: "R",
          text: "Buy Saxophone"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Cranky, then Candy"
        },
        {
          color: Color.DK,
          tag: "R",
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
          tag: "R",
          text: "Enter dark room, Rainbow Coin"
        },
        {
          color: Color.Chunky,
          text: "Punch/Triangle cutscene overlap"
        },
        {
          color: Color.Chunky,
          text: "3 platform bunches (15)"
        },
        {
          color: Color.Chunky,
          text: "Fall through box left for GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Tag W1 (20), pole to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Enter T&S by Arcade"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter/leave MJ to clear cutscene"
        },
        {
          color: Color.DK,
          text: "Leave, Arcade x2, enter T&S",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Key 3 (jumps: 9, 11, 12, 13, 15)",
          keys: "x"
        },
        {
          color: Color.Tiny,
          text: "Pipe bunch (5), cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Down pole to Blueprint",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter level"
        },
        {
          color: Color.Tiny,
          text: "Right, singles to testing (15)"
        },
        {
          color: Color.Tiny,
          text: "Backflip up to Mini Monkey"
        },
        {
          color: Color.Tiny,
          text: "Dart board GB (25)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Jump/twirl toward Funky"
        },
        {
          color: Color.Tiny,
          text: "Balloon (35), fairy",
          fairies: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Buy Grape/Homing Ammo"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Buy Pineapple/Ammo Belt 2"
        },
        {
          color: Color.Chunky,
          text: "Back to testing for Blueprint",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Climb boxes to tag"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Upper tunnel (30)"
        },
        {
          color: Color.DK,
          text: "Numbers game GB, balloon (40)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Fairy, back to tag",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Spring left of block tower (20)"
        },
        {
          color: Color.Diddy,
          text: "Bonus GB, jump left to tag",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Jump to bonus GB above R&D",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Go to R&D, right to tag W2 (48)"
        },
        {
          color: Color.Lanky,
          text: "Ladder Push to Battle Crown",
          link: "https://www.youtube.com/watch?v=0Zg1P7mvxYQ&feature=youtu.be",
          crowns: "x"
        },
        {
          color: Color.Lanky,
          text: "Blueprint, to piano game (54)",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Balloon (64), piano GB: CBCDECA",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Remaining single to tag (65)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Tunnel to car race GB (45)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level to tag"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Enter Factory, left balloon (30)"
        },
        {
          color: Color.Chunky,
          text: "Back to W1 bunch (35), W2"
        },
        {
          color: Color.Chunky,
          text: "Toy monster GB, balloon (55)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Balloon above chute (50)"
        },
        {
          color: Color.DK,
          text: "Drop, enter power shed"
        },
        {
          color: Color.DK,
          text: "Pull lever, 2 bunches (60), GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W1, W2"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Left ladder to R&D room"
        },
        {
          color: Color.Diddy,
          text: "Charge switches: 3124, 4231, 1342",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "3 balloons (50)"
        },
        {
          color: Color.Diddy,
          text: "Fall down chute"
        },
        {
          color: Color.Diddy,
          text: "Slam switch for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "To prod, slam switch on right"
        },
        {
          color: Color.Diddy,
          text: "Blueprint, singles to (60), W4",
          bps: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Jump for bunch (60), slam switch"
        },
        {
          color: Color.Chunky,
          text: "W4, GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Jump/spin to bunches (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Balloon below ledge (55)"
        },
        {
          color: Color.Tiny,
          text: "Climb conveyors (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          text: "Bonus GB, tag under conveyors",
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
          tag: "L",
          text: "Spring GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Tag under conveyors"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Cylinders to Blueprint",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Drop to crusher room"
        },
        {
          color: Color.DK,
          text: "3 bunches (75)",
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
          text: "Pull lever for Bongos GB",
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
          text: "Blueprint",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Fairy, leave Lobby",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop left, Spring to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Battle Crown, leave, drop right",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          text: "Phaseswim on right, enter Lobby"
        },
        {
          color: Color.Chunky,
          text: "Blueprint, enter Galleon",
          bps: "x"
        }
      ]
    },
    {
      name: "Galleon",
      steps: [
        {
          color: Color.Chunky,
          text: "Straight ahead (2), tag W2 (7)"
        },
        {
          color: Color.Chunky,
          text: "Cannon, tag W3, planks (10)"
        },
        {
          color: Color.Chunky,
          text: "Drop left, Battle Crown",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          text: "Across to tunnel (15)"
        },
        {
          color: Color.Chunky,
          text: "Punch right chest for GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch left chest for fairy",
          fairies: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level on fairy disappear"
        },
        {
          color: Color.Chunky,
          text: "Shoot Switches on right"
        },
        {
          color: Color.Chunky,
          text: "Jump up at water's peak"
        },
        {
          color: Color.Chunky,
          text: "Shoot Kasplat to move it"
        },
        {
          color: Color.Chunky,
          text: "Cannon game GB, balloon (25)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Phaseswim left of entry slope"
        },
        {
          color: Color.Chunky,
          text: "Turn right, swim to lighthouse"
        },
        {
          color: Color.Chunky,
          text: "Tag underwater"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Raise water level"
        },
        {
          color: Color.DK,
          text: "Baboon Blast, 3 bunches (15)"
        },
        {
          color: Color.DK,
          text: "Enter/exit/enter lighthouse to skip CS"
        },
        {
          color: Color.DK,
          text: "Balloon from 2nd bunch platform"
        },
        {
          color: Color.DK,
          text: "Lever (45), drop behind to GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Leave, tag w5, balloon (55)"
        },
        {
          color: Color.DK,
          text: "Snide, turn in Blueprints x3",
          gbs: "x3"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Balloon (10)"
        },
        {
          color: Color.Tiny,
          text: "Turn in Blueprints x3",
          gbs: "x3"
        },
        {
          color: Color.Tiny,
          text: "W3 to Blueprint (20)",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Cross planks to enter T&S"
        },
        {
          color: Color.Tiny,
          text: "Ledge clip for Key 4",
          link: "https://youtu.be/25w6CnhRkeY?t=14m49s",
          keys: "x"
        },
        {
          color: Color.Header,
          text: "Start CCW, turn at -"
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
          text: "Backflip OOB above T&S",
          link: "https://youtu.be/t93PFMmXmlE?t=1h9m"
        },
        {
          color: Color.Tiny,
          text: "Turn left, straight to cactus tag"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Cactus balloon (10)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Cactus balloon (35), Blueprint",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "B swim below sub hole to clip in"
        },
        {
          color: Color.Tiny,
          text: "Sub bonus GB",
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
          text: "Phaseswim on right to tag W2",
          link: "https://youtu.be/eDDLzmORNXM?t=1h42m5s"
        },
        {
          color: Color.Tiny,
          text: "Phaseswim gate 5 of 5-Door Ship"
        },
        {
          color: Color.Tiny,
          text: "5 singles, 2 bunches (50), GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fairy, exit/enter level on disappear",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Backflip onto W2, hold Z noclip",
          link: "https://www.twitch.tv/videos/106345736"
        },
        {
          color: Color.Tiny,
          text: "Upper 2-Door Ship, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "2 bunches (60), tag at 5DS"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Phaseswim 45 deg down in top 5DS gate"
        },
        {
          color: Color.Diddy,
          text: "Phaseswim to Diddy's bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "2 bunches when leaving (20)"
        },
        {
          color: Color.Diddy,
          text: "W5, Rocket to seal balloon (30)"
        },
        {
          color: Color.Diddy,
          text: "Land on ship, slam switch"
        },
        {
          color: Color.Diddy,
          text: "Jump off for Blueprint",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Rocket to lighthouse top for GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Guitar, 2 bunches (40)"
        },
        {
          color: Color.Diddy,
          text: "W5 to mech fish GB",
          link: "https://youtu.be/3e2koLLglVM",
          gbs: "x1"
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
          text: "Phaseswim to treasure room"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75)",
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
          text: "Bunch and balloon (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Float to bonus GB (5)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Phaseswim into chest keyhole"
        },
        {
          color: Color.Lanky,
          text: "Collect pearls, exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "Tunnel (10), 2 crown balloons (30)"
        },
        {
          color: Color.Lanky,
          text: "W2 noclip, lower 2-Door Ship"
        },
        {
          color: Color.Lanky,
          text: "Phaseswim on right for GB (35)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Bunch (40), phaseswim to leave"
        },
        {
          color: Color.Lanky,
          text: "Get onto box for balloon (50)"
        },
        {
          color: Color.Lanky,
          text: "Phaseswim gate 4 of 5-Door Ship"
        },
        {
          color: Color.Lanky,
          text: "3 bunches (65), GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Leave, bunch under Enguarde (70)"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tunnel bunches at bottom (50)"
        },
        {
          color: Color.Chunky,
          text: "Phaseswim 45 deg down in top of 5DS"
        },
        {
          color: Color.Chunky,
          text: "Bonus GB, leave, W5",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Jump onto ship, slam to enter"
        },
        {
          color: Color.Chunky,
          text: "All bunches (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          text: "Punch barrels for GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "W2 noclip, enter front left 5DS"
        },
        {
          color: Color.DK,
          text: "5 singles (60), bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Phaseswim back wall to leave"
        },
        {
          color: Color.DK,
          text: "Tunnel bunches on bottom (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          text: "W4 for Blueprint, W4 back",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Collect Seal GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Phaseswim under seal"
        },
        {
          color: Color.Lanky,
          text: "Back right ship for race GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit race, then exit/enter level"
        },
        {
          color: Color.Lanky,
          text: "Cannon room for Blueprint",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Phaseswim to lighthouse"
        },
        {
          color: Color.Lanky,
          text: "Phaseswim in chest front (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Enguarde chest GB at bottom",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Mini Monkey to mermaid"
        },
        {
          color: Color.Tiny,
          text: "Get GB before 2nd cutscene",
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
          text: "Phaseswim in Lobby pipe for GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Phaseswim by torch to void out"
        },
        {
          color: Color.Tiny,
          text: "Leave Lobby, phaseswim on left"
        },
        {
          color: Color.Tiny,
          text: "Monkeyport behind Krem Isle"
        },
        {
          color: Color.Tiny,
          text: "Saxophone GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Helm Early",
          link: "https://youtu.be/XbR_FXuZ1FU?t=1h30m51s"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "10 Homing Ammo"
        },
        {
          color: Color.Chunky,
          text: "Gone bonus GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "10 more Homing Ammo"
        },
        {
          color: Color.Tiny,
          text: "Backflip in corner OOB",
          link: "https://youtu.be/XbR_FXuZ1FU?t=1h36m21s"
        },
        {
          color: Color.Tiny,
          text: "Enter Helm"
        }
      ]
    },
    {
      name: "Helm",
      steps: [
        {
          color: Color.Tiny,
          text: "Kickslide up hills",
          link: "https://youtu.be/XbR_FXuZ1FU?t=1h38m25s"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot switch, vines over lava"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Mini Monkey to main room"
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
          text: "Punch only DK's gate"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "DK's room, medal",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Punch Tiny and Lanky gates"
        },
        {
          color: Color.Chunky,
          text: "Drop left, Chunky's room, medal",
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
          color: Color.Lanky,
          text: "Lanky maze: Left, then right"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket, Diddy's room, medal",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "Rocket, top center, Crown",
          crowns: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Climb steps, tag W1 for safety"
        },
        {
          color: Color.DK,
          text: "Terminal clip 2",
          link: "https://youtu.be/XbR_FXuZ1FU?t=1h44m35s"
        },
        {
          color: Color.DK,
          text: "Get Key 8 facing window",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Fairies, exit level on disappear",
          fairies: "x2"
        }
      ]
    },
    {
      name: "Helm to Castle",
      steps: [
        {
          color: Color.DK,
          text: "Orange damage boost to Blueprint",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Deathwarp, leave Lobby"
        },
        {
          color: Color.DK,
          text: "Drop right under W4 to cage GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Cannon to Castle Lobby"
        },
        {
          color: Color.DK,
          text: "Open Blueprint gate"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Blueprint, deathwarp",
          bps: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "B. Locker Skip to enter Castle"
        }
      ]
    },
    {
      name: "Castle",
      steps: [
        {
          color: Color.DK,
          text: "Cross bridge (5), swim into tree",
          link: "https://youtu.be/f5mtya4XvZ8?t=2m45s"
        },
        {
          color: Color.DK,
          text: "Switch, Blueprint, balloon (15)",
          bps: "x"
        },
        {
          color: Color.DK,
          text: "Roll clip to fairy",
          fairies: "x1"
        },
        {
          color: Color.DK,
          text: "Kick jump to GB",
          gbs: "x1"
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
          tag: "R",
          text: "W2, rocket to top cloud (5)"
        },
        {
          color: Color.Diddy,
          text: "Bonus GB, drop to tag",
          gbs: "x1"
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
          text: "Switch/GB cutscene overlap",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Leave, kick down left to Cranky"
        },
        {
          color: Color.DK,
          text: "5,000 in Jetpac for Rareware Coin"
        },
        {
          color: Color.DK,
          text: "Buy Slam 3, leave"
        },
        {
          color: Color.DK,
          text: "Drop right, down to W1 (55)"
        },
        {
          color: Color.DK,
          text: "Enter tunnel"
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
          text: "Singles to (15), Blueprint",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Backtrack, enter dungeon"
        },
        {
          color: Color.Chunky,
          text: "2 balloons (35) through gates"
        },
        {
          color: Color.Chunky,
          text: "Punch 2 gates for Diddy bunches"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Face puzzle GB (60)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Balloon (10), Trombone"
        },
        {
          color: Color.Lanky,
          text: "Float to bonus GB, 2nd balloon (20)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Deathwarp"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Alcove bunches (15)"
        },
        {
          color: Color.Diddy,
          text: "Balloon (25), moontail for GB",
          link: "https://youtu.be/XbR_FXuZ1FU?t=4109",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Exit/enter level"
        },
        {
          color: Color.Diddy,
          text: "Climb to W5, fall down left"
        },
        {
          color: Color.Diddy,
          text: "Enter ballroom, enemies with Guitar"
        },
        {
          color: Color.Diddy,
          text: "Candles (40), balloon (50)"
        },
        {
          color: Color.Diddy,
          text: "Bonus GB, leave ballroom",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "2 singles (2), enter ballroom"
        },
        {
          color: Color.Tiny,
          text: "Monkeyport (12), Mini Monkey"
        },
        {
          color: Color.Tiny,
          text: "Fairy when Mini",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Car GB, Port to balloon (32)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter level"
        },
        {
          color: Color.Tiny,
          text: "Phaseswim on left wall of pool"
        },
        {
          color: Color.Tiny,
          text: "Hang left, swim to Blueprint",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Climb to W5, down until (51)"
        },
        {
          color: Color.Tiny,
          text: "Jump down inside, up to trash (55)"
        },
        {
          color: Color.Tiny,
          text: "Enter trash can, Saxophone for GB (60)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "10 Homing Ammo, leave, enter T&S"
        },
        {
          color: Color.DK,
          text: "Ledge clip/moonkick for Key 7",
          keys: "x"
        },
        {
          color: Color.Lanky,
          text: "W4/W5, enter tower, defeat enemies"
        },
        {
          color: Color.Lanky,
          text: "Shoot switches w/homing"
        },
        {
          color: Color.Lanky,
          text: "Float up x2 for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Leave, drop behind near tag"
        },
        {
          color: Color.Lanky,
          text: "Greenhouse GB (50)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Battle Crown, leave",
          crowns: "x"
        },
        {
          color: Color.Lanky,
          text: "Drop right to Blueprint",
          bps: "x"
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
          text: "Sprint left, jump across to GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Balloon (65), deathwarp"
        },
        {
          color: Color.Lanky,
          text: "(75) on way to tag",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Funky balloon (70), Tiny's room (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          text: "Twirl to GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Deathwarp, back to tag"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Blueprint, balloon (60)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Enter crypt"
        },
        {
          color: Color.Diddy,
          text: "Tag W1, left, crypt GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Left coffin balloon (70)"
        },
        {
          color: Color.Diddy,
          text: "W1 back, leave (75)",
          medals: "x"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Enter crypt, tag W2, left, right"
        },
        {
          color: Color.DK,
          text: "Balloon (70)"
        },
        {
          color: Color.DK,
          text: "Levers: back L, R, front L"
        },
        {
          color: Color.DK,
          text: "Minecart GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "W2 out (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Enter crypt, right"
        },
        {
          color: Color.Chunky,
          text: "Punch right coffin for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.Chunky,
          text: "Swim into tree (like DK)"
        },
        {
          color: Color.Chunky,
          text: "Punch wall (40), balloon (50)"
        },
        {
          color: Color.Chunky,
          text: "Go up to right side of gate"
        },
        {
          color: Color.Chunky,
          text: "Shoot switch, bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.Chunky,
          text: "Climb tree/jump to W4, enter shed"
        },
        {
          color: Color.Chunky,
          text: "Play Triangle, Punch box, GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Balloon (60), 20 Homing Ammo, leave"
        },
        {
          color: Color.Chunky,
          text: "Walk to museum, Punch shields"
        },
        {
          color: Color.Chunky,
          text: "Balloon (70), move rock (75)",
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
          text: "Float to bonus GB, leave Lobby",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "K. Lumsy cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Enter K. Lumsy, left to Sprint"
        },
        {
          color: Color.Lanky,
          text: "Turn in Keys 8, 3 on way to switch"
        },
        {
          color: Color.Lanky,
          text: "Press switch, cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Turn in Key 4, leave, W1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W2, move first rock, drop to tag"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "W2, Trombone, enter Aztec"
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
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Battle Crown, singles to (19)",
          crowns: "x"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level, W1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Tunnel to Hunky, clip in cage",
          link: "https://www.youtube.com/watch?v=hYpvlVNUi6A&feature=youtu.be"
        },
        {
          color: Color.Chunky,
          text: "Bonus GB, Snide steps (6)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Mini (20) to beetle race GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Stairs (70), enter Llama Temple"
        },
        {
          color: Color.DK,
          text: "Tag W2, climb to tag W1 (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Fairy, Trombone pad",
          fairies: "x1"
        },
        {
          color: Color.Lanky,
          text: "Climb to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Gun skew to balloons (39)",
          link: "https://youtu.be/UzXzScGj_Wo?t=16m51s"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "In bounds by stairs"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Stairs (42), W1 (47)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "Through pipe (25)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Lava GB, bunches (35), W2",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Balloon over lava (45), W1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          skew: true,
          text: "Matching game GB",
          link: "https://youtu.be/UzXzScGj_Wo?t=19m45s",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Through left wall to Blueprint",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "W2, leave (50)"
        },
        {
          color: Color.Lanky,
          text: "3 trees toward 5-Door Temple (65)"
        },
        {
          color: Color.Lanky,
          text: "Enter 5DT, balloon (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Right to GB, leave, back to tag",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Path (50), 3 trees (65)"
        },
        {
          color: Color.Tiny,
          text: "Enter 5DT, left, fairy",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Left, GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "2 trees (75), enter T&S in back",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Key 2, enter 5DT, 2 balloons (26)",
          keys: "x"
        },
        {
          color: Color.Chunky,
          text: "Left to Blueprint",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Backtrack right to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit/enter level"
        },
        {
          color: Color.Chunky,
          text: "Shoot switches, vase GB (47)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W1 (48), enter Tiny Temple"
        },
        {
          color: Color.Chunky,
          text: "Kill barrels, bunches (73)"
        },
        {
          color: Color.Chunky,
          text: "Phaseswim to door (75)",
          medals: "x"
        },
        {
          color: Color.Chunky,
          text: "Phaseswim in door to GB (normal if missed)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Exit level"
        }
      ]
    },
    {
      name: "Aztec 2 to Caves",
      steps: [
        {
          color: Color.Chunky,
          text: "Leave, 2nd rock, Triangle GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Jump to Caves Lobby, Punch ice walls"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Damage boost to lava GB",
          link: "https://youtu.be/0MFpugQPM88?t=17m7s",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Blueprint in left alcove",
          bps: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to Guitar GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Enter Caves"
        }
      ]
    },
    {
      name: "Caves",
      steps: [
        {
          color: Color.Diddy,
          text: "Tag W2, cross river, climb left"
        },
        {
          color: Color.Diddy,
          text: "Past Funky (5), Rocket to tag W5"
        },
        {
          color: Color.Diddy,
          text: "Drop, Rocket to bonus GB (10)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Rocket to T&S above DK cabin"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Ledge clip/moonkick to Key 6",
          keys: "x"
        },
        {
          color: Color.DK,
          text: "Fall to enter DK cabin"
        },
        {
          color: Color.DK,
          text: "Cabin GB",
          link: "https://youtu.be/0MFpugQPM88?t=10m26s",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Cabin Battle Crown leave",
          crowns: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Tag W2 (10)"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Phaseswim to Gone GB (18)",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "W2 Kosha cutscene cancel"
        },
        {
          color: Color.Chunky,
          text: "Right, Punch Snide wall"
        },
        {
          color: Color.Chunky,
          text: "Singles, balloon (30)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "2 river singles (2), tag W4"
        },
        {
          color: Color.Tiny,
          text: "3 singles (5) to igloo"
        },
        {
          color: Color.Tiny,
          text: "Tag W1/W3"
        },
        {
          color: Color.Tiny,
          text: "Phaseswim in Tiny's 5-Door Igloo",
          link: "http://i.imgur.com/bmHUp9g.png"
        },
        {
          color: Color.Tiny,
          text: "Balloon (20), GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Fairy, leave",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Twirl from igloo to ice shield"
        },
        {
          color: Color.Tiny,
          text: "Ice shield clip for GB (25)",
          link: "https://www.youtube.com/watch?v=JS8O2AMHiRA",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Monkeyport to balloon (35), W4"
        },
        {
          color: Color.Tiny,
          text: "Mini to bonus GB (40), W3 to tag (45)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Phaseswim in Lanky's 5DI",
          link: "http://i.imgur.com/bmHUp9g.png"
        },
        {
          color: Color.Lanky,
          text: "Backflip to balloon (15), GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Exit/enter level, singles (20), W2"
        },
        {
          color: Color.Lanky,
          text: "Float to Trombone pad (25)"
        },
        {
          color: Color.Lanky,
          text: "Enter cabin, kill Kosha"
        },
        {
          color: Color.Lanky,
          text: "Sprint switch for GB (30)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Leave, waterfall balloon (40)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Blueprint, balloon (55)",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Twirl across to cabins"
        },
        {
          color: Color.Tiny,
          text: "Enter Tiny's 5DC, Klaptrap GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Balloon, bunches (75), leave",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Enter Chunky's 5DC"
        },
        {
          color: Color.Chunky,
          text: "Slam 3 targets, bonus GB (50)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Enter DK's 5DC (10)"
        },
        {
          color: Color.DK,
          text: "Bunch (15), GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Balloon above cabins (20)"
        },
        {
          color: Color.Diddy,
          text: "Enter upper Diddy 5DC, play Guitar"
        },
        {
          color: Color.Diddy,
          text: "Rocket to candles (35), GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fairy, leave",
          fairies: "x1"
        },
        {
          color: Color.Diddy,
          text: "Lower 5DC GB (42)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "W5 to Blueprint (60)",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "To ice castle, balloon (70)"
        },
        {
          color: Color.Lanky,
          text: "Ice tomato GB, leave",
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
          text: "Blueprint, drop to W1 (25)",
          bps: "x"
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
          text: "Door frame bunch, balloon (45)"
        },
        {
          color: Color.DK,
          text: "Kick jump in maze (50), GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "If you die, Bongos then walk to GB"
        },
        {
          color: Color.DK,
          text: "Deathwarp, leave, climb to Blast"
        },
        {
          color: Color.DK,
          text: "4 Blast bunches (75)",
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
          text: "Rocket to balloon, tag W4 (57)"
        },
        {
          color: Color.Diddy,
          text: "W4 (65), Blueprint, W4 back",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Phaseswim into Diddy's 5DI",
          link: "http://i.imgur.com/bmHUp9g.png"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          text: "5DI GB, leave",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "W3 to balloon (60), W3 back"
        },
        {
          color: Color.Chunky,
          text: "Phaseswim into Chunky's 5DI",
          link: "http://i.imgur.com/bmHUp9g.png"
        },
        {
          color: Color.Chunky,
          text: "Balloon (70), GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Blueprint on igloo",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Ice shield GB",
          link: "https://youtu.be/ERraNh9SJn0?t=14079",
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
          text: "Swim to small island, fairy",
          fairies: "x1"
        },
        {
          color: Color.Chunky,
          text: "Hunky Chunky, slam big X"
        },
        {
          color: Color.Chunky,
          text: "Swim Through Shores for cage GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Rock GB, enter Japes Lobby",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Move Lobby rock"
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
          text: "Bush Push again to main area"
        },
        {
          color: Color.DK,
          text: "Baboon Blast course bunches (75)",
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
          text: "Phaseswim under rock"
        },
        {
          color: Color.Chunky,
          text: "Blueprint",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "GB, deathwarp",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Leave, rock GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Gun skew in water"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Use Diddy cutscene to warp up"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Tag W1, W2, Funky's roof (25)"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "R",
          skew: true,
          text: "Drop to cage GB, up to tag",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          tag: "R",
          skew: true,
          text: "Bunch (5), drop past W2 to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "Through left wall, fall into tunnel"
        },
        {
          color: Color.Lanky,
          skew: true,
          text: "W4, balloon by back left hut (15)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          skew: true,
          text: "Balloon by front left hut (10)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Through Tiny hut (15), W4"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Through wall for cage GB, W3",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Blueprint, continue to hive area",
          bps: "x"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Tag W5, through both logs (45)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Stump GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Enter shell (50)"
        },
        {
          color: Color.Tiny,
          text: "Left to balloon (60)"
        },
        {
          color: Color.Tiny,
          text: "Torch clip, across to GB (68)",
          link: "https://www.youtube.com/watch?v=eDDLzmORNXM&feature=youtu.be&t=5h1m28s",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter"
        },
        {
          color: Color.Tiny,
          text: "W1, backtrack to cage (75)",
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
          text: "Leave T&S, bonus GB (20)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "W2, shoot switch, clockwise (24)"
        },
        {
          color: Color.Diddy,
          text: "Backflip to enter mountain"
        },
        {
          color: Color.Diddy,
          text: "Bridge clip, slam switch"
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
          text: "Balloon, minecart GB (49)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Shoot slope switch for Lanky"
        },
        {
          color: Color.Diddy,
          text: "Blueprint (52), 2 trees (62)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "W2, switch, CCW for (65)"
        },
        {
          color: Color.Diddy,
          text: "Mountain GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75), W5 to tag",
          medals: "x"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "Hunky Chunky for bonus GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Hunky again, 4 trees (45)"
        },
        {
          color: Color.Chunky,
          text: "Shell clip to tunnel",
          link: "https://youtu.be/F0t4A9vVTG0?t=19787"
        },
        {
          color: Color.Chunky,
          text: "Rambi wall clip, pond fairy",
          fairies: "x1"
        },
        {
          color: Color.Chunky,
          text: "3 balloons (75), tag by Cranky",
          medals: "x"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Tunnel to Blueprint (21)",
          bps: "x"
        },
        {
          color: Color.Lanky,
          text: "Right slope, balloon (39)"
        },
        {
          color: Color.Lanky,
          text: "Left slope, bonus GB (42)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Slope to painting room (45)"
        },
        {
          color: Color.Lanky,
          text: "All bananas, balloon (75)",
          medals: "x"
        },
        {
          color: Color.Lanky,
          text: "Clip or kill Zingers for GB",
          link: "https://youtu.be/cWLJs3mwU_8?t=27",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Fairy, exit level on disappear",
          fairies: "x1"
        }
      ]
    },
    {
      name: "Japes 2 to Forest",
      steps: [
        {
          color: Color.Lanky,
          text: "Leave Lobby, cannon to Forest Lobby"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Shoot ceiling mushroom"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Shoot ceiling mushroom"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Shoot ceiling mushroom"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Shoot ceiling mushroom"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Shoot ceiling mushroom"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Gone pad for Battle Crown",
          crowns: "x"
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
          text: "Tag W2 (5), enter well (10)"
        },
        {
          color: Color.Chunky,
          text: "Minecart GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "Punch cracked mill door in center"
        },
        {
          color: Color.Chunky,
          text: "Ledge clip on box left of spider web"
        },
        {
          color: Color.Chunky,
          text: "Defeat spider, leave GB"
        },
        {
          color: Color.Chunky,
          text: "Punch box, Triangle (15)"
        },
        {
          color: Color.Chunky,
          text: "Carry keg out around front"
        },
        {
          color: Color.Chunky,
          text: "Place keg on spike wheel"
        },
        {
          color: Color.Chunky,
          text: "Walk into wall right of boxes"
        },
        {
          color: Color.Chunky,
          text: "Left OOB to conveyor GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "2 kegs on spike wheel for GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Climb boxes, Mini to back (10)"
        },
        {
          color: Color.Tiny,
          text: "Ledge clip to spider GB (15)",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit/enter level"
        },
        {
          color: Color.Tiny,
          text: "W1, 12 singles in river (27)"
        },
        {
          color: Color.Tiny,
          text: "Phaseswim to thorns, damage skew",
          link: "https://youtu.be/icw4KVavWjI?t=14m51s"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Balloon in back (37)"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Through wall behind T&S"
        },
        {
          color: Color.Tiny,
          skew: true,
          text: "Backflip in bounds to tag"
        },
        {
          color: Color.Chunky,
          tag: "R",
          skew: true,
          text: "Tag W2 (20), Hunky Chunky"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Singles around apple (29)"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Backflip to kill tomatoes"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Carry apple to main area for GB",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          skew: true,
          text: "Through blue part of wall"
        },
        {
          color: Color.DK,
          tag: "R",
          skew: true,
          text: "Blueprint, through thorns (5)",
          bps: "x"
        },
        {
          color: Color.DK,
          skew: true,
          text: "Roll in back of shed to enter"
        },
        {
          color: Color.DK,
          text: "Slam lower box, slam switch (10)"
        },
        {
          color: Color.DK,
          text: "Climb, kick jump to bonus GB",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Climb again, slam box for fairy",
          fairies: "x1"
        },
        {
          color: Color.DK,
          text: "Exit/enter level"
        },
        {
          color: Color.DK,
          text: "Right to pink tunnel (15)"
        },
        {
          color: Color.DK,
          text: "Tag behind mushroom"
        },
        {
          color: Color.Diddy,
          tag: "R",
          text: "Rocket to bonus GB at top (10)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Tag W5, CW to tag (13)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Orangstand to top switch (5)"
        },
        {
          color: Color.Lanky,
          text: "Dark room GB, 2 bunches (15)",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Top switch again, opposite room"
        },
        {
          color: Color.Lanky,
          text: "Bonus GB (20), CCW to tag",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Continue CCW, enter room"
        },
        {
          color: Color.Chunky,
          text: "Face puzzle GB, balloon (44)",
          link: "https://i.imgur.com/JQewhI6.png",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          text: "CCW, drop to Blueprint",
          bps: "x"
        },
        {
          color: Color.Chunky,
          text: "Balloon (54), jump down to tag"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Baboon Blast bonus GB (25)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Drop down, CW until (40)"
        },
        {
          color: Color.DK,
          text: "Drop to tag W5 (45), tag"
        },
        {
          color: Color.Chunky,
          tag: "L",
          text: "W5, enter mushroom (59)"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Balloon (30)"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Drop to Blueprint, 2 singles (15)",
          bps: "x"
        },
        {
          color: Color.Diddy,
          text: "Drop to bottom, shoot switch"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Shoot switch, balloon (40)"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Shoot switch, slam switch (42)"
        },
        {
          color: Color.Tiny,
          text: "Climb for bonus GB, drop",
          gbs: "x1"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Bananas up to (75), drop back down",
          medals: "x"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Shoot/slam switch cutscene overlap"
        },
        {
          color: Color.DK,
          text: "Cannon up to GB (60)",
          gbs: "x1"
        },
        {
          color: Color.DK,
          text: "Outside, CCW to tag (65)"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Drop to Battle Crown",
          crowns: "x"
        },
        {
          color: Color.Tiny,
          text: "Jump/twirl to Blueprint",
          bps: "x"
        },
        {
          color: Color.Tiny,
          text: "Balloon (52), tag behind mushroom"
        },
        {
          color: Color.Lanky,
          tag: "L",
          text: "Shoot switch over yellow tunnel"
        },
        {
          color: Color.Lanky,
          text: "Tunnel, left to rabbit race (58)"
        },
        {
          color: Color.Lanky,
          text: "Rabbit race x2 for GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Blueprint, tag W4",
          bps: "x"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "Singles around stump (60)"
        },
        {
          color: Color.Tiny,
          text: "Mini/Saxophone to enter (65)"
        },
        {
          color: Color.Tiny,
          text: "Kill Klaptraps for GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Get bean, deathwarp, tag W3 (70)"
        },
        {
          color: Color.Tiny,
          text: "W2, climb 1 mushroom (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          text: "Plant bean for GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Exit level, fairy, re-enter",
          fairies: "x1"
        },
        {
          color: Color.Tiny,
          text: "Bounce on mushroom to tag"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Rocket to night switch (25)"
        },
        {
          color: Color.Diddy,
          text: "W4 (35), CW to Guitar pad (40)"
        },
        {
          color: Color.Diddy,
          text: "Rocket, Owl race bonus GB (45)",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop to tag (47)"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "W4/W1 (63), float to attic (73)"
        },
        {
          color: Color.Lanky,
          text: "Slam switch, kill bats for GB",
          gbs: "x1"
        },
        {
          color: Color.Lanky,
          text: "Roof (75), tag at blue tunnel",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Phaseswim for cage GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Cross river to barn near Snide"
        },
        {
          color: Color.Diddy,
          text: "Singles to Spring (50)"
        },
        {
          color: Color.Diddy,
          text: "Inside, 2 bunches (60), GB",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Fairy, deathwarp, bunch (65)",
          fairies: "x1"
        },
        {
          color: Color.DK,
          tag: "L",
          text: "Balloon (75)",
          medals: "x"
        },
        {
          color: Color.Tiny,
          tag: "L",
          text: "Climb mushroom, twirl to Snide"
        }
      ]
    },
    {
      name: "Snide's",
      steps: [
        {
          color: Color.Tiny,
          text: "Turn in Blueprints x5",
          gbs: "x5"
        },
        {
          color: Color.Chunky,
          tag: "R",
          text: "Turn in Blueprints x8",
          gbs: "x8"
        },
        {
          color: Color.DK,
          tag: "R",
          text: "Turn in Blueprints x5",
          gbs: "x5"
        },
        {
          color: Color.Lanky,
          tag: "R",
          text: "Turn in Blueprints x8",
          gbs: "x8"
        },
        {
          color: Color.Diddy,
          text: "Balloon (75)",
          medals: "x"
        },
        {
          color: Color.Diddy,
          tag: "L",
          text: "Turn in Blueprints x8",
          gbs: "x8"
        },
        {
          color: Color.Diddy,
          text: "Exit level, leave Lobby"
        }
      ]
    },
    {
      name: "Forest to K. Rool",
      steps: [
        {
          color: Color.Diddy,
          text: "Rocket to bonus GB on island",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Down to cage GB above waterfall",
          gbs: "x1"
        },
        {
          color: Color.Diddy,
          text: "Drop to W3 to tag"
        },
        {
          color: Color.Tiny,
          tag: "R",
          text: "W5, STS to cage GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "Inside BFI, get Rare GB",
          gbs: "x1"
        },
        {
          color: Color.Tiny,
          text: "W5, W3, enter K. Rool"
        }
      ]
    },
    krool
  ]
});
