import {Cell} from "./cell.ts";

describe('The grid cell', () => {
  it('should exist', () => {
    expect(new Cell()).toBeInstanceOf(Cell);
  });

});