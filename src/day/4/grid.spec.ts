import {Grid} from "./grid.ts";
import {Input} from "../../input.ts";

describe('The grid', () => {
  it('has a width and height', () => {
    const grid = Grid.create(exampleInput.values);
    expect(grid.width).toEqual(10);
    expect(grid.height).toEqual(10);
  });
});

const exampleInput = Input.create("..@@.@@@@.\n" +
  "@@@.@.@.@@\n" +
  "@@@@@.@.@@\n" +
  "@.@@@@..@.\n" +
  "@@.@@@@.@@\n" +
  ".@@@@@@@.@\n" +
  ".@.@.@.@@@\n" +
  "@.@@@.@@@@\n" +
  ".@@@@@@@@.\n" +
  "@.@.@@@.@.")
