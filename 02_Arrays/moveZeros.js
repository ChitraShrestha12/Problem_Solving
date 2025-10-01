let arr = [0, 2, 1, 0, 3];
let i = arr.length-1;
let j = arr.length - 1;

while (i >=0) {
  if (arr[i] === 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--
  }
  i--
}
console.log(arr);

