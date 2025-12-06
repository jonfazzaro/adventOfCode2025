import {Grid} from "./grid.ts";
import {logDOM} from "@testing-library/react";

export class PaperGrid extends Grid {
  constructor(rows: string[]) {
    super(rows);
  }

  canAccessRollAt(x: number, y: number): boolean {
    if (!this.isPaperRoll(this.at(x, y))) return false;

    return this.neighborsOf(x, y)
      .split('')
      .filter(c => this.isPaperRoll(c))
      .length < 4;
  }

  private isPaperRoll(value: string) {
    return value === "@";
  }

  accessibleRolls() {

    return this.points().filter(p =>
      this.canAccessRollAt(p.x, p.y));

    //.map(y =>

      // Array(this.width).map(x => ({
      //     x, y
      //   })
      // ))
  }

  private points() {
    return Array.from({length: this.height}).flatMap((_, y) =>
      Array.from({length: this.width}).map((_, x) => ({
        x, y
      })));
  }
}