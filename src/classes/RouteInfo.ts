import { Step } from "./Step";

export class RouteInfo {
  constructor(
    public readonly name: string,
    public readonly docUrl: string,
    public readonly steps: Step[]
  ) { }
}
