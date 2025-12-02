import {IdValidator} from "./id-validator.ts";
import {Input} from "../../input.ts";

describe('The ID validator', () => {
  it('exists', () => {
    expect(IdValidator.create()).toBeInstanceOf(IdValidator)
  });

  it('solves the example', () => {
    const input = Input.create("11-22,95-115,998-1012,1188511880-1188511890,222220-222224," +
      "1698522-1698528,446443-446449,38593856-38593862,565653-565659," +
      "824824821-824824827,2121212118-2121212124")
    const validator = IdValidator.create();

  });

});