import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const caves: Step[] = [
  {
    color: Color.DK,
    text: "Tag in lobby"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Exit lobby, cage GB",
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
    text: "Triangle GB, enter Caves lobby",
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
    text: "Gun skew to tag W4, BP"
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
    text: "W4, phase swim to Snide"
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
    text: "Phase fall/walk to void, EXIT"
  },
  {
    color: Color.Header,
    text: "CAVES DONE (SPLIT)",
    isHeader: true
  }
];
