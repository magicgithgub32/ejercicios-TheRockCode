// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1
// 2
//  +2
// 2
//  +2
// 2
//  =9.

function squareSum(numbers) {
  let result = 0;

  const powArr = numbers.map((number) => Math.pow(number, 2));

  for (let i = 0; i < powArr.length; i++) {
    result += powArr[i];
  }

  return result;
}

console.log(squareSum([0, 3, 4, 5]));
