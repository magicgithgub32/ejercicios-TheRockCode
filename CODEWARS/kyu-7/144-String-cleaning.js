// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
  const arr = s.split("");
  const cleanedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== "0" &&
      arr[i] !== "1" &&
      arr[i] !== "2" &&
      arr[i] !== "3" &&
      arr[i] !== "4" &&
      arr[i] !== "5" &&
      arr[i] !== "6" &&
      arr[i] !== "7" &&
      arr[i] !== "8" &&
      arr[i] !== "9"
    ) {
      cleanedArr.push(arr[i]);
    }
  }

  return cleanedArr.join("");
}
