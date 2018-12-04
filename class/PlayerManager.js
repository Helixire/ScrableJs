import Player from "./Player";

class PlayerManager {
  constructor() {
    this.list = {};
  }

  getPlayer(sid) {
    return this.list[sid];
  }

  newPlayer(sid, name) {
    if (this.list[sid] !== undefined) {
      return false;
    }

    var player = new Player(name);
    this.list[sid] = player;
    return player;
  }

  delPlayer(sid) {
    var player = this.list[sid];
    if (player !== undefined) {
      player.del();
    } else {
      this.list[sid] = undefined;
    }
  }
}

const playerManager = new PlayerManager();

export default playerManager;
