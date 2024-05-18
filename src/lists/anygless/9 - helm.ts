import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const helm: Step[] = [
  {
    color: Color.Lanky,
    text: "Deathwarp to tag"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Exit lobby, turn in Keys 6 & 7"
  },
  {
    color: Color.Tiny,
    text: "Port to Saxophone GB, enter Helm lobby",
    gbCount: 100
  },
  {
    color: Color.Chunky,
    text: "ENTER Helm"
  },
  {
    color: Color.Header,
    text: "ENTER HELM (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Slope resets, switch, vines"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Mini through pipe"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Pull lever"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Rocket through stars"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Punch DK gate"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "DK's room"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Punch other gates, Chunky's room"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Tiny's room"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Lanky's room"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Diddy's room, tag DK"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Key 8, EXIT Helm"
  },
  {
    color: Color.Header,
    text: "HELM DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Turn in Keys 8 & 3"
  },
  {
    color: Color.DK,
    text: "RESET after takeoff CS"
  },
  {
    color: Color.DK,
    text: "ENTER K. ROOL"
  }
];
