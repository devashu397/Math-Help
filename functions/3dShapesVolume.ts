function cuboidVolume(
  length: number,
  breadth: number,
  height: number,
  unit: String
) {
  if (!length || !breadth || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let volume = length * breadth * height;

    return `${volume.toLocaleString()} ${unit.toLowerCase()}³`;
  }
}

function cubeVolume(edge: number, unit: String) {
  if (!edge || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let volume = edge * edge * edge;
    return `${volume.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function coneVolume(radius: number, height: number, unit: String) {
  if (!radius || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let volume = 3.142 * radius * radius * (height / 3);
    return `${volume.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function cylinderVolume(radius: number, height: number, unit: String) {
  if (!radius || !height || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let volume = 3.142 * radius * radius * height;
    return `${volume.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

function sphereVolume(radius: number, unit: String) {
  if (!radius || !unit) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let volume = (4 / 3) * 3.142 * radius * radius * radius;
    return `${volume.toLocaleString()} ${unit.toLowerCase()}`;
  }
}

export { cuboidVolume, cubeVolume, coneVolume, cylinderVolume, sphereVolume };
