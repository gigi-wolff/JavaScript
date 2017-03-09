var mult1 = 3;
var mult2 = 5;

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % (mult1 * mult2) === 0) {
      console.log('FizzBuzz')
    } else if (i % mult1 === 0) {
      console.log('Fizz');
    } else if (i % mult2 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
