function gcd(value1, value2) {
  var divisor = Math.min(value1, value2);
  var max = 0;

  for (var i = divisor; i > 0; i--) {
    if (value1 % i === 0 && value2 % i === 0) {
      return i;
    }
  }
}

console.log('gcd = ' + gcd(12, 4));
console.log('gcd = ' + gcd(15, 10));
console.log('gcd = ' + gcd(9, 2));
