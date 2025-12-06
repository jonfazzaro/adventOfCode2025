import {Grid} from "./grid.ts";
import {Input} from "../../input.ts";

describe('The grid', () => {

  it.each([
    [0, 0, "."],
    [3, 0, "@"],
    [9, 5, "@"],
    [-1, 5, ""],
    [10, 7, ""],
  ])('accesses the value at a location', (x: number, y: number, expected: string) => {
    const grid = Grid.create(exampleInput.values);
    expect(grid.at(x, y)).toEqual(expected);
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
