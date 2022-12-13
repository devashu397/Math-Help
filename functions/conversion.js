"use strict";
exports.__esModule = true;
exports.mileToKilometer = exports.kilometerToMile = exports.meterToKilometer = exports.kilometerToMeter = exports.radianToDegree = exports.degreeToRadian = void 0;
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
function kilometerToMeter(kilometer) {
    if (!kilometer) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var meter = kilometer * 1000;
        return "".concat(kilometer.toLocaleString(), "km = ").concat(meter.toLocaleString(), "m");
    }
}
exports.kilometerToMeter = kilometerToMeter;
function meterToKilometer(meter) {
    if (!meter) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var kilometer = meter / 1000;
        return "".concat(meter.toLocaleString(), "m = ").concat(kilometer.toLocaleString(), "km");
    }
}
exports.meterToKilometer = meterToKilometer;
function kilometerToMile(kilometer) {
    if (!kilometer) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var mile = kilometer / 1.609;
        return "".concat(kilometer.toLocaleString(), "km = ").concat(mile.toLocaleString(), "mile");
    }
}
exports.kilometerToMile = kilometerToMile;
function mileToKilometer(mile) {
    if (!mile) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var kilometer = mile * 1.609;
        return "".concat(mile.toLocaleString(), "mile = ").concat(kilometer.toLocaleString(), "km");
    }
}
exports.mileToKilometer = mileToKilometer;
