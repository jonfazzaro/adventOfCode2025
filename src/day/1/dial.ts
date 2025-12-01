export class Dial {
  position: number;
  crossings: number;
  private positions: number;

  private constructor() {
    this.position = 50;
    this.positions = 100;
    this.crossings = 0;
  }

  static create() {
    return new Dial();
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

