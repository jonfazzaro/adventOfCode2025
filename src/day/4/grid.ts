export class Grid {
  public height: number;
  public width: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  static create(width: number, height: number) {
    return new Grid(width, height);
  }
}