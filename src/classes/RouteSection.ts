import { Step } from "./Step";

export class RouteSection {
  constructor(
    public readonly name: string,
    public readonly steps: Step[]
  ) { }
}
