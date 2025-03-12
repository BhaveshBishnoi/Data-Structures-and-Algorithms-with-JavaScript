let arr = [21, 97, 43, 49, 53, 52, 85, 65, 74, 86, 13, 41];
let largest = 0;
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
    console.log(largest);
  }
}
