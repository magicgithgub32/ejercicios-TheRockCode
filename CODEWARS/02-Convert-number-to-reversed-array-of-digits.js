// Given a random non-negative number, 
// you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
  
// }


function digitize(num) {
    let newArr = num.toString().split('').reverse().map(Number);
    return newArr;
}

  console.log(digitize(12345))

