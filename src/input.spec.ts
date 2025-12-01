describe('The input', () => {

  it('should exist', () => {

    Input.create("")
  });
});

class Input {
  static create(input: string) {
    return input;
  }
}