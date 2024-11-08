"use strict";
const countWordOccurrences = (sentence, word) => {
    const wordsArr = sentence === null || sentence === void 0 ? void 0 : sentence.toLowerCase().split(" ");
    const result = wordsArr.filter((el) => el === word);
    return result.length;
};
