function substring(string, start, end) {
  var temp;
  var subString = '';

  // If end is omitted, the end variable inside the function isundefined. 
  // Return the substring starting at position start up through (and including) the end of the string.
  if (typeof end === 'undefined') {
    end = string.length;
  }

  //If either start or end is less than 0 or NaN, treat it as 0.
  if (end < 0 || isNaN(end)) {
    end = 0;
  }
  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  // If either start or end is greater than the length of the string, treat it as equal to the string length.
  start = Math.min(start, string.length);
  end = Math.min(end, string.length);

  // If the value of start is greater than end, swap the values of the two, then return the substring as described above.
  if (start > end) {
    temp = end;
    end = start;
    start = temp;
  }

  //If start is equal to end, return an empty string.
  if (start === end) {
    return subString;
  }

  // create substring
  for (var i = start; i < end; i++) {
    subString += string[i];
  }

  return subString;
}

var string = 'hello world';

console.log(substring(string, 2, 4)); // "ll"
console.log(substring(string, 4, 2)); // "ll"
console.log(substring(string, 0, -1)); // ""
console.log(substring(string, 2)); // "llo world"
console.log(substring(string, 'a')); // "hello world"
console.log(substring(string, 8, 20)); // "rld"
