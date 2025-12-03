import {Input} from "../../input.ts";
import {BatteryInput} from "./battery-input.ts";

describe('The batter input', () => {
  it('should exist', () => {
    expect(BatteryInput.create("")).toBeInstanceOf(Input);
  });

  it('splits a line of digits into an array', () => {
    const subject = BatteryInput.create("811111111111119");
    expect(subject.banks()).toEqual([8,1,1,1,1,1,1,1,1,1,1,1,1,1,9]);
  });

  describe('given multi-line input', () => {
    it('returns multiple arrays', () => {
      const subject = BatteryInput.create("811111111111119\n" +"")
      
    });

  });

});