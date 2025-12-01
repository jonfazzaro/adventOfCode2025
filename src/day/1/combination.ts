import {Dial} from "./dial.ts";

export class Combination {
  constructor(private readonly dial: Dial = Dial.create()) { }

  static create(dial: Dial) {
    return new Combination(dial);
  }

  find(turns: number[]): number {
    return 0;
  }
}