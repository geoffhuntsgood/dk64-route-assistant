import { Step } from "../classes";
import { Color, Tag } from "../enums";
import { krool } from "./krool";

export const nle40bp: Step[] = [
  {
    color: Color.Header,
    text: "PRE-START"
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
    text: "START!"
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
    text: "Right switch, kick down"
  },
  {
    color: Color.DK,
    text: "Middle switch, tag W1"
  },
  {
    color: Color.DK,
    text: "Note: Diddy/Switch CS cancel"
  },
  {
    color: Color.DK,
    text: "Pswim to GB, BP",
    gbCount: 3
  },
  {
    color: Color.DK,
    text: "Tag W3, left switch"
  },
  {
    color: Color.DK,
    text: "Note: Blast/Switch CS cancel, GB",
    gbCount: 4
  },
  {
    color: Color.DK,
    text: "W2 to GB, get ammo toward Snide",
    gbCount: 5
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Mountain GB, BP",
    gbCount: 6
  },
  {
    color: Color.Diddy,
    text: "Pswim for cave GB, enter T&S",
    gbCount: 7
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Key 1, back to portal"
  },
  {
    color: Color.DK,
    text: "EXIT"
  },
  {
    color: Color.DK,
    text: "W1, turn in Key 1"
  },
  {
    color: Color.DK,
    text: "W1, tag W2/W3"
  },
  {
    color: Color.DK,
    text: "ENTER Aztec"
  },
  {
    color: Color.DK,
    text: "BP, 3 crystals"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Guitar to open tunnel"
  },
  {
    color: Color.Diddy,
    text: "BP, Enter Tiny Temple"
  },
  {
    color: Color.Diddy,
    text: "Ledge clip to Tiny GB",
    gbCount: 8
  },
  {
    color: Color.Diddy,
    text: "OKONG, pswim out"
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
    text: "Bonus GB in sand tunnel"
  },
  {
    color: Color.DK,
    text: "W5, clip in 5DT for GB",
    gbCount: 10
  },
  {
    color: Color.DK,
    text: "Moonkick/roll clip into Llama Temple"
  },
  {
    color: Color.DK,
    text: "Tag W2"
  },
  {
    color: Color.DK,
    text: "--- START SKEW ---"
  },
  {
    color: Color.DK,
    text: "Free Lanky, GB, skew to tag",
    gbCount: 11
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Tag W1, skew to matching game GB",
    gbCount: 12
  },
  {
    color: Color.Lanky,
    text: "Skew to BP, W2, W1"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "W1, W2, lava GB",
    gbCount: 13
  },
  {
    color: Color.Tiny,
    text: "Skew to void out"
  },
  {
    color: Color.Tiny,
    text: "--- END SKEW ---"
  },
  {
    color: Color.Tiny,
    text: "EXIT"
  },
  {
    color: Color.Tiny,
    text: "W2, W1, turn in Key 2"
  },
  {
    color: Color.Tiny,
    text: "Port to Saxohpone GB",
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
    color: Color.Lanky,
    text: "Robot push, pipe GB, drop to tag",
    gbCount: 16
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "Tag W4, drop for BP"
  },
  {
    color: Color.Diddy,
    text: "Slam prod switch, go to storage"
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
    text: "Key 3, BP, cage GB"
  },
  {
    color: Color.Tiny,
    text: "Clip to testing"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "BP, go to R&D"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "BP"
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
    text: "Dark room GB",
    gbCount: 20
  },
  {
    color: Color.Chunky,
    text: "Slam prod switch, W4 to GB",
    gbCount: 21
  },
  {
    color: Color.Chunky,
    text: "Climb platforms to tag"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Spring GB",
    gbCount: 22
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "BP, drop to crusher room"
  },
  {
    color: Color.DK,
    text: "Clip OOB for GB, clip to void out",
    gbCount: 23
  },
  {
    color: Color.DK,
    text: "EXIT"
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
    text: "BP, W4"
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
    color: Color.Lanky,
    text: "W1"
  },
  {
    color: Color.Tiny,
    text: "--- START SKEW ---"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "Cage GB",
    gbCount: 26
  },
  {
    color: Color.Tiny,
    text: "W3, BP, Stump GB",
    gbCount: 27
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "Wall skew for cage GB",
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
    text: "Cage GB",
    gbCount: 30
  },
  {
    color: Color.Lanky,
    text: "Skew in painting room"
  },
  {
    color: Color.Lanky,
    text: "--- END SKEW ---"
  },
  {
    color: Color.Lanky,
    text: "Clip for painting GB",
    gbCount: 31
  },
  {
    color: Color.Lanky,
    text: "BP, bonus GB",
    gbCount: 32
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Pswim underground"
  },
  {
    color: Color.Chunky,
    text: "Underground BP, GB",
    gbCount: 33
  },
  {
    color: Color.Chunky,
    text: "Deathwarp, rock GB",
    gbCount: 34
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "W1, EXIT Japes"
  },
  {
    color: Color.DK,
    text: "W4, drop to cage GB",
    gbCount: 35
  },
  {
    color: Color.DK,
    text: "Galleon Lobby to tag"
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "BP, ENTER Galleon"
  },
  {
    color: Color.Chunky,
    text: "Open gate, chest GB",
    gbCount: 36
  },
  {
    color: Color.Chunky,
    text: "Tag W3, Key 4, OOB to BP"
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
    text: "Pswim to 2DS GB, again to void",
    gbCount: 39
  },
  {
    color: Color.Lanky,
    text: "Pswim into treasure room"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "Ledge kick from chest to BP"
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Pswim to void, BP"
  },
  {
    color: Color.Lanky,
    text: "Pswim to lighthouse"
  },
  {
    color: Color.Lanky,
    text: "Enguarde GB, tag at mermaid",
    gbCount: 40
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "BP, raise water, turn in BPs",
    gbCount: 44
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "Turn in BPs, W3, BP",
    gbCount: 48
  },
  {
    color: Color.Tiny,
    text: "Void above T&S, EXIT"
  },
  {
    color: Color.Tiny,
    text: "Pswim to pipe GB",
    gbCount: 49
  },
  {
    color: Color.Tiny,
    text: "Void at torch, exit Lobby"
  },
  {
    color: Color.Tiny,
    text: "STS to BFI GB, W5",
    gbCount: 50
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "Pswim to cage GB",
    gbCount: 51
  },
  {
    color: Color.Lanky,
    text: "K. Lumsy Sprint GB",
    gbCount: 52
  },
  {
    color: Color.Lanky,
    text: "Turn in Key 4, W1"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "W5, slam big X, STS to cage GB",
    gbCount: 53
  },
  {
    color: Color.Chunky,
    text: "Big X GB, enter Forest Lobby",
    gbCount: 54
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "ENTER Forest"
  },
  {
    color: Color.DK,
    text: "Tag W4, pink tunnel"
  },
  {
    color: Color.DK,
    text: "Tag at inner mushroom moat"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Rocket to mushroom top, get homing"
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
    text: "Fall to BP, fall to Blast platform"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Climb ladder for BP, back out to tag"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "BP, drop to pswim to Owl"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "BP, W4, turn in BPs",
    gbCount: 60
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Turn in BPs",
    gbCount: 65
  },
  {
    color: Color.DK,
    text: "Key 5, turn in BPs",
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
    text: "Thorn skew, tag behind thorn barn"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "BP, EXIT"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Exit Forest Lobby, cage GB",
    gbCount: 72
  },
  {
    color: Color.Diddy,
    text: "Fall to tag W3"
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "W1, turn in Key 5, W1/W2"
  },
  {
    color: Color.Chunky,
    text: "Triangle GB, Caves Lobby",
    gbCount: 73
  },
  {
    color: Color.Chunky,
    text: "Punch left wall"
  },
  {
    color: Color.Lanky,
    tag: Tag.Left,
    text: "BP"
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "Rocket to Guitar GB",
    gbCount: 74
  },
  {
    color: Color.Diddy,
    text: "ENTER Caves"
  },
  {
    color: Color.Diddy,
    text: "Tag W1"
  },
  {
    color: Color.Diddy,
    text: "--- START SKEW ---"
  },
  {
    color: Color.Diddy,
    text: "Cross river, BP, tag W4"
  },
  {
    color: Color.Diddy,
    text: "Rocket to tag W5"
  },
  {
    color: Color.Diddy,
    text: "--- END SKEW ---"
  },
  {
    color: Color.Diddy,
    text: "Rocket to bonus GB",
    gbCount: 75
  },
  {
    color: Color.Diddy,
    text: "Rocket to T&S above DK cabin"
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
    text: "BP, 5DC GB",
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
    text: "W5, BP, tag at ice castle"
  },
  {
    color: Color.DK,
    tag: Tag.Left,
    text: "BP, kick down to tag"
  },
  {
    color: Color.Tiny,
    tag: Tag.Left,
    text: "W4 to ice shield GB, W4",
    gbCount: 79
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "BP, W1, pswim for Gone GB",
    gbCount: 80
  },
  {
    color: Color.Chunky,
    text: "EXIT"
  },
  {
    color: Color.Chunky,
    text: "Jump left, Punch wall"
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Damage boost to lava GB",
    gbCount: 81
  },
  {
    color: Color.DK,
    text: "Exit Lobby, W1, Castle Lobby"
  },
  {
    color: Color.DK,
    text: "Open BP gate"
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "BP, ENTER Castle"
  },
  {
    color: Color.Diddy,
    text: "Climb to warps, enter tunnel"
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "BP"
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Clip in tree for BP"
  },
  {
    color: Color.DK,
    text: "Roll clip for GB",
    gbCount: 82
  },
  {
    color: Color.DK,
    text: "Back to warps, ledge kick to T&S"
  },
  {
    color: Color.Lanky,
    text: "KKO as Lanky, Key 7"
  },
  {
    color: Color.Lanky,
    text: "Clockwise to BP, drop to crypt"
  },
  {
    color: Color.Diddy,
    tag: Tag.Left,
    text: "BP"
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "BP, deathwarp, EXIT"
  },
  {
    color: Color.Tiny,
    text: "Turn in Keys 7 & 6"
  },
  {
    color: Color.Tiny,
    text: "Port to Helm Lobby"
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Damage boost to BP"
  },
  {
    color: Color.DK,
    text: "Exit, kick to warps, W2"
  },
  {
    color: Color.DK,
    text: "ENTER Aztec"
  },
  {
    color: Color.DK,
    text: "W1 to tag"
  },
  {
    color: Color.Chunky,
    tag: Tag.Left,
    text: "Hunky clip OOB by bonus barrel"
  },
  {
    color: Color.Chunky,
    text: "Clip in back to enter 5DT"
  },
  {
    color: Color.Chunky,
    text: "BP, leave 5DT, Snide's"
  },
  {
    color: Color.Chunky,
    text: "Turn in BPs",
    gbCount: 85
  },
  {
    color: Color.DK,
    tag: Tag.Right,
    text: "Turn in BPs",
    gbCount: 89
  },
  {
    color: Color.Diddy,
    tag: Tag.Right,
    text: "Turn in BPs",
    gbCount: 93
  },
  {
    color: Color.Lanky,
    tag: Tag.Right,
    text: "Turn in BPs",
    gbCount: 96
  },
  {
    color: Color.Tiny,
    tag: Tag.Right,
    text: "Turn in BPs",
    gbCount: 100
  },
  {
    color: Color.Tiny,
    text: "Lose Beaver Bother, pause exit"
  },
  {
    color: Color.Tiny,
    text: "W2, Port to Helm Lobby"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Gone for vines, ENTER Helm"
  },
  {
    color: Color.Tiny,
    tag: Tag.Left,
    text: "Kickslide up hill"
  },
  {
    color: Color.Chunky,
    tag: Tag.Right,
    text: "Switch, cross vines"
  },
  {
    color: Color.Chunky,
    text: "Terminal Clips 1 & 2"
  },
  {
    color: Color.Chunky,
    text: "Key 8, RESET"
  },
  {
    color: Color.DK,
    text: "Turn in Keys 8 & 3"
  },
  {
    color: Color.DK,
    text: "RESET on K. Rool ship CS"
  },
  {
    color: Color.DK,
    text: "W3, ENTER K. Rool"
  },
  ...krool
];