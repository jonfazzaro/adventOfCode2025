export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    const [one, two] = this.sortDescending(bank).slice(0, 2);
    const first = bank.indexOf(one);
    const second = bank.indexOf(two);

    console.log({one, two, first, second})
    return parseInt(this.sortAscending([first, second]).map(i => bank[i]).join(''))
  }

  private sortDescending(bank: number[]) {
    return [...bank].sort((a, b) => b - a);
  }

  private sortAscending(bank: number[]) {
    return [...bank].sort((a, b) => a - b);
  }
}