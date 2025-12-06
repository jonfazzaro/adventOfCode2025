import {Grid} from "./grid.ts";
import {Input} from "../../input.ts";
import {PaperGrid} from "./paper-grid.ts";

describe('The paper grid', () => {
  it('is a grid', () => {
    expect(PaperGrid.create(exampleInput.values)).toBeInstanceOf(Grid)
  });

  describe.skip('given a roll of paper with fewer than four rolls of paper in the eight adjacent positions', () => {

    it('can access the roll', () => {
      const grid = new PaperGrid(exampleInput.values);
      expect(grid.canAccessRollAt())

    });
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
