class Dictionary {
  constructor() {
    var fs = require('fs');
    this.dict = JSON.parse(fs.readFileSync('data/words_dictionary.json', 'utf8'));
  }

  verifyWord(word) {
    var reg = RegExp('^' + word.toLowerCase().replace(' ', '.') + '$');

    for (var key in this.dict) {
      if (this.dict.hasOwnProperty(key) && reg.test(key)) {
        return true;
      }
    }
    return false;
  }
}

const dictionary = new Dictionary();

export default dictionary;
