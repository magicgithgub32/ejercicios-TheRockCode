// Given a random non-negative number, 
// you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
  
// }

let n = 12345;

function digitize(n) {
    
    let newString = String(n).split("").reverse().map(Number);

    return newString;
  }

  console.log(newString)

