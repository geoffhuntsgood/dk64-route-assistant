import { RouteSection } from "../../classes";
import { Color, Tag } from "../../enums";

export const moveless100GB: RouteSection[] = [
  {
    name: "PRE-START",
    steps: [
      {
        color: Color.Header,
        text: "Story Skip on, delete file 1"
      },
      {
        color: Color.Header,
        text: "Enable infinite oranges in Mystery Menu"
      }
    ]
  },
  {
    name: "START!",
    steps: [
      {
        color: Color.DK,
        text: "Visit Cranky"
      },
      {
        color: Color.DK,
        text: "Dive barrel normally"
      },
      {
        color: Color.DK,
        text: "Orange barrel: throw oranges immediately"
      },
      {
        color: Color.DK,
        text: "Barrel barrel: throw oranges at a barrel"
      },
      {
        color: Color.DK,
        text: "Vine barrel: throw orange at back wall"
      },
      {
        color: Color.DK,
        text: "Pswim to leave"
      },
      {
        color: Color.DK,
        text: "Climb/moonkick to Aztec tag W2"
      },
      {
        color: Color.DK,
        text: "Aztec Early"
      }
    ]
  },
  {
    name: "AZTEC 1",
    steps: [
      {
        color: Color.DK,
        text: "Pwalk to BP, pwalk to skip CS"
      },
      {
        color: Color.DK,
        text: "Tag W1, enter T&S"
      },
      {
        color: Color.DK,
        text: "Enter/exit tag barrel to 'free' DK"
      },
      {
        color: Color.DK,
        text: "DDQ Key 5, RESET on 2nd Donk"
      }
    ]
  },
  {
    name: "ISLES TO CASTLE",
    steps: [
      {
        color: Color.Header,
        text: "Oranges and Story Skip, enter file"
      },
      {
        color: Color.DK,
        text: "Tag W4, W5, W1"
      },
      {
        color: Color.DK,
        text: "To K. Lumsy, turn in Key 5"
      },
      {
        color: Color.DK,
        text: "To Castle Lobby, Castle Early"
      }
    ]
  },
  {
    name: "CASTLE",
    steps: [
      {
        color: Color.DK,
        text: "Pwalk in tree, roll clip to BP"
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        text: "Pwalk in tree again, roll clip to GB",
        gbs: 1
      },
      {
        color: Color.DK,
        text: "Climb/moonkick to W2"
      },
      {
        color: Color.DK,
        text: "Climb to W4"
      },
      {
        color: Color.DK,
        text: "Climb/trash can moonkick to library door"
      },
      {
        color: Color.DK,
        text: "Pwalk in library"
      },
      {
        color: Color.DK,
        text: "Library GB, pwalk out on left wall",
        gbs: 2
      },
      {
        color: Color.DK,
        text: "Drop to W4 T&S, enter KKO"
      },
      {
        color: Color.Diddy,
        text: "Exit/tag to free Diddy"
      },
      {
        color: Color.DK,
        text: "Re-enter KKO"
      },
      {
        color: Color.Chunky,
        text: "Exit/tag to free Chunky"
      },
      {
        color: Color.DK,
        text: "Re-enter KKO"
      },
      {
        color: Color.Tiny,
        text: "Exit/tag to free Tiny"
      },
      {
        color: Color.DK,
        text: "Re-enter KKO"
      },
      {
        color: Color.Lanky,
        text: "Exit with Lanky"
      },
      {
        color: Color.Lanky,
        text: "Pwalk on right side of greenhouse"
      },
      {
        color: Color.Lanky,
        text: "Greenhouse GB",
        gbs: 3
      },
      {
        color: Color.Lanky,
        text: "Fall to BP, fall to lower crypt"
      },
      {
        color: Color.Lanky,
        text: "Pwalk in Lanky/Tiny crypt"
      },
      {
        color: Color.Lanky,
        text: "Pwalk left of cage door"
      },
      {
        color: Color.Lanky,
        text: "Damage boost to GB, deathwarp",
        gbs: 4
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, EXIT Castle"
      },
      {
        color: Color.Diddy,
        text: "Pwalk through cage to BP, deathwarp"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Pwalk left of first torch"
      },
      {
        color: Color.Tiny,
        text: "OOB to ENTER Castle"
      },
      {
        color: Color.Tiny,
        text: "Pswim to BP"
      },
      {
        color: Color.Tiny,
        text: "Climb to moat, swim to tunnel"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "BP, EXIT Castle"
      }
    ]
  },
  {
    name: "CASTLE TO FACTORY",
    steps: [
      {
        color: Color.Chunky,
        text: "Deathwarp, tag in Lobby"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Exit Lobby, pswim to cage GB",
        gbs: 5
      },
      {
        color: Color.Lanky,
        text: "Enter K. Lumsy, pwalk to cage GB",
        gbs: 6
      },
      {
        color: Color.Lanky,
        text: "Void to main"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "TBS, telegrabs to Helm Lobby"
      },
      {
        color: Color.DK,
        text: "Damage boost to BP, deathwarp"
      },
      {
        color: Color.DK,
        text: "Leave, drop to Factory Lobby"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Factory Early"
      }
    ]
  },
  {
    name: "FACTORY",
    steps: [
      {
        color: Color.Lanky,
        text: "Pwalk/robot push to open Tiny cage"
      },
      {
        color: Color.Lanky,
        text: "OOB to pipe GB",
        gbs: 7
      },
      {
        color: Color.Lanky,
        text: "Jump down pipe to tag"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "BP, kick down to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Drop to BP, to storage"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Free Chunky GB",
        gbs: 8
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pwalk behind W1, dark room GB",
        gbs: 9
      },
      {
        color: Color.Chunky,
        text: "Pwalk back"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, cage GB",
        gbs: 10
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tag in T&S"
      },
      {
        color: Color.Chunky,
        text: "Skid jump aerial into Tiny cage"
      },
      {
        color: Color.Chunky,
        text: "Pwalk on right wall, navigate to bonus GB",
        gbs: 11
      },
      {
        color: Color.Chunky,
        text: "Pwalk through grate to leave"
      },
      {
        color: Color.Chunky,
        text: "Pwalk to testing, BP"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Jump to bonus GB",
        gbs: 12
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "To R&D, BP"
      },
      {
        color: Color.Lanky,
        text: "Drop to storage to tag"
      },
      {
        color: Color.DK,
        text: "Pwalk left of conveyor to crusher room"
      },
      {
        color: Color.DK,
        text: "Crusher room GB, EXIT Factory",
        gbs: 13
      }
    ]
  },
  {
    name: "FACTORY TO GALLEON",
    steps: [
      {
        color: Color.DK,
        text: "Exit Lobby, drop to Galleon Lobby"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Lobby BP"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Galleon Early"
      }
    ]
  },
  {
    name: "GALLEON",
    steps: [
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Tag in tunnel, EXIT/ENTER"
      },
      {
        color: Color.Chunky,
        text: "Cannon game spawn snag GB",
        gbs: 14
      },
      {
        color: Color.Chunky,
        text: "Pswim to lighthouse, tag underwater"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Enguarde GB",
        gbs: 15
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "BP, raise water, EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Cannon to BP"
      },
      {
        color: Color.Tiny,
        text: "(Optional) T&S for Key 4"
      },
      {
        color: Color.Tiny,
        text: "Pwalk behind BC to shipyard"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Cactus for BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Clip into sub for bonus GB",
        gbs: 16
      },
      {
        color: Color.Tiny,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Tiny,
        text: "Pswim to shipyard, tag W2"
      },
      {
        color: Color.Tiny,
        text: "Pswim to 2DS for bonus GB",
        gbs: 17
      },
      {
        color: Color.Tiny,
        text: "Pswim to leave, pswim to 5DS GB",
        gbs: 18
      },
      {
        color: Color.Tiny,
        text: "Pswim to treasure room"
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Skid jump/backflip to bonus GB",
        gbs: 19
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "W2 noclip to 5DS bonus GB",
        gbs: 20
      },
      {
        color: Color.DK,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Tag in tunnel, BP, pswim to 2DS GB",
        gbs: 21
      },
      {
        color: Color.Lanky,
        text: "Pswim to 5DS GB",
        gbs: 22
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pswim to 5DS bonus GB",
        gbs: 23
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Pswim in Chunky's room to 5DS bonus GB",
        gbs: 24
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Pswim to seal race skip GB",
        gbs: 25
      },
      {
        color: Color.Tiny,
        text: "EXIT Galleon"
      }
    ]
  },
  {
    name: "GALLEON TO JAPES",
    steps: [
      {
        color: Color.Tiny,
        text: "Pswim to pipe GB",
        gbs: 26
      },
      {
        color: Color.Tiny,
        text: "Pswim to void, pswim to leave lobby"
      },
      {
        color: Color.Tiny,
        text: "STS to BFI cage GB",
        gbs: 27
      },
      {
        color: Color.Tiny,
        text: "W5 to tag"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Japes entrance GB",
        gbs: 28
      },
      {
        color: Color.DK,
        text: "ENTER Japes"
      }
    ]
  },
  {
    name: "JAPES",
    steps: [
      {
        color: Color.DK,
        text: "Bush push to main area"
      },
      {
        color: Color.DK,
        text: "Pswim to cage GB",
        gbs: 29
      },
      {
        color: Color.DK,
        text: "OOB to BP"
      },
      {
        color: Color.DK,
        text: "Tag W3, climb to both Diddy GBs",
        gbs: 31
      },
      {
        color: Color.DK,
        text: "Drop right, tag in T&S"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Drop to BP"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "BP, slope cancels to bonus GB",
        gbs: 32
      },
      {
        color: Color.Lanky,
        text: "Pwalk back to tag W4"
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pswim underground, pwalk to BP"
      },
      {
        color: Color.Chunky,
        text: "Deathwarp, rock GB",
        gbs: 33
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Pswim to tunnel bonus GB",
        gbs: 34
      },
      {
        color: Color.Lanky,
        text: "Back to main, beaver skew"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        isSkewed: true,
        text: "Tag at Cranky, W4 to cage GB",
        gbs: 35
      },
      {
        color: Color.Tiny,
        isSkewed: true,
        text: "W3 to BP, stump GB",
        gbs: 36
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        isSkewed: true,
        text: "Through wall to cage GB",
        gbs: 37
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        isSkewed: true,
        text: "Cage GB",
        gbs: 38
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        isSkewed: true,
        text: "Drop to cage GB",
        gbs: 39
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Pswim to tunnel bonus GB",
        gbs: 40
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Tag in T&S, tunnel GB",
        gbs: 41
      },
      {
        color: Color.Diddy,
        text: "EXIT Japes"
      }
    ]
  },
  {
    name: "JAPES TO FOREST",
    steps: [
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Tag in Lobby, moonkicks to Forest (or turn in Key 4)"
      },
      {
        color: Color.DK,
        text: "ENTER Forest"
      }
    ]
  },
  {
    name: "FOREST",
    steps: [
      {
        color: Color.DK,
        text: "Blue tunnel to mill"
      },
      {
        color: Color.DK,
        text: "Wall clip to mill GB",
        gbs: 42
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Pswim to cage GB",
        gbs: 43
      },
      {
        color: Color.Diddy,
        text: "Thorn skew"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        isSkewed: true,
        text: "BP, through left wall by ammo"
      },
      {
        color: Color.DK,
        isSkewed: true,
        text: "Under pink tunnel, to Owl/Rabbit area"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        isSkewed: true,
        text: "BP"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        isSkewed: true,
        text: "Through right wall to enter stump"
      },
      {
        color: Color.Tiny,
        text: "Stump GB, deathwarp",
        gbs: 44
      },
      {
        color: Color.Tiny,
        text: "Pink tunnel, climb to BP"
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Tag at Blast pad, climb to BP"
      },
      {
        color: Color.Diddy,
        text: "Climb to mushroom top"
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Clockwise to tag, drop to BP"
      },
      {
        color: Color.Chunky,
        text: "EXIT Forest"
      }
    ]
  },
  {
    name: "FOREST TO CAVES",
    steps: [
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Leave Lobby, drop to Caves Lobby"
      },
      {
        color: Color.Lanky,
        text: "Pwalk right of door to BP"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Pwalk left of door, kick jump to GB",
        gbs: 45
      },
      {
        color: Color.DK,
        text: "ENTER Caves"
      }
    ]
  },
  {
    name: "CAVES",
    steps: [
      {
        color: Color.DK,
        text: "Climb to BP, kick left to igloo"
      },
      {
        color: Color.DK,
        text: "Pswim to 5DI GB (front)",
        gbs: 46
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Pswim to 5DI GB (front left)",
        gbs: 47
      },
      {
        color: Color.Lanky,
        text: "EXIT/ENTER"
      },
      {
        color: Color.DK,
        tag: Tag.Left,
        text: "Moonkick right of Funky to tag W5"
      },
      {
        color: Color.DK,
        text: "Pwalk in right wall of DK cabin"
      },
      {
        color: Color.DK,
        text: "Moonkick to GB",
        gbs: 48
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "BP, pwalk to 5DC GB",
        gbs: 49
      },
      {
        color: Color.Chunky,
        tag: Tag.Right,
        text: "Pwalk in 5DC"
      },
      {
        color: Color.Chunky,
        text: "Bookshelf, skid jump aerial to bonus GB",
        gbs: 50
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Pwalk to lower 5DC GB",
        gbs: 51
      },
      {
        color: Color.Diddy,
        text: "W5, drop to Funky, pwalk to BP"
      },
      {
        color: Color.Diddy,
        text: "EXIT/ENTER"
      },
      {
        color: Color.Diddy,
        text: "Pswim to 5DI GB (front right)",
        gbs: 52
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Pswim to 5DI GB (back left)",
        gbs: 53
      },
      {
        color: Color.Chunky,
        text: "BP, clip to ice shield GB",
        gbs: 54
      },
      {
        color: Color.Chunky,
        text: "EXIT Caves"
      }
    ]
  },
  {
    name: "CAVES TO AZTEC 2",
    steps: [
      {
        color: Color.Chunky,
        text: "Drop to water, STS to cage GB",
        gbs: 55
      },
      {
        color: Color.Chunky,
        text: "Pwalk left to escape, W3 to tag"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Aztec Early (again?!), ENTER Aztec"
      }
    ]
  },
  {
    name: "AZTEC 2",
    steps: [
      {
        color: Color.DK,
        text: "W1 to tag"
      },
      {
        color: Color.Diddy,
        tag: Tag.Right,
        text: "Pwalk in Tiny Temple wall"
      },
      {
        color: Color.Diddy,
        text: "Backflip on switch, stick face out of wall"
      },
      {
        color: Color.Diddy,
        text: "Backflip again to BP"
      },
      {
        color: Color.Diddy,
        text: "Pwalk in Tiny Temple"
      },
      {
        color: Color.Diddy,
        text: "Clip to free Tiny GB, pswim out",
        gbs: 56
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "Pwalk in Tiny Temple"
      },
      {
        color: Color.Tiny,
        text: "Spawn snag Klaptrap GB, backflip out",
        gbs: 57
      },
      {
        color: Color.Tiny,
        text: "Guitar skip/Pwalk to tunnel BP, tag far W2"
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Roll clip in Llama Temple (or pwalk)"
      },
      {
        color: Color.DK,
        text: "Tag W1/W2, pwalk left of W1"
      },
      {
        color: Color.DK,
        text: "Drop to get free Lanky GB OOB",
        gbs: 58
      },
      {
        color: Color.DK,
        text: "Backflip in bounds, tag high W1"
      },
      {
        color: Color.Lanky,
        tag: Tag.Right,
        text: "Pwalk left of pipe to BP, W2/W1"
      },
      {
        color: Color.Tiny,
        tag: Tag.Right,
        text: "W1/W2, lava GB, deathwarp",
        gbs: 59
      },
      {
        color: Color.Tiny,
        text: "W1/W2, pwalk in 5DT, pwalk left pillar for GB",
        gbs: 60
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Pwalk in 5DT, pwalk left pillar for GB",
        gbs: 61
      },
      {
        color: Color.DK,
        tag: Tag.Right,
        text: "Pwalk in 5DT, pwalk in left pillar, OOB to GB",
        gbs: 62
      },
      {
        color: Color.DK,
        text: "Banana push to bonus GB, pwalk right wall to leave",
        gbs: 63
      }
    ]
  },
  {
    name: "SNIDE'S",
    steps: [
      {
        color: Color.DK,
        text: "Turn in BPs x8",
        gbs: 71
      },
      {
        color: Color.Chunky,
        tag: Tag.Left,
        text: "Turn in BPs x7",
        gbs: 78
      },
      {
        color: Color.Tiny,
        tag: Tag.Left,
        text: "Turn in BPs x7",
        gbs: 85
      },
      {
        color: Color.Lanky,
        tag: Tag.Left,
        text: "Turn in BPs x7",
        gbs: 92
      },
      {
        color: Color.Diddy,
        tag: Tag.Left,
        text: "Turn in BPs x8",
        gbs: 100
      },
      {
        color: Color.Header,
        text: "GG!"
      }
    ]
  }
];
