function findGDC(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
    console.log(a, b, temp);
  }
  return a;
}

console.log(findGDC(10, 3));
