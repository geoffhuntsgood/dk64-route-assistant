import { RouteSection } from "../classes";
import { Color, Tag } from "../enums";
import { defaultPreStart } from "../utils/sections";

export const glitchlessAll: RouteSection[] = [
  defaultPreStart,
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Cranky, training, slam, leave"
      },
      {
        color: Color.DK,
        text: "K. Lumsy (don't tag warps)"
      },
      {
        color: Color.DK,
        text: "Japes entrance GB",
        totals: {
          gbs: 1
        }
      },
      {
        color: Color.DK,
        text: "ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES 1",
    steps: [
      {
        color: Color.DK,
        text: "Swing to switch (5), 3 coins"
      },
      {
        color: Color.DK,
        text: "Diddy/warp CS overlap"
      },
      {
        color: Color.DK,
        text: "Tag left W3 (10)"
      },
      {
        color: Color.DK,
        text: "Clear BC text, buy Coconut"
      },
      {
        color: Color.DK,
        text: "Cannon to Diddy GB",
        totals: {
          gbs: 2
        }
      },
      {
        color: Color.DK,
        text: "Fall to T&S (15)"
      },
      {
        color: Color.DK,
        text: "1st switch, W3 (20)"
      },
      {
        color: Color.DK,
        text: "Balloon (30), 2nd switch"
      },
      {
        color: Color.DK,
        text: "Funky tree (35)"
      },
      {
        color: Color.DK,
        text: "3rd switch/BC overlap",
        totals: {
          crowns: 1
        }
      },
      {
        color: Color.DK,
        text: "Cannon to 2nd GB",
        totals: {
          gbs: 3
        }
      },
      {
        color: Color.DK,
        text: "Single (36), drop, tag W4"
      },
      {
        color: Color.DK,
        text: "To Cranky (45), balloon (55)"
      },
      {
        color: Color.DK,
        text: "3 coins, Rambi (60)"
      },
      {
        color: Color.DK,
        text: "Left huts, wall, right huts"
      },
      {
        color: Color.DK,
        text: "Switch (65), buy Blast"
      },
      {
        color: Color.DK,
        text: "Tag W4"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Switch (5), W4"
      },
      {
        color: Color.Diddy,
        text: "Water bunches (15), 3 coins"
      },
      {
        color: Color.Diddy,
        text: "Cage GB, buy Peanut",
        totals: {
          gbs: 4
        }
      },
      {
        color: Color.Diddy,
        text: "Up to Snide, 3 singles (18)"
      },
      {
        color: Color.Diddy,
        text: "Switch, enter mountain"
      },
      {
        color: Color.Diddy,
        text: "Bridge clip, 1 coin, switch"
      },
      {
        color: Color.Diddy,
        text: "Leave, up to GB, balloon (28)",
        totals: {
          gbs: 5
        }
      },
      {
        color: Color.Diddy,
        text: "Singles (32), re-enter mountain"
      },
      {
        color: Color.Diddy,
        text: "River (37), balloon (47), bunch (52)"
      },
      {
        color: Color.Diddy,
        text: "Charge skip, minecart GB (57)",
        totals: {
          gbs: 6
        }
      },
      {
        color: Color.Diddy,
        text: "Switch for Lanky"
      },
      {
        color: Color.Diddy,
        text: "Singles (60), BP, 3 coins",
        totals: {
          bps: 1
        }
      },
      {
        color: Color.Diddy,
        text: "1 tree (65)"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, 2 coins",
        totals: {
          bps: 2
        }
      },
      {
        color: Color.DK,
        text: "1 coin, Blast course"
      },
      {
        color: Color.DK,
        text: "2 bunches (75), GB",
        totals: {
          gbs: 7,
          medals: 1
        }
      },
      {
        color: Color.DK,
        text: "Cage GB",
        totals: {
          gbs: 8
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Tunnel GB, balloon (75)"
      },
      {
        color: Color.Diddy,
        text: "2 coins, enter T&S"
      },
      {
        color: Color.DK,
        text: "Feed T&S, Key 1",
        totals: {
          keys: 1
        }
      },
      {
        color: Color.DK,
        text: "RESET on 2nd 'Donk'"
      }
    ]
  },
  {
    name: "JAPES 1 -> AZTEC 1",
    steps: [
      {
        color: Color.Header,
        text: "Turn on Story Skip again, enter file"
      },
      {
        color: Color.DK,
        text: "Tag W4/W1, turn in Key 1"
      },
      {
        color: Color.DK,
        text: "W1 back, tag W2/W3"
      },
      {
        color: Color.DK,
        text: "Up to Aztec, ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "BP, 3 coins, kick in CS",
        totals: {
          bps: 3
        }
      },
      {
        color: Color.DK,
        text: "Buy Bongos, tag W1"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Buy Guitar, balloon (10)"
      },
      {
        color: Color.Diddy,
        text: "Tag W2 (15), 5 coins, open tunnel"
      },
      {
        color: Color.Diddy,
        text: "Tunnel (20), buy up to Rocket"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Balloons (20), tag far W2"
      },
      {
        color: Color.DK,
        text: "Blast course, steps (24)"
      },
      {
        color: Color.DK,
        text: "Balloon (34), Llama Temple"
      },
      {
        color: Color.DK,
        text: "Bongos (37), coins"
      },
      {
        color: Color.DK,
        text: "Steps (40), switch"
      },
      {
        color: Color.DK,
        text: "More steps (42), tag W1"
      },
      {
        color: Color.DK,
        text: "Free Lanky GB",
        totals: {
          gbs: 10
        }
      },
      {
        color: Color.DK,
        text: "Tag W2, leave, tag W4"
      },
      {
        color: Color.DK,
        text: "Damage boost to bonus GB (62)",
        totals: {
          gbs: 11
        }
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.DK,
        text: "2 trees (72), llama GB (75)",
        totals: {
          gbs: 12,
          medals: 2
        }
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Rocket to BP, Tiny Temple",
        totals: {
          bps: 4
        }
      },
      {
        color: Color.Diddy,
        text: "Melt ice (38), 1 coin"
      },
      {
        color: Color.Diddy,
        text: "Swim to Tiny (45), GKONG"
      },
      {
        color: Color.Diddy,
        text: "GB, coins"
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER, W1"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Oasis coins, tunnel coins, BP",
        totals: {
          bps: 5
        }
      },
      {
        color: Color.Tiny,
        text: "Back to Cranky, buy Mini"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Single, bunch (6), coins"
      },
      {
        color: Color.Lanky,
        text: "Buy Ostand, W3/W4"
      },
      {
        color: Color.Lanky,
        text: "Coins, buy Grape"
      },
      {
        color: Color.Tiny,
        text: "Buy Feather, tag W5 (5)"
      },
      {
        color: Color.Tiny,
        text: "Coins, enter T&S"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Feed T&S"
      },
      {
        color: Color.Diddy,
        text: "Feed T&S, Key 2",
        totals: {
          keys: 2
        }
      },
      {
        color: Color.Diddy,
        text: "Charge gongs (48)"
      },
      {
        color: Color.Diddy,
        text: "GB, Rocket steps (51)",
        totals: {
          gbs: 13
        }
      },
      {
        color: Color.Diddy,
        text: "Rocket to sun (56)"
      }
    ]
  }
];
