import {Grid} from "./grid.ts";

describe('The grid', () => {
  it('exists', () => {
    expect(Grid.create()).toBeInstanceOf(Grid);
  });

  it('has a width and height', () => {
    const grid = Grid.create(3, 5);
    expect(grid.width).toEqual(3);


  });

});