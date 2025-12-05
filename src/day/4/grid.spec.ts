import {Grid} from "./grid.ts";

describe('The grid', () => {
  it('exists', () => {
    expect(Grid.create()).toBeInstanceOf(Grid);
  });

});