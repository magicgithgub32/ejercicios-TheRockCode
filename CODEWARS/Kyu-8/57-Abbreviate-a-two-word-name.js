// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

let name = "John Smith";
const abbrevName = (name) => {
  let splitName = name.split(" ");

  let firstInitial = splitName[0][0].toUpperCase();

  let secondInitial = splitName[1][0].toUpperCase();

  return firstInitial + "." + secondInitial;
};

console.log(abbrevName("John Smith"));
