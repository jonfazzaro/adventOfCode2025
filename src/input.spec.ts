import {Input} from "./input.ts";

describe('The input', () => {

  it('has values', () => {
    const subject = Input.create("");
    expect(subject.values.length).toEqual(0)
  });

  describe('given lines', () => {
    it('parses them', () => {
      const subject = Input.create("line1\nline2\nline3");
      expect(subject.values.length).toEqual(3)
    });
  });

  describe('given comma-separated values', () => {
    it('parses them', () => {
      const subject = Input.create("line1,line2", ',');
      expect(subject.values.length).toEqual(2)
    });
  });

  describe.each([
    ["R2\nL3", [2, -3]],
    ["L68\n" +
    "L30\n" +
    "R48\n" +
    "L5\n" +
    "R60\n", [-68, -30, 48, -5, 60]]
    ])('given turn instructions "%s"', (input, expected) => {
    it('lists the turn values', () => {
      const subject = Input.create(input);
      expect(subject.turns()).toEqual(expected)
    });
  });

});

