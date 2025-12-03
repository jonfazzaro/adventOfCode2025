import {Input} from "../../input.ts";

class IdRangeInput extends Input {
  constructor(props) {
    super("");

  }

}

describe('The ID range input', () => {
  it('should exist', () => {
   expect(new IdRangeInput()).toBeInstanceOf(Input);
  });

});