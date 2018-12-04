import Square from './Square.js'

export default class Board {
  constructor() {
    this._squares = []
    for (var y = 0; y < 15; ++y) {
      this._squares.push([]);
      for (var x = 0; x < 15; ++x) {
        this._squares[y].push(new Square(0));
      }
    }
  }

  processMove(move) {

  }

  toString() {
    return this._squares;
  }
}
