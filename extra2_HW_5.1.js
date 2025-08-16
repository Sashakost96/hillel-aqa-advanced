/* Task:
 Create a method to see whether the string is ALL CAPS.
 Examples (input -> output)
 "c" -> False
 "C" -> True
 "hello I AM DONALD" -> False
 "HELLO I AM DONALD" -> True
 "ACSKLDF]SgSKLDFJSKLDFJ" -> False
 "ACSKLDFJSGSKLDFJSKLDF]" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially
considered to be in ALL CAPS. */

const regexp = /[a-z]/;

function isAllCaps(inputStr) {
  return !regexp.test(inputStr);
}

console.log(isAllCaps("hello I AM DONALD"));

