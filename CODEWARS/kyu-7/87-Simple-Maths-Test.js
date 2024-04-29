// Create a function which checks a number for three different properties.

// is the number prime?
// is the number even?
// is the number a multiple of 10?
// Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

// Examples
// numberProperty(7)  // ==> [true,  false, false]
// numberProperty(10) // ==> [false, true,  true]
// The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

// numberProperty(-7)  // ==> [false, false, false]
// numberProperty(-10) // ==> [false, true,  true]

const numberProperty = (num) => {
  let result = [];

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const isEven = (num) => {
    return num % 2 === 0;
  };

  const isMultipleOf10 = (num) => {
    return num % 10 === 0;
  };

  result.push(isPrime(num));
  result.push(isEven(num));
  result.push(isMultipleOf10(num));

  return result;
};

console.log(numberProperty(7));
