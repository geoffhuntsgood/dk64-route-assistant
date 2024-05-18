import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const forest: Step[] = [
  {
    color: Color.Tiny,
    text: "Phase swim to pipe GB",
    gbCount: 47
  },
  {
    color: Color.Tiny,
    text: "Phase swim to void, exit lobby"
  },
  {
    color: Color.Tiny,
    text: "STS to BFI GB, W5",
    gbCount: 48
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Phase swim to cage GB",
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
    text: "Big X GB, enter Forest lobby",
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
    text: "BP, gun dive, phase swim to Owl"
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
    text: "Exit mill, phase swim to cage GB",
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
  }
];