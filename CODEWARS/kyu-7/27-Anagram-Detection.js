// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = (test, original) => {
  let counter = 0;

  const arrOriginal = original.toLowerCase().split("");

  const arrTest = test.toLowerCase().split("");

  for (let i = 0; i < arrTest.length; i++) {
    arrOriginal.includes(arrTest[i]) ? counter++ : null;
  }

  if (counter === arrTest.length) {
    return true;
  } else return false;
};

console.log(isAnagram("toffee", "foefet"));
