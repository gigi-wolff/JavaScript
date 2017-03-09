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

function checkGoldbach(number) {
  console.log('Checking: ' + number);
  if (number < 4) {
    return;
  } //don't process anything less than 3

  for (var i = number / 2; i > 1; i--) {
    if (isPrime(i) && isPrime(number - i)) {
      console.log(i + ',' + (number - i));
    }
  }
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
