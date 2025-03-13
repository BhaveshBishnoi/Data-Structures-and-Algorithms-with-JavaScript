// Move all negative numbers to the left and positives to the right.

let arr = [1, 2, 5, -3, -2, 7, -5, 9, -1, -4];

function moveNegativePositive(arr) {
  function add(n, arr) {
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = n;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] == n) {
        arr.splice(i, 1);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      add(arr[i], arr);
    }
  }

  return arr;
}

moveNegativePositive(arr);
console.log(arr);
