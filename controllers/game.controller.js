import playerManager from "../class/PlayerManager";
import gameManager from "../class/GameManager";
import Board from '../class/Board.js';
import dictionary from "../class/Dictionary.js";

class GameController {
  constructor() {}

  get(req, res) {
    res.sendFile('game.html', {
      root: 'view'
    });
  }

  endturn(game) {
    game._playerTurnId += 1;
    game._playerTurnId %= game._players.length;
  }

  play(req, res) {
    var p = req.player;
    var g = p.game;
    var temporaryBoad = new Board(g._board);


    var words = temporaryBoad.placeTiles(parseInt(req.body.x), parseInt(req.body.y), req.body.letters.map(i => p.hand[i]), parseInt(req.body.direction));

    for (var word of words) {
      console.log(word);
      if (!dictionary.verifyWord(word)) {
        res.send({
          error: word + " is not a valid word"
        });
        return false;
      }
    }

    g._board = temporaryBoad;

    req.body.letters.sort((a, b) => {
      return b - a;
    });
    for (var i = 0; i < req.body.letters.length; ++i) {
      p.hand.splice(req.body.letters[i], 1);
    }
    p.hand = p.hand.concat(g._bag.giveTiles(req.body.letters.length));
    this.endturn(g);
    return true;
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
