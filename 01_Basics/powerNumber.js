const prompt = require("prompt-sync")();
let base = parseInt(prompt("Enter a base: "));
let power = parseInt(prompt("Enter a power: "));
if (base < 1 || power < 1) {
  console.log("Input must be postive number");
}else{
    let result = 1
    for(let i=1;i<=power;i++){
       result*=base
    }
    console.log(result);
    
}
