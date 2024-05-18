import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const factory: Step[] = [
  {
    color: Color.Tiny,
    text: "W2, W1, turn in Key 2"
  },
  {
    color: Color.Tiny,
    text: "Monkeyport, Saxophone GB",
    gbCount: 15
  },
  {
    color: Color.Tiny,
    text: "Factory lobby to tag"
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
    text: "Phase fall/walk to testing, BP"
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
  }
];
