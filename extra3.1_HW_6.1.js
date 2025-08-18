/* Task:
Given 2 strings, "a" and "b", return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.
The strings will not be the same length, but they may be empty ( zero length).
Hint for Rusers:
The length of string is not always the same as the number of characters
For example: (Input1, Input2) -> output
("1", "22") --> "1221"
("22", "1") -→> "1221"
ShortLongShort.solution("1", "22"); // returns "1221"
ShortLongShort.solution("22", "1"); // returns "1221" */
//   let firstStr = "1";
//   let secondStr = "22 22";

function shortLongShort(str1, str2) {
  let resultedStr = "";

  if (str1.length > str2.length) {
    resultedStr = resultedStr.concat(str2, str1, str2);
  } else {
    resultedStr = resultedStr.concat(str1, str2, str1);
  }
  return resultedStr;
}
console.log(shortLongShort("22", "1"));
