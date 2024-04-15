// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  if (text.length === 0) {
    return [];
  }

  let arrayText = text.split("");
  let result = [];
  let processed = new Set();

  for (let i = 0; i < arrayText.length; i++) {
    let char = arrayText[i];
    if (!processed.has(char)) {
      let count = arrayText.filter((c) => c === char).length;
      result.push([char, count]);
      processed.add(char);
    }
  }

  return result;
};

console.log(orderedCount("abracadabra"));
