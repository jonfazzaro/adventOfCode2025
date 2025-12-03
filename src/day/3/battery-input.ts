import {Input} from "../../input.ts";

export class BatteryInput extends Input {
  constructor(input: string) {
    super(input, '\n');
  }

  static create(input: string) {
    return new BatteryInput(input);
  }

  banks() {
    return this.values[0].split('').map(Number);
  }
}