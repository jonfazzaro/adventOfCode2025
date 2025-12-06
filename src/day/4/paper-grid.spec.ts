import {Grid} from "./grid.ts";
import {Input} from "../../input.ts";
import {PaperGrid} from "./paper-grid.ts";

describe('The paper grid', () => {
  it('is a grid', () => {
    expect(new PaperGrid(exampleInput.values)).toBeInstanceOf(Grid)
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
