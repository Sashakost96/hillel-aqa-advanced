import chalk from 'chalk';

let age = 15;
let isAdult = age >= 18;

console.log(`Is Person older than 18 y.o.? - ${chalk.green(isAdult)}. \nPerson is ${chalk.inverse(age)} y.o`);