function divideNumbers(numerator, denominator) {
  let outputResult = console.log(
    `${numerator} / ${denominator} = ${numerator / denominator}`
  );

  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Only numbers allowed as operands!");
  }
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed!!");
  }

  return outputResult;
}

function runValidationTest() {
  for (let i = 1; i <= 6; i++) {
    try {
      switch (`test${i}`) {
        case "test1":
          divideNumbers(10, 0);
          break;
        case "test2":
          divideNumbers(10, "2a");
          break;
        case "test3":
          divideNumbers("a", 10);
          break;
        case "test4":
          divideNumbers(10, false);

          break;
        case "test5":
          divideNumbers(10);

          break;
        case "test6":
          divideNumbers(25, -5);

          break;
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      console.log("Work completed!\n");
    }
  }
}
runValidationTest();
