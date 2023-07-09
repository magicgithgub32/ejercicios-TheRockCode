// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  const arr = str.split("");

  const newArr = arr.map((char) => char.repeat(2));
  return newArr.join("");
}

console.log(doubleChar("Hello world"));
