"use strict";
exports.__esModule = true;
exports.reflectInOrigin = exports.reflectInYAxis = exports.reflectInXAxis = exports.distance = exports.midPoint = exports.sectionPoint = void 0;
function sectionPoint(xcord1, ycord1, xcord2, ycord2, ratio1, ratio2) {
    if (!xcord1 || !xcord2 || !ycord1 || !ycord2 || !ratio1 || !ratio2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var xstep = ratio1 * xcord2 + ratio2 * xcord1;
        var x = xstep / (ratio1 + ratio2);
        var ystep = ratio1 * ycord2 + ratio2 * ycord1;
        var y = ystep / (ratio1 + ratio2);
        return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
    }
}
exports.sectionPoint = sectionPoint;
function midPoint(xcord1, xcord2, ycord1, ycord2) {
    if (!xcord1 || !xcord2 || !ycord1 || !ycord2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var xstep = xcord1 + xcord2;
        var x = xstep / 2;
        var ystep = ycord1 + ycord2;
        var y = ystep / 2;
        return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
    }
}
exports.midPoint = midPoint;
function reflectInXAxis(xcord, ycord) {
    if (!xcord || !ycord) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        if (ycord === Math.abs(ycord)) {
            var x = xcord;
            var y = -ycord;
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
        else {
            var x = xcord;
            var y = Math.abs(ycord);
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
    }
}
exports.distance = distance;
function slope(xcord1, xcord2, ycord1, ycord2) {
    if (!xcord1 || !xcord2 || !ycord1 || !ycord2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var slopex = xcord2 - xcord1;
        var slopey = ycord2 - ycord1;
        var slope_1 = slopey / slopex;
        return "Slope = ".concat(slope_1.toLocaleString());
    }
}
exports.reflectInXAxis = reflectInXAxis;
function reflectInYAxis(xcord, ycord) {
    if (!xcord || !ycord) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        if (xcord === Math.abs(xcord)) {
            var x = -xcord;
            var y = ycord;
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
        else {
            var x = Math.abs(xcord);
            var y = ycord;
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
    }
}
exports.reflectInYAxis = reflectInYAxis;
function reflectInOrigin(xcord, ycord) {
    if (!xcord || !ycord) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        if (xcord === Math.abs(xcord) && ycord === Math.abs(ycord)) {
            var x = -xcord;
            var y = -ycord;
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
        else if (xcord === Math.abs(xcord) && ycord !== Math.abs(ycord)) {
            var x = -xcord;
            var y = Math.abs(ycord);
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
        else if (xcord !== Math.abs(xcord) || ycord === Math.abs(ycord)) {
            var x = Math.abs(xcord);
            var y = -ycord;
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
        else {
            var x = -xcord;
            var y = -ycord;
            return "X = ".concat(x.toLocaleString(), "\nY = ").concat(y.toLocaleString());
        }
    }
}
exports.reflectInOrigin = reflectInOrigin;
