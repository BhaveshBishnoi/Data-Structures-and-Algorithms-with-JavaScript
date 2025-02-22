let arr1 = [2, 4, 5, 6, 7];
let arr2 = [1, 3, 8, 9, 10];
let arr = [];
for (let i = 0; i < arr1.length; i++) {
  arr.length = arr.length + 1;
  arr[i] = arr1[i];
}
console.log(arr);

for (let i = 0; i < arr2.length; i++) {
  arr[arr.length] = arr2[i];
}

console.log(arr);
