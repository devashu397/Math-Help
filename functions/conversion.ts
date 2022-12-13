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

function kilometerToMeter(kilometer: number) {
  if (!kilometer) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let meter = kilometer * 1000;
    return `${kilometer.toLocaleString()}km = ${meter.toLocaleString()}m`;
  }
}

function meterToKilometer(meter: number) {
  if (!meter) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let kilometer = meter / 1000;
    return `${meter.toLocaleString()}m = ${kilometer.toLocaleString()}km`;
  }
}

function kilometerToMile(kilometer: number) {
  if (!kilometer) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let mile = kilometer / 1.609;
    return `${kilometer.toLocaleString()}km = ${mile.toLocaleString()}mile`;
  }
}

function mileToKilometer(mile: number) {
  if (!mile) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let kilometer = mile * 1.609;
    return `${mile.toLocaleString()}mile = ${kilometer.toLocaleString()}km`;
  }
}

export {
  degreeToRadian,
  radianToDegree,
  kilometerToMeter,
  meterToKilometer,
  kilometerToMile,
  mileToKilometer,
};
