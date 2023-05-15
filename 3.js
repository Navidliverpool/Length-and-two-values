function alternate(n, firstValue, secondValue) {
  let arr = [];
  console.log("n", n);
  if (n != null && n > 0) {
    for (let i = 0; i < n; i++) {
      if (i % 2 == 0) {
        arr.push(firstValue);
      }
      if (i % 2 > 0) {
        arr.push(secondValue);
      }
    }
  }
  console.log("arr.length:", arr.length);
  return arr;
}
console.log(alternate(5, "blue", "red"));
