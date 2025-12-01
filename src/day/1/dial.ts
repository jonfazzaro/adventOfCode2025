export class Dial {
  public position: number;

  constructor() {
    this.position = 50;
  }

  // Turn the dial with a command like 'R3' or 'L10'. Wraps on a 0-99 dial.
  turn(command: string): this {
    const match = command.match(/^([LR])(\d+)$/i);
    if (!match) {
      throw new Error(`Invalid turn command: ${command}`);
    }

    const dir = match[1].toUpperCase();
    const amount = parseInt(match[2], 10);
    const delta = dir === 'R' ? amount : -amount;

    // ensure wrap within 0..99
    this.position = ((this.position + delta) % 100 + 100) % 100;
    return this;
  }
}