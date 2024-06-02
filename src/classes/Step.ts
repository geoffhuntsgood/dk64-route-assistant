import { Color, Tag } from "../enums";

export class Step {
  constructor(
    public readonly color: Color,
    public readonly text: string,
    public readonly gbCount?: number,
    public readonly tag?: Tag,
    public readonly link?: string
  ) { }
}
