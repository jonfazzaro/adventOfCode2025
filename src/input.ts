export class Input {
  public values: string[] = []
  constructor(input: string) {
    this.values = this.parseLines(input);
  }

  private parseLines(input: string) {
    return input.split(/\n|,/).filter(line => !!line.length);
  }

  static create(input: string) {
    return new Input(input);
  }

  turns(): number[] {
    return this.values.map(this.turn);
  }

  private turn(instruction: string) {
    return parseInt(instruction.substring(1)) * (instruction.charAt(0) === 'R' ? 1 : -1);
  }

  ranges() {
    return [] // this.values.map(value => value.split('-').map(Number))
  }
}