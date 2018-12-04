import playerManager from "../class/PlayerManager";
import gameManager from "../class/GameManager";

class GameController {
  constructor() {}

  get(req, res) {
    res.sendFile('game.html', {
      root: 'view'
    });
  }
}

const gameController = new GameController();

export default gameController;
