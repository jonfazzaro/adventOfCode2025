export class Grid {
  private height: number;
  private width: number;
  private rows: string[];

  constructor(rows: string[]) {
    this.rows = rows;
    this.width = rows[0].length;
    this.height = rows.length;
  }

  static create(rows: string[]) {
    return new Grid(rows);
  }

  at(x: number, y: number) {
    if (this.isOutOfBoundsHorizontally(x) || this.isOutOfBoundsVertically(y)) return "";

    return (this.rows)[y][x]
  }

  private isOutOfBoundsVertically(y: number) {
    return y < 0 || this.height <= y;
  }

  private isOutOfBoundsHorizontally(x: number) {
    return x < 0 || this.width <= x;
  }

}