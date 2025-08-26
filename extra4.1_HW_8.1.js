/* Task:
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return O. */

const array = [];

const getSum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(getSum);