const numberOutput = (num) => console.log(num);

function valueDecreaser(num) {
  while (num >= 0) {
    numberOutput(num--);
    num--;
  }
}
valueDecreaser(5);
