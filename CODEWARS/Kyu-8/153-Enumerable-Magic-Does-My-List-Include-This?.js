// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  if (arr.includes(item)) {
    return true;
  } else return false;
}

console.log(include([1, 2, 3, 4], 1));
