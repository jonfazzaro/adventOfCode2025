import {Joltage} from "./joltage.ts";

describe('The joltage meter', () => {
  it('exists', () => {
    expect(Joltage.create()).toBeInstanceOf(Joltage);
  });

  describe('given a bank of batteries', () => {
    it.each([
      [[0, 1, 4, 5, 6, 7, 1], 76],
      [[9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1], 98]
    ])('measures its capacity', (bank, expected) => {
      const subject = Joltage.create();
      expect(subject.capacity(bank)).toEqual(expected)
    });

  });

});