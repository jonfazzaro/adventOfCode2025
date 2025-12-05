import {Grid} from "./grid.ts";

describe('The grid', () => {
  it('has a width and height', () => {
    const grid = Grid.create(3, 5);
    expect(grid.width).toEqual(3);
    expect(grid.height).toEqual(5);
  });

  it('has cells', () => {
    const grid = Grid.create(2, 2);
  });

});