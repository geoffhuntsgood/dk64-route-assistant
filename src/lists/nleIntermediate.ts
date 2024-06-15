import { Step } from "../classes";
import { Color, Tag } from "../enums";
import { krool } from "./krool";

export const nleIntermediate: Step[] = [
  {
    color: Color.Header,
    text: "--- PRE-START ---"
  },
  {
    color: Color.Header,
    text: "Prereqs: 10 fairies, 2nd controller"
  },
  {
    color: Color.Header,
    text: "Story Skip on, delete File 1"
  },
  {
    color: Color.Header,
    text: "--- START! ---"
  },
  {
    color: Color.Header,
    text: "Start ISG & timer, enter File 1"
  },
  {
    color: Color.DK,
    text: "Cranky, spawn training barrels"
  },
  {
    color: Color.DK,
    text: "Dive barrel @0:55, cancel fadeout"
  },
  {
    color: Color.DK,
    text: "Vine barrel @1:24.5, cancel fadeout"
  },
  {
    color: Color.DK,
    text: "Barrel barrel, pause exit, main menu"
  },
  {
    color: Color.Header,
    text: "EXAMINE FILE 1!!"
  },
  {
    color: Color.Header,
    text: "Castle Boss, ISG will fade out"
  },
  {
    color: Color.Header,
    text: "Monkey Smash, get kicked out"
  },
  {
    color: Color.Header,
    text: "Aztec Boss, ISG will fade out"
  },
  {
    color: Color.Header,
    text: "Monkey Smash, get kicked out"
  },
  {
    color: Color.Header,
    text: "Factory Boss, pause exit"
  },
  {
    color: Color.Header,
    text: "Galleon Boss, ISG fadeout @ 3:23"
  },
  {
    color: Color.Header,
    text: "Monkey Smash, get kicked out"
  },
  {
    color: Color.Header,
    text: "Forest Boss, pause exit"
  },
  {
    color: Color.Header,
    text: "Main menu, pulled in @ 4:23.8"
  },
  {
    color: Color.DK,
    text: "Orange barrel, pswim to escape"
  },
  {
    color: Color.DK,
    text: "Tag W4/W1, visit K. Lumsy"
  },
  {
    color: Color.DK,
    text: "W1, entrance GB to Japes Lobby",
    gbCount: 1
  },
  {
    color: Color.DK,
    text: "ENTER Japes"
  },
  {
    color: Color.Header,
    text: "--- JAPES 1 ---"
  },
  {
    color: Color.DK,
    text: "Bush push, moonkick to cannon"
  },
  {
    color: Color.DK,
    text: "Cannon to GB, tag W2",
    gbCount: 2
  },
  {
    color: Color.DK,
    text: "Shoot right switch, kick down"
  },
  {
    color: Color.DK,
    text: "Shoot middle switch, tag W1"
  },
  {
    color: Color.DK,
    text: "Note: Overlap Diddy/Switch CS"
  },
  {
    color: Color.DK,
    text: "Pswim to cage GB",
    gbCount: 3
  },
  {
    color: Color.DK,
    text: "Jump in bounds behind gate for BP"
  },
  {
    color: Color.DK,
    text: "Tag W3, overlap Blast/3rd switch CS"
  },
  {
    color: Color.DK,
    text: "Blast GB, W2 to Diddy GB",
    gbCount: 5
  },
  {
    color: Color.DK,
    text: "Grab ammo, head to Snide"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Enter mountain, switch, mountain top GB",
    gbCount: 6
  },
  {
    color: Color.Diddy,
    text: "BP, pswim to cave GB, enter T&S",
    gbCount: 7
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Key 1, walk to EXIT"
  },
  {
    color: Color.Header,
    text: "--- JAPES 1 DONE ---"
  },
  {
    color: Color.DK,
    text: "W1, turn in Key 1, W1"
  },
  {
    color: Color.DK,
    text: "Tag W2/W3, ENTER Aztec"
  },
  {
    color: Color.Header,
    text: "--- AZTEC 1 ---"
  },
  {
    color: Color.DK,
    text: "BP, 3 crystals, go to main area"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Guitar to open tunnel door"
  },
  {
    color: Color.Diddy,
    text: "BP, enter Tiny Temple"
  },
  {
    color: Color.Diddy,
    text: "Ledge clip, straight ahead to Tiny GB",
    gbCount: 8
  },
  {
    color: Color.Diddy,
    text: "OKONG to free Tiny, pswim to leave"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "BP, tag by Snide"
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "Gong tower GB, tag by Snide",
    gbCount: 9
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Enter T&S, Key 2, tag W5"
  },
  {
    color: Color.DK,
    text: "Banana push to bonus GB, W5",
    gbCount: 10
  },
  {
    color: Color.DK,
    text: "Roll clip into 5DT for GB",
    gbCount: 11
  },
  {
    color: Color.DK,
    text: "Moonkick/roll clip into Llama Temple"
  },
  {
    color: Color.DK,
    text: "Tag W2, gun skew"
  },
  {
    color: Color.Header,
    text: "--- START SKEW ---"
  },
  {
    color: Color.DK,
    text: "Free Lanky for GB, skew to main area",
    gbCount: 12
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Tag W1, skew to matching game GB",
    gbCount: 13
  },
  {
    color: Color.Lanky,
    text: "Skew to BP, W2, W1"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "W1, W2, lava GB, skew to void out",
    gbCount: 14
  },
  {
    color: Color.Header,
    text: "--- END SKEW ---"
  },
  {
    color: Color.Tiny,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "--- AZTEC 1 DONE ---"
  },
  {
    color: Color.Tiny,
    text: "W2, W1, turn in Key 2"
  },
  {
    color: Color.Tiny,
    text: "Monkeyport to Saxophone GB",
    gbCount: 15
  },
  {
    color: Color.Tiny,
    text: "Fall to Factory Lobby"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "ENTER Factory"
  },
  {
    color: Color.Header,
    text: "--- FACTORY ---"
  },
  {
    color: Color.Lanky,
    text: "Robot push OOB to Tiny cage"
  },
  {
    color: Color.Lanky,
    text: "Continue to pipe GB, drop to tag",
    gbCount: 16
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "Tag W4, drop to BP, slam prod switch"
  },
  {
    color: Color.Diddy,
    text: "Go to storage to tag"
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Free Chunky GB",
    gbCount: 17
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "Key 3, BP, get cage GB",
    gbCount: 18
  },
  {
    color: Color.Tiny,
    text: "Clip to testing room"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "BP, go to R&D"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "BP, back to tag"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Drop to power shed, lever GB",
    gbCount: 19
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "Dark room GB, slam prod switch",
    gbCount: 20
  },
  {
    color: Color.Chunky,
    text: "W4 to crusher GB, climb to tag",
    gbCount: 21
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Cross cylinders, Spring GB, back to tag",
    gbCount: 22
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Cross cylinders, BP"
  },
  {
    color: Color.DK,
    text: "Drop to crusher room, clip to GB, clip to void",
    gbCount: 23
  },
  {
    color: Color.DK,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "--- FACTORY DONE ---"
  },
  {
    color: Color.DK,
    text: "Bongos GB",
    gbCount: 24
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "Punch box"
  },
  {
    color: Color.Tiny,
    tag: Tag.Left,
    text: "BP, W4 to tag"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Tag W5, Japes Lobby, move rock"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "Trombone GB, ENTER Japes",
    gbCount: 25
  },
  {
    color: Color.Header,
    text: "--- JAPES 2 ---"
  },
  {
    color: Color.Lanky,
    text: "W1 to tag"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "Gun skew in river"
  },
  {
    color: Color.Header,
    text: "--- START SKEW ---"
  },
  {
    color: Color.Tiny,
    text: "Twirl to cage GB, W3, BP, stump GB",
    gbCount: 27
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "Wall skew through right log to cage GB",
    gbCount: 28
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "Cage GB",
    gbCount: 29
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "Cage GB, skew in painting room",
    gbCount: 30
  },
  {
    color: Color.Header,
    text: "--- END SKEW ---"
  },
  {
    color: Color.Lanky,
    text: "Clip through wall for GB, leave",
    gbCount: 31
  },
  {
    color: Color.Lanky,
    text: "Through tunnel to BP, bonus GB",
    gbCount: 32
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Pswim to underground"
  },
  {
    color: Color.Chunky,
    text: "BP, underground GB, deathwarp",
    gbCount: 33
  },
  {
    color: Color.Chunky,
    text: "Cannon out, rock GB",
    gbCount: 34
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "W1, EXIT"
  },
  {
    color: Color.Header,
    text: "--- JAPES 2 DONE"
  },
  {
    color: Color.DK,
    text: "W4, drop to cage GB, Galleon Lobby",
    gbCount: 35
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "BP, ENTER Galleon"
  },
  {
    color: Color.Header,
    text: "--- GALLEON ---"
  },
  {
    color: Color.Chunky,
    text: "Shoot switches, chest GB",
    gbCount: 36
  },
  {
    color: Color.Chunky,
    text: "Cannon to tag W3, Key 4"
  },
  {
    color: Color.Chunky,
    text: "Backflip OOB above T&S"
  },
  {
    color: Color.Chunky,
    text: "OOB left to cactus BP"
  },
  {
    color: Color.Tiny,
    tag: Tag.Left,
    text: "Pswim to 5DS GB",
    gbCount: 37
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "Pswim to 5DS GB",
    gbCount: 38
  },
  {
    color: Color.Lanky,
    text: "Pswim to 2DS GB, pswim to leave",
    gbCount: 39
  },
  {
    color: Color.Lanky,
    text: "Pswim to treasure room"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Ledge kick from chest to BP"
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Void on back wall, pswim to lighthouse"
  },
  {
    color: Color.Lanky,
    text: "Enguarde GB at bottom, tag at mermaid",
    gbCount: 40
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "BP, raise water, turn in BPs x4",
    gbCount: 44
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "Turn in BPs x4, W3, BP, void over T&S",
    gbCount: 48
  },
  {
    color: Color.Tiny,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "--- GALLEON DONE ---"
  },
  {
    color: Color.Tiny,
    text: "Pswim to pipe GB, exit Lobby",
    gbCount: 49
  },
  {
    color: Color.Tiny,
    text: "STS to BFI cage GB, W5",
    gbCount: 50
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "Cage GB behind K. Lumsy",
    gbCount: 51
  },
  {
    color: Color.Lanky,
    text: "Sprint GB, turn in Key 4, W1",
    gbCount: 52
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "W5, Hunky Chunky, slam X"
  },
  {
    color: Color.Chunky,
    text: "STS to cage GB, rock GB, Forest Lobby",
    gbCount: 54
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "ENTER Forest"
  },
  {
    color: Color.Header,
    text: "--- FOREST ---"
  },
  {
    color: Color.DK,
    text: "Tag W4, pink tunnel, tag behind mushroom"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Rocket to mushroom top, 5 Homing Ammo"
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Slam switch, dark room GB",
    gbCount: 55
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Drop to BP, jump to Blast platform"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Climb ladder, inside for BP, back out"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "BP, drop to water, pswim to owl area"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "BP, W4, blue tunnel, turn in BPs x5",
    gbCount: 60
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Turn in BPs x5",
    gbCount: 65
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Key 5, turn in BPs x4",
    gbCount: 69
  },
  {
    color: Color.DK,
    text: "Enter mill, clip for GB",
    gbCount: 70
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Exit mill, pswim to cage GB",
    gbCount: 71
  },
  {
    color: Color.Diddy,
    text: "Thorn skew behind barn"
  },
  {
    color: Color.Header,
    text: "--- START SKEW ---"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "BP, left wall to void"
  },
  {
    color: Color.Header,
    text: "--- END SKEW ---"
  },
  {
    color: Color.DK,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "--- FOREST DONE ---"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Exit Lobby, cage GB",
    gbCount: 72
  },
  {
    color: Color.Diddy,
    text: "Fall down waterfall to W3"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "W1, turn in Key 5, W1, W2"
  },
  {
    color: Color.Chunky,
    text: "Move rock, Triangle GB",
    gbCount: 73
  },
  {
    color: Color.Chunky,
    text: "Enter Caves Lobby, Punch left wall"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "BP"
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "Rocket to Guitar GB, ENTER Caves",
    gbCount: 74
  },
  {
    color: Color.Header,
    text: "--- CAVES ---"
  },
  {
    color: Color.Diddy,
    text: "Tag W1, gun skew in river"
  },
  {
    color: Color.Header,
    text: "--- START SKEW ---"
  },
  {
    color: Color.Diddy,
    text: "Cross river, past Funky"
  },
  {
    color: Color.Diddy,
    text: "Skew to BP, tag W4, back out"
  },
  {
    color: Color.Diddy,
    text: "Rocket to tag W5, rocket to bonus GB",
    gbCount: 75
  },
  {
    color: Color.Diddy,
    text: "Fly to T&S over DK cabin"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Key 6, DK cabin GB",
    gbCount: 76
  },
  {
    color: Color.Tiny,
    tag: Tag.Left,
    text: "BP, twirl to 5DC GB",
    gbCount: 77
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "5DC GB",
    gbCount: 78
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "W5 to BP, tag at ice castle"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "BP, kick down right to tag"
  },
  {
    color: Color.Tiny,
    tag: Tag.Left,
    text: "W4 to Monkeyport GB, W4 back",
    gbCount: 79
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "BP, W1, pswim to Gone GB",
    gbCount: 80
  },
  {
    color: Color.Chunky,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "--- CAVES DONE ---"
  },
  {
    color: Color.Chunky,
    text: "Jump left, Punch other wall"
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Damage boost to lava GB",
    gbCount: 81
  },
  {
    color: Color.DK,
    text: "Leave Lobby, W1 to Castle Lobby"
  },
  {
    color: Color.DK,
    text: "Open Kasplat gate"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "BP, ENTER Castle"
  },
  {
    color: Color.Header,
    text: "--- CASTLE ---"
  },
  {
    color: Color.Diddy,
    text: "Climb past warps to tunnel by water"
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "BP, back to tag"
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Leave tunnel, clip into tree for BP"
  },
  {
    color: Color.DK,
    text: "Roll clip to GB, back to warps",
    gbCount: 82
  },
  {
    color: Color.DK,
    text: "Ledge kick to T&S by upper W2, Key 7"
  },
  {
    color: Color.Lanky,
    text: "Clockwise to BP, drop to crypt"
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "BP, back to tag"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "BP, deathwarp, EXIT"
  },
  {
    color: Color.Header,
    text: "--- CASTLE DONE ---"
  },
  {
    color: Color.Tiny,
    text: "Deathwarp, leave Lobby"
  },
  {
    color: Color.Tiny,
    text: "Turn in Keys 7 & 6"
  },
  {
    color: Color.Tiny,
    text: "Monkeyport to Helm Lobby"
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Damage boost to BP, deathwarp, exit Lobby"
  },
  {
    color: Color.DK,
    text: "Kick down to warps, W2 to ENTER Aztec"
  },
  {
    color: Color.Header,
    text: "--- AZTEC 2 ---"
  },
  {
    color: Color.DK,
    text: "W1 to tag"
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "Hunky Chunky, clip on wall light by bonus cage"
  },
  {
    color: Color.Chunky,
    text: "Clip in back to enter 5DT"
  },
  {
    color: Color.Chunky,
    text: "BP, leave 5DT, go to Snide"
  },
  {
    color: Color.Chunky,
    text: "Turn in BPs x3",
    gbCount: 85
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Turn in BPs x4",
    gbCount: 89
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Turn in BPs x4",
    gbCount: 93
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Turn in BPs x3",
    gbCount: 96
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "Turn in BPs x4",
    gbCount: 100
  },
  {
    color: Color.Tiny,
    text: "Lose Beaver Bother, pause exit"
  },
  {
    color: Color.Header,
    text: "--- AZTEC 2 DONE ---"
  },
  {
    color: Color.Tiny,
    text: "W2, Monkeyport to Helm Lobby"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Gone for vines, ENTER Helm"
  },
  {
    color: Color.Header,
    text: "--- HELM ---"
  },
  {
    color: Color.Tiny,
    tag: Tag.Left,
    text: "Kickslide up hills"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Shoot switch, cross vines"
  },
  {
    color: Color.Chunky,
    text: "Terminal clips 1 & 2"
  },
  {
    color: Color.Chunky,
    text: "Key 8, RESET"
  },
  {
    color: Color.Header,
    text: "--- HELM DONE ---"
  },
  {
    color: Color.DK,
    text: "W1, turn in Keys 8 & 3"
  },
  {
    color: Color.DK,
    text: "RESET on cutscene (ship)"
  },
  {
    color: Color.DK,
    text: "W3, ENTER K. Rool"
  },
  ...krool
];
