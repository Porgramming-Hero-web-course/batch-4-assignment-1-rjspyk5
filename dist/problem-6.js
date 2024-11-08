"use strict";
const updateProfile = (profile, updateValue) => {
    return Object.assign(Object.assign({}, profile), updateValue);
};
console.log(updateProfile({ name: "Alice", age: 25, email: "alice@example.com" }, { age: 59 }));
