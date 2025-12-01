import {Input} from "../../input.ts";
import {Combination} from "./combination.ts";

describe('The combination', () => {
  it('is designed in this playground', () => {
    const input = Input.create("L68\n" +
      "L30\n" +
      "R48\n" +
      "L5\n" +
      "R60\n" +
      "L55\n" +
      "L1\n" +
      "L99\n" +
      "R14\n" +
      "L82");

    const combo = Combination.create()
    expect(combo.find(input.turns())).toEqual(3)
  });

  it('solves the puzzle', () => {
    const input = Input.create(puzzleInput)

  });
});

const puzzleInput = ""