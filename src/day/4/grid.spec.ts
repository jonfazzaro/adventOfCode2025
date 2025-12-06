import {Grid} from "./grid.ts";
import {Input} from "../../input.ts";

describe('The grid', () => {
  let grid: Grid;

  beforeEach(() => {
    grid = Grid.create(exampleInput.values);
  });

  it('has a width and height', () => {
    expect(grid.width).toEqual(10);
    expect(grid.height).toEqual(10);
  });

  it.each([
    [0, 0, "."],
    [3, 0, "@"],
    [9, 5, "@"],
    [-1, 5, ""],
    [10, 7, ""],
    [4, -1, ""],
    [4, 10, ""],
  ])('finds the value at (%d, %d) to be "%s"', (x: number, y: number, expected: string) => {
    expect(grid.at(x, y)).toEqual(expected);
  });

  it.only.each([
    // [4, 5, "@@@@.@@@"],
    // [1, 6, "@@.@.@.."],
    // [0, 0, ".@@"],
    [9, 4, ".@.@@"],
  ])('lists the neighbors at (%d, %d) to be "%s"', (x: number, y: number, expected: string) => {
    expect(grid.neighborsOf(x, y)).toEqual(expected);
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
