// Maximum Length Difference
// 51215581% of 3,2646,241 of 25,536g964
// JavaScript
// TRAINNEXT KATA
// Details
// Solutions
// Forks (15)
// Discourse (456)
// Collect|
// DESCRIPTION:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
  let a1Lengths = [];
  let a2Lengths = [];

  if (a1.length === 0 || a2.length === 0) return -1;

  for (let i = 0; i < a1.length; i++) {
    let strSpl = a1[i].split("");
    a1Lengths.push(strSpl.length);
  }

  for (let i = 0; i < a2.length; i++) {
    let strSpl2 = a2[i].split("");
    a2Lengths.push(strSpl2.length);
  }

  a1Lengths.sort(function (a, b) {
    return a - b;
  });
  a2Lengths.sort(function (a, b) {
    return a - b;
  });

  const firstSolution = a1Lengths[a1Lengths.length - 1] - a2Lengths[0];
  const secondSolution = a2Lengths[a2Lengths.length - 1] - a1Lengths[0];

  return firstSolution > secondSolution ? firstSolution : secondSolution;
}

// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1;
//   let l1 = a1.map((str) => str.length);
//   let l2 = a2.map((str) => str.length);
//   return Math.max(
//     Math.max(...l1) - Math.min(...l2),
//     Math.max(...l2) - Math.min(...l1)
//   );
// }

console.log(
  mxdiflg(
    ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa"],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
