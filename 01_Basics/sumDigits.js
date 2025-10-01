const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number: "))
let sum = 0

while(num>0){
    let lastDigit = num%10
    sum+=lastDigit
    num = Math.trunc(num/10)
}
console.log("The sum of given digits is:",sum);
