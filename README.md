# Math Help

math-help is a NPM package which helps in basic and advanced Math calculations.

# How to install this package?

```sh
npm i math-help
```

# Changes Made

- Added coordinate geometery functions

# Examples

.add(number1, number2) function

```js
const math = require("math-help");

console.log(math.add(12, 12)); //returns the value 24
```

.subtract(number1, number2) function

```js
const math = require("math-help");

console.log(math.subtract(10, 4)); //returns the value 6
```

.multiply(number1, number2) function

```js
const math = require("math-help");

console.log(math.multiply(12, 3)); //returns the value 36
```

.divide(number1, number2) function

```js
const math = require("math-help");

console.log(math.divide(45, 9)); //returns the value 5
```

.remainder(number1, number2) function

```js
const math = require("math-help");

console.log(math.remainder(45, 9)); //returns the value 0
```

.exponent(base, power) function

```js
const math = require("math-help");

console.log(math.exponent(2, 3)); //returns the value 8
```

.rectangleArea(length, breadth, unit) function

```js
const math = require("math-help");

console.log(math.rectangleArea(12, 4, cm)); //returns the value 48 cm²
```

.squareArea(side, unit) function

```js
const math = require("math-help");

console.log(math.squareArea(12, cm)); //returns the value 144 cm²
```

.triangleArea(base, height, unit) function

```js
const math = require("math-help");

console.log(math.triangleArea(12, 40, cm)); //returns the value 240 cm²
```

.trapeziumArea(base1, base2, height, unit) function

```js
const math = require("math-help");

console.log(math.trapeziumArea(22, 10, 4, cm)); //returns the value 64 cm²
```

.parallelogramArea(base, height, unit) function

```js
const math = require("math-help");

console.log(math.parallelogramArea(12, 5, cm)); //returns the value 60 cm²
```

.rhombusArea(diagonal1, diagonal2, unit) function

```js
const math = require("math-help");

console.log(math.rhombusArea(12, 14, cm)); //returns the value 84 cm²
```

.cuboidSurfaceArea(length, breadth, height, unit) function

```js
const math = require("math-help");

console.log(math.cuboidSurfaceArea(12, 8, 5, cm)); //returns the value 340 cm²
```

.cubeSurfaceArea(edge, unit) function

```js
const math = require("math-help");

console.log(math.cubeSurfaceArea(12, cm)); //returns the value 864 cm²
```

.coneSurfaceArea(radius, height, unit) function

```js
const math = require("math-help");

console.log(math.coneSurfaceArea(4, 16, cm)); //returns the value 257.51538 cm²
```

.cylinderSurfaceArea(radius, height, unit) function

```js
const math = require("math-help");

console.log(math.cylinderSurfaceArea(4, 10, cm)); //returns the value 351.85838 cm²
```

.sphereSurfaceArea(radius, unit) function

```js
const math = require("math-help");

console.log(math.spehereSurfaceArea(7, cm)); //returns the value 615.75216 cm²
```

.sectionPoint(xcord1, ycord1, xcord2, ycord2, ratio1, ratio2) function

```js
const math = require("math-help");

console.log(math.sectionPoint(4, -5, 6, 3, 2, 5)); //returns X = 4.571 and Y = -2.714
```

.midPoint(xcord1, xcord2, ycord1, ycord2) function

```js
const math = require("math-help");

console.log(math.midPoint(4, -2, -6, 4)); //returns X = 1 and Y = -1
```

.reflectInXAxis(xcord, ycord) function

```js
const math = require("math-help");

console.log(math.reflectInXAxis(12, 7)); //returns X = 12 and Y = -7
```

.reflectInYAxis(xcord, ycord) function

```js
const math = require("math-help");

console.log(math.reflectInYAxis(-12, 7)); //returns X = 12 and Y = 7
```

.reflectInOrigin(xcord, ycord) function

```js
const math = require("math-help");

console.log(math.reflectInOrigin(12, 7)); //returns X = -12 and Y = -7
```

# Want to contribute this project?

Donate us on Patreon - https://patreon.com/ashutoshswamy
