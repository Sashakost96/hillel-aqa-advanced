/* Task
 Sum all the numbers of a given array (cq. list ), except the highest and the lowest element ( by value, not by index! ).
 The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
 Mind the input validation.

Example:
{ 6, 2, 1, 8, 10 } = 16
{ 1, 1, 11, 2, 3 } = 6
Input validation
If an empty value ( null, None, Nothing etc.) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. */

//const randomArray = [1, 11, 6, 2, 11, 8, 1, 10, 4];
const randomArray = [6, 2, 1, 8, 10];
//const randomArray = [];

function deleteHighestAndLovest(array) {
  let subarray = [...array];
  subarray.sort((a, b) => {
    return a - b;
  });

  subarray = subarray.slice(1, subarray.length - 1);

  return getSum(subarray);
}
function getSum(array) {
  const sum = array.reduce((accumulator, number) => accumulator + number, 0);

  return sum;
}

console.log(
  `Sum of array [${randomArray}] without min and max value = ${deleteHighestAndLovest(
    randomArray
  )}`
);
