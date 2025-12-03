export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    const firstDigit = this.firstDigit(bank);

    const firstDigitIndex = bank.indexOf(firstDigit);
    const secondDigit = Math.max(...bank.slice(firstDigitIndex + 1));

    return parseInt([firstDigit, secondDigit].join(''))
  }

  private firstDigit(bank: number[]) {
    const firstDigit = this.isLastOf(bank, Math.max(...bank))
      ? Math.max(...bank.slice(0, bank.length - 1))
      : Math.max(...bank);
    return firstDigit;
  }

  private isLastOf(bank: number[], maxDigit: number) {
    return bank.indexOf(maxDigit) === bank.length - 1;
  }
}