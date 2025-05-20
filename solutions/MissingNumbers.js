function missingNumbers(arr, brr) {
  // Write your code here

  const checkFrequency = ({ arr }) => {
    let frequency = {};
    arr.map((num) => {
      if (frequency[num]) {
        frequency[num] += 1;
      } else {
        frequency[num] = 1;
      }
    });
    return frequency;
  };

  let missing = [];

  const arrFreq = checkFrequency({ arr: arr });
  const brrFreq = checkFrequency({ arr: brr });


  brr.map((num) => {
    if (arrFreq[num] !== brrFreq[num] && !missing.includes(num)) {
      missing.push(num);
    }
  });

  return missing.sort((a, b) => a - b);
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3])); // [4, 6]
console.log(
  missingNumbers(
    [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
    [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
  )
); // [204, 205, 206]
