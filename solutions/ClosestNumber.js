function closestNumbers(arr) {
  // Write your code here

  arr = arr.sort((a, b) => a - b);

  let result = [];
  let minDiff = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    const diff = Math.abs(current - next);

    if (diff < minDiff) { //less than old value
      minDiff = diff;
      result = [current, next];
    } else if (diff === minDiff) { //if same than just add into result
      result.push(current, next);
    }
  }

  return result;
}

console.log(closestNumbers([-5, 15, 25, 71, 63])); //63 71
console.log(
  closestNumbers([
    -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
    266854,
  ])
); //-20 30
console.log(
  closestNumbers([
    -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
    266854, -520, -470,
  ])
); //-520 -470 -20 30
