import chalk from 'chalk';

let radius = 12;
let length = 20;
let width = 10;
let height = 25;

const areaOfCircle = chalk.green((Math.PI * (Math.pow(radius , 2))).toFixed(2));
const areaOfRectangle = chalk.green((length * width).toFixed(2));
const cylinderVolume = chalk.green((Math.PI * Math.pow(radius , 2) * height).toFixed(2));

const coloredRadius = chalk.yellow(radius);
const coloredLength = chalk.yellow(length);
const coloredWidth = chalk.yellow(width);
const coloredHeight = chalk.yellow(height);

console.log(`The Area of a circle with radius ${coloredRadius} cm = ${areaOfCircle} cm \n`);
console.log(`The Area of a rectangle with length ${coloredLength} cm and width ${coloredWidth} cm = ${areaOfRectangle} cm \n`);
console.log(`The Area of a cylinder with radius ${coloredRadius} cm and height ${coloredHeight} cm = ${cylinderVolume} cm \n`);

