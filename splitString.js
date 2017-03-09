function splitString(string, delimiter) {

  var word = '';
  var i = 0;

  if (typeof delimiter === 'undefined') { // missing argument
    console.log('ERROR: No delimiter');
    return;
  }

  while (i < string.length) {
    if (delimiter === '') { // delimiter empty string
      console.log(string[i]);
    } else if (string[i] === delimiter) { //print word that precedes delimiter
      console.log(word);
      word = '';
    } else {
      word += string[i]; //create word that precedes delimiter
    }
    i++;
  }

  if (word) { // print out last word
    console.log(word);
  }

}


splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello;', ';');
