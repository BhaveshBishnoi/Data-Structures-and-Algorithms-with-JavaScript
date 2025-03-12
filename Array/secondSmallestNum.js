let arr = [1, 3, 11, 4, 5, 94, 2, 45, 6, 54, 91];

let smallest = 100;
let SecondSmallest = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    SecondSmallest = smallest;
    smallest = arr[i];
  }
  if (arr[i] < SecondSmallest && arr[i] > smallest) {
    SecondSmallest = arr[i];
  }
}

console.log(smallest, SecondSmallest);
