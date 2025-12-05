const defaultValue = '.';

export class Grid {
  public height: number;
  public width: number;
  public cells: Array<string> = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = Array(height).fill(this.newRow(width));
  }

  static create(width: number, height: number) {
    return new Grid(width, height);
  }

  private newRow(width: number) {
    return Array(width).fill(defaultValue).join('');
  }
}