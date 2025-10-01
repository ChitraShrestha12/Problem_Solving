const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter the value of a: "));
let num2 = parseInt(prompt("Enter the value of b: "));

function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("Swap:", a, b);
}
swapNumbers(num1,num2)
