// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  let newArr = [];
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (!newArr.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

console.log(distinct([1, 2, 3, 2]));
