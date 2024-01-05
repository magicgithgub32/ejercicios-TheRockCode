// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  if (!string) {
    return {};
  }

  let counts = {};
  let arr = string.split("");

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

console.log(count("hello"));
