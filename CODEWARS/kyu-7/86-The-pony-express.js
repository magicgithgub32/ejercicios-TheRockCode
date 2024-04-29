// A History Lesson
// The Pony Express was a mail service operating in the US in 1859-60.

// Pony Express
// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

// How it worked
// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

// Good Luck.
// DM.

function riders(stations) {
  let number;
  let sum = 0;

  for (let i = 0; i < stations.length; i++) {
    sum += stations[i];
  }
  number = sum / 100;
  return Math.ceil(number);
}

console.log(riders([39, 41, 6, 18, 48, 47, 18, 37, 10, 43, 27, 13, 49, 19]));
