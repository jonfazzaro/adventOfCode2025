export class IdValidator {
  static create() {
    return new IdValidator();
  }

  invalidIDs(from: number, to: number): number[] {
    if (to - from == 1) return [];
    return this.range(from, to).filter((i) => this.hasRepeatingDigits(i));
  }

  private range(from: number, to: number) {
    return [...Array(to - from + 1).keys()].map((i) => i + from);
  }

  private hasRepeatingDigits(i: number): boolean {
    const digits = i.toString();
    for (let index = 1; index < digits.length; index++) {
      const slice = digits.slice(0, index);
      const remainingDigits = digits.slice(index);
      if (remainingDigits.split('').every((digit) => digit === slice)) return true;
    }

    return false;
    // for (let index = 0; index < digits.length; index++) {
    //   const fractionLength = digits.length / index;
    //   if (digits.slice(0, fractionLength) === digits.slice(fractionLength * index, fractionLength * index)) return true;
    // }
    // return false;
  }
}
