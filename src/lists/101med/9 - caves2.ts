import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const caves2: Step[] = [
  {
    color: Color.Chunky,
    text: "Leave lobby, triangle GB",
    gbCount: 99
  },
  {
    color: Color.Chunky,
    text: "Enter Caves lobby, punch left wall"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "BP"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Guitar GB, ENTER Caves",
    gbCount: 100
  },
  {
    color: Color.Header,
    text: "ENTER CAVES 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Diddy,
    text: "Tag W2, Funky (5), Tag W5"
  },
  {
    color: Color.Diddy,
    text: "Rocket to bonus GB (10), fly to T&S",
    gbCount: 101
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Army Dillo 2"
  },
  {
    color: Color.Header,
    text: "KEY 6 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "DK Cabin GB, BC (5)",
    gbCount: 102
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "W2 (10), phase swim to Gone GB (18)",
    gbCount: 103
  },
  {
    color: Color.Chunky,
    text: "W2 cutscene skip (?), Snide (30)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Swim to tag W4 (2), tag W1, W3 (5)"
  },
  {
    color: Color.Tiny,
    text: "Tiny 5DI GB, fairy (20)",
    gbCount: 104
  },
  {
    color: Color.Tiny,
    text: "Ice shield GB, port to balloon (35)",
    gbCount: 105
  },
  {
    color: Color.Tiny,
    text: "W4, mini to bonus GB, W3 (45)",
    gbCount: 106
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Lanky 5DI GB (15)",
    gbCount: 107
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Lanky,
    text: "W2 to cabin GB (30), balloon (40)",
    gbCount: 108
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "BP, balloon (55), 5DC GB (75)",
    gbCount: 109
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "5DC GB (50)",
    gbCount: 110
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "5DC GB (15)",
    gbCount: 111
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Balloon (20), upper 5DC GB (35), fairy",
    gbCount: 112
  },
  {
    color: Color.Diddy,
    text: "Lower 5DC GB (43)",
    gbCount: 113
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "W5 for BP (60)"
  },
  {
    color: Color.Lanky,
    text: "Ice Tomato, balloon (70)",
    gbCount: 114
  },
  {
    color: Color.Lanky,
    text: "Beetle Race (75)",
    gbCount: 115
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "BP, W1 to 5DI GB (50)",
    gbCount: 116
  },
  {
    color: Color.DK,
    text: "Blast course (75)",
    gbCount: 117
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "W4 to BP, balloon (65)"
  },
  {
    color: Color.Diddy,
    text: "5DI GB (75)",
    gbCount: 118
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "W3 for balloon (60), 5DI GB (70), BP",
    gbCount: 119
  },
  {
    color: Color.Chunky,
    text: "Ice shield GB (75)",
    gbCount: 120
  },
  {
    color: Color.Chunky,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "CAVES 2 DONE (SPLIT)",
    isHeader: true
  }
];
