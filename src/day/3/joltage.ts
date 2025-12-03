export class Joltage {
  static create() {
    return new Joltage();
  }

  capacity(bank: number[]) {
    // find the max digit
    let first = Math.max(...bank);
    // if its the last one, find the second highest
    if (bank.indexOf(first) === bank.length - 1)
      first = Math.max(...bank.slice(0, bank.length - 1));
    // starting from its index, find the next highest
    const second = Math.max(...bank.slice(bank.indexOf(first) + 1));
    // join and sum
    return parseInt([first, second].join(''))
  }

  private sortDescending(bank: number[]) {
    return [...bank].sort((a, b) => b - a);
  }

  private sortAscending(bank: number[]) {
    return [...bank].sort((a, b) => a - b);
  }
}