export class Grid {
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

  }

  width: number;
  static create(width: number, height: number) {
    return new Grid(width, height);
  }
}