import {Grid} from "./grid.ts";

export class PaperGrid extends Grid {
  constructor(rows: string[]) {
    super(rows);
  }

  canAccessRollAt(x: number, y: number) {
    return this.neighborsOf(x,y)
      .split('')
      .filter(c => c === "@")
      .length < 4;
  }
}