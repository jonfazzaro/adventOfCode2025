import {Grid} from "./grid.ts";

describe('The grid', () => {
  it('has a width and height', () => {
    const grid = Grid.create(3, 5);
    expect(grid.width).toEqual(3);
    expect(grid.height).toEqual(5);
  });

  it.each([
    [[2,2], [
      '..',
      '..',
    ]]
  ])('has cells', ([width, height]: number[], expected:string[]) => {
    const grid = Grid.create(width, height);
    expect(grid.cells).toEqual(expected)
  });

});