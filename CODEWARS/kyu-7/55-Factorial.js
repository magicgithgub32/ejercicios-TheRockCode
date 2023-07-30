// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }
}

console.log(factorial(6));
