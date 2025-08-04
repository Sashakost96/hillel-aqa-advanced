const users = [
  { fName: "Harry", lName: "Potter", age: 7, email: "harry777@hogwarts.com" },
  {
    fName: "Hermione",
    lName: "Granger",
    age: 8,
    email: "h.granger@hogwarts.com",
  },
  {
    fName: "Ron",
    lName: "Weasley",
    age: 7,
    email: "ron-dragonkiller@hogwarts.com",
  },
];
console.log(`Our top ${users.length} students are: `);
for (const { fName, lName, age, email } of users) {
  console.log(
    `\n ${fName} ${lName} who is ${age} years old. You can contact student by email: ${email}\n`
  );
}
