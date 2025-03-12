let arr = [21, 97, 43, 49, 53, 52, 85, 65, 74, 86, 13, 41];
let largest = 0,
  secondLargest = 0;
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    secondLargest = largest;
    largest = arr[i];
  }
  if (arr[i] > secondLargest && largest != arr[i]) {
    secondLargest = arr[i];
  }
}

console.log(largest, secondLargest);
