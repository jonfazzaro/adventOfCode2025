export class Input {
  public values: string[] = []
  private separator: string;

  constructor(input: string, separator: string) {
    this.separator = separator;
    this.values = this.parseLines(input);
  }

  private parseLines(input: string) {
    return input.split(this.separator).filter(line => !!line.length);
  }

  static create(input: string, separator = '\n'): Input {
    return new Input(input, separator);
  }

  turns(): number[] {
    return this.values.map(this.turn);
  }

  private turn(instruction: string) {
    return parseInt(instruction.substring(1)) * (instruction.charAt(0) === 'R' ? 1 : -1);
  }

  ranges() {
    return this.values.map(value => value.split('-').map(Number))
  }
}