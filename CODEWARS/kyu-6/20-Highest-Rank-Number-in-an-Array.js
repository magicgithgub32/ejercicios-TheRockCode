// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  let frequencyMap = {};
  let maxFrequency = 0;
  let result = 0;

  arr.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    if (
      frequencyMap[num] > maxFrequency ||
      (frequencyMap[num] === maxFrequency && num > result)
    ) {
      maxFrequency = frequencyMap[num];
      result = num;
    }
  });

  return result;
}

console.log(highestRank([0, 1, 4, 1, 5, 6, 6, 6, 5, 1, 1, 1, 6, 6]));
