// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

function gimme(triplet) {
  const sortedTriplet = triplet.slice().sort(function (a, b) {
    return a - b;
  });

  const middleDigit = sortedTriplet[1];

  return triplet.indexOf(middleDigit);
}

console.log(gimme([5, 10, 14]));
