import chalk from 'chalk';

let userName1 = 'Megan Fox';
let userName2 = 'Isaac Newton';

console.log('Hello, ' + chalk.magenta(userName1) + ' and ' + chalk.blue(userName2));
console.log(`Hello, ${chalk.magenta(userName1)} and ${chalk.blue(userName2)}`);