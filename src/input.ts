export class Input {
  public lines: string[] = []
  constructor(private readonly input: string) {
    this.lines = input.split('\n').filter(line => !!line.length);
  }

  static create(input: string) {
    return new Input(input);
  }
}