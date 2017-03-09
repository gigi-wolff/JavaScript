  var number = 19;

  function odd(number) {
    return !!(number % 2 === 1);
  }

  function displayOddNumbers(number) {
    for (var i = 1; i <= number; i++) {
      if (odd(i)) {
        console.log(i);
      }
    }
  }

  displayOddNumbers(number);
