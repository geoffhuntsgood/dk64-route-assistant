import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const galleon: Step[] = [
  {
    color: Color.DK,
    text: "W4, cage GB, Galleon lobby",
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
    text: "Cannon skew for cannon spawn snag",
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
    text: "Phase swim to 5DS GB",
    gbCount: 43
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Phase swim to 5DS GB",
    gbCount: 44
  },
  {
    color: Color.Lanky,
    text: "Phase swim for 2DS GB",
    gbCount: 45
  },
  {
    color: Color.Lanky,
    text: "Phase swim to void, BP"
  },
  {
    color: Color.Lanky,
    text: "Phase swim to lighthouse"
  },
  {
    color: Color.Lanky,
    text: "Enguarde GB, tag near mermaid"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Phase swim to void, EXIT"
  },
  {
    color: Color.Header,
    text: "GALLEON DONE (SPLIT)",
    isHeader: true
  }
];
