/*Task:  
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata. */

const isEven = (number) =>
  typeof number != "number" ? false : number % 2 === 0;

console.log(`Even(28) -> ` + isEven(28));
console.log(`Not Even(5) -> ` + isEven(5));
console.log(`Neg Even(-6) ->` + isEven(6));
console.log(`Neg not Even(-7) -> ` + isEven(-7));
console.log(`Float (56.4) -> ` + isEven(56.4));
console.log(`Neg Float(-6.4) -> ` + isEven(-6.4));
