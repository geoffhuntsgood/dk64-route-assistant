import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const japes1: Step[] = [
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
    text: "Note: cancel Diddy CS w/switch CS"
  },
  {
    color: Color.DK,
    text: "Phase swim to GB, BP",
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
    text: "Phase swim for cave GB, enter T&S"
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
  }
];
