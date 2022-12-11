function degreeToRadian(degree: number) {
  if (!degree) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let radian = degree * (3.142 / 180);
    return `${degree.toLocaleString()}° = ${radian.toLocaleString()} rad`;
  }
}

function radianToDegree(radian: number) {
  if (!radian) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let degree = radian * (180 / 3.142);
    return `${radian.toLocaleString()} rad = ${degree.toLocaleString()}°`;
  }
}

export { degreeToRadian, radianToDegree };
