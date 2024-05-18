import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const endgame: Step[] = [
  {
    color: Color.Diddy,
    text: "Rocket to bonus GB",
    gbCount: 198
  },
  {
    color: Color.Diddy,
    text: "Waterfall cage GB, drop to W3",
    gbCount: 199
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "W5 to fairy cage GB",
    gbCount: 200
  },
  {
    color: Color.Tiny,
    text: "Rare Banana, W5, W3, ENTER K. Rool",
    gbCount: 201
  }
];
