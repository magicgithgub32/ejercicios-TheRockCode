// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

const findLongest = (array) => {
  if (array.length === 0) return null;
  let longest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};
