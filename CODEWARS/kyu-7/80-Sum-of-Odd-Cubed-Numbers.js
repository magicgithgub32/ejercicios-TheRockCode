// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

const cubeOdd = (arr) => {
  let sum = 0;
  for (const item of arr) {
    if (typeof item !== "number" || item !== Math.floor(item)) {
      return undefined;
    }
    const cubed = Math.pow(item, 3);
    if (cubed % 2 !== 0) {
      sum += cubed;
    }
  }
  return sum;
};

console.log(cubeOdd([1, 3, 4, 5, 6, 7]));
