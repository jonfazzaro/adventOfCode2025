export class Joltage {
  private bank: number[];

  private constructor(bank: number[]) {
    this.bank = bank;
  }

  static create(bank: number[]) {
    return new Joltage(bank);
  }

  capacity(take = 2) {
    const digits = this.findDigits(take, -1);
    return this.toNumber(digits)
  }

  private findDigits(remaining: number, lastIndex: number): number[] {
    if (remaining === 0) return [];
    const {value, index} = this.nextMaxAndIndex(lastIndex + 1, remaining);
    return [value, ...this.findDigits(remaining - 1, index)];
  }

  private toNumber(digits: number[]) {
    return parseInt(digits.join(''));
  }

  private nextMaxAndIndex(fromIndex: number, leaveAtTheEnd: number) {
    const value = Math.max(...this.bank.slice(fromIndex, this.bank.length - (leaveAtTheEnd - 1)));
    const index = this.bank.indexOf(value);
    return {value, index};
  }
}