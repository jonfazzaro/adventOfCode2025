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

  turn(delta: number) {
    if (delta === 0) return;
    this.crossings += this.calculateCrossings(delta, this.position);
    this.position = this.wrap(this.position + delta);
  }

  private calculateCrossings(clicks: number, fromPosition: number) {
    const distanceToZero = this.distanceToZero(fromPosition, clicks);
    if (Math.abs(clicks) < distanceToZero)
      return 0;
    return Math.floor((Math.abs(clicks) - distanceToZero) / this.positions) + 1;
  }
  private distanceToZero(position: number, clicks: number) {
    if (position === 0) return this.positions;
    if (clicks < 0) return position;
    return this.positions - position;
  }

  private wrap(n: number) {
    return modulo(n, this.positions);

    function modulo(value: number, modulus: number) {
      return ((value % modulus) + modulus) % modulus;
    }
  }
}

