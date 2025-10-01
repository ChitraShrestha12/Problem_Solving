const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the digits: "));

if (num < 0) {
  console.log("Number must be positive!");
} else {
  function checkPalindrome(num) {
    let orginalNum = num
    let rev = 0;
    while (num != 0) {
      let rem = num % 10;
      rev = rev * 10 + rem;
      num = Math.trunc(num / 10);
    }
    return rev===orginalNum
  }
  if (checkPalindrome(num))
    console.log("Given number is palindrome");
  else console.log("Given number is not palindrome");
}
