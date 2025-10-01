let prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (i == 1 || i == num || j == 1 || j == num) {
      process.stdout.write("*");
    }else{
        process.stdout.write(' ');
    }
}
  process.stdout.write("\n");
}
