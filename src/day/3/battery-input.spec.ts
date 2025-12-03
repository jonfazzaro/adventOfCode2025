class BatteryInput {
  static create() {
    return new BatteryInput();
  }
}

describe('The batter input', () => {
  it('should exist', () => {
    expect(BatteryInput.create()).toBeInstanceOf(BatteryInput);
  });

});