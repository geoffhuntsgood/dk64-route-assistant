import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const castle: Step[] = [
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Lava GB, exit lobby, W1",
    gbCount: 86
  },
  {
    color: Color.DK,
    text: "Castle lobby, open BP"
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
    text: "Swim into tree, BP, GB",
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
  }
];
