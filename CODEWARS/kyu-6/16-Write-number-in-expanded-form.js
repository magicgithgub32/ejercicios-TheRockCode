// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  let numStr = String(num);
  let length = numStr.length;
  let expanded = [];

  for (let i = 0; i < length; i++) {
    let digit = numStr.charAt(i);
    if (digit !== "0") {
      let zeros = "0".repeat(length - i - 1);
      expanded.push(digit + zeros);
    }
  }

  return expanded.join(" + ");
}

console.log(expandedForm(70304));

// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");
