import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const aztec: Step[] = [
  {
    color: Color.DK,
    text: "Tag W5/W1, turn in Key 1"
  },
  {
    color: Color.DK,
    text: "W1, tag W2/W3, ENTER Aztec"
  },
  {
    color: Color.Header,
    text: "ENTER AZTEC (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "BP, 3 coins, quicksand bunches (10)"
  },
  {
    color: Color.DK,
    text: "Buy Bongos"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Tag W1, Guitar, temple balloon (10)"
  },
  {
    color: Color.Diddy,
    text: "Enter Tiny Temple, thaw (28), 1 coin"
  },
  {
    color: Color.Diddy,
    text: "6 singles to Tiny (34), GKONG"
  },
  {
    color: Color.Diddy,
    text: "4 coins & Tiny GB",
    gbCount: 9
  },
  {
    color: Color.Diddy,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Diddy,
    text: "W1, open back of Aztec"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "4 oasis coins, BP, buy Mini"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Buy Rocket"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Balloons (30), tag W2, Blast course"
  },
  {
    color: Color.DK,
    text: "Llama Temple balloon (43), enter"
  },
  {
    color: Color.DK,
    text: "Bongo pad (47), coins up to 7"
  },
  {
    color: Color.DK,
    text: "3 singles on right ramp, 1 on stair (51)"
  },
  {
    color: Color.DK,
    text: "Free Lanky, left stairs (57), tag W1",
    gbCount: 10,
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "1 coin, tag W2 by Kasplat, lava GB",
    gbCount: 11
  },
  {
    color: Color.Tiny,
    text: "EXIT/ENTER, W1"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Climb 3 trees, llama GB (75)",
    gbCount: 12
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "BP, 2 coins, W2 (39)"
  },
  {
    color: Color.Diddy,
    text: "6 singles (45), tower GB",
    gbCount: 13
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "W5 coins, buy Feather, enter T&S"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Feed T&S"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Feed T&S, Key 2"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "W4 coins, Grape, enter Llama Temple"
  },
  {
    color: Color.Lanky,
    text: "W2, BP, W2, W1, matching game",
    gbCount: 14
  },
  {
    color: Color.Lanky,
    text: "1 coin over lava, EXIT"
  },
  {
    color: Color.Header,
    text: "AZTEC DONE (SPLIT)",
    isHeader: true
  }
];
