// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  const orderNumbersAscending = (a, b) => a - b;
  const orderNumbersDescending = (a, b) => b - a;

  const sortedAscending = array.slice().sort(orderNumbersAscending);
  const sortedDescending = array.slice().sort(orderNumbersDescending);

  if (JSON.stringify(array) === JSON.stringify(sortedAscending)) {
    return "yes, ascending";
  } else if (JSON.stringify(array) === JSON.stringify(sortedDescending)) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow([1, 3, 5, 7]));
