// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

const upArray = (arr) => {
  // Check if the input array is valid
  if (!arr.length || arr.some((num) => num < 0 || num > 9)) {
    return null;
  }

  // Work backwards from the least significant digit, incrementing as necessary
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i] += 1; // If the digit is less than 9, simply increment and return
      return arr;
    } else {
      arr[i] = 0; // If the digit is 9, reset to 0 and continue to the next digit
    }
  }

  // If the loop completes, it means all digits were 9 and have been reset to 0
  // In this case, unshift a 1 to the front of the array to handle the carry
  arr.unshift(1);
  return arr;
};

console.log(upArray([0, -10]));
