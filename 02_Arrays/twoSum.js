let arr = [2, 7, 11, 15];
let target = 9;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; i < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(i, j);
    }
  }
}
