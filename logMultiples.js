  var number = 17;

  function logMultiple(number) {
    for (var i = 100; i >= number; i--) {
      if (i % number === 0 && i % 2 === 1) {
        console.log(i);
      }
    }
  }
  logMultiple(number);
