export class Input {
  constructor(private readonly input: string) {
  }

  static create(input: string) {
    return new Input(input);
  }
}