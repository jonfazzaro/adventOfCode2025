import {Joltage} from "./joltage.ts";

describe('The joltage meter', () => {
  it('should exist', () => {
    expect(Joltage.create()).toBeInstanceOf(Joltage);
  });

});