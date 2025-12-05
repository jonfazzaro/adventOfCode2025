import {Grid} from "./grid.ts";
import {Point} from "./point.ts";
import {beforeEach} from "vitest";

describe('The grid', () => {
  it('has a width and height', () => {
    const grid = Grid.create(3, 5);
    expect(grid.width).toEqual(3);
    expect(grid.height).toEqual(5);
  });

  it.each([
    [[2, 2], [
      '..',
      '..',
    ]],
    [[3, 4], [
      '...',
      '...',
      '...',
      '...',
    ]]
  ])('has cells', ([width, height]: number[], expected: string[]) => {
    const grid = Grid.create(width, height);
    expect(grid.cells).toEqual(expected)
  });

  describe('given a cell', () => {


    describe('on the west edge', () => {
      let grid: Grid;
      beforeEach(() => {
        grid = Grid.create(5, 5);
      });

      describe('at the north edge', () => {
        it('has a neighbor to the east', () => {
          expect(grid.eastOf(Point.create(0, 0))).toEqual({ x: 1, y: 0, value: '.' })
        });

        it('has no neighbor to the west', () => {
          const grid = Grid.create(5, 5);
          expect(grid.westOf(Point.create(0, 0))).toBeUndefined()
        });


      });
    });

  });

});