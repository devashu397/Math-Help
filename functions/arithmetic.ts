function add(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let sum = number1 + number2;
    return sum.toLocaleString();
  }
}

function subtract(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let difference = number1 - number2;
    return difference.toLocaleString();
  }
}

function multiply(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let product = number1 * number2;
    return product.toLocaleString();
  }
}

function divide(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let quotient = number1 / number2;
    return quotient.toLocaleString();
  }
}

function remainder(number1: number, number2: number) {
  if (!number1 || !number2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let remainder = number1 % number2;
    return remainder.toLocaleString();
  }
}

function exponent(base: number, power: number) {
  if (!base || !power) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let exponent = base ** power;
    return exponent.toLocaleString();
  }
}

export { add, subtract, multiply, divide, remainder, exponent };
