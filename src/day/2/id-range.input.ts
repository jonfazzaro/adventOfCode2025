import {Input} from "../../input.ts";

export class IdRangeInput extends Input {
  constructor() {
    super("", ',');
  }

  static create() {
    return new IdRangeInput()
  }

}