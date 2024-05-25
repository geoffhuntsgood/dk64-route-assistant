import { Color, Tag } from "../enums";

export class Step {
  constructor(
    public readonly color: Color,
    public readonly text: string,
    public readonly isHeader?: boolean,
    public readonly gbCount?: number,
    public readonly tagDirection?: Tag,
    public readonly image?: string
  ) { }
}
