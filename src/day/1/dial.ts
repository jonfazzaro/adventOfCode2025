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
    return modulo(n, this.positions);

    function modulo(value: number, modulus: number) {
      return ((value % modulus) + modulus) % modulus;
    }
  }
}

