import {Grid} from "./grid.ts";
import {Input} from "../../input.ts";
import {PaperGrid} from "./paper-grid.ts";

describe('The paper grid', () => {
  it('is a grid', () => {
    expect(PaperGrid.create(exampleInput.values)).toBeInstanceOf(Grid)
  });

  describe.skip('given a roll of paper', () => {

    it.each([
      [3,0,true]
    ])('can access the roll', (x:number, y:number, result:boolean) => {
      const grid = new PaperGrid(exampleInput.values);
      expect(grid.canAccessRollAt(3,0)).toEqual(result)
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
