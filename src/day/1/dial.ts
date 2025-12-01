export class Dial {
  position: number;

  constructor() {
    this.position = 50;
  }

  turn(number: number) {
    this.position = this.mod(this.position + number, 100);
  }

  mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }
}

