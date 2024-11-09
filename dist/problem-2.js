"use strict";
const removeDuplicates = (nums) => {
    const newArr = [];
    nums.forEach((el) => {
        !(newArr.includes(el)) && newArr.push(el);
    });
    return newArr;
};
