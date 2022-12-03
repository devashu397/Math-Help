"use strict";
exports.__esModule = true;
exports.exponent = exports.remainder = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
function add(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var sum = number1 + number2;
        return sum.toLocaleString();
    }
}
exports.add = add;
function subtract(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var difference = number1 - number2;
        return difference.toLocaleString();
    }
}
exports.subtract = subtract;
function multiply(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var product = number1 * number2;
        return product.toLocaleString();
    }
}
exports.multiply = multiply;
function divide(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var quotient = number1 / number2;
        return quotient.toLocaleString();
    }
}
exports.divide = divide;
function remainder(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var remainder_1 = number1 % number2;
        return remainder_1.toLocaleString();
    }
}
exports.remainder = remainder;
function exponent(base, power) {
    if (!base || !power) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        var exponent_1 = Math.pow(base, power);
        return exponent_1.toLocaleString();
    }
}
exports.exponent = exponent;
