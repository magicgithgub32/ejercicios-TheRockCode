// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let arrRes = [];

  let firstArr = s1.split("");
  let secArr = s2.split("");

  for (digit of firstArr) {
    if (arrRes.includes(digit)) {
      arrRes;
    } else {
      arrRes.push(digit);
    }
  }
  arrRes;

  for (digit of secArr) {
    if (arrRes.includes(digit)) {
      arrRes;
    } else {
      arrRes.push(digit);
    }
  }

  return arrRes.sort().join("");
}

console.log(longest("acbbbbccc", "accccfffffgaaaah"));
