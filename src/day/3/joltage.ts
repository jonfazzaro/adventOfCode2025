export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    console.log(bank)
    return parseInt(this.sortDescending(bank)
      .slice(0, 2)
      .join(''))
  }

  private sortDescending(bank: number[]) {
    return bank.sort((a, b) => b - a);
  }
}