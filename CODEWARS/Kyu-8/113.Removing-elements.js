// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6]));
