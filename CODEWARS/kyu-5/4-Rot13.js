// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = (message) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const messageArray = message.split("");
  let newArray = [];

  for (let i = 0; i < messageArray.length; i++) {
    let character = messageArray[i].toLowerCase();
    let indexOfLetterInAlphabet = alphabet.indexOf(character);
    if (indexOfLetterInAlphabet !== -1) {
      let newIndexOfLetter = (indexOfLetterInAlphabet + 13) % alphabet.length;
      let newCharacter = alphabet[newIndexOfLetter];
      // Maintain the original case
      newArray.push(
        messageArray[i] === character
          ? newCharacter
          : newCharacter.toUpperCase()
      );
    } else {
      newArray.push(messageArray[i]); // Keep the original character if it's not in the alphabet
    }
  }

  return newArray.join("");
};
