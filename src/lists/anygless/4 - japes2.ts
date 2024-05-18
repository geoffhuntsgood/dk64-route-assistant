import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const japes2: Step[] = [
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Punch box"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "BP, W4"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Enter Japes lobby, move rock"
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
    text: "W1, BP, hill bonus GB",
    gbCount: 27
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Caged GB, BP, up to 9 coins",
    gbCount: 28
  },
  {
    color: Color.Tiny,
    text: "Enter hive, stump GB",
    gbCount: 29
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "W5, buy Pineapple, Ammo Belt 1"
  },
  {
    color: Color.Chunky,
    text: "Rock GB",
    gbCount: 30
  },
  {
    color: Color.Chunky,
    text: "Underground GB & BP, EXIT Japes",
    gbCount: 31
  },
  {
    color: Color.Header,
    text: "JAPES 2 DONE (SPLIT)",
    isHeader: true
  }
];
