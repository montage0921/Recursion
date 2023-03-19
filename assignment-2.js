//Merge Sort

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);

    let right = arr.slice(middle);
  }
}

console.log(mergeSort([12, 5, 1]));

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
  console.log(mergedArr);
}

merge([2], [3]);

// left = 12;
// (right = 5), 1;
// rightSorted=mergeSort(5, 1);
// left = 5;
// right = 1;
// sortedArr = 1 5;
// rightSorted=1 5
