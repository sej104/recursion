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
  if (num <= 0) return null;
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const array = fibsRec(num - 1);
  array.push(array[num - 2] + array[num - 3]);
  return array;
}

console.log(fibs(8));
console.log(fibsRec(8));
