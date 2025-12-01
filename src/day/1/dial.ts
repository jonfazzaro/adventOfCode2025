export class Dial {
  position: number;

  constructor() {
    this.position = 50;
  }

  turn(number: number) {
    this.position = this.wrap(this.position + number, 100);
  }

  private wrap(n: number, m: number) {
    return ((n % m) + m) % m;
  }
}

