import { Step } from "../components/Step";
import { aztec1, aztec2, castle, caves2, endgame, factory, forest, galleon, helm, japes1, japes2, start } from "./101med";
import { krool } from "./krool";

export const intermediate101: Step[] = [
  ...start,
  ...japes1,
  ...aztec1,
  ...factory,
  ...galleon,
  ...helm,
  ...castle,
  ...aztec2,
  ...caves2,
  ...japes2,
  ...forest,
  ...endgame,
  ...krool
];
