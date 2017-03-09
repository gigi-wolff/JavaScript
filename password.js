var password = "apple"

function validPassword() {

  for (var i = 0; i < 3; i++) {
    var response = prompt('What is the password?')
    if (response === password) {
      return true;
    }
  }
  return false;
}

if (validPassword()) {
  console.log('You have successfully logged in.')
} else {
  console.log('You have been denied access.')
}
