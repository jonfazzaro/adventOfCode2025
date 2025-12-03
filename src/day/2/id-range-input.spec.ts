import {Input} from "../../input.ts";

class IdRangeInput extends Input {
  constructor(props) {
    super("", ',');
  }

  static create() {
    return new IdRangeInput("");
  }

}

describe('The ID range input', () => {
  it('should exist', () => {
    expect(IdRangeInput.create()).toBeInstanceOf(Input);
  });

});