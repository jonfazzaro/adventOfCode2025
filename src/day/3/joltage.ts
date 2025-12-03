export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    const firstDigit = this.firstDigit(bank);
    const secondDigit = this.secondDigit(bank, firstDigit);

    return parseInt([firstDigit, secondDigit].join(''))
  }

  private secondDigit(bank: number[], firstDigit: number) {
    const firstDigitIndex = bank.indexOf(firstDigit);
    const secondDigit = Math.max(...bank.slice(firstDigitIndex + 1));
    return secondDigit;
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