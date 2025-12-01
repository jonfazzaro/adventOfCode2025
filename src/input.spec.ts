import {Input} from "./input.ts";

describe('The input', () => {

  it('has lines', () => {
    const subject = Input.create("");
    expect(subject.lines.length).toEqual(0)
  });
});

