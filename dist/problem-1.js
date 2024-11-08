"use strict";
const sumArray = (nums) => {
    return nums.reduce((total, current) => total + current, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));
