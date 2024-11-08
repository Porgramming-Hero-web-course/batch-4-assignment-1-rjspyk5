"use strict";
const getProperty = (obj, property) => {
    return obj[property];
};
console.log(getProperty({ name: "Alice", age: 30 }, "name"));
