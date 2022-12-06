function sectionPoint(
  xcord1: number,
  ycord1: number,
  xcord2: number,
  ycord2: number,
  ratio1: number,
  ratio2: number
) {
  if (!xcord1 || !xcord2 || !ycord1 || !ycord2 || !ratio1 || !ratio2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let xstep = ratio1 * xcord2 + ratio2 * xcord1;
    let x = xstep / (ratio1 + ratio2);
    let ystep = ratio1 * ycord2 + ratio2 * ycord1;
    let y = ystep / (ratio1 + ratio2);

    return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
  }
}

function midPoint(
  xcord1: number,
  xcord2: number,
  ycord1: number,
  ycord2: number
) {
  if (!xcord1 || !xcord2 || !ycord1 || !ycord2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let xstep = xcord1 + xcord2;
    let x = xstep / 2;
    let ystep = ycord1 + ycord2;
    let y = ystep / 2;

    return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
  }
}

function distance(
  xcord1: number,
  xcord2: number,
  ycord1: number,
  ycord2: number
) {
  if (!xcord1 || !xcord2 || !ycord1 || !ycord2) {
    return new TypeError("Please enter the required parameters.");
  } else {
    let xstep = xcord2 - xcord1;
    let ystep = ycord2 - ycord1;
    let distance = Math.sqrt(xstep * xstep + ystep * ystep);

    return `${distance.toLocaleString()} units`;
  }
}

function reflectInXAxis(xcord: number, ycord: number) {
  if (!xcord || !ycord) {
    return new TypeError("Please enter the required parameters.");
  } else {
    if (ycord === Math.abs(ycord)) {
      let x = xcord;
      let y = -ycord;

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    } else {
      let x = xcord;
      let y = Math.abs(ycord);

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    }
  }
}

function reflectInYAxis(xcord: number, ycord: number) {
  if (!xcord || !ycord) {
    return new TypeError("Please enter the required parameters.");
  } else {
    if (xcord === Math.abs(xcord)) {
      let x = -xcord;
      let y = ycord;

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    } else {
      let x = Math.abs(xcord);
      let y = ycord;

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    }
  }
}

function reflectInOrigin(xcord: number, ycord: number) {
  if (!xcord || !ycord) {
    return new TypeError("Please enter the required parameters.");
  } else {
    if (xcord === Math.abs(xcord) && ycord === Math.abs(ycord)) {
      let x = -xcord;
      let y = -ycord;

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    } else if (xcord === Math.abs(xcord) && ycord !== Math.abs(ycord)) {
      let x = -xcord;
      let y = Math.abs(ycord);

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    } else if (xcord !== Math.abs(xcord) || ycord === Math.abs(ycord)) {
      let x = Math.abs(xcord);
      let y = -ycord;

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    } else {
      let x = -xcord;
      let y = -ycord;

      return `X = ${x.toLocaleString()}\nY = ${y.toLocaleString()}`;
    }
  }
}

export {
  sectionPoint,
  midPoint,
  distance,
  reflectInXAxis,
  reflectInYAxis,
  reflectInOrigin,
};
