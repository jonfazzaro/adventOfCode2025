import {Cell} from "./cell.ts";

describe('The grid cell', () => {
  it('should exist', () => {
    expect(Cell.create()).toBeInstanceOf(Cell);
  });

  it('has a neighbor to the north', () => {
    const north = Cell.create();
    expect(Cell.create([north]).neighbors).toEqual([north])

  });

});