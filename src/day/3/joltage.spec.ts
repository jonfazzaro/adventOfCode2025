import {Joltage} from "./joltage.ts";

describe('The joltage meter', () => {
  it('should exist', () => {
    expect(new Joltage()).toBeInstanceOf(Joltage);
  });

});