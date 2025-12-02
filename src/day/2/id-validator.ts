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
    for (let j = 0; j < digits.length - 1; j++) {
      if (digits[j] === digits[j + 1]) {
        return true;
      }
    }
    return false;
  }
}