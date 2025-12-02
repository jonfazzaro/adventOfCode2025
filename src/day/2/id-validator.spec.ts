import {IdValidator} from "./id-validator.ts";
import {Input} from "../../input.ts";

describe('The ID validator', () => {
  let validator: IdValidator;
  beforeEach(() => {
    validator = IdValidator.create();
  });

  describe('given a range', () => {
    it.each([
      [1, 2, []],
      [11, 22, [11, 22]],
      [11, 33, [11, 22, 33]],
      [998, 1012, [1010]],
      [95, 115, [99]],
      [998, 1012, [1010]],
      [1188511880, 1188511890, [1188511885]],
      [222220, 222224, [222222]],
      [1698522, 1698528, []],
      [446443, 446449, [446446]],
      [38593856, 38593862, [38593859]],
    ])('returns invalid IDs', (lower, upper, expected) => {
      expect(validator.invalidIDs(lower, upper)).toEqual(expected)
    });

  });

  it('solves the example', () => {
    const exampleInput = Input.create("11-22,95-115,998-1012,1188511880-1188511890,222220-222224," +
      "1698522-1698528,446443-446449,38593856-38593862,565653-565659," +
      "824824821-824824827,2121212118-2121212124")

    const invalidIDs = exampleInput.ranges().flatMap(([lower, upper]: number[]) => {
      return validator.invalidIDs(lower, upper)
    })

    expect(sum(invalidIDs)).toEqual(1227775554)
  });

  it('solves the puzzle', () => {

  });

});

function sum(input: number[]) {
  return input.reduce((total, num) => total + num, 0);
}
