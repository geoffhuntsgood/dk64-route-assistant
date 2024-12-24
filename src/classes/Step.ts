import { Color } from "../enums/Color";

export class Step {
  constructor(
    public readonly color: Color,
    public readonly text: string,
    public readonly skew?: boolean,
    public readonly tag?: "L" | "R",
    public readonly link?: string,

    public bps?: string | number,
    public crowns?: string | number,
    public fairies?: string | number,
    public gbs?: string | number,
    public keys?: string | number,
    public medals?: string | number
  ) {}
}
