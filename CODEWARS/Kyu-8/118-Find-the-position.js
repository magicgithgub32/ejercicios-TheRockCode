// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let alphabetArr = alphabet.split("");

  for (let i = 0; i < alphabetArr.length; i++) {
    if (alphabetArr[i] === letter.toLowerCase()) {
      return alphabetArr.indexOf(letter) + 1;
    }
  }
}

console.log(position("c"));
