// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

let sumArr = 0;

function findAverage(array) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      sumArr += array[i];
    }
    return sumArr / array.length;
  } else return 0;
}

console.log(findAverage([4, 5, 6]));
