let arr = [1, 4, 20, 3, 10, 5];
let k = 5;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum === k) {
      isFound = true;
      break;
    }
  }
}

console.log(isFound);
