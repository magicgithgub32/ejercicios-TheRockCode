// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
  let long = [];
  let high = [];
  for (let i = 0; i < integer; i++) {
    long.push("+");
  }
  let longString = long.join("");
  for (let i = 0; i < integer; i++) {
    high.push(longString);
  }
  return high.join("\n");
}

console.log(generateShape(8));
