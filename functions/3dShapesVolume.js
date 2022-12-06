"use strict";
exports.__esModule = true;
exports.sphereVolume = exports.cylinderVolume = exports.coneVolume = exports.cubeVolume = exports.cuboidVolume = void 0;
function cuboidVolume(length, breadth, height, unit) {
    if (!length || !breadth || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var volume = length * breadth * height;
        return "".concat(volume.toLocaleString(), " ").concat(unit.toLowerCase(), "\u00B3");
    }
}
exports.cuboidVolume = cuboidVolume;
function cubeVolume(edge, unit) {
    if (!edge || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var volume = edge * edge * edge;
        return "".concat(volume.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.cubeVolume = cubeVolume;
function coneVolume(radius, height, unit) {
    if (!radius || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var volume = 3.142 * radius * radius * (height / 3);
        return "".concat(volume.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.coneVolume = coneVolume;
function cylinderVolume(radius, height, unit) {
    if (!radius || !height || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var volume = 3.142 * radius * radius * height;
        return "".concat(volume.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.cylinderVolume = cylinderVolume;
function sphereVolume(radius, unit) {
    if (!radius || !unit) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var volume = (4 / 3) * 3.142 * radius * radius * radius;
        return "".concat(volume.toLocaleString(), " ").concat(unit.toLowerCase());
    }
}
exports.sphereVolume = sphereVolume;
