function repeat(string, times) {

  var repeatingString = '';

  if (times < 0 || isNaN(times)) {
    return undefined;
  }

  for (var i = 1; i<=times; i++){
    repeatingString += string;
  }

  return repeatingString;
}




console.log(repeat('abc', 1));    // "abc"
console.log(repeat('abc', 2));    // "abcabc"
console.log(repeat('abc', -1));   // undefined
console.log(repeat('abc', 0));    // ""
console.log(repeat('abc', 'a'));  // undefined