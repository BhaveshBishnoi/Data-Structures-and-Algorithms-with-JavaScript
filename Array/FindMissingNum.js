let arr = [1, 2, 3, 4, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1] - 1) {
    return console.log(arr[i] + 1, " is Missing Number");
  }
}
