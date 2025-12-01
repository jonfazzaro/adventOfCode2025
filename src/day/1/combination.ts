import {Dial} from "./dial.ts";

export class Combination {
  constructor(private readonly dial: Dial = Dial.create()) { }

  static create(dial: Dial) {
    return new Combination(dial);
  }

  find(turns: number[]): number {
    let zeroCount = 0;
    for (const turn of turns) {
      this.dial.turn(turn);
      if (this.dial.position === 0) {
        zeroCount += 1;
      }
    }
    return zeroCount;
  }
}