import Player from "./Player";

export default class AI extends Player {
    constructor(nickName = '0') {
        super();
        this._nb;
    }

    thinkMove() {

    }

    getNb() { return this._nb; }
}
