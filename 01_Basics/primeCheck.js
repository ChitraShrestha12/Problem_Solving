const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));
let isPrime = true;

if (num < 0) {
  console.log("Number must be positive!");
} else if (num == 0 || num == 1) {
  console.log("Given number either prime or not!");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Given number is prime");
  } else {
    console.log("Given number is not prime");
  }
}
