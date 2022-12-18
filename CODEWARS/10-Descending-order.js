// Your task is to make a function that can take any non-negative integer as 
// an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//     //...
//   }

function descendingOrder(n){
    let newArr = n.toString().split('').map(Number)
    console.log(newArr)
    const orderNumbersDescending = (a, b) => b - a;
    newArr.sort(orderNumbersDescending);
    console.log(newArr)
    let clearedArr = newArr.join('');
    console.log(clearedArr)
    let orderedNumber = Number(clearedArr);
    console.log(orderedNumber)
    return orderedNumber;
  }

  console.log(descendingOrder(1123456789))