export class Dial {
  position: number;

  constructor() {
    this.position = 50;
  }

  turnRight(number: number) {
    this.position += number;
  }
}