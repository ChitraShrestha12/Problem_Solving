const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number: "))
let fact=1
for(let i=1;i<=num;i++){
    fact*=i
}
console.log(fact);
