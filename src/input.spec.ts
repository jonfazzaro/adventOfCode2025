import {Input} from "./input.ts";

describe('The input', () => {

  it('has lines', () => {
    const subject = Input.create("");
    expect(subject.lines.length).toEqual(0)
  });

  describe('given two lines', () => {
    it('parses them', () => {
      const subject = Input.create("line1\nline2");
      expect(subject.lines.length).toEqual(2)
    });
  });
});

