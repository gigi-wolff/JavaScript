function trim(inputString){
  var start = 0;
  var end = inputString.length-1;
  var finalString = '';

  while (inputString[start] === ' ') { // start = loc of first non-space
    start++;
  }

  while (inputString[end] === ' ') { // end = loc of last non-space
    end--;
  }

  for (var i=start; i<=end; i++){ // copy string over
    finalString += inputString[i];
  }

  return finalString;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""