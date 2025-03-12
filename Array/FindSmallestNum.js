let arr = [21, 97, 43, 49, 53, 52, 85, 65, 74, 86, 13, 41];

let smallest = Infinity;
for (let i = 0; i < arr.length; i++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
}
console.log(smallest);
