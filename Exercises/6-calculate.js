'use strict';

const square = x => x ** 2;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
    const calculatedArray = [];
    for(let i = 0; i <= 9; i++) {
        calculatedArray.push(average(square(i), cube(i)));
    }
    return calculatedArray;
};

module.exports = { square, cube, average, calculate };
