import { RouteSection } from "../classes";
import { Color } from "../enums";

export const defaultPreStart: RouteSection = {
  name: "PRE-START",
  steps: [
    {
      color: Color.Header,
      text: "Story Skip on, delete File 1"
    }
  ]
};

export const isgPreStart: RouteSection = {
  name: "PRE-START",
  steps: [
    {
      color: Color.Header,
      text: "Prereqs: 10 fairies, 2nd controller"
    },
    {
      color: Color.Header,
      text: "Story Skip on, delete File 1"
    }
  ]
};

export const taPreStart: RouteSection = {
  name: "PRE-START",
  steps: [
    {
      color: Color.Header,
      text: "Speed Mode on, delete file 1"
    },
    {
      color: Color.Header,
      text: "NOTE: Move w/DK, swim w/Diddy"
    }
  ]
};

export const isgNLE: RouteSection = {
  name: "ISG/START!",
  steps: [
    {
      color: Color.Header,
      text: "Start ISG & timer, enter File 1"
    },
    {
      color: Color.DK,
      text: "Cranky, spawn training barrels"
    },
    {
      color: Color.DK,
      text: "Dive barrel @0:55, cancel fadeout"
    },
    {
      color: Color.DK,
      text: "Vine barrel @1:24.5, cancel fadeout"
    },
    {
      color: Color.DK,
      text: "Barrel barrel, pause exit, main menu"
    },
    {
      color: Color.Header,
      text: "EXAMINE FILE 1!!"
    },
    {
      color: Color.Header,
      text: "Castle Boss, ISG will fade out"
    },
    {
      color: Color.Header,
      text: "Monkey Smash, get kicked out"
    },
    {
      color: Color.Header,
      text: "Aztec Boss, ISG will fade out"
    },
    {
      color: Color.Header,
      text: "Monkey Smash, get kicked out"
    },
    {
      color: Color.Header,
      text: "Factory Boss, pause exit"
    },
    {
      color: Color.Header,
      text: "Galleon Boss, ISG fadeout @ 3:23"
    },
    {
      color: Color.Header,
      text: "Monkey Smash, get kicked out"
    },
    {
      color: Color.Header,
      text: "Forest Boss, pause exit"
    },
    {
      color: Color.Header,
      text: "Main menu, pulled in @ 4:23.8"
    }
  ]
};

export const krool: RouteSection = {
  name: "K. ROOL",
  steps: [
    {
      color: Color.DK,
      text: "DK Punches: 4, 5, 3, 7"
    },
    {
      color: Color.Diddy,
      text: "Diddy: clip ammo"
    },
    {
      color: Color.Lanky,
      text: "Lanky Corners: Y, B, B, B"
    },
    {
      color: Color.Tiny,
      text: "Tiny Slams: 4, 3, 4, 5"
    },
    {
      color: Color.Chunky,
      text: "Chunky Corners: R"
    },
    {
      color: Color.Chunky,
      text: "64TH ANNUAL COMMEMORATIVE BACKFLIP"
    }
  ]
};
