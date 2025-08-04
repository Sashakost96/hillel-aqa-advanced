const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

const resultOutputCb = (positiveCount, negativeCount, zeroCount) => {
  console.log(
    `\nNumber of positive numbers: ${positiveCount}\nNumber of negative numbers: ${negativeCount}\nNumber of zero numbers: ${zeroCount}`
  );
};

function getNumbersCount(numbers, resultOutputCb) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeCount++;
    } else if (numbers[i] > 0) {
      positiveCount++;
    } else {
      zeroCount++;
    }
  }
  return resultOutputCb(positiveCount, negativeCount, zeroCount);
}

getNumbersCount(numbers, resultOutputCb);
