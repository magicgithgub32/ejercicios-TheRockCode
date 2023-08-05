// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  let sortedArr = arr.sort(function (a, b) {
    return b - a;
  });

  let newArr = [];
  let sum = 0;

  if (sortedArr.length <= 1) {
    return 0;
  } else if (sortedArr.length === 2) {
    return sortedArr[0] - sortedArr[1];
  } else {
    for (let i = 0; i < sortedArr.length - 1; i++) {
      newArr.push(sortedArr[i] - sortedArr[i + 1]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}

console.log(sumOfDifferences([1, 8, 9]));
