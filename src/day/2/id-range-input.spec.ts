import {Input} from "../../input.ts";
import {IdRangeInput} from "./id-range.input.ts";

describe('The ID range input', () => {
  it('should exist', () => {
    expect(IdRangeInput.create()).toBeInstanceOf(Input);
  });

});