function mergeSort(array) {
  if (!array.length) return null;
  if (array.length === 1) return array;

  const middleIndex = array.length / 2;
  const leftArray = mergeSort(array.slice(0, middleIndex));
  const rightArray = mergeSort(array.slice(middleIndex, array.length));

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  const mergedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) mergedArray.push(leftArray.shift());
    else mergedArray.push(rightArray.shift());
  }

  return mergedArray.concat(leftArray, rightArray);
}

const array = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(array));
