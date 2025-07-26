function handleNum(num, isEvenCb, isOddCb) {
    return num % 2 === 0 ? handleEven() : handleOdd();
}

const handleEven = () => "Number is even";

const handleOdd = () => "Number is odd";

console.log(handleNum(22, handleEven, handleOdd));

console.log(handleNum(33, handleEven, handleOdd));
