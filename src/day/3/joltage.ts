export class Joltage {
  private bank: number[];

  private constructor(bank: number[]) {
    this.bank = bank;
  }

  static create(bank: number[]) {
    return new Joltage(bank);
  }

  capacity(take = 2) {
    const digits = this.compileMaxDigits(take);
    return this.toNumber(digits)
  }

  private compileMaxDigits(remaining: number, afterIndex: number = -1): number[] {
    if (remaining === 0) return [];
    if (this.bank.slice(afterIndex + 1).length <= remaining) return this.bank.slice(afterIndex + 1)
    const {value, index} = this.nextMaxAndIndex(afterIndex + 1, remaining);
    return [value, ...this.compileMaxDigits(remaining - 1, index)];
  }

  private toNumber(digits: number[]) {
    return parseInt(digits.join(''));
  }

  private nextMaxAndIndex(fromIndex: number, leaveAtTheEnd: number) {
    const endExclusive = this.bank.length - (leaveAtTheEnd - 1);
    const window = this.bank.slice(fromIndex, endExclusive);
    const value = Math.max(...window);
    const index = fromIndex + window.indexOf(value);
    return {value, index};
  }
}