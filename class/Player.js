export default class Player {
  constructor(name) {
    this.name = name;
    this._score = 0;
    this.game = null;
    this.hand = [];
  }

  del() {
    if (this.game !== null) {
      this.game.delPlayer(this);
    }
  }

  toString() {
    return {
      name: this.name,
      score: this._score,
      game: this.game.id,
      hand: this.hand
    };
  }

  setHand(hand) {
    this.hand = hand;
  }

  play() {

  }

  joinRoom(game) {
    this.game = game;
  }

  getScore() {
    return this._score;
  }
}
