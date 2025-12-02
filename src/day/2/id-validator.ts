export class IdValidator {
  static create() {
    return new IdValidator();
  }

  invalidIDs(from: number, to: number): number[] {
    if (to - from == 1) return [];
    return [from, to];
  }
}