// Write a function consonantCount, consonant_count or ConsonantCount that 
// takes a string of English-language text and returns the number of consonants 
// in the string.

// function consonantCount(str) {
//     // ...
//   }

//////////////MY SOLUTION/////////////////////

function consonantCount(str) {
    let countCons = 0;
    let newArr = str.toLowerCase().split('');
    console.log(newArr);

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'b' || newArr[i] === 'c' || newArr[i] === 'd' 
        || newArr[i] === 'f'|| newArr[i] === 'g'|| newArr[i] === 'h'
        || newArr[i] === 'j'|| newArr[i] === 'k'|| newArr[i] === 'l' 
        || newArr[i] === 'm'|| newArr[i] === 'n'|| newArr[i] === 'p'
        || newArr[i] === 'q'|| newArr[i] === 'l'|| newArr[i] === 'm' 
        || newArr[i] === 'n'|| newArr[i] === 'p'|| newArr[i] === 'q'
       || newArr[i] === 'r'|| newArr[i] === 's'|| newArr[i] === 't' 
       || newArr[i] === 'v'|| newArr[i] === 'w'|| newArr[i] === 'x'
       || newArr[i] === 'y'|| newArr[i] === 'z')  {
            countCons += 1;
         } 
         }
    return countCons;
  }

  console.log(consonantCount('012345_Cb'))

//   function countConsonants(text) {
//     let consonantCount = 0;
  
//     for (let i = 0; i < text.length; i++) {
//       let c = text[i];
  
//       if (/[bcdfghjklmnpqrstvwxyz]/i.test(c)) {
//         consonantCount++;
//       }
//     }
  
//     return consonantCount;
//   }
