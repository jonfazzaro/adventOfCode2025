export class Dial {
  position: number;

  constructor() {
    this.position = 50;
    this.positions = 100;
  }

  turn(number: number) {
    this.position = this.wrap(this.position + number);
  }

  private wrap(n: number) {
    const m = 100;
    return ((n % m) + m) % m;
  }
}

