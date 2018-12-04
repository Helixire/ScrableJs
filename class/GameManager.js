import Game from "./Game";

// TODO delete game when no more player in it

class GameManager {
  constructor() {
    this.list = {};
  }

  getNewId() {
    var ret;
    do {
      ret = Math.floor(Math.random() * 999999);
    }
    while (this.list[ret] !== undefined);
    return ret;
  }

  createNewGame(vsIa) {
    var ret = new Game(this.getNewId());
    this.list[ret.id] = ret;
    return ret;
  }

  addPlayer(player, vsIa) {
    var game = null;
    if (vsIa) {
      game = this.createNewGame(vsIa);
    } else {
      for (var key in this.list) {
        if (this.list.hasOwnProperty(key)) {
          var cur = this.list[key];
          if (cur._players.length < 2) {
            game = cur;
            break;
          }
        }
      }
      if (game === null) {
        game = this.createNewGame(false);
      }
    }
    game.addPlayer(player);
    return game;
  }
}

const gameManager = new GameManager();

export default gameManager;
