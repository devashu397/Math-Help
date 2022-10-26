"use strict";
exports.__esModule = true;
exports.exponent = exports.remainder = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
function add(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        return number1 + number2;
    }
}
exports.add = add;
function subtract(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        return number1 - number2;
    }
}
exports.subtract = subtract;
function multiply(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        return number1 * number2;
    }
}
exports.multiply = multiply;
function divide(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        return number1 / number2;
    }
}
exports.divide = divide;
function remainder(number1, number2) {
    if (!number1 || !number2) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        return number1 % number2;
    }
}
exports.remainder = remainder;
function exponent(base, power) {
    if (!base || !power) {
        return new TypeError("Please enter the required parameters.");
    }
    else {
        return Math.pow(base, power);
    }
}
exports.exponent = exponent;
