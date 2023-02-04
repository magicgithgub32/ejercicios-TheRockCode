// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

const powersOfTwo = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    console.log(i);
    arr[i] = Math.pow(n, i);
  }
  return arr;
};

// function powersOfTwo(n){
//     let powers = []
//     for (i=0;i <=n;i++){
//       let answer = 2**i
//       powers.push(answer)
//     }
//     return powers
//   }

console.log(powersOfTwo(4));
