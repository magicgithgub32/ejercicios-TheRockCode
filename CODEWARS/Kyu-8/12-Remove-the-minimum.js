// Given an array of integers, remove the smallest value. Do not mutate the 
// original array/list. If there are multiple elements with the same value, 
// remove the one with a lower index. If you get an empty array/list, return 
// an empty array/list.

// Don't change the order of the elements that are left.

// function removeSmallest(numbers) {
//     return [];
//   }

//My solution (it didn't pass the test)
function removeSmallest(numbers) {
    let newString = numbers.toString()
    console.log(newString)
    let newArr = Array.from(newString);
    console.log(newArr);
    let copyArr = newArr.slice();
    console.log(copyArr)
     const orderNumbersAscending = (a, b) => a - b;
    copyArr.sort(orderNumbersAscending);
    console.log(copyArr);
    copyArr.shift();
    console.log(copyArr);
    return copyArr;
  }

  console.log(removeSmallest(114325981));

//Solution

function removeSmallest(numbers) {
    if(!numbers)return [];
    var min=Math.min.apply(null,numbers);
    numbers.splice(numbers.indexOf(min),1);
    return numbers;
  }