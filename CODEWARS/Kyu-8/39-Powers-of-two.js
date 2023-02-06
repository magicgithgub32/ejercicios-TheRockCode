// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// const powersOfTwo = (n) => {
//   let arr = [];
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//     arr[i] = Math.pow(n, i);
//   }
//   return arr;
// };

// function powersOfTwo(n){
//     let powers = []
//     for (i=0;i <=n;i++){
//       let answer = 2**i
//       powers.push(answer)
//     }
//     return powers
//   }

function powersOfTwo(n) {
  let powArr = [];
  if (n === 0) powArr = [];

  for (let i = 0; i <= n; i++) powArr.push(Math.pow(2, i));

  return powArr;
}

console.log(powersOfTwo(4));
