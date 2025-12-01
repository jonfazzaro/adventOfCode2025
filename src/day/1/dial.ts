export class Dial {
  position: number;

  constructor() {
    this.position = 50;
  }

  turn(number: number) {
    this.position = mod(this.position + number, 100);
  }
}

const mod = (n: number, m: number) =>
    ((n % m) + m) % m;

