describe('The input', () => {

  it('should exist', () => {

    Input.create("")
  });
});

class Input {
  private input: string;
  constructor(input: string) {
    this.input = input;
  }

  static create(input: string) {
    return new Input(input);
  }
}