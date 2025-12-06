export class Grid {
  public height: number;
  public width: number;

  constructor(rows: string[]) {
    this.width = rows[0].length;
    this.height = rows.length;
  }

  static create(rows: string[]) {
    return new Grid(rows);
  }

  at(x: number, y: number) {
    return "@";
  }
}