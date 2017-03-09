function rot13(string) {
  var asciiNumeric;
  var offset = 0;
  var cryptString = '';

  for (var i = 0; i < string.length; i++) {
    capitalLetter = (string[i] >= 'A' && string[i] <= 'Z') 
    lowerLetter = (string[i] >= 'a' && string[i] <= 'a')
    
    if (lowerLetter || capitalLetter) { // alphabetic character
      asciiNumeric = string.charCodeAt(i); // convert letter to ascii
      offset = (asciiNumeric + 13); // rotate by 13 places
      if (capitalLetter && offset > 'Z'.charCodeAt(0)) { // after rotation letter wraps past 'Z'
        offset = 'A'.charCodeAt(0) + (offset % 'Z'.charCodeAt(0)) - 1; // adjust offset 
      } else if (lowerLetter && offset > 'z'.charCodeAt(0)) { // after rotation letter wraps past 'z'
        offset = 'a'.charCodeAt(0) + (offset % 'z'.charCodeAt(0)) - 1; // adjust offset
      }
      cryptString += String.fromCharCode(offset); // convert ascii back to letter
    } else { // non-alphabetic character
      cryptString += string[i]; // add to string as is
    }
  }

  return cryptString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
