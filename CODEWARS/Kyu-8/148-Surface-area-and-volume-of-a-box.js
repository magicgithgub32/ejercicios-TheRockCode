// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  const area = 2 * (width * height + height * depth + depth * width);
  const volume = width * height * depth;
  return [area, volume];
}

console.log(getSize(4, 2, 5));
