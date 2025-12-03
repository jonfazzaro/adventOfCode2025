import {Input} from "../../input.ts";
import {IdRangeInput} from "./id-range.input.ts";

describe('The ID range input', () => {
  it('should exist', () => {
    expect(IdRangeInput.create()).toBeInstanceOf(Input);
  });

  it('parses ranges', () => {
    const subject = Input.create("11-22,95-115,998-1012", ',');
    expect(subject.ranges()).toEqual(expect.arrayContaining([
      [11,22],
      [95,115],
      [998,1012]
    ]))
  });
});