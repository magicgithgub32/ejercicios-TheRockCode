// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function switchItUp(number) {
  if (number === 0) {
    return "Zero";
  } else if (number === 1) {
    return "One";
  } else if (number === 2) {
    return "Two";
  } else if (number === 3) {
    return "Three";
  } else if (number === 4) {
    return "Four";
  } else if (number === 5) {
    return "Five";
  } else if (number === 6) {
    return "Six";
  } else if (number === 7) {
    return "Seven";
  } else if (number === 8) {
    return "Eight";
  } else if (number === 9) {
    return "Nine";
  } else if (number === 10) {
    return "Ten";
  }
}
///////////////

// function switchItUp(number){
//     switch(number) {
//       case 0: return "Zero";
//       case 1: return "One";
//       case 2: return "Two";
//       case 3: return "Three";
//       case 4: return "Four";
//       case 5: return "Five";
//       case 6: return "Six";
//       case 7: return "Seven";
//       case 8: return "Eight";
//       case 9: return "Nine";
//    }
//   }

console.log(switchItUp(7));
