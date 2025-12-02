import {IdValidator} from "./id-validator.ts";
import {Input} from "../../input.ts";

describe('The ID validator', () => {
  let validator;
  beforeEach(() => {
    validator = IdValidator.create();
  });

  describe('given a range with no repeating digits', () => {
    it('returns no invalid IDs', () => {
      const validator = IdValidator.create();
      const invalidIDs = validator.invalidIDs(11, 22);
      expect(invalidIDs).toEqual([])
    });

  });

  it.skip('solves the example', () => {
    const validator = IdValidator.create();
    const input = Input.create("11-22,95-115,998-1012,1188511880-1188511890,222220-222224," +
      "1698522-1698528,446443-446449,38593856-38593862,565653-565659," +
      "824824821-824824827,2121212118-2121212124")

    const invalidIDs = input.ranges().flatMap(([lower, upper]: number[]) => {
      return validator.invalidIDs(lower, upper)
    })

    expect(sum(invalidIDs)).toEqual(1227775554)
  });

});

function sum(input: number[]) {
  return input.reduce((total, num) => total + num, 0);
}
