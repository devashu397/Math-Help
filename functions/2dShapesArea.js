"use strict";
exports.__esModule = true;
exports.circleArea = exports.rhombusArea = exports.parallelogramArea = exports.trapeziumArea = exports.triangleArea = exports.squareArea = exports.rectangleArea = void 0;
function rectangleArea(length, breadth, unit) {
    if (!length || !breadth || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = length * breadth;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.rectangleArea = rectangleArea;
function squareArea(side, unit) {
    if (!side || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = length * length;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.squareArea = squareArea;
function triangleArea(base, height, unit) {
    if (!base || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = (1 / 2) * base * height;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.triangleArea = triangleArea;
function trapeziumArea(base1, base2, height, unit) {
    if (!base1 || !base2 || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = ((base1 + base2) / 2) * height;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.trapeziumArea = trapeziumArea;
function parallelogramArea(base, height, unit) {
    if (!base || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = base * height;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.parallelogramArea = parallelogramArea;
function rhombusArea(diagonal1, diagonal2, unit) {
    if (!diagonal1 || !diagonal2 || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = (1 / 2) * diagonal1 * diagonal2;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.rhombusArea = rhombusArea;
function circleArea(radius, unit) {
    if (!radius || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = 3.142 * radius * radius;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.circleArea = circleArea;
