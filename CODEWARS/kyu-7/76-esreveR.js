// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

const reverse = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(array[array.length - 1 - i]);
  }

  return newArr;
};

console.log(reverse(["B", "L", "U", "E"]));
