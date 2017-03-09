function startsWith(string, searchString) {


  if (searchString==='') {
    return true;
  } else if (str===searchString) {
    return false;
  }

  for (var i = 0; i< searchString.length; i++) {
    if (string[i] === searchString[i] && i === searchString.length-1) {
       return true;
    } else if (string[i] != searchString[i]) {
      return false;
    }
  }
}

var str = 'We put comprehension and mastery above all else';
var longerString = 'We put comprehension and mastery above all else!';

console.log(startsWith(str, 'We'));       // true
console.log(startsWith(str, 'We put'));   // true
console.log(startsWith(str, ''));         // true
console.log(startsWith(str, 'put'));      // false
console.log(startsWith(str, longerString));      // false