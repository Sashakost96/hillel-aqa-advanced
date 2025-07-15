import chalk from 'chalk';

let myString = "hello";
let myNumber = 28;
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log(`This is my string: ${chalk.bgBlue(myString)}`);
console.log(`This is my number: ${chalk.bgBlue(myNumber)}`);
console.log(`This is my boolean: ${chalk.bgBlue(myBoolean)}`);
console.log(`This is my null: ${chalk.bgBlue(myNull)}`);
console.log(`This is my undefined: ${chalk.bgBlue(myUndefined)}`);