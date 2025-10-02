function sumRec(n) {
  if (n == 1) return 1;
  return n + sumRec(n - 1);
}
console.log(sumRec(5));
