function toLowerCase(string) {

  var asciiNumeric;
  var lowerCaseString = '';

  for (var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);

    if (asciiNumeric >= 65 && asciiNumeric <= 90) { // A-Z
      asciiNumeric += 32;
      lowerCaseString += String.fromCharCode(asciiNumeric);
    } else {
      lowerCaseString += string[i];
    }
  }

  return lowerCaseString;
}

console.log(toLowerCase('ALPHABET')); // "alphabet"
console.log(toLowerCase('123')); // "123"
console.log(toLowerCase('abcDEF')); // "abcdef"
