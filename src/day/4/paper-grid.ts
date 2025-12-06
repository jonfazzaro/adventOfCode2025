import {Grid} from "./grid.ts";

export class PaperGrid extends Grid {
  constructor(rows: string[]) {
    super(rows);
  }

  canAccessRollAt(x: number, y: number) {
    return this.neighbors(x, y)
      .filter(this.isPaperRoll())
      .length < 4;
  }

  private neighbors(x: number, y: number) {
    return this.neighborsOf(x, y)
      .split('');
  }

  private isPaperRoll() {
    return c => c === "@";
  }
}