// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    let str = s[i].toUpperCase();
    console.log(str);

    for (let j = 0; j < i; j++) {
      str += s[i];
      console.log(str);
    }
    result.push(str);
    console.log(result);
  }
  return result.join("-");
}

// function accum(s) {
//   return [...s]
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//     .join("-");
// }

console.log(accum("abcd"));
