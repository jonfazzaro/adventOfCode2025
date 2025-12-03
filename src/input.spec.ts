import {Input} from "./input.ts";
import {DialTurnInput} from "./day/1/dial-turn-input.ts";

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



});

