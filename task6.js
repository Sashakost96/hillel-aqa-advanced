const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]; //8
const sortedNumbersList = [...numbersList].sort(
  (curentValue, nextValue) => curentValue - nextValue
);
console.log(numbersList);
console.log(sortedNumbersList);
