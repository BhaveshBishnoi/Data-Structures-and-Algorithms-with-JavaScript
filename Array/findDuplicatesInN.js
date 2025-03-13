let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8];

let findDuplicate = (arr) => {
  let duplicate = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 == arr[i + 1]) {
    } else {
      return (duplicate = arr[i]);
    }
  }
  return duplicate;
};
console.log(findDuplicate(arr));
