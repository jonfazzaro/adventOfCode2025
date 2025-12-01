export class Input {
  public lines: string[] = []
  constructor(input: string) {
    this.lines = this.parseLines(input);
  }

  private parseLines(input: string) {
    return input.split('\n').filter(line => !!line.length);
  }

  static create(input: string) {
    return new Input(input);
  }

  turns(): number[] {
    return this.lines.map(this.turn);
  }

  private turn(instruction: string) {
    return parseInt(instruction.substring(1)) * (instruction.charAt(0) === 'R' ? 1 : -1);
  }
}