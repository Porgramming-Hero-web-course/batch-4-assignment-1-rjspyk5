"use strict";
const calculateShapeArea = (details) => {
    if ("radius" in details) {
        return parseFloat((Math.PI * ((details === null || details === void 0 ? void 0 : details.radius) * (details === null || details === void 0 ? void 0 : details.radius))).toFixed(2));
    }
    if ("width" in details && "height" in details) {
        return parseFloat(((details === null || details === void 0 ? void 0 : details.height) * (details === null || details === void 0 ? void 0 : details.width)).toFixed(2));
    }
    return 0;
};
