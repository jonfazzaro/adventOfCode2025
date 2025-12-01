describe('The input', () => {

  it('should exist', () => {

    Input.create("")
  });
});

class Input {
  constructor(private readonly input: string) {
  }

  static create(input: string) {
    return new Input(input);
  }
}