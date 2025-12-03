import {Joltage} from "./joltage.ts";

describe('The joltage meter', () => {
  it('exists', () => {
    expect(Joltage.create()).toBeInstanceOf(Joltage);
  });

  describe('given a bank of batteries', () => {
    it('measures its capacity', () => {
      
    });

  });

});