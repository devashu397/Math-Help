"use strict";
exports.__esModule = true;
exports.circleCircumference = exports.rhombusPerimeter = exports.parallelogramPerimeter = exports.trapeziumPerimeter = exports.trianglePerimeter = exports.squarePerimeter = exports.rectanglePerimeter = void 0;
function rectanglePerimeter(length, breadth, unit) {
    if (!length || !breadth || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var perimeter = 2 * (length + breadth);
        return "".concat(perimeter.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.rectanglePerimeter = rectanglePerimeter;
function squarePerimeter(side, unit) {
    if (!side || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var perimeter = side * 4;
        return "".concat(perimeter.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.squarePerimeter = squarePerimeter;
function trianglePerimeter(side1, side2, side3, unit) {
    if (!side1 || !side2 || !side3 || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var perimeter = side1 + side2 + side3;
        return "".concat(perimeter.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.trianglePerimeter = trianglePerimeter;
function trapeziumPerimeter(base1, base2, side1, side2, unit) {
    if (!base1 || !base2 || !side1 || !side2 || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var perimeter = base1 + base2 + side1 + side2;
        return "".concat(perimeter.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.trapeziumPerimeter = trapeziumPerimeter;
function parallelogramPerimeter(base, side, unit) {
    if (!base || !side || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var perimeter = 2 * (base + side);
        return "".concat(perimeter.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.parallelogramPerimeter = parallelogramPerimeter;
function rhombusPerimeter(side, unit) {
    if (!side || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var perimeter = side * 4;
        return "".concat(perimeter.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.rhombusPerimeter = rhombusPerimeter;
function circleCircumference(radius, unit) {
    if (!radius || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var perimeter = 2 * 3.14 * radius;
        return "".concat(perimeter.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.circleCircumference = circleCircumference;
