let string = "I Love You";
string = string.toLowerCase();
let count = 1;

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") count++;
}
console.log(count);
