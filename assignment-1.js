//1. Iteration

function fibs(n) {
  const arr = [];

  if (n == 0) return arr;
  for (let i = 0; i <= n - 1; i++) {
    if (i === 0) arr.push(0);
    else if (i === 1) arr.push(1);
    else arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

//2. Recursive

function fibsRec(n) {
  if (n === 0) return [];
  //base of recursion
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    const arr = fibsRec(n - 1);
    const firstN = arr[arr.length - 2];
    const secondN = arr[arr.length - 1];
    const newN = firstN + secondN;
    arr.push(newN);
    return arr;
  }
}
