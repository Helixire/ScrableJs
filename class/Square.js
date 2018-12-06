export default class Square {
  /* type:
    0 = Empty
    1 = Double letter
    2 = Tripple letter
    3 = Double word
    4 = Triple Word
    5 = Center
    else letter placed
  */

  constructor(type = 0) {
    this.type = type;
    this.value = 0;
  }
}
