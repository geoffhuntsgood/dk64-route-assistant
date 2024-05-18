import { Step } from "../../components/Step";
import { Color, Tag } from "../../enums";

export const startAndJapes1: Step[] = [
  {
    color: Color.Header,
    text: "PRE-START",
    isHeader: true
  },
  {
    color: Color.Header,
    text: "Story Skip on, delete File 1"
  },
  {
    color: Color.Header,
    text: "START!",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Complete all training barrels"
  },
  {
    color: Color.Header,
    text: "TRAINING DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Get Slam and exit to main"
  },
  {
    color: Color.DK,
    text: "DON'T TAG WARPS! Visit K. Lumsy"
  },
  {
    color: Color.DK,
    text: "Japes entrance GB, ENTER Japes",
    gbCount: 1
  },
  {
    color: Color.Header,
    text: "ENTER JAPES 1 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Jump to switch from tree, 3 coins"
  },
  {
    color: Color.DK,
    text: "Tag W1 to skip Diddy CS"
  },
  {
    color: Color.DK,
    text: "Tag left W3 (5), climb vine"
  },
  {
    color: Color.DK,
    text: "Trigger BC text, buy Coconut"
  },
  {
    color: Color.DK,
    text: "Cannon to GB",
    gbCount: 2
  },
  {
    color: Color.DK,
    text: "Fall to T&S (10)"
  },
  {
    color: Color.DK,
    text: "Fall to right switch, tag/use W3 (15)"
  },
  {
    color: Color.DK,
    text: "Balloon (25), left switch, climb vine"
  },
  {
    color: Color.DK,
    text: "Climb tree for switch (30), skip CS"
  },
  {
    color: Color.DK,
    text: "Get BC, cannon to 2nd GB",
    gbCount: 3
  },
  {
    color: Color.DK,
    text: "Go to Snide, 5 singles, balloon (45)"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Tag W4, BP, 3 coins, go to Cranky"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Balloon (55), Rambi (60), 3 coins"
  },
  {
    color: Color.DK,
    text: "Break Tiny, Diddy & DK huts"
  },
  {
    color: Color.DK,
    text: "Hit switch (65), buy Blast"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Buy Charge, hit switch, W4"
  },
  {
    color: Color.Diddy,
    text: "3 coins in river, caged GB",
    gbCount: 4
  },
  {
    color: Color.Diddy,
    text: "Buy Peanut, mountain, 1 coin (clip!)"
  },
  {
    color: Color.Diddy,
    text: "Mountain GB, tag W5",
    gbCount: 5
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Caged GB",
    gbCount: 6
  },
  {
    color: Color.DK,
    text: "BP, Blast course for GB",
    gbCount: 7
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Tunnel GB, 2 coins, enter T&S",
    gbCount: 8
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Feed T&S, Key 1, EXIT"
  },
  {
    color: Color.Header,
    text: "JAPES 1 DONE (SPLIT)",
    isHeader: true
  }
];
