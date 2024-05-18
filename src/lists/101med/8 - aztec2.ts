import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const aztec2: Step[] = [
  {
    color: Color.Chunky,
    text: "Move lobby rock"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Bonus GB, leave lobby",
    gbCount: 85
  },
  {
    color: Color.Lanky,
    text: "Phase swim to caged GB",
    gbCount: 86
  },
  {
    color: Color.Lanky,
    text: "Sprint GB, turn in keys 8, 3 on the way",
    gbCount: 87
  },
  {
    color: Color.Lanky,
    text: "Turn in key 4, W1"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "W2, move Lanky rock, drop to tag"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "W2 to music pad, ENTER Aztec",
  },
  {
    color: Color.Header,
    text: "ENTER AZTEC 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Lanky,
    text: "Vulture GB, up to (19), BC",
    gbCount: 88
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER, W1"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Cage clip to bonus GB, (6) by Snide",
    gbCount: 89
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Beetle Race GB (20)",
    gbCount: 90
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Enter Llama Temple, tag W2/W1 (75)"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Fairy, bonus GB",
    gbCount: 91
  },
  {
    color: Color.Lanky,
    text: "START SKEW to balloons (39)"
  },
  {
    color: Color.Lanky,
    text: "Climb stairs (42), W1 (47)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Lava room GB (35)",
    gbCount: 92
  },
  {
    color: Color.Tiny,
    text: "W2, balloon (45), W1"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Matching game GB",
    gbCount: 93
  },
  {
    color: Color.Lanky,
    text: "Skew to BP, W2, leave (50) END SKEW"
  },
  {
    color: Color.Lanky,
    text: "Climb 3 trees (65)"
  },
  {
    color: Color.Lanky,
    text: "5DT GB (R, R), balloon (75)",
    gbCount: 94
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Path and 3 trees (65)"
  },
  {
    color: Color.Tiny,
    text: "5DT GB (L, L), Fairy",
    gbCount: 95
  },
  {
    color: Color.Tiny,
    text: "2 trees (75), enter T&S"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Dogadon as Chunky"
  },
  {
    color: Color.Header,
    text: "KEY 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "5DT GB (26), BP",
    gbCount: 96
  },
  {
    color: Color.Chunky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Chunky,
    text: "Vase Room GB (47), W1 (48)",
    gbCount: 97
  },
  {
    color: Color.Chunky,
    text: "Enter Tiny Temple, bunches (75), GB",
    gbCount: 98
  },
  {
    color: Color.Chunky,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "AZTEC 2 DONE (SPLIT)",
    isHeader: true
  }
];
