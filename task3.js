const car1 = {
  brand1: "Dodge",
  model1: "Challenger",
  year1: 2025,
};

const car2 = {
  brand2: "Daewoo",
  model2: "Lanos",
  year2: 2017,
};

const car3 = { ...car1, ...car2 };
console.log(car3);
