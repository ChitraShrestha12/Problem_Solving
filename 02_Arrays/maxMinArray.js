let arr = [4, 7, 1, 9, 2];
let min = arr[0];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}

console.log("Min:", min);
console.log("Max:", max);
