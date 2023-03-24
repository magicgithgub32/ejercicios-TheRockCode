// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

const fakeBin = (x) => {
  const arr = x.split("");
  const newArr = [];

  arr.map((digit) => {
    if (digit < 5) {
      digit = 0;
    } else {
      digit = 1;
    }
    newArr.push(digit);
  });

  const newString = newArr.join("");

  return newString;
};

console.log(fakeBin("1345646"));
