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
    if (clicks <= 0)
      return this.calculateLeftCrossings(clicks, fromPosition);
    return this.calculateRightCrossings(clicks, fromPosition);
  }

  private calculateLeftCrossings(clicks: number, fromPosition: number) {
    const distanceToZero = fromPosition === 0 ? this.positions : fromPosition;
    if (Math.abs(clicks) < distanceToZero)
      return 0;
    return Math.floor((Math.abs(clicks) - distanceToZero) / this.positions) + 1;
  }

  private calculateRightCrossings(clicks: number, fromPosition: number) {
    const distanceToZero = fromPosition === 0 ? this.positions : this.positions - fromPosition;
    if (clicks < distanceToZero)
      return 0;
    return Math.floor((clicks - distanceToZero) / this.positions) + 1;
  }

  private distanceToZero(position: number, clicks: number) {
    return position === 0 ? this.positions : this.positions - position;
  }

  private wrap(n: number) {
    return modulo(n, this.positions);

    function modulo(value: number, modulus: number) {
      return ((value % modulus) + modulus) % modulus;
    }
  }
}

