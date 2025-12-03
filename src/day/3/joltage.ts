export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    const maxDigit = Math.max(...bank);
    const maxDigitIndex = bank.indexOf(maxDigit);

    // If max digit is at the end, we need the second largest from the beginning
    const firstDigit = maxDigitIndex === bank.length - 1
      ? Math.max(...bank.slice(0, bank.length - 1))
      : maxDigit;

    const firstDigitIndex = bank.indexOf(firstDigit);
    const secondDigit = Math.max(...bank.slice(firstDigitIndex + 1));

    return parseInt([firstDigit, secondDigit].join(''))
  }

}