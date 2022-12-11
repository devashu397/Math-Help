"use strict";
exports.__esModule = true;
exports.radianToDegree = exports.degreeToRadian = void 0;
function degreeToRadian(degree) {
    if (!degree) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var radian = degree * (3.142 / 180);
        return "".concat(degree.toLocaleString(), "\u00B0 = ").concat(radian.toLocaleString(), " rad");
    }
}
exports.degreeToRadian = degreeToRadian;
function radianToDegree(radian) {
    if (!radian) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var degree = radian * (180 / 3.142);
        return "".concat(radian.toLocaleString(), " rad = ").concat(degree.toLocaleString(), "\u00B0");
    }
}
exports.radianToDegree = radianToDegree;
