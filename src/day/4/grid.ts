export class Grid {
  public height: number;
  public width: number;
  protected rows: string[];

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

  withRemoved(x: number, y: number) {
    if (this.isOutOfBounds(x, y)) return "";
    const copyOfRows = [...this.rows];
    copyOfRows[y] = this.replaceChar(copyOfRows[y], '.', x);
    return Grid.create(copyOfRows);
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

  neighborsOf(x: number, y: number) {
    const neighbors = this.neighbors(x, y);
    return Object.values(neighbors).join('')
  }

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

  protected points() {
    return Array.from({length: this.height}).flatMap((_, y) =>
      Array.from({length: this.width}).map((_, x) => ({
        x, y
      })));
  }

  toString(): string {
    return this.rows.join('\n')
  }
}