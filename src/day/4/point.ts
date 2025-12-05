export class Point {
  constructor(
    public readonly x: number,
    public readonly y: number) {
  }

  static create(x: number, y: number) {
    return new Point(x, y);
  }

  east() {
    return Point.create(this.x + 1, this.y);
  }

  west() {
    return undefined
  }
}