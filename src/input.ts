export class Input {
  public values: string[] = []
  private separator: string;

  constructor(input: string, separator: string) {
    this.separator = separator;
    this.values = this.parseValues(input);
  }

  private parseValues(input: string) {
    return input.split(this.separator).filter(line => !!line.length);
  }

  static create(input: string, separator = '\n'): Input {
    return new Input(input, separator);
  }


}