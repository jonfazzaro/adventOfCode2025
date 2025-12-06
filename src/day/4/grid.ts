export class Grid {
  public height: number;
  public width: number;

  constructor(rows: string[]) {
    this.width = rows[0].length;
    this.height = rows.length;
  }

  static create(width: number, height: number) {
    return new Grid(width, height);
  }
}