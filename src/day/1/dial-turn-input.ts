import {Input} from "../../input.ts";

export class DialTurnInput extends Input {
  constructor(input: string) {
    super(input, '\n');
  }

  static create(input: string) {
    return new DialTurnInput(input)
  }

  turns(): number[] {
    return this.values.map(this.turn);
  }

  private turn(instruction: string) {
    return parseInt(instruction.substring(1)) * (instruction.charAt(0) === 'R' ? 1 : -1);
  }
}