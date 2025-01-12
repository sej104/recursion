function fibs(num) {
  const arr = [0, 1];
  if (num <= 0) return -1;
  if (num === 1) return arr.slice(0, 1);

  for (let i = 1; i < num - 1; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr;
}
console.log(fibs(1));
