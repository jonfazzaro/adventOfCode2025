export class IdValidator {
  static create() {
    return new IdValidator();
  }

  invalidIDs(from: number, to: number): number[] {
    if (to - from == 1) return [];
    return this.range(from, to).filter(i => this.hasRepeatingDigits(i))
  }

  private range(from: number, to: number) {
    return [...Array(to - from + 1).keys()].map(i => i + from);
  }

  private hasRepeatingDigits(i: number) {
    const digits = i.toString();
    // Invalid if the number can be split into two equal halves (e.g., 11, 22, 33, 1010)
    if (digits.length % 2 !== 0) return false;
    const half = digits.length / 2;
    return digits.slice(0, half) === digits.slice(half);
  }
}