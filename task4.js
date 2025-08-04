const person = {
  firstNmae: "Kurt",
  lastName: "Cobain",
  age: 27,
};
person.email = "test-email@examble.com";
delete person.age;

console.log(person);
