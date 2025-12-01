import {Dial} from "./dial.ts";

describe('The dial', () => {
  let dial: Dial;
  beforeEach(() => {
    dial = new Dial();
  });
  it('starts at position 50', () => {
    expect(new Dial().position).toEqual(50)
  });

  describe('given a R3', () => {

    beforeEach(() => {
      dial.turn(3);
    });

    it('has position 53', () => {
      expect(dial.position).toEqual(53);
    });

    describe('then L10', () => {
      beforeEach(() => {
        dial.turn(-10);
      });

      it('has position 43', () => {
        expect(dial.position).toEqual(43);
      });
    });
  });

  describe('given L50', () => {
    it.todo('has position 0');

    describe('then L23', () => {
      it.todo('has position 77');
    });

    describe('then L50', () => {
      it.todo('has position 27');
    });
  });

});