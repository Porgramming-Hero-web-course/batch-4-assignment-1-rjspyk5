"use strict";
const removeDuplicates = (nums) => {
    const newArr = [];
    nums.forEach((el) => {
        console.log(el);
        !(newArr.includes(el)) && newArr.push(el);
    });
    return newArr;
};
