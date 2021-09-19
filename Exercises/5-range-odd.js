'use strict';

const rangeOdd = (start, end) => {
  const rangedArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2) rangedArray.push(i);
  }
  return rangedArray;
};

module.exports = { rangeOdd };
