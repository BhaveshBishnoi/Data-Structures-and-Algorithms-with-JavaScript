let arr = [1, 3, 6, 33, 5, 88, 7, 4, 9, 11, 36, 94, 34, 99];
let temp;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}

// console.log(arr);
