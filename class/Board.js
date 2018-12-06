import Square from './Square.js';

export default class Board {
  constructor(obj) {
    if (obj instanceof Board) {
      this._squares = JSON.parse(JSON.stringify(obj._squares));
      return;
    }
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

  getWordFromDirection(x, y, vertical) {
    var ix = vertical ? 0 : -1;
    var iy = vertical ? -1 : 0;
    var ret = "";

    while (y > -1 && x > -1 && typeof this._squares[y][x].type === 'string') {
      x += ix;
      y += iy;
    }
    ix *= -1;
    iy *= -1;
    x += ix;
    y += iy;
    while (y < 15 && x < 15 && typeof this._squares[y][x].type === 'string') {
      ret += this._squares[y][x].type;
      x += ix;
      y += iy;
    }
    return ret;
  }

  getWordPosition(x, y) {
    return [this.getWordFromDirection(x, y, false), this.getWordFromDirection(x, y, true)];
  }

  getWords(x, y, range, direction) {
    var ix = 0;
    var iy = 0;

    switch (direction) {
      case 0:
        ix = -1;
        break;
      case 1:
        iy = -1;
        break;
      case 2:
        ix = 1;
        break;
      case 3:
        iy = 1;
        break;
      default:
        break;
    }
    var ret = new Set();
    for (var i = 0; i < range; ++i) {
      var tmp = this.getWordPosition(x + ix * i, y + iy * i);
      for (var j = 0; j < tmp.length; ++j) {
        if (tmp[j].length > 1)
          ret.add(tmp[j]);
      }
    }
    return ret;
  }

  placeTiles(x, y, letters, direction) {
    var init = [x, y];
    var ix = 0;
    var iy = 0;

    switch (direction) {
      case 0:
        ix = -1;
        break;
      case 1:
        iy = -1;
        break;
      case 2:
        ix = 1;
        break;
      case 3:
        iy = 1;
        break;
      default:
        break;
    }
    for (var i = 0; i < letters.length; ++i) {
      while (typeof this._squares[y][x].type === "string") {
        x += ix;
        y += iy;
      }
      this._squares[y][x].type = letters[i].letter;
      this._squares[y][x].value = letters[i].value;
      x += ix;
      y += iy;
    }
    return this.getWords(init[0], init[1], Math.abs(x - init[0]) + Math.abs(y - init[1]), direction);
  }

  toString() {
    return this._squares;
  }
}
