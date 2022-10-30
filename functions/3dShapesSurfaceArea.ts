function cuboidSurfaceArea(
  length: number,
  breadth: number,
  height: number,
  unit: String
) {
  if (!length || !breadth || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = 2 * (length * breadth + breadth * height + length * height);
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function cubeSurfaceArea(edge: number, unit: String) {
  if (!edge || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = 6 * edge * edge;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function coneSurfaceArea(radius: number, height: number, unit: String) {
  if (!radius || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area =
      3.142 * radius * (radius + Math.sqrt(height * height + radius * radius));
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function cylinderSurfaceArea(radius: number, height: number, unit: String) {
  if (!radius || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = 2 * 3.142 * radius * height + 2 * 3.142 * radius * radius;
    return `${area.toLocaleString()} ${unit.toLowerCase()}²`;
  }
}

function sphereSurfaceArea(radius: number, unit: String) {
  if (!radius || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let area = 4 * 3.142 * radius * radius;
  }
}

export {
  cuboidSurfaceArea,
  cubeSurfaceArea,
  coneSurfaceArea,
  cylinderSurfaceArea,
  sphereSurfaceArea,
};
