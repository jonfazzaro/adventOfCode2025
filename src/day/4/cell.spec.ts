import {Cell} from "./cell.ts";

describe('The grid cell', () => {
  it('has neighbors', () => {
    const north = Cell.create();
    expect(Cell.create([north]).neighbors).toEqual([north])
  });

});