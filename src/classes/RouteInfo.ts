import { RouteSection } from "./RouteSection";

export class RouteInfo {
  constructor(
    public readonly name: string,
    public readonly docUrl: string,
    public readonly sections: RouteSection[]
  ) { }
}
