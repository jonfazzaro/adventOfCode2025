export class Grid {
  public height: number;
  public width: number;
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

  neighborsOf(x: number, y: number) {
    const neighbors = {
      north: this.at(x, y - 1),
      northeast: this.at(x + 1, y - 1),
      east: this.at(x + 1, y),
      southeast: this.at(x + 1, y + 1),
      south: this.at(x, y + 1),
      southwest: this.at(x - 1, y + 1),
      west: this.at(x - 1, y),
      northwest: this.at(x - 1, y - 1),
    }
    console.log(neighbors);

    return Object.values(neighbors).join('')
  }
}