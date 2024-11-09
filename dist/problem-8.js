"use strict";
const validateKeys = (obj, keys) => {
    return keys.every((el) => el in obj);
};
