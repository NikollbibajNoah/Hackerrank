function twoArrays(k, A, B) {
    // Write your code here

    //Sort both arrays
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO';
        }
    }

    return 'YES';
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); // YES
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])); // No
console.log(twoArrays(10, [7, 6, 8, 4, 2], [5, 2, 6, 3, 1])); // No