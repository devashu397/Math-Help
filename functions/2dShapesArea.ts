function rectangleArea(length: number, breadth: number, unit: String) {
  if (!length || !breadth || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = length * breadth;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function squareArea(side: number, unit: String) {
  if (!side || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = length * length;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function triangleArea(base: number, height: number, unit: String) {
  if (!base || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = (1 / 2) * base * height;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function trapeziumArea(
  base1: number,
  base2: number,
  height: number,
  unit: String
) {
  if (!base1 || !base2 || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = ((base1 + base2) / 2) * height;
    return `${area.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function parallelogramArea(base: number, height: number, unit: String) {
  if (!base || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = base * height;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function rhombusArea(diagonal1: number, diagonal2: number, unit: String) {
  if (!diagonal1 || !diagonal2 || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = (1 / 2) * diagonal1 * diagonal2;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function circleArea(radius: number, unit: String) {
  if (!radius || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = 3.142 * radius * radius;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

export {
  rectangleArea,
  squareArea,
  triangleArea,
  trapeziumArea,
  parallelogramArea,
  rhombusArea,
  circleArea,
};
