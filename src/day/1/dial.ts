export class Dial {
  position: number;
  private positions: number;

  constructor() {
    this.position = 50;
    this.positions = 100;
  }

  turn(number: number) {
    this.position = this.wrap(this.position + number);
  }

  private wrap(n: number) {
    const m = this.positions;

    return modulo(n);

    function modulo(value: number) {
      return ((value % m) + m) % m;
    }
  }
}

