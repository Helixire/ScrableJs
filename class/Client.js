export default class Client {
  constructor(nickName) {
    this._nickName = nickName;
    this._currentRoomId = 0;
  }

  connect() {

  }

  joinRoom(roomId) {
    this._currentRoomId = roomId;
  }

  getNickName() {
    return this._nickName;
  }
}
