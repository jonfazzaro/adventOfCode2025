import {Grid} from "./grid.ts";
import {Input} from "../../input.ts";
import {PaperGrid} from "./paper-grid.ts";

describe('The paper grid', () => {
  it('is a grid', () => {
    expect(PaperGrid.create(exampleInput.values)).toBeInstanceOf(Grid)
  });

  describe('given a roll of paper', () => {

    it.each([
      [3, 0, true],
      [0, 0, false],
      [4, 4, false],
    ])('determines access to the roll', (x: number, y: number, result: boolean) => {
      const grid = new PaperGrid(exampleInput.values);
      expect(grid.canAccessRollAt(x, y)).toEqual(result)
    });
  });

  it.only('solves the example', () => {
    const grid = new PaperGrid(exampleInput.values);
    expect(grid.accessibleRolls().length).toEqual(13)
  });

});

const exampleInput = Input.create(
  "..@@.@@@@.\n" +
  "@@@.@.@.@@\n" +
  "@@@@@.@.@@\n" +
  "@.@@@@..@.\n" +
  "@@.@@@@.@@\n" +
  ".@@@@@@@.@\n" +
  ".@.@.@.@@@\n" +
  "@.@@@.@@@@\n" +
  ".@@@@@@@@.\n" +
  "@.@.@@@.@.")
