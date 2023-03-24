// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" ");

  let wordsLength = arr.map((word) => word.length);

  wordsLength.sort(function (a, b) {
    return a - b;
  });

  return wordsLength[0];
}

console.log(findShort("at the end of the life"));
