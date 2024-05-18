import { Step } from "../components/Step";
import { aztec, castle, factory, forest, galleon, helm, japes2, startAndJapes1 } from "./anygless";
import { caves } from "./anygless/7 - caves";
import { krool } from "./krool";

export const anyGlitchless: Step[] = [
  ...startAndJapes1,
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
