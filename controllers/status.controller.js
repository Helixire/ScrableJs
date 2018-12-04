import playerManager from "../class/PlayerManager";
import gameManager from "../class/GameManager";

class StatusController {
  constructor() {}

  get(req, res) {
    res.send(req.player.game.toString());
  }

  player(req, res) {
    res.send(req.player.toString());
  }
}

const statusController = new StatusController();

export default statusController;
