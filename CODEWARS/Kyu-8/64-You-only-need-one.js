// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  let result = a.includes(x);

  return result;
}

console.log(check(["what", "a", "great", "kata"], "kat"));
console.log(check(["t", "e", "s", "t"], "e"));
