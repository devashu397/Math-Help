"use strict";
exports.__esModule = true;
exports.mileToKilometer = exports.kilometerToMile = exports.meterToKilometer = exports.kilometerToMeter = exports.radianToDegree = exports.degreeToRadian = exports.reflectInOrigin = exports.reflectInYAxis = exports.reflectInXAxis = exports.slope = exports.distance = exports.centroid = exports.midPoint = exports.sectionPoint = exports.sphereVolume = exports.cylinderVolume = exports.coneVolume = exports.cubeVolume = exports.cuboidVolume = exports.sphereSurfaceArea = exports.cylinderSurfaceArea = exports.coneSurfaceArea = exports.cubeSurfaceArea = exports.cuboidSurfaceArea = exports.circleArea = exports.rhombusArea = exports.parallelogramArea = exports.trapeziumArea = exports.triangleArea = exports.squareArea = exports.rectangleArea = exports.circleCircumference = exports.rhombusPerimeter = exports.parallelogramPerimeter = exports.trapeziumPerimeter = exports.trianglePerimeter = exports.squarePerimeter = exports.rectanglePerimeter = exports.exponent = exports.remainder = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
var arithmetic_1 = require("./functions/arithmetic");
exports.add = arithmetic_1.add;
exports.subtract = arithmetic_1.subtract;
exports.multiply = arithmetic_1.multiply;
exports.divide = arithmetic_1.divide;
exports.remainder = arithmetic_1.remainder;
exports.exponent = arithmetic_1.exponent;
var _2dShapesPerimeter_1 = require("./functions/2dShapesPerimeter");
exports.rectanglePerimeter = _2dShapesPerimeter_1.rectanglePerimeter;
exports.squarePerimeter = _2dShapesPerimeter_1.squarePerimeter;
exports.trianglePerimeter = _2dShapesPerimeter_1.trianglePerimeter;
exports.trapeziumPerimeter = _2dShapesPerimeter_1.trapeziumPerimeter;
exports.parallelogramPerimeter = _2dShapesPerimeter_1.parallelogramPerimeter;
exports.rhombusPerimeter = _2dShapesPerimeter_1.rhombusPerimeter;
exports.circleCircumference = _2dShapesPerimeter_1.circleCircumference;
var _2dShapesArea_1 = require("./functions/2dShapesArea");
exports.rectangleArea = _2dShapesArea_1.rectangleArea;
exports.squareArea = _2dShapesArea_1.squareArea;
exports.triangleArea = _2dShapesArea_1.triangleArea;
exports.trapeziumArea = _2dShapesArea_1.trapeziumArea;
exports.parallelogramArea = _2dShapesArea_1.parallelogramArea;
exports.rhombusArea = _2dShapesArea_1.rhombusArea;
exports.circleArea = _2dShapesArea_1.circleArea;
var _3dShapesSurfaceArea_1 = require("./functions/3dShapesSurfaceArea");
exports.cuboidSurfaceArea = _3dShapesSurfaceArea_1.cuboidSurfaceArea;
exports.cubeSurfaceArea = _3dShapesSurfaceArea_1.cubeSurfaceArea;
exports.coneSurfaceArea = _3dShapesSurfaceArea_1.coneSurfaceArea;
exports.cylinderSurfaceArea = _3dShapesSurfaceArea_1.cylinderSurfaceArea;
exports.sphereSurfaceArea = _3dShapesSurfaceArea_1.sphereSurfaceArea;
var _3dShapesVolume_1 = require("./functions/3dShapesVolume");
exports.cuboidVolume = _3dShapesVolume_1.cuboidVolume;
exports.cubeVolume = _3dShapesVolume_1.cubeVolume;
exports.coneVolume = _3dShapesVolume_1.coneVolume;
exports.cylinderVolume = _3dShapesVolume_1.cylinderVolume;
exports.sphereVolume = _3dShapesVolume_1.sphereVolume;
var coordinateGeometry_1 = require("./functions/coordinateGeometry");
exports.sectionPoint = coordinateGeometry_1.sectionPoint;
exports.midPoint = coordinateGeometry_1.midPoint;
exports.centroid = coordinateGeometry_1.centroid;
exports.distance = coordinateGeometry_1.distance;
exports.slope = coordinateGeometry_1.slope;
exports.reflectInXAxis = coordinateGeometry_1.reflectInXAxis;
exports.reflectInYAxis = coordinateGeometry_1.reflectInYAxis;
exports.reflectInOrigin = coordinateGeometry_1.reflectInOrigin;
var conversion_1 = require("./functions/conversion");
exports.degreeToRadian = conversion_1.degreeToRadian;
exports.radianToDegree = conversion_1.radianToDegree;
exports.kilometerToMeter = conversion_1.kilometerToMeter;
exports.meterToKilometer = conversion_1.meterToKilometer;
exports.kilometerToMile = conversion_1.kilometerToMile;
exports.mileToKilometer = conversion_1.mileToKilometer;
