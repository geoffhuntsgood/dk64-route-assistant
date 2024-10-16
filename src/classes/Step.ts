import { Color, Tag } from "../enums";

export class Step {
  constructor(
    public readonly color: Color | Color[],
    public readonly text: string,
    public readonly isSkewed?: boolean,
    public readonly tag?: Tag,
    public readonly link?: string,
    public readonly gbs?: number
  ) { }
}
