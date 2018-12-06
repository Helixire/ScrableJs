import Square from './Square.js'

export default class Board {
  constructor() {
    this._squares = [];
    for (var y = 0; y < 15; ++y) {
      this._squares.push([]);
      for (var x = 0; x < 15; ++x) {
        this._squares[y].push(new Square(0));
      }
    }
    this._squares[0][3].type = 1;
    this._squares[3][0].type = 1;
    this._squares[0][11].type = 1;
    this._squares[11][0].type = 1;
    this._squares[14][3].type = 1;
    this._squares[3][14].type = 1;
    this._squares[14][11].type = 1;
    this._squares[11][14].type = 1;
    this._squares[2][6].type = 1;
    this._squares[2][8].type = 1;
    this._squares[3][7].type = 1;
    this._squares[6][2].type = 1;
    this._squares[8][2].type = 1;
    this._squares[7][3].type = 1;
    this._squares[7][11].type = 1;
    this._squares[6][12].type = 1;
    this._squares[8][12].type = 1;
    this._squares[11][7].type = 1;
    this._squares[12][6].type = 1;
    this._squares[12][8].type = 1;
    this._squares[6][6].type = 1;
    this._squares[8][8].type = 1;
    this._squares[6][8].type = 1;
    this._squares[8][6].type = 1;

    this._squares[5][5].type = 2;
    this._squares[9][9].type = 2;
    this._squares[5][9].type = 2;
    this._squares[9][5].type = 2;
    this._squares[5][1].type = 2;
    this._squares[9][1].type = 2;
    this._squares[1][5].type = 2;
    this._squares[1][9].type = 2;
    this._squares[13][5].type = 2;
    this._squares[13][9].type = 2;
    this._squares[5][13].type = 2;
    this._squares[9][13].type = 2;

    this._squares[1][1].type = 3;
    this._squares[2][2].type = 3;
    this._squares[3][3].type = 3;
    this._squares[4][4].type = 3;
    this._squares[10][10].type = 3;
    this._squares[11][11].type = 3;
    this._squares[12][12].type = 3;
    this._squares[13][13].type = 3;
    this._squares[13][1].type = 3;
    this._squares[12][2].type = 3;
    this._squares[11][3].type = 3;
    this._squares[10][4].type = 3;
    this._squares[4][10].type = 3;
    this._squares[3][11].type = 3;
    this._squares[2][12].type = 3;
    this._squares[1][13].type = 3;

    this._squares[0][0].type = 4;
    this._squares[0][7].type = 4;
    this._squares[0][14].type = 4;
    this._squares[7][0].type = 4;
    this._squares[7][14].type = 4;
    this._squares[14][0].type = 4;
    this._squares[14][7].type = 4;
    this._squares[14][14].type = 4;

    this._squares[7][7].type = 5;
  }

  processMove(move) {

  }

  toString() {
    return this._squares;
  }
}
