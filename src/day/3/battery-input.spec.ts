import {Input} from "../../input.ts";

class BatteryInput extends Input {
  constructor(input: string) {
    super(input, '\n');
  }

  static create(input: string) {
    return new BatteryInput(input);
  }
}

describe('The batter input', () => {
  it('should exist', () => {
    expect(BatteryInput.create("")).toBeInstanceOf(Input);
  });

});