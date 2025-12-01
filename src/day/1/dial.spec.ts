import {Dial} from "./dial.ts";

describe('The dial', () => {
  let dial: Dial;
  beforeEach(() => {
    dial = Dial.create();
  });

  it('starts at position 50', () => {
    expect(dial.position).toEqual(50)
  });

  describe('when turning right 3', () => {

    beforeEach(() => {
      dial.turn(3);
    });

    it('has position 53', () => {
      expect(dial.position).toEqual(53);
    });

    it('has no zero crossings', () => {
      expect(dial.crossings).toEqual(0)
    });

    describe('then left 10', () => {
      beforeEach(() => {
        dial.turn(-10);
      });

      it('has position 43', () => {
        expect(dial.position).toEqual(43);
      });
    });
  });

  describe('when turning left 50', () => {
    beforeEach(() => {
      dial.turn(-50);
    });

    it('has position 0', () => {
      expect(dial.position).toEqual(0);
    });

    it('has one zero crossing', () => {
      expect(dial.crossings).toEqual(1)
    });

    describe('then left 23', () => {
      beforeEach(() => {
        dial.turn(-23);
      });

      it('has position 77', () => {
        expect(dial.position).toEqual(77);
      });

      describe('then left 50', () => {
        beforeEach(() => {
          dial.turn(-50);
        });

        it('has position 27', () => {
          expect(dial.position).toEqual(27);
        });
      });
    });
  });

  describe('when turning right 1000', () => {
    it('crosses zero ten times', () => {
      dial.turn(1000);
      expect(dial.crossings).toEqual(10);
    });
  });

});