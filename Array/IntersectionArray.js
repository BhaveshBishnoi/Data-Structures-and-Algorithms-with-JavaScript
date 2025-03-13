let arr1 = [1, 3, 4, 6, 7];
let arr2 = [2, 3, 5, 6, 8];

function IntersectionArray(arr1, arr2) {
  let i = 0,
    j = 0;
  let Intersection = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      Intersection.push(arr1[i]);
      i++;
      j++;
    }
  }
  return Intersection;
}

console.log(IntersectionArray(arr1, arr2));
