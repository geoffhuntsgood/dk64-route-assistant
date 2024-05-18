import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const galleon: Step[] = [
  {
    color: Color.Chunky,
    text: "W4, Snide BC"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Spring to bonus GB",
    gbCount: 32
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Fall to caged GB, enter Galleon lobby",
    gbCount: 33
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "BP, ENTER Galleon"
  },
  {
    color: Color.Header,
    text: "ENTER GALLEON (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Open gate, 3 coins"
  },
  {
    color: Color.Chunky,
    text: "Cannon game GB, balloon (10)",
    gbCount: 34
  },
  {
    color: Color.Chunky,
    text: "Cannon to tag W3, singles to T&S (13)"
  },
  {
    color: Color.Chunky,
    text: "BC, chest GB (20), W2 bunch (25)",
    gbCount: 35
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Open shipyard gate"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Tunnel bunches (15)"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Tunnel bunches (40)"
  },
  {
    color: Color.Chunky,
    text: "BP, balloon (50), 5 coins max"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "5DS pad, ship bunch, box balloon (20)"
  },
  {
    color: Color.Lanky,
    text: "5DS GB & bunches (35)",
    gbCount: 36
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Lanky,
    text: "BP, singles (40), BC balloons (60)"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Open lighthouse gate, raise water"
  },
  {
    color: Color.DK,
    text: "Lighthouse GB (45), balloon (55)",
    gbCount: 37
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Turn in BPs, ship switch, balloon (10)",
    gbCount: 40
  },
  {
    color: Color.Diddy,
    text: "Lighthouse GB, bunches (20), BP",
    gbCount: 41
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Enguarde, break chests: R, L, DL, GB",
    gbCount: 42
  },
  {
    color: Color.Lanky,
    text: "Bunches: DL, L, 2 singles, R (77)"
  },
  {
    color: Color.Lanky,
    text: "Turn in BPs",
    gbCount: 46
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Turn in BPs",
    gbCount: 50
  },
  {
    color: Color.Chunky,
    text: "Ship GB (75) (2 punches), 7 coins max",
    gbCount: 51
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Snide balloon (10), turn in BPs",
    gbCount: 55
  },
  {
    color: Color.Tiny,
    text: "W3 (20), BP & singles (23), enter T&S"
  },
  {
    color: Color.Tiny,
    text: "Feed T&S"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Feed T&S"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Feed T&S"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Feed T&S"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Feed T&S, Key 4, EXIT Galleon"
  },
  {
    color: Color.Header,
    text: "GALLEON DONE (SPLIT)",
    isHeader: true
  }
];
