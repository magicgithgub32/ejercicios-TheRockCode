// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  const nameArr = str.split(" ");

  const revNameArr = nameArr.reverse();

  const result = revNameArr.join(" ");

  return result;
}

console.log(nameShuffler("John Wayne"));
