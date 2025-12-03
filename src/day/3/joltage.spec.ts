import {Joltage} from "./joltage.ts";

describe('The joltage meter', () => {
  it('exists', () => {
    expect(Joltage.create()).toBeInstanceOf(Joltage);
  });

  describe('given a bank of batteries', () => {
    it.each([
      [[0,1,4,5,6,7,1], 76],
    ])('measures its capacity', (bank, expected) => {
      const subject = Joltage.create();
      expect(subject.capacity(bank)).toEqual(expected)
    });

  });

});