// DESCRIPTION:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
  let string = Math.abs(number).toString();
  let array = string.split("");

  let sum = 0;
  let sumOfPrevNeg = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      let posdigit = array[i] * -1;

      sumOfPrevNeg += posdigit;
    }
    sum += Number(array[i]);
  }

  return sum + sumOfPrevNeg;
}

console.log(sumDigits(-32));
