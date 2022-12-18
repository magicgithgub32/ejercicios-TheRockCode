// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     return 0;
//   }
function getCount(str) {
    let count = 0;
    let newArr = str.split('');
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o' || newArr[i] === 'u') {
            count += 1;
        } else {
            count;
        }
  }     return count;
}

  console.log(getCount('aeioifd'));