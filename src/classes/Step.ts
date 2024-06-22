import { Color, Tag } from "../enums";
import { Totals } from "./Totals";

export class Step {
  constructor(
    public readonly color: Color,
    public readonly text: string,
    public readonly tag?: Tag,
    public readonly link?: string,
    public readonly totals?: Totals
  ) { }
}
