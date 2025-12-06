import {Grid} from "./grid.ts";

class PaperGrid extends Grid {
  constructor(rows:string[]) {
    super(rows);
  }

}

describe('The paper grid', () => {
  it('is a grid', () => {
    expect(new PaperGrid(["", ""])).toBeInstanceOf(Grid)

  });

});