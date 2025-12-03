import {Input} from "../../input.ts";

export class IdRangeInput extends Input {
  constructor(input: string) {
    super(input, ',');
  }

  static create(input: string) {
    return new IdRangeInput(input)
  }

  ranges() {
    return this.values.map(value => value.split('-').map(Number))
  }
}