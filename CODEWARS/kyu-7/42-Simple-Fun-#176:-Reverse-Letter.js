// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  const justLetters = [];

  const strArr = str.split("");
  const aplhabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < strArr.length; i++) {
    if (aplhabet.toLowerCase().includes(strArr[i].toLowerCase())) {
      justLetters.push(strArr[i]);
    }
  }

  return justLetters.reverse().join("");
}

console.log(reverseLetter("Hell4o"));
