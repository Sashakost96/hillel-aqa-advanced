import chalk from 'chalk';

const error = chalk.bold.bgRed;
const warning = chalk.underline.yellow;
const correctness = chalk.inverse.green;

console. log(chalk.italic.blue('Hello world!\n'));
console.log(error('Error!\n'));
console.log(warning('Warning!\n'));
console.log(correctness('Hurray!\n'));