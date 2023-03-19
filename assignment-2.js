//Merge Sort

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);

    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let i = 0;
  j = 0;
  const mergedArr = [];

  while (i < left.length || j < right.length) {
    if (left[i] > right[j]) {
      mergedArr.push(right[j]);

      j++;
      if (j === right.length && i < left.length) {
        while (i < left.length) {
          mergedArr.push(left[i]);
          i++;
        }
      }
    } else {
      mergedArr.push(left[i]);

      i++;
      if (i === left.length && j < right.length) {
        while (j < right.length) {
          mergedArr.push(right[j]);
          j++;
        }
      }
    }
  }
  return mergedArr;
}

console.log(mergeSort([12, 5, 1, 7, 4, 1, 0, 2, 5, 1000, 32, 44545, 2334]));
