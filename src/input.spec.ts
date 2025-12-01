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

  describe.each([
    ["R2\nL3", [-2, 3]]
    ])('given turn instructions', (input, expected) => {
    it('lists the turn values', () => {
      const subject = Input.create(input);
      expect(subject.turns()).toEqual(expected)
    });
  });
});

