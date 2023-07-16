// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  var table = [];
  for (var i = 1; i <= size; i++) {
    var row = [];
    for (var j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

console.log(multiplicationTable(5));
