export class Dial {
  position: number;

  constructor() {
    this.position = 50;
  }

  turn(number: number) {
    this.position += number;
  }
}