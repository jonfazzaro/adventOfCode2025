export class Grid {
  public height: number;
  public width: number;
  public cells: Array<string> = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    for (let y = 0; y < height; y++)
      this.cells.push(Array(width).fill('.').join(''));
  }

  static create(width: number, height: number) {
    return new Grid(width, height);
  }
}