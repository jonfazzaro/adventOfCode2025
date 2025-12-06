import {Grid} from "./grid.ts";

export class PaperGrid extends Grid {
  constructor(rows: string[]) {
    super(rows);
  }

  canAccessRollAt(x: number, y: number) {
    return this.neighborsOf(x, y)
      .split('')
      .filter(this.isPaperRoll())
      .length < 4;
  }
  
  private isPaperRoll() {
    return c => c === "@";
  }
}