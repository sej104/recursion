function mergeSort(array) {
  if (array.length === 1) return array;

  const middleIndex = array.length / 2;
  const leftArray = mergeSort(array.slice(0, middleIndex));
  const rightArray = mergeSort(array.slice(middleIndex, array.length));
  return merge(leftArray, rightArray);
}

function merge(firstArray, secondArray) {
  const mergedArray = [];
  while (firstArray.length && secondArray.length) {
    if (firstArray[0] <= secondArray[0]) {
      mergedArray.push(firstArray.shift());
    } else {
      mergedArray.push(secondArray.shift());
    }
  }
  if (!firstArray.length) {
    mergedArray.push(...secondArray);
  } else {
    mergedArray.push(...firstArray);
  }
  return mergedArray;
}

const array = [5, 7, 3, 1, 54, 23, 10, 99, 5, 2, 6];
console.log(mergeSort(array));
