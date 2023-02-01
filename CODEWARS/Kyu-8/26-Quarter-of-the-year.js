// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an
// integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second
// quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if (month / 4 > 2.25) {
    return 4;
  } else if (month / 4 > 1.5 && month / 4 <= 2.25) {
    return 3;
  } else if (month / 4 > 0.75 && month / 4 <= 1.5) {
    return 2;
  } else return 1;
};

console.log(quarterOf(9));
