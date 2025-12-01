export class Input {
  public lines: string[] = []
  constructor(private readonly input: string) {
  }

  static create(input: string) {
    return new Input(input);
  }
}