// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(true);

    if (arr[i] === "flick") {
      let newArr = result.slice(arr[i], arr.length);
      result = result.slice(0, arr[i]);

      for (let i = 0; i < newArr.length; i++) {
        result.push(!result[i]);
      }
    }
  }

  return result;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
