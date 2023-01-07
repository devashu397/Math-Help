function rectanglePerimeter(length: number, breadth: number, unit: String) {
  if (!length || !breadth || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let perimeter = 2 * (length + breadth);
    return `${perimeter.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function squarePerimeter(side: number, unit: String) {
  if (!side || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let perimeter = side * 4;
    return `${perimeter.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function trianglePerimeter(
  side1: number,
  side2: number,
  side3: number,
  unit: String
) {
  if (!side1 || !side2 || !side3 || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let perimeter = side1 + side2 + side3;
    return `${perimeter.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function trapeziumPerimeter(
  base1: number,
  base2: number,
  side1: number,
  side2: number,
  unit: String
) {
  if (!base1 || !base2 || !side1 || !side2 || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let perimeter = base1 + base2 + side1 + side2;
    return `${perimeter.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function parallelogramPerimeter(base: number, side: number, unit: String) {
  if (!base || !side || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let perimeter = 2 * (base + side);
    return `${perimeter.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function rhombusPerimeter(side: number, unit: String) {
  if (!side || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let perimeter = side * 4;
    return `${perimeter.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function circleCircumference(radius: number, unit: String) {
  if (!radius || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let perimeter = 2 * 3.14 * radius;
    return `${perimeter.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

export {
  rectanglePerimeter,
  squarePerimeter,
  trianglePerimeter,
  trapeziumPerimeter,
  parallelogramPerimeter,
  rhombusPerimeter,
  circleCircumference,
};
