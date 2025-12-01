import {Dial} from "./dial.ts";

describe('The dial', () => {
  let dial: Dial;
  beforeEach(() => {
    dial = Dial.create();
  });

  it('starts at position 50', () => {
    expect(dial.position).toEqual(50)
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
    beforeEach(() => {
      dial.turn(-50);
    });

    it('has position 0', () => {
      expect(dial.position).toEqual(0);
    });

    describe('then L23', () => {
      beforeEach(() => {
        dial.turn(-23);
      });

      it('has position 77', () => {
        expect(dial.position).toEqual(77);
      });

      describe('then L50', () => {
        beforeEach(() => {
          dial.turn(-50);
        });

        it('has position 27', () => {
          expect(dial.position).toEqual(27);
        });
      });
    });
  });

});