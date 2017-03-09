  var multiple1 = 3;
  var multiple2 = 5;
  var number = 30;

  function displayMultiples(multiple1, multiple2, number) {
    for (var i = 1; i <= number; i++) {
      if (i % (multiple1 * multiple2) === 0) {
        console.log(i + '!');
      } else if (i % multiple1 === 0 || i % multiple2 === 0) {
        console.log(i);
      }
    }
  }
  displayMultiples(multiple1, multiple2, number);
