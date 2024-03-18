// Given a Arr, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase Arr with no spaces.

// Good luck!

const capitalize = (s) => {
  let newArrOne = [];
  let newArrTwo = [];

  for (let i = 0; i < s.length; i++) {
    i % 2 == 0 ? newArrOne.push(s[i].toUpperCase()) : newArrOne.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    i % 2 !== 0 ? newArrTwo.push(s[i].toUpperCase()) : newArrTwo.push(s[i]);
  }

  const newStringOne = newArrOne.join("");
  const newStringTwo = newArrTwo.join("");

  return [newStringOne, newStringTwo];
};

console.log(capitalize("codewars"));
