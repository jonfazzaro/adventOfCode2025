import {IdValidator} from "./id-validator.ts";

describe('The ID validator', () => {
  it('exists', () => {
    expect(new IdValidator()).toBeInstanceOf(IdValidator)
  });

});