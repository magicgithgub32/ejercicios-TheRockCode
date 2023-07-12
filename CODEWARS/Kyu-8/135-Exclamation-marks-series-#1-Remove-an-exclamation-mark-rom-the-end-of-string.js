// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove(string) {
  const arr = string.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] === "!") {
      arr.pop(arr[arr.length - 1]);
    }
    return arr.join("");
  }
}

console.log(remove("Hi! Hi!"));
