'use strict';

const range = (start, end) => {
    const rangedArray = [];
    for(let i = start; i <= end; i++) {
        rangedArray.push(i);
    }
    return rangedArray;
};

module.exports = { range };
