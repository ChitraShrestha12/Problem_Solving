function factorialRec(n) {
  if (n === 0 || n == 1) return 1;
  return n * factorialRec(n - 1);
}
console.log(factorialRec(4));

