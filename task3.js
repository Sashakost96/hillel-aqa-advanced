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
        switch (`test${i}`) {
            case "test1":
                try {
                    divideNumbers(10, 0);
                } catch (error) {
                    console.error("Error:", error.message);
                } finally {
                    console.log("Work completed!\n");
                }
                break;
            case "test2":
                try {
                    divideNumbers(10, "2a");
                } catch (error) {
                    console.error("Error:", error.message);
                } finally {
                    console.log("Work completed!\n");
                }
                break;
            case "test3":
                try {
                    divideNumbers("a", 10);
                } catch (error) {
                    console.error("Error:", error.message);
                } finally {
                    console.log("Work completed!\n");
                }
                break;
            case "test4":
                try {
                    divideNumbers(10, false);
                } catch (error) {
                    console.error("Error:", error.message);
                } finally {
                    console.log("Work completed!\n");
                }
                break;
            case "test5":
                try {
                    divideNumbers(10);
                } catch (error) {
                    console.error("Error:", error.message);
                } finally {
                    console.log("Work completed!\n");
                }
                break;
            case "test6":
                try {
                    divideNumbers(25, -5);
                } catch (error) {
                    console.error("Error:", error.message);
                } finally {
                    console.log("Work completed!\n");
                }
                break;
        }
    }
}
runValidationTest();
