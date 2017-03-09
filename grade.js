function getGrade() {
  var total = 0;

  for (var i = 1; i <= 3; i++) {
    var grade = parseInt(prompt('Grade ' + i))
    total += grade;
  }

  var score = total / 3;

  if (score >= 90) {
    console.log('Based on the average of your 3 scores your letter grade is "A"')
  } else if (score >= 70 && score <= 90) {
    console.log('Based on the average of your 3 scores your letter grade is "B"')
  } else if (score >= 50 && score <= 70) {
    console.log('Based on the average of your 3 scores your letter grade is "C"')
  } else if (score <= 50) {
    console.log('Based on the average of your 3 scores your letter grade is "F"')
  }
}

getGrade();