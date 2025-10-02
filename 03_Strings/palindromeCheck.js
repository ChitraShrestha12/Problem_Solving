function reverseString(str) {
  let orginalStr = str;
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev === orginalStr;
}
if (reverseString("madam")) {
  console.log(true);
} else {
  console.log(false);
}
