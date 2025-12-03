import {IdRangeInput} from "./id-range.input.ts";

describe('The ID range input', () => {
  it('parses ranges', () => {
    const subject = IdRangeInput.create("11-22,95-115,998-1012", ',');
    expect(subject.ranges()).toEqual(expect.arrayContaining([
      [11,22],
      [95,115],
      [998,1012]
    ]))
  });
});