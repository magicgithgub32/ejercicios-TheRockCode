// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (array == null || array.length <= 1) {
    return 0;
  }

  const sortedArray = array.slice().sort(function (a, b) {
    return a - b;
  });

  const sum = sortedArray.slice(1, -1).reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum;
}

// MY SOLUTION (NOT PASSING THE TESTS)

// function sumArray(array) {
//   if (array.length > 1) {
//     const arraySortedAscending = array.sort(function (a, b) {
//       return a - b;
//     });

//     const highestDigit = arraySortedAscending.pop();

//     const smallestDigit = arraySortedAscending.shift();

//     let result = 0;

//     for (let i = 0; i < arraySortedAscending.length; i++) {
//       result += arraySortedAscending[i];
//     }

//     return result;
//   } else return 0;
// }

// console.log(sumArray([-6, 20, -1, 10, -12]));
