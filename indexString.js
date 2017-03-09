function compareString(subString, inputString, start, end) {
  var index = -1;

  for (var m = 0; m < end; m++) {
    console.log('Comparing: ' + subString[m] + ' to ' + inputString[m + start]);
    if (subString[m] === inputString[m + start]) {
      if (index === -1) { //save index
        index = start;
      }
    } else {
      index = -1;
      break;
    }
  }

  return index;
}

function indexOf(inputString, subString) {
  var index = -1;
  var stringLoc = 0;

  while (stringLoc < inputString.length && (stringLoc + subString.length) <= inputString.length) {
    if (inputString[stringLoc] === subString[0]) {
      index = compareString(subString, inputString, stringLoc, subString.length);
      if (index > -1) { // return starting index of first match
        break;
      }
    }
    stringLoc++;
  }

  return index;
}

function lastIndexOf(inputString, subString) {
  var index = -1;
  var lastIndex = -1;
  var stringLoc = 0;

  while (stringLoc < inputString.length && (stringLoc + subString.length) <= inputString.length) {
    if (inputString[stringLoc] === subString[0]) {
      index = compareString(subString, inputString, stringLoc, subString.length);
      if (index > -1) { // return starting index of first match
        lastIndex = index;
      }
    }
    stringLoc++;
  }

  return lastIndex;
}


console.log(indexOf('Some strings', 's')); // 5
console.log(indexOf('Blue Whale', 'Whale')); // 5
console.log(indexOf('Blue Whale', 'Blute')); // -1
console.log(indexOf('Blue Whale', 'leB')); // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

