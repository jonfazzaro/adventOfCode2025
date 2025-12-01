import {Input} from "../../input.ts";

describe('The combination', () => {


  it('is designed in this playground', () => {

    const input = Input.create("L68\n" +
      "L30\n" +
      "R48\n" +
      "L5\n" +
      "R60\n" +
      "L55\n" +
      "L1\n" +
      "L99\n" +
      "R14\n" +
      "L82");

    const combo = Combination.create()
    combo.find(input.lines)


  });
});

class Combination {
  static create() {
    return new Combination();
  }

  find(lines: string[]) {

  }
}