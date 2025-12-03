export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    return parseInt([
      this.firstDigit(bank),
      this.secondDigit(bank, this.firstDigit(bank))
    ].join(''))
  }

  private secondDigit(bank: number[], firstDigit: number) {
    const firstDigitIndex = bank.indexOf(firstDigit);
    return Math.max(...bank.slice(firstDigitIndex + 1));
  }

  private firstDigit(bank: number[]) {
    return this.isLastOf(bank, Math.max(...bank))
      ? Math.max(...bank.slice(0, bank.length - 1))
      : Math.max(...bank);
  }

  private isLastOf(bank: number[], maxDigit: number) {
    return bank.indexOf(maxDigit) === bank.length - 1;
  }
}