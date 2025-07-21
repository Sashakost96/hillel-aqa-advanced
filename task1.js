
function calcRectangleAreaDeclarF(width, height) {
    const resultArea = width * height;
    return console.log(` The Area of rectangle with width ${width} and height ${height} = ${resultArea}`);
}

const calcRectangleAreaExprF = function (width, height) {
    const resultArea = width * height;
    return console.log(` The Area of rectangle with width ${width} and height ${height} = ${resultArea}`);
}

const calcRectangleAreaArrowF = (width, height) => {
    const resultArea = width * height;
    return console.log(` The Area of rectangle with width ${width} and height ${height} = ${resultArea}`);
}

calcRectangleAreaDeclarF(3, 5);
calcRectangleAreaExprF(5, 10);
calcRectangleAreaArrowF(7, 5);