import playerManager from "../class/PlayerManager";
import gameManager from "../class/GameManager";

class GameController {
  constructor() {}

  get(req, res) {
    res.sendFile('game.html', {
      root: 'view'
    });
  }

  placeTiles(board, x, y, letters, direction) {
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
      while (typeof board._squares[y][x].type === "string") {
        x += ix;
        y += iy;
      }
      board._squares[y][x].type = letters[i].letter;
      board._squares[y][x].value = letters[i].value;
      x += ix;
      y += iy;
    }
  }

  endturn(game) {
    game._playerTurnId += 1;
    game._playerTurnId %= game._players.length;
  }

  play(req, res) {
    var p = req.player;
    var g = p.game;

    this.placeTiles(g._board, parseInt(req.body.x), parseInt(req.body.y), req.body.letters.map(i => p.hand[i]), parseInt(req.body.direction));
    req.body.letters.sort((a, b) => {
      return b - a;
    });
    for (var i = 0; i < req.body.letters.length; ++i) {
      p.hand.splice(req.body.letters[i], 1);
    }
    p.hand = p.hand.concat(g._bag.giveTiles(req.body.letters.length));
    this.endturn(g);
  }

  changeAll(req, res) {
    req.player.hand = req.player.game._bag.changeTiles(req.player.hand);
    this.endturn(req.player.game);
  }

  changeOne(req, res) {
    req.player.hand.splice(req.body.index, 0, req.player.game._bag.changeTiles(req.player.hand.splice(req.body.index, 1))[0]);
    this.endturn(req.player.game);
  }

  pass(req, res) {
    this.endturn(req.player.game);
  }
}

const gameController = new GameController();

export default gameController;
