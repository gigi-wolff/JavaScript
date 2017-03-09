function pattern(value) {
  var numbers = '';

  for (var i = 1; i <= value; i++) {
    numbers += i.toString();
    console.log(numbers + '*'.repeat(value - i));
  }
}

pattern(7);
