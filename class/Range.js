import Position from "./Position"

export default class Range {
    constructor(posStart, posEnd) {
        if (posStart instanceof Position)
            this.posStart = posStart;
        else throw "[Range] -> TypeError: posStart must be an instance of Position";
        if (posEnd instanceof Position)
            this.posEnd = posEnd;
        else throw "[Range] -> TypeError: posEnd must be an instance of Position";
    }
}