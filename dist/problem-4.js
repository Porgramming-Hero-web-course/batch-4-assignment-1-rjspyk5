"use strict";
const calculateShapeArea = (details) => {
    if ((details === null || details === void 0 ? void 0 : details.shape) === "circle") {
        return parseFloat((Math.PI * ((details === null || details === void 0 ? void 0 : details.radius) * (details === null || details === void 0 ? void 0 : details.radius))).toFixed(2));
    }
    if ((details === null || details === void 0 ? void 0 : details.shape) === "rectangle") {
        return parseFloat(((details === null || details === void 0 ? void 0 : details.height) * (details === null || details === void 0 ? void 0 : details.width)).toFixed(2));
    }
    return 0;
};
console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
}));
