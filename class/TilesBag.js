import Tile from './Tile.js'

export default class TilesBag {
  constructor() {
    const nbTiles = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
    this._tiles = [];
    for (let i = 0; i < nbTiles.length; i++) {
      for (let j = 0; j < nbTiles[i]; j++) {
        this._tiles.push(new Tile(String.fromCharCode('A'.charCodeAt(0) + i)));
      }
    }
    this._tiles.push(new Tile(""));
    this._tiles.push(new Tile(""));
    this.shuffle();
  }

  shuffle() {
    var j, x, i;
    for (i = this._tiles.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this._tiles[i];
      this._tiles[i] = this._tiles[j];
      this._tiles[j] = x;
    }
  }

  giveTiles(nbTiles) {
    return this._tiles.splice(0, nbTiles);
  }

  changeTiles(tiles) {
    this._tiles = this._tiles.concat(tiles);
    this.shuffle();
    return this.giveTiles(tiles.length);
  }
}
