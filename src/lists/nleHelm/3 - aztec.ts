import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const aztec: Step[] = [
  {
    color: Color.DK,
    text: "W1 to turn in Key 1"
  },
  {
    color: Color.DK,
    text: "W1, tag W2/W3, BFI camera"
  },
  {
    color: Color.DK,
    text: "ENTER Aztec"
  },
  {
    color: Color.Header,
    text: "ENTER AZTEC (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "BP, 3 crystals"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "BP, enter Tiny Temple"
  },
  {
    color: Color.Diddy,
    text: "Ledge clip to Tiny GB",
    gbCount: 8
  },
  {
    color: Color.Diddy,
    text: "OKONG, phase swim out"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Torch clip to Klaptrap GB",
    gbCount: 9
  },
  {
    color: Color.Tiny,
    text: "Guitar Skip, BP, tag at Snide"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Gong tower GB, tag at Snide",
    gbCount: 10
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Enter T&S by W5, Key 2"
  },
  {
    color: Color.DK,
    text: "Tag W5, bonus GB, W5",
    gbCount: 11
  },
  {
    color: Color.DK,
    text: "Moonkick/roll clip into Llama Temple"
  },
  {
    color: Color.DK,
    text: "Tag W2, gun dive START SKEW"
  },
  {
    color: Color.DK,
    text: "Free Lanky, GB, skew to tag",
    gbCount: 12
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Tag W1, skew to matching game",
    gbCount: 13
  },
  {
    color: Color.Lanky,
    text: "Skew to BP, W2, W1"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "W1, W2, lava GB, void out END SKEW",
    gbCount: 14
  },
  {
    color: Color.Header,
    text: "AZTEC DONE (SPLIT)",
    isHeader: true
  }
];
