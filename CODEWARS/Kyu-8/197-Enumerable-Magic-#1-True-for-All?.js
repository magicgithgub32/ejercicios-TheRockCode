// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

const all = (arr, fun) => {
  if (arr.length === 0) {
    return true; // Typically, an empty array should return true for "all" conditions since there are no elements to disprove the condition.
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!fun(arr[i])) {
        return false; // If any element does not satisfy the condition, return false immediately.
      }
    }
    return true; // Only return true if all elements pass the condition.
  }
};

const less_than_9 = (value) => {
  return value < 9; // Determines if a single value is less than 9.
};

console.log(all([1, 2, 3, 4, 5], less_than_9)); // Expected to return true.
console.log(all([1, 2, 3, 4, 9], less_than_9)); // Expected to return false since there's a value equal to 9.
