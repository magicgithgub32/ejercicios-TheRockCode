// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.

//MY SOLUTION (working on all my attemps, but not passing all test cases, apparently)

const dirReduc = (arr) => {
  let southCounter = 0;
  let northCounter = 0;
  let eastCounter = 0;
  let westCounter = 0;

  let directions = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH") {
      northCounter++;
    } else if (arr[i] === "SOUTH") {
      southCounter++;
    } else if (arr[i] === "EAST") {
      eastCounter++;
    } else if (arr[i] === "WEST") {
      westCounter++;
    }
  }

  if (southCounter > northCounter) {
    directions.push("SOUTH");
  }
  if (northCounter > southCounter) {
    directions.push("NORTH");
  }
  if (westCounter > eastCounter) {
    directions.push("WEST");
  }
  if (eastCounter > westCounter) {
    directions.push("EAST");
  } else if (
    southCounter !== 0 &&
    southCounter === northCounter &&
    southCounter === eastCounter &&
    southCounter === westCounter &&
    northCounter === eastCounter &&
    northCounter === westCounter &&
    eastCounter === westCounter
  )
    directions.push("NORTH", "SOUTH", "EAST", "WEST");

  return directions;
};

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

/// MOST VOTED CODE

// function dirReduc(plan) {
//     var opposite = {
//       NORTH: "SOUTH",
//       EAST: "WEST",
//       SOUTH: "NORTH",
//       WEST: "EAST",
//     };
//     return plan.reduce(function (dirs, dir) {
//       if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
//       else dirs.push(dir);
//       return dirs;
//     }, []);
//   }
