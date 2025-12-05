import {Cell} from "./cell.ts";

export class Grid {
  public height: number;
  public width: number;
  public cells: Array<Cell | undefined> = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;


    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.cells.push(Cell.create());
      }
    }
  }

  static create(width: number, height: number) {
    return new Grid(width, height);
  }
}