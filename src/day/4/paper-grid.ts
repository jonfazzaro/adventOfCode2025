import {Grid} from "./grid.ts";

export class PaperGrid extends Grid {
  constructor(rows: string[]) {
    super(rows);
  }

  canAccessRollAt(x: number, y: number): boolean {
    if (!this.isPaperRoll(this.at(x,y))) return false;
    return this.neighborsOf(x, y)
      .split('')
      .filter(c => this.isPaperRoll(c))
      .length < 4;
  }

  private isPaperRoll(value: string) {
    return value === "@";
  }
}