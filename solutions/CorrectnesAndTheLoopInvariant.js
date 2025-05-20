function insertionSort(ar) {
  for (i = 1; i < ar.length; i++) {
    var value = ar[i];
    var j = i - 1;
    while (j >= 0 && ar[j] > value) {
      ar[j + 1] = ar[j];
      j = j - 1;
    }
    ar[j + 1] = value;
  }
  return ar;
}

// console.log(insertionSort([4, 1, 3, 5, 6, 2]));
console.log(insertionSort([9, 8, 6, 7, 3, 5, 4, 1, 2]));
// console.log(insertionSort([7, 4 ,3, 5, 6, 2]));
