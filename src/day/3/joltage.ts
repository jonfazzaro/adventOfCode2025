export class Joltage {
  private bank: number[];

  private constructor(bank: number[]) {
    this.bank = bank;
  }

  static create(bank: number[]) {
    return new Joltage(bank);
  }

  capacity(take = 2) {
    const {value, index} = this.nextMaxAndIndex(0, take);
    const digits = [
      value,
      this.nextMaxAndIndex(index + 1, take - 1).value
    ];

    let digits2 = []
    let lastIndex = -1
    for (let i = 0; i < take; i++) {
      const {value, index} = this.nextMaxAndIndex(lastIndex + 1, take - i);
      lastIndex = index;
      digits2.push(value);
    }
    console.log(digits2)

    return this.toNumber(digits)
  }

  private toNumber(digits: number[]) {
    return parseInt(digits.join(''));
  }

  private nextMaxAndIndex(fromIndex: number, leaveAtTheEnd: number) {
    const value = Math.max(...this.bank.slice(fromIndex, this.bank.length - (leaveAtTheEnd - 1)));
    const index = this.bank.indexOf(value);
    return {value, index};
  }
}