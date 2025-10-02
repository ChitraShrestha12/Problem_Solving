let string = "hello";
string = string.toLowerCase();
let removeVowels = "";
let vowelsLetter = "aeiou";

for (let i = 0; i < string.length; i++) {
  let isVowels = false;
  for (let j = 0; j < vowelsLetter.length; j++) {
    if (string[i] === vowelsLetter[j]) {
      isVowels = true;
      break;
    }
  }
  if(!isVowels){
    removeVowels+=string[i]
  }
}
console.log(removeVowels);
