export class Cell {
  neighbors: Array<Cell | undefined>;
  private constructor(neighbors: Array<Cell | undefined>) {
    this.neighbors = neighbors;
  }

  static create(neighbors: Array<Cell | undefined> = []) {
    return new Cell(neighbors);
  }
}