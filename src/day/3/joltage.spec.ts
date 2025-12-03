import {Joltage} from "./joltage.ts";
import {BatteryInput} from "./battery-input.ts";

describe('The joltage meter', () => {
  it('exists', () => {
    expect(Joltage.create()).toBeInstanceOf(Joltage);
  });

  describe('given a bank of batteries', () => {
    it.each([
      ["0145671", 67],
      ["987654321111111", 98],
      ["811111111111119", 89]
    ])('measures its capacity', (input, expected) => {
      const bankInput= BatteryInput.create(input)
      const subject = Joltage.create();
      expect(subject.capacity(bankInput.banks()[0])).toEqual(expected)
    });
  });

  it.skip('solves the example', () => {
    const input = BatteryInput.create("987654321111111\n" +
      "811111111111119\n" +
      "234234234234278\n" +
      "818181911112111")

    const subject = Joltage.create();
    expect(sum(input.banks().map(bank => subject.capacity(bank)))).toEqual(357)
  });

  function sum(input: number[]) {
    return input.reduce((total, num) => total + num, 0);
  }
});