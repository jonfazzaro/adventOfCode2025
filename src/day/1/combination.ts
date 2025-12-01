import {Dial} from "./dial.ts";

export class Combination {
  constructor(private readonly dial: Dial = Dial.create()) { }

  static create(dial: Dial) {
    return new Combination(dial);
  }

  find(lines: string[]): number {
    const turns = lines.map(line => line.charAt(0) === 'R' ? 1 : -1);
    return 0;
  }
}