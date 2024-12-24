import { Step } from "./Step";

export class Route {
  constructor(
    public readonly name: string,
    public readonly route: {
      name: string;
      steps: Step[];
    }[],
    public readonly doc?: string,
    public readonly docIsVid?: boolean
  ) {}
}
