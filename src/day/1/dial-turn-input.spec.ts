import {DialTurnInput} from "./dial-turn-input.ts";

describe('The dial turn input', () => {
  describe.each([
    ["R2\nL3", [2, -3]],
    ["L68\n" +
    "L30\n" +
    "R48\n" +
    "L5\n" +
    "R60\n", [-68, -30, 48, -5, 60]]
  ])('given turn instructions "%s"', (input, expected) => {
    it('lists the turn values', () => {
      const subject = DialTurnInput.create(input);
      expect(subject.turns()).toEqual(expected)
    });
  });

});