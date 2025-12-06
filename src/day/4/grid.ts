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
    if (this.isOutOfBounds(x, y)) return "";

    return (this.rows)[y][x]
  }

  private isOutOfBounds = (x: number, y: number) =>
    this.isOutOfBoundsHorizontally(x) || this.isOutOfBoundsVertically(y);
  private isOutOfBoundsVertically = (y: number) =>
    y < 0 || this.height <= y;
  private isOutOfBoundsHorizontally = (x: number) =>
    x < 0 || this.width <= x;

}