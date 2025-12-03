import {Joltage} from "./joltage.ts";
import {BatteryInput} from "./battery-input.ts";

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

  it('solves the example', () => {
    const input = BatteryInput.create("987654321111111\n" +
      "811111111111119\n" +
      "234234234234278\n" +
      "818181911112111")

    const subject = Joltage.create();
    
  });

});