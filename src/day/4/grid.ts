export type Point = { x: number; y: number };

export class Grid {
  public height: number;
  public width: number;
  protected rows: string[];

  constructor(rows: string[]) {
    this.rows = rows;
    this.width = rows[0].length;
    this.height = rows.length;
  }

  static create<T extends typeof Grid>(this: T, rows: string[]): InstanceType<T> {
    return new this(rows) as InstanceType<T>;
  }

  at(x: number, y: number) {
    if (this.isOutOfBounds(x, y)) return "";
    return (this.rows)[y][x]
  }

  withRemoved(x: number, y: number): this {
    if (this.isOutOfBounds(x, y)) return this;
    return this.create([
      ...this.rows.slice(0, y),
      this.replaceChar(this.rows[y], '.', x),
      ...this.rows.slice(y + 1)
    ]);
  }

  withManyRemoved(points: Point[]): this {
    return points.reduce((grid: this, point) => grid.withRemoved(point.x, point.y), this);
  }

  neighborsOf(x: number, y: number) {
    const neighbors = this.neighbors(x, y);
    return Object.values(neighbors).join('')
  }

  toString(): string {
    return this.rows.join('\n')
  }

  private create(rows: string[]) {
    return (this.constructor as typeof Grid).create(rows) as this;
  }

  private replaceChar(originalString: string, newChar: string, index: number) {
    let charArray = originalString.split("");
    charArray[index] = newChar;
    return charArray.join("");
  }
  private isOutOfBounds = (x: number, y: number) =>
    this.isOutOfBoundsHorizontally(x) || this.isOutOfBoundsVertically(y);

  private isOutOfBoundsVertically = (y: number) =>
    y < 0 || this.height <= y;

  private isOutOfBoundsHorizontally = (x: number) =>
    x < 0 || this.width <= x;

  private neighbors(x: number, y: number) {
    return {
      north: this.at(x, y - 1),
      northeast: this.at(x + 1, y - 1),
      east: this.at(x + 1, y),
      southeast: this.at(x + 1, y + 1),
      south: this.at(x, y + 1),
      southwest: this.at(x - 1, y + 1),
      west: this.at(x - 1, y),
      northwest: this.at(x - 1, y - 1),
    };
  }

  protected points(): Point[] {
    return Array.from({length: this.height}).flatMap((_, y) =>
      Array.from({length: this.width}).map((_, x) => ({
        x, y
      })));
  }
}