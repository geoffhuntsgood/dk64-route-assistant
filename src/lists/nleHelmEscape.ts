import { Step } from "../components/Step";
import { krool } from "./krool";
import { aztec, castle, caves, factory, forest, galleon, helm, japes1, japes2, start } from "./nleHelm";

export const nleHelmEscape: Step[] = [
  ...start,
  ...japes1,
  ...aztec,
  ...factory,
  ...japes2,
  ...galleon,
  ...forest,
  ...caves,
  ...castle,
  ...helm,
  ...krool
];
