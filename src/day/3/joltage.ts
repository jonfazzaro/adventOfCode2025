export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    return parseInt(bank.sort((a, b) => b - a)
      .slice(0, 2)
      .join(''))
  }
}