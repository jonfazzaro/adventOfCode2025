import {Dial} from "./dial.ts";

export class Combination {
  constructor(private readonly dial: Dial = Dial.create()) { }

  static create(dial: Dial) {
    return new Combination(dial);
  }

  find(turns: number[]): number {
    return turns.reduce((zeroCount, turn) => {
      this.dial.turn(turn);
      return this.dial.position === 0 ? zeroCount + 1 : zeroCount;
    }, 0);
  }
}