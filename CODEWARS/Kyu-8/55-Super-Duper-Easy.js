// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  const answer = typeof x == "number" ? x * 50 + 6 : "Error";

  return answer;
}

console.log(problem(5));
console.log(problem("5"));
console.log(problem("apple"));
