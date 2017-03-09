var number = 6;

function isPrime(number) {
  // test 0, 1, 2 and check if number is perfect square
  if (number === 0 || number === 1 || Math.sqrt(number) % 1 === 0) {
    return false;
  } else if (number === 2) {
    return true;
  }

  for (var i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

}

console.log(number + ' is prime: ' + isPrime(number));
