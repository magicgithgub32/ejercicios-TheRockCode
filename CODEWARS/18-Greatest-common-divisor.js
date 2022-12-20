// Find the greatest common divisor of two positive integers.
//  The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest 
// common divisor will always be an integer that is also greater or equal to 1.

// function mygcd(x,y){
//     //your code here
//   }

///////////////////////////MY SOLUTION////////////////

function mygcd(x,y){


let sameDiv = [];

    for  (let i = 1; i <= x && i <= y; i++) {
        if (x % i === 0 && y % i === 0) {
            sameDiv.push(i);
        };
        console.log(sameDiv)
    }
    const orderNumbersDescending = (a, b) => b - a;
    const sortedSameDiv = sameDiv.sort(orderNumbersDescending);
    const maxDiv = sortedSameDiv.slice(0, 1)
    console.log(maxDiv)
    return maxDiv
};

console.log(mygcd(8,9))


///////////////

function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }
