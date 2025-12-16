import {Grid} from "./grid.ts";

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

  accessibleRolls() {
    return this.points().filter(p =>
      this.canAccessRollAt(p.x, p.y));
  }

  removeAllAccessibleRolls(count: number = 0): number {
    const accessibleRolls = this.accessibleRolls();
    if (!accessibleRolls.length) return count;
    return this.withManyRemoved(accessibleRolls)
      .removeAllAccessibleRolls(
        count + accessibleRolls.length
      );
  }

  private isPaperRoll(value: string) {
    return value === "@";
  }
}