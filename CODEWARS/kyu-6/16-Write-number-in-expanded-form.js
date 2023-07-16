// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  var numStr = String(num);
  var length = numStr.length;
  var expanded = [];

  for (var i = 0; i < length; i++) {
    var digit = numStr.charAt(i);
    if (digit !== "0") {
      var zeros = "0".repeat(length - i - 1);
      expanded.push(digit + zeros);
    }
  }

  return expanded.join(" + ");
}
