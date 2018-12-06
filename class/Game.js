import Board from './Board.js'
import TilesBag from './TilesBag.js'

export default class Game {
  constructor(id) {
    this.id = id;
    this._board = new Board();
    this._players = [];
    this._playerTurnId = 0;
    this._status = 0;
    this._bag = new TilesBag();
  }

  /* Status:
    0 Waiting
    1 Playing
  */

  toString() {
    return {
      id: this.id,
      board: this._board.toString(),
      players: this._players.map(a => a.name),
      playerTurnId: this._playerTurnId,
      status: this._status
    };
  }

  startGame() {
    this._status = 1;
    for (var i = 0; i < this._players.length; ++i) {
      this._players[i].setHand(this._bag.giveTiles(7));
    }
  }

  addPlayer(player) {
    this._players.push(player);
    player.joinRoom(this);
    if (this._players.length > 1) {
      this.startGame();
    }
  }

  delPlayer(player) {
    var index = this._players.indexOf(player);
    if (index !== -1) {
      this._players.splice(index, 1);
    }
  }
}
