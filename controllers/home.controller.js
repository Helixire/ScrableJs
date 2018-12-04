import playerManager from "../class/PlayerManager";
import gameManager from "../class/GameManager";

class HomeController {
  constructor() {}

  get(req, res) {
    res.sendFile('index.html', {
      root: 'view'
    });
  }

  post(req, res) {
    if (req.session.id !== undefined) {
      playerManager.delPlayer(req.session.id);
    }
    req.session.regenerate(function() {
      var player = playerManager.newPlayer(req.session.id, req.body.name);
      gameManager.addPlayer(player, req.body.gameType === 'pve' ? true : false);
      res.redirect('/game');
    });
  }
}

const homeController = new HomeController();

export default homeController;
