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

  private calculateCrossings(delta: number, fromPosition: number) {
    if (delta <= 0)
      return this.calculateLeftCrossings(delta, fromPosition);
    return this.calculateRightCrossings(delta, fromPosition);
  }

  private calculateLeftCrossings(delta: number, fromPosition: number) {
    const offsetDelta = -delta;
    const r = fromPosition === 0 ? this.positions : fromPosition;
    if (offsetDelta < r)
      return 0;
    return Math.floor((offsetDelta - r) / this.positions) + 1;
  }

  private calculateRightCrossings(delta: number, fromPosition: number) {
    const effectivePosition = fromPosition === 0 ? this.positions : this.positions - fromPosition;
    if (delta < effectivePosition)
      return 0;
    return Math.floor((delta - effectivePosition) / this.positions) + 1;
  }

  private wrap(n: number) {
    return modulo(n, this.positions);

    function modulo(value: number, modulus: number) {
      return ((value % modulus) + modulus) % modulus;
    }
  }
}

