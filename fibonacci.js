function fibs(num) {
  const arr = [0, 1];
  if (num <= 0) return -1;
  if (num === 1) return arr.slice(0, 1);

  for (let i = 1; i < num - 1; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr;
}

function fibsRec(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibsRec(num - 1) + fibsRec(num - 2);
}
console.log(fibsRec(6));
