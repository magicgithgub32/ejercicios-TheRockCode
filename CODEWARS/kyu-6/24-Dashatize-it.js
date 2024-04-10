// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

const dashatize = (num) => {
  let string = num.toString();
  let firstArray = string.split("");

  if (firstArray[0] === "-") {
    firstArray.shift();
  }

  const dashArray = firstArray.map((value) =>
    value % 2 !== 0 ? value + `-` : value
  );

  if (dashArray[dashArray.length - 1] === "-") {
    dashArray.pop();
  }

  let dashString = dashArray.join("");
  return dashString;
};

console.log(dashatize(274));
console.log(dashatize(-28369));
