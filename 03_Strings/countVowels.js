let string = "chitra";
let vowelsCount = 0;
let vowelsLetter = "aeiou";

for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < vowelsLetter.length; j++) {
    if (string[i] === vowelsLetter[j]) {
      vowelsCount++;
    }
  }
}
console.log(vowelsCount);
