function substr(string, start, length) {

  var subString = '';

  if (start < 0) {
    start += string.length;
  }

  var end = Math.min(start + length, string.length);

  for (var i = start; i < end; i++) {
    subString += string[i];
  }

  return subString;
}

var string = 'hello world';

console.log(substr(string, 2, 4)); // "llo "
console.log(substr(string, -3, 2)); // "rl"
console.log(substr(string, 8, 20)); // "rld"
console.log(substr(string, 0, -20)); // ""
console.log(substr(string, 0, 0)); // ""
