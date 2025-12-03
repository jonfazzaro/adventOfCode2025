export class Joltage {
  private bank: number[];
  private constructor(bank: number[]) {
    this.bank = bank;
  }

  static create(bank: number[]) {
    return new Joltage(bank);
  }

  capacity(take = 2) {
    let digits = [
      this.firstDigit(),
      this.secondDigit()
    ];

    for(let i = 0; i < take; i++)


    return this.toNumber(digits)
  }

  private toNumber(digits: number[]) {
    return parseInt(digits.join(''));
  }

  private secondDigit() {
    const firstDigitIndex = this.bank.indexOf(this.firstDigit());
    return Math.max(...this.bank.slice(firstDigitIndex + 1));
  }

  private firstDigit() {
    return this.isLastOf(Math.max(...this.bank))
      ? Math.max(...this.bank.slice(0, this.bank.length - 1))
      : Math.max(...this.bank);
  }

  private isLastOf(maxDigit: number) {
    return this.bank.indexOf(maxDigit) === this.bank.length - 1;
  }
}