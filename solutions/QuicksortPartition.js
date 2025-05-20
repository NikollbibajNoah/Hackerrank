function quickSort(arr) {
    // Write your code here

    const pivot = arr[0];
    const left = [];
    const right = [];
    const equal = [];

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (value < pivot) {
            left.push(value);
        } else if (value > pivot) {
            right.push(value);
        } else if (value === pivot) {
            equal.push(value);
        }
    }

    return [...left, ...equal, ...right];
}

console.log(quickSort([4, 5, 3, 7, 2])); // [3 2 4 5 7]