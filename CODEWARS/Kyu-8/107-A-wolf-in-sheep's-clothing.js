// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

function warnTheSheep(queue) {
  const reversedQueue = queue.reverse();
  let sentence = ""; // Declare the sentence variable outside the loop

  for (let i = 0; i < reversedQueue.length; i++) {
    if (reversedQueue[i] === "wolf" && reversedQueue[i] === reversedQueue[0]) {
      sentence = "Pls go away and stop eating my sheep";
    } else if (reversedQueue[i] === "wolf") {
      sentence = `Oi! Sheep number ${
        reversedQueue[i + 1]
      }! You are about to be eaten by a wolf!`;
    }
  }

  return sentence;
}

console.log(warnTheSheep[("sheep", "sheep", "sheep", "wolf", "sheep")]);
