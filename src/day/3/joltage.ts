export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    return parseInt(this.sortDescending(bank)
      .slice(0, 2)
      .join(''))
  }

  private sortDescending(bank: number[]) {
    return bank.sort((a, b) => b - a);
  }
}