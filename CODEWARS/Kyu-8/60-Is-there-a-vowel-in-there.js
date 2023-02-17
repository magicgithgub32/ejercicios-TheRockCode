// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  return a.map((code) => {
    let char = String.fromCharCode(code);
    if (["a", "e", "i", "o", "u"].includes(char)) {
      return char;
    }
    return code;
  });
}

console.log(isVow([101, 24, 433, 117]));
