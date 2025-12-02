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
    for (let size = 1; size <= digits.length / 2; size++) {
      const slice = digits.slice(0, size);
      if (this.chunkString(digits.slice(size), size).every((chunk) => chunk === slice))
        return true;
    }

    return false;
  }

  private chunkString(input: string, size: number): string[] {
    const result: string[] = [];

    for (let i = 0; i < input.length; i += size) {
      result.push(input.slice(i, i + size));
    }

    return result;
  }
}
