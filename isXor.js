function isXor(arg1, arg2) {
  if (arg1 && !arg2) {
    return true;
  } else if (!arg1 && arg2) {
    return true;
  }

  return false;
}

isXor(false, true); // true
console.log(isXor(false, true));

isXor(true, false); // true
console.log(isXor(true, false));

isXor(false, false); // false
console.log(isXor(false, false));

isXor(true, true); // false
console.log(isXor(true, true));


isXor(false, 3); // true
console.log(isXor(false, 3));

isXor('a', undefined); // true
console.log(isXor('a', undefined));

isXor(null, ''); // false
console.log(isXor(null, ''));

isXor('2', 23);
console.log(isXor('2', 23)); // false
