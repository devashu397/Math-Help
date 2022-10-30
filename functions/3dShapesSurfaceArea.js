"use strict";
exports.__esModule = true;
exports.sphereSurfaceArea = exports.cylinderSurfaceArea = exports.coneSurfaceArea = exports.cubeSurfaceArea = exports.cuboidSurfaceArea = void 0;
function cuboidSurfaceArea(length, breadth, height, unit) {
    if (!length || !breadth || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = 2 * (length * breadth + breadth * height + length * height);
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.cuboidSurfaceArea = cuboidSurfaceArea;
function cubeSurfaceArea(edge, unit) {
    if (!edge || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = 6 * edge * edge;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.cubeSurfaceArea = cubeSurfaceArea;
function coneSurfaceArea(radius, height, unit) {
    if (!radius || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = 3.142 * radius * (radius + Math.sqrt(height * height + radius * radius));
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.coneSurfaceArea = coneSurfaceArea;
function cylinderSurfaceArea(radius, height, unit) {
    if (!radius || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = 2 * 3.142 * radius * height + 2 * 3.142 * radius * radius;
        return "".concat(area.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B2");
    }
}
exports.cylinderSurfaceArea = cylinderSurfaceArea;
function sphereSurfaceArea(radius, unit) {
    if (!radius || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var area = 4 * 3.142 * radius * radius;
    }
}
exports.sphereSurfaceArea = sphereSurfaceArea;
