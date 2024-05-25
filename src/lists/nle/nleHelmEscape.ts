import { Step } from "../../classes/Step";
import { Color, Tag } from "../../enums";
import { krool } from "../krool";

export const nleHelmEscape: Step[] = [
  {
    color: Color.Header,
    text: "PRE-START",
    isHeader: true
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
    text: "START!",
    isHeader: true
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
    text: "Tag W4/W1, K. Lumsy"
  },
  {
    color: Color.DK,
    text: "W1, entrance GB to Japes",
    gbCount: 1
  },
  {
    color: Color.DK,
    text: "ENTER Japes"
  },
  {
    color: Color.Header,
    text: "ENTER JAPES 1 (SPLIT)",
    isHeader: true
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
    text: "Note: Blast to cancel CS, GB",
    gbCount: 4
  },
  {
    color: Color.DK,
    text: "W2 to GB, get ammo toward Snide",
    gbCount: 5
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
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
    tagDirection: Tag.Left,
    text: "Key 1, torch clip to void"
  },
  {
    color: Color.DK,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "JAPES 1 DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "W1, turn in Key 1"
  },
  {
    color: Color.DK,
    text: "W1, tag W2/W3, BFI camera"
  },
  {
    color: Color.DK,
    text: "ENTER Aztec"
  },
  {
    color: Color.Header,
    text: "ENTER AZTEC (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "BP, 3 crystals"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "BP, enter Tiny Temple"
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
    tagDirection: Tag.Right,
    text: "Torch clip to Klaptrap GB",
    gbCount: 9
  },
  {
    color: Color.Tiny,
    text: "Guitar Skip, BP, tag at Snide"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Gong tower GB, tag at Snide",
    gbCount: 10
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Enter T&S by W5, Key 2"
  },
  {
    color: Color.DK,
    text: "Tag W5, bonus GB, W5",
    gbCount: 11
  },
  {
    color: Color.DK,
    text: "Moonkick/roll clip in Llama Temple"
  },
  {
    color: Color.DK,
    text: "Tag W2, gun dive START SKEW"
  },
  {
    color: Color.DK,
    text: "Free Lanky, GB, skew to tag",
    gbCount: 12
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Tag W1, skew to matching game",
    gbCount: 13
  },
  {
    color: Color.Lanky,
    text: "Skew to BP, W2, W1"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "W1, W2, lava GB, void out END SKEW",
    gbCount: 14
  },
  {
    color: Color.Header,
    text: "AZTEC DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    text: "W2, W1, turn in Key 2"
  },
  {
    color: Color.Tiny,
    text: "Port, Saxophone GB",
    gbCount: 15
  },
  {
    color: Color.Tiny,
    text: "Factory Lobby to tag"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "ENTER Factory"
  },
  {
    color: Color.Header,
    text: "ENTER FACTORY (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Lanky,
    text: "Robot push to Tiny's cage"
  },
  {
    color: Color.Lanky,
    text: "OOB to pipe GB, drop to tag",
    gbCount: 16
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Tag W4, drop to BP"
  },
  {
    color: Color.Diddy,
    text: "Slam switch, storage to tag"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Free Chunky GB",
    gbCount: 17
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "HEADPHONES, BP"
  },
  {
    color: Color.Tiny,
    text: "Cage GB, tag in T&S",
    gbCount: 18
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Pfall/pwalk to testing, BP"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "BP, Ostand TBS for piano GB",
    gbCount: 19
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Exit TBS as DK, push OOB"
  },
  {
    color: Color.DK,
    text: "Drop to shed, lever GB",
    gbCount: 20
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Dark room GB, prod switch",
    gbCount: 21
  },
  {
    color: Color.Chunky,
    text: "W4 to crusher GB, tag near T&S",
    gbCount: 22
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Spring GB",
    gbCount: 23
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Enter T&S, Key 3"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "BP, drop to crusher room"
  },
  {
    color: Color.DK,
    text: "Clip OOB for GB, clip to void out",
    gbCount: 24
  },
  {
    color: Color.DK,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "FACTORY DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Bongos GB",
    gbCount: 25
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Punch box"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "BP, leave Lobby, W4"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Tag W5, Japes Lobby, move rock"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Trombone GB, ENTER Japes",
    gbCount: 26
  },
  {
    color: Color.Header,
    text: "ENTER JAPES 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Lanky,
    text: "W1 to tag"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Gun skew, cage GB START SKEW",
    gbCount: 27
  },
  {
    color: Color.Tiny,
    text: "W3, BP, Stump GB",
    gbCount: 28
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Wall skew for cage GB",
    gbCount: 29
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Cage GB",
    gbCount: 30
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Cage GB, skew in painting room",
    gbCount: 31
  },
  {
    color: Color.Lanky,
    text: "END SKEW, clip for GB",
    gbCount: 32
  },
  {
    color: Color.Lanky,
    text: "BP, bonus GB",
    gbCount: 33
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Pswim underground"
  },
  {
    color: Color.Chunky,
    text: "BP, GB, deathwarp, rock GB",
    gbCount: 35
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "W1, EXIT Japes"
  },
  {
    color: Color.Header,
    text: "JAPES 2 DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "W4, cage GB, Galleon Lobby",
    gbCount: 36
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "BP, ENTER Galleon"
  },
  {
    color: Color.Header,
    text: "ENTER GALLEON (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Chest GB, tag W3",
    gbCount: 37
  },
  {
    color: Color.Chunky,
    text: "Cannon skew, cannon spawn snag",
    gbCount: 38
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "BP, raise water"
  },
  {
    color: Color.Diddy,
    text: "Turn in BPs, tag by Snide",
    gbCount: 42
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "W3, BP, tag in T&S"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Key 4, OOB to cactus BP"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Pswim to 5DS GB",
    gbCount: 43
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Pswim to 5DS GB",
    gbCount: 44
  },
  {
    color: Color.Lanky,
    text: "Pswim for 2DS GB",
    gbCount: 45
  },
  {
    color: Color.Lanky,
    text: "Pswim to void, BP"
  },
  {
    color: Color.Lanky,
    text: "Pswim to lighthouse"
  },
  {
    color: Color.Lanky,
    text: "Enguarde GB, tag near mermaid"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Pswim to void, EXIT"
  },
  {
    color: Color.Header,
    text: "GALLEON DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    text: "Pswim to pipe GB",
    gbCount: 47
  },
  {
    color: Color.Tiny,
    text: "Pswim to void, exit Lobby"
  },
  {
    color: Color.Tiny,
    text: "STS to BFI GB, W5",
    gbCount: 48
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Pswim to cage GB",
    gbCount: 49
  },
  {
    color: Color.Lanky,
    text: "Sprint GB, turn in Key 4, W1",
    gbCount: 50
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "W5, slam X, STS to cage GB",
    gbCount: 51
  },
  {
    color: Color.Chunky,
    text: "Big X GB, enter Forest Lobby",
    gbCount: 52
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "ENTER Forest"
  },
  {
    color: Color.Header,
    text: "ENTER FOREST (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Pink tunnel to mushroom"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Shoot switch"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Shoot switch"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Shoot switch"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Shoot switch"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "CS overlap for cannon GB",
    gbCount: 53
  },
  {
    color: Color.DK,
    text: "Exit to top, clockwise to tag"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Slam switch, dark room GB",
    gbCount: 54
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Fall to BP, fall to Blast"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Climb into mushroom, BP, back out"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "BP, gun dive, pswim to Owl"
  },
  {
    color: Color.Tiny,
    text: "START SKEW"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "BP"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Skew into anthill GB END SKEW",
    gbCount: 55
  },
  {
    color: Color.Tiny,
    text: "Turn in BPs, enter T&S",
    gbCount: 61
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Key 5, enter mill, clip for GB",
    gbCount: 62
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Exit mill, pswim to cage GB",
    gbCount: 63
  },
  {
    color: Color.Diddy,
    text: "Thorn skew, tag DK behind barn"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "BP, EXIT"
  },
  {
    color: Color.Header,
    text: "FOREST DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Tag in Lobby"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Exit Lobby, cage GB",
    gbCount: 64
  },
  {
    color: Color.Diddy,
    text: "Fall to W3"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "W1, turn in Key 5, W1, W2"
  },
  {
    color: Color.Chunky,
    text: "Triangle GB, Caves Lobby",
    gbCount: 65
  },
  {
    color: Color.Chunky,
    text: "Punch left wall"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "BP"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Rocket to Guitar GB, ENTER Caves",
    gbCount: 66
  },
  {
    color: Color.Header,
    text: "ENTER CAVES (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Diddy,
    text: "Gun skew, tag W4, BP"
  },
  {
    color: Color.Diddy,
    text: "Rocket to tag W5, rocket to back"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "DK Cabin GB, 5DC GB",
    gbCount: 68
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "5DC GB",
    gbCount: 69
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "W5, BP, tag at ice castle"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "BP, kick down to tag"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Gun skew to Gone GB, HEADPHONES",
    gbCount: 70
  },
  {
    color: Color.Chunky,
    text: "Skew to ice shield GB, BP",
    gbCount: 71
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "W4, Monkeyport GB",
    gbCount: 72
  },
  {
    color: Color.Tiny,
    text: "W4, pswim to Snide"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Turn in BPs",
    gbCount: 79
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Key 6, turn in BPs",
    gbCount: 85
  },
  {
    color: Color.Chunky,
    text: "Pfall/pwalk to void, EXIT"
  },
  {
    color: Color.Header,
    text: "CAVES DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Lava GB, exit Lobby, W1",
    gbCount: 86
  },
  {
    color: Color.DK,
    text: "Castle Lobby, open BP"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "BP, deathwarp"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "ENTER Castle"
  },
  {
    color: Color.Header,
    text: "ENTER CASTLE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Pswim/pwalk in tree, BP, GB",
    gbCount: 87
  },
  {
    color: Color.DK,
    text: "Airswim to crypt"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "BP, exit crypt, rocket to top"
  },
  {
    color: Color.Diddy,
    text: "Turn in BPs",
    gbCount: 91
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Turn in BPs, library clip for GB",
    gbCount: 98
  },
  {
    color: Color.DK,
    text: "Down to ballroom tag"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Shed GB, enter T&S, start KKO",
    gbCount: 99
  },
  {
    color: Color.Tiny,
    text: "Finish KKO as Tiny, Key 7"
  },
  {
    color: Color.Tiny,
    text: "Trash GB, death jump, EXIT",
    gbCount: 100
  },
  {
    color: Color.Header,
    text: "CASTLE DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    text: "Turn in Keys 7 and 6"
  },
  {
    color: Color.Tiny,
    text: "Port to Helm Lobby"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Gone for vines, ENTER Helm"
  },
  {
    color: Color.Header,
    text: "ENTER HELM (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Kickslide up hill"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Shoot switch, vines"
  },
  {
    color: Color.Chunky,
    text: "Terminal clips 1 & 2"
  },
  {
    color: Color.Chunky,
    text: "Key 8, pfall/pwalk to escape"
  },
  {
    color: Color.Header,
    text: "HELM DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Leave, turn in Keys 8 & 3"
  },
  {
    color: Color.Chunky,
    text: "W3, ENTER K. Rool"
  },
  ...krool
];
