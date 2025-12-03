import {Input} from "../../input.ts";

export class BatteryInput extends Input {
  constructor(input: string) {
    super(input, '\n');
  }

  static create(input: string) {
    return new BatteryInput(input);
  }

  banks(): number[][] {
    return this.values.map(value => value.split('').map(Number))
  }
}