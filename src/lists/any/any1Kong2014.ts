import { RouteSection } from "../../classes";
import { Color } from "../../enums";
import { isgPreStart, krool } from "../../utils/sections";

export const any1Kong2014: RouteSection[] = [
  isgPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Pseudo-dive, pswim escape"
      },
      {
        color: Color.DK,
        text: "Fall or Uncrouch TBS"
      },
      {
        color: Color.DK,
        text: "Hold down left for 2-3 rotations, Z to tag"
      },
      {
        color: Color.DK,
        text: "Jump on Krem Isle, 1st telegrab"
      },
      {
        color: Color.DK,
        text: "- Fast 2nd grab: climb, roll in eye"
      },
      {
        color: Color.DK,
        text: "- Stable 2nd grab: fall, pause, climb",
      },
      {
        color: Color.DK,
        text: "Helm Lobby Kick or pwalk"
      },
      {
        color: Color.DK,
        text: "B. Locker CS skip, ENTER Helm"
      },
    ]
  },
  {
    name: "HELM",
    steps: [
      {
        color: Color.DK,
        text: "Slope resets on first hill"
      },
      {
        color: Color.DK,
        text: "Switch kick, roll parallel to lava"
      },
      {
        color: Color.DK,
        text: "Backflip onto corner in Chunky's room"
      },
      {
        color: Color.DK,
        text: "Left to beam, 180 and roll out"
      },
      {
        color: Color.DK,
        text: "Lanky's Room: roll between grate/glass"
      },
      {
        color: Color.DK,
        text: "Backflip in bounds in floor strip"
      },
      {
        color: Color.DK,
        text: "Backup: backflip through wheel"
      },
      {
        color: Color.DK,
        text: "Terminal clip 2, roll to end"
      },
      {
        color: Color.DK,
        text: "Backflip to Key 8 (look at window!)"
      },
      {
        color: Color.DK,
        text: "Key 8, pause quit"
      },
    ]
  },
  {
    name: "ISG",
    steps: [
      {
        color: Color.Header,
        text: "Start timer w/ISG, enter file 1"
      },
      {
        color: Color.DK,
        text: "Enter Cranky's between 40-50 on timer"
      },
      {
        color: Color.DK,
        text: "Cancel Cranky's text at 0:55"
      },
      {
        color: Color.DK,
        text: "Enter Barrel barrel at 1:24.5"
      },
      {
        color: Color.DK,
        text: "Complete barrel, roll to far W3"
      },
      {
        color: Color.DK,
        text: "Pause quit, start to cancel at 2:49"
      },
      {
        color: Color.Header,
        text: "EXAMINE FILE 1!!!!!"
      },
      {
        color: Color.Header,
        text: "Enter/exit Kong battle"
      },
      {
        color: Color.Header,
        text: "Enter/exit Factory boss"
      },
      {
        color: Color.Header,
        text: "Wait on main screen for CS pull-in"
      },
    ]
  },
  {
    name: "ISLES TO FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "Roll to W4, enter Factory Lobby"
      },
      {
        color: Color.DK,
        text: "Phase fall/phasewalk into Factory"
      },
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.DK,
        text: "Kick through Chunky cutscene"
      },
      {
        color: Color.DK,
        text: "TAG W1!!!"
      },
      {
        color: Color.DK,
        text: "Robot push OOB, roll until you fall"
      },
      {
        color: Color.DK,
        text: "Enter T&S"
      },
      {
        color: Color.DK,
        text: "DK Mad Jack for Key 3"
      },
      {
        color: Color.DK,
        text: "Exit via W1"
      },
    ]
  },
  {
    name: "FACTORY TO K. ROOL",
    steps: [
      {
        color: Color.DK,
        text: "Leave Lobby, fall to K. Lumsy"
      },
      {
        color: Color.DK,
        text: "Turn in Keys 8 and 3"
      },
      {
        color: Color.DK,
        text: "W1/W3 to K. Rool"
      },
    ]
  },
  krool
];
