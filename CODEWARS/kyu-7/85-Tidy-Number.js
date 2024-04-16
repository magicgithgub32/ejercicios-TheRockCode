// A Tidy number is a number whose digits are in non-decreasing order.

function tidyNumber(n) {
  let str = n.toString();
  let arr = str.split("");

  const isTidy = arr.reduce((acc, currentValue, currentIndex, array) => {
    // On first iteration, simply return the currentValue to initialize acc properly
    if (currentIndex === 0) return currentValue;
    // Compare currentValue with the last digit in acc
    // Return acc if tidy so far, otherwise false
    return acc !== false && currentValue >= array[currentIndex - 1]
      ? currentValue
      : false;
  }, "");

  // If isTidy is not false then it's tidy
  return isTidy !== false;
}

console.log(tidyNumber(2807));
