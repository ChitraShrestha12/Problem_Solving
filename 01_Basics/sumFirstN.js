const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number: "))
let sum = 0
for(let i =1;i<=num;i++){
    sum+=i
}
console.log(sum);

