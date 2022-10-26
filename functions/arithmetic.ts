function add(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    return number1 + number2;
  }
}

function subtract(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    return number1 - number2;
  }
}

function multiply(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    return number1 * number2;
  }
}

function divide(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    return number1 / number2;
  }
}

function remainder(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    return number1 % number2;
  }
}

function exponent(base: number, power: number) {
  if (!base || !power) {
    return new TypeError("Please enter the required parameters.");
  } else {
    return base ** power;
  }
}

export { add, subtract, multiply, divide, remainder, exponent };
