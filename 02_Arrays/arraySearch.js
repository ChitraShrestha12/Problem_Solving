let target = 9;
function targetIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log("Target index:", targetIndex([4, 7, 1, 9, 2]));
