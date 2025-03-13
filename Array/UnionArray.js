let arr1 = [1, 3, 4, 6, 7];
let arr2 = [2, 3, 5, 6, 8];
function findUnion(arr1, arr2) {
  let i = 0,
    j = 0;
  let Union = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      Union.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      Union.push(arr2[j]);
      j++;
    } else {
      Union.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    Union.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    Union.push(arr2[j]);
    j++;
  }
  return Union;
}

console.log(findUnion(arr1, arr2));
