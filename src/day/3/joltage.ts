export class Joltage {
  private bank: number[];

  private constructor(bank: number[]) {
    this.bank = bank;
  }

  static create(bank: number[]) {
    return new Joltage(bank);
  }

  capacity(take = 2) {
    const {value, index} = this.nextMaxAndIndex(0, take);
    let digits = [
      value,
      this.nextMaxAndIndex(index+1, take-1).value
    ];

    for (let i = 0; i < take; i++) {}

    return this.toNumber(digits)
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