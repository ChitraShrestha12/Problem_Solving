function reverseRec(str, i = 0) {
  if (i==str.length) return "";
  return reverseRec(str, i + 1) + str[i];
}
console.log(reverseRec("chitra"));
