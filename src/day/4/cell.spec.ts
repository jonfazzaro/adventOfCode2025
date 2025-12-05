import {Cell} from "./cell.ts";

describe('The grid cell', () => {
  it('should exist', () => {
    expect(Cell.create()).toBeInstanceOf(Cell);
  });

});