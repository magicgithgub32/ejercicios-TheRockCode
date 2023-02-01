// We want to know the index of the vowels in a given word. 
// Note: 'y' is considered a vowel here.

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// function vowelIndices(word){
  
// }

//My SOLUTION (IT DIDN'T PASS THE TEST):

function vowelIndices(word) {
    let newArr = word.split('');
    console.log(newArr);
  let indexVowels = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o' || newArr[i] === 'u' || newArr[i] === 'y' || newArr[i] === 'A' || newArr[i] === 'E' || newArr[i] === 'I' || newArr[i] === 'O' || newArr[i] === 'U' || newArr[i] === 'Y') {
        indexVowels += (i + 1);
    }
    console.log(indexVowels)
  }
  let separatedIndexofVowels = Array.from(indexVowels)
  console.log(separatedIndexofVowels)
  return separatedIndexofVowels;
};

console.log(vowelIndices('superWOMAN'));
console.log(vowelIndices('shhhhhhh'));

/////SOLUTION

// let answer = [];
// let vowels = [aeiouyAEIOUY];
// word.split('').forEach((letter, idx) => {
//     if(vowels.includes(letter)) {
//         answer.push(idx + 1)
//     }
// })
// return answer;
