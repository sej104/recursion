function fibs(num) {
  if (num <= 0) return null;
  if (num === 1) return [0];

  const array = [0, 1];
  for (let i = 1; i < num - 1; i++) {
    array.push(array[i] + array[i - 1]);
  }
  return array;
}

function fibsRec(num) {
  if (num <= 0) return null;
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const array = fibsRec(num - 1);
  const length = array.length;
  array.push(array[length - 1] + array[length - 2]);
  return array;
}

console.log(fibs(8));
console.log(fibsRec(8));
