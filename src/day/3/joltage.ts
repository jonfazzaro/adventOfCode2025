export class Joltage {
  private bank: number[];

  private constructor(bank: number[]) {
    this.bank = bank;
  }

  static create(bank: number[]) {
    return new Joltage(bank);
  }

  capacity(take = 2) {
    const firstDigit = this.firstDigit(take);
    const firstDigitIndex = this.bank.indexOf(this.firstDigit(take));
    let digits = [
      firstDigit,
      this.nextMax(firstDigitIndex)
    ];


    return this.toNumber(digits)
  }

  private toNumber(digits: number[]) {
    return parseInt(digits.join(''));
  }

  private nextMax(afterIndex: number) {
    return Math.max(...this.bank.slice(afterIndex + 1));
  }

  private secondDigit(take: number) {
    const firstDigitIndex = this.bank.indexOf(this.firstDigit(take));
    return Math.max(...this.bank.slice(firstDigitIndex + 1));
  }

  private firstDigit(take: number) {
    return Math.max(...this.bank.slice(0, this.bank.length - (take - 1)))
  }
}